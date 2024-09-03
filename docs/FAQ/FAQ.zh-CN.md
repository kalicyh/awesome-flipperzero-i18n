<a id="top" href="https://github.com/kalicyh/Flipper_Zero_Apps">
  <img src="https://user-images.githubusercontent.com/8518150/179464273-7927420c-b60a-48ab-9eb9-d69b563c0a0b.png" align="center" alt="Flipper Zero FAQ" title="Flipper Zero FAQ">
</a>

<table align="center">
  <tr><th colspan="8">目录</th></tr>
  <tr>
    <td><a href="#meta-">元数据</a></td>
    <td><a href="#general-">常规</a></td>
    <td><a href="#sub-ghz-">Sub-GHz</a></td>
    <td><a href="#nfc--rfid-">NFC & RFID</a></td>
    <td><a href="#infrared-">红外</a></td>
    <td><a href="#badusb-">BadUSB</a></td>
    <td><a href="#ibutton-">iButton</a></td>
    <td><a href="#wifi-board-">WiFi 板</a></td>
  </tr>
</table>
### 顶部 [🔝](#top)
- *这是一个社区FAQ。请同时考虑阅读[官方文档](https://docs.flipperzero.one/)。*
- *本文基于最新的开发固件编写，某些问题和答案可能在固件（预）发布之前不适用。*
- *FAQ仍在持续更新，欢迎贡献。*

### 其他社区

- *如果在这里没有找到答案，可以在其他社区搜索：*

- [Discord](https://flipperzero.one/discord)（查看固定消息以查看是否已经回答了你的问题，主要是英语）
- [Telegram](https://t.me/flipperzero)（俄语）
- [Flipper论坛](https://forum.flipper.net/)（多语言）
- [Reddit](https://old.reddit.com/r/flipperzero/)（多语言）

## 元数据 [🔝](#top)

### 什么是Awesome Flipper Zero？
> 这是一个[Awesome List](https://github.com/sindresorhus/awesome/blob/main/awesome.md)，由我（[djsime1](https://dj.je)）在收到我的可爱海豚助手Lurat后创建的。

### 什么是Awesome List？
> [Awesome List](https://github.com/sindresorhus/awesome/blob/main/awesome.md)是与某个项目或主题相关的链接和资源集合。可以把它看作是发现有趣内容的中心化策划平台。

### 我如何为这个库做贡献？
> 最好是打开一个[Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)来提交你的修改，或者使用下一个问题中的方法联系我。

### 我发现了一个错误、坏链接或其他问题。我应该怎么做？
> 在这个库上打开[新讨论](https://github.com/djsime1/awesome-flipperzero/discussions/new)，或者通过[这页](https://dj.je/pages/contact)上的方法联系我。

### 为什么有这么多未合并的Pull Request？
> 如果同时有多个小的Pull Request，我通常会将它们合并为一个更新。由于GitHub的工作方式，我无法在合并时将它们标记为已合并。为了补偿，我会将贡献者作为提交的共同作者，并在更新消息中提及Pull Request ID。

### 这真的很酷！我可以捐赠给你吗？
> 我非常感激你的好意，不过我不接受个人的货币捐赠。
> 如果你真的很坚持，我会接受Discord Nitro礼物（[`@djsime1`](https://discord.gg/9rduBhctJ6)）或Steam游戏（[`/id/djsime1`](https://steamcommunity.com/id/djsime1/)）！
> 除此之外，不如支持一个本地的慈善组织/机构？我个人推荐[电子前沿基金会](https://supporters.eff.org/donate)。

## 常规 [🔝](#top)

### 我在哪里可以买到Flipper Zero？
> 以下是Flipper Zero的官方（再）销售商。列表之外的零售商可能存在误导性销售！
> - [**官方商店** *https://shop.flipperzero.one/*](https://shop.flipperzero.one/)
> - [**Lab401** *https://lab401.com/*](https://lab401.com/)
> - [**Joom** *https://flipp.dev/joom-catalog*](https://flipp.dev/joom-catalog)
>
> 要了解这些零售商中哪些在你的国家/地区销售Flipper Zero，可以使用这个网站：[https://flipperzero.one/how-to-buy](https://flipperzero.one/how-to-buy)

### 我应该使用什么MicroSD卡？
> - 应该选择一个知名品牌（如SanDisk、Sony等），因为便宜的卡往往不能完全支持Flipper使用的通信协议。
> - 卡的容量应该在4到64GB之间，但8GB的卡已经足够了。
> - 插入卡后，使用Flipper的设置菜单来格式化（清除）并测试卡。
> - 在弹出卡之前，通过设置菜单卸载它，以确保数据不会损坏。
> - 注意：你可能需要一个回形针或类似的物品来将SD卡推入和取出设备。
> - 有关更多信息，请阅读[官方文档](https://docs.flipperzero.one/basics/sd-card)！

### 如何安装数据库和转储？
> 确保设备中有一个工作正常的MicroSD卡，按照上面的步骤操作。
> 下载转储后，你可以使用[qFlipper](https://flipperzero.one/update)或[Flipper移动应用](https://flpr.app/)进行传输。如果你正在传输一个大文件或多个文件，可以将SD卡从Flipper中取出，插入计算机以加快传输速度。
> - 在qFlipper中：将设备插入，转到文件浏览器选项卡，导航到SD卡，然后将文件拖放到相应的文件夹中（文件夹名称类似于文件扩展名）。
> - 对于移动应用：确保通过蓝牙连接，保存文件到应用的存档，并将其同步回设备。
> - 对于将SD卡插入PC，将文件拖放到相应的文件夹中（文件夹名称类似于文件扩展名）。

### 如何安装应用程序和插件？
> 从固件v0.87.0开始，可以轻松地将应用程序侧载到MicroSD卡上。这些应用程序可以通过[Flipper移动应用](https://flpr.app/)或[https://lab.flipper.net/apps](https://lab.flipper.net/apps)上的在线目录进行安装。

### 如何安装自定义固件？
> 首先，问问自己是否真的需要这样做。确实，突破Sub-GHz传输限制可能很有趣，但你实际上会经常这样做吗？真的值得违法吗？
> 在忽略前面的句子后，确保Flipper中有一个工作正常的MicroSD卡，然后前往你喜欢的固件的库。查找发布，并找到`.dfu`文件或更新包（通常是`.tar`、`.tar.gz`或`.zip`文件，通常包含一个名为`update.fuf`的文件）。
> - 如果你只有一个`.dfu`文件，它必须使用qFlipper中的“从文件安装”选项进行安装。选择文件并开始安装。
> - 如果你有一个更新包，你可以使用[qFlipper](https://flipperzero.one/update)进行安装，也可以按照以下步骤通过MicroSD卡手动安装。
> - 要手动安装更新包，提取并将文件夹（不是原始存档文件）传输到SD卡上的`update`文件夹中（如果文件夹不存在，请创建）。传输完成后，进入Flipper的桌面/空闲屏幕，按下以访问文件浏览器，然后向左查看所有文件夹。从那里，打开`update`文件夹（通常在列表底部），找到你刚刚传输的文件夹。最后，选择名为`update`的文件，选择“在应用中运行”以安装固件。
> 
> 如果没有预编译的更新文件/包，你将需要自己构建固件。有关详细信息，请参阅下一个问题。
> 有关更多信息，请阅读[官方文档](https://docs.flipperzero.one/basics/firmware-update)。

### 开发者问答会在哪里和何时举行？
> **维护者说明：不确定这些是否仍然举行。**
> 问答会每周六01:00和13:00（GMT）在[Flipper Discord](https://flipperzero.one/discord)上举行。
> 
> | 时区            | A方   | B方   |
> | :--------------: | :---: | :---: |
> | GMT/UTC          | 01:00 | 13:00 |
> | 太平洋（PDT）    | 18:00 | 06:00 |
> | 山地（MDT）      | 19:00 | 07:00 |
> | 中部（CDT）      | 20:00 | 08:00 |
> | 东部（EDT）      | 21:00 | 09:00 |
> | 中国标准时间     | 09:00 | 21:00 |
> | 印度标准时间     | 06:30 | 18:30 |

<!-- ### 过去的问答会有档案吗？
> 存档是社区的努力，所以只有一些是可用的。
> [https://github.com/flipperdevices/flipper-questions-and-answers](https://github.com/flipperdevices/flipper-questions-and-answers) -->

### 如何编写/编译我自己的应用程序/插件/固件/资源？
> **维护者说明：这需要更新。**
<blockquote>
  <em>(以下是对 <a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md">官方FBT文档</a> 的总结。)</em><br>
  自从引入了 <a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md">Flipper Build Tool (FBT)</a>，这变得非常简单！你应该对命令行操作有基本了解。唯一的前提是安装 <a href="https://git-scm.com/downloads">Git</a>。你还应该安装一个IDE，推荐使用 <a href="https://code.visualstudio.com/">VSCode</a>，因为 <a href="https://github.com/flipperdevices/flipperzero-firmware">固件仓库</a> 有 <a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md#vscode-integration">配置文件</a> 为其提供。
  <details>
    <summary>展开查看其余步骤。</summary>
    <em>(正在进行中，抱歉打消你的热情。)</em>
  </details>
</blockquote>

### 我可以自己制作一个Flipper而不是购买一个吗？
> 可能不行。虽然固件和原理图大多是公开的，但实际采购组件非常困难。多个核心部件，例如屏幕，专门生产用于Flipper的制造。

### 我怎么获得黑色/透明壳的Flipper？
> 这已经不再可能了*，黑色壳是Kickstarter支持者专属的，透明壳是限量生产的。
> (*除非你愿意在eBay上花费数百美元购买。)

### 我怎么倒置屏幕/更改背光颜色/更换外壳等？
> 这些都是硬件改装，通常不对普通用户开放。如果你真的感兴趣，可以查找或询问相关信息，[r/flipperzero](https://old.reddit.com/r/flipperzero/) 是一个不错的开始。

### 会有未来的硬件修订吗？
> 关于Flipper Zero，没有。2023年有一次小的硬件修订以解决组件短缺，但功能上没有变化。
> 有计划推出一款名为Flipper Nano的新设备，专注于成为GPIO设备的集线器。它不会像Flipper Zero那样配备内部无线电（Sub-GHz、NFC、RFID、IR等），但GPIO引脚将是双倍的。有关更多信息，请查看[Talking Sasquach的视频](https://youtu.be/WB86ZOI6DAw)。
> 很久以前，有关于“Flipper One”的概念，传闻类似于带有SDR的Pi Zero，运行Kali，但目前已无开发确认信息。

### 什么是Dummy Mode？
> Dummy模式是一个基本的切换，旨在让Flipper看起来像一个手持玩具/游戏设备，通过重新映射按钮来启动特定应用程序，而不是打开应用程序列表。

### 我的设备冻结了，我该如何重启/修复？
> - 要重启设备：按住BACK和LEFT按钮，然后同时释放。如果不起作用，*断开USB电缆*，然后按住BACK 30秒。这将执行正常重启。
> - 进入DFU/恢复模式：按住BACK和LEFT，然后在几秒钟后释放BACK，同时仍然按住LEFT。当屏幕亮起时，你可以释放LEFT。
> - 退出DFU/恢复模式：按照第一个要点中的正常重启步骤。
> 
> 如果没有任何效果或设备完全砖化，首先确保充电，插入电源15-30分钟。作为最后手段，如果在充电后仍无法开启，*拔掉USB电缆*，然后同时按住OK和BACK 30秒。**不会有任何指示**，但设备现在进入恢复模式。将其插入PC，使用[qFlipper](https://flipperzero.one/update)恢复固件。
> 阅读官方文档以获取[控制](https://docs.flipperzero.one/basics/control)、[重启](https://docs.flipperzero.one/basics/reboot)和[固件恢复](https://docs.flipperzero.one/basics/firmware-update/firmware-recovery)。

### 如何访问CLI/日志？
<blockquote>
  要访问串行CLI，请根据你的平台点击以下内容。
  <details>
    <summary>桌面网页浏览器*</summary>
    <em>*仅限Chromium浏览器，例如：Google Chrome、Microsoft Edge、Opera/Opera GX、Brave和Vivaldi。</em>
    <ul>
      <li>通过USB连接你的Flipper。</li>
      <li>确保qFlipper和任何其他串行终端已关闭。</li>
      <li>在上述浏览器中打开 <a href="https://my.flipp.dev/">my.flipp.dev</a>。</li>
      <li>点击 <kbd>CONNECT</kbd> 并从列表中选择“USB Serial Device”。</li>
      <li>等待直到你能在屏幕上看到设备详细信息。</li>
      <li>从左侧边栏中选择 💻 CLI 项目。</li>
      <li><strong>完成！</strong></li>
    </ul>
  </details>
  <details>
    <summary>Windows</summary>
    <ul>
      <li>如果尚未安装 <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html">PuTTY</a>。</li>
      <li>通过USB连接你的Flipper。</li>
      <li>打开qFlipper，查找Flipper名称旁边的COM端口。 <em>(应显示COM后跟数字，例如COM1)</em></li>
      <li>记下COM端口号。</li>
      <li><strong>关闭qFlipper</strong>，否则接下来的步骤将无法工作。</li>
      <li>打开PuTTY并确保你在Session屏幕上。</li>
      <li>选择“Serial”作为连接类型。</li>
      <li>将串行线路设置为COM端口。 <em>(仅COM后跟数字，例如COM1)</em></li>
      <li>将速度设置为 <code>115200</code></li>
      <li><em>可选：保存会话设置以便以后轻松连接。</em></li>
      <li>最后，点击 <kbd>Open</kbd> 进入CLI。</li>
      <li><strong>完成！</strong></li>
      <li>如果出现“访问被拒绝”错误，请确保qFlipper未运行！</li>
    </ul>
  </details>
  <details>
    <summary>MacOS/Linux</summary>
    <em>注意：我是一个肮脏的Windows用户，没有验证这个过程。如果有错误请告诉我！</em>
    <ul>
      <li>如果尚未安装 <a href="https://www.gnu.org/software/screen/">GNU Screen</a>。</li>
      <li>通过USB连接你的Flipper。</li>
      <li>打开qFlipper，查找Flipper名称旁边的设备路径。 <em>(以/dev/tty开头)</em></li>
      <li><em>或者：在终端中运行 <code>ls /dev/tty.*</code>。</em></li>
      <li>记下完整的设备路径。</li>
      <li><strong>关闭qFlipper</strong>，否则接下来的步骤将无法工作。</li>
      <li>打开终端。</li>
      <li>运行 <code>screen PATH 115200</code>，将PATH替换为之前的设备路径。</li>
      <li><strong>完成！</strong></li>
    </ul>
  </details>
  <details>
    <summary>Android</summary>
    <ul>
      <li>如果尚未安装 <a href="https://play.google.com/store/apps/details?id=de.kai_morich.serial_usb_terminal">Serial USB Terminal</a>。</li>
      <li>打开应用并进入汉堡菜单中的连接屏幕 <em>(3条横线图标)</em></li>
      <li>通过USB连接你的Flipper。</li>
      <li>如果未自动显示，请点击刷新图标。</li>
      <li>允许Serial USB Terminal访问Flipper（如果提示）。</li>
      <li>如果未自动连接，请点击右上角的连接图标 <em>(2个插头图标)</em></li>
      <li><strong>完成！</strong></li>
      <li><em>注意：要退出日志模式，你需要使用图标断开并重新连接。</em></li>
    </ul>
  </details>
  <details>
    <summary>iPhone</summary>
    遗憾的是，iOS无法通过USB访问串行终端；请尝试其他方法。
  </details>
  在Flipper上，打开设置，进入系统，将日志级别设置为调试。 <em>(你可以保持调试关闭，除非有人要求你打开)</em>
  一旦你打开CLI，输入 <code>log</code> 查看日志。 <em>(如果不显示，请使用 <code>debug</code> 以确保有数据输入)</em>
</blockquote>



## Sub-GHz [🔝](#top)

### 我如何破解邻居的车库或解锁某个陌生人的车？！
> 简短的回答是：你不可以。这是非法的，Flipper 不是为此设计的。

### “此频率只能在你的地区用于 RX”是什么意思？
> 由于法律规定，Flipper 在某些频率上是不能进行传输的，这取决于你设备的配置位置。
> 配置发生在你通过 [qFlipper](https://flipperzero.one/update) 或 [移动应用](https://flpr.app/) 更新固件时，并且基于你的大致位置。

### 我如何找到设备/传感器的频率？
> 如果是常用的频率，将设备*非常接近*Flipper，并使用频率分析器。
> 如果这样不行，检查设备上的 FCC ID。如果在美国销售的设备上，它的 FCC ID 是法律要求的。
> 然后，在 [FCC ID.io](https://fccid.io) 上查找该 ID。

### 我不能调节 Flipper 捕获特定频率
> 你需要编辑 `setting_user` 和 `setting_frequency_analyzer_user` 文件，以更改应用中可选择的频率。文件位于 SD 卡的 `subghz/assets` 文件夹中。
> 请注意，这不会神奇地解锁这些频率，你仍然受限于设备的限制。

### 我捕获了车库/汽车/etc. 信号，但重放时不起作用
> 除非感兴趣的物品非常旧，否则它可能使用了滚动代码。请阅读下面的内容。

### 什么是滚动代码？
> 可以这样理解：假设你的车库门被编程为在接收到来自传感器的“1234”代码时打开。
> 这将是一个静态代码，其中重放攻击（读取 RAW）将能够打开车库。
> 由于重放攻击非常简单，大多数设备会在每次使用后更改代码。
> 所以第一次你打开车库时，传感器发送“1234”，第二次发送“5678”。
> 滚动代码并不是那么简单，但你明白了。

### 我重放了滚动代码，现在我的原始遥控器/传感器不起作用
> 你需要手动重新同步你的旧设备，因为它现在滞后于滚动代码。

### 什么是 Debruin/暴力破解代码？
> 暴力破解代码尝试特定位长的每一个可能的代码，但效率很低。
> 例子：0001、0002、0003、0004 ... 9998、9999。
> Debruin 序列通过将多个代码合并在一起更高效。
> 例子：365、136 和 650 可以通过查看 13650 中的 3 位数字组合找到。

### 我可以连接更强大的天线吗？
> 是的和不是。你不能直接通过 GPIO 引脚连接任何天线，但你可以使用一个单独的处理器在原型板上，并从 Flipper 控制它，前提是你自己编写代码来实现这一点。
> 例如，你可以在 NRF24 上编写自己的代码，并通过 GPIO 控制它与 Flipper 进行交互。



## NFC & RFID [🔝](#top)

### 特性/兼容性表

| 卡片名称/类型   | 读取 | 写入 | 保存 | 模拟 | 备注                               |
| :------------- | :--: | :--: | :--: | :--: | :-------------------------------- |
| Mifare Classic | ✅   | ✅    | ✅   | ✅   | 模拟可能会有时好时坏               |
| Mifare DESFire | ✅   |      |      |      | 可以读取公共文件                   |
| Mifare Ultralight | ✅   |      | ✅   | ✅   | 解锁标签有多种方法                 |
| NTAG-21X       | ✅   |      | ✅   | ✅   | 与 Mifare Ultralight 非常相似       |
| EMV 卡片       |      |      | ❌   | ❌   | 读取公共数据被移除，因为被误解。将作为社区应用回归 |
| NFC-B          |      |      |      | ❌   | 无硬件支持模拟                     |
| iClass/PicoPass| ✅   | ✅    | ✅   |      |                                    |
| EM4100/EM4102  | ✅   | ❌    | ✅   | ✅   |                                    |
| H10301         | ✅   | ❌    | ✅   | ✅   |                                    |
| Indala         | ✅   | ❌    | ✅   | ✅   | 部分长度不支持                     |
| T5577          | ✅   | ✅    | ✅   | ✅   |                                    |
| EM4305         | ✅   |      | ✅   | ✅   |                                    |
| Paxton Net2    | ❌   | ❌    | ❌   | ❌   | 无对 Hitag2 的支持                 |
| Legic Prime    | ❌   | ❌    | ❌   | ❌   | 专有协议                           |

***键：*** *√ = 已在最新官方固件中实现。无标记 = 可能在未来实现。✘ = 不太可能实现或不可能。*

### 我如何识别卡片/标签的类型？
> 要确定协议（NFC、RFID 或 iClass/PicoPass），你需要尝试在每个相应的应用中读取。如果没有任何效果，检查标签/卡片上的标记或指示。最后的办法是拍摄卡片/标签和读卡器的照片，并在 [Flipper Discord 服务器](https://flipperzero.one/discord) 上询问。
> 如果你可以访问卡片读卡器，可以使用 [RFID Detector 应用](https://lab.flipper.net/apps/nfc_rfid_detector) 来确定它是高频（NFC/iClass/PicoPass）还是低频（RFID）卡片。

### 我如何识别 NFC 标签的类型？
> 在 NFC 应用中运行“读取卡片”操作。只支持 NFC-A 类型标签（Mifare/NTAG/一些 EMV）。
> 一旦成功读取，标签的类型将在屏幕顶部以粗体显示。

### 哪些 NFC 标签我可以写入？
> 目前，只有 Mifare Classic NFC 卡可以写入。
> 更多标签将在未来的固件更新中添加。

### 我被告知 Mifare Ultralight/NTAG 标签有密码保护的扇区。这是什么意思？
> 要么读取被中断，要么标签确实被密码保护。
> 首先，尝试再次读取标签，但确保它在设备的背面直到信息屏幕弹出。
> 如果你仍然看到警告，Flipper 可以解锁 *合法区分的 NFC 启用的玩偶（发音类似“Ameebo”）* 和 Xaomi 空气过滤器标签，但请注意，如果你使用错误的密码次数过多，可能会 **砖化** 标签。

### 为什么读取 Mifare Classic 需要这么长时间？
> Mifare Classic 被划分为扇区，这些扇区由两个密钥保护。要读取 Mifare Classic，Flipper 使用字典攻击，这需要一个包含 1241 个常见密钥的大列表，并逐个检查卡片上的每个扇区。如果你知道密钥，可以在 NFC 应用的“额外操作”菜单中手动添加它们。

### 当没有扇区可以读取 Mifare Classic 时，是什么意思？
> Mifare Classic 卡片上的数据被划分为扇区，每个扇区由两个密钥保护。
> 如果没有读取到扇区，则 Flipper 的字典攻击未能找到任何有效的密钥。
> 如果你知道密钥，你可以在 NFC 应用的“额外操作”菜单中手动输入它们。否则，尝试使用 mfkey32 攻击读卡器，如下一个问题所述。

### 当一些但不是所有扇区可以读取 Mifare Classic 时，是什么意思？
> Mifare Classic 卡片上的数据被划分为扇区，每个扇区由两个密钥保护。
> 读取没有成功，但也没有失败。一些卡片的数据已被读取和保存，但不是全部。
> 即使没有读取到所有扇区，你也应该使用 [移动应用](https://flpr.app/) 检查转储，以查看缺失的数据是否必要。在一些少见的情况下，半读取的卡片可以用来模拟原始卡片而没有问题。
> 如果你仍然需要其余的密钥，请阅读下一个问题。

### 如何从读卡器中获取 Mifare Classic 密钥？（mfkey32 攻击）
> 阅读此文档文章：[https://docs.flipper.net/nfc/mfkey32](https://docs.flipper.net/nfc/mfkey32)

### 为什么 Mifare Classic 模拟无法工作？
> Flipper 根据官方规格文档模拟 Mifare Classic（13.56 MHz），但是某些读卡器以略微不同的频率（如 13.50 MHz）运行。由于 Flipper 无法检测频率（如真实卡片所做），它也无法纠正这些小错误。
> 结果是数据传输不总是在读卡器预期的时间发生，因此模拟是不完美的。
> 有一些理论上的方法可以通过软件解决这个问题，但最佳选项将需要新的硬件修订。

### 为什么我不能保存/模拟 Mifare DESFire？
> DESFire 是一个非常复杂且更安全的芯片组。目前没有已知的攻击方法。

### NFC 目录中的 .shd 文件是什么？
> 这些是阴影文件，每当模拟标签被写入时会创建。
> 它们存储了原始文件的副本以及所写内容。这样，原始文件保持不变。

### 如何编辑保存的标签中的数据？
> 你需要使用支持 NFC 的智能手机，并使用可以写入标签的应用程序。一个最容易使用的应用是 NFC Tools，适用于 [Android](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc) 和 [iOS](https://apps.apple.com/us/app/nfc-tools/id1252962749)。由于 Mifare Classic 模拟的怪癖，你只能编辑保存的 NTAG 和 Mifare Ultralight 标签的数据。如果你还没有 NTAG216，可以在 NFC 应用中使用“手动添加”操作创建一个空的 NTAG216。保存该标签，然后从列表中打开它。一旦你开始模拟标签，你可以使用 NFC Tools 智能手机应用将信息写入模拟标签。这会被保存到与模拟标签同名的 .shd 文件中。如果你需要快速生成一个包含 URL 的标签，可以使用 [Flipper Maker 的 NFC Creator 工具](https://flippermaker.github.io/) 在线。

### 为什么当我模拟银行卡时不起作用？
> EMV 信用卡/借记卡大多数是加密的。Flipper 读取的信息是卡片的未加密部分。这单独不足以模拟和完成交易。无法读取加密部分。

### 有没有办法保存然后模拟银行卡以授权交易？
> 不，没有如前所述的情况。

### 为什么 NFC 特性表上说银行卡可以读取？
> 大多数支持 NFC 的银行卡会以未加密的方式暴露卡号。到期日期、CVV 和邮政编码不会被揭示。
> 仅凭卡号无法创建交易，因此没有理由添加保存选项。

### Flipper 能否模拟支付终端并授权交易？
> 不能。你开始看到模式了吗？

### 在 [九月博客文章](https://blog.flipperzero.one/september-progress/) 中提到的“USB/LibNFC NFC 读卡器”功能在哪里？
> 由于时间问题，这个功能被放弃了，更多细节见 [这个 GitHub 问题](https://github.com/flipperdevices/flipperzero-firmware/issues/1173#issuecomment-1127728562)。

### 我可以在哪里了解更多关于 NFC 和 RFID 技术的信息？
> - 低频和高频介绍: https://blog.flipperzero.one/rfid/
> - NFC 类型 https://www.rfwireless-world.com/Tutorials/NFC-Type1-Tag-vs-NFC-Type2-Tag-vs-NFC-Type3-Tag-NFC-Type4-Tag-Types.html
> - Mifare Classic: https://learn.adafruit.com/adafruit-pn532-rfid-nfc/mifare
> - Mifare 系列: https://en.wikipedia.org/wiki/MIFARE
> - 数据表: http://www.proxmark.org/files/Documents/
> - 常见 RFID 标准和协议: https://www.asiarfid.com/common-rfid-standards-and-protocols.html
> - RFID 标准: ISO、IEC、EPCglobal: https://www.electronics-notes.com/articles/connectivity/rfid-radio-frequency-identification/standards-iec-iso-epcglobal.php



## Infrared [🔝](#top)

### 如何向“通用遥控器”菜单中添加更多设备？
> 虽然无法在通用菜单下添加新项目，但有许多包含 IR 遥控器转储的仓库。最受欢迎的是 [Flipper-IRDB](https://github.com/logickworkshop/Flipper-IRDB)。
> （注意：下载时*强烈推荐*将 SD 卡从 Flipper 中卸下，直接插入计算机。）如果你只需要一个用于某个设备的遥控器，可以使用 [Flipper Maker 的 IR 设备工具](https://flippermaker.github.io/) 在线创建并转移。

### 通用电视遥控器除了电源按钮外无法工作
> 默认的通用电视遥控器数据库主要包含电源代码，其他按钮的代码非常少。这个文件（位于 SD 卡的 `infrared/assets/tv.ir`）可以手动替换为包含所有按钮额外代码的文件。要做到这一点，下载 [这个文件](https://raw.githubusercontent.com/UberGuidoZ/Flipper/main/Infrared/tv.ir) 并使用 [qFlipper](https://flipperzero.one/update) 将其传输到前面提到的路径。

### 什么是 CSV/Pronto/IR Plus 代码？
> 这三种是不同格式的红外数据库。它们与 Flipper 并不兼容，但存在转换为兼容版本的仓库，例如 [Flipper-IRDB](https://github.com/logickworkshop/Flipper-IRDB)。



## BadUSB [🔝](#top)

### 我使用的是非美国 QWERTY 键盘，如何让脚本工作？
> 在固件中没有解决方案之前，你可以尝试以下转换器之一：
> - [http://helppox.com/badusbconvert.html](http://helppox.com/badusbconvert.html)
> - [https://flippermaker.github.io/](https://flippermaker.github.io/) （BadUSB 字符串到 Alt 代码）



## iButton [🔝](#top)
> *(进行中)*



## WiFi board [🔝](#top)

### 我可以用 Wi-Fi 开发板做什么？
> 由于 WiFi 开发板是与 Flipper 完全独立的计算机，某些任务可以从 Flipper 转移到集成的 ESP32 芯片上运行。目前，开发板的两个主要用途是：
> - [Blackmagic 固件（用于调试 Flipper 的固件/应用程序）](https://docs.flipper.net/development/hardware/wifi-developer-board)
> - [Marauder 固件（用于执行基本的 Wi-Fi 攻击，请不要恶意使用）](https://github.com/justcallmekoko/ESP32Marauder/wiki/flipper-zero)

### 如何将固件闪存到开发板？
> - 闪存 Blackmagic: [使用 ufbt](https://docs.flipper.net/development/hardware/wifi-developer-board/update)。
> - 闪存 Marauder: [选择以下选项之一](https://github.com/justcallmekoko/ESP32Marauder/wiki/update-firmware#using-spacehuhn-web-updater)。
> - 闪存其他固件: 使用 [ESP Flasher 应用](https://lab.flipper.net/apps/esp_flasher) 或 [ESPWebTool](https://esp.huhn.me/)。

