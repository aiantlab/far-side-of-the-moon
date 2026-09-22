import * as THREE from "three";
import { animate, createTimeline } from "animejs";
import moonColorDataUrl from "../outputs/lunar-farside/assets/moon-lroc-color-1536.webp";
import moonElevationDataUrl from "../outputs/lunar-farside/assets/moon-lola-elevation-1k.webp";

const MOON_RADIUS = 3.28;
const TELESCOPE_MAX_ZOOM = 6;
const EARTH_POSITION = new THREE.Vector3(0, -1.8, -18);

const REGION_PROFILES = {
  spa: {
    focusLat: -53,
    focusLon: -169,
    status: "South Pole–Aitken basin stable",
    instrumentHint: "basin-scale impact structure",
    earthVisibility: 0.08
  },
  "von-karman": {
    focusLat: -44.8,
    focusLon: 175.9,
    status: "Chang'e-4 landing region catalog",
    instrumentHint: "regolith and rover traverse",
    earthVisibility: 0.02
  },
  apollo: {
    focusLat: -35.7,
    focusLon: -151.3,
    status: "Apollo basin sample-return window",
    instrumentHint: "basin fill and return window",
    earthVisibility: 0.03
  },
  moscoviense: {
    focusLat: 27.3,
    focusLon: 147.9,
    status: "Mare Moscoviense boundary",
    instrumentHint: "mare basalt and highland boundary",
    earthVisibility: 0.12
  }
};

const FEATURE_DATA = {
  spa: [
    { id: 0, name: "South Pole–Aitken", lat: -53, lon: -169, color: 0xd8d3c5 },
    { id: 1, name: "Apollo", lat: -35.7, lon: -151.3, color: 0xc5c1b7 },
    { id: 2, name: "Von Kármán", lat: -44.8, lon: 175.9, color: 0xf0d7a0 },
    { id: 3, name: "Finsen", lat: -42, lon: -177.7, color: 0xb7c9d7 },
    { id: 4, name: "Alder", lat: -48.6, lon: -177.4, color: 0xb9b7b0 },
    { id: 5, name: "Bose", lat: -53.5, lon: -169.8, color: 0x9ecbd0 },
    { id: 6, name: "Bhabha", lat: -55.5, lon: -165.5, color: 0xd1b6ca },
    { id: 7, name: "Stoney", lat: -55.6, lon: -156.4, color: 0xd8cfac },
    { id: 8, name: "Leibnitz", lat: -38.3, lon: 179.2, color: 0xb7c3d1 },
    { id: 9, name: "Ingenii", lat: -33.7, lon: 163.5, color: 0x9bb5c4 }
  ],
  "von-karman": [
    { id: 0, name: "Chang'e-4", lat: -45.5, lon: 177.6, color: 0xe8c878 },
    { id: 1, name: "Yutu-2", lat: -45.44, lon: 177.56, color: 0xff7a45 },
    { id: 2, name: "Von Kármán", lat: -44.8, lon: 175.9, color: 0xd8d3c5 },
    { id: 3, name: "Finsen", lat: -42, lon: -177.7, color: 0xb7c9d7 },
    { id: 4, name: "Alder", lat: -48.6, lon: -177.4, color: 0xb9b7b0 },
    { id: 5, name: "Bose", lat: -53.5, lon: -169.8, color: 0x9ecbd0 },
    { id: 6, name: "Bhabha", lat: -55.5, lon: -165.5, color: 0xd1b6ca },
    { id: 7, name: "Stoney", lat: -55.6, lon: -156.4, color: 0xd8cfac },
    { id: 8, name: "Leibnitz", lat: -38.3, lon: 179.2, color: 0xb7c3d1 },
    { id: 9, name: "Apollo", lat: -35.7, lon: -151.3, color: 0xc5c1b7 }
  ],
  apollo: [
    { id: 0, name: "Chang'e-6", lat: -41.64, lon: -153.99, color: 0xff7a45 },
    { id: 1, name: "Apollo", lat: -35.7, lon: -151.3, color: 0xd8d3c5 },
    { id: 2, name: "Von Kármán", lat: -44.8, lon: 175.9, color: 0xc9c4b9 },
    { id: 3, name: "Finsen", lat: -42, lon: -177.7, color: 0xb7c9d7 },
    { id: 4, name: "Alder", lat: -48.6, lon: -177.4, color: 0xb9b7b0 },
    { id: 5, name: "Bose", lat: -53.5, lon: -169.8, color: 0x9ecbd0 },
    { id: 6, name: "Bhabha", lat: -55.5, lon: -165.5, color: 0xd1b6ca },
    { id: 7, name: "Stoney", lat: -55.6, lon: -156.4, color: 0xd8cfac },
    { id: 8, name: "Leibnitz", lat: -38.3, lon: 179.2, color: 0xb7c3d1 },
    { id: 9, name: "South Pole–Aitken", lat: -53, lon: -169, color: 0xb7c9c4 }
  ],
  moscoviense: [
    { id: 0, name: "Mare Moscoviense", lat: 27.3, lon: 147.9, color: 0x7899a5 },
    { id: 1, name: "Komarov", lat: 24.7, lon: 152.5, color: 0xc8c5bb },
    { id: 2, name: "Bolyai", lat: 33.6, lon: 126.1, color: 0xb9c4d0 },
    { id: 3, name: "Krasnov", lat: 29.7, lon: 156.1, color: 0xd4c6a8 },
    { id: 4, name: "Tsiolkovskiy", lat: -20.4, lon: 129.1, color: 0x96aab2 },
    { id: 5, name: "Hertzsprung", lat: 1.4, lon: -128.9, color: 0xb2b6af },
    { id: 6, name: "Korolev", lat: -4.9, lon: -157.4, color: 0xa5b7c5 },
    { id: 7, name: "Freundlich–Sharonov", lat: 18.7, lon: 175.4, color: 0xbcc0b7 },
    { id: 8, name: "Mendeleev", lat: 5.7, lon: 140.9, color: 0xc4bfb1 },
    { id: 9, name: "Gagarin", lat: -19.7, lon: 149.2, color: 0xb8c2c8 }
  ]
};

const INSTRUMENT_PROFILES = {
  lroc: {
    short: "LROC",
    distanceScale: 1,
    fov: 37,
    exposure: 0.98,
    color: new THREE.Color(0xffffff),
    emissive: new THREE.Color(0x171612),
    emissiveIntensity: 0.2,
    fill: new THREE.Color(0x2d3b42),
    rim: new THREE.Color(0x7cd8d1),
    accent: new THREE.Color(0xd8d3c5)
  },
  diviner: {
    short: "DIVINER",
    distanceScale: 0.98,
    fov: 39,
    exposure: 1.08,
    color: new THREE.Color(0xffc49b),
    emissive: new THREE.Color(0x260802),
    emissiveIntensity: 0.26,
    fill: new THREE.Color(0x5b2f24),
    rim: new THREE.Color(0xff9a52),
    accent: new THREE.Color(0xff9a52)
  },
  minirf: {
    short: "MINI-RF",
    distanceScale: 0.9,
    fov: 35,
    exposure: 1.12,
    color: new THREE.Color(0xb8f1f1),
    emissive: new THREE.Color(0x001b24),
    emissiveIntensity: 0.3,
    fill: new THREE.Color(0x173c46),
    rim: new THREE.Color(0x62dfe6),
    accent: new THREE.Color(0x7cd8d1)
  },
  lfs: {
    short: "LFS",
    distanceScale: 1.04,
    fov: 41,
    exposure: 1.05,
    color: new THREE.Color(0xd8f5b2),
    emissive: new THREE.Color(0x0b1803),
    emissiveIntensity: 0.34,
    fill: new THREE.Color(0x293d1f),
    rim: new THREE.Color(0xc9e884),
    accent: new THREE.Color(0xc9e884)
  }
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function fract(value) {
  return value - Math.floor(value);
}

function hash2(x, y) {
  return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
}

function smoothNoise(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy);
  const b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1);
  const d = hash2(ix + 1, iy + 1);
  const x1 = THREE.MathUtils.lerp(a, b, ux);
  const x2 = THREE.MathUtils.lerp(c, d, ux);
  return THREE.MathUtils.lerp(x1, x2, uy);
}

function fbm(x, y) {
  let value = 0;
  let amplitude = 0.54;
  let frequency = 1;
  for (let octave = 0; octave < 5; octave += 1) {
    value += smoothNoise(x * frequency, y * frequency) * amplitude;
    frequency *= 2.03;
    amplitude *= 0.48;
  }
  return value;
}

function mulberry32(seed) {
  let value = seed >>> 0;
  return function random() {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function latLonToVector(lat, lon, radius = 1) {
  const latitude = THREE.MathUtils.degToRad(lat);
  const farSideLon = THREE.MathUtils.degToRad(lon - 180);
  const cosLat = Math.cos(latitude);
  return new THREE.Vector3(
    radius * cosLat * Math.sin(farSideLon),
    radius * Math.sin(latitude),
    radius * cosLat * Math.cos(farSideLon)
  );
}

function createSoftGlowTexture() {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 128;
  textureCanvas.height = 128;
  const context = textureCanvas.getContext("2d");
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 62);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(255,255,255,0.9)");
  gradient.addColorStop(0.52, "rgba(255,255,255,0.3)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createLabelSprite(text, color = "#f3f0e8", scale = 1) {
  const labelCanvas = document.createElement("canvas");
  labelCanvas.width = 512;
  labelCanvas.height = 128;
  const context = labelCanvas.getContext("2d");
  context.clearRect(0, 0, 512, 128);
  context.font = "700 30px 'Aptos', 'Segoe UI', sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  const parsedColor = new THREE.Color(color);
  const darkText = parsedColor.r + parsedColor.g + parsedColor.b < 0.42;
  context.lineWidth = 6;
  context.strokeStyle = darkText
    ? "rgba(236,248,255,0.9)"
    : "rgba(0,0,0,0.86)";
  context.shadowColor = darkText
    ? "rgba(150,220,255,0.65)"
    : "rgba(0,0,0,0.9)";
  context.shadowBlur = 10;
  context.strokeText(text, 256, 65);
  context.fillStyle = color;
  context.shadowBlur = 3;
  context.fillText(text, 256, 65);
  const texture = new THREE.CanvasTexture(labelCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    opacity: 0.92
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.78 * scale, 0.195 * scale, 1);
  sprite.renderOrder = 30;
  return sprite;
}

function createPlaceholderTexture() {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 64;
  textureCanvas.height = 32;
  const context = textureCanvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 0, 32);
  gradient.addColorStop(0, "#4b4a46");
  gradient.addColorStop(0.5, "#77736b");
  gradient.addColorStop(1, "#343431");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 32);
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createLunarTextureState() {
  const placeholder = createPlaceholderTexture();
  return {
    color: placeholder,
    bump: placeholder,
    colorLoaded: false,
    bumpLoaded: false
  };
}

function loadLunarTextures(state, renderer, onProgress = () => {}) {
  const maxAnisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  let completed = 0;
  onProgress({
    type: "started",
    texture: null,
    loaded: 0,
    total: 2,
    progress: 0
  });

  function configure(texture, colorTexture = false) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.anisotropy = maxAnisotropy;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = true;
    texture.colorSpace = colorTexture ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  }

  function finish(type, texture) {
    completed += 1;
    onProgress({
      type,
      texture,
      loaded: completed,
      total: 2,
      progress: completed / 2
    });
  }

  function loadLocalTexture(url, colorTexture, type) {
    const image = new Image();
    const texture = new THREE.Texture();
    image.decoding = "async";
    image.onload = () => {
      texture.image = image;
      configure(texture, colorTexture);
      texture.needsUpdate = true;
      if (colorTexture) {
        state.color = texture;
        state.colorLoaded = true;
      } else {
        state.bump = texture;
        state.bumpLoaded = true;
      }
      finish(type, texture);
    };
    image.onerror = () => finish(`${type}-error`, null);
    image.src = new URL(url, document.baseURI).href;
  }

  loadLocalTexture(moonColorDataUrl, true, "color");
  loadLocalTexture(moonElevationDataUrl, false, "bump");
}

function createSurfaceTextures() {
  const width = window.innerWidth < 760 ? 1024 : 2048;
  const height = width / 2;
  const random = mulberry32(5946);

  const heightCanvas = document.createElement("canvas");
  const visibleCanvas = document.createElement("canvas");
  const thermalCanvas = document.createElement("canvas");
  const radarCanvas = document.createElement("canvas");
  const radioCanvas = document.createElement("canvas");
  const canvases = [
    heightCanvas,
    visibleCanvas,
    thermalCanvas,
    radarCanvas,
    radioCanvas
  ];

  canvases.forEach((surface) => {
    surface.width = width;
    surface.height = height;
  });

  const heightContext = heightCanvas.getContext("2d");
  const visibleContext = visibleCanvas.getContext("2d");
  const heightImage = heightContext.createImageData(width, height);
  const visibleImage = visibleContext.createImageData(width, height);

  for (let y = 0; y < height; y += 1) {
    const lat = (0.5 - y / height) * 180;
    for (let x = 0; x < width; x += 1) {
      const lon = (x / width - 0.5) * 360;
      const index = (y * width + x) * 4;
      const terrain = fbm(lon * 0.045 + 18, lat * 0.045 - 7);
      const fine = fbm(lon * 0.18 - 42, lat * 0.18 + 11);
      const latitudeHighlands = 0.07 * Math.cos(THREE.MathUtils.degToRad(lat + 28));
      let elevation = 0.38 + terrain * 0.45 + fine * 0.12 + latitudeHighlands;

      const spaX = lon / 54;
      const spaY = (lat + 53) / 23;
      const spa = 1 - clamp(Math.hypot(spaX, spaY), 0, 1);
      elevation -= Math.pow(spa, 1.7) * 0.22;

      const mareDistance = Math.hypot((lon + 32) / 7.5, (lat - 27.3) / 5.2);
      const mare = 1 - clamp(mareDistance, 0, 1);
      elevation -= Math.pow(mare, 1.8) * 0.48;

      const tsiolkovskiyDistance = Math.hypot((lon + 51) / 8, (lat + 20.4) / 7);
      elevation -= Math.pow(1 - clamp(tsiolkovskiyDistance, 0, 1), 2) * 0.28;

      elevation = clamp(elevation, 0.05, 0.98);
      const heightValue = Math.round(elevation * 255);
      const albedo = clamp(
        0.58
          + elevation * 0.26
          + (fine - 0.5) * 0.12
          + Math.cos(THREE.MathUtils.degToRad(lat)) * 0.035,
        0.18,
        0.96
      );
      const gray = Math.round(albedo * 255);
      heightImage.data[index] = heightValue;
      heightImage.data[index + 1] = heightValue;
      heightImage.data[index + 2] = heightValue;
      heightImage.data[index + 3] = 255;
      visibleImage.data[index] = Math.round(gray * 1.02);
      visibleImage.data[index + 1] = Math.round(gray * 0.99);
      visibleImage.data[index + 2] = Math.round(gray * 0.91);
      visibleImage.data[index + 3] = 255;
    }
  }

  heightContext.putImageData(heightImage, 0, 0);
  visibleContext.putImageData(visibleImage, 0, 0);

  const craterCount = width < 1400 ? 430 : 760;
  for (let index = 0; index < craterCount; index += 1) {
    const lat = -87 + random() * 174;
    const lon = -89 + random() * 178;
    const x = (lon / 360 + 0.5) * width;
    const y = (0.5 - lat / 180) * height;
    const size = 1.4 + Math.pow(random(), 3.2) * 28;
    const craterRadius = size * (0.7 + random() * 0.4);

    const rim = heightContext.createRadialGradient(
      x - craterRadius * 0.18,
      y - craterRadius * 0.18,
      craterRadius * 0.08,
      x,
      y,
      craterRadius
    );
    rim.addColorStop(0, "rgba(48,48,48,0.82)");
    rim.addColorStop(0.58, "rgba(108,108,108,0.52)");
    rim.addColorStop(0.82, "rgba(236,236,236,0.9)");
    rim.addColorStop(1, "rgba(128,128,128,0)");
    heightContext.fillStyle = rim;
    heightContext.beginPath();
    heightContext.arc(x, y, craterRadius, 0, Math.PI * 2);
    heightContext.fill();

    const visibleRim = visibleContext.createRadialGradient(
      x - craterRadius * 0.18,
      y - craterRadius * 0.18,
      craterRadius * 0.08,
      x,
      y,
      craterRadius
    );
    visibleRim.addColorStop(0, "rgba(28,27,24,0.52)");
    visibleRim.addColorStop(0.58, "rgba(91,89,82,0.34)");
    visibleRim.addColorStop(0.82, "rgba(236,232,218,0.52)");
    visibleRim.addColorStop(1, "rgba(160,156,145,0)");
    visibleContext.fillStyle = visibleRim;
    visibleContext.beginPath();
    visibleContext.arc(x, y, craterRadius, 0, Math.PI * 2);
    visibleContext.fill();
  }

  function drawGrid(context, color) {
    context.save();
    context.strokeStyle = color;
    context.lineWidth = width < 1400 ? 1 : 1.25;
    context.setLineDash([5, 13]);
    for (let longitude = -75; longitude <= 75; longitude += 15) {
      const x = (longitude / 360 + 0.5) * width;
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
    for (let latitude = -75; latitude <= 75; latitude += 15) {
      const y = (0.5 - latitude / 180) * height;
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }
    context.setLineDash([]);
    context.font = `700 ${Math.max(13, width / 110)}px 'IBM Plex Mono', monospace`;
    context.fillStyle = color;
    context.textAlign = "center";
    context.fillText("FAR SIDE / 180°", width / 2, height * 0.5 - 7);
    context.fillText("SOUTH POLE–AITKEN", width / 2, height * 0.8);
    context.restore();
  }

  drawGrid(visibleContext, "rgba(232,200,120,0.24)");

  const heightData = heightContext.getImageData(0, 0, width, height).data;
  const thermalContext = thermalCanvas.getContext("2d");
  const radarContext = radarCanvas.getContext("2d");
  const radioContext = radioCanvas.getContext("2d");
  const thermalImage = thermalContext.createImageData(width, height);
  const radarImage = radarContext.createImageData(width, height);
  const radioImage = radioContext.createImageData(width, height);

  for (let y = 0; y < height; y += 1) {
    const lat = Math.abs((0.5 - y / height) * 180);
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const elevation = heightData[index] / 255;
      const noise = fbm(x * 0.018, y * 0.018);
      const thermalValue = clamp(
        0.12 + (1 - lat / 90) * 0.58 + elevation * 0.18 + noise * 0.2,
        0,
        1
      );
      const radarValue = clamp(
        0.03 + Math.pow(elevation, 1.7) * 0.72 + noise * 0.18,
        0,
        1
      );
      const radioValue = clamp(
        0.1 + noise * 0.18 + Math.pow(elevation, 2) * 0.12,
        0,
        1
      );

      thermalImage.data[index] = Math.round(25 + thermalValue * 235);
      thermalImage.data[index + 1] = Math.round(10 + thermalValue * 112);
      thermalImage.data[index + 2] = Math.round(48 + (1 - thermalValue) * 96);
      thermalImage.data[index + 3] = 255;

      radarImage.data[index] = Math.round(10 + radarValue * 65);
      radarImage.data[index + 1] = Math.round(30 + radarValue * 205);
      radarImage.data[index + 2] = Math.round(35 + radarValue * 230);
      radarImage.data[index + 3] = 255;

      radioImage.data[index] = Math.round(18 + radioValue * 111);
      radioImage.data[index + 1] = Math.round(35 + radioValue * 190);
      radioImage.data[index + 2] = Math.round(30 + radioValue * 82);
      radioImage.data[index + 3] = 255;
    }
  }

  thermalContext.putImageData(thermalImage, 0, 0);
  radarContext.putImageData(radarImage, 0, 0);
  radioContext.putImageData(radioImage, 0, 0);

  drawGrid(thermalContext, "rgba(255,225,162,0.22)");
  drawGrid(radarContext, "rgba(125,240,232,0.25)");
  drawGrid(radioContext, "rgba(201,232,132,0.24)");

  function addRadioRings() {
    const gradient = radioContext.createRadialGradient(
      width * 0.5,
      height * 0.54,
      0,
      width * 0.5,
      height * 0.54,
      width * 0.42
    );
    gradient.addColorStop(0, "rgba(201,232,132,0.24)");
    gradient.addColorStop(0.43, "rgba(124,216,209,0.08)");
    gradient.addColorStop(0.72, "rgba(201,232,132,0.14)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    radioContext.fillStyle = gradient;
    radioContext.fillRect(0, 0, width, height);
    radioContext.strokeStyle = "rgba(201,232,132,0.4)";
    radioContext.lineWidth = 2;
    for (let radius = width * 0.08; radius < width * 0.42; radius += width * 0.038) {
      radioContext.beginPath();
      radioContext.arc(width * 0.5, height * 0.54, radius, 0, Math.PI * 2);
      radioContext.stroke();
    }
  }

  addRadioRings();

  function createTexture(canvasElement) {
    const texture = new THREE.CanvasTexture(canvasElement);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.anisotropy = 4;
    return texture;
  }

  return {
    visible: createTexture(visibleCanvas),
    thermal: createTexture(thermalCanvas),
    radar: createTexture(radarCanvas),
    radio: createTexture(radioCanvas),
    bump: createTexture(heightCanvas)
  };
}

export function createLunarFarSideScene(canvas, hooks = {}) {
  const sceneStartedAt = performance.now();
  const {
    onTelemetry = () => {},
    onState = () => {},
    onCritical = () => {},
    onPulse = () => {},
    onMission = () => {},
    onSurvey = () => {},
    onPointer = () => {},
    onLanding = () => {},
    onRover = () => {},
    onLoading = () => {}
  } = hooks;

  const forceFullMotion = new URLSearchParams(window.location.search).has("full-motion");
  const reducedMotion = !forceFullMotion
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const clock = new THREE.Clock();
  const worldPosition = new THREE.Vector3();
  const projectedPosition = new THREE.Vector3();
  const moonUp = new THREE.Vector3(0, 0, 1);
  const cameraTarget = new THREE.Vector3(0, 0, 0);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
  } catch {
    document.body.classList.add("no-webgl");
    throw new Error("WebGL renderer could not be created.");
  }

  const viewportWidth = () => window.innerWidth;
  const viewportHeight = () => window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
  renderer.setSize(viewportWidth(), viewportHeight());
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = INSTRUMENT_PROFILES.lroc.exposure;
  renderer.setClearColor(0x050606, 1);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050606);
  scene.fog = new THREE.FogExp2(0x050606, 0.012);

  const camera = new THREE.PerspectiveCamera(
    38,
    viewportWidth() / viewportHeight(),
    0.1,
    100
  );
  camera.position.set(0, 0.8, 10.6);

  const starCount = viewportWidth() < 760 ? 700 : 1300;
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  const starRandom = mulberry32(904);
  const starColor = new THREE.Color();

  for (let index = 0; index < starCount; index += 1) {
    const radius = 18 + Math.pow(starRandom(), 0.68) * 44;
    const theta = starRandom() * Math.PI * 2;
    const phi = Math.acos(2 * starRandom() - 1);
    const positionIndex = index * 3;
    starPositions[positionIndex] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[positionIndex + 1] = radius * Math.cos(phi);
    starPositions[positionIndex + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const temperature = starRandom();
    starColor.setHSL(
      temperature > 0.82 ? 0.095 : temperature < 0.24 ? 0.56 : 0.11,
      temperature > 0.82 ? 0.28 : temperature < 0.24 ? 0.4 : 0.05,
      0.58 + starRandom() * 0.33
    );
    starColors[positionIndex] = starColor.r;
    starColors[positionIndex + 1] = starColor.g;
    starColors[positionIndex + 2] = starColor.b;
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
  const starMaterial = new THREE.PointsMaterial({
    size: viewportWidth() < 760 ? 0.055 : 0.07,
    vertexColors: true,
    transparent: true,
    opacity: 0.76,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  const worldRoot = new THREE.Group();
  const moonRoot = new THREE.Group();
  const moonPivot = new THREE.Group();
  worldRoot.add(moonRoot);
  moonRoot.add(moonPivot);
  scene.add(worldRoot);

  const sunLight = new THREE.DirectionalLight(0xfff2d9, 3.2);
  sunLight.position.set(9, 7, 14);
  scene.add(sunLight);

  const ambientLight = new THREE.AmbientLight(0xfffaf0, 0.42);
  scene.add(ambientLight);

  const rimLight = new THREE.DirectionalLight(0x7cd8d1, 1.4);
  rimLight.position.set(-8, -2, -5);
  scene.add(rimLight);

  const fillLight = new THREE.HemisphereLight(0x2d3b42, 0x11100d, 0.85);
  scene.add(fillLight);

  const textures = createLunarTextureState();
  const moonMaterial = new THREE.MeshStandardMaterial({
    map: textures.color,
    bumpMap: textures.bump,
    bumpScale: 0.055,
    color: 0xffffff,
    emissive: INSTRUMENT_PROFILES.lroc.emissive,
    emissiveIntensity: INSTRUMENT_PROFILES.lroc.emissiveIntensity,
    emissiveMap: textures.color,
    roughness: 0.98,
    metalness: 0.01,
    envMapIntensity: 0.18
  });
  const moonWidthSegments = viewportWidth() < 760 ? 96 : 128;
  const moonHeightSegments = viewportWidth() < 760 ? 64 : 80;
  const moonMesh = new THREE.Mesh(
    new THREE.SphereGeometry(
      MOON_RADIUS,
      moonWidthSegments,
      moonHeightSegments
    ),
    moonMaterial
  );
  moonMesh.rotation.y = -Math.PI / 2;
  moonPivot.add(moonMesh);

  loadLunarTextures(textures, renderer, (event) => {
    if (event.type === "color") {
      moonMaterial.map = textures.color;
      moonMaterial.emissiveMap = textures.color;
    } else if (event.type === "bump") {
      moonMaterial.bumpMap = textures.bump;
      moonMaterial.bumpScale = 0.055;
    }
    moonMaterial.needsUpdate = true;
    if (event.progress >= 1) {
      surfaceReadyMs = Math.round(performance.now() - sceneStartedAt);
    }
    onLoading(event);
  });

  const farSideHalo = new THREE.Mesh(
    new THREE.SphereGeometry(MOON_RADIUS * 1.006, 96, 64),
    new THREE.MeshBasicMaterial({
      color: 0x8ca6a2,
      transparent: true,
      opacity: 0.035,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  moonPivot.add(farSideHalo);

  const coordinateShell = new THREE.Mesh(
    new THREE.SphereGeometry(MOON_RADIUS * 1.009, 48, 32),
    new THREE.MeshBasicMaterial({
      color: 0xc9e884,
      wireframe: true,
      transparent: true,
      opacity: 0.025,
      depthWrite: false
    })
  );
  moonPivot.add(coordinateShell);

  const earthGlowTexture = createSoftGlowTexture();
  const earth = new THREE.Group();
  earth.position.copy(EARTH_POSITION);
  const earthBody = new THREE.Mesh(
    new THREE.SphereGeometry(0.44, 36, 24),
    new THREE.MeshBasicMaterial({ color: 0x7ea6cf })
  );
  earth.add(earthBody);
  const earthAtmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.56, 36, 24),
    new THREE.MeshBasicMaterial({
      color: 0x7cd8d1,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  earth.add(earthAtmosphere);
  const earthGlow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: earthGlowTexture,
      color: 0x92c8e5,
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  earthGlow.scale.set(3, 3, 1);
  earth.add(earthGlow);
  scene.add(earth);

  const markerGroup = new THREE.Group();
  moonPivot.add(markerGroup);
  const surfaceTagGroup = new THREE.Group();
  markerGroup.add(surfaceTagGroup);
  const featureMarkers = [];
  const hitMeshes = [];
  const surfaceTags = [];
  const surveyedByRegion = new Map();
  let activeFeatureIndex = 0;
  let selectedRegion = "spa";

  function getSurveySet(regionId = selectedRegion) {
    if (!surveyedByRegion.has(regionId)) {
      surveyedByRegion.set(regionId, new Set());
    }
    return surveyedByRegion.get(regionId);
  }

  function clearFeatureMarkers() {
    featureMarkers.splice(0).forEach((marker) => {
      markerGroup.remove(marker.root);
      marker.root.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      });
    });
    hitMeshes.splice(0);
  }

  function buildFeatureMarkers(regionId) {
    clearFeatureMarkers();
    const features = FEATURE_DATA[regionId] || FEATURE_DATA.spa;
    const point = new THREE.Vector3(0, 0, 1);

    features.forEach((feature, index) => {
      const root = new THREE.Group();
      const surveyed = getSurveySet(regionId).has(feature.id);
      const color = 0x050505;
      const position = latLonToVector(
        feature.lat,
        feature.lon,
        MOON_RADIUS * 1.025
      );
      root.position.copy(position);
      root.quaternion.setFromUnitVectors(point, position.clone().normalize());

      const ringMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.42,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.042, 0.052, 48),
        ringMaterial
      );
      root.add(ring);

      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.021, 16, 10),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.72,
          depthWrite: false
        })
      );
      root.add(dot);
      const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: earthGlowTexture,
          color: 0xcfefff,
          transparent: true,
          opacity: 0.42,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      );
      glow.scale.set(0.16, 0.16, 1);
      root.add(glow);

      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0.06),
          new THREE.Vector3(0, 0, 0.28)
        ]),
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity: 0.42
        })
      );
      root.add(line);
      const tick = new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-0.035, 0, 0.28),
          new THREE.Vector3(0, 0, 0.28),
          new THREE.Vector3(0, 0, 0.28),
          new THREE.Vector3(0.035, 0, 0.28),
          new THREE.Vector3(0, -0.03, 0.28),
          new THREE.Vector3(0, 0.03, 0.28)
        ]),
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity: 0.42
        })
      );
      root.add(tick);

      const reticleSize = 0.105;
      const reticleGap = 0.03;
      const reticle = new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-reticleSize, 0, 0),
          new THREE.Vector3(-reticleGap, 0, 0),
          new THREE.Vector3(reticleGap, 0, 0),
          new THREE.Vector3(reticleSize, 0, 0),
          new THREE.Vector3(0, -reticleSize, 0),
          new THREE.Vector3(0, -reticleGap, 0),
          new THREE.Vector3(0, reticleGap, 0),
          new THREE.Vector3(0, reticleSize, 0)
        ]),
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity: 0
        })
      );
      root.add(reticle);

      const labelColor = `#${new THREE.Color(color).getHexString()}`;
      const label = createLabelSprite(feature.name, labelColor, 0.68);
      label.position.set(0, 0, 0.4);
      label.material.opacity = index === 0 ? 0.9 : 0.46;
      root.add(label);

      const hitProxy = new THREE.Mesh(
        new THREE.SphereGeometry(0.17, 12, 10),
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          depthWrite: false
        })
      );
      hitProxy.userData.featureIndex = index;
      hitProxy.userData.feature = feature;
      root.add(hitProxy);
      hitMeshes.push(hitProxy);

      const marker = {
        root,
        ring,
        dot,
        glow,
        line,
        tick,
        reticle,
        label,
        hitProxy,
        feature,
        index,
        pulse: 0,
        surveyed
      };
      featureMarkers.push(marker);
      markerGroup.add(root);
    });
  }

  const orbitSystem = new THREE.Group();
  worldRoot.add(orbitSystem);
  const probes = [];
  const probeHitMeshes = [];

  function createRodBetween(start, end, radius, material) {
    const delta = end.clone().sub(start);
    const length = delta.length();
    const rod = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, length, 10),
      material
    );
    rod.position.copy(start).add(end).multiplyScalar(0.5);
    rod.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      delta.normalize()
    );
    return rod;
  }

  function createSolarWing(materials, width = 0.34, depth = 0.18) {
    const wing = new THREE.Group();
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(width, 0.016, depth),
      materials.solar
    );
    wing.add(panel);

    const frame = new THREE.LineSegments(
      new THREE.EdgesGeometry(panel.geometry),
      new THREE.LineBasicMaterial({
        color: materials.solar.color,
        transparent: true,
        opacity: 0.72
      })
    );
    wing.add(frame);

    for (let cell = -2; cell <= 2; cell += 1) {
      const divider = new THREE.Mesh(
        new THREE.BoxGeometry(0.008, 0.02, depth * 0.94),
        materials.dark
      );
      divider.position.x = (cell / 2.5) * width;
      wing.add(divider);
    }

    return wing;
  }

  function createDish(radius, depth, materials) {
    const dish = new THREE.Group();
    const bowl = new THREE.Mesh(
      new THREE.ConeGeometry(radius, depth, 32, 1, true),
      materials.dish
    );
    bowl.rotation.x = Math.PI / 2;
    dish.add(bowl);

    const feed = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 0.09, 12, 8),
      materials.gold
    );
    feed.position.z = depth * 0.48;
    dish.add(feed);

    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(radius, Math.max(0.004, radius * 0.04), 8, 40),
      materials.dish
    );
    rim.position.z = depth * 0.5;
    dish.add(rim);

    for (let index = 0; index < 3; index += 1) {
      const angle = (index / 3) * Math.PI * 2;
      const start = new THREE.Vector3(
        Math.cos(angle) * radius * 0.82,
        Math.sin(angle) * radius * 0.82,
        depth * 0.36
      );
      const end = new THREE.Vector3(0, 0, depth * 0.48);
      dish.add(createRodBetween(start, end, radius * 0.018, materials.metal));
    }

    return dish;
  }

  function createSolarPanelTexture(color) {
    const panelCanvas = document.createElement("canvas");
    panelCanvas.width = 256;
    panelCanvas.height = 128;
    const context = panelCanvas.getContext("2d");
    const panelColor = new THREE.Color(color);
    const gradient = context.createLinearGradient(0, 0, 0, 128);
    gradient.addColorStop(
      0,
      `#${panelColor.clone().offsetHSL(0, 0.08, 0.14).getHexString()}`
    );
    gradient.addColorStop(0.5, `#${panelColor.getHexString()}`);
    gradient.addColorStop(
      1,
      `#${panelColor.clone().offsetHSL(0, 0.05, -0.12).getHexString()}`
    );
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 128);
    context.strokeStyle = "rgba(3,10,18,0.82)";
    context.lineWidth = 2;
    for (let x = 0; x <= 256; x += 16) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, 128);
      context.stroke();
    }
    for (let y = 0; y <= 128; y += 16) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(256, y);
      context.stroke();
    }
    context.strokeStyle = "rgba(220,235,244,0.34)";
    context.strokeRect(1, 1, 254, 126);
    const texture = new THREE.CanvasTexture(panelCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    return texture;
  }

  function createSatelliteMaterials(config) {
    const solarTexture = createSolarPanelTexture(config.solarColor);
    return {
      metal: new THREE.MeshPhysicalMaterial({
        color: 0xd8d8d2,
        roughness: 0.34,
        metalness: 0.84,
        clearcoat: 0.18,
        clearcoatRoughness: 0.3,
        envMapIntensity: 0.9
      }),
      dark: new THREE.MeshStandardMaterial({
        color: 0x202426,
        roughness: 0.52,
        metalness: 0.58
      }),
      gold: new THREE.MeshPhysicalMaterial({
        color: 0xc49a45,
        emissive: 0x241400,
        emissiveIntensity: 0.18,
        roughness: 0.34,
        metalness: 0.72,
        clearcoat: 0.1,
        envMapIntensity: 0.7
      }),
      solar: new THREE.MeshPhysicalMaterial({
        map: solarTexture,
        emissive: config.color,
        emissiveIntensity: 0.08,
        roughness: 0.34,
        metalness: 0.48,
        clearcoat: 0.28,
        clearcoatRoughness: 0.18,
        envMapIntensity: 0.85
      }),
      dish: new THREE.MeshStandardMaterial({
        color: config.dishColor,
        side: THREE.DoubleSide,
        roughness: 0.28,
        metalness: 0.7,
        envMapIntensity: 0.8
      }),
      steel: new THREE.MeshPhysicalMaterial({
        color: 0xc8ced2,
        roughness: 0.22,
        metalness: 0.92,
        clearcoat: 0.18,
        clearcoatRoughness: 0.22,
        envMapIntensity: 1
      }),
      heat: new THREE.MeshStandardMaterial({
        color: 0x141618,
        side: THREE.DoubleSide,
        roughness: 0.7,
        metalness: 0.12
      })
    };
  }

  function createLROModel(materials) {
    const model = new THREE.Group();
    const bus = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.12, 0.24),
      materials.gold
    );
    model.add(bus);

    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.025, 0.22),
      materials.metal
    );
    deck.position.y = 0.072;
    model.add(deck);

    for (const x of [-0.42, 0.42]) {
      const wing = createSolarWing(materials, 0.42, 0.22);
      wing.position.x = x;
      model.add(wing);
      model.add(createRodBetween(
        new THREE.Vector3(Math.sign(x) * 0.1, 0, 0),
        new THREE.Vector3(x - Math.sign(x) * 0.2, 0, 0),
        0.011,
        materials.metal
      ));
    }

    const dish = createDish(0.125, 0.075, materials);
    dish.position.set(0, -0.05, 0.18);
    model.add(dish);

    const mast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.3, 10),
      materials.metal
    );
    mast.position.set(0.13, -0.09, -0.1);
    mast.rotation.z = 0.7;
    model.add(mast);

    const radiometer = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.05, 0.08),
      materials.metal
    );
    radiometer.position.set(-0.14, 0, -0.1);
    model.add(radiometer);

    return model;
  }

  function createQueqiaoModel(materials) {
    const model = new THREE.Group();
    const bus = new THREE.Mesh(
      new THREE.BoxGeometry(0.26, 0.18, 0.22),
      materials.gold
    );
    model.add(bus);

    const upperDeck = new THREE.Mesh(
      new THREE.BoxGeometry(0.21, 0.03, 0.18),
      materials.metal
    );
    upperDeck.position.y = 0.105;
    model.add(upperDeck);

    for (const x of [-0.46, 0.46]) {
      const wing = createSolarWing(materials, 0.5, 0.25);
      wing.position.x = x;
      model.add(wing);
      model.add(createRodBetween(
        new THREE.Vector3(Math.sign(x) * 0.13, 0, 0),
        new THREE.Vector3(x - Math.sign(x) * 0.24, 0, 0),
        0.012,
        materials.metal
      ));
    }

    const mainDish = createDish(0.29, 0.13, materials);
    mainDish.position.set(0, 0, 0.24);
    model.add(mainDish);

    const secondaryDish = createDish(0.12, 0.06, materials);
    secondaryDish.position.set(0.16, -0.13, -0.14);
    secondaryDish.rotation.x = -0.55;
    model.add(secondaryDish);

    const antennaMast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.28, 10),
      materials.metal
    );
    antennaMast.position.set(-0.15, 0.13, 0);
    antennaMast.rotation.z = 0.72;
    model.add(antennaMast);

    return model;
  }

  function createCapstoneModel(materials) {
    const model = new THREE.Group();
    const bus = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.11, 0.19),
      materials.metal
    );
    model.add(bus);

    const goldPanel = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.014, 0.16),
      materials.gold
    );
    goldPanel.position.y = 0.065;
    model.add(goldPanel);

    for (const x of [-0.31, 0.31]) {
      const wing = createSolarWing(materials, 0.34, 0.18);
      wing.position.x = x;
      model.add(wing);
      model.add(createRodBetween(
        new THREE.Vector3(Math.sign(x) * 0.08, 0, 0),
        new THREE.Vector3(x - Math.sign(x) * 0.16, 0, 0),
        0.009,
        materials.metal
      ));
    }

    const dish = createDish(0.105, 0.06, materials);
    dish.position.set(0, 0, 0.15);
    model.add(dish);

    const thruster = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.05, 0.1, 16, 1, true),
      materials.dark
    );
    thruster.position.z = -0.13;
    thruster.rotation.x = Math.PI / 2;
    model.add(thruster);

    return model;
  }

  function createTiangongModel(materials) {
    const model = new THREE.Group();

    const coreModule = new THREE.Mesh(
      new THREE.CylinderGeometry(0.075, 0.075, 0.46, 24),
      materials.gold
    );
    coreModule.rotation.x = Math.PI / 2;
    model.add(coreModule);

    const node = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 24, 16),
      materials.metal
    );
    node.position.z = 0.24;
    model.add(node);

    for (const side of [-1, 1]) {
      const labModule = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.065, 0.34, 20),
        materials.metal
      );
      labModule.rotation.z = Math.PI / 2;
      labModule.position.x = side * 0.23;
      model.add(labModule);

      const dockingRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.072, 0.012, 8, 28),
        materials.gold
      );
      dockingRing.rotation.y = Math.PI / 2;
      dockingRing.position.x = side * 0.42;
      model.add(dockingRing);

      for (const y of [-0.12, 0.12]) {
        const wing = createSolarWing(materials, 0.4, 0.2);
        wing.position.set(side * 0.43, y, -0.02);
        wing.rotation.x = y > 0 ? -0.18 : 0.18;
        model.add(wing);
      }
    }

    const rearPort = new THREE.Mesh(
      new THREE.TorusGeometry(0.073, 0.012, 8, 28),
      materials.gold
    );
    rearPort.position.z = -0.24;
    model.add(rearPort);

    const radiator = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.012, 0.12),
      materials.dish
    );
    radiator.position.set(0, -0.11, -0.03);
    model.add(radiator);

    const armBase = new THREE.Vector3(-0.1, 0.1, 0.08);
    const armElbow = new THREE.Vector3(-0.22, 0.22, 0.18);
    const armTip = new THREE.Vector3(-0.12, 0.31, 0.31);
    model.add(createRodBetween(armBase, armElbow, 0.012, materials.metal));
    model.add(createRodBetween(armElbow, armTip, 0.01, materials.metal));
    const armJoint = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 12, 8),
      materials.gold
    );
    armJoint.position.copy(armElbow);
    model.add(armJoint);

    const antenna = createDish(0.085, 0.045, materials);
    antenna.position.set(0.1, -0.1, 0.22);
    antenna.rotation.x = -0.25;
    model.add(antenna);

    return model;
  }

  function createStarshipModel(materials) {
    const model = new THREE.Group();

    const booster = new THREE.Mesh(
      new THREE.CylinderGeometry(0.082, 0.09, 0.44, 28),
      materials.steel
    );
    booster.rotation.x = Math.PI / 2;
    booster.position.z = -0.38;
    model.add(booster);

    const upperStage = new THREE.Mesh(
      new THREE.CylinderGeometry(0.078, 0.082, 0.43, 28),
      materials.steel
    );
    upperStage.rotation.x = Math.PI / 2;
    upperStage.position.z = 0.1;
    model.add(upperStage);

    const nose = new THREE.Mesh(
      new THREE.ConeGeometry(0.078, 0.18, 28),
      materials.steel
    );
    nose.rotation.x = Math.PI / 2;
    nose.position.z = 0.405;
    model.add(nose);

    for (const [z, length] of [[-0.17, 0.43], [0.1, 0.42]]) {
      const heatShield = new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.0805,
          0.0835,
          length,
          28,
          1,
          true,
          Math.PI * 0.52,
          Math.PI * 1.02
        ),
        materials.heat
      );
      heatShield.rotation.x = Math.PI / 2;
      heatShield.position.z = z;
      model.add(heatShield);
    }

    for (let ringZ = -0.56; ringZ <= -0.2; ringZ += 0.12) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.084, 0.004, 6, 28),
        materials.dark
      );
      ring.position.z = ringZ;
      model.add(ring);
    }

    for (const side of [-1, 1]) {
      const gridFin = new THREE.Mesh(
        new THREE.BoxGeometry(0.085, 0.016, 0.07),
        materials.dark
      );
      gridFin.position.set(side * 0.105, 0, -0.18);
      gridFin.rotation.z = side * 0.08;
      model.add(gridFin);
    }

    const flapPositions = [
      new THREE.Vector3(-0.095, 0, -0.045),
      new THREE.Vector3(0.095, 0, -0.045),
      new THREE.Vector3(0, -0.095, 0.28),
      new THREE.Vector3(0, 0.095, 0.28)
    ];
    flapPositions.forEach((position, index) => {
      const flap = new THREE.Mesh(
        new THREE.BoxGeometry(
          index < 2 ? 0.03 : 0.095,
          index < 2 ? 0.095 : 0.03,
          0.07
        ),
        materials.dark
      );
      flap.position.copy(position);
      model.add(flap);
    });

    const enginePositions = [
      [-0.035, -0.035],
      [0, -0.038],
      [0.035, -0.035],
      [-0.035, 0.035],
      [0, 0.038],
      [0.035, 0.035]
    ];
    enginePositions.forEach(([x, y]) => {
      const nozzle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.026, 0.085, 12, 1, true),
        materials.dark
      );
      nozzle.rotation.x = Math.PI / 2;
      nozzle.position.set(x, y, -0.63);
      model.add(nozzle);
    });

    const hotStageRing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.087, 0.087, 0.04, 28, 1, true),
      materials.gold
    );
    hotStageRing.rotation.x = Math.PI / 2;
    hotStageRing.position.z = -0.14;
    model.add(hotStageRing);

    const catchPinLeft = new THREE.Mesh(
      new THREE.BoxGeometry(0.055, 0.022, 0.05),
      materials.dark
    );
    catchPinLeft.position.set(-0.105, 0, -0.48);
    model.add(catchPinLeft);
    const catchPinRight = catchPinLeft.clone();
    catchPinRight.position.x = 0.105;
    model.add(catchPinRight);

    return model;
  }

  function solveKeplerOrbitPoint(config, angle) {
    let eccentricAnomaly = angle;
    for (let iteration = 0; iteration < 6; iteration += 1) {
      eccentricAnomaly -= (
        eccentricAnomaly
        - config.e * Math.sin(eccentricAnomaly)
        - angle
      ) / (1 - config.e * Math.cos(eccentricAnomaly));
    }
    const radial = config.a * (1 - config.e * Math.cos(eccentricAnomaly));
    const trueAnomaly = 2 * Math.atan2(
      Math.sqrt(1 + config.e) * Math.sin(eccentricAnomaly / 2),
      Math.sqrt(1 - config.e) * Math.cos(eccentricAnomaly / 2)
    );
    const argument = trueAnomaly + config.argument;
    const cosNode = Math.cos(config.node);
    const sinNode = Math.sin(config.node);
    const cosInclination = Math.cos(config.inclination);
    const sinInclination = Math.sin(config.inclination);
    return new THREE.Vector3(
      radial * (cosNode * Math.cos(argument) - sinNode * Math.sin(argument) * cosInclination),
      radial * (sinInclination * Math.sin(argument)),
      radial * (sinNode * Math.cos(argument) + cosNode * Math.sin(argument) * cosInclination)
    );
  }

  function createOrbitProbe(config) {
    const orbitPoints = [];
    for (let index = 0; index < 220; index += 1) {
      const angle = (index / 220) * Math.PI * 2;
      orbitPoints.push(config.positionAt(angle));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const lineMaterial = config.dashed
      ? new THREE.LineDashedMaterial({
          color: config.color,
          dashSize: config.dashSize || 0.18,
          gapSize: config.gapSize || 0.12,
          transparent: true,
          opacity: config.opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      : new THREE.LineBasicMaterial({
          color: config.color,
          transparent: true,
          opacity: config.opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });
    const line = new THREE.Line(geometry, lineMaterial);
    if (config.dashed) {
      line.computeLineDistances();
    }
    orbitSystem.add(line);

    const materials = createSatelliteMaterials(config);
    const satellite = config.createModel(materials);
    const modelScale = (config.displayScale || 1) * 0.28;
    satellite.scale.setScalar(modelScale);
    const label = createLabelSprite(config.name, config.labelColor || "#f3f0e8", 0.52);
    label.scale.multiplyScalar(1 / modelScale);
    label.position.set(0, 0.32, 0);
    label.material.opacity = 0.34;
    satellite.add(label);

    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: earthGlowTexture,
        color: config.color,
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    glow.scale.set(0.54, 0.54, 1);
    glow.scale.multiplyScalar(0.3);
    glow.scale.multiplyScalar(1 / modelScale);
    satellite.add(glow);

    const hitProxy = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 12, 10),
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false
      })
    );
    hitProxy.userData.probeIndex = probes.length;
    satellite.add(hitProxy);
    probeHitMeshes.push(hitProxy);

    orbitSystem.add(satellite);
    const probe = {
      ...config,
      line,
      satellite,
      label,
      glow,
      phase: config.phase || 0,
      active: probes.length === 0,
      status: config.status
    };
    probes.push(probe);
    return probe;
  }

  function createProbeOrbits() {
    const l2Marker = new THREE.Group();
    l2Marker.position.set(0, 0, 5.25);
    const l2Core = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 16, 10),
      new THREE.MeshBasicMaterial({
        color: 0xe8c878,
        transparent: true,
        opacity: 0.92
      })
    );
    l2Marker.add(l2Core);
    const l2Ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.11, 0.009, 8, 40),
      new THREE.MeshBasicMaterial({
        color: 0xe8c878,
        transparent: true,
        opacity: 0.58,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    l2Marker.add(l2Ring);
    const l2Label = createLabelSprite("EARTH–MOON L2", "#e8c878", 0.42);
    l2Label.position.set(0, 0.2, 0);
    l2Marker.add(l2Label);
    orbitSystem.add(l2Marker);

    const lro = createOrbitProbe({
      id: "lro",
      name: "LRO",
      status: "LRO · 50 km polar orbit · T 113 min · i 90°",
      color: 0x7cd8d1,
      solarColor: 0x214c66,
      dishColor: 0xc9c5b8,
      opacity: 0.3,
      displayScale: 1.4,
      angularSpeed: (Math.PI * 2) / 12,
      phase: 0.75,
      positionAt: (angle) => solveKeplerOrbitPoint({
        a: MOON_RADIUS + 0.1,
        e: 0.002,
        inclination: THREE.MathUtils.degToRad(90),
        node: 0.34,
        argument: -Math.PI / 2
      }, angle),
      createModel: createLROModel
    });

    const queqiao = createOrbitProbe({
      id: "queqiao",
      name: "QUEQIAO",
      status: "QUEQIAO · Earth–Moon L2 halo · T ~14 d · far-side relay",
      color: 0xe8c878,
      solarColor: 0x4b4261,
      dishColor: 0xe2ddd0,
      opacity: 0.38,
      displayScale: 1.55,
      angularSpeed: (Math.PI * 2) / 42,
      phase: 1.2,
      positionAt: (angle) => {
        const planeTilt = 0.28;
        const x = Math.cos(angle) * 3.15;
        const y = Math.sin(angle) * 1.5 - 0.2;
        return new THREE.Vector3(
          x * Math.cos(planeTilt) - y * Math.sin(planeTilt),
          x * Math.sin(planeTilt) + y * Math.cos(planeTilt),
          5.25 + Math.sin(angle * 2) * 0.72
        );
      },
      dashed: true,
      dashSize: 0.22,
      gapSize: 0.14,
      createModel: createQueqiaoModel
    });

    const capstone = createOrbitProbe({
      id: "capstone",
      name: "CAPSTONE",
      status: "CAPSTONE · 9:2 NRHO · T ~6.5 d · perilune ~3,000 km",
      color: 0xff7a45,
      solarColor: 0x453946,
      dishColor: 0xd3d0c8,
      opacity: 0.33,
      displayScale: 1.25,
      angularSpeed: (Math.PI * 2) / 18,
      phase: 3.8,
      positionAt: (angle) => solveKeplerOrbitPoint({
        a: 5.2,
        e: 0.32,
        inclination: THREE.MathUtils.degToRad(72),
        node: 1.02,
        argument: 0.65
      }, angle),
      createModel: createCapstoneModel
    });

    const transferCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-7.2, 2.1, -9.4),
      new THREE.Vector3(-4.6, 1.3, -6.7),
      new THREE.Vector3(-2.1, 0.65, -4.6),
      new THREE.Vector3(1.15, 0.18, -3.75),
      new THREE.Vector3(3.85, 0.05, -0.7),
      new THREE.Vector3(4.22, -0.15, 3.5)
    ], false, "catmullrom", 0.24);
    const tiangong = createOrbitProbe({
      id: "tiangong",
      name: "TIANGONG",
      status: "TIANGONG · visual translunar transfer → 180 km lunar orbit",
      color: 0xff6a45,
      solarColor: 0x214f72,
      dishColor: 0xc8c4bc,
      opacity: 0.36,
      displayScale: 1.35,
      angularSpeed: (Math.PI * 2) / 15,
      phase: 2.25,
      positionAt: (angle) => solveKeplerOrbitPoint({
        a: 4.05,
        e: 0.1,
        inclination: THREE.MathUtils.degToRad(48),
        node: -0.45,
        argument: 1.0
      }, angle),
      createModel: createTiangongModel,
      transferCurve,
      transferProgress: 0.08,
      transferDuration: 16
    });

    const transferGeometry = new THREE.BufferGeometry().setFromPoints(
      transferCurve.getPoints(180)
    );
    const transferLine = new THREE.Line(
      transferGeometry,
      new THREE.LineDashedMaterial({
        color: 0xff8b62,
        dashSize: 0.18,
        gapSize: 0.13,
        transparent: true,
        opacity: 0.52,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    transferLine.computeLineDistances();
    orbitSystem.add(transferLine);
    tiangong.transferLine = transferLine;

    const starshipTransferCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-8.6, -2.2, -10.8),
      new THREE.Vector3(-5.5, -1.35, -7.6),
      new THREE.Vector3(-2.8, -0.72, -5.2),
      new THREE.Vector3(0.85, -0.2, -4.05),
      new THREE.Vector3(4.1, 0.1, -1.2),
      new THREE.Vector3(4.6, 0.35, 3.85)
    ], false, "catmullrom", 0.24);
    const starship = createOrbitProbe({
      id: "starship",
      name: "STARSHIP",
      status: "STARSHIP · visual translunar transfer → lunar orbit",
      color: 0xc9d4dc,
      solarColor: 0x26313a,
      dishColor: 0xc8ced2,
      opacity: 0.4,
      displayScale: 1.55,
      angularSpeed: (Math.PI * 2) / 17,
      phase: 4.35,
      positionAt: (angle) => solveKeplerOrbitPoint({
        a: 4.45,
        e: 0.12,
        inclination: THREE.MathUtils.degToRad(57),
        node: 0.7,
        argument: 1.35
      }, angle),
      createModel: createStarshipModel,
      transferCurve: starshipTransferCurve,
      transferProgress: 0.02,
      transferDuration: 19
    });

    const starshipTransferLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        starshipTransferCurve.getPoints(200)
      ),
      new THREE.LineDashedMaterial({
        color: 0xd9e4ea,
        dashSize: 0.2,
        gapSize: 0.14,
        transparent: true,
        opacity: 0.48,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    starshipTransferLine.computeLineDistances();
    orbitSystem.add(starshipTransferLine);
    starship.transferLine = starshipTransferLine;

    return { lro, queqiao, capstone, tiangong, starship };
  }

  const probeOrbits = createProbeOrbits();
  let activeProbeIndex = 0;

  const scanRings = [];
  function spawnScan(featureIndex, label = "MAPPED", signal = null) {
    const marker = featureMarkers[featureIndex];
    if (!marker) return;

    const material = new THREE.MeshBasicMaterial({
      color: INSTRUMENT_PROFILES[instrumentState.id]?.accent || 0xe8c878,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.052, 0.063, 72),
      material
    );
    ring.position.copy(marker.root.position);
    ring.quaternion.copy(marker.root.quaternion);
    markerGroup.add(ring);
    scanRings.push({
      mesh: ring,
      life: 0,
      maxLife: reducedMotion ? 0.3 : 0.95
    });

    marker.pulse = 1;
    const sampledSignal = `${Math.round(64 + Math.random() * 32)}%`;
    const value = signal ?? sampledSignal;
    marker.root.getWorldPosition(worldPosition);
    projectedPosition.copy(worldPosition).project(camera);
    const x = (projectedPosition.x * 0.5 + 0.5) * viewportWidth();
    const y = (-projectedPosition.y * 0.5 + 0.5) * viewportHeight();
    onCritical({
      x,
      y,
      label,
      value: value.endsWith("%") ? `SIGNAL ${value}` : value,
      range: value
    });
    onPulse();
  }

  function addSurfaceTag(surface) {
    if (!surface) return;
    const material = new THREE.MeshBasicMaterial({
      color: 0x7cd8d1,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const root = new THREE.Group();
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.055, 0.09, 48),
      material
    );
    const crossA = new THREE.Mesh(
      new THREE.BoxGeometry(0.012, 0.012, 0.24),
      material.clone()
    );
    const crossB = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.012, 0.012),
      material.clone()
    );
    root.add(ring, crossA, crossB);
    root.position.copy(surface.vector);
    root.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      surface.vector.clone().normalize()
    );
    surfaceTagGroup.add(root);
    surfaceTags.push({
      root,
      life: 0,
      maxLife: reducedMotion ? 1.2 : 8
    });

    const activeMarker = featureMarkers[activeFeatureIndex] || featureMarkers[0];
    let range = "LOCAL WAYPOINT";
    if (activeMarker) {
      const target = latLonToVector(
        activeMarker.feature.lat,
        activeMarker.feature.lon,
        1
      );
      const source = surface.vector.clone().normalize();
      const angle = Math.acos(clamp(source.dot(target), -1, 1));
      range = `${Math.round(angle * 1737.4)} km to ${activeMarker.feature.name}`;
    }

    onCritical({
      x: surface.x,
      y: surface.y,
      label: `${surface.latitude} ${surface.longitude}`,
      value: range,
      range: "waypoint"
    });
    setState("waypoint", `${surface.latitude} ${surface.longitude} tagged`);
    onPulse();
  }

  const sampleParticles = [];
  const sampleState = {
    active: false,
    progress: 0,
    featureIndex: 0,
    emitted: false
  };
  const sampleGroup = new THREE.Group();
  moonPivot.add(sampleGroup);

  function startSample() {
    if (sampleState.active) return;
    const marker = featureMarkers[activeFeatureIndex] || featureMarkers[0];
    if (!marker) return;

    sampleState.active = true;
    sampleState.progress = 0;
    sampleState.featureIndex = marker.index;
    sampleState.emitted = false;
    sampleParticles.splice(0).forEach((particle) => sampleGroup.remove(particle.mesh));

    const origin = marker.root.position.clone();
    const normal = origin.clone().normalize();
    const tangent = new THREE.Vector3(-normal.z, 0, normal.x).normalize();
    const bitangent = new THREE.Vector3().crossVectors(normal, tangent).normalize();
    const count = viewportWidth() < 760 ? 30 : 52;

    for (let index = 0; index < count; index += 1) {
      const particle = new THREE.Mesh(
        new THREE.TetrahedronGeometry(0.018 + Math.random() * 0.014),
        new THREE.MeshBasicMaterial({
          color: index % 4 === 0 ? 0xff7a45 : 0xe8c878,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      particle.position.copy(origin);
      sampleGroup.add(particle);
      sampleParticles.push({
        mesh: particle,
        origin: origin.clone(),
        tangent: tangent.clone(),
        bitangent: bitangent.clone(),
        normal: normal.clone(),
        phase: Math.random() * Math.PI * 2,
        radius: 0.06 + Math.random() * 0.18
      });
    }

    setState("sampling", `${marker.feature.name} surface sampling`);
    animate(sampleState, {
      progress: 1,
      duration: reducedMotion ? 240 : 2500,
      ease: "inOutCubic",
      onComplete: () => {
        sampleState.active = false;
        sampleCount += 1;
        setState(
          "observing",
          `Sample ${String(sampleCount).padStart(3, "0")} archived`
        );
      }
    });
  }

  const mission = {
    mode: "relay",
    running: false,
    success: false,
    progress: 0,
    params: {
      haloAmplitude: 91,
      haloPhase: 180,
      descentAngle: 56,
      surfaceHours: 24
    },
    metrics: {},
    pathPoints: [],
    landingPosition: new THREE.Vector3(),
    landingNormal: new THREE.Vector3(0, 1, 0)
  };

  const manualLanding = {
    active: false,
    complete: false,
    success: false,
    altitude: 620,
    verticalSpeed: -38,
    horizontalSpeed: 7,
    offset: -34,
    fuel: 100,
    throttle: 52,
    lateral: 0,
    tilt: 0,
    elapsed: 0,
    score: 0,
    status: "ready",
    lastEmit: 0
  };

  function createMissionMaterials() {
    return {
      hull: new THREE.MeshStandardMaterial({
        color: 0xd9d8cf,
        roughness: 0.34,
        metalness: 0.78
      }),
      gold: new THREE.MeshStandardMaterial({
        color: 0xc79942,
        emissive: 0x251503,
        emissiveIntensity: 0.22,
        roughness: 0.42,
        metalness: 0.7
      }),
      dark: new THREE.MeshStandardMaterial({
        color: 0x151719,
        roughness: 0.52,
        metalness: 0.72
      }),
      solar: new THREE.MeshStandardMaterial({
        color: 0x62cad2,
        emissive: 0x0c3940,
        emissiveIntensity: 0.52,
        roughness: 0.3,
        metalness: 0.46
      }),
      accent: new THREE.MeshStandardMaterial({
        color: 0xe55a3c,
        emissive: 0x4d0c04,
        emissiveIntensity: 0.35,
        roughness: 0.48,
        metalness: 0.32
      })
    };
  }

  function createRelayCraft(materials) {
    const root = new THREE.Group();
    const bus = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.16, 0.3),
      materials.hull
    );
    root.add(bus);
    const instrumentDeck = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.035, 0.22),
      materials.gold
    );
    instrumentDeck.position.y = -0.1;
    root.add(instrumentDeck);
    const dish = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2),
      materials.hull
    );
    dish.position.y = 0.13;
    dish.rotation.x = Math.PI;
    root.add(dish);
    const feed = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.018, 0.17, 10),
      materials.dark
    );
    feed.position.set(0, 0.23, 0.03);
    feed.rotation.x = Math.PI / 2;
    root.add(feed);

    [-1, 1].forEach((side) => {
      const wing = new THREE.Mesh(
        new THREE.BoxGeometry(0.44, 0.015, 0.2),
        materials.solar
      );
      wing.position.set(side * 0.34, -0.015, 0);
      root.add(wing);
      root.add(createRodBetween(
        new THREE.Vector3(side * 0.11, -0.015, 0),
        new THREE.Vector3(side * 0.13, -0.015, 0),
        0.014,
        materials.dark
      ));
    });

    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 10, 8),
      materials.accent
    );
    beacon.position.set(0, -0.13, 0.17);
    root.add(beacon);
    return root;
  }

  function createStarshipLander(materials) {
    const root = new THREE.Group();
    const hullMaterial = materials.hull.clone();
    hullMaterial.color.setHex(0xe8e8e3);
    hullMaterial.roughness = 0.3;
    hullMaterial.metalness = 0.74;
    hullMaterial.envMapIntensity = 0.38;
    const seamMaterial = new THREE.MeshStandardMaterial({
      color: 0x92918b,
      roughness: 0.4,
      metalness: 0.72
    });
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0x071319,
      emissive: 0x0a2b35,
      emissiveIntensity: 0.34,
      roughness: 0.18,
      metalness: 0.54
    });
    const panelMaterial = materials.dark.clone();
    panelMaterial.color.setHex(0x111416);
    panelMaterial.roughness = 0.62;
    panelMaterial.metalness = 0.42;

    const profile = [
      new THREE.Vector2(0, -0.9),
      new THREE.Vector2(0.158, -0.9),
      new THREE.Vector2(0.158, 0.28),
      new THREE.Vector2(0.16, 0.36),
      new THREE.Vector2(0.156, 0.44),
      new THREE.Vector2(0.149, 0.51),
      new THREE.Vector2(0.135, 0.58),
      new THREE.Vector2(0.112, 0.65),
      new THREE.Vector2(0.082, 0.72),
      new THREE.Vector2(0.05, 0.78),
      new THREE.Vector2(0.022, 0.82),
      new THREE.Vector2(0, 0.84)
    ];
    const hull = new THREE.Mesh(
      new THREE.LatheGeometry(profile, 72),
      hullMaterial
    );
    root.add(hull);

    [0, Math.PI / 2, Math.PI, Math.PI * 1.5].forEach((angle) => {
      const points = profile.map((point) => new THREE.Vector3(
        Math.sin(angle) * (point.x + 0.0015),
        point.y,
        Math.cos(angle) * (point.x + 0.0015)
      ));
      const seam = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({
          color: 0x77766f,
          transparent: true,
          opacity: 0.24
        })
      );
      root.add(seam);
    });

    [
      [-0.68, 0.157],
      [-0.38, 0.157],
      [-0.08, 0.157],
      [0.22, 0.157],
      [0.42, 0.148]
    ].forEach(([height, radius]) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.0022, 6, 72),
        seamMaterial
      );
      ring.position.y = height;
      ring.rotation.x = Math.PI / 2;
      root.add(ring);
    });

    const windowBand = new THREE.Group();
    [-0.25, -0.15, -0.05, 0.05, 0.15, 0.25].forEach((angle) => {
      const normal = new THREE.Vector3(
        Math.sin(angle),
        0,
        Math.cos(angle)
      ).normalize();
      const windowMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.052, 0.028, 0.008),
        windowMaterial
      );
      windowMesh.position.copy(normal).multiplyScalar(0.163);
      windowMesh.position.y = 0.18;
      windowMesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        normal
      );
      windowBand.add(windowMesh);
    });
    root.add(windowBand);

    const hatch = new THREE.Mesh(
      new THREE.BoxGeometry(0.09, 0.13, 0.01),
      materials.gold
    );
    hatch.position.set(0, 0.37, 0.164);
    root.add(hatch);
    const hatchInset = new THREE.Mesh(
      new THREE.BoxGeometry(0.052, 0.082, 0.006),
      panelMaterial
    );
    hatchInset.position.set(0, 0.37, 0.171);
    root.add(hatchInset);

    const dockingPort = new THREE.Mesh(
      new THREE.CylinderGeometry(0.046, 0.058, 0.065, 24),
      hullMaterial
    );
    dockingPort.position.set(0, 0.48, 0.19);
    dockingPort.rotation.x = Math.PI / 2;
    root.add(dockingPort);
    const dockingHatch = new THREE.Mesh(
      new THREE.CircleGeometry(0.042, 24),
      panelMaterial
    );
    dockingHatch.position.set(0, 0.48, 0.224);
    root.add(dockingHatch);

    const elevatorRail = new THREE.Group();
    [-0.018, 0.018].forEach((x) => {
      const rail = new THREE.Mesh(
        new THREE.BoxGeometry(0.006, 0.88, 0.006),
        seamMaterial
      );
      rail.position.set(x, -0.18, 0.164);
      elevatorRail.add(rail);
    });
    const elevatorCar = new THREE.Mesh(
      new THREE.BoxGeometry(0.062, 0.05, 0.028),
      hullMaterial
    );
    elevatorCar.position.set(0, -0.07, 0.179);
    elevatorRail.add(elevatorCar);
    root.add(elevatorRail);

    const thrusterHousings = [];
    [Math.PI / 4, Math.PI * 0.75, Math.PI * 1.25, Math.PI * 1.75]
      .forEach((angle) => {
        const normal = new THREE.Vector3(
          Math.sin(angle),
          0,
          Math.cos(angle)
        ).normalize();
        const housing = new THREE.Mesh(
          new THREE.CylinderGeometry(0.026, 0.042, 0.062, 16),
          hullMaterial
        );
        housing.position.copy(normal).multiplyScalar(0.184);
        housing.position.y = 0.43;
        housing.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          normal
        );
        root.add(housing);
        const nozzle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.015, 0.032, 0.042, 16, 1, true),
          panelMaterial
        );
        nozzle.position.copy(normal).multiplyScalar(0.224);
        nozzle.position.y = 0.43;
        nozzle.quaternion.copy(housing.quaternion);
        root.add(nozzle);
        thrusterHousings.push(housing);
      });

    const baseCuts = [];
    [Math.PI / 6, Math.PI * 5 / 6, Math.PI * 3 / 2].forEach((angle) => {
      const shape = new THREE.Shape();
      shape.moveTo(-0.062, -0.095);
      shape.lineTo(-0.062, 0);
      shape.absarc(0, 0, 0.062, Math.PI, 0, true);
      shape.lineTo(0.062, -0.095);
      shape.lineTo(-0.062, -0.095);
      const cut = new THREE.Mesh(
        new THREE.ExtrudeGeometry(shape, {
          depth: 0.008,
          bevelEnabled: false
        }),
        panelMaterial
      );
      const normal = new THREE.Vector3(
        Math.sin(angle),
        0,
        Math.cos(angle)
      ).normalize();
      cut.position.copy(normal).multiplyScalar(0.16);
      cut.position.y = -0.77;
      cut.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        normal
      );
      root.add(cut);
      baseCuts.push(cut);
    });

    const engineGlows = [];
    for (let index = 0; index < 3; index += 1) {
      const angle = index * Math.PI * 2 / 3;
      const nozzle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.066, 0.105, 18, 1, true),
        panelMaterial
      );
      nozzle.position.set(
        Math.cos(angle) * 0.072,
        -0.96,
        Math.sin(angle) * 0.072
      );
      root.add(nozzle);
      const glow = new THREE.Mesh(
        new THREE.CircleGeometry(0.03, 20),
        new THREE.MeshBasicMaterial({
          color: 0xff7a2e,
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      );
      glow.position.copy(nozzle.position);
      glow.position.y -= 0.055;
      glow.rotation.x = Math.PI / 2;
      root.add(glow);
      engineGlows.push(glow);
    }

    const landingEngineGlows = [];
    [Math.PI / 4, Math.PI * 0.75, Math.PI * 1.25, Math.PI * 1.75]
      .forEach((angle) => {
        const normal = new THREE.Vector3(
          Math.sin(angle),
          0,
          Math.cos(angle)
        ).normalize();
        const glow = new THREE.Mesh(
          new THREE.CircleGeometry(0.022, 18),
          new THREE.MeshBasicMaterial({
            color: 0x9be7ff,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
          })
        );
        glow.position.copy(normal).multiplyScalar(0.244);
        glow.position.y = 0.43;
        glow.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 0, 1),
          normal
        );
        root.add(glow);
        landingEngineGlows.push(glow);
      });

    for (let index = 0; index < 4; index += 1) {
      const angle = index * Math.PI / 2 + Math.PI / 4;
      const radial = new THREE.Vector3(
        Math.sin(angle),
        0,
        Math.cos(angle)
      ).normalize();
      const start = radial.clone().multiplyScalar(0.155);
      start.y = -0.28;
      const end = radial.clone().multiplyScalar(0.43);
      end.y = -1;
      root.add(createRodBetween(start, end, 0.014, hullMaterial));
      const braceStart = radial.clone().multiplyScalar(0.153);
      braceStart.y = -0.64;
      const braceEnd = end.clone().multiplyScalar(0.68);
      braceEnd.y = -0.72;
      root.add(createRodBetween(braceStart, braceEnd, 0.01, hullMaterial));
      const hinge = new THREE.Mesh(
        new THREE.SphereGeometry(0.024, 12, 8),
        panelMaterial
      );
      hinge.position.copy(start);
      root.add(hinge);
      const foot = new THREE.Mesh(
        new THREE.CylinderGeometry(0.068, 0.078, 0.022, 18),
        panelMaterial
      );
      foot.position.copy(end);
      root.add(foot);
    }

    const solarPanels = [];
    [0, Math.PI / 2, Math.PI, Math.PI * 1.5].forEach((angle) => {
      const normal = new THREE.Vector3(
        Math.sin(angle),
        0,
        Math.cos(angle)
      ).normalize();
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(0.085, 0.62, 0.006),
        materials.solar
      );
      panel.position.copy(normal).multiplyScalar(0.162);
      panel.position.y = -0.34;
      panel.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        normal
      );
      root.add(panel);
      solarPanels.push(panel);
    });

    const sampleBoom = new THREE.Group();
    sampleBoom.position.set(0, -0.42, 0.17);
    const boomArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.016, 0.016, 0.26),
      seamMaterial
    );
    boomArm.position.z = 0.13;
    sampleBoom.add(boomArm);
    const scoop = new THREE.Mesh(
      new THREE.BoxGeometry(0.095, 0.024, 0.065),
      materials.gold
    );
    scoop.position.z = 0.28;
    sampleBoom.add(scoop);
    root.add(sampleBoom);

    const nasaMark = createLabelSprite("NASA", "#d53a32", 0.24);
    nasaMark.position.set(0, 0.36, 0.179);
    root.add(nasaMark);

    root.userData.sampleBoom = sampleBoom;
    root.userData.engineGlows = engineGlows;
    root.userData.landingEngineGlows = landingEngineGlows;
    root.userData.elevatorCar = elevatorCar;
    root.userData.solarPanels = solarPanels;
    root.userData.thrusterHousings = thrusterHousings;
    root.userData.baseCuts = baseCuts;
    return root;
  }

  const missionMaterials = createMissionMaterials();
  const relayMissionCraft = createRelayCraft(missionMaterials);
  const sampleMissionCraft = new THREE.Group();
  const starshipLander = createStarshipLander(missionMaterials);
  sampleMissionCraft.add(starshipLander);

  const roverState = {
    active: false,
    lat: -45.5,
    lon: 177.6,
    heading: 0,
    speed: 0,
    targetSpeed: 0,
    steering: 0,
    distance: 0,
    battery: 100,
    thermal: 28,
    comm: 94,
    slope: 3.2,
    samples: 0,
    elapsed: 0,
    wheelSpin: 0,
    trailAccumulator: 0,
    lastEmit: 0
  };

  function createYutuRover() {
    const root = new THREE.Group();
    const chassis = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.065, 0.25),
      missionMaterials.gold
    );
    chassis.position.y = 0.015;
    root.add(chassis);
    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(0.27, 0.009, 0.19),
      missionMaterials.solar
    );
    deck.position.y = 0.066;
    root.add(deck);
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.045, 0.13),
      missionMaterials.hull
    );
    body.position.set(0, 0.09, -0.015);
    root.add(body);
    const mast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.007, 0.009, 0.11, 8),
      missionMaterials.dark
    );
    mast.position.set(0, 0.16, 0.055);
    root.add(mast);
    const cameraHead = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.035, 0.045),
      missionMaterials.hull
    );
    cameraHead.position.set(0, 0.22, 0.055);
    root.add(cameraHead);
    const antenna = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      missionMaterials.hull
    );
    antenna.position.set(-0.08, 0.12, -0.04);
    antenna.rotation.x = Math.PI;
    root.add(antenna);

    const wheels = [];
    [-1, 1].forEach((side) => {
      [-0.085, 0, 0.085].forEach((z) => {
        const wheel = new THREE.Mesh(
          new THREE.CylinderGeometry(0.037, 0.037, 0.028, 14),
          missionMaterials.dark
        );
        wheel.position.set(side * 0.105, -0.02, z);
        wheel.rotation.z = Math.PI / 2;
        root.add(wheel);
        wheels.push(wheel);
      });
      root.add(createRodBetween(
        new THREE.Vector3(side * 0.08, 0.035, -0.09),
        new THREE.Vector3(side * 0.105, -0.005, 0),
        0.007,
        missionMaterials.hull
      ));
      root.add(createRodBetween(
        new THREE.Vector3(side * 0.105, -0.005, 0),
        new THREE.Vector3(side * 0.105, -0.005, 0.09),
        0.007,
        missionMaterials.hull
      ));
      root.add(createRodBetween(
        new THREE.Vector3(side * 0.09, 0.045, 0.04),
        new THREE.Vector3(side * 0.105, -0.005, 0.09),
        0.006,
        missionMaterials.dark
      ));
    });

    const flag = new THREE.Mesh(
      new THREE.BoxGeometry(0.002, 0.035, 0.05),
      missionMaterials.accent
    );
    flag.position.set(0.061, 0.085, -0.06);
    root.add(flag);

    const drill = new THREE.Group();
    drill.position.set(0, -0.01, 0.135);
    const drillArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.014, 0.014, 0.11),
      missionMaterials.dark
    );
    drillArm.position.z = 0.055;
    drill.add(drillArm);
    const bit = new THREE.Mesh(
      new THREE.ConeGeometry(0.018, 0.075, 10),
      missionMaterials.hull
    );
    bit.position.z = 0.13;
    bit.rotation.x = Math.PI / 2;
    drill.add(bit);
    root.add(drill);
    root.userData.drill = drill;
    root.userData.wheels = wheels;
    return root;
  }

  const yutuRover = createYutuRover();
  yutuRover.visible = false;
  markerGroup.add(yutuRover);
  const roverTrailPositions = [];
  const roverTrail = new THREE.Line(
    new THREE.BufferGeometry(),
    new THREE.LineBasicMaterial({
      color: 0x55e7ff,
      transparent: true,
      opacity: 0.72
    })
  );
  roverTrail.visible = false;
  markerGroup.add(roverTrail);

  const missionCraft = new THREE.Group();
  missionCraft.add(relayMissionCraft, sampleMissionCraft);
  const missionGlow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: earthGlowTexture,
      color: 0xc9e884,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  missionGlow.scale.set(0.72, 0.72, 1);
  missionCraft.add(missionGlow);
  moonRoot.add(missionCraft);

  const missionLine = new THREE.Line(
    new THREE.BufferGeometry(),
    new THREE.LineDashedMaterial({
      color: 0xc9e884,
      dashSize: 0.12,
      gapSize: 0.09,
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  moonRoot.add(missionLine);

  function emitManualLanding(force = false) {
    const now = performance.now();
    if (!force && now - manualLanding.lastEmit < 50) return;
    manualLanding.lastEmit = now;
    onLanding({
      active: manualLanding.active,
      complete: manualLanding.complete,
      success: manualLanding.success,
      altitude: manualLanding.altitude,
      verticalSpeed: manualLanding.verticalSpeed,
      horizontalSpeed: manualLanding.horizontalSpeed,
      offset: manualLanding.offset,
      fuel: manualLanding.fuel,
      throttle: manualLanding.throttle,
      lateral: manualLanding.lateral,
      tilt: manualLanding.tilt,
      elapsed: manualLanding.elapsed,
      score: manualLanding.score,
      status: manualLanding.status
    });
  }

  function setManualLandingControl({ key, value }) {
    if (key === "throttle") {
      manualLanding.throttle = clamp(Number(value), 0, 100);
    } else if (key === "lateral") {
      manualLanding.lateral = clamp(Number(value), -1, 1);
    }
  }

  function startManualLanding() {
    if (mission.mode !== "sample") {
      setMissionMode("sample");
    }
    rebuildMissionPath();
    const randomOffset = (Math.random() * 2 - 1) * 58;
    manualLanding.active = true;
    manualLanding.complete = false;
    manualLanding.success = false;
    manualLanding.altitude = 620;
    manualLanding.verticalSpeed = -38;
    manualLanding.horizontalSpeed = (Math.random() * 2 - 1) * 7;
    manualLanding.offset = randomOffset;
    manualLanding.fuel = 100;
    manualLanding.throttle = 52;
    manualLanding.lateral = 0;
    manualLanding.tilt = 0;
    manualLanding.elapsed = 0;
    manualLanding.score = 0;
    manualLanding.status = "descending";
    mission.running = false;
    mission.progress = 0;
    missionCraft.visible = true;
    setState("manual landing", "Pilot control active; target the illuminated site");
    emitManualLanding(true);
    onCritical({
      x: viewportWidth() * 0.5,
      y: viewportHeight() * 0.3,
      label: "MANUAL DESCENT",
      value: "CONTROL AUTHORITY",
      range: "active"
    });
  }

  function stopManualLanding() {
    manualLanding.active = false;
    manualLanding.complete = false;
    manualLanding.success = false;
    manualLanding.status = "ready";
    missionCraft.visible = false;
    emitManualLanding(true);
    setState(
      "mission planning",
      "Manual landing reset; adjust parameters and retry"
    );
  }

  function updateManualLanding(delta) {
    if (!manualLanding.active) return;
    const dt = Math.min(delta, 0.05);
    manualLanding.elapsed += dt;
    manualLanding.throttle = clamp(manualLanding.throttle, 0, 100);
    manualLanding.lateral = clamp(manualLanding.lateral, -1, 1);
    if (manualLanding.fuel <= 0) {
      manualLanding.throttle = 0;
      manualLanding.fuel = 0;
    }

    const thrustAcceleration = (manualLanding.throttle / 100) * 6.15;
    manualLanding.verticalSpeed += (
      thrustAcceleration - 1.62
    ) * dt;
    manualLanding.altitude += manualLanding.verticalSpeed * dt;
    manualLanding.horizontalSpeed += manualLanding.lateral * 1.48 * dt;
    manualLanding.offset += manualLanding.horizontalSpeed * dt;
    manualLanding.fuel = clamp(
      manualLanding.fuel - manualLanding.throttle * dt * 0.032,
      0,
      100
    );
    manualLanding.tilt = clamp(
      Math.abs(manualLanding.lateral) * 7
      + Math.abs(manualLanding.horizontalSpeed) * 0.42
      + Math.abs(manualLanding.verticalSpeed) * 0.035,
      0,
      28
    );

    const landing = mission.landingPosition;
    const normal = mission.landingNormal.clone().normalize();
    const tangent = new THREE.Vector3(-normal.z, 0, normal.x).normalize();
    const position = landing.clone()
      .addScaledVector(normal, 0.76 + Math.max(0, manualLanding.altitude) / 120)
      .addScaledVector(tangent, manualLanding.offset / 90);
    missionCraft.position.copy(position);
    missionCraft.scale.setScalar(0.75);
    missionCraft.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      normal
    );
    if (Math.abs(manualLanding.tilt) > 0.01) {
      missionCraft.quaternion.multiply(
        new THREE.Quaternion().setFromAxisAngle(
          tangent,
          THREE.MathUtils.degToRad(manualLanding.tilt * Math.sign(manualLanding.lateral || 1))
        )
      );
    }

    relayMissionCraft.visible = false;
    sampleMissionCraft.visible = true;
    const throttleGlow = manualLanding.fuel > 0
      ? 0.3 + manualLanding.throttle / 100 * 0.68
      : 0;
    starshipLander.userData.engineGlows.forEach((glow, index) => {
      glow.material.opacity = Math.max(0, throttleGlow - index * 0.08);
    });
    const landingGlow = manualLanding.altitude < 180
      ? clamp((manualLanding.throttle - 22) / 70, 0, 1)
      : 0;
    starshipLander.userData.landingEngineGlows.forEach((glow) => {
      glow.material.opacity = landingGlow * 0.78;
    });
    starshipLander.userData.sampleBoom.rotation.y = 0;

    if (manualLanding.altitude <= 0) {
      manualLanding.altitude = 0;
      manualLanding.active = false;
      manualLanding.complete = true;
      const verticalError = Math.max(0, Math.abs(manualLanding.verticalSpeed) - 4);
      const horizontalError = Math.max(0, Math.abs(manualLanding.horizontalSpeed) - 3);
      const offsetError = Math.max(0, Math.abs(manualLanding.offset) - 35);
      const fuelBonus = manualLanding.fuel * 0.18;
      manualLanding.score = Math.round(clamp(
        100
        - verticalError * 4.4
        - horizontalError * 5.2
        - offsetError * 0.42
        - Math.max(0, manualLanding.tilt - 6) * 2.2
        + fuelBonus,
        0,
        100
      ));
      manualLanding.success = (
        manualLanding.verticalSpeed >= -8
        && manualLanding.verticalSpeed <= 2
        && Math.abs(manualLanding.horizontalSpeed) <= 5
        && Math.abs(manualLanding.offset) <= 60
        && manualLanding.tilt <= 11
        && manualLanding.fuel > 0
      );
      manualLanding.status = manualLanding.success ? "landed" : "hard landing";
      setState(
        manualLanding.success ? "landing complete" : "landing failed",
        manualLanding.success
          ? `Touchdown score ${manualLanding.score}`
          : `Landing limits exceeded · score ${manualLanding.score}`
      );
      emitManualLanding(true);
      onCritical({
        x: viewportWidth() * 0.5,
        y: viewportHeight() * 0.38,
        label: manualLanding.success ? "TOUCHDOWN" : "LANDING FAILED",
        value: `SCORE ${manualLanding.score}`,
        range: manualLanding.success ? "soft landing" : "limits exceeded"
      });
      onPulse();
      return;
    }

    emitManualLanding();
  }

  function emitRover(force = false) {
    const now = performance.now();
    if (!force && now - roverState.lastEmit < 50) return;
    roverState.lastEmit = now;
    onRover({
      active: roverState.active,
      lat: roverState.lat,
      lon: roverState.lon,
      heading: roverState.heading,
      speed: roverState.speed,
      commandSpeed: roverState.targetSpeed,
      steering: roverState.steering,
      distance: roverState.distance,
      battery: roverState.battery,
      thermal: roverState.thermal,
      comm: roverState.comm,
      slope: roverState.slope,
      samples: roverState.samples,
      elapsed: roverState.elapsed
    });
  }

  function setRoverControl({ key, value }) {
    if (key === "speed") {
      roverState.targetSpeed = clamp(Number(value), -1, 1);
    } else if (key === "steering") {
      roverState.steering = clamp(Number(value), -1, 1);
    }
  }

  function updateRoverTransform() {
    const normal = latLonToVector(
      roverState.lat,
      roverState.lon,
      1
    ).normalize();
    const north = new THREE.Vector3(0, 1, 0)
      .addScaledVector(normal, -normal.y)
      .normalize();
    const east = new THREE.Vector3().crossVectors(north, normal).normalize();
    const heading = north.clone().multiplyScalar(Math.cos(roverState.heading))
      .addScaledVector(east, Math.sin(roverState.heading))
      .normalize();
    const right = new THREE.Vector3().crossVectors(normal, heading).normalize();
    const basis = new THREE.Matrix4().makeBasis(right, normal, heading);
    yutuRover.position.copy(
      latLonToVector(
        roverState.lat,
        roverState.lon,
        MOON_RADIUS + 0.057
      )
    );
    yutuRover.quaternion.setFromRotationMatrix(basis);
    yutuRover.rotateX(
      THREE.MathUtils.degToRad(roverState.slope * 0.22)
    );
    yutuRover.userData.drill.rotation.y = Math.sin(
      roverState.elapsed * 1.8
    ) * 0.18;
  }

  function startRover() {
    const feature = FEATURE_DATA[selectedRegion]?.[0];
    roverState.active = true;
    roverState.lat = feature?.lat ?? -45.5;
    roverState.lon = feature?.lon ?? 177.6;
    roverState.heading = 0;
    roverState.speed = 0;
    roverState.targetSpeed = 0;
    roverState.steering = 0;
    roverState.distance = 0;
    roverState.battery = 100;
    roverState.thermal = 28;
    roverState.comm = 94;
    roverState.slope = 3.2;
    roverState.samples = 0;
    roverState.elapsed = 0;
    roverState.wheelSpin = 0;
    roverState.trailAccumulator = 0;
    roverTrailPositions.splice(0);
    roverTrail.geometry.dispose();
    roverTrail.geometry = new THREE.BufferGeometry();
    roverTrail.visible = false;
    yutuRover.visible = true;
    missionCraft.visible = false;
    manualLanding.active = false;
    manualLanding.complete = false;
    updateRoverTransform();
    setState("rover traverse", "Yutu-2 surface traverse ready");
    emitRover(true);
    onCritical({
      x: viewportWidth() * 0.5,
      y: viewportHeight() * 0.34,
      label: "YUTU-2 ONLINE",
      value: "TRAVERSE CONTROL",
      range: "active"
    });
  }

  function stopRover(announce = true) {
    roverState.active = false;
    roverState.speed = 0;
    roverState.targetSpeed = 0;
    roverState.steering = 0;
    yutuRover.visible = false;
    emitRover(true);
    if (announce) {
      setState(
        "mission planning",
        "Yutu-2 traverse paused"
      );
    }
  }

  function collectRoverSample() {
    if (!roverState.active || roverState.battery <= 4) return;
    roverState.samples += 1;
    roverState.battery = clamp(roverState.battery - 3.5, 0, 100);
    roverState.thermal = clamp(roverState.thermal + 2.4, 0, 100);
    roverState.distance += 0.35;
    emitRover(true);
    yutuRover.getWorldPosition(worldPosition);
    projectedPosition.copy(worldPosition).project(camera);
    onCritical({
      x: (projectedPosition.x * 0.5 + 0.5) * viewportWidth(),
      y: (-projectedPosition.y * 0.5 + 0.5) * viewportHeight(),
      label: "YUTU-2 SAMPLE",
      value: `${String(roverState.samples).padStart(2, "0")} ARCHIVED`,
      range: "sample stored"
    });
    onPulse();
  }

  function nearestFeatureToRover() {
    let nearestIndex = featureMarkers[0]?.index ?? 0;
    let nearestDistance = Infinity;
    featureMarkers.forEach((marker) => {
      const distance = marker.root.position.distanceTo(yutuRover.position);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = marker.index;
      }
    });
    return nearestIndex;
  }

  function updateRover(delta) {
    if (!roverState.active) return;
    const dt = Math.min(delta, 0.05);
    roverState.elapsed += dt;
    roverState.targetSpeed = clamp(roverState.targetSpeed, -1, 1);
    roverState.steering = clamp(roverState.steering, -1, 1);
    if (roverState.battery <= 0 || roverState.thermal >= 98) {
      roverState.targetSpeed = 0;
      roverState.speed = 0;
      roverState.steering = 0;
      setState(
        "rover warning",
        roverState.battery <= 0
          ? "Yutu-2 battery depleted"
          : "Yutu-2 thermal limit reached"
      );
    }

    const acceleration = Math.abs(roverState.targetSpeed) > Math.abs(roverState.speed)
      ? 0.42
      : 0.72;
    const speedDelta = clamp(
      roverState.targetSpeed - roverState.speed,
      -acceleration * dt,
      acceleration * dt
    );
    roverState.speed += speedDelta;
    if (Math.abs(roverState.speed) < 0.004) roverState.speed = 0;

    const turnScale = 0.42 + Math.abs(roverState.speed) * 0.48;
    roverState.heading += roverState.steering * turnScale * dt;
    roverState.heading = ((roverState.heading + Math.PI)
      % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    const current = latLonToVector(
      roverState.lat,
      roverState.lon,
      1
    ).normalize();
    const north = new THREE.Vector3(0, 1, 0);
    north.addScaledVector(current, -north.dot(current)).normalize();
    const east = new THREE.Vector3()
      .crossVectors(north, current)
      .normalize();
    const forward = north.clone().multiplyScalar(Math.cos(roverState.heading))
      .addScaledVector(east, Math.sin(roverState.heading))
      .normalize();
    const slopePenalty = 1 - clamp((roverState.slope - 7) / 24, 0, 0.38);
    const angularStep = roverState.speed * slopePenalty * dt * 0.0032;
    const next = current.clone().addScaledVector(forward, angularStep).normalize();
    roverState.lat = THREE.MathUtils.radToDeg(
      Math.asin(clamp(next.y, -1, 1))
    );
    let nextLongitude = THREE.MathUtils.radToDeg(
      Math.atan2(next.x, next.z)
    ) + 180;
    roverState.lon = ((nextLongitude + 180) % 360 + 360) % 360 - 180;
    const traveled = Math.abs(angularStep) * 1737.4 / 260;
    roverState.distance += traveled;
    roverState.battery = clamp(
      roverState.battery
        - Math.abs(roverState.speed) * dt * 0.032
        - Math.abs(roverState.steering) * dt * 0.008
        + (Math.abs(roverState.speed) < 0.02 ? dt * 0.012 : 0),
      0,
      100
    );
    roverState.thermal = clamp(
      roverState.thermal
        + Math.abs(roverState.speed) * dt * 0.018
        - (Math.abs(roverState.speed) < 0.02 ? dt * 0.016 : 0),
      0,
      100
    );
    roverState.slope = 2.2 + hash2(
      roverState.lat * 0.075,
      roverState.lon * 0.075
    ) * 6.2;
    roverState.comm = clamp(
      97
      - roverState.slope * 2.4
      - Math.abs(Math.sin(
        THREE.MathUtils.degToRad(roverState.lon + roverState.lat)
      )) * 8,
      45,
      99
    );
    updateRoverTransform();
    const wheelSpin = roverState.speed * dt * 13;
    roverState.wheelSpin += wheelSpin;
    yutuRover.userData.wheels.forEach((wheel) => {
      wheel.rotateX(wheelSpin);
    });
    roverState.trailAccumulator += Math.abs(roverState.speed) * dt;
    if (roverState.trailAccumulator >= 0.025) {
      roverState.trailAccumulator = 0;
      roverTrailPositions.push(yutuRover.position.clone());
      if (roverTrailPositions.length > 360) roverTrailPositions.shift();
      roverTrail.geometry.dispose();
      roverTrail.geometry = new THREE.BufferGeometry().setFromPoints(
        roverTrailPositions
      );
      roverTrail.visible = roverTrailPositions.length > 1;
    }
    emitRover();
  }

  function updateRoverCamera(delta) {
    yutuRover.getWorldPosition(worldPosition);
    const normal = worldPosition.clone().normalize();
    const forward = new THREE.Vector3(0, 0, 1)
      .applyQuaternion(yutuRover.getWorldQuaternion(new THREE.Quaternion()))
      .normalize();
    const right = new THREE.Vector3().crossVectors(normal, forward).normalize();
    const target = worldPosition.clone()
      .addScaledVector(normal, 0.055)
      .addScaledVector(forward, 0.14);
    const desired = worldPosition.clone()
      .addScaledVector(normal, 0.36)
      .addScaledVector(forward, -0.64)
      .addScaledVector(right, 0.1);
    const response = 1 - Math.exp(-delta * 4.2);
    camera.position.lerp(desired, response);
    camera.fov = THREE.MathUtils.lerp(camera.fov, 44, response);
    camera.updateProjectionMatrix();
    camera.lookAt(target);
  }

  function updateSampleCamera(delta) {
    missionCraft.getWorldPosition(worldPosition);
    const normal = worldPosition.clone().normalize();
    const tangent = new THREE.Vector3(-normal.z, 0, normal.x).normalize();
    const bitangent = new THREE.Vector3()
      .crossVectors(normal, tangent)
      .normalize();
    const target = worldPosition.clone().addScaledVector(normal, 0.08);
    const desired = worldPosition.clone()
      .addScaledVector(normal, 0.46)
      .addScaledVector(tangent, 0.9)
      .addScaledVector(bitangent, 0.28);
    const response = 1 - Math.exp(-delta * 4.4);
    camera.position.lerp(desired, response);
    camera.fov = THREE.MathUtils.lerp(camera.fov, 42, response);
    camera.updateProjectionMatrix();
    camera.lookAt(target);
  }

  function calculateRelayMetrics() {
    const amplitude = mission.params.haloAmplitude;
    const phase = mission.params.haloPhase;
    const phaseError = Math.abs(phase - 180);
    const coverage = clamp(
      84 + (amplitude - 55) * 0.18 + (1 - phaseError / 180) * 11,
      62,
      99.8
    );
    const earthLink = coverage >= 96 && phaseError <= 62 ? "LOCKED" : "INTERMITTENT";
    const period = 13.4 + (amplitude - 55) * 0.028;
    const stationKeeping = Math.abs(amplitude - 91) * 0.52 + phaseError * 0.14;
    return {
      coverage,
      earthLink,
      period,
      stationKeeping,
      goal: coverage >= 96 && earthLink === "LOCKED" && stationKeeping <= 18
    };
  }

  function calculateSampleMetrics() {
    const descentAngle = mission.params.descentAngle;
    const surfaceHours = mission.params.surfaceHours;
    const slope = Math.abs(descentAngle - 56) * 0.38;
    const thermal = 43 + Math.max(0, surfaceHours - 10) * 1.42 + Math.abs(descentAngle - 56) * 0.16;
    const sampleMass = 146 + (surfaceHours - 16) * 1.18 - Math.abs(descentAngle - 56) * 0.35;
    const commWindow = 29
      - Math.abs(surfaceHours - 22) * 0.72
      - Math.abs(descentAngle - 56) * 0.19;
    return {
      slope,
      thermal,
      sampleMass: Math.max(0, sampleMass),
      commWindow: Math.max(0, commWindow),
      goal: slope <= 7 && thermal <= 82 && sampleMass >= 120 && commWindow >= 5
    };
  }

  function rebuildMissionPath() {
    const points = [];
    if (mission.mode === "relay") {
      const amplitude = mission.params.haloAmplitude / 36;
      const phaseOffset = THREE.MathUtils.degToRad(mission.params.haloPhase);
      for (let index = 0; index < 180; index += 1) {
        const angle = (index / 180) * Math.PI * 2;
        points.push(new THREE.Vector3(
          Math.cos(angle) * amplitude,
          Math.sin(angle) * amplitude * 0.42 - 0.8,
          -7.4 + Math.sin(angle * 2 + phaseOffset) * 0.85
        ));
      }
    } else {
      const marker = featureMarkers[0] || {
        root: { position: latLonToVector(-35.7, -151.3, MOON_RADIUS) }
      };
      const landing = marker.root.position.clone();
      const normal = landing.clone().normalize();
      mission.landingPosition.copy(landing);
      mission.landingNormal.copy(normal);
      const tangent = new THREE.Vector3(-normal.z, 0, normal.x).normalize();
      const angle = THREE.MathUtils.degToRad(mission.params.descentAngle);
      const approach = landing.clone()
        .addScaledVector(normal, 7.2)
        .addScaledVector(tangent, Math.cos(angle) * 2.1);
      points.push(approach);
      for (let index = 1; index <= 55; index += 1) {
        const t = index / 55;
        const eased = t * t * (3 - 2 * t);
        points.push(approach.clone().lerp(landing, eased));
      }
      for (let index = 0; index < 10; index += 1) {
        points.push(landing.clone());
      }
      const ascent = landing.clone().addScaledVector(normal, 5.4).addScaledVector(tangent, -1.8);
      for (let index = 1; index <= 45; index += 1) {
        const t = index / 45;
        const eased = t * t * (3 - 2 * t);
        points.push(landing.clone().lerp(ascent.clone().addScaledVector(normal, 3), eased));
      }
    }
    mission.pathPoints = points;
    missionLine.geometry.dispose();
    missionLine.geometry = new THREE.BufferGeometry().setFromPoints(points);
    missionLine.computeLineDistances();
    missionLine.visible = points.length > 1;
  }

  function emitMission(extra = {}) {
    mission.metrics = mission.mode === "relay"
      ? calculateRelayMetrics()
      : mission.mode === "sample"
        ? calculateSampleMetrics()
        : { goal: false };
    onMission({
      mode: mission.mode,
      metrics: mission.metrics,
      running: mission.running,
      success: mission.success,
      ...mission.params,
      ...extra
    });
  }

  function updateMissionCraft() {
    if (!mission.pathPoints.length) return;
    const progress = clamp(mission.progress, 0, 1);
    const scaled = progress * (mission.pathPoints.length - 1);
    const index = Math.floor(scaled);
    const nextIndex = Math.min(mission.pathPoints.length - 1, index + 1);
    const local = scaled - index;
    const position = mission.pathPoints[index].clone().lerp(
      mission.pathPoints[nextIndex],
      local
    );
    const isSampleMission = mission.mode === "sample";
    if (isSampleMission) {
      position.addScaledVector(position.clone().normalize(), 0.76);
    }
    missionCraft.position.copy(position);
    missionCraft.visible = isSampleMission || mission.running || progress > 0;
    if (isSampleMission) {
      const lunarUp = position.clone().normalize();
      missionCraft.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        lunarUp
      );
    } else if (nextIndex > index) {
      const tangent = mission.pathPoints[nextIndex].clone()
        .sub(mission.pathPoints[index])
        .normalize();
      missionCraft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
    }

    relayMissionCraft.visible = !isSampleMission;
    sampleMissionCraft.visible = isSampleMission;
    missionCraft.scale.setScalar(isSampleMission ? 0.75 : 1);
    missionGlow.material.color.setHex(isSampleMission ? 0xff8a3d : 0xc9e884);
    missionGlow.material.opacity = isSampleMission
      ? mission.running
        ? 0.16 + Math.sin(progress * Math.PI * 18) * 0.05
        : 0.1
      : mission.running
        ? 0.42 + Math.sin(progress * Math.PI * 18) * 0.12
        : 0.3;

    const baseBurn = isSampleMission
      ? progress < 0.52
        ? clamp((progress - 0.02) / 0.08, 0, 1)
          * clamp((0.52 - progress) / 0.12, 0, 1)
          * 0.62
        : clamp((progress - 0.64) / 0.08, 0, 1)
          * clamp((1 - progress) / 0.1, 0, 1)
          * 0.92
      : 0;
    starshipLander.userData.engineGlows.forEach((glow, index) => {
      glow.material.opacity = Math.max(
        0,
        baseBurn - index * 0.08
      );
    });
    const landingBurn = isSampleMission
      ? clamp((progress - 0.18) / 0.22, 0, 1)
        * clamp((0.58 - progress) / 0.08, 0, 1)
      : 0;
    starshipLander.userData.landingEngineGlows.forEach((glow) => {
      glow.material.opacity = landingBurn * 0.88;
    });
    starshipLander.userData.sampleBoom.rotation.y = isSampleMission
      ? Math.sin(progress * Math.PI * 4) * 0.45
      : 0;

    if (!isSampleMission) {
      return;
    }
  }

  function setMissionMode(mode) {
    const nextMode = ["relay", "sample"].includes(mode)
      ? mode
      : "relay";
    mission.mode = nextMode;
    mission.running = false;
    mission.success = false;
    mission.progress = 0;
    manualLanding.active = false;
    manualLanding.complete = false;
    manualLanding.success = false;
    manualLanding.status = "ready";
    emitManualLanding(true);
    lastInteraction = performance.now();
    stopRover(false);
    rebuildMissionPath();
    missionCraft.visible = false;
    updateMissionCraft();
    emitMission();
    setState(
      "mission planning",
      nextMode === "relay"
        ? "Queqiao relay geometry planning"
        : "Far-side sample-return planning"
    );
  }

  function setMissionParams(params = {}) {
    Object.assign(mission.params, params);
    mission.running = false;
    mission.success = false;
    mission.progress = 0;
    manualLanding.active = false;
    manualLanding.complete = false;
    manualLanding.success = false;
    lastInteraction = performance.now();
    rebuildMissionPath();
    missionCraft.visible = false;
    updateMissionCraft();
    emitMission();
  }

  function runMission() {
    if (mission.running) return;
    if (mission.mode === "rover") return;
    manualLanding.active = false;
    manualLanding.complete = false;
    manualLanding.success = false;
    mission.running = true;
    mission.success = false;
    mission.progress = 0;
    lastInteraction = performance.now();
    missionCraft.visible = true;
    emitMission();

    if (mission.mode === "relay") {
      setState("relay transfer", "Relay satellite transferring through the L2 halo");
    } else {
      setState("sample return", "Descent, sampling, and ascent sequence running");
    }

    animate(mission, {
      progress: 1,
      duration: reducedMotion ? 420 : 6200,
      ease: "inOutCubic",
      onUpdate: () => {
        emitMission();
      },
      onComplete: () => {
        mission.running = false;
        mission.success = Boolean(mission.metrics.goal);
        lastInteraction = performance.now();
        emitMission();
        if (mission.success) {
          setState(
            "mission complete",
            mission.mode === "relay"
              ? "Relay link closed; far-side coverage valid"
              : "Sample-return window closed"
          );
          onCritical({
            x: viewportWidth() * 0.5,
            y: viewportHeight() * 0.42,
            label: "MISSION COMPLETE",
            value: mission.mode === "relay" ? "RELAY LOCK" : "RETURN WINDOW",
            range: "100%"
          });
        } else {
          setState(
            "mission warning",
            mission.mode === "relay"
              ? "Coverage insufficient; adjust the halo orbit"
              : "Sample window exceeded; adjust descent parameters"
          );
        }
      }
    });
  }

  function stopMission() {
    const wasRover = roverState.active;
    if (wasRover) stopRover(false);
    mission.running = false;
    mission.success = false;
    mission.progress = 0;
    manualLanding.active = false;
    manualLanding.complete = false;
    manualLanding.success = false;
    manualLanding.altitude = 620;
    manualLanding.verticalSpeed = -38;
    manualLanding.horizontalSpeed = 0;
    manualLanding.offset = 0;
    manualLanding.fuel = 100;
    manualLanding.throttle = 52;
    manualLanding.lateral = 0;
    manualLanding.tilt = 0;
    manualLanding.elapsed = 0;
    manualLanding.score = 0;
    manualLanding.status = "ready";
    missionCraft.visible = false;
    emitManualLanding(true);
    emitMission();
    setState(
      wasRover ? "mission planning" : "observing",
      wasRover
        ? "Yutu-2 traverse paused"
        : REGION_PROFILES[selectedRegion]?.status || "Lunar far-side region stable"
    );
  }

  const instrumentState = {
    id: "lroc",
    distanceScale: INSTRUMENT_PROFILES.lroc.distanceScale,
    targetDistanceScale: INSTRUMENT_PROFILES.lroc.distanceScale,
    fov: INSTRUMENT_PROFILES.lroc.fov,
    targetFov: INSTRUMENT_PROFILES.lroc.fov,
    exposure: INSTRUMENT_PROFILES.lroc.exposure,
    targetExposure: INSTRUMENT_PROFILES.lroc.exposure,
    color: INSTRUMENT_PROFILES.lroc.color.clone(),
    targetColor: INSTRUMENT_PROFILES.lroc.color.clone(),
    emissive: INSTRUMENT_PROFILES.lroc.emissive.clone(),
    targetEmissive: INSTRUMENT_PROFILES.lroc.emissive.clone(),
    emissiveIntensity: INSTRUMENT_PROFILES.lroc.emissiveIntensity,
    targetEmissiveIntensity: INSTRUMENT_PROFILES.lroc.emissiveIntensity,
    fill: INSTRUMENT_PROFILES.lroc.fill.clone(),
    targetFill: INSTRUMENT_PROFILES.lroc.fill.clone(),
    rim: INSTRUMENT_PROFILES.lroc.rim.clone(),
    targetRim: INSTRUMENT_PROFILES.lroc.rim.clone(),
    zoom: 1,
    zoomTarget: 1
  };
  const targetMoonQuaternion = new THREE.Quaternion();
  let currentState = "observing";
  let currentStatus = "Initializing lunar far-side observation";
  let mapped = 37;
  let sampleCount = 0;
  let combo = 1;
  let comboResetTimer = 0;
  let lastInteraction = performance.now();
  let introComplete = false;
  let animationFrame = 0;
  let frameCount = 0;
  let firstFrameMs = 0;
  let surfaceReadyMs = 0;
  let autoTimer;
  let telemetryTimer;
  let dragging = false;
  let dragMoved = false;
  let lastPointer = { x: 0, y: 0 };
  let hoveredFeature = null;
  let hoveredProbe = null;

  function setState(nextState, nextStatus = currentStatus) {
    currentState = nextState;
    currentStatus = nextStatus;
    onState({ state: currentState, status: currentStatus });
  }

  function emitTelemetry(force = false) {
    if (!force && performance.now() - lastInteraction < 120) return;
    const activeProbes = probes.filter((probe) => probe.active).length;
    const surveyed = getSurveySet().size;
    const featureTotal = featureMarkers.length || 10;
    onTelemetry({
      features: surveyed,
      featuresTotal: featureTotal,
      mapped: clamp(mapped, 0, 100),
      probes: activeProbes,
      probesTotal: probes.length,
      samples: sampleCount,
      gravity: "0.166g",
      state: currentState
    });
  }

  function updatePointer(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function raycastFeature() {
    if (!hitMeshes.length) return null;
    raycaster.setFromCamera(pointer, camera);
    const intersections = raycaster.intersectObjects(hitMeshes, false);
    for (const intersection of intersections) {
      intersection.object.getWorldPosition(worldPosition);
      const normal = worldPosition.clone().sub(moonMesh.getWorldPosition(new THREE.Vector3())).normalize();
      const viewDirection = camera.position.clone().sub(worldPosition).normalize();
      if (normal.dot(viewDirection) > 0.03) {
        return intersection.object.userData.featureIndex;
      }
    }
    return null;
  }

  function raycastProbe() {
    if (!probeHitMeshes.length) return null;
    raycaster.setFromCamera(pointer, camera);
    const intersections = raycaster.intersectObjects(probeHitMeshes, false);
    return intersections.length
      ? intersections[0].object.userData.probeIndex
      : null;
  }

  function raycastMoonSurface() {
    raycaster.setFromCamera(pointer, camera);
    const intersections = raycaster.intersectObject(moonMesh, false);
    if (!intersections.length) return null;
    const localPoint = moonPivot.worldToLocal(
      intersections[0].point.clone()
    );
    const radius = Math.max(localPoint.length(), 0.0001);
    const latitude = THREE.MathUtils.radToDeg(
      Math.asin(clamp(localPoint.y / radius, -1, 1))
    );
    let longitude = THREE.MathUtils.radToDeg(
      Math.atan2(localPoint.x, localPoint.z)
    ) + 180;
    longitude = ((longitude + 180) % 360 + 360) % 360 - 180;
    const latitudeLabel = `${Math.abs(latitude).toFixed(1)}${latitude < 0 ? "S" : "N"}`;
    const longitudeLabel = `${Math.abs(longitude).toFixed(1)}${longitude < 0 ? "W" : "E"}`;
    const signal = Math.round(
      62 + hash2(latitude * 0.17, longitude * 0.17) * 35
    );
    return {
      vector: localPoint,
      latitude: latitudeLabel,
      longitude: longitudeLabel,
      signal
    };
  }

  function nearestFeature() {
    let nearestIndex = featureMarkers[0]?.index ?? 0;
    let nearestDistance = Infinity;
    featureMarkers.forEach((marker) => {
      marker.getWorldPosition?.(worldPosition);
      marker.root.getWorldPosition(worldPosition);
      const distance = worldPosition.distanceTo(camera.position);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = marker.index;
      }
    });
    return nearestIndex;
  }

  function scanFeature(index = null) {
    const targetIndex = index
      ?? hoveredFeature
      ?? (roverState.active
        ? nearestFeatureToRover()
        : activeFeatureIndex >= 0
          ? activeFeatureIndex
          : nearestFeature());
    const marker = featureMarkers[targetIndex] || featureMarkers[0];
    if (!marker) return;

    const survey = getSurveySet();
    const isNew = !survey.has(marker.feature.id);
    if (isNew) {
      survey.add(marker.feature.id);
      marker.surveyed = true;
      mapped = clamp(mapped + 2.2, 0, 100);
    }
    combo = performance.now() - lastInteraction < 1800 ? Math.min(8, combo + 1) : 2;
    lastInteraction = performance.now();
    spawnScan(
      targetIndex,
      marker.feature.name.toUpperCase(),
      isNew ? null : "ALREADY MAPPED"
    );
    onCritical({ type: "combo", value: combo });
    window.clearTimeout(comboResetTimer);
    comboResetTimer = window.setTimeout(() => {
      combo = 1;
      onCritical({ type: "combo-end" });
    }, 1200);
    const surveyedCount = survey.size;
    const complete = surveyedCount === featureMarkers.length;
    onSurvey({
      regionId: selectedRegion,
      featureId: marker.feature.id,
      featureName: marker.feature.name,
      surveyedCount,
      total: featureMarkers.length,
      isNew,
      complete
    });
    setState(
      complete ? "survey complete" : "scanning",
      complete
        ? `${REGION_PROFILES[selectedRegion]?.short || "REGION"} survey complete`
        : `${marker.feature.name} signal locked`
    );
    if (complete && isNew) {
      window.setTimeout(() => {
        onCritical({
          x: viewportWidth() * 0.5,
          y: viewportHeight() * 0.34,
          label: "SURVEY COMPLETE",
          value: `${surveyedCount} / ${featureMarkers.length} MAPPED`,
          range: "100%"
        });
      }, 260);
    }
    emitTelemetry(true);
  }

  function observeStar(target) {
    const index = typeof target === "number"
      ? featureMarkers.findIndex((marker) => marker.index === target)
      : featureMarkers.findIndex((marker) => marker.feature.name === target);
    if (index < 0) return false;
    activeFeatureIndex = index;
    featureMarkers.forEach((marker, markerIndex) => {
      marker.label.material.opacity = markerIndex === index ? 0.92 : 0.34;
      marker.pulse = markerIndex === index ? 1 : 0;
    });
    const feature = featureMarkers[index].feature;
    setState("feature focus", `${feature.name} feature locked`);
    return true;
  }

  function setObject(id, animateTransition = true) {
    selectedRegion = REGION_PROFILES[id] ? id : "spa";
    const profile = REGION_PROFILES[selectedRegion];
    const focus = latLonToVector(profile.focusLat, profile.focusLon, 1);
    targetMoonQuaternion.setFromUnitVectors(focus, moonUp);
    activeFeatureIndex = 0;
    buildFeatureMarkers(selectedRegion);
    rebuildMissionPath();
    earth.visible = profile.earthVisibility > 0.02;
    earthGlow.material.opacity = 0.28 + profile.earthVisibility;

    if (animateTransition) {
      animate(moonPivot.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: reducedMotion ? 1 : 820,
        ease: "outExpo"
      });
      moonMaterial.bumpScale = 0.055;
      animate(moonMaterial, {
        bumpScale: [0.025, 0.055],
        duration: reducedMotion ? 1 : 900,
        ease: "outExpo"
      });
    } else {
      moonRoot.quaternion.copy(targetMoonQuaternion);
      moonPivot.rotation.set(0, 0, 0);
    }

    if (roverState.active) {
      startRover();
    } else {
      setState("observing", profile.status);
    }
    emitTelemetry(true);
  }

  function setTelescope(id, announce = true) {
    const profile = INSTRUMENT_PROFILES[id] || INSTRUMENT_PROFILES.lroc;
    instrumentState.id = id in INSTRUMENT_PROFILES ? id : "lroc";
    instrumentState.targetDistanceScale = profile.distanceScale;
    instrumentState.targetFov = profile.fov;
    instrumentState.targetExposure = profile.exposure;
    instrumentState.targetColor.copy(profile.color);
    instrumentState.targetEmissive.copy(profile.emissive);
    instrumentState.targetEmissiveIntensity = profile.emissiveIntensity;
    instrumentState.targetFill.copy(profile.fill);
    instrumentState.targetRim.copy(profile.rim);

    if (announce) {
      setState(
        "instrument switch",
        `${profile.short} · ${REGION_PROFILES[selectedRegion]?.instrumentHint || "lunar far-side data view"}`
      );
    }
  }

  function updateProjection() {
    camera.aspect = viewportWidth() / viewportHeight();
    camera.updateProjectionMatrix();
  }

  function updateProbes(delta, elapsed) {
    probes.forEach((probe) => {
      let position;
      let transferring = false;
      if (probe.transferCurve) {
        probe.transferProgress = clamp(
          probe.transferProgress + delta / probe.transferDuration,
          0,
          1
        );
        transferring = probe.transferProgress < 1;
        if (transferring) {
          const t = probe.transferProgress;
          const eased = t * t * (3 - 2 * t);
          position = probe.transferCurve.getPointAt(eased);
        }
      }
      if (!position) {
        const angle = probe.phase + elapsed * probe.angularSpeed;
        position = probe.positionAt(angle);
      }
      probe.satellite.position.copy(position);
      probe.satellite.lookAt(0, 0, 0);
      probe.satellite.rotateZ(
        Math.sin(elapsed * 0.12 + probe.phase) * 0.035
      );
      probe.line.material.opacity = probe.active
        ? probe.opacity * 1.75
        : probe.opacity * 0.55;
      if (probe.transferLine) {
        probe.transferLine.material.opacity = transferring
          ? probe.active ? 0.72 : 0.42
          : 0.08;
      }
      probe.label.material.opacity = probe.active
        ? 0.92
        : 0.3 + Math.max(0, Math.sin(elapsed * 0.5 + probe.phase)) * 0.08;
      probe.glow.material.opacity = probe.active ? 0.62 : 0.34;
    });
  }

  function updateScanRings(delta) {
    for (let index = scanRings.length - 1; index >= 0; index -= 1) {
      const scan = scanRings[index];
      scan.life += delta;
      const progress = clamp(scan.life / scan.maxLife, 0, 1);
      const scale = 1 + progress * 2.1;
      scan.mesh.scale.setScalar(scale);
      scan.mesh.material.opacity = (1 - progress) * 0.62;
      scan.mesh.rotation.z += delta * 0.42;
      if (progress >= 1) {
        markerGroup.remove(scan.mesh);
        scan.mesh.geometry.dispose();
        scan.mesh.material.dispose();
        scanRings.splice(index, 1);
      }
    }
  }

  function updateFeatureMarkers(delta) {
    featureMarkers.forEach((marker, index) => {
      marker.pulse = Math.max(0, marker.pulse - delta * 0.75);
      const active = index === activeFeatureIndex;
      const hovered = index === hoveredFeature;
      const emphasized = active || hovered;
      const selectedScale = active ? 1 : 0.86;
      const pulseScale = 1 + marker.pulse * 0.16;
      marker.ring.scale.setScalar(selectedScale * pulseScale);
      marker.ring.material.opacity = active
        ? 0.78 + marker.pulse * 0.14
        : (marker.surveyed ? 0.5 : 0.38) + marker.pulse * 0.12;
      marker.dot.scale.setScalar(active ? 1.24 : marker.surveyed ? 1.05 : 0.92);
      marker.glow.material.opacity = active
        ? 0.76 + marker.pulse * 0.18
        : hovered
          ? 0.62
          : marker.surveyed
            ? 0.42
            : 0.3;
      marker.glow.scale.setScalar(active ? 0.2 : 0.16);
      marker.reticle.material.opacity = active
        ? 0.92
        : hovered
          ? 0.72
          : 0;
      marker.line.material.opacity = active
        ? 0.88
        : hovered
          ? 0.72
          : marker.surveyed
            ? 0.4
            : 0.3;
      marker.tick.material.opacity = marker.line.material.opacity;
      const labelScale = emphasized ? 0.72 : 0.52;
      marker.label.scale.set(labelScale, labelScale * 0.25, 1);
      marker.label.material.opacity = active
        ? 0.96
        : hovered
          ? 0.9
          : marker.surveyed
            ? 0.56
            : 0.46;
    });
  }

  function updateSampleParticles(delta) {
    if (!sampleParticles.length) return;
    const progress = sampleState.progress;
    sampleParticles.forEach((particle, index) => {
      const radial = 0.05 + progress * (0.8 + particle.radius * 3);
      const swirl = particle.phase + progress * (4 + (index % 5));
      particle.mesh.position.copy(particle.origin)
        .addScaledVector(particle.normal, radial)
        .addScaledVector(particle.tangent, Math.cos(swirl) * particle.radius * progress)
        .addScaledVector(particle.bitangent, Math.sin(swirl) * particle.radius * progress);
      particle.mesh.rotation.x += delta * (1.2 + index * 0.02);
      particle.mesh.rotation.y += delta * 1.7;
      particle.mesh.material.opacity = clamp(1 - Math.max(0, progress - 0.72) / 0.28, 0, 0.92);
    });
  }

  function updateSurfaceTags(delta) {
    for (let index = surfaceTags.length - 1; index >= 0; index -= 1) {
      const tag = surfaceTags[index];
      tag.life += delta;
      const progress = clamp(tag.life / tag.maxLife, 0, 1);
      const fade = 1 - Math.max(0, progress - 0.72) / 0.28;
      const pulse = 1 + Math.sin(tag.life * 5.5) * 0.12;
      tag.root.scale.setScalar(pulse);
      tag.root.traverse((child) => {
        if (child.material) child.material.opacity = fade * 0.88;
      });
      if (progress >= 1) {
        surfaceTagGroup.remove(tag.root);
        tag.root.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
        surfaceTags.splice(index, 1);
      }
    }
  }

  function updateInstrument(delta) {
    const response = 1 - Math.exp(-delta * 5);
    instrumentState.distanceScale = THREE.MathUtils.lerp(
      instrumentState.distanceScale,
      instrumentState.targetDistanceScale,
      response
    );
    instrumentState.fov = THREE.MathUtils.lerp(
      instrumentState.fov,
      instrumentState.targetFov,
      response
    );
    instrumentState.exposure = THREE.MathUtils.lerp(
      instrumentState.exposure,
      instrumentState.targetExposure,
      response
    );
    instrumentState.color.lerp(instrumentState.targetColor, response);
    instrumentState.emissive.lerp(instrumentState.targetEmissive, response);
    instrumentState.emissiveIntensity = THREE.MathUtils.lerp(
      instrumentState.emissiveIntensity,
      instrumentState.targetEmissiveIntensity,
      response
    );
    instrumentState.fill.lerp(instrumentState.targetFill, response);
    instrumentState.rim.lerp(instrumentState.targetRim, response);
    moonMaterial.color.copy(instrumentState.color);
    moonMaterial.emissive.copy(instrumentState.emissive);
    moonMaterial.emissiveIntensity = instrumentState.emissiveIntensity;
    fillLight.color.copy(instrumentState.fill);
    rimLight.color.copy(instrumentState.rim);
    renderer.toneMappingExposure = instrumentState.exposure;
  }

  function updateScene(delta, elapsed) {
    frameCount += 1;
    moonRoot.quaternion.slerp(targetMoonQuaternion, 1 - Math.exp(-delta * 2.8));
    coordinateShell.rotation.y += delta * 0.002;
    coordinateShell.material.opacity = 0.018
      + Math.sin(elapsed * 0.7) * 0.004
      + (instrumentState.id === "minirf" ? 0.025 : 0);

    updateInstrument(delta);
    updateProbes(delta, elapsed);
    updateFeatureMarkers(delta);
    updateScanRings(delta);
    updateSampleParticles(delta);
    updateSurfaceTags(delta);
    updateRover(delta);
    if (!roverState.active) {
      if (manualLanding.active) {
        updateManualLanding(delta);
      } else if (!manualLanding.complete) {
        updateMissionCraft();
      }
    }

    const zoomProgress = (instrumentState.zoom - 1) / (TELESCOPE_MAX_ZOOM - 1);
    const baseDistance = THREE.MathUtils.lerp(10.6, 5.05, zoomProgress);
    const targetDistance = baseDistance * instrumentState.distanceScale;
    const cameraResponse = 1 - Math.exp(-delta * 3.5);
    if (roverState.active) {
      updateRoverCamera(delta);
    } else if (
      manualLanding.active
      || manualLanding.complete
      || (mission.mode === "sample" && mission.running)
    ) {
      updateSampleCamera(delta);
    } else {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.42, cameraResponse);
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        0.72 + pointer.y * 0.28,
        cameraResponse
      );
      camera.position.z = THREE.MathUtils.lerp(
        camera.position.z,
        targetDistance,
        cameraResponse
      );
      camera.fov = THREE.MathUtils.lerp(camera.fov, instrumentState.fov, cameraResponse);
      camera.updateProjectionMatrix();
      camera.lookAt(cameraTarget);
    }

    earth.rotation.y += delta * 0.06;
    earthBody.material.color.setHSL(
      0.56,
      0.32 + Math.sin(elapsed * 0.12) * 0.02,
      0.56
    );
    stars.rotation.y += delta * 0.002;
  }

  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    updatePointer(event);
    dragging = true;
    dragMoved = false;
    lastPointer = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
    onPointer({ visible: false });
    canvas.style.cursor = "grabbing";
  });

  canvas.addEventListener("pointermove", (event) => {
    updatePointer(event);
    if (dragging) {
      const deltaX = event.clientX - lastPointer.x;
      const deltaY = event.clientY - lastPointer.y;
      if (Math.hypot(deltaX, deltaY) > 1) {
        dragMoved = dragMoved || Math.hypot(deltaX, deltaY) > 4;
        moonPivot.rotation.y += deltaX * 0.005;
        moonPivot.rotation.x = clamp(
          moonPivot.rotation.x + deltaY * 0.0036,
          -0.56,
          0.56
        );
      }
      lastPointer = { x: event.clientX, y: event.clientY };
      lastInteraction = performance.now();
      return;
    }

    hoveredProbe = raycastProbe();
    hoveredFeature = hoveredProbe === null ? raycastFeature() : null;
    const surface = raycastMoonSurface();
    onPointer({
      visible: Boolean(surface),
      x: event.clientX,
      y: event.clientY,
      latitude: surface?.latitude || "",
      longitude: surface?.longitude || "",
      signal: surface?.signal || 0
    });
    canvas.style.cursor = hoveredProbe !== null || hoveredFeature !== null
      ? "pointer"
      : "grab";
  });

  canvas.addEventListener("pointerup", (event) => {
    if (!dragging) return;
    const hitProbe = raycastProbe();
    const hitFeature = hitProbe === null ? raycastFeature() : null;
    dragging = false;
    canvas.releasePointerCapture(event.pointerId);
    canvas.style.cursor = hitProbe !== null || hitFeature !== null
      ? "pointer"
      : "grab";
    if (!dragMoved) {
      if (hitProbe !== null) {
        activateProbe(hitProbe);
      } else if (hitFeature !== null) {
        observeStar(hitFeature);
        scanFeature(hitFeature);
      } else {
        const surface = raycastMoonSurface();
        if (surface) {
          surface.x = event.clientX;
          surface.y = event.clientY;
          addSurfaceTag(surface);
        }
      }
    }
  });

  canvas.addEventListener("pointerleave", () => {
    if (!dragging) {
      hoveredFeature = null;
      hoveredProbe = null;
      onPointer({ visible: false });
      canvas.style.cursor = "grab";
    }
  });

  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    const zoomFactor = Math.exp(-event.deltaY * 0.00125);
    instrumentState.zoomTarget = clamp(
      instrumentState.zoomTarget * zoomFactor,
      1,
      TELESCOPE_MAX_ZOOM
    );
    instrumentState.zoom = instrumentState.zoomTarget;
    lastInteraction = performance.now();
    const profile = INSTRUMENT_PROFILES[instrumentState.id] || INSTRUMENT_PROFILES.lroc;
    setState(
      "zoom",
      `${profile.short} ${instrumentState.zoom.toFixed(1)}x lunar surface observation`
    );
  }, { passive: false });

  function handleKeyDown(event) {
    const target = event.target;
    if (
      target instanceof HTMLInputElement
      || target instanceof HTMLTextAreaElement
    ) {
      return;
    }
    const key = event.key.toLowerCase();
    if (manualLanding.active) {
      if (key === "w" || key === "arrowup") {
        manualLanding.throttle = clamp(manualLanding.throttle + 4, 0, 100);
      } else if (key === "s" || key === "arrowdown") {
        manualLanding.throttle = clamp(manualLanding.throttle - 4, 0, 100);
      } else if (key === "a" || key === "arrowleft") {
        manualLanding.lateral = clamp(manualLanding.lateral - 0.12, -1, 1);
      } else if (key === "d" || key === "arrowright") {
        manualLanding.lateral = clamp(manualLanding.lateral + 0.12, -1, 1);
      } else {
        return;
      }
      event.preventDefault();
      emitManualLanding(true);
      return;
    }
    if (roverState.active) {
      if (key === "w" || key === "arrowup") {
        roverState.targetSpeed = clamp(roverState.targetSpeed + 0.1, -1, 1);
      } else if (key === "s" || key === "arrowdown") {
        roverState.targetSpeed = clamp(roverState.targetSpeed - 0.1, -1, 1);
      } else if (key === "a" || key === "arrowleft") {
        roverState.steering = clamp(roverState.steering - 0.12, -1, 1);
      } else if (key === "d" || key === "arrowright") {
        roverState.steering = clamp(roverState.steering + 0.12, -1, 1);
      } else if (event.code === "Space") {
        collectRoverSample();
      } else if (key === "f") {
        scanFeature(nearestFeatureToRover());
      } else {
        return;
      }
      event.preventDefault();
      emitRover(true);
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  function handleResize() {
    updateProjection();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.setSize(viewportWidth(), viewportHeight());
  }

  window.addEventListener("resize", handleResize);

  function activateProbe(index, announce = true) {
    if (index < 0 || index >= probes.length) return;
    probes.forEach((probe) => {
      probe.active = false;
    });
    activeProbeIndex = index;
    const probe = probes[activeProbeIndex];
    probe.active = true;
    if (probe.transferCurve) {
      probe.transferProgress = 0.08;
    }
    lastInteraction = performance.now();
    probe.satellite.getWorldPosition(worldPosition);
    projectedPosition.copy(worldPosition).project(camera);
    onCritical({
      x: (projectedPosition.x * 0.5 + 0.5) * viewportWidth(),
      y: (-projectedPosition.y * 0.5 + 0.5) * viewportHeight(),
      label: probe.name,
      value: probe.id === "queqiao"
        ? "L2 HALO"
        : probe.id === "capstone"
          ? "9:2 NRHO"
          : probe.id === "tiangong"
            ? "TRANSLUNAR TRANSFER"
            : probe.id === "starship"
              ? "LUNAR TRANSFER"
              : "POLAR ORBIT",
      range: "locked"
    });
    if (announce) {
      setState("probe select", probe.status);
    }
    emitTelemetry(true);
  }

  function deployProbe() {
    activateProbe((activeProbeIndex + 1) % probes.length);
  }

  function sample() {
    if (roverState.active) {
      collectRoverSample();
    } else {
      startSample();
    }
  }

  function replay() {
    mapped = 37;
    sampleCount = 0;
    combo = 1;
    activeFeatureIndex = 0;
    activeProbeIndex = 0;
    surveyedByRegion.clear();
    surfaceTags.splice(0).forEach((tag) => {
      surfaceTagGroup.remove(tag.root);
      tag.root.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    });
    probes.forEach((probe, index) => {
      probe.active = index === 0;
    });
    stopMission();
    roverTrailPositions.splice(0);
    roverTrail.geometry.dispose();
    roverTrail.geometry = new THREE.BufferGeometry();
    roverTrail.visible = false;
    setTelescope("lroc", false);
    setObject("spa", true);
    onSurvey({ type: "reset" });
    setState("observing", "Lunar observatory reset");
    emitTelemetry(true);
  }

  setTelescope("lroc", false);
  setObject("spa", false);
  setMissionMode("relay");
  setState("observing", "Lunar observatory ready");
  emitTelemetry(true);

  function renderFrame() {
    const delta = Math.min(clock.getDelta(), 0.1);
    if (!firstFrameMs) {
      firstFrameMs = Math.round(performance.now() - sceneStartedAt);
    }
    updateScene(delta, clock.elapsedTime);
    renderer.render(scene, camera);
    animationFrame = window.requestAnimationFrame(renderFrame);
  }
  animationFrame = window.requestAnimationFrame(renderFrame);

  telemetryTimer = window.setInterval(() => {
    if (!document.hidden) emitTelemetry(true);
  }, 700);

  autoTimer = window.setInterval(() => {
    if (
      introComplete
      && !document.hidden
      && !mission.running
      && performance.now() - lastInteraction > 15000
    ) {
      scanFeature(nearestFeature());
    }
  }, 4000);

  const introTimeline = createTimeline({
    onComplete: () => {
      introComplete = true;
      setState(
        "observing",
        REGION_PROFILES[selectedRegion]?.status || "Lunar far-side region stable"
      );
    }
  });
  introTimeline
    .add(camera.position, {
      z: [14.5, 10.6],
      y: [1.6, 0.72],
      duration: reducedMotion ? 1 : 2200,
      ease: "outExpo"
    }, 0)
    .add(camera, {
      fov: [30, INSTRUMENT_PROFILES.lroc.fov],
      duration: reducedMotion ? 1 : 1900,
      ease: "outExpo",
      onUpdate: () => camera.updateProjectionMatrix()
    }, 0)
    .add(moonMaterial, {
      bumpScale: [0.018, 0.055],
      duration: reducedMotion ? 1 : 1700,
      ease: "outExpo"
    }, 120);

  function dispose() {
    window.clearInterval(autoTimer);
    window.clearInterval(telemetryTimer);
    window.clearTimeout(comboResetTimer);
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("keydown", handleKeyDown);
    window.cancelAnimationFrame(animationFrame);
    markerGroup.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    });
    renderer.dispose();
    delete window.__LUNAR_FARSIDE_DEBUG__;
  }

  window.__LUNAR_FARSIDE_DEBUG__ = {
    sampleColor: () => {
      if (!textures.color.image) return null;
      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = 8;
      sampleCanvas.height = 4;
      const sampleContext = sampleCanvas.getContext("2d");
      sampleContext.drawImage(textures.color.image, 0, 0, 8, 4);
      const data = sampleContext.getImageData(0, 0, 8, 4).data;
      const average = [0, 0, 0];
      for (let index = 0; index < data.length; index += 4) {
        average[0] += data[index];
        average[1] += data[index + 1];
        average[2] += data[index + 2];
      }
      return average.map((value) => Math.round(value / (data.length / 4)));
    },
    read: () => ({
      frameCount,
      firstFrameMs,
      surfaceReadyMs,
      textures: {
        colorLoaded: textures.colorLoaded,
        bumpLoaded: textures.bumpLoaded,
        colorSize: textures.color.image
          ? [textures.color.image.width, textures.color.image.height]
          : null,
        bumpSize: textures.bump.image
          ? [textures.bump.image.width, textures.bump.image.height]
          : null
      },
      probes: probes.map((probe) => ({
        id: probe.id,
        active: probe.active,
        position: probe.satellite.position.toArray(),
        pathPoints: probe.line.geometry.attributes.position.count,
        status: probe.status,
        modelChildren: probe.satellite.children.length,
        transferProgress: probe.transferProgress ?? null
      })),
      material: {
        color: moonMaterial.color.getHexString(),
        emissive: moonMaterial.emissive.getHexString(),
        emissiveIntensity: moonMaterial.emissiveIntensity,
        hasMap: Boolean(moonMaterial.map),
        hasEmissiveMap: Boolean(moonMaterial.emissiveMap)
      },
      camera: camera.position.toArray(),
      moonVisible: moonMesh.visible,
      moonMaterial: moonMaterial.type,
      markerCount: featureMarkers.length,
      survey: {
        region: selectedRegion,
        count: getSurveySet().size,
        total: featureMarkers.length,
        byRegion: Object.fromEntries(
          Array.from(surveyedByRegion, ([regionId, values]) => [
            regionId,
            Array.from(values)
          ])
        )
      },
      surfaceTagCount: surfaceTags.length,
      mapped,
      sampleCount,
      manualLanding: {
        active: manualLanding.active,
        complete: manualLanding.complete,
        success: manualLanding.success,
        altitude: manualLanding.altitude,
        verticalSpeed: manualLanding.verticalSpeed,
        horizontalSpeed: manualLanding.horizontalSpeed,
        offset: manualLanding.offset,
        fuel: manualLanding.fuel,
        score: manualLanding.score,
        status: manualLanding.status
      },
      mission: {
        mode: mission.mode,
        running: mission.running,
        success: mission.success,
        pathPoints: mission.pathPoints.length,
        craftVisible: missionCraft.visible,
        craftPosition: missionCraft.position.toArray(),
        model: {
          relayChildren: relayMissionCraft.children.length,
          sampleChildren: starshipLander.children.length,
          sampleVisible: sampleMissionCraft.visible
        },
        metrics: mission.metrics
      }
    })
  };

  return {
    replay,
    scan: (target = null) => scanFeature(target),
    sample,
    deployProbe,
    shipStrike: deployProbe,
    strike: () => scanFeature(),
    observeStar,
    setObject,
    setTelescope,
    setMissionMode,
    setMissionParams,
    setManualLandingControl,
    startManualLanding,
    stopManualLanding,
    runMission,
    stopMission,
    dispose
  };
}
