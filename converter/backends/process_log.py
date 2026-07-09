import os
import re
import subprocess
from pathlib import Path


ANSI_RE = re.compile(r"\x1b\[[0-?]*[ -/]*[@-~]")
BRACKET_PROGRESS_RE = re.compile(r"^\[[#\s]+\]\s*\d+%$")


class TerminalLogFilter:
    def __init__(self) -> None:
        self.pending = ""
        self.carriage_line = ""

    def feed(self, text: str) -> str:
        text = ANSI_RE.sub("", text)
        output: list[str] = []
        for char in text:
            if char == "\r":
                self.carriage_line = self.pending
                self.pending = ""
            elif char == "\n":
                line = self.pending or self.carriage_line
                self._append_line(output, line)
                self.pending = ""
                self.carriage_line = ""
            elif char == "\b":
                self.pending = self.pending[:-1]
            else:
                self.pending += char
        return "".join(output)

    def flush(self) -> str:
        line = self.pending or self.carriage_line
        self.pending = ""
        self.carriage_line = ""
        if not line:
            return ""
        output: list[str] = []
        self._append_line(output, line)
        return "".join(output)

    def _append_line(self, output: list[str], line: str) -> None:
        line = line.rstrip()
        if not line:
            output.append("\n")
            return
        if BRACKET_PROGRESS_RE.match(line.strip()):
            return
        output.append(line + "\n")


def run_and_log(cmd: list[str], log_path: Path, stdin_text: str | None = None) -> None:
    log_path.parent.mkdir(parents=True, exist_ok=True)
    with log_path.open("w", encoding="utf-8") as log:
        log.write("+ " + " ".join(cmd) + "\n")
        if stdin_text:
            log.write(stdin_text)
        log.flush()
        process = subprocess.Popen(
            cmd,
            stdin=subprocess.PIPE if stdin_text else None,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
        )
        if stdin_text and process.stdin is not None:
            process.stdin.write(stdin_text.encode("utf-8"))
            process.stdin.close()
        assert process.stdout is not None

        log_filter = TerminalLogFilter()
        while True:
            chunk = os.read(process.stdout.fileno(), 4096)
            if not chunk:
                break
            text = log_filter.feed(chunk.decode("utf-8", errors="replace"))
            if text:
                print(text, end="")
                log.write(text)
                log.flush()

        tail = log_filter.flush()
        if tail:
            print(tail, end="")
            log.write(tail)
            log.flush()

        code = process.wait()
        if code != 0:
            error = subprocess.CalledProcessError(code, cmd)
            raise RuntimeError(f"command failed with exit code {code}, see log: {log_path}") from error
