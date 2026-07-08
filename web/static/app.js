const form = document.querySelector("#jobForm");
const modelFile = document.querySelector("#modelFile");
const modelName = document.querySelector("#modelName");
const submitButton = document.querySelector("#submitButton");
const serverState = document.querySelector("#serverState");
const jobStatus = document.querySelector("#jobStatus");
const jobId = document.querySelector("#jobId");
const jobModel = document.querySelector("#jobModel");
const jobDone = document.querySelector("#jobDone");
const logView = document.querySelector("#logView");
const refreshButton = document.querySelector("#refreshButton");
const downloadButton = document.querySelector("#downloadButton");
const jobsList = document.querySelector("#jobsList");
const reloadJobs = document.querySelector("#reloadJobs");

let activeJobId = "";
let pollTimer = null;

modelFile.addEventListener("change", () => {
  if (modelName.value.trim() || !modelFile.files.length) return;
  const name = modelFile.files[0].name.replace(/\.[^.]+$/, "");
  modelName.value = name.replace(/[^A-Za-z0-9_.-]+/g, "_");
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  submitButton.textContent = "上传中";

  try {
    const body = new FormData(form);
    const response = await fetch("/api/jobs", { method: "POST", body });
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    setActiveJob(data.job_id);
    await refreshJob();
    await refreshJobsList();
  } catch (error) {
    logView.textContent = String(error);
    setStatus("failed");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "开始转换";
  }
});

refreshButton.addEventListener("click", () => {
  if (activeJobId) refreshJob();
});

reloadJobs.addEventListener("click", refreshJobsList);

async function checkHealth() {
  try {
    const response = await fetch("/api/health");
    if (!response.ok) throw new Error("bad health");
    serverState.textContent = "API 在线";
    serverState.classList.add("ok");
  } catch {
    serverState.textContent = "API 离线";
    serverState.classList.remove("ok");
  }
}

function setActiveJob(id) {
  activeJobId = id;
  jobId.textContent = id;
  downloadButton.href = "#";
  downloadButton.classList.add("disabled");
  downloadButton.setAttribute("aria-disabled", "true");

  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(refreshJob, 2000);
}

async function refreshJob() {
  if (!activeJobId) return;
  const response = await fetch(`/api/jobs/${activeJobId}`);
  if (!response.ok) {
    logView.textContent = await response.text();
    setStatus("failed");
    return;
  }

  const job = await response.json();
  renderJob(job);
  await refreshLog(activeJobId);

  if (job.status === "success" || job.status === "failed") {
    if (pollTimer) clearInterval(pollTimer);
    pollTimer = null;
  }
}

async function refreshLog(id) {
  const response = await fetch(`/api/jobs/${id}/log`);
  if (!response.ok) return;
  const text = await response.text();
  logView.textContent = text || "暂无日志";
  logView.scrollTop = logView.scrollHeight;
}

function renderJob(job) {
  setStatus(job.status || "unknown");
  jobId.textContent = job.job_id || activeJobId || "-";
  jobModel.textContent = job.model_name || "-";
  jobDone.textContent = job.completed_at || "-";

  if (job.status === "success") {
    downloadButton.href = `/api/jobs/${job.job_id || activeJobId}/download`;
    downloadButton.classList.remove("disabled");
    downloadButton.removeAttribute("aria-disabled");
  }
}

function setStatus(status) {
  jobStatus.textContent = statusText(status);
  jobStatus.className = `status-badge ${status || "idle"}`;
}

function statusText(status) {
  const names = {
    queued: "排队中",
    running: "转换中",
    success: "已完成",
    failed: "失败",
    unknown: "未知",
    idle: "未开始",
  };
  return names[status] || status || "未开始";
}

async function refreshJobsList() {
  const response = await fetch("/api/jobs");
  if (!response.ok) return;
  const data = await response.json();
  jobsList.innerHTML = "";

  for (const job of data.jobs.slice(0, 8)) {
    const row = document.createElement("div");
    row.className = "job-row";

    const id = document.createElement("div");
    id.className = "job-id";
    id.textContent = job.job_id;

    const status = document.createElement("div");
    status.className = `status-badge ${job.status || "unknown"}`;
    status.textContent = statusText(job.status);

    const time = document.createElement("div");
    time.className = "muted";
    time.textContent = job.completed_at || job.created_at || "-";

    const button = document.createElement("button");
    button.className = "secondary-button";
    button.type = "button";
    button.textContent = "查看";
    button.addEventListener("click", () => {
      setActiveJob(job.job_id);
      refreshJob();
    });

    row.append(id, status, time, button);
    jobsList.append(row);
  }

  if (!data.jobs.length) {
    jobsList.innerHTML = '<div class="muted">暂无任务</div>';
  }
}

checkHealth();
refreshJobsList();
