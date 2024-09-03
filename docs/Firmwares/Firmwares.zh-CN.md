<h1>Flipper Zero 固件差异</h1>
<h3 align="center">
  <a href="Firmwares.md">English</a> | 
  <a href="Firmwares.zh-CN.md" style="color: #ffffff;">中文</a> | 
  <a href="Firmwares.ja-JP.md">日本語</a> | 
  <a href="Firmwares.ru_RU.md">Русский</a>
</h3>
<h3>
    <code>::</code> 最后更新于 2024 年 3 月 11 日。<code>::</code>
</h3>
<p>
    本文档维护了各种 <a href="#official">Flipper Zero 固件</a> 分支之间的差异列表。
</p>
<table>
    <tr>
        <td>
            <strong>跳转至：</strong>
        </td>
        <td><a href="#official">官方</a></td>
        <td><a href="#unleashed">Unleashed</a></td>
        <td><a href="#plugins">RogueMaster</a></td>
        <td><a href="#Xtreme">Xtreme</a></td>
        <td><a href="#Dexv">Xvirus</a></td>
        <td><a href="#SquachWare">SquachWare</a></td>
        <td><a href="#v1nc">v1nc</a></td>
        <td><a href="#wetox">Wetox</a></td>
        <td><a href="#muddledbox">MuddledBox</a></td>
        <td><a href="#summary">总结 (TL;DR)</a></td>
    </tr>
</table>
<h2 id="official">
    ✅ 官方
    <kbd>
        <a href="https://github.com/flipperdevices/flipperzero-firmware">flipperdevices/flipperzero-firmware</a>
    </kbd>
</h2>
<ul>
    <li>由于法律限制，Sub-GHz 传输区域锁定。</li>
    <li>无法在 Sub-GHz 中保存和发送滚动代码（动态加密），只能在捕获列表中显示。</li>
    <li>工厂设置的设备名称在所有地方显示（蓝牙广播、USB 连接等），无法更改。</li>
    <ul>
        <li><em>Flipper 团队有一个设备名称列表及其对应的生产信息 <a
                    href="https://discord.com/channels/740930220399525928/765282833744265246/971881286543224852">(无
                    发货地址)</a>，以便在 RMA 时更容易协助你。</em></li>
    </ul>
</ul>
<h2 id="unleashed">
    🔓 Unleashed
    <kbd>
        <a href="https://github.com/DarkFlippers/unleashed-firmware">DarkFlippers/unleashed-firmware</a>
    </kbd>
</h2>
<ul>
    <li><em>稳定的自定义固件，专注于新功能和改进原始固件组件，几乎没有 UI 更改</em></li>
    <li>开发活跃，Discord 社区非常活跃。</li>
    <li>默认情况下移除 Sub-GHz 区域传输限制。</li>
    <li>通过 <em>dangerous_settings</em> 文件允许 Sub-GHz 扩展频率范围（例如餐厅呼叫器）。</li>
    <li>允许通过设置 -> 桌面更改 Flipper 的名称</li>
    <li>默认情况下添加额外的 Sub-GHz 频率，不使用 <em>setting_user</em> 文件，<em>setting_user</em> 保持不变以用于用户设置。</li>
    <li>在包含的字典文件中添加额外的 Mifare classic 密钥，用户文件保持不变。</li>
    <li>可以用来捕获、发送或制作新的动态加密协议/滚动代码，这些在官方固件中是锁定的（没有编码器代码）。<em>(现代车库门等)</em></li>
    <li>可以手动添加动态 Sub-GHz 信号和代码，以将 Flipper 配对为新的遥控器。</li>
    <li>当前修改和新增的 Sub-GHz 协议列表 <a
            href="https://github.com/DarkFlippers/unleashed-firmware#current-modified-and-new-subghz-protocols-list">可以
            在这里找到</a>。</li>
    <li>通过 SD 应用加载器（FAP 文件）附带额外的应用和插件。</li>
    <ul>
        <li>更多细节和完整的更改列表可以在他们的 <a
                href="https://github.com/DarkFlippers/unleashed-firmware#readme">README</a> 中找到。</li>
    </ul>
