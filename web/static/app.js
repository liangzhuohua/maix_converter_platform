(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const messages = {
    "zh-CN": {
      "app.subtitle": "MaixCam / MaixCam2 模型转换工作台",
      "app.language": "语言",
      "actions.theme": "主题",
      "actions.darkMode": "深色",
      "actions.lightMode": "浅色",
      "actions.startConvert": "开始转换",
      "actions.refresh": "刷新",
      "actions.cancel": "取消任务",
      "actions.downloadResult": "下载结果",
      "actions.copyLog": "复制日志",
      "actions.downloadLog": "下载日志",
      "actions.clearDisplay": "清空显示",
      "actions.autoScroll": "自动滚动",
      "actions.updateList": "更新列表",
      "actions.view": "查看",
      "actions.delete": "删除",
      "server.checking": "API 检查中",
      "server.online": "API 在线",
      "server.offline": "API 离线",
      "server.reconnecting": "API 重连中",
      "jobForm.eyebrow": "新建任务",
      "jobForm.title": "转换任务",
      "jobForm.filesGroup": "输入文件",
      "jobForm.targetGroup": "目标平台",
      "jobForm.paramsGroup": "转换参数",
      "jobForm.modelFile": "模型文件",
      "jobForm.modelChoose": "选择模型文件",
      "jobForm.modelHelp": "支持 .pt / .onnx",
      "jobForm.datasetFile": "量化数据集",
      "jobForm.datasetChoose": "选择数据集",
      "jobForm.datasetHelp": "上传包含量化图片的 .zip 文件",
      "jobForm.dragHint": "点击选择，或拖拽文件到这里",
      "jobForm.target": "目标设备",
      "jobForm.yoloVersion": "YOLO 版本",
      "jobForm.imagesNum": "图片数量",
      "jobForm.fastMode": "快速模式",
      "jobForm.width": "宽度",
      "jobForm.height": "高度",
      "upload.progressAria": "上传进度",
      "upload.waiting": "等待上传",
      "upload.uploading": "正在上传 {percent}%",
      "upload.failed": "上传失败",
      "upload.done": "上传完成，转换任务已创建",
      "monitor.eyebrow": "实时状态",
      "monitor.title": "任务监控",
      "monitor.model": "模型",
      "monitor.doneAt": "完成时间",
      "monitor.config": "配置",
      "status.notStarted": "未开始",
      "status.queued": "排队中",
      "status.running": "转换中",
      "status.success": "已完成",
      "status.failed": "失败",
      "status.cancelled": "已取消",
      "status.unknown": "未知",
      "stage.prepare": "数据集准备",
      "stage.export": "ONNX 导出",
      "stage.prebuild": "任务准备",
      "stage.convert": "模型转换",
      "stage.package": "打包结果",
      "log.waiting": "等待任务输出...",
      "log.cleared": "日志已清空，等待新输出...",
      "log.copied": "日志已复制",
      "log.copyFailed": "复制失败，请手动选择日志",
      "log.connectError": "日志连接异常",
      "jobs.eyebrow": "历史记录",
      "jobs.title": "最近任务",
      "jobs.count": "{visible} / {total} 个任务",
      "jobs.empty": "暂无任务",
      "jobs.noMatch": "没有匹配的任务",
      "jobs.viewing": "正在查看任务 {jobId}",
      "filter.all": "全部",
      "filter.running": "运行中",
      "filter.success": "已完成",
      "filter.failed": "失败",
      "filter.cancelled": "已取消",
      "validation.model": "请选择 .pt 或 .onnx 模型文件",
      "validation.dataset": "请上传 .zip 量化数据集",
      "validation.dragOneFile": "每次只能拖入一个文件",
      "validation.size": "宽度和高度必须是 32 到 4096 之间的 32 倍数",
      "error.uploadFailed": "上传失败",
      "error.network": "网络请求失败",
      "error.noCurrentJob": "当前没有任务",
      "confirm.cancel": "确定取消任务 {jobId}？",
      "confirm.delete": "删除任务 {jobId}？任务目录和转换结果都会被删除。",
      "toast.jobCreated": "转换任务已创建",
      "toast.jobCancelled": "任务已取消",
      "toast.jobDeleted": "任务已删除",
      "config.images": "{count} 张",
      "config.fast": "快速",
      "config.full": "完整",
    },
    "en-US": {
      "app.subtitle": "MaixCam / MaixCam2 model conversion workspace",
      "app.language": "Language",
      "actions.theme": "Theme",
      "actions.darkMode": "Dark",
      "actions.lightMode": "Light",
      "actions.startConvert": "Start conversion",
      "actions.refresh": "Refresh",
      "actions.cancel": "Cancel job",
      "actions.downloadResult": "Download result",
      "actions.copyLog": "Copy log",
      "actions.downloadLog": "Download log",
      "actions.clearDisplay": "Clear view",
      "actions.autoScroll": "Auto-scroll",
      "actions.updateList": "Update list",
      "actions.view": "View",
      "actions.delete": "Delete",
      "server.checking": "Checking API",
      "server.online": "API online",
      "server.offline": "API offline",
      "server.reconnecting": "Reconnecting API",
      "jobForm.eyebrow": "New job",
      "jobForm.title": "Conversion job",
      "jobForm.filesGroup": "Input files",
      "jobForm.targetGroup": "Target platform",
      "jobForm.paramsGroup": "Conversion parameters",
      "jobForm.modelFile": "Model file",
      "jobForm.modelChoose": "Choose model file",
      "jobForm.modelHelp": "Supports .pt / .onnx",
      "jobForm.datasetFile": "Calibration dataset",
      "jobForm.datasetChoose": "Choose dataset",
      "jobForm.datasetHelp": "Upload a .zip file with calibration images",
      "jobForm.dragHint": "Click to choose, or drag a file here",
      "jobForm.target": "Target device",
      "jobForm.yoloVersion": "YOLO version",
      "jobForm.imagesNum": "Image count",
      "jobForm.fastMode": "Fast mode",
      "jobForm.width": "Width",
      "jobForm.height": "Height",
      "upload.progressAria": "Upload progress",
      "upload.waiting": "Waiting to upload",
      "upload.uploading": "Uploading {percent}%",
      "upload.failed": "Upload failed",
      "upload.done": "Upload complete, conversion job created",
      "monitor.eyebrow": "Live status",
      "monitor.title": "Job monitor",
      "monitor.model": "Model",
      "monitor.doneAt": "Completed",
      "monitor.config": "Config",
      "status.notStarted": "Not started",
      "status.queued": "Queued",
      "status.running": "Converting",
      "status.success": "Completed",
      "status.failed": "Failed",
      "status.cancelled": "Cancelled",
      "status.unknown": "Unknown",
      "stage.prepare": "Prepare dataset",
      "stage.export": "Export ONNX",
      "stage.prebuild": "Prepare job",
      "stage.convert": "Convert model",
      "stage.package": "Package result",
      "log.waiting": "Waiting for job output...",
      "log.cleared": "Log cleared. Waiting for new output...",
      "log.copied": "Log copied",
      "log.copyFailed": "Copy failed. Select the log manually.",
      "log.connectError": "Log connection error",
      "jobs.eyebrow": "History",
      "jobs.title": "Recent jobs",
      "jobs.count": "{visible} / {total} jobs",
      "jobs.empty": "No jobs yet",
      "jobs.noMatch": "No matching jobs",
      "jobs.viewing": "Viewing job {jobId}",
      "filter.all": "All",
      "filter.running": "Running",
      "filter.success": "Completed",
      "filter.failed": "Failed",
      "filter.cancelled": "Cancelled",
      "validation.model": "Choose a .pt or .onnx model file",
      "validation.dataset": "Upload a .zip calibration dataset",
      "validation.dragOneFile": "Drop one file at a time",
      "validation.size": "Width and height must be multiples of 32 between 32 and 4096",
      "error.uploadFailed": "Upload failed",
      "error.network": "Network request failed",
      "error.noCurrentJob": "No current job",
      "confirm.cancel": "Cancel job {jobId}?",
      "confirm.delete": "Delete job {jobId}? The job directory and conversion result will be removed.",
      "toast.jobCreated": "Conversion job created",
      "toast.jobCancelled": "Job cancelled",
      "toast.jobDeleted": "Job deleted",
      "config.images": "{count} images",
      "config.fast": "Fast",
      "config.full": "Full",
    },
  };

  const state = {
    currentJobId: "",
    currentJob: null,
    currentFilter: "all",
    jobs: [],
    socket: null,
    logText: "",
    logPlaceholderKey: "log.waiting",
    language: "zh-CN",
    serverState: "checking",
    uploadPercent: 0,
    uploadTextKey: "upload.waiting",
    uploadTextParams: {},
  };

  const stageOrder = ["prepare", "export", "prebuild", "convert", "package"];
  const stageMap = {
    prepare_done: "prepare",
    exporting: "export",
    export_done: "export",
    prebuilding: "prebuild",
    prebuild_done: "prebuild",
    pulsar2: "convert",
    pulsar2_done: "convert",
    tpumlir: "convert",
    tpumlir_done: "convert",
    packaging: "package",
    done: "package",
  };

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    restoreTheme();
    restoreLanguage();
    bindEvents();
    applyI18n();
    updateThemeButton();
    setServerState("checking");
    checkHealth();
    loadJobs();
    subscribeJobs();
  }

  function bindEvents() {
    $("languageSelect").addEventListener("change", (event) => setLanguage(event.target.value));
    $("themeButton").addEventListener("click", toggleTheme);
    $("jobForm").addEventListener("submit", submitJob);
    $("modelFile").addEventListener("change", updateModelName);
    $("datasetFile").addEventListener("change", updateDatasetFileHelp);
    bindUploadDropZone("modelFile", /\.(pt|onnx)$/i, "validation.model", updateModelName);
    bindUploadDropZone("datasetFile", /\.zip$/i, "validation.dataset", updateDatasetFileHelp);
    $("refreshButton").addEventListener("click", refreshCurrentJob);
    $("reloadJobs").addEventListener("click", loadJobs);
    $("cancelJobButton").addEventListener("click", cancelCurrentJob);
    $("logCopyBtn").addEventListener("click", copyLog);
    $("logDownloadBtn").addEventListener("click", downloadLog);
    $("logClearBtn").addEventListener("click", () => clearLog());
    $("jobsFilter").addEventListener("click", changeFilter);
  }

  function restoreTheme() {
    const theme = localStorage.getItem("maix_converter_theme") || "light";
    document.documentElement.dataset.theme = theme;
  }

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("maix_converter_theme", next);
    updateThemeButton();
  }

  function updateThemeButton() {
    const dark = document.documentElement.dataset.theme === "dark";
    $("themeButton").textContent = t(dark ? "actions.lightMode" : "actions.darkMode");
  }

  function restoreLanguage() {
    const saved = localStorage.getItem("maix_converter_language");
    const browser = (navigator.language || "zh-CN").toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
    state.language = messages[saved] ? saved : browser;
    $("languageSelect").value = state.language;
  }

  function setLanguage(language) {
    if (!messages[language]) return;
    state.language = language;
    localStorage.setItem("maix_converter_language", language);
    applyI18n();
    updateThemeButton();
    setServerState(state.serverState);
    updateModelFileHelp();
    updateDatasetFileHelp();
    updateUploadDisplay();
    if (state.currentJob) {
      renderJob(state.currentJob);
    } else {
      setInitialJobStatus();
    }
    renderJobs();
    if (!state.logText) $("logView").textContent = t(state.logPlaceholderKey);
  }

  function applyI18n() {
    document.documentElement.lang = state.language;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      if (node.id === "jobStatus" && state.currentJob) return;
      if (node.id === "logView" && state.logText) return;
      if (node.id === "uploadProgressText") return;
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
    });
  }

  function t(key, params = {}) {
    const table = messages[state.language] || messages["zh-CN"];
    const fallback = messages["zh-CN"][key] || key;
    return String(table[key] || fallback).replace(/\{(\w+)\}/g, (_, name) => {
      return params[name] ?? "";
    });
  }

  async function checkHealth() {
    try {
      const res = await fetch("/api/health", { cache: "no-store" });
      if (!res.ok) throw new Error(res.statusText);
      setServerState("online");
    } catch (error) {
      setServerState("offline");
    }
  }

  function setServerState(kind) {
    state.serverState = kind;
    const node = $("serverState");
    const className = kind === "reconnecting" ? "checking" : kind;
    node.className = `server-state ${className}`;
    node.textContent = t(`server.${kind}`);
  }

  function setInitialJobStatus() {
    $("jobStatus").className = "status idle";
    $("jobStatus").textContent = t("status.notStarted");
  }

  function resetJobDisplay() {
    state.currentJob = null;
    $("jobId").textContent = "-";
    $("jobModel").textContent = "-";
    $("jobDone").textContent = "-";
    $("jobConfig").textContent = "-";
    $("jobError").hidden = true;
    $("jobError").textContent = "";
    $("cancelJobButton").hidden = true;
    $("downloadButton").classList.add("disabled");
    $("downloadButton").setAttribute("aria-disabled", "true");
    $("downloadButton").href = "#";
    renderStages("", "unknown");
    setInitialJobStatus();
  }

  function updateModelName() {
    const file = $("modelFile").files[0];
    if (!file) {
      updateModelFileHelp();
      return;
    }
    $("modelName").value = file.name.replace(/\.[^.]+$/, "");
    updateModelFileHelp();
  }

  function updateModelFileHelp() {
    const file = $("modelFile").files[0];
    $("modelFileHelp").textContent = file ? file.name : t("jobForm.modelHelp");
  }

  function updateDatasetFileHelp() {
    const file = $("datasetFile").files[0];
    $("datasetFileHelp").textContent = file ? file.name : t("jobForm.datasetHelp");
  }

  function bindUploadDropZone(inputId, pattern, errorKey, onChange) {
    const input = $(inputId);
    const field = input.closest(".upload-field");
    if (!field) return;

    ["dragenter", "dragover"].forEach((eventName) => {
      field.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
        field.classList.add("drag-over");
      });
    });

    ["dragleave", "dragend", "drop"].forEach((eventName) => {
      field.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (eventName !== "dragenter") field.classList.remove("drag-over");
      });
    });

    field.addEventListener("drop", (event) => {
      const files = Array.from(event.dataTransfer?.files || []);
      if (files.length !== 1) {
        showToast(t("validation.dragOneFile"));
        return;
      }
      const file = files[0];
      if (!pattern.test(file.name)) {
        showToast(t(errorKey));
        return;
      }
      const transfer = new DataTransfer();
      transfer.items.add(file);
      input.files = transfer.files;
      onChange();
    });
  }

  function validateForm() {
    const model = $("modelFile").files[0];
    const dataset = $("datasetFile").files[0];
    if (!model || !/\.(pt|onnx)$/i.test(model.name)) {
      throw new Error(t("validation.model"));
    }
    if (!dataset || !/\.zip$/i.test(dataset.name)) {
      throw new Error(t("validation.dataset"));
    }
    for (const id of ["imgszWidth", "imgszHeight"]) {
      const value = Number($(id).value);
      if (!Number.isInteger(value) || value < 32 || value > 4096 || value % 32 !== 0) {
        throw new Error(t("validation.size"));
      }
    }
  }

  function submitJob(event) {
    event.preventDefault();
    try {
      validateForm();
    } catch (error) {
      showToast(error.message);
      return;
    }

    const data = new FormData($("jobForm"));
    const submitButton = $("submitButton");
    submitButton.disabled = true;
    setUploadProgress(0, "upload.uploading", { percent: 0 });

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/jobs");
    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable) return;
      const percent = Math.round((event.loaded / event.total) * 100);
      setUploadProgress(percent, "upload.uploading", { percent });
    };
    xhr.onload = () => {
      submitButton.disabled = false;
      if (xhr.status < 200 || xhr.status >= 300) {
        setUploadProgress(0, "upload.failed");
        showToast(readXhrError(xhr));
        return;
      }
      const payload = JSON.parse(xhr.responseText);
      setUploadProgress(100, "upload.done");
      showToast(t("toast.jobCreated"));
      openJob(payload.job_id);
      loadJobs();
    };
    xhr.onerror = () => {
      submitButton.disabled = false;
      setUploadProgress(0, "upload.failed");
      showToast(t("error.network"));
    };
    xhr.send(data);
  }

  function setUploadProgress(percent, key, params = {}) {
    state.uploadPercent = percent;
    state.uploadTextKey = key;
    state.uploadTextParams = params;
    updateUploadDisplay();
  }

  function updateUploadDisplay() {
    $("uploadProgressBar").style.width = `${state.uploadPercent}%`;
    $("uploadProgressText").textContent = t(state.uploadTextKey, state.uploadTextParams);
  }

  function readXhrError(xhr) {
    try {
      const payload = JSON.parse(xhr.responseText);
      return payload.detail || t("error.uploadFailed");
    } catch (error) {
      return xhr.responseText || t("error.uploadFailed");
    }
  }

  async function loadJobs() {
    try {
      const payload = await apiGet("/api/jobs");
      state.jobs = payload.jobs || [];
      renderJobs();
      if (!state.currentJobId && state.jobs.length) {
        openJob(state.jobs[0].job_id, { quiet: true });
      }
    } catch (error) {
      showToast(error.message);
    }
  }

  function subscribeJobs() {
    if (!window.EventSource) return;
    const events = new EventSource("/api/jobs/events");
    events.addEventListener("jobs", (event) => {
      const payload = JSON.parse(event.data);
      state.jobs = payload.jobs || [];
      renderJobs();
    });
    events.onerror = () => setServerState("reconnecting");
    events.onopen = () => setServerState("online");
  }

  function changeFilter(event) {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderJobs();
  }

  function renderJobs() {
    const list = $("jobsList");
    const jobs = filterJobs(state.jobs);
    $("jobsCount").textContent = t("jobs.count", { visible: jobs.length, total: state.jobs.length });
    list.innerHTML = "";
    if (!jobs.length) {
      const empty = document.createElement("p");
      empty.className = "progress-text";
      empty.textContent = state.jobs.length ? t("jobs.noMatch") : t("jobs.empty");
      list.appendChild(empty);
      return;
    }
    for (const job of jobs) {
      list.appendChild(renderJobCard(job));
    }
  }

  function filterJobs(jobs) {
    if (state.currentFilter === "all") return jobs;
    if (state.currentFilter === "running") {
      return jobs.filter((job) => ["queued", "running"].includes(job.status));
    }
    return jobs.filter((job) => job.status === state.currentFilter);
  }

  function renderJobCard(job) {
    const card = document.createElement("article");
    card.className = "job-card";
    card.innerHTML = `
      <strong title="${escapeHtml(job.job_id)}">${escapeHtml(job.job_id)}</strong>
      <span>${escapeHtml(job.model_name || "-")}</span>
      <span>${escapeHtml(job.yolo_version || "-")}</span>
      <span>${escapeHtml(formatTarget(job.target))}</span>
      <span>${escapeHtml(statusLabel(job.status))}</span>
      <div class="job-card-actions"></div>
    `;

    const actions = card.querySelector(".job-card-actions");
    const view = document.createElement("button");
    view.className = "secondary-button";
    view.type = "button";
    view.textContent = t("actions.view");
    view.addEventListener("click", () => openJob(job.job_id));
    actions.appendChild(view);

    const remove = document.createElement("button");
    remove.className = "danger-button";
    remove.type = "button";
    remove.textContent = t("actions.delete");
    remove.disabled = ["queued", "running"].includes(job.status);
    remove.addEventListener("click", () => deleteJob(job.job_id));
    actions.appendChild(remove);

    return card;
  }

  async function openJob(jobId, options = {}) {
    if (!jobId) return;
    state.currentJobId = jobId;
    clearLog("log.waiting");
    try {
      const job = await apiGet(`/api/jobs/${encodeURIComponent(jobId)}`);
      renderJob(job);
      connectLog(jobId);
      if (!options.quiet) showToast(t("jobs.viewing", { jobId }));
    } catch (error) {
      showToast(error.message);
    }
  }

  async function refreshCurrentJob() {
    if (!state.currentJobId) {
      showToast(t("error.noCurrentJob"));
      return;
    }
    try {
      const job = await apiGet(`/api/jobs/${encodeURIComponent(state.currentJobId)}`);
      renderJob(job);
    } catch (error) {
      showToast(error.message);
    }
  }

  function renderJob(job) {
    state.currentJob = job;
    const status = job.status || "unknown";
    $("jobStatus").className = `status ${status}`;
    $("jobStatus").textContent = statusLabel(status);
    $("jobId").textContent = job.job_id || "-";
    $("jobModel").textContent = job.model_name || "-";
    $("jobDone").textContent = formatTime(job.completed_at);
    $("jobConfig").textContent = [
      job.yolo_version || "-",
      formatTarget(job.target),
      Array.isArray(job.imgsz) ? job.imgsz.join("x") : "",
      job.images_num ? t("config.images", { count: job.images_num }) : "",
      job.fast ? t("config.fast") : t("config.full"),
    ].filter(Boolean).join(" / ");

    $("jobError").hidden = !job.error;
    $("jobError").textContent = job.error || "";

    const active = ["queued", "running"].includes(status);
    $("cancelJobButton").hidden = !active;
    const canDownload = status === "success";
    $("downloadButton").classList.toggle("disabled", !canDownload);
    $("downloadButton").setAttribute("aria-disabled", String(!canDownload));
    $("downloadButton").href = canDownload ? `/api/jobs/${encodeURIComponent(job.job_id)}/download` : "#";
    renderStages(job.stage, status);
  }

  function statusLabel(status) {
    return t(`status.${status || "unknown"}`);
  }

  function renderStages(stage, status) {
    const current = status === "success" ? "package" : (stageMap[stage] || (status === "queued" ? "prepare" : ""));
    const currentIndex = stageOrder.indexOf(current);
    document.querySelectorAll("#stageProgress [data-stage]").forEach((item) => {
      const index = stageOrder.indexOf(item.dataset.stage);
      item.classList.toggle("done", status === "success" || (currentIndex > index && currentIndex !== -1));
      item.classList.toggle("active", ["queued", "running"].includes(status) && index === currentIndex);
      item.classList.toggle("failed", status === "failed" && index === currentIndex);
      item.classList.toggle("cancelled", status === "cancelled" && index === currentIndex);
    });
  }

  function connectLog(jobId) {
    if (state.socket) {
      state.socket.close();
      state.socket = null;
    }
    const protocol = location.protocol === "https:" ? "wss:" : "ws:";
    const socket = new WebSocket(`${protocol}//${location.host}/api/jobs/${encodeURIComponent(jobId)}/stream`);
    state.socket = socket;
    socket.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      if (payload.type === "job") renderJob(payload.job);
      if (payload.type === "log") appendLog(payload.text);
      if (payload.type === "error") appendLog(`\n[error] ${payload.message}\n`);
      if (payload.type === "done") loadJobs();
    };
    socket.onerror = () => appendLog(`\n[${t("log.connectError")}]\n`);
  }

  function appendLog(text) {
    state.logText += text;
    $("logView").textContent = state.logText || t(state.logPlaceholderKey);
    if ($("logAutoScroll").checked) {
      $("logView").scrollTop = $("logView").scrollHeight;
    }
  }

  function clearLog(key = "log.cleared") {
    state.logText = "";
    state.logPlaceholderKey = key;
    $("logView").textContent = t(key);
  }

  async function copyLog() {
    try {
      await navigator.clipboard.writeText(state.logText || $("logView").textContent);
      showToast(t("log.copied"));
    } catch (error) {
      showToast(t("log.copyFailed"));
    }
  }

  function downloadLog() {
    const blob = new Blob([state.logText || $("logView").textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${state.currentJobId || "maix-converter"}.log`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function cancelCurrentJob() {
    if (!state.currentJobId || !confirm(t("confirm.cancel", { jobId: state.currentJobId }))) return;
    try {
      const jobId = encodeURIComponent(state.currentJobId);
      await apiPost(`/api/jobs/${jobId}/cancel`);
      showToast(t("toast.jobCancelled"));
      refreshCurrentJob();
      loadJobs();
    } catch (error) {
      showToast(error.message);
    }
  }

  async function deleteJob(jobId) {
    if (!confirm(t("confirm.delete", { jobId }))) return;
    try {
      await apiDelete(`/api/jobs/${encodeURIComponent(jobId)}`);
      showToast(t("toast.jobDeleted"));
      if (state.currentJobId === jobId) {
        state.currentJobId = "";
        resetJobDisplay();
        clearLog("log.waiting");
      }
      loadJobs();
    } catch (error) {
      showToast(error.message);
    }
  }

  async function apiGet(url) {
    const res = await fetch(url, { cache: "no-store" });
    return readResponse(res);
  }

  async function apiPost(url) {
    const res = await fetch(url, { method: "POST" });
    return readResponse(res);
  }

  async function apiDelete(url) {
    const res = await fetch(url, { method: "DELETE" });
    return readResponse(res);
  }

  async function readResponse(res) {
    const text = await res.text();
    let payload = {};
    if (text) {
      try {
        payload = JSON.parse(text);
      } catch (error) {
        payload = { detail: text };
      }
    }
    if (!res.ok) throw new Error(payload.detail || res.statusText);
    return payload;
  }

  function formatTarget(target) {
    if (target === "maixcam2") return "MaixCam2";
    if (target === "maixcam") return "MaixCAM / Pro";
    return target || "-";
  }

  function formatTime(value) {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString(state.language);
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char]));
  }

  let toastTimer = 0;
  function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 2600);
  }
})();
