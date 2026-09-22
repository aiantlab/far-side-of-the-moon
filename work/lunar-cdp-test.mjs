import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const chromePath = process.env.CHROME_PATH || (
  process.platform === "win32"
    ? "chrome.exe"
    : process.platform === "darwin"
      ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      : "google-chrome"
);
const port = 9340;
const pageUrl = `${pathToFileURL(
  path.join(projectRoot, "outputs", "lunar-farside", "index.html")
).href}?full-motion=1`;
const userDataDir = path.join(projectRoot, "work", ".chrome-lunar-test");

const chrome = spawn(
  chromePath,
  [
    "--headless=new",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-extensions",
    "--enable-unsafe-swiftshader",
    "--use-angle=swiftshader",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    "--window-size=1440,1000",
    "about:blank"
  ],
  { stdio: "ignore" }
);

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getPageTarget() {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await response.json();
      const page = targets.find((target) => target.type === "page");
      if (page) return page;
    } catch {
      // Chrome is still starting.
    }
    await delay(100);
  }
  throw new Error("Chrome debugging target did not become available.");
}

const target = await getPageTarget();
const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map();
const errors = [];
let messageId = 0;

function command(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++messageId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);

  if (message.id && pending.has(message.id)) {
    const request = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
  }

  if (message.method === "Runtime.exceptionThrown") {
    errors.push(message.params.exceptionDetails.text);
  }

  if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
    errors.push(message.params.entry.text);
  }
});

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

await command("Page.enable");
await command("Runtime.enable");
await command("Log.enable");
await command("Page.navigate", { url: pageUrl });
await delay(5200);

async function evaluate(expression) {
  const result = await command("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true
  });
  return result.result.value;
}

async function screenshot(filename) {
  const capture = await command("Page.captureScreenshot", { format: "png" });
  await writeFile(
    path.join(process.cwd(), "work", filename),
    Buffer.from(capture.data, "base64")
  );
}

const initial = await evaluate(`({
  vueMounted: !!document.querySelector("#app").__vue_app__,
  webgl: !!document.querySelector(".scene-canvas")?.getContext("webgl2"),
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read(),
  sampleColor: window.__LUNAR_FARSIDE_DEBUG__?.sampleColor(),
  telemetry: document.querySelector(".telemetry")?.innerText,
  status: document.querySelector(".status-pill")?.innerText,
  features: Array.from(document.querySelectorAll(".star-name")).map((node) => node.textContent),
  region: document.querySelector(".object-tab.active span")?.textContent,
  instrument: document.querySelector(".telescope-tab.active span")?.textContent
})`);

if (process.env.LUNAR_QUICK_SCREENSHOT === "1") {
  await screenshot("lunar-farside-desktop-check.png");
  console.log(JSON.stringify({ initial, errors }, null, 2));
  socket.close();
  chrome.kill();
  await delay(300);
  process.exit(0);
}

if (process.env.LUNAR_QUICK_MOBILE === "1") {
  await command("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true
  });
  await command("Page.reload", { ignoreCache: true });
  await delay(4200);
  const quickMobile = await evaluate(`(() => {
    const footer = document.querySelector(".footer").getBoundingClientRect();
    const headline = document.querySelector(".headline").getBoundingClientRect();
    return {
      viewport: [innerWidth, innerHeight],
      footer: [Math.round(footer.left), Math.round(footer.right)],
      headline: [Math.round(headline.left), Math.round(headline.right)],
      overflow: document.documentElement.scrollWidth > innerWidth,
      debug: window.__LUNAR_FARSIDE_DEBUG__?.read(),
      errors: ${JSON.stringify(errors)}
    };
  })()`);
  await screenshot("lunar-farside-mobile-check.png");
  console.log(JSON.stringify({ initial, quickMobile, errors }, null, 2));
  socket.close();
  chrome.kill();
  await delay(300);
  process.exit(0);
}

