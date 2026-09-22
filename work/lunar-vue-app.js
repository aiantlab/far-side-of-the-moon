import {
  computed,
  createApp,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref
} from "vue/dist/vue.esm-bundler.js";
import { animate, createTimeline } from "animejs";
import { createLunarFarSideScene } from "./lunar-vue-scene.js";

const BrandMark = {
  template: `
    <div class="brand">
      <div class="brand-title">
        <div class="brand-name">aiANTlab</div>
        <span class="brand-star" aria-hidden="true">◐</span>
      </div>
    </div>
  `
};

const TelemetryPanel = {
  props: {
    telemetry: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="telemetry">
      <div class="telemetry-row">
        <span class="telemetry-label">features</span>
        <span class="telemetry-value cyan">{{ telemetry.features }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">mapped</span>
        <span class="telemetry-value">{{ telemetry.mapped }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">probes</span>
        <span class="telemetry-value cyan">{{ telemetry.probes }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">samples</span>
        <span
          :key="telemetry.samples"
          class="telemetry-value ember consumed-counter"
        >{{ telemetry.samples }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">gravity</span>
        <span class="telemetry-value cyan">{{ telemetry.gravity }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">state</span>
        <span class="telemetry-value">{{ telemetry.state }}</span>
      </div>
    </div>
  `
};

const RegionSelector = {
  props: {
    objects: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  emits: ["select"],
  template: `
    <nav class="object-switcher" aria-label="Lunar far-side region selector">
      <button
        v-for="object in objects"
        :key="object.id"
        class="object-tab"
        :class="{ active: selected === object.id }"
        :data-object="object.id"
        type="button"
        @click="$emit('select', object)"
      >
        <span>{{ object.short }}</span>
        <small>{{ object.size }}</small>
      </button>
    </nav>
  `
};

const InstrumentSelector = {
  props: {
    instruments: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  emits: ["select"],
  template: `
    <nav class="telescope-switcher" aria-label="Lunar surface data view selector">
      <button
        v-for="instrument in instruments"
        :key="instrument.id"
        type="button"
        class="telescope-tab"
        :class="{ active: selected === instrument.id }"
        :data-telescope="instrument.id"
        :aria-pressed="selected === instrument.id"
        @click="$emit('select', instrument)"
      >
        <span>{{ instrument.short }}</span>
        <small>{{ instrument.band }}</small>
      </button>
    </nav>
  `
};

const FeatureCatalog = {
  props: {
    features: {
      type: Array,
      required: true
    },
    activeFeature: {
      type: Number,
      default: -1
    },
    object: {
      type: Object,
      required: true
    },
    surveyed: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    surveyedCount() {
      return this.features.filter((feature) => this.surveyed.includes(feature.id)).length;
    },
    surveyProgress() {
      return this.features.length
        ? (this.surveyedCount / this.features.length) * 100
        : 0;
    }
  },
  emits: ["select"],
  template: `
    <aside class="star-panel">
      <div class="panel-heading">
        <span>{{ object.panelTitle }}</span>
        <small>NASA / CNSA</small>
      </div>
      <div class="object-brief">
        <strong>{{ object.label }}</strong>
        <span>{{ object.size }} · {{ object.coordinates }}</span>
        <span>{{ object.age }}</span>
        <em>{{ object.kind }}</em>
      </div>
      <div class="survey-progress">
        <div class="survey-progress-head">
          <span>survey grid</span>
          <strong>{{ surveyedCount }} / {{ features.length }}</strong>
        </div>
        <div class="survey-track" aria-hidden="true">
          <span :style="{ width: surveyProgress + '%' }"></span>
        </div>
      </div>
      <button
        v-for="feature in features"
        :key="feature.id"
        class="star-row"
        :class="{
          active: activeFeature === feature.id,
          surveyed: surveyed.includes(feature.id)
        }"
        :data-star="feature.name"
        :data-surveyed="surveyed.includes(feature.id)"
        type="button"
        @click="$emit('select', feature)"
      >
        <span class="star-swatch" :style="{ backgroundColor: feature.color }"></span>
        <span class="star-name">{{ feature.name }}</span>
        <span class="star-meta">{{ feature.type }} · {{ feature.diameter }}</span>
        <span class="star-period">{{ feature.coordinates }}</span>
        <span class="star-state">
          {{ surveyed.includes(feature.id) ? "MAPPED" : "OPEN" }}
        </span>
      </button>
    </aside>
  `
};

const MissionPanel = {
  props: {
    open: {
      type: Boolean,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    metrics: {
      type: Object,
      required: true
    },
    running: {
      type: Boolean,
      required: true
    },
    success: {
      type: Boolean,
      required: true
    },
    haloAmplitude: {
      type: Number,
      required: true
    },
    haloPhase: {
      type: Number,
      required: true
    },
    descentAngle: {
      type: Number,
      required: true
    },
    surfaceHours: {
      type: Number,
      required: true
    },
    landingMode: {
      type: String,
      required: true
    },
    landing: {
      type: Object,
      required: true
    }
  },
  emits: [
    "close",
    "set-mode",
    "update-param",
    "update-landing",
    "run"
  ],
  methods: {
    number(value, digits = 2) {
      return Number.isFinite(value) ? value.toFixed(digits) : "—";
    },
    update(key, event) {
      this.$emit("update-param", {
        key,
        value: Number(event.target.value)
      });
    },
    updateLanding(key, event) {
      this.$emit("update-landing", {
        key,
        value: Number(event.target.value)
      });
    },
    runLabel() {
      if (this.mode !== "sample" || this.landingMode !== "manual") {
        return this.mode === "sample" ? "RUN SAMPLE RETURN" : "RUN RELAY MISSION";
      }
      if (this.landing.active) return "ABORT MANUAL DESCENT";
      if (this.landing.complete) return "RETRY MANUAL LANDING";
      return "START MANUAL LANDING";
    },
    landingStatus() {
      if (this.landing.complete) {
        return this.landing.success
          ? `TOUCHDOWN SCORE ${this.landing.score}`
          : `LANDING FAILED · SCORE ${this.landing.score}`;
      }
      if (this.landing.active) return "PILOT CONTROL ACTIVE";
      return "TARGET: SOFT TOUCHDOWN / LOW LATERAL DRIFT";
    }
  },
  template: `
    <aside v-if="open" class="mission-panel">
      <div class="mission-header">
        <div>
          <strong>MISSION LAB</strong>
          <small>far-side communication / sampling</small>
        </div>
        <button type="button" class="mission-close" @click="$emit('close')">×</button>
      </div>

      <div class="mission-tabs">
        <button
          type="button"
          :class="{ active: mode === 'relay' }"
          @click="$emit('set-mode', 'relay')"
        >
          RELAY ORBIT
        </button>
        <button
          type="button"
          :class="{ active: mode === 'sample' }"
          @click="$emit('set-mode', 'sample')"
        >
          SAMPLE RETURN
        </button>
      </div>

      <template v-if="mode === 'relay'">
        <label class="mission-control">
          <span>halo amplitude</span>
          <strong>{{ number(haloAmplitude, 0) }} Mm</strong>
          <input
            type="range"
            min="55"
            max="145"
            step="1"
            :value="haloAmplitude"
            @input="update('haloAmplitude', $event)"
          >
        </label>

        <label class="mission-control">
          <span>halo phase</span>
          <strong>{{ number(haloPhase, 0) }}°</strong>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            :value="haloPhase"
            @input="update('haloPhase', $event)"
          >
        </label>

        <div class="mission-metrics">
          <div><span>far-side coverage</span><strong>{{ number(metrics.coverage, 1) }}%</strong></div>
          <div><span>earth line of sight</span><strong>{{ metrics.earthLink || "—" }}</strong></div>
          <div><span>halo period</span><strong>{{ number(metrics.period, 1) }} d</strong></div>
          <div><span>station keeping</span><strong>{{ number(metrics.stationKeeping, 1) }} m/s yr</strong></div>
        </div>

        <div class="mission-target" :class="{ safe: metrics.goal }">
          {{ metrics.goal ? "RELAY GEOMETRY LOCKED" : "TARGET: COVERAGE ≥ 96% / EARTH LOS" }}
        </div>
      </template>

      <template v-else-if="mode === 'sample'">
        <div class="mission-mode-toggle">
          <button
            type="button"
            :class="{ active: landingMode === 'auto' }"
            @click="$emit('update-landing', { key: 'mode', value: 'auto' })"
          >
            AUTO
          </button>
          <button
            type="button"
            :class="{ active: landingMode === 'manual' }"
            @click="$emit('update-landing', { key: 'mode', value: 'manual' })"
          >
            MANUAL
          </button>
        </div>

        <template v-if="landingMode === 'auto'">
          <label class="mission-control">
            <span>descent angle</span>
            <strong>{{ number(descentAngle, 0) }}°</strong>
            <input
              type="range"
              min="36"
              max="72"
              step="1"
              :value="descentAngle"
              @input="update('descentAngle', $event)"
            >
          </label>

          <label class="mission-control">
            <span>surface hours</span>
            <strong>{{ number(surfaceHours, 0) }} h</strong>
            <input
              type="range"
              min="8"
              max="48"
              step="1"
              :value="surfaceHours"
              @input="update('surfaceHours', $event)"
            >
          </label>

          <div class="mission-metrics">
            <div><span>landing slope</span><strong>{{ number(metrics.slope, 1) }}°</strong></div>
            <div><span>thermal load</span><strong>{{ number(metrics.thermal, 0) }}%</strong></div>
            <div><span>sample mass</span><strong>{{ number(metrics.sampleMass, 0) }} g</strong></div>
            <div><span>comm window</span><strong>{{ number(metrics.commWindow, 1) }} h</strong></div>
          </div>

          <div class="mission-target" :class="{ safe: metrics.goal }">
            {{ metrics.goal ? "SAMPLE RETURN WINDOW VALID" : "TARGET: SLOPE ≤ 7° / THERMAL ≤ 82% / MASS ≥ 120 g" }}
          </div>
        </template>

        <template v-else>
          <label class="mission-control manual-control">
            <span>main engine</span>
            <strong>{{ number(landing.throttle, 0) }}%</strong>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              :value="landing.throttle"
              @input="updateLanding('throttle', $event)"
            >
          </label>

          <label class="mission-control manual-control">
            <span>lateral trim</span>
            <strong>{{ number(landing.lateral, 2) }}</strong>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.01"
              :value="landing.lateral"
              @input="updateLanding('lateral', $event)"
            >
          </label>

          <div class="mission-metrics landing-metrics">
            <div><span>altitude</span><strong>{{ number(landing.altitude, 0) }} m</strong></div>
            <div><span>vertical speed</span><strong>{{ number(landing.verticalSpeed, 1) }} m/s</strong></div>
            <div><span>horizontal speed</span><strong>{{ number(landing.horizontalSpeed, 1) }} m/s</strong></div>
            <div><span>site offset</span><strong>{{ number(landing.offset, 0) }} m</strong></div>
            <div><span>fuel</span><strong>{{ number(landing.fuel, 0) }}%</strong></div>
            <div><span>vehicle tilt</span><strong>{{ number(landing.tilt, 1) }}°</strong></div>
          </div>

          <div class="mission-target" :class="{ safe: landing.success }">
            {{ landingStatus() }}
          </div>
        </template>
      </template>

      <button
        class="mission-run"
        type="button"
        :disabled="running"
        @click="$emit('run')"
      >
        {{ running ? "SIMULATION RUNNING" : runLabel() }}
      </button>
    </aside>
  `
};

const App = {
  components: {
    BrandMark,
    TelemetryPanel,
    RegionSelector,
    InstrumentSelector,
    FeatureCatalog,
    MissionPanel
  },
  setup() {
    const canvasRef = ref(null);
    const flashRef = ref(null);
    const sceneApi = ref(null);
    const webglError = ref(false);
    const loadingVisible = ref(true);
    const loadingProgress = ref(0);
    const loadingText = ref("Loading NASA lunar surface data");
    const loadingReadyMs = ref(0);
    const activeFeature = ref(0);
    const comboVisible = ref(false);
    const combo = ref(1);
    const statusText = ref("Initializing lunar far-side observation");
    const criticalMarkers = ref([]);
    const surveyedByRegion = reactive({});
    const surfaceProbe = reactive({
      visible: false,
      x: 0,
      y: 0,
      latitude: "",
      longitude: "",
      signal: 0
    });

    const telemetry = reactive({
      features: 10,
      mapped: "037%",
      probes: "1 / 5",
      samples: "000",
      gravity: "0.166g",
      state: "initializing"
    });

    const regions = [
      {
        id: "spa",
        short: "SPA",
        label: "SOUTH POLE–AITKEN BASIN",
        size: "2,500 km",
        coordinates: "53°S 169°W",
        age: "Pre-Nectarian",
        kind: "Largest confirmed lunar impact basin",
        panelTitle: "Basin feature catalog"
      },
      {
        id: "von-karman",
        short: "VON KÁRMÁN",
        label: "VON KÁRMÁN CRATER",
        size: "186 km",
        coordinates: "44.8°S 175.9°E",
        age: "~3.6–4.0 Ga",
        kind: "Chang'e-4 landing region",
        panelTitle: "Chang'e-4 landing region"
      },
      {
        id: "apollo",
        short: "APOLLO",
        label: "APOLLO BASIN",
        size: "524 km",
        coordinates: "35.7°S 151.3°W",
        age: "~4.0 Ga",
        kind: "Chang'e-6 sample-return region",
        panelTitle: "Chang'e-6 sampling region"
      },
      {
        id: "moscoviense",
        short: "MOSCOVIENSE",
        label: "MARE MOSCOVIENSE",
        size: "~276 km",
        coordinates: "27.3°N 147.9°E",
        age: "Imbrian",
        kind: "Rare far-side mare",
        panelTitle: "Far-side mare boundary"
      }
    ];

    const instruments = [
      {
        id: "lroc",
        short: "LROC",
        label: "Lunar Reconnaissance Orbiter Camera",
        band: "visible / relief"
      },
      {
        id: "diviner",
        short: "DIVINER",
        label: "LRO Diviner thermal mapper",
        band: "thermal"
      },
      {
        id: "minirf",
        short: "MINI-RF",
        label: "LRO Mini-RF radar",
        band: "radar"
      },
      {
        id: "lfs",
        short: "LFS",
        label: "Chang'e-4 Low Frequency Spectrometer",
        band: "radio"
      }
    ];

    const featureCatalogs = {
      spa: [
        { id: 0, name: "South Pole–Aitken", type: "Impact basin", diameter: "2,500 km", coordinates: "53°S 169°W", lat: -53, lon: -169, color: "#d8d3c5" },
        { id: 1, name: "Apollo", type: "Impact basin", diameter: "524 km", coordinates: "35.7°S 151.3°W", lat: -35.7, lon: -151.3, color: "#c5c1b7" },
        { id: 2, name: "Von Kármán", type: "Crater", diameter: "186 km", coordinates: "44.8°S 175.9°E", lat: -44.8, lon: 175.9, color: "#f0d7a0" },
        { id: 3, name: "Finsen", type: "Crater", diameter: "72 km", coordinates: "42.0°S 177.7°W", lat: -42, lon: -177.7, color: "#b7c9d7" },
        { id: 4, name: "Alder", type: "Crater", diameter: "82 km", coordinates: "48.6°S 177.4°W", lat: -48.6, lon: -177.4, color: "#b9b7b0" },
        { id: 5, name: "Bose", type: "Crater", diameter: "91 km", coordinates: "53.5°S 169.8°W", lat: -53.5, lon: -169.8, color: "#9ecbd0" },
        { id: 6, name: "Bhabha", type: "Crater", diameter: "64 km", coordinates: "55.5°S 165.5°W", lat: -55.5, lon: -165.5, color: "#d1b6ca" },
        { id: 7, name: "Stoney", type: "Crater", diameter: "45 km", coordinates: "55.6°S 156.4°W", lat: -55.6, lon: -156.4, color: "#d8cfac" },
        { id: 8, name: "Leibnitz", type: "Crater", diameter: "236 km", coordinates: "38.3°S 179.2°E", lat: -38.3, lon: 179.2, color: "#b7c3d1" },
        { id: 9, name: "Ingenii", type: "Impact basin", diameter: "282 km", coordinates: "33.7°S 163.5°E", lat: -33.7, lon: 163.5, color: "#9bb5c4" }
      ],
      "von-karman": [
        { id: 0, name: "Chang'e-4", type: "Landing site", diameter: "1.0 km site", coordinates: "45.5°S 177.6°E", lat: -45.5, lon: 177.6, color: "#e8c878" },
        { id: 1, name: "Yutu-2", type: "Rover route", diameter: "1st far-side rover", coordinates: "Von Kármán floor", lat: -45.44, lon: 177.56, color: "#ff7a45" },
        { id: 2, name: "Von Kármán", type: "Crater", diameter: "186 km", coordinates: "44.8°S 175.9°E", lat: -44.8, lon: 175.9, color: "#d8d3c5" },
        { id: 3, name: "Finsen", type: "Crater", diameter: "72 km", coordinates: "42.0°S 177.7°W", lat: -42, lon: -177.7, color: "#b7c9d7" },
        { id: 4, name: "Alder", type: "Crater", diameter: "82 km", coordinates: "48.6°S 177.4°W", lat: -48.6, lon: -177.4, color: "#b9b7b0" },
        { id: 5, name: "Bose", type: "Crater", diameter: "91 km", coordinates: "53.5°S 169.8°W", lat: -53.5, lon: -169.8, color: "#9ecbd0" },
        { id: 6, name: "Bhabha", type: "Crater", diameter: "64 km", coordinates: "55.5°S 165.5°W", lat: -55.5, lon: -165.5, color: "#d1b6ca" },
        { id: 7, name: "Stoney", type: "Crater", diameter: "45 km", coordinates: "55.6°S 156.4°W", lat: -55.6, lon: -156.4, color: "#d8cfac" },
        { id: 8, name: "Leibnitz", type: "Crater", diameter: "236 km", coordinates: "38.3°S 179.2°E", lat: -38.3, lon: 179.2, color: "#b7c3d1" },
        { id: 9, name: "Apollo", type: "Impact basin", diameter: "524 km", coordinates: "35.7°S 151.3°W", lat: -35.7, lon: -151.3, color: "#c5c1b7" }
      ],
      apollo: [
        { id: 0, name: "Chang'e-6", type: "Landing site", diameter: "Sample return", coordinates: "Apollo basin floor", lat: -41.64, lon: -153.99, color: "#ff7a45" },
        { id: 1, name: "Apollo", type: "Impact basin", diameter: "524 km", coordinates: "35.7°S 151.3°W", lat: -35.7, lon: -151.3, color: "#d8d3c5" },
        { id: 2, name: "Von Kármán", type: "Crater", diameter: "186 km", coordinates: "44.8°S 175.9°E", lat: -44.8, lon: 175.9, color: "#c9c4b9" },
        { id: 3, name: "Finsen", type: "Crater", diameter: "72 km", coordinates: "42.0°S 177.7°W", lat: -42, lon: -177.7, color: "#b7c9d7" },
        { id: 4, name: "Alder", type: "Crater", diameter: "82 km", coordinates: "48.6°S 177.4°W", lat: -48.6, lon: -177.4, color: "#b9b7b0" },
        { id: 5, name: "Bose", type: "Crater", diameter: "91 km", coordinates: "53.5°S 169.8°W", lat: -53.5, lon: -169.8, color: "#9ecbd0" },
        { id: 6, name: "Bhabha", type: "Crater", diameter: "64 km", coordinates: "55.5°S 165.5°W", lat: -55.5, lon: -165.5, color: "#d1b6ca" },
        { id: 7, name: "Stoney", type: "Crater", diameter: "45 km", coordinates: "55.6°S 156.4°W", lat: -55.6, lon: -156.4, color: "#d8cfac" },
        { id: 8, name: "Leibnitz", type: "Crater", diameter: "236 km", coordinates: "38.3°S 179.2°E", lat: -38.3, lon: 179.2, color: "#b7c3d1" },
        { id: 9, name: "South Pole–Aitken", type: "Impact basin", diameter: "2,500 km", coordinates: "53°S 169°W", lat: -53, lon: -169, color: "#b7c9c4" }
      ],
      moscoviense: [
        { id: 0, name: "Mare Moscoviense", type: "Lunar mare", diameter: "~276 km", coordinates: "27.3°N 147.9°E", lat: 27.3, lon: 147.9, color: "#7899a5" },
        { id: 1, name: "Komarov", type: "Crater", diameter: "78 km", coordinates: "24.7°N 152.5°E", lat: 24.7, lon: 152.5, color: "#c8c5bb" },
        { id: 2, name: "Bolyai", type: "Crater", diameter: "102 km", coordinates: "33.6°N 126.1°E", lat: 33.6, lon: 126.1, color: "#b9c4d0" },
        { id: 3, name: "Krasnov", type: "Crater", diameter: "60 km", coordinates: "29.7°N 156.1°E", lat: 29.7, lon: 156.1, color: "#d4c6a8" },
        { id: 4, name: "Tsiolkovskiy", type: "Crater", diameter: "185 km", coordinates: "20.4°S 129.1°E", lat: -20.4, lon: 129.1, color: "#96aab2" },
        { id: 5, name: "Hertzsprung", type: "Impact basin", diameter: "570 km", coordinates: "1.4°N 128.9°W", lat: 1.4, lon: -128.9, color: "#b2b6af" },
        { id: 6, name: "Korolev", type: "Crater", diameter: "437 km", coordinates: "4.9°S 157.4°W", lat: -4.9, lon: -157.4, color: "#a5b7c5" },
        { id: 7, name: "Freundlich–Sharonov", type: "Impact basin", diameter: "600 km", coordinates: "18.7°N 175.4°E", lat: 18.7, lon: 175.4, color: "#bcc0b7" },
        { id: 8, name: "Mendeleev", type: "Crater", diameter: "313 km", coordinates: "5.7°N 140.9°E", lat: 5.7, lon: 140.9, color: "#c4bfb1" },
        { id: 9, name: "Gagarin", type: "Crater", diameter: "265 km", coordinates: "19.7°S 149.2°E", lat: -19.7, lon: 149.2, color: "#b8c2c8" }
      ]
    };

    const selectedObject = ref("spa");
    const selectedInstrument = ref("lroc");
    const currentObject = computed(
      () => regions.find((object) => object.id === selectedObject.value) || regions[0]
    );
    const currentFeatures = computed(
      () => featureCatalogs[selectedObject.value] || featureCatalogs.spa
    );
    const currentSurveyed = computed(
      () => surveyedByRegion[selectedObject.value] || []
    );
    const currentInstrument = computed(
      () => instruments.find(
        (instrument) => instrument.id === selectedInstrument.value
      ) || instruments[0]
    );
    const missionOpen = ref(false);
    const missionMode = ref("relay");
    const missionMetrics = ref({});
    const missionRunning = ref(false);
    const missionSuccess = ref(false);
    const landingMode = ref("auto");
    const landingState = reactive({
      active: false,
      complete: false,
      success: false,
      altitude: 620,
      verticalSpeed: -38,
      horizontalSpeed: 0,
      offset: 0,
      fuel: 100,
      throttle: 52,
      lateral: 0,
      tilt: 0,
      elapsed: 0,
      score: 0,
      status: "ready"
    });
    const missionParams = reactive({
      haloAmplitude: 91,
      haloPhase: 180,
      descentAngle: 56,
      surfaceHours: 24
    });

    let criticalId = 0;

    function handleTelemetry(nextTelemetry) {
      const {
        featuresTotal,
        ...telemetryState
      } = nextTelemetry;
      Object.assign(telemetry, {
        ...telemetryState,
        features: featuresTotal
          ? `${nextTelemetry.features} / ${featuresTotal}`
          : nextTelemetry.features,
        mapped: `${String(Math.round(nextTelemetry.mapped)).padStart(3, "0")}%`,
        probes: `${nextTelemetry.probes} / ${nextTelemetry.probesTotal}`,
        samples: String(nextTelemetry.samples).padStart(3, "0")
      });
    }

    function handleSurvey(event) {
      if (event.type === "reset") {
        Object.keys(surveyedByRegion).forEach((regionId) => {
          delete surveyedByRegion[regionId];
        });
        return;
      }
      if (!event.regionId || !Number.isFinite(event.featureId)) return;
      const surveyed = surveyedByRegion[event.regionId]
        || (surveyedByRegion[event.regionId] = []);
      if (!surveyed.includes(event.featureId)) {
        surveyed.push(event.featureId);
      }
    }

    function handleSurfacePointer(event) {
      Object.assign(surfaceProbe, event);
    }

    function handleState(nextState) {
      telemetry.state = nextState.state;
      statusText.value = nextState.status;
    }

    function handlePulse() {
      if (!flashRef.value) return;
      animate(flashRef.value, {
        opacity: [0.44, 0],
        duration: 520,
        ease: "outExpo"
      });
    }

    function handleLoading(event) {
      loadingProgress.value = Math.round((event.progress || 0) * 100);
      if (event.type === "started") {
        loadingText.value = "Loading NASA LROC and LOLA data";
        return;
      }
      if (event.type.endsWith("error")) {
        loadingText.value = "Surface load failed; using lightweight fallback";
        window.setTimeout(() => {
          loadingVisible.value = false;
        }, 900);
        return;
      }
      loadingText.value = event.progress >= 1
        ? "Real lunar surface ready"
        : "Decoding real lunar surface";
      if (event.progress >= 1) {
        loadingReadyMs.value = Math.round(performance.now() - loadStartedAt);
        performance.mark("lunar-surface-ready");
        window.setTimeout(() => {
          loadingVisible.value = false;
        }, 520);
      }
    }

    function handleMission(event) {
      missionMode.value = event.mode;
      missionMetrics.value = event.metrics || {};
      missionRunning.value = event.running;
      missionSuccess.value = event.success;
      missionParams.haloAmplitude = event.haloAmplitude;
      missionParams.haloPhase = event.haloPhase;
      missionParams.descentAngle = event.descentAngle;
      missionParams.surfaceHours = event.surfaceHours;
    }

    function handleLanding(event) {
      Object.assign(landingState, event);
    }

    function handleCritical(event) {
      if (event.type === "combo") {
        combo.value = event.value;
        comboVisible.value = true;
        return;
      }

      if (event.type === "combo-end") {
        comboVisible.value = false;
        return;
      }

      const marker = {
        id: ++criticalId,
        x: event.x,
        y: event.y,
        label: event.label || "MAPPED",
        value: event.value || "signal locked"
      };
      criticalMarkers.value.push(marker);

      nextTick(() => {
        const element = document.querySelector(`[data-critical-id="${marker.id}"]`);
        if (!element) return;
        const timeline = createTimeline({
          onComplete: () => {
            criticalMarkers.value = criticalMarkers.value.filter(
              (item) => item.id !== marker.id
            );
          }
        });
        timeline
          .add(element, {
            opacity: [0, 1],
            scale: [0.45, 1.12],
            y: [0, -28],
            duration: 240,
            ease: "out(4)"
          })
          .add(element, {
            opacity: 0,
            scale: 0.9,
            y: -112,
            duration: 760,
            ease: "outExpo"
          }, 510);
      });
    }

    function focusFeature(feature) {
      activeFeature.value = feature.id;
      sceneApi.value?.observeStar(feature.id);
      sceneApi.value?.scan(feature.id);
    }

    function selectObject(object) {
      selectedObject.value = object.id;
      activeFeature.value = currentFeatures.value[0]?.id ?? -1;
      sceneApi.value?.setObject(object.id);
    }

    function selectInstrument(instrument) {
      selectedInstrument.value = instrument.id;
      sceneApi.value?.setTelescope(instrument.id);
    }

    function scan() {
      sceneApi.value?.scan();
    }

    function deployProbe() {
      sceneApi.value?.deployProbe();
    }

    function sample() {
      sceneApi.value?.sample();
    }

    function openMission() {
      missionOpen.value = true;
      sceneApi.value?.setMissionMode(missionMode.value);
    }

    function closeMission() {
      missionOpen.value = false;
      sceneApi.value?.stopMission();
    }

    function setMissionMode(mode) {
      missionMode.value = mode;
      if (mode !== "sample") {
        landingMode.value = "auto";
      }
      sceneApi.value?.setMissionMode(mode);
    }

    function updateLandingControl({ key, value }) {
      if (key === "mode") {
        landingMode.value = value === "manual" ? "manual" : "auto";
        if (landingMode.value === "auto" && landingState.active) {
          sceneApi.value?.stopManualLanding();
        }
        return;
      }
      sceneApi.value?.setManualLandingControl({ key, value });
    }

    function updateMissionParam({ key, value }) {
      missionParams[key] = value;
      sceneApi.value?.setMissionParams({ [key]: value });
    }

    function runMission() {
      if (missionMode.value === "sample" && landingMode.value === "manual") {
        if (landingState.active) {
          sceneApi.value?.stopManualLanding();
        } else {
          sceneApi.value?.startManualLanding();
        }
        return;
      }
      missionRunning.value = true;
      sceneApi.value?.runMission();
    }

    function replay() {
      comboVisible.value = false;
      criticalMarkers.value = [];
      sceneApi.value?.replay();
    }

    const loadStartedAt = performance.now();

    onMounted(() => {
      try {
        sceneApi.value = createLunarFarSideScene(canvasRef.value, {
          onTelemetry: handleTelemetry,
          onState: handleState,
          onCritical: handleCritical,
          onPulse: handlePulse,
          onMission: handleMission,
          onSurvey: handleSurvey,
          onPointer: handleSurfacePointer,
          onLanding: handleLanding,
          onLoading: handleLoading
        });
      } catch (error) {
        console.error(error);
        webglError.value = true;
      }
    });

    onBeforeUnmount(() => {
      sceneApi.value?.dispose();
    });

    return {
      canvasRef,
      flashRef,
      webglError,
      loadingVisible,
      loadingProgress,
      loadingText,
      loadingReadyMs,
      activeFeature,
      comboVisible,
      combo,
      statusText,
      criticalMarkers,
      surfaceProbe,
      telemetry,
      regions,
      instruments,
      currentObject,
      currentFeatures,
      currentSurveyed,
      selectedObject,
      selectedInstrument,
      currentInstrument,
      focusFeature,
      selectObject,
      selectInstrument,
      scan,
      deployProbe,
      sample,
      missionOpen,
      missionMode,
      missionMetrics,
      missionRunning,
      missionSuccess,
      landingMode,
      landingState,
      missionParams,
      openMission,
      closeMission,
      setMissionMode,
      updateLandingControl,
      updateMissionParam,
      runMission,
      replay
    };
  },
  template: `
    <main class="app">
      <canvas
        ref="canvasRef"
        class="scene-canvas"
        aria-label="Far Side of the Moon realtime 3D lunar observatory"
      ></canvas>

      <div v-if="loadingVisible" class="loading-screen">
        <div class="loading-mark">aiANTlab</div>
        <div class="loading-copy">{{ loadingText }}</div>
        <div class="loading-track">
          <span :style="{ width: loadingProgress + '%' }"></span>
        </div>
        <div class="loading-value">{{ loadingProgress }}%</div>
      </div>

      <div class="hud">
        <header class="topbar">
          <BrandMark />
          <TelemetryPanel :telemetry="telemetry" />
        </header>

        <RegionSelector
          :objects="regions"
          :selected="selectedObject"
          @select="selectObject"
        />

        <InstrumentSelector
          :instruments="instruments"
          :selected="selectedInstrument"
          @select="selectInstrument"
        />

        <div class="status-pill">
          <span class="status-dot"></span>
          <span>{{ statusText }}</span>
        </div>

        <div v-if="comboVisible" :key="combo" class="combo">
          SIGNAL x{{ combo }}
        </div>

        <FeatureCatalog
          :features="currentFeatures"
          :active-feature="activeFeature"
          :object="currentObject"
          :surveyed="currentSurveyed"
          @select="focusFeature"
        />

        <MissionPanel
          :open="missionOpen"
          :mode="missionMode"
          :metrics="missionMetrics"
          :running="missionRunning"
          :success="missionSuccess"
          :halo-amplitude="missionParams.haloAmplitude"
          :halo-phase="missionParams.haloPhase"
          :descent-angle="missionParams.descentAngle"
          :surface-hours="missionParams.surfaceHours"
          :landing-mode="landingMode"
          :landing="landingState"
          @close="closeMission"
          @set-mode="setMissionMode"
          @update-param="updateMissionParam"
          @update-landing="updateLandingControl"
          @run="runMission"
        />

        <section class="headline">
          <div class="headline-kicker">
            <span>NASA × CNSA</span>
            <span class="kicker-accent">FAR SIDE</span>
          </div>
          <h1 class="hero-title">
            <span class="title-column">
              <span class="title-letter">T</span>
              <span class="title-letter">H</span>
              <span class="title-letter">E</span>
            </span>
            <span class="title-column accent">
              <span class="title-letter">M</span>
              <span class="title-letter">O</span>
              <span class="title-letter">O</span>
              <span class="title-letter">N</span>
            </span>
          </h1>
          <p class="headline-note">
            {{ currentObject.coordinates }} · {{ currentObject.age }}
          </p>
        </section>

        <footer class="footer">
          <span class="status">{{ statusText }}</span>
          <button class="action mission-action" type="button" @click="openMission">MISSION</button>
          <button class="action ship-action" type="button" @click="deployProbe">PROBE</button>
          <button class="action" type="button" @click="sample">SAMPLE</button>
          <button class="action scan-action" type="button" @click="scan">SCAN</button>
          <button class="replay" type="button" @click="replay">REPLAY</button>
        </footer>
      </div>

      <div class="flash" ref="flashRef"></div>
      <div
        v-if="surfaceProbe.visible"
        class="surface-probe"
        :style="{ left: surfaceProbe.x + 'px', top: surfaceProbe.y + 'px' }"
      >
        <span class="surface-probe-ring"></span>
        <strong>{{ surfaceProbe.latitude }} · {{ surfaceProbe.longitude }}</strong>
        <small>terrain signal {{ surfaceProbe.signal }}%</small>
      </div>
      <div class="crit-layer">
        <div
          v-for="marker in criticalMarkers"
          :key="marker.id"
          class="crit-number"
          :data-critical-id="marker.id"
          :style="{ left: marker.x + 'px', top: marker.y + 'px' }"
        >
          <strong>{{ marker.label }}</strong>
          <span>{{ marker.value }}</span>
        </div>
      </div>

      <div v-if="webglError" class="webgl-fallback">
        WebGL is unavailable in this browser.
      </div>
    </main>
  `
};

createApp(App).mount("#app");