</ul>
<h2 id="plugins">
    💫 RogueMaster
    <kbd>
        <a
            href="https://github.com/RogueMaster/flipperzero-firmware-wPlugins">RogueMaster/flipperzero-firmware-wPlugins</a>
    </kbd>
</h2>
<ul>
    <li>基于 <a href="#unleashed">Unleashed</a> 作为基础固件（它是 <a href="#official">官方</a> 开发固件的分支）。</li>
    <li>包含 Xtreme 设置应用的副本，大部分代码被移除并重命名为 CFW 设置</li>
    <li>提供来自 Patreon 的闭源构建（从开源项目中获取代码）</li>
    <li>通过对 <em>extend_range.txt</em> 文件的更改移除 Sub-GHz 区域传输限制。</li>
    <li>通过 <em>extend_range.txt</em> 文件允许 Sub-GHz 扩展频率范围（例如餐厅呼叫器）。</li>
    <li>具有从 Unleashed FW 中获得的 Sub-GHz 协议和大多数其他更改（见 <a href="#unleashed">更改</a>）。</li>
    <li>添加额外的自定义资产 <em>(Mifare classic 字典、示例文件等)</em>。</li>
    <li>包括一些官方固件中的 PR，但尚未合并（未完成，WIP）<em>(前沿)</em></li>
    <li>包括实验性的“仅游戏模式”（又名傻瓜模式）。</li>
    <li>包括增强但实验性的“海豚等级”系统。</li>
    <li>通过 SD 应用加载器（FAP 文件）附带额外的应用和插件。</li>
    <li>还包括许多其他小的调整、更改和大量附加动画。</li>
    <ul>
        <li>更多细节和完整列表可以在他们的 <a
                href="https://github.com/RogueMaster/flipperzero-firmware-wPlugins#readme">README</a> 中找到。</li>
    </ul>
</ul>
<h2 id="Xtreme">
    💋 Xtreme
    <kbd>
        <a href="https://github.com/Flipper-XFW/Xtreme-Firmware">Flipper-XFW/Xtreme-Firmware</a>
    </kbd>
</h2>
<ul>
    <li>最初从 RogueMaster 构建，然后转换为 Unleashed + <a href="#official">官方</a> FW 的分支以进行未来开发。</li>
    <li>添加自定义 UI 和主菜单主题，以及资产包（图标、动画）</li>
    <li>默认情况下移除 Sub-GHz 区域传输限制。</li>
    <li>通过 Xtreme 设置应用允许 Sub-GHz 扩展频率范围（例如餐厅呼叫器）。</li>
    <li>允许通过 Xtreme 设置应用更改 Flipper 的名称</li>
    <li>具有从 Unleashed FW 中获得的 Sub-GHz 协议和大多数其他更改（见 <a href="#unleashed">更改</a>）。</li>
    <li>添加额外的自定义资产 <em>(Mifare classic 字典、更多动画（单独安装）、示例文件等)</em>。</li>
    <li>包括类似 RogueMaster 的增强/改进的“海豚等级”系统。</li>
    <li>通过 SD 应用加载器（FAP 文件）附带额外的应用和插件。</li>
    <li>还包括许多其他小的调整、更改和稳定性修复。</li>
</ul>
<h2 id="Dexv">
    ❌ Xvirus
    <kbd>
        <a href="https://github.com/Xvirus-Team/xvirus-firmware">Xvirus-Team/xvirus-firmware</a>
    </kbd>
</h2>
<ul>
    <li>从 <a href="#unleashed">Unleashed FW</a> 分支而来</li>
    <li>添加了不包括在官方固件中的自定义主题图形。</li>
    <li>通过对 <em>extend_range.txt</em> 文件的更改移除 Sub-GHz 区域传输限制。</li>
    <li>通过 <em>extend_range.txt</em> 文件允许 Sub-GHz 扩展频率范围（例如餐厅呼叫器）。</li>
    <li>具有从 Unleashed FW 中获得的 Sub-GHz 协议和大多数其他更改