const instrumentStates = [];
for (const id of ["lroc", "diviner", "minirf", "lfs"]) {
  await evaluate(`document.querySelector('[data-telescope="${id}"]')?.click()`);
  await delay(260);
  instrumentStates.push(await evaluate(`({
    id: "${id}",
    active: document.querySelector(".telescope-tab.active")?.dataset.telescope || "",
    status: document.querySelector(".status-pill")?.innerText || ""
  })`));
}

await evaluate(`document.querySelector('[data-telescope="lroc"]')?.click()`);
await delay(200);
await evaluate(`document.querySelector(".scene-canvas")?.dispatchEvent(
  new WheelEvent("wheel", {
    deltaY: -780,
    bubbles: true,
    cancelable: true
  })
)`);
await delay(500);

const zoomState = await evaluate(`({
  status: document.querySelector(".status-pill")?.innerText,
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read()
})`);

const regionStates = [];
for (const id of ["von-karman", "apollo", "moscoviense", "spa"]) {
  await evaluate(`document.querySelector('[data-object="${id}"]')?.click()`);
  await delay(920);
  regionStates.push(await evaluate(`({
    id: "${id}",
    active: document.querySelector(".object-tab.active")?.dataset.object || "",
    brief: document.querySelector(".object-brief")?.innerText || "",
    features: Array.from(document.querySelectorAll(".star-name")).map((node) => node.textContent),
    status: document.querySelector(".status-pill")?.innerText || ""
  })`));
}

const surveyBefore = await evaluate(`({
  progress: document.querySelector(".survey-progress-head strong")?.textContent.trim(),
  mapped: document.querySelectorAll('.star-row[data-surveyed="true"]').length,
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read().survey
})`);

await evaluate(`document.querySelector(".star-row")?.click()`);
await delay(360);

const surveyAfter = await evaluate(`({
  progress: document.querySelector(".survey-progress-head strong")?.textContent.trim(),
  mapped: document.querySelectorAll('.star-row[data-surveyed="true"]').length,
  state: document.querySelector(".telemetry-row:first-child .telemetry-value")?.textContent.trim(),
  status: document.querySelector(".status-pill")?.innerText,
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read().survey
})`);

await evaluate(`document.querySelector(".mission-action")?.click()`);
await delay(320);

const relayInitial = await evaluate(`({
  mode: document.querySelector(".mission-tabs button.active")?.textContent.trim(),
  metrics: document.querySelector(".mission-metrics")?.innerText,
  target: document.querySelector(".mission-target")?.textContent.trim(),
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read()
})`);

await evaluate(`(() => {
  const inputs = document.querySelectorAll(".mission-control input");
  inputs[0].value = "130";
  inputs[0].dispatchEvent(new Event("input", { bubbles: true }));
  inputs[1].value = "50";
  inputs[1].dispatchEvent(new Event("input", { bubbles: true }));
})()`);
await delay(260);

const relayInvalid = await evaluate(`({
  metrics: document.querySelector(".mission-metrics")?.innerText,
  target: document.querySelector(".mission-target")?.textContent.trim()
})`);

await evaluate(`(() => {
  const inputs = document.querySelectorAll(".mission-control input");
  inputs[0].value = "91";
  inputs[0].dispatchEvent(new Event("input", { bubbles: true }));
  inputs[1].value = "180";
  inputs[1].dispatchEvent(new Event("input", { bubbles: true }));
})()`);
await delay(220);
await evaluate(`document.querySelector(".mission-run")?.click()`);
await delay(6800);

const relayComplete = await evaluate(`({
  button: document.querySelector(".mission-run")?.textContent.trim(),
  target: document.querySelector(".mission-target")?.textContent.trim(),
  status: document.querySelector(".status-pill")?.innerText,
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read()
})`);

await evaluate(`document.querySelector(".mission-tabs button:nth-child(2)")?.click()`);
await delay(320);

const sampleInitial = await evaluate(`({
  metrics: document.querySelector(".mission-metrics")?.innerText,
  target: document.querySelector(".mission-target")?.textContent.trim(),
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read()
})`);

