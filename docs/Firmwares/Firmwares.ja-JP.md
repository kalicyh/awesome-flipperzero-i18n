```markdown
<h1>Flipper Zero ファームウェアの違い</h1>
<h3>
    <code>::</code> 最終更新日 2024年3月11日。<code>::</code>
</h3>
<p>
    この文書は、さまざまな <a href="#official">Flipper Zero ファームウェア</a> ブランチ間の違いのリストを維持しています。
</p>
<table>
    <tr>
        <td>
            <strong>ジャンプ先：</strong>
        </td>
        <td><a href="#official">公式</a></td>
        <td><a href="#unleashed">Unleashed</a></td>
        <td><a href="#plugins">RogueMaster</a></td>
        <td><a href="#Xtreme">Xtreme</a></td>
        <td><a href="#Dexv">Xvirus</a></td>
        <td><a href="#SquachWare">SquachWare</a></td>
        <td><a href="#v1nc">v1nc</a></td>
        <td><a href="#wetox">Wetox</a></td>
        <td><a href="#muddledbox">MuddledBox</a></td>
        <td><a href="#summary">まとめ (TL;DR)</a></td>
    </tr>
</table>
<h2 id="official">
    ✅ 公式
    <kbd>
        <a href="https://github.com/flipperdevices/flipperzero-firmware">flipperdevices/flipperzero-firmware</a>
    </kbd>
</h2>
<ul>
    <li>法律制限により、Sub-GHz 伝送範囲がロックされています。</li>
    <li>Sub-GHz 内でロールコード（動的暗号）を保存して送信することはできず、キャプチャリストにのみ表示されます。</li>
    <li>工場出荷時のデバイス名がすべての場所で表示され（Bluetooth ブロードキャスト、USB 接続など）、変更できません。</li>
    <ul>
        <li><em>Flipper チームは、RMA 時にあなたをサポートしやすくするために、デバイス名のリストとその製造情報を持っています <a
                    href="https://discord.com/channels/740930220399525928/765282833744265246/971881286543224852">(発送
                    アドレスなし)</a>。</em></li>
    </ul>
</ul>
<h2 id="unleashed">
    🔓 Unleashed
    <kbd>
        <a href="https://github.com/DarkFlippers/unleashed-firmware">DarkFlippers/unleashed-firmware</a>
    </kbd>
</h2>
<ul>
    <li><em>新機能に焦点を当て、オリジナルファームウェアコンポーネントを改善する安定したカスタムファームウェアで、UI の変更はほとんどありません。</em></li>
    <li>開発が活発で、Discord コミュニティも非常に活発です。</li>
    <li>デフォルトで Sub-GHz 伝送制限を解除しています。</li>
    <li><em>dangerous_settings</em> ファイルを通じて Sub-GHz 拡張周波数範囲を許可（例えばレストラン呼び出し器）。</li>
    <li>設定 -> デスクトップから Flipper の名前を変更することができます。</li>
    <li>デフォルトで追加の Sub-GHz 周波数が追加され、<em>setting_user</em> ファイルは変更せずにユーザー設定にはそのまま使用されます。</li>
    <li>含まれている辞書ファイルに追加の Mifare classic キーを追加し、ユーザーファイルはそのままです。</li>
    <li>公式ファームウェアでロックされている動的暗号プロトコル/ロールコードをキャプチャ、送信、作成することができます（エンコーダコードなし）。<em>(現代のガレージドアなど)</em></li>
    <li>動的な Sub-GHz 信号とコードを手動で追加して Flipper を新しいリモコンとしてペア設定できます。</li>
    <li>現在の修正および新しい Sub-GHz プロトコルのリストは <a
            href="https://github.com/DarkFlippers/unleashed-firmware#current-modified-and-new-subghz-protocols-list">こちらで
            見つけることができます</a>。</li>
    <li>SD アプリローダー（FAP ファイル）を介して追加のアプリとプラグインが付属します。</li>
    <ul>
        <li>詳細や完全な変更リストは、彼らの <a
                href="https://github.com/DarkFlippers/unleashed-firmware#readme">README</a> で見つけることができます。</li>
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
    <li><a href="#unleashed">Unleashed</a> を基本ファームウェアとしてビルドした（これは <a href="#official">公式</a> 開発ファームウェアのブランチ）。</li>
    <li>Xtreme 設定アプリのコピーが含まれており、大部分のコードが削除され、CFW 設定に名前が変更されています。</li>
    <li>Patreon からのクローズドソースビルドを提供（オープンソースプロジェクトからコードを取得）。</li>
    <li><em>extend_range.txt</em> ファイルを変更して Sub-GHz 伝送制限を解除しました。</li>
    <li><em>extend_range.txt</em> ファイルを使用して Sub-GHz 拡張周波数範囲を許可（例えばレストラン呼び出し器）。</li>
    <li>多数の他の変更に加え、Unleashed FW からの Sub-GHz プロトコルを含みます（見てください <a href="#unleashed">変更</a>）。</li>
    <li>追加のカスタム資産 <em>(Mifare classic 辞書、サンプルファイルなど)</em> が追加されます。</li>
    <li>公式ファームウェアの PR の一部が含まれていますが、まだマージされていません（未完成、WIP）<em>(最前線)</em></li>
    <li>実験的な「ゲーミングモードのみ」（通称バカモード）が含まれています。</li>
    <li>強化された「イルカレベル」システムが含まれていますが、実験的です。</li>
    <li>SD アプリローダー（FAP ファイル）を介して追加のアプリとプラグインが付属します。</li>
    <li>他にも多くの小さな調整や変更、大量の追加アニメーションが含まれています。</li>
    <ul>
        <li>詳細や完全なリストは、彼らの <a
                href="https://github.com/RogueMaster/flipperzero-firmware-wPlugins#readme">README</a> で見つけることができます。</li>
    </ul>
</ul>
<h2 id="Xtreme">
    💋 Xtreme
    <kbd>
        <a href="https://github.com/Flipper-XFW/Xtreme-Firmware">Flipper-XFW/Xtreme-Firmware</a>
    </kbd>
</h2>
<ul>
    <li>最初は RogueMaster からビルドされ、その後 Unleashed + <a href="#official">公式</a> FW のブランチに変換されて将来の開発を行っています。</li>
    <li>カスタム UI とメインメニューテーマ、アセットパッケージ（アイコン、アニメーション）が追加されました。</li>
    <li>デフォルトで Sub-GHz 伝送制限を解除しています。</li>
    <li>Xtreme 設定アプリを介して Sub-GHz 拡張周波数範囲を許可しています（例えばレストラン呼び出し器）。</li>
    <li>Xtreme 設定アプリを介して Flipper の名前を変更することができます。</li>
    <li>Unleashed FW から取得した Sub-GHz プロトコルおよびほとんどの他の変更が含まれています（見てください <a href="#unleashed">変更</a>）。</li>
    <li>追加のカスタム資産 <em>(Mifare classic 辞書、より多くのアニメーション（別々にインストール）、サンプルファイルなど)</em> が追加されます。</li>
    <li>RogueMaster に似た強化された「イルカレベル」システムが含まれています。</li>
    <li>SD アプリローダー（FAP ファイル）を介して追加のアプリとプラグインが付属します。</li>
    <li>他にも多くの小さな調整や変更、安定性修正が含まれています。</li>
</ul>
<h2 id="Dexv">
    ❌ Xvirus
    <kbd>
        <a href="https://github.com/Xvirus-Team/xvirus-firmware">Xvirus-Team/xvirus-firmware</a>
    </kbd>
</h2>
<ul>
    <li><a href="#unleashed">Unleashed FW</a> からのブランチです。</li>
    <li>公式ファームウェアには含まれていないカスタムテーマグラフィックスが追加されています。</li>
    <li><em>extend_range.txt</em> ファイルを変更して Sub-GHz 伝送制限を解除しました。</li>
    <li><em>extend_range.txt</em> ファイルを使用して Sub-GHz 拡張周波数範囲を許可（例えばレストラン呼び出し器）。</li>
    <li>Sub-GHz プロトコルおよびほとんどの他の変更が含まれています（見てください <a href="#unleashed">変更</a>）。</li>
    <li>追加のカスタム資産 <em>(Mifare classic 辞書、サンプルファイルなど)</em> が追加されます。</li>
    <li>SD アプリローダー（FAP ファイル）を介して追加のアプリとプラグインが付属します。</li>
</ul>
<h2 id="SquachWare">
    🌲 SquachWare
    <kbd>
        <a href="https://github.com/skizzophrenic/SquachWare-CFW">skizzophrenic/SquachWare-CFW</a>
    </kbd>
</h2>
<ul>
    <li><em>(OEM+)</em></li>
    <li><em>SquachWare は現在廃止されたソフトウェアです！ いくつかの良いファイルはありますが、基本ファームウェアは非常に古いです！！ 将来的にこのプロジェクトを復活させることを望みますが、現在は一時停止しています！</em></li>
    <li>カスタムアニメーション/エモーションを追加。</li>
    <li>内蔵の名前変更ツール！（再コンパイルなしでデバイス名を変更できます）。</li>
    <li>SD アプリローダー（FAP ファイル）を介して追加のコミュニティアプリとプラグインが付属します。</li>
    <li>コミュニティ開発の Bad USB スクリプトが含まれています。</li>
    <li>コミュニティ開発の Sub-GHz ファイルが含まれています。</li>
    <ul>
        <li>詳細は、彼らの <a
                href="https://github.com/skizzophrenic/SquachWare-CFW">README</a> で見つけられます。</li>
    </ul>
</ul>
<h2 id="v1nc">
    ⌨ v1nc
    <kbd>
        <a href="https://github.com/v1nc/flipperzero-firmware">v1nc/flipperzero-firmware</a>
    </kbd>
</h2>
<ul>
    <li>スクリプトキーワード <code>DUCKY_LANG</code> を使用して、異なるキーボードレイアウトで Duckyscripts をサポートしています。</li>
    <li>上流の Unleashed ファームウェアとは同期されておらず、もはやメンテナンスされていないようです。</li>
    <li>いくつかの統合されたコミュニティプラグインとゲームが含まれていますが、FAP ローダーは更新されていません。</li>
</ul>
<h2 id="wetox">
    🎩 Wetox
    <kbd>
        <a href="https://github.com/wetox-team/flipperzero-firmware">wetox-team/flipperzero-firmware</a>
    </kbd>
</h2>
<ul>
    <li>オープン利用のための開発ブランチであり、他のブランチはテストまたはアーカイブされたハッカソン提出物です。</li>
    <li>上流の公式ファームウェアとは同期されておらず、もはやメンテナンスされていないようです。</li>
    <li>T5577 RFID パスワードを辞書攻撃でクラッキングします。</li>
    <li>デスクトップタイトルブランド [WTX]。</li>
    <li>異なる <a
            href="https://github.com/wetox-team/flipperzero-firmware/branches">ブランチ</a> にいくつかの頻繁に更新される興味深い実験的内容があります。</li>
</ul>
<h2 id="muddledbox">
    📦 MuddledBox
    <kbd>
        <a href="https://github.com/MuddledBox/flipperzero-firmware">MuddledBox/flipperzero-firmware</a>
    </kbd>
</h2>
<ul>
    <li>最初の「カスタムファームウェア」で、現在は廃止されています。</li>
    <li>Sub-GHz 伝送制限を削除しました。</li>
    <li>設定の「について」ページに自己宣伝用の画像を追加。</li>
    <li>いくつかの追加の一般的な Sub-GHz 周波数を追加しました。</li>
</ul>
<h2 id="summary">
    📝 まとめ
    <kbd>(TL;DR)</kbd>
</h2>
<ul>
    <li>上流（公式）ファームウェアとの同期を保つことが重要です。</li>
    <li>TX 制限の解除はほとんどの場合違法であり、自己責任で行ってください。</li>
    <li>MuddledBox は最初の人気のあるファームウェアブランチですが、発展しませんでした。</li>
    <li>Unleashed はコア機能、安定性、Sub-GHz プロトコルにもっと焦点を当てています。</li>
    <li>Xtreme は新しい視覚調整、UI カスタマイズ、その他に焦点を当てています。</li>
    <li>RogueMaster は Unleashed に基づいていますが、特定の状況では Unleashed よりも安定性が劣る場合があります。</li>
    <li>SquachWare は公式ファームウェアのブランチであり、多くのカスタムコンテンツを追加しつつ、公式ファームウェアのセキュリティと快適さを保っています。</li>
</ul>
```