（见 <a href="#unleashed">更改</a>）。</li>
    <li>添加额外的自定义资产 <em>(Mifare classic 字典、示例文件等)</em>。</li>
    <li>通过 SD 应用加载器（FAP 文件）附带额外的应用和插件。</li>
</ul>
<h2 id="SquachWare">
    🌲 SquachWare
    <kbd>
        <a href="https://github.com/skizzophrenic/SquachWare-CFW">skizzophrenic/SquachWare-CFW</a>
    </kbd>
</h2>
<ul>
    <li><em>(OEM+)</em></li>
    <li><em>SquachWare 目前是废弃软件！虽然仍有一些好的文件，但基础固件非常过时！！我希望将来能恢复这个项目，但目前我们暂停了！</em></li>
    <li>添加自定义动画/情绪。</li>
    <li>内置名称更改器！（无需重新编译即可更改设备名称）。</li>
    <li>通过 SD 应用加载器（FAP 文件）附带额外的社区应用和插件。</li>
    <li>包括社区开发的 Bad USB 脚本。</li>
    <li>包括社区开发的 Sub-GHz 文件。</li>
    <ul>
        <li>更多细节可以在他们的 <a
                href="https://github.com/skizzophrenic/SquachWare-CFW">README</a> 中找到。</li>
    </ul>
</ul>
<h2 id="v1nc">
    ⌨ v1nc
    <kbd>
        <a href="https://github.com/v1nc/flipperzero-firmware">v1nc/flipperzero-firmware</a>
    </kbd>
</h2>
<ul>
    <li>支持通过脚本关键字 <code>DUCKY_LANG</code> 使用不同的键盘布局进行 Duckyscripts。</li>
    <li>与上游 Unleashed 固件不同步，似乎不再维护。</li>
    <li>包括一些集成的社区插件和游戏，但未更新 FAP 加载器。</li>
</ul>
<h2 id="wetox">
    🎩 Wetox
    <kbd>
        <a href="https://github.com/wetox-team/flipperzero-firmware">wetox-team/flipperzero-firmware</a>
    </kbd>
</h2>
<ul>
    <li>开发分支用于公开使用，而其他分支则为测试或存档的黑客马拉松提交。</li>
    <li>与上游官方固件不同步，似乎不再维护。</li>
    <li>通过字典攻击破解 T5577 RFID 密码。</li>
    <li>桌面标题品牌 [WTX]。</li>
    <li>在不同的 <a
            href="https://github.com/wetox-team/flipperzero-firmware/branches">分支</a> 中有一些频繁更新的有趣实验内容。</li>
</ul>
<h2 id="muddledbox">
    📦 MuddledBox
    <kbd>
        <a href="https://github.com/MuddledBox/flipperzero-firmware">MuddledBox/flipperzero-firmware</a>
    </kbd>
</h2>
<ul>
    <li>第一个“自定义固件”，现在已被弃用。</li>
    <li>移除 Sub-GHz 区域传输限制。</li>
    <li>在设置的关于页面添加自我推广图片。</li>
    <li>添加了一些额外的常见 Sub-GHz 频率。</li>
</ul>
<h2 id="summary">
    📝 总结
    <kbd>(TL;DR)</kbd>
</h2>
<ul>
    <li>保持与上游（官方）固件同步很重要。</li>
    <li>TX 限制的移除在大多数情况下是非法的，请自行承担风险。</li>
    <li>MuddledBox 是第一个受欢迎的固件分支，但没有发展起来。</li>
    <li>Unleashed 更专注于核心功能、稳定性和 Sub-GHz 协议。</li>
    <li>Xtreme 更专注于新的视觉调整、UI 自定义和其他方面。</li>
    <li>RogueMaster 基于 Unleashed，但在某些情况下可能不如 Unleashed 稳定。</li>
    <li>SquachWare 从官方固件分支而来，添加了大量自定义内容，同时保留了官方固件的安全性和舒适性。</li>
</ul>