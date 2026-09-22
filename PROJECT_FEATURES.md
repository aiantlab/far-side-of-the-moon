# Far Side of the Moon Project Feature Record

Last updated: 2026-09-22

## 1. Project Summary

“Far Side of the Moon”是一个静态浏览器 3D 月球背面观测站。界面层使用 Vue 3.5，
场景层使用 Three.js，转场与反馈使用 Anime.js，生产文件为 esbuild
生成的单页 bundle。

项目把公开任务事实、尺度化演示和程序化视觉严格区分：

- NASA LRO/LROC、Diviner、Mini-RF 与 CNSA 嫦娥任务的公开事实。
- 为浏览器可读性压缩的轨道、任务时间和三维尺度。
- NASA SVS CGI Moon Kit 的真实 LROC WAC 月面颜色图与 LOLA 高程图。
- 基于真实月面贴图进行教学着色的热响应、雷达响应和低频电视图。

## 2. Feature Record

### 2.1 Far-Side Regions

| Region | Public reference | Main representation |
| --- | --- | --- |
| South Pole–Aitken Basin | ~2,500 km impact basin | Basin-scale relief and crater chain |
| Von Kármán | ~186 km crater | Chang'e-4 and Yutu-2 landing region |
| Apollo Basin | ~524 km basin | Chang'e-6 sample-return region |
| Mare Moscoviense | ~276 km mare | Rare far-side mare and highland boundary |

Switching region rotates the lunar globe to the target latitude/longitude,
rebuilds ten surface markers, resets the active feature, updates the HUD brief,
and updates the mission path.

### 2.2 Lunar Data Views

| Mode | Interpretation | Visual response |
| --- | --- | --- |
| LROC | NASA LROC WAC color and LOLA relief | Neutral real-surface albedo and relief |
| Diviner | Thermal-response teaching tint | Warm-to-cool tint over real terrain |
| Mini-RF | Radar teaching tint | Cyan high-backscatter tint over real terrain |
| LFS | Chang'e-4 low-frequency radio context | Radio-quiet rings over real terrain |

The LROC/LOLA maps are real NASA source maps. The false-color modes are
teaching treatments over that real surface and are not calibrated instrument
products.

### 2.3 Surface Catalog

- Ten catalog rows are shown per region.
- Feature markers use latitude/longitude positions on the globe.
- Public mission points include Chang'e-4, Yutu-2, and Chang'e-6.
- Major geological features include Von Kármán, Apollo, Finsen, Alder, Bose,
  Bhabha, Stoney, Leibnitz, Ingenii, Mare Moscoviense, Tsiolkovskiy,
  Hertzsprung, Korolev, Mendeleev, and Gagarin.
- Clicking a catalog row selects the feature and raises its label.
- Clicking a visible marker scans and focuses the same feature.

### 2.4 Interactive Lunar Globe

- NASA LROC WAC 1536x768 color map and LOLA 1024x512 elevation map.
- Build-time WebP compression and data URL inlining for `file://` WebGL use.
- A 160x96 sphere mesh with directional sunlight, rim light, and hemisphere fill.
- Real latitude/longitude conversion for surface markers.
- Drag to rotate the globe; mouse wheel changes magnification from `1x` to `6x`.
- Region selection smoothly rotates the globe toward the target.
- Earth is placed behind the far side to make the communication geometry legible.

### 2.5 Probe Orbits

- `LRO` uses a 50 km, near-circular polar orbit with a 113 minute period.
- `QUEQIAO` uses an Earth-Moon L2 halo geometry on the far-side relay side.
- `CAPSTONE` uses a 9:2 near-rectilinear halo orbit with a 6.5 day period and
  an approximately 3,000 km perilune.
- `TIANGONG` uses a modeled T-shaped station body, laboratory modules,
  docking nodes, radiator, robotic arm, antenna, and four solar wings.
- Tiangong follows a visible Earth-to-Moon transfer line, enters a capture
  orbit outside the lunar surface, and then continues as a lunar orbiter.
- `STARSHIP` uses a modeled two-stage stainless-steel stack with nose cone,
  grid fins, forward and aft flaps, heat-shield tiles, hot-stage ring, and
  multiple engine bells.
- Starship follows a separate visual translunar path and enters a stable
  lunar orbit outside the lunar radius.
- Every orbit now contains 220 sampled points and is solved in an independent
  cislunar reference frame instead of rotating with the lunar surface view.
- Orbital position uses eccentric anomaly, inclination, node, argument of
  periapsis, and compressed browser time.
- `PROBE` cycles the active line, and clicking any satellite activates it.
- LRO, Queqiao, and CAPSTONE have distinct models with instrument buses,
  deployable solar arrays, parabolic communication dishes, feed structures,
  booms, radiators, and attitude-control details.

The route geometry follows public mission descriptions. Timing and spacecraft
dimensions are compressed for browser readability and are not exact ephemerides.
Tiangong normally operates in low Earth orbit; its lunar transfer and capture
are explicitly a visual cislunar scenario, not a mission claim.
Starship lunar transfer and capture are also presented as an interactive
visual scenario rather than a claimed mission profile.

### 2.6 Relay Mission

- Controls: L2 halo amplitude and phase.
- Metrics: far-side coverage, Earth line of sight, halo period, and
  station-keeping cost.
- A valid solution requires at least `96%` coverage, a locked Earth link,
  and station keeping no higher than `18 m/s yr`.
- The preview path contains 180 sampled transfer points and the mission craft
  becomes visible while running.

### 2.7 Sample-Return Mission

- Controls: descent angle and surface duration.
- Metrics: landing slope, thermal load, sample mass, and communication window.
- A valid solution requires slope no higher than `7°`, thermal load no higher
  than `82%`, at least `120 g`, and a communication window of at least `5 h`.
