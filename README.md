# Far Side of the Moon

一个可直接运行的交互式月球背面观测站。项目沿用 aiANTlab 的
Vue 3.5 + Three.js + Anime.js 4.5 单页应用方式，保留区域切换、仪器切换、
鼠标滚轮缩放、目录聚焦、任务实验室、点击反馈、移动端 HUD 和静态构建流程，
并把天体与任务逻辑替换为月球背面、嫦娥任务和 NASA LRO 数据主题。

> Vue 官方当前最新稳定版是 `3.5.43`，不存在 Vue 4.5。项目采用 Vue
> `3.5.43`，Anime.js 采用 `4.5.0`，Three.js 采用 `0.186.0`。

## Highlights

- 四个可切换的月背区域：南极-艾特肯盆地、冯·卡门撞击坑、阿波罗盆地、
  莫斯科海。
- 四种数据视图：LROC 可见光与地形、Diviner 热响应、Mini-RF 雷达、
  嫦娥四号低频射电。
- 每个区域包含十项月面特征，支持目录聚焦与三维标记点击。
- 月面按真实经纬度定位嫦娥四号、玉兔二号、嫦娥六号、阿波罗盆地、
  冯·卡门、莫斯科海、齐奥尔科夫斯基等对象。
- 两个任务实验室：
  - `RELAY`：调整 L2 光晕轨道振幅与相位，计算月背覆盖、地球视线和
    站位保持代价。
  - `SAMPLE`：调整下降角和月面工作时长，计算坡度、热负载、样本质量和
    通信窗口。
- `SAMPLE RETURN` 按 Starship HLS 公开构型建模：约 50 米级修长船体、
  连续渐变鼻锥、不锈钢外板与环缝、中段舱门/电梯轨道、舷窗带、
  高位月面着陆推力器、底部 Raptor 发动机组和四条长行程着陆腿。
  月球任务构型不复用再入热盾和大气襟翼，轨迹包含月面停留段后再起飞。
- `SAMPLE RETURN` 提供 `AUTO` 与 `MANUAL` 两种模式。手动模式可实时控制
  主发动机和横向修正，并依据下降率、横向速度、落点偏差、倾角和剩余燃料
  给出触地评分。
- 三组真实任务卫星：LRO 近极轨、鹊桥地月 L2 光晕轨道、CAPSTONE 9:2 NRHO。
- 卫星均使用独立模型，包含仪器舱、太阳能阵列、通信天线、馈源、支架和姿控结构。
- 天宫空间站按天和核心舱、问天和梦天实验舱、对接节点、机械臂及
  四组太阳翼建模，并由可视化地月转移轨迹进入月球捕获轨道。
- Starship 采用两级不锈钢堆叠模型，包含鼻锥、栅格翼、前后襟翼、
  隔热瓦、热级分离环和发动机喷管，并沿独立地月转移线进入月球轨道。
- `PROBE`、`SAMPLE`、`SCAN`、`REPLAY` 提供即时反馈与遥测更新。
- 桌面与移动端响应式 HUD，无外部网络依赖。
- 月面使用 NASA SVS CGI Moon Kit 的 LROC WAC 颜色图和 LOLA 高程图，
  构建时内联为 WebP data URL，离线双击也能直接上传到 WebGL。
- 已移除运行时多画布程序化纹理生成和高开销后处理通道。
- 无头 Chrome 实测首帧约 `0.5-0.8 s`，NASA 月面资源约 `1.3-1.5 s`
  就绪；移动端约 `0.4-0.7 s`。

## Run

生产站点已生成，可直接打开：

```text
outputs/lunar-farside/index.html
```

页面不需要服务器或网络连接。

## Build

```bash
npm install
npm run build
```

构建输出：

```text
outputs/lunar-farside/app.bundle.js
```

## Test

```bash
npm test
```

浏览器回归测试要求本机存在 Chrome，环境变量 `CHROME_PATH` 可覆盖路径。
测试覆盖 Vue 挂载、WebGL、月面帧渲染、四种仪器、四个区域、两种任务模式的
有效/无效参数、任务闭环、扫描与采样、探测器切换和移动端溢出。

快速只检查移动端：

```powershell
$env:LUNAR_QUICK_MOBILE='1'
npm test
```

## Project Structure

```text
work/
  lunar-vue-app.js         Vue UI、区域/仪器目录、任务面板
  lunar-vue-scene.js       Three.js 月面、纹理、标记、轨道、任务与交互
  lunar-cdp-test.mjs       无头 Chrome 回归测试
outputs/lunar-farside/
  index.html               全屏布局、HUD 与本地字体声明
  app.bundle.js            esbuild 静态 bundle，内联压缩月面贴图
  assets/                  NASA WebP 贴图和来源说明
  fonts/                   本地 WOFF2 字体及 OFL 许可
```

## Scientific Scope

站内使用 NASA SVS CGI Moon Kit 的 LROC WAC 颜色图与 LOLA 高程图，
并结合 NASA LRO、Diviner、Mini-RF 以及中国探月公开任务的区域、任务和
月面特征信息。数据用于交互教学与空间关系展示。

热响应、雷达响应、低频射电环纹、任务时间压缩和部分三维尺度为教学着色
和可视化近似，不是 Diviner 定标温度图或 Mini-RF 科学产品。
任务指标用于讲解轨道与采样约束，不替代实际任务设计软件。

详细事实、来源和限制见 [DATA_SOURCES.md](DATA_SOURCES.md) 与
[PROJECT_FEATURES.md](PROJECT_FEATURES.md)。

## License

MIT。字体许可见 `outputs/lunar-farside/fonts/`。