await evaluate(`(() => {
  const inputs = document.querySelectorAll(".mission-control input");
  inputs[0].value = "68";
  inputs[0].dispatchEvent(new Event("input", { bubbles: true }));
  inputs[1].value = "44";
  inputs[1].dispatchEvent(new Event("input", { bubbles: true }));
})()`);
await delay(260);

const sampleInvalid = await evaluate(`({
  metrics: document.querySelector(".mission-metrics")?.innerText,
  target: document.querySelector(".mission-target")?.textContent.trim()
})`);

await evaluate(`(() => {
  const inputs = document.querySelectorAll(".mission-control input");
  inputs[0].value = "56";
  inputs[0].dispatchEvent(new Event("input", { bubbles: true }));
  inputs[1].value = "24";
  inputs[1].dispatchEvent(new Event("input", { bubbles: true }));
})()`);
await delay(220);
await evaluate(`document.querySelector(".mission-run")?.click()`);
await delay(6800);

const sampleComplete = await evaluate(`({
  button: document.querySelector(".mission-run")?.textContent.trim(),
  target: document.querySelector(".mission-target")?.textContent.trim(),
  status: document.querySelector(".status-pill")?.innerText,
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read()
})`);

await evaluate(`document.querySelector(".mission-mode-toggle button:nth-child(2)")?.click()`);
await delay(180);
const manualInitial = await evaluate(`({
  activeMode: document.querySelector(".mission-mode-toggle button.active")?.textContent.trim(),
  controls: document.querySelectorAll(".manual-control input").length,
  metrics: document.querySelectorAll(".landing-metrics div").length
})`);
await evaluate(`document.querySelector(".mission-run")?.click()`);
await delay(650);
const manualActive = await evaluate(`({
  button: document.querySelector(".mission-run")?.textContent.trim(),
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read().manualLanding
})`);
await evaluate(`document.querySelector(".mission-run")?.click()`);
await delay(180);

await evaluate(`document.querySelector(".mission-close")?.click()`);
await delay(160);
await evaluate(`document.querySelector(".scan-action")?.click()`);
await delay(420);
await evaluate(`document.querySelectorAll(".action")[2]?.click()`);
await delay(2800);
await evaluate(`document.querySelector(".ship-action")?.click()`);
await delay(500);
await screenshot("lunar-farside-queqiao-check.png");

const interaction = await evaluate(`({
  telemetry: document.querySelector(".telemetry")?.innerText,
  status: document.querySelector(".status-pill")?.innerText,
  markers: Array.from(document.querySelectorAll(".crit-number strong")).map((node) => node.textContent),
  debug: window.__LUNAR_FARSIDE_DEBUG__?.read()
})`);

await screenshot("lunar-farside-desktop.png");

await command("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true
});
await command("Page.reload", { ignoreCache: true });
await delay(5200);

const mobile = await evaluate(`(() => {
  const telemetry = document.querySelector(".telemetry").getBoundingClientRect();
  const headline = document.querySelector(".headline").getBoundingClientRect();
  const footer = document.querySelector(".footer").getBoundingClientRect();
  return {
    viewport: [innerWidth, innerHeight],
    telemetry: [Math.round(telemetry.left), Math.round(telemetry.right)],
    headline: [Math.round(headline.left), Math.round(headline.right)],
    footer: [Math.round(footer.left), Math.round(footer.right)],
    catalogHidden: getComputedStyle(document.querySelector(".star-panel")).display === "none",
    overflow: document.documentElement.scrollWidth > innerWidth,
    debug: window.__LUNAR_FARSIDE_DEBUG__?.read()
  };
})()`);

await screenshot("lunar-farside-mobile.png");

console.log(
  JSON.stringify(
    {
      initial,
      instrumentStates,
      zoomState,
      regionStates,
      surveyBefore,
      surveyAfter,
      relayInitial,
      relayInvalid,
      relayComplete,
      sampleInitial,
      sampleInvalid,
      sampleComplete,
      manualInitial,
      manualActive,
      interaction,
      mobile,
      errors
    },
    null,
    2
  )
);

socket.close();
chrome.kill();
await delay(300);