- The descent, surface, and ascent preview contains 101 sampled path points.
- The complete mission lab interface is presented in English.

The sample mass is a planning proxy. Chang'e-6 returned 1,935.3 g of
far-side material in 2024; the simulation uses a smaller educational budget
to keep the controls responsive.

### 2.8 Interaction and Feedback

- `SCAN` locks the nearest/selected feature, adds a 3D ring pulse, raises a
  world-space callout, updates mapped coverage, and advances the signal combo.
- `SAMPLE` emits a particle burst from the active surface point and increments
  the archived sample counter.
- `PROBE` cycles the active orbital track.
- `MISSION` opens the two mission planners.
- `REPLAY` restores the initial region, counters, camera, instrument, and orbit.

### 2.8.1 Mission Vehicle Models

- `RELAY` uses a dedicated communication satellite with a box bus, instrument
  deck, parabolic antenna, feed, deployable solar wings, and beacon.
- `SAMPLE` uses the lunar Starship HLS configuration rather than a generic
  orbital Starship or a two-stage Chang'e-style lander.
- The model follows the approximately 50-meter-tall HLS silhouette with a
  smooth ogive nose, cylindrical stainless-steel hull, horizontal panel seams,
  window band, mid-body hatch, docking port, and a vertical crew-elevator rail.
- Four high-mounted landing thrusters, a three-engine base cluster, four long
  landing legs, flush solar arrays, crew elevator, and sampling boom are
  modeled separately.
- Atmospheric re-entry heat-shield tiles and aerodynamic flaps are omitted
  because the lunar HLS configuration in the NASA reference does not use the
  Earth-return Starship exterior.
- The trajectory includes a held surface phase so the vehicle visibly lands,
  samples, and then lifts off again.

### 2.8.2 Manual Landing Controls

- `SAMPLE RETURN` has `AUTO` and `MANUAL` control modes.
- Manual landing models lunar gravity, thrust, vertical velocity, lateral
  drift, fuel consumption, tilt, and touchdown score.

### 2.9 Responsive HUD

- Desktop shows the full catalog, telemetry, six HUD groups, and footer actions.
- Mobile hides the catalog, keeps the telemetry and selectors, and uses a
  five-button footer fitted to a 390 px viewport.
- The interface passed an overflow check at `390 x 844`.

### 2.10 Loading Performance

- Runtime multi-canvas procedural texture generation was removed.
- NASA LROC color and LOLA elevation maps are compressed to WebP at build time.
- Both texture maps are inlined as data URLs so direct `file://` WebGL uploads
  work without a local server or CORS proxy.
- EffectComposer and UnrealBloom were removed; the final frame uses one Three.js
  render pass.
- Headless Chrome measured first frame at about `0.5-0.8 s` and surface-ready
  time at about `1.3-1.5 s`; mobile surface-ready time was about `0.3-0.7 s`.

## 3. Architecture

### UI Layer

`work/lunar-vue-app.js`

- Vue components for brand, telemetry, region selector, instrument selector,
  feature catalog, and mission panel.
- Reactive state for selected region, selected view, active feature, mapped
  coverage, samples, and mission metrics.
- Bridges UI events to the scene API.

### Scene Layer

`work/lunar-vue-scene.js`

- Canvas-generated visible, thermal, radar, radio, and bump maps.
- Three.js scene, lighting, camera, globe, marker system, Earth reference,
  probe orbits, scan rings, sample particles, and mission craft.
- Real latitude/longitude projection and region focus quaternion.
- Mission calculations and path generation.

### Production Layer

`outputs/lunar-farside`

- `index.html`
- `app.bundle.js`
- `fonts/`
- `README.md`

## 4. Data Policy

### Publicly Referenced

- The far side is the lunar hemisphere not visible from Earth because the Moon
  is tidally locked.
- The far side has a thicker crust, more craters, and fewer maria than the
  near side.
- South Pole–Aitken is one of the largest and oldest confirmed impact basins
  on the Moon.
- Chang'e-4 landed in Von Kármán crater on 2019-01-03.
- Yutu-2 is the first rover operated on the lunar far side.
- Queqiao provides the relay link from around the Earth-Moon L2 region.
- Chang'e-6 landed in Apollo crater and returned far-side samples in 2024.
- LRO has mapped the Moon with LROC, Diviner, Mini-RF, and other instruments.

### Scaled or Procedural

- Thermal contrast, radar contrast, radio rings, glow, star distribution,
  Earth position, and mission overlays.
- Orbit phases, path lengths, mission durations, probe locations, and
  station-keeping values.
- Sample mass used by the interactive planner.

## 5. Known Limitations

- The LROC map is a global color mosaic, not a single photograph or calibrated
  science raster at its display resolution.
- The thermal, radar, and radio views are not calibrated instrument products.
- The surface catalog uses representative coordinates and does not include
  every named feature.
- Probe paths are diagrams, not ephemerides.
- The mission lab uses simplified formulas and is not flight dynamics software.
- The globe does not include a high-resolution digital elevation model,
  self-shadowing terrain, or libration.

## 6. Build and Verification

```bash
npm install
npm run build
npm test
```

Expected production entry:

```text
outputs/lunar-farside/index.html
```

The browser test verifies:

- Vue mounting and WebGL context creation.
- Ten markers in the selected region.
- Four data views and six zoom levels.
- Four region changes and ten catalog rows per region.
- Relay and sample valid/invalid parameter states.
- Relay and sample mission completion.
- Mission path validity, craft visibility, invalid controls, and completion
  status persistence.
- Scan, sample, probe, and telemetry updates.
- Mobile layout at `390 x 844` with no horizontal overflow.
