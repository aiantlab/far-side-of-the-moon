# Data Sources and Presentation Notes

This project uses public mission and lunar-science information. The UI text
keeps the source families visible as `NASA / CNSA`; this file records the
facts and the limits of the visualization.

## NASA / LRO

- NASA Moon facts:
  <https://science.nasa.gov/moon/facts/>
- NASA Lunar Reconnaissance Orbiter:
  <https://science.nasa.gov/mission/lro/>
- NASA Scientific Visualization Studio:
  <https://svs.gsfc.nasa.gov/>
- NASA SVS CGI Moon Kit:
  <https://svs.gsfc.nasa.gov/4720/>
- LROC:
  <https://www.lroc.asu.edu/>
- Diviner:
  <https://diviner.asu.edu/>

Public facts represented in the site:

- The Moon is tidally locked, so the same hemisphere faces Earth.
- The far side is not permanently dark; it receives sunlight during the
  lunar day.
- The far side has a thicker crust, more craters, and fewer maria than the
  near side.
- South Pole–Aitken is a very large, ancient impact basin.
- LRO has mapped the Moon with LROC, Diviner, Mini-RF, and other instruments.
- LRO operates in a near-circular polar lunar orbit with an approximately
  113 minute period.
- CAPSTONE follows a 9:2 lunar synodic resonant near-rectilinear halo orbit
  with an approximately 6.5 day period.

## Surface Assets Used

- `moon-lroc-color-1536.webp` is derived from the NASA SVS CGI Moon Kit
  `lroc_color_2k.jpg`, which is centered on 0° longitude and assembled from
  LROC Wide Angle Camera color data.
- `moon-lola-elevation-1k.webp` is derived from the NASA SVS CGI Moon Kit
  `ldem_3_8bit.jpg`, based on LOLA elevation data.
- Original downloaded JPEGs are retained under `work/assets/nasa/`.
- The browser build uses 1536x768 and 1024x512 WebP data URLs so direct
  `file://` viewing does not trigger image CORS failures.

## China Lunar Exploration Program

- China National Space Administration:
  <https://www.cnsa.gov.cn/>
- Chang'e-4 mission facts represented:
  - Queqiao was launched in 2018 to support far-side communications from the
    Earth-Moon L2 region.
  - Queqiao follows a halo-type orbit around the Earth-Moon L2 region.
  - Chang'e-4 landed in Von Kármán crater on 2019-01-03.
  - Yutu-2 became the first rover operated on the lunar far side.
  - The landing site is commonly given as approximately 45.5°S, 177.6°E.
- Chang'e-6 mission facts represented:
  - The mission targeted the far-side Apollo crater region.
  - It returned far-side samples to Earth in 2024.
  - The returned sample mass was 1,935.3 g.
- Tiangong facts represented in the model:
  - Tiangong uses a modular T-shaped configuration.
  - The model follows the general Tianhe, Wentian, and Mengtian structure,
    docking nodes, robotic arm, antenna, and solar-array layout.
  - The actual station operates in low Earth orbit. The site clearly labels
    the lunar transfer and capture as a visual cislunar scenario.
- Starship facts represented in the model:
  - NASA Human Landing System overview:
    <https://www.nasa.gov/humans-in-space/human-landing-system/>
  - NASA's Artemis III HLS reference image describes Starship HLS as roughly
    50 meters tall and shows the lunar landing configuration on the surface.
  - The orbital Starship visual keeps the public stainless-steel, two-stage
    silhouette with a nose cone, grid fins, aerodynamic flaps, engine bells,
    stage interface, and heat-shield treatment.
  - The `SAMPLE RETURN` vehicle uses the HLS lunar configuration instead:
    a smooth ogive nose, long stainless-steel hull, mid-body hatch/docking
    features, crew elevator rail, high-mounted landing thrusters, base engine
    cluster, and four long landing legs.
  - Atmospheric heat-shield tiles and aerodynamic flaps are omitted from the
    HLS landing model because the NASA surface reference does not show the
    Earth-return Starship exterior.
  - No SpaceX logos or proprietary textures are included.
  - The lunar transfer and capture are a visual cislunar scenario.

## Presentation Policy

The following are generated or scaled for the browser and must not be cited as
instrument data:

- Diviner-style thermal colors.
- Mini-RF-style radar colors.
- Chang'e-4 LFS-style radio rings.
- Earth position, star distribution, probe phase, and orbit timing.
- Mission scores and sample-budget values in the interactive labs.

The production site has no network dependency. References above are source
provenance and further reading, not assets fetched at runtime.
