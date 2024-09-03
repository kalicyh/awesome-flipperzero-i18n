<a id="top" href="https://github.com/kalicyh/Flipper_Zero_Apps">
  <img src="https://user-images.githubusercontent.com/8518150/179464273-7927420c-b60a-48ab-9eb9-d69b563c0a0b.png" align="center" alt="Flipper Zero FAQ" title="Flipper Zero FAQ">
</a>

<h3 align="center">
  <a href="FAQ.md">English</a> | 
  <a href="FAQ.zh-CN.md">中文</a> | 
  <a href="FAQ.ja-JP.md" style="color: #ffffff;">日本語</a> | 
  <a href="FAQ.ru_RU.md">Русский</a>
</h3>

<table align="center">
  <tr><th colspan="8">目次</th></tr>
  <tr>
    <td><a href="#meta-">メタデータ</a></td>
    <td><a href="#general-">一般</a></td>
    <td><a href="#sub-ghz-">Sub-GHz</a></td>
    <td><a href="#nfc--rfid-">NFC & RFID</a></td>
    <td><a href="#infrared-">赤外線</a></td>
    <td><a href="#badusb-">BadUSB</a></td>
    <td><a href="#ibutton-">iButton</a></td>
    <td><a href="#wifi-board-">WiFiボード</a></td>
  </tr>
</table>
### トップ [🔝](#top)
- *これはコミュニティのFAQです。公式ドキュメントも合わせて読むことをお勧めします[こちら](https://docs.flipperzero.one/)。*
- *この記事は最新の開発ファームウェアを基に書かれており、特定の質問や回答はファームウェア（プレ）リリース前には適用されない可能性があります。*
- *FAQはまだ継続的に更新中であり、貢献を歓迎します。*

### その他のコミュニティ

- *ここで回答が見つからない場合は、他のコミュニティで検索できます：*

- [Discord](https://flipperzero.one/discord)（固定メッセージを確認して、あなたの質問が既に回答されているかどうかをチェック。主に英語）

- [Telegram](https://t.me/flipperzero)（ロシア語）

- [Flipperフォーラム](https://forum.flipper.net/)（多言語）

- [Reddit](https://old.reddit.com/r/flipperzero/)（多言語）

## メタデータ [🔝](#top)

### Awesome Flipper Zeroとは何ですか？

> これは、私（[djsime1](https://dj.je)）が愛らしいドルフィンアシスタントLuratを受け取った後に作成した[Awesome List](https://github.com/sindresorhus/awesome/blob/main/awesome.md)です。

### Awesome Listとは何ですか？

> [Awesome List](https://github.com/sindresorhus/awesome/blob/main/awesome.md)は、特定のプロジェクトやテーマに関連するリンクやリソースの集合体です。興味深いコンテンツを発見するための集中的なキュレーションプラットフォームと考えてください。

### このリポジトリに貢献するにはどうすればよいですか？

> 最も良い方法は、[Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)をオープンして修正を送信することですが、次の質問の方法で私に連絡することもできます。

### エラー、リンク切れ、その他の問題を発見しました。どうすれば良いですか？

> このリポジトリで[新しいディスカッション](https://github.com/djsime1/awesome-flipperzero/discussions/new)をオープンするか、[このページ](https://dj.je/pages/contact)の方法で私に連絡してください。

### なぜ未マージのPull Requestがそんなに多いのですか？

> 同時に複数の小さなPull Requestがある場合、通常はそれらを1つの更新としてマージします。GitHubの動作上、マージ時にそれを「マージ済み」としてラベル付けすることはできません。これを補うために、私は貢献者をコミットの共著者として扱い、更新メッセージにPull Request IDを記載します。

### これは本当にクールです！寄付できますか？

> あなたの善意には感謝しますが、個人的な金銭的寄付は受け付けていません。
> 本当に惜しいのであれば、Discord Nitroのギフト（[`@djsime1`](https://discord.gg/9rduBhctJ6)）やSteamゲーム（[`/id/djsime1`](https://steamcommunity.com/id/djsime1/)）を歓迎します！
> それ以外には、地元の慈善団体や機関を支援するのはどうですか？個人的には[電子前沿基金](https://supporters.eff.org/donate) お勧めします。

## 一般 [🔝](#top)

### Flipper Zeroはどこで購入できますか？

> 以下はFlipper Zeroの公式（再）販売店です。リストにない小売業者は誤解を招く販売が存在する可能性があります！
>
> - [**公式ストア** *https://shop.flipperzero.one/*](https://shop.flipperzero.one/)
> - [**Lab401** *https://lab401.com/*](https://lab401.com/)
> - [**Joom** *https://flipp.dev/joom-catalog*](https://flipp.dev/joom-catalog)
>
> これらの小売業者の中で、どの業者があなたの国でFlipper Zeroを販売しているかを確認するには、このサイトを使用してください：<https://flipperzero.one/how-to-buy>

### どのMicroSDカードを使えばいいですか？

> - SanDiskやSonyなどの有名ブランドを選択する必要があります。安いカードはFlipperが使用する通信プロトコルを完全にサポートできないことがよくあります。
> - カードの容量は4GBから64GBの間ですが、8GBのカードでも十分です。
> - カードを挿入したら、Flipperの設定メニューを使用してカードをフォーマット（消去）してテストします。
> - カードを取り出す前に、ダメージを防ぐために設定メニューからアンマウントしてください。
> - 読み取り注意：SDカードを機器から押し込んで取り出すために、ペーパークリップやその類のものが必要になる場合があります。
> - 詳細については、[公式ドキュメント](https://docs.flipperzero.one/basics/sd-card)をお読みください！

### データベースとダンプはどのようにインストールしますか？

> 正常に動作するMicroSDカードがデバイスに入っていることを確認し、上記の手順に従ってください。
> ダンプをダウンロードしたら、[qFlipper](https://flipperzero.one/update)または[Flipperモバイルアプリ](https://flpr.app/)を使用して転送できます。大きなファイルや複数のファイルを転送する場合は、FlipperからSDカードを取り出し、コンピュータに挿入して転送速度を速めることができます。
>
> - qFlipperを使用した場合：デバイスを接続し、ファイルブラウザタブに移動してSDカードにナビゲートし、ファイルを該当するフォルダーにドラッグアンドドロップします（フォルダー名はファイル拡張子に似ています）。
> - モバイルアプリの場合：Bluetoothで接続されていることを確認し、ファイルをアプリのアーカイブに保存し、デバイスに同期させます。
> - PCにSDカードを挿入した場合、ファイルを該当するフォルダーにドラッグアンドドロップします（フォルダー名はファイル拡張子に似ています）。

### アプリやプラグインはどうやってインストールしますか？

> ファームウェアv0.87.0以降、アプリをMicroSDカードにサイドロードすることが簡単にできるようになりました。これらのアプリは[Flipperモバイルアプリ](https://flpr.app/)や<https://lab.flipper.net/apps>のオンラインカタログからインストールできます。

### カスタムファームウェアをどうやってインストールしますか？

> まず、本当にこれをやる必要があるのか自問してください。確かにSub-GHzの転送制限を突破するのは面白い可能性がありますが、実際に頻繁に行うことになるのでしょうか？法律を犯す価値はありますか？
> 前述の文を無視した場合、Flipperに正常に動作するMicroSDカードがあることを確認し、お気に入りのファームウェアのリポジトリに移動してください。リリースを見つけて、`.dfu`ファイルまたはアップデートパッケージ（通常は`.tar`、`.tar.gz`または`.zip`ファイルで、通常は`update.fuf`というファイルを含む）を探してください。
>
> - もしあなたが単独の`.dfu`ファイルを持っている場合、qFlipper内の「ファイルからインストール」オプションを使用してインストールする必要があります。ファイルを選択し、インストールを開始します。
> - アップデートパッケージがある場合は、[qFlipper](https://flipperzero.one/update)を使用してインストールすることも、この後の手順を通じてMicroSDカードを使って手動でインストールできます。
> - 手動でアップデートパッケージをインストールするには、フォルダー（元のアーカイブファイルではなく）を解凍してSDカードの`update`フォルダーに転送します（フォルダーが存在しない場合は作成してください）。転送が完了したら、Flipperのデスクトップ/アイドル画面に移動し、ファイルブラウザにアクセスするために押し、すべてのフォルダを左にスクロールします。その後、`update`フォルダー（通常はリストの底にあります）を開き、先ほど転送したフォルダーを見つけます。最後に、`update`という名前のファイルを選択し、「アプリで実行」を選択してファームウェアをインストールします。
>
> もし事前にコンパイルされたアップデートファイル/パッケージがない場合、ファームウェアを自分でビルドする必要があります。詳しくは次の質問を参照してください。
> 詳細については、[公式ドキュメント](https://docs.flipperzero.one/basics/firmware-update)をお読みください。

### 開発者Q&Aはどこでいつ開催されますか？

> **メンテナー注：これがまだ開催されるかどうかは不明です。**
> Q&Aは毎週土曜日の01:00と13:00（GMT）に[Flipper Discord](https://flipperzero.one/discord)で開催されます。
>
> |    タイムゾーン    |   A側  |   B側  |
> | :------: | :---: | :---: |
> |  GMT/UTC | 01:00 | 13:00 |
> | 太平洋（PDT） | 18:00 | 06:00 |
> |  山地（MDT） | 19:00 | 07:00 |
> |  中部（CDT） | 20:00 | 08:00 |
> |  東部（EDT） | 21:00 | 09:00 |
> |  中国標準時間 | 09:00 | 21:00 |
> |  インド標準時間 | 06:30 | 18:30 |

<!-- ### 過去のQ&Aのアーカイブはありますか？
> アーカイブはコミュニティの努力の成果なので、利用可能なものはわずかです。
> [https://github.com/flipperdevices/flipper-questions-and-answers](https://github.com/flipperdevices/flipper-questions-and-answers) -->

### 自分のアプリ/プラグイン/ファームウェア/リソースをどうやって書く/コンパイルしますか？

> **メンテナー注：これには更新が必要です。**

<blockquote>
  <em>(以下は <a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md">公式FBTドキュメント</a> の要約です。)</em><br>
  <a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md">Flipper Build Tool (FBT)</a>が導入されてから、これは非常に簡単になりました！コマンドライン操作に対する基本的な理解が必要です。唯一の前提条件は<a href="https://git-scm.com/downloads">Git</a>をインストールすることです。また、IDEをインストールする必要があります。おすすめは<a href="https://code.visualstudio.com/">VSCode</a>で、これは<a href="https://github.com/flipperdevices/flipperzero-firmware">ファームウェアリポジトリ</a>のために<a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md#vscode-integration">設定ファイル</a>があります。
  <details>
    <summary>残りのステップを展開します。</summary>
    <em>(進行中です、ご期待を失望させたくはありません。)</em>
  </details>
</blockquote>

### 自分でFlipperを作ることはできますか？それとも購入しなければなりませんか？

> たぶん無理です。ファームウェアと回路図のほとんどは公開されていますが、実際のコンポーネントを調達するのは非常に困難です。画面などの複数の主要部品は、Flipperの製造に特別に生産されています。

### 黒または透明のケースのFlipperをどのように入手できますか？

> それはもはや可能ではありません。黒いケースはKickstarter支援者専用で、透明なケースは限定生産です。
> （\*ただし、eBayで何百ドルも支払うことをいとわない場合を除きます。）

### どうやって画面を反転させるか、バックライトの色を変更するか、ケースを交換する等はできますか？

> これらはハードウェアの改造であり、通常は通常のユーザーには許可されていません。本当に興味がある場合は、関連情報を探したり尋ねたりしてください。[r/flipperzero](https://old.reddit.com/r/flipperzero/)は良い出発点です。

### 将来的にハードウェアの修正はありますか？

> Flipper Zeroに関してはありません。2023年には部品不足を解決するための小規模なハードウェア修正がありましたが、機能的には変化はありません。
> GPIOデバイスのハブとして機能する新しいデバイス「Flipper Nano」が計画されています。Sub-GHz、NFC、RFID、IRなどの内部無線をFlipper Zeroのように装備していないものの、GPIOピンは倍増します。詳細については、[Talking Sasquachのビデオ](https://youtu.be/WB86ZOI6DAw)をご覧ください。
> かつて「Flipper One」の概念があり、SDRを搭載したPi Zeroに似ていると噂され、Kaliを実行するというものでしたが、現在のところ開発の確認情報はありません。

### ダミーモードとは何ですか？

> ダミーモードは指定したアプリを起動するためにボタンを再マッピングすることによって、Flipperを携帯型のおもちゃ/ゲームデバイスのように見せるための基本的な切り替え機能です。

### デバイスがフリーズしました。どうやって再起動/修復すればいいですか？

> - デバイスを再起動するには：BACKボタンとLEFTボタンを押し続け、その後同時に放します。効果がない場合は、*USBケーブルを外し*、BACKを30秒間押し続けてください。これで通常の再起動が行われます。
> - DFU/リカバリーモードに入るには：BACKとLEFTを押したままにし、数秒後にBACKを放し、LEFTはそのまま押し続けます。画面が点灯したら、LEFTを放してください。
> - DFU/リカバリーモードから退出するには：最初のポイントの正常再起動ステップに従ってください。
>
> 何も効果がない場合や、完全にデバイスが使用できなくなった場合は、まず充電を確認し、電源に15-30分間接続してください。最後の手段として、充電した後も電源が入らない場合は、*USBケーブルを外し*、OKとBACKを同時に30秒間押し続けます。**指示は何も表示されません**が、デバイスはリカバリーモードに入ります。PCに接続し、[qFlipper](https://flipperzero.one/update)を使用してファームウェアを復元してください。
> [制御](https://docs.flipperzero.one/basics/control)、[再起動](https://docs.flipperzero.one/basics/reboot)、および[ファームウェア復元](https://docs.flipperzero.one/basics/firmware-update/firmware-recovery)に関する公式ドキュメントをお読みください。

### CLI/ログにアクセスするにはどうすればよいですか？

<blockquote>
  シリアルCLIにアクセスするには、お使いのプラットフォームに応じて以下をクリックしてください。
  <details>
    <summary>デスクトップWebブラウザ*</summary>
    <em>*Chromiumブラウザ専用：Google Chrome、Microsoft Edge、Opera/Opera GX、Brave、Vivaldiなど。</em>
    <ul>
      <li>FlipperをUSB経由で接続します。</li>
      <li>qFlipperおよび他のシリアルターミナルが閉じていることを確認します。</li>
      <li>指定のブラウザで <a href="https://my.flipp.dev/">my.flipp.dev</a> を開きます。</li>
      <li><kbd>CONNECT</kbd> をクリックし、リストから「USB Serial Device」を選択します。</li>
      <li>デバイスの詳細が画面に表示されるまで待ちます。</li>
      <li>左のサイドバーから 💻 CLI プロジェクトを選択します。</li>
      <li><strong>完了！</strong></li>
    </ul>
  </details>
  <details>
    <summary>Windows</summary>
    <ul>
      <li>未インストールの場合は <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html">PuTTY</a>をインストールします。</li>
      <li>FlipperをUSB経由で接続します。</li>
      <li>qFlipperを開き、Flipper名の隣にあるCOMポートを探します。 <em>(COMの後に数字が続きます。例：COM1)</em></li>
      <li>COMポート番号をメモします。</li>
      <li><strong>qFlipperを閉じる</strong>。さもなくば次の手順が機能しません。</li>
      <li>PuTTYを開き、セッション画面にいることを確認します。</li>
      <li>接続タイプとして「Serial」を選択します。</li>
      <li>シリアルラインをCOMポートに設定します。<em>(COMの後に数字が続きます。例：COM1)</em></li>
      <li>ボーレートを <code>115200</code> に設定します。</li>
      <li><em>オプション：後で簡単に接続するためのセッション設定を保存します。</em></li>
      <li>最後に <kbd>Open</kbd> をクリックしてCLIに入ります。</li>
      <li><strong>完了！</strong></li>
      <li>「アクセスが拒否されました」というエラーが表示された場合は、qFlipperが実行されていないことを確認してください！</li>
    </ul>
  </details>
  <details>
    <summary>MacOS/Linux</summary>
    <em>注意：私は汚いWindowsユーザーで、このプロセスを検証していません。間違いがあれば教えてください！</em>
    <ul>
      <li>未インストールの場合は <a href="https://www.gnu.org/software/screen/">GNU Screen</a>をインストールします。</li>
      <li>FlipperをUSB経由で接続します。</li>
      <li>qFlipperを開き、Flipper名の隣にあるデバイスパスを探します。 <em>(/dev/ttyで始まります)</em></li>
      <li><em>もしくは：ターミナルで <code>ls /dev/tty.*</code>を実行します。</em></li>
      <li>完全なデバイスパスをメモします。</li>
      <li><strong>qFlipperを閉じる</strong>。さもなくば次の手順が機能しません。</li>
      <li>ターミナルを開きます。</li>
      <li><code>screen PATH 115200</code> を実行し、PATHを先ほどのデバイスパスに置き換えます。</li>
      <li><strong>完了！</strong></li>
    </ul>
  </details>
  <details>
    <summary>Android</summary>
    <ul>
      <li>未インストールの場合は <a href="https://play.google.com/store/apps/details?id=de.kai_morich.serial_usb_terminal">Serial USB Terminal</a>をインストールします。</li>
      <li>アプリを開き、ハンバーガーメニューの接続画面に入ります <em>(3本の横線アイコン)</em></li>
      <li>FlipperをUSB経由で接続します。</li>
      <li>自動的に表示されない場合は、更新アイコンをクリックします。</li>
      <li>Serial USB TerminalがFlipperにアクセスすることを許可します（プロンプトが表示された場合）。</li>
      <li>自動接続しない場合は、右上の接続アイコンをクリックします <em>(2つのプラグアイコン)</em></li>
      <li><strong>完了！</strong></li>
      <li><em>注意：ログモードから退出するには、アイコンを使用して切断し再接続する必要があります。</em></li>
    </ul>
  </details>
  <details>
    <summary>iPhone</summary>
    残念ながら、iOSはUSB経由でシリアルターミナルにアクセスできません。他の方法をお試しください。
  </details>
  Flipperで設定を開き、システムに移動し、ログレベルをデバッグに設定します。<em>(他人が要求するまでデバッグをオフのままにしても大丈夫です)</em>
  CLIを開いたら、 <code>log</code> を入力してログを表示します。 <em>(表示されない場合は、<code>debug</code>を使用してデータ入力があることを確認してください)</em>
</blockquote>

## Sub-GHz [🔝](#top)

### 隣人のガレージや見知らぬ人の車をハッキングする方法は？

> 簡単な答えは：できません。これは違法であり、Flipperはその目的で設計されていません。

### 「この周波数はあなたの地域でRXのみに使用できます」とはどういう意味ですか？

> 法律により、Flipperは特定の周波数で送信できない場合があります。それはあなたのデバイスの設定位置によります。
> この設定は、[qFlipper](https://flipperzero.one/update)または[モバイルアプリ](https://flpr.app/)を通じてファームウェアをアップデートする際に行われ、あなたの大まかな位置に基づいています。

### デバイス/センサーの周波数を見つけるにはどうすればよいですか？

> よく使われる周波数の場合、デバイスを*非常に近づけて*フリップすることで、周波数アナライザーを使用します。
> もしそれができない場合、デバイスに記載されているFCC IDを確認してください。アメリカで販売されているデバイスには、FCC IDが法律により必要です。
> その後、[FCC ID.io](https://fccid.io)でそのIDを検索してください。

### Flipperが特定の周波数をキャプチャできません

> アプリ内で選択可能な周波数を変更するには、`setting_user`および`setting_frequency_analyzer_user`ファイルを編集する必要があります。ファイルはSDカードの`subghz/assets`フォルダにあります。
> 注意すべきは、これでそれらの周波数が魔法のように解除されるわけではなく、デバイスの制限に依然として従う必要があることです。

### ガレージ/車両などの信号をキャプチャしましたが、再生時に機能しません

> 興味のあるアイテムが非常に古くない限り、ロールコードを使用している可能性があります。以下をお読みください。

### ロールコードとは何ですか？

> こう考えることができます：あなたのガレージドアはセンサーから「1234」というコードを受信したときに開くようにプログラムされています。
> これは静的コードであり、リプレイアタック（RAWを読み取ること）でガレージを開くことが可能です。
> リプレイ攻撃が非常に簡単なため、ほとんどのデバイスは使用後にコードを変更します。
> つまり、最初にガレージを開けるときにセンサーが「1234」を送信し、2回目に「5678」を送信します。
> ロールコードはそれほど簡単ではありませんが、あなたは理解しました。

### ロールコードを再生しましたが、元のリモコン/センサーが機能しません

> 古いデバイスを手動で再同期する必要があります。なぜなら、それが現在ロールコードに遅れを取っているからです。

### Debruinとは何ですか？/ブルートフォース攻撃とは？

> ブルートフォース攻撃は、特定のビット長のすべての可能なコードを試しているが、効率は非常に低いです。
> 例：0001、0002、0003、0004 ... 9998、9999。
> Debruinシーケンスは、複数のコードを組み合わせることでより効率的です。
> 例：365、136、650は、13650の中の3桁の組み合わせを見て見つけることができます。

### より強力なアンテナを接続できますか？

> はい、かついいえ。GPIOピンを介してアンテナを直接接続することはできませんが、別のプロセッサをプロトタイプボード上に使用し、それをFlipperから制御することはできます。ただし、そのためのコードを自分で記述する必要があります。
> 例えば、NRF24上に独自のコードを書き、GPIOを介してそれをFlipperと対話させることができます。

## NFC & RFID [🔝](#top)

### 特性/互換性表

| カード名/タイプ       |  読取 |  書込 |  保存 |  模擬 | メモ                           |
| :---------------- | :-: | :-: | :-: | :-: | :------------------------ |
| Mifare Classic    |  ✅  |  ✅  |  ✅  |  ✅  | 模擬がうまくいく場合もあればそうでない場合もあり              |
| Mifare DESFire    |  ✅  |     |     |     | 公共ファイルの読取が可能                  |
| Mifare Ultralight |  ✅  |     |  ✅  |  ✅  | ラベルを解除する方法はいくつか                 |
| NTAG-21X          |  ✅  |     |  ✅  |  ✅  | Mifare Ultralightと非常に似ている  |
| EMV カード         |     |     |  ❌  |  ❌  | 公共データの読取は誤解を防ぐため削除されました。コミュニティアプリで戻ってくる予定です |
| NFC-B             |     |     |     |  ❌  | 模擬のためのハードウェアサポートなし                   |
| iClass/PicoPass   |  ✅  |  ✅  |  ✅  |     |                           |
| EM4100/EM4102     |  ✅  |  ❌  |  ✅  |  ✅  |                           |
| H10301            |  ✅  |  ❌  |  ✅  |  ✅  |                           |
| Indala            |  ✅  |  ❌  |  ✅  |  ✅  | 一部の長さがサポートされていません                   |
| T5577             |  ✅  |  ✅  |  ✅  |  ✅  |                           |
| EM4305            |  ✅  |     |  ✅  |  ✅  |                           |
| Paxton Net2       |  ❌  |  ❌  |  ❌  |  ❌  | Hitag2のサポートなし             |
| Legic Prime       |  ❌  |  ❌  |  ❌  |  ❌  | 専用プロトコル                      |

***キー：*** *√ = 最新の公式ファームウェアに実装されています。未マーク = 将来実装される可能性があります。✘ = 実装される可能性は低いか、実行不可能です。*

### カード/タグのタイプをどうやって識別しますか？

> プロトコル（NFC、RFID、iClass/PicoPass）を判断するには、各該当アプリで読むことを試みる必要があります。効果がない場合は、タグ/カードに記載されているマークや指示を確認してください。最後の手段としては、カード/タグとリーダーの写真を撮影し、[Flipper Discordサーバー](https://flipperzero.one/discord)で問い合わせることです。
> カードリーダーにアクセスできる場合は、[RFID Detectorアプリ](https://lab.flipper.net/apps/nfc_rfid_detector)を使用して、それが高周波（NFC/iClass/PicoPass）か低周波（RFID）カードかを判断できます。

### NFCタグの種類をどうやって識別しますか？

> NFCアプリで「カードを読む」操作を実行します。NFC-Aタイプのタグ（Mifare/NTAG/一部のEMV）のみサポートされます。
> 成功裏に読み取った場合、タグのタイプは画面の上部に太字で表示されます。

### どのNFCタグに書き込むことができますか？

> 現在、書き込むことができるのはMifare Classic NFCカードのみです。
> さらなるタグは将来のファームウェア更新で追加される予定です。

### Mifare Ultralight/NTAGタグにはパスワード保護されているセクターがあると聞きました。これはどういう意味ですか？

> 読み取りが中断されるか、タグが実際にパスワード保護されている可能性があります。
> まず、再度タグを読み取ることを試みますが、情報画面がポップアップするまでデバイスの背面を保持してください。
> それでも警告が表示された場合、Flipperは*合法的に区別されているNFC対応のフィギュア（発音が「アミーボ」似）*やXaomi空気清浄機タグを解除することができますが、間違ったパスワードを何度も使用するとタグが**ブリック**される可能性があることに注意してください。

### なぜMifare Classicの読み取りには時間がかかるのですか？

> Mifare Classicはセクターに分割されており、これらのセクターは2つの鍵で保護されています。Mifare Classicを読み取るために、Flipperは辞書攻撃を使用しており、1241の一般的な鍵を含む大きなリストを逐次カード上の各セクターを確認します。もしあなたが鍵を知っているのであれば、NFCアプリの「追加操作」メニューで手動でそれらを追加できます。

### Mifare Classicにセクターが読み取れなかった時はどういう意味ですか？

> Mifare Classicカード上のデータはセクターに分割されており、それぞれのセクターは2つの鍵で保護されています。
> セクターが読み取れなかった場合、Flipperの辞書攻撃は有効な鍵を見つけられませんでした。
> もしあなたが鍵を知っているのであれば、NFCアプリの「追加操作」メニューで手動で入力できます。そうでない場合は、次の質問に記載されたように、mfkey32攻撃をリーダーに試みてください。

### 一部のセクターはMifare Classicに読み取れたが、すべてではない時はどういう意味ですか？

> Mifare Classicカード上のデータはセクターに分割されており、それぞれのセクターは2つの鍵で保護されています。
> 読み取りは成功しなかったが、失敗もしませんでした。一部のカードのデータは読み取られ保存されましたが、すべてではありません。
> すべてのセクターが読み取られていなくても、[モバイルアプリ](https://flpr.app/)を使用してダンプを確認し、欠落しているデータが必要かどうかを確認してください。珍しい場合には、半分読み取られたカードを使用して元のカードを模擬することに問題はありません。
> 他の鍵が必要な場合は、次の質問をお読みください。

### どのようにしてリーダーからMifare Classicの鍵を取得しますか？（mfkey32攻撃）

> 以下の文書をお読みください：<https://docs.flipper.net/nfc/mfkey32>

### なぜMifare Classicの模擬が機能しないのですか？

> Flipperは公式の仕様書に基づいてMifare Classic（13.56MHz）を模擬しますが、特定のリーダーはわずかに異なる周波数（13.50MHzなど）で動作します。Flipperは周波数を検出できないため（本物のカードが行うように）、これらの小さなエラーを正すことができません。
> 結果として、データ転送がリーダーの期待される時間に必ず発生するわけではないため、模擬は完璧ではありません。
> ソフトウェアを通じてこの問題を解決する理論的な方法はいくつかありますが、最適な選択肢は新しいハードウェアの改訂を必要とします。

### なぜMifare DESFireを保存/模擬できないのですか？

> DESFireは非常に複雑でより安全なチップセットです。現在知られている攻撃手法はありません。

### NFCディレクトリ内の.shdファイルとは何ですか？

> これはシャドウファイルであり、タグが模擬されて書き込まれるたびに作成されます。
> これらには元のファイルのコピーと書き込まれた内容が保存されています。これにより、元のファイルは変更されることはありません。

### 保存したタグ内のデータを編集するにはどうすればよいですか？

> NFC対応のスマートフォンを使用し、タグに書き込むことができるアプリを使用する必要があります。最も簡単に使えるアプリの一つは、[Android](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc)および[iOS](https://apps.apple.com/us/app/nfc-tools/id1252962749)向けのNFC Toolsです。Mifare Classicの模擬の特異性により、保存されたNTAGおよびMifare Ultralightタグのデータしか編集できません。もしあなたがまだNTAG216を持っていない場合、NFCアプリを使用して「手動追加」操作で空のNTAG216を作成できます。そのタグを保存し、リストから開いてください。タグの模擬を始めると、NFC Toolsスマートフォンアプリを使用して模擬タグに情報を書き込むことができます。これはそれを模擬タグと同じ名前の.shdファイルに保存します。もしURLを含むタグを速やかに生成したい場合は、[Flipper MakerのNFC Creatorツール](https://flippermaker.github.io/)をオンラインで使用できます。

### 銀行カードを模擬する際、なぜ機能しないのですか？

> EMVクレジットカード/デビットカードはほとんどが暗号化されています。Flipperが読み取る情報はカードの暗号化されていない部分だけです。これだけでは模擬やトランザクションを完了するには不十分です。暗号化された部分を読むことはできません。

### 銀行カードを保存して模擬してトランザクションを認証できる方法はありますか？

> いいえ、前述したような状況はありません。

### なぜNFC特性表には銀行カードは読めると記載されているのですか？

> 大多数のNFC対応の銀行カードは、暗号化されていない方法でカード番号を公開します。期限日、CVV、郵便番号は開示されません。
> カード番号だけではトランザクションを作成することはできないため、保存オプションを追加する理由はありません。

### Flipperは支払端末を模擬してトランザクションを認証できますか？

> できません。パターンが見えてきましたか？

### [9月のブログ記事](https://blog.flipperzero.one/september-progress/)で言及された「USB/LibNFC NFCリーダー」機能はどこにありますか？

> 時間の問題でこの機能は放棄されました。詳細は[このGithubの問題](https://github.com/flipperdevices/flipperzero-firmware/issues/1173#issuecomment-1127728562)を参照してください。

### NFCおよびRFID技術についての詳細情報を得られる場所は？

> - 低周波数と高周波数の紹介: <https://blog.flipperzero.one/rfid/>
> - NFCタイプ <https://www.rfwireless-world.com/Tutorials/NFC-Type1-Tag-vs-NFC-Type2-Tag-vs-NFC-Type3-Tag-NFC-Type4-Tag-Types.html>
> - Mifare Classic: <https://learn.adafruit.com/adafruit-pn532-rfid-nfc/mifare>
> - Mifareシリーズ: <https://en.wikipedia.org/wiki/MIFARE>
> - データシート: <http://www.proxmark.org/files/Documents/>
> - 一般的なRFID標準およびプロトコル: <https://www.asiarfid.com/common-rfid-standards-and-protocols.html>
> - RFID標準: ISO、IEC、EPCglobal: <https://www.electronics-notes.com/articles/connectivity/rfid-radio-frequency-identification/standards-iec-iso-epcglobal.php>

## 赤外線 [🔝](#top)

### 「ユニバーサルリモコン」メニューに他のデバイスを追加するにはどうすればよいですか？

> ユニバーサルメニューには新しいアイテムを追加できませんが、IRリモコンのダンプを含む多くのリポジトリがあります。最も人気のあるものは、[Flipper-IRDB](https://github.com/logickworkshop/Flipper-IRDB)です。
> （注意：ダウンロード時に*SDカードをFlipperから取り外し、コンピューターに直接挿入することを強く推奨します。）特定のデバイス用のリモコンが必要な場合は、[Flipper MakerのIRデバイスタイトルをオンラインで作成して転送することができます](https://flippermaker.github.io/)。

### ユニバーサルテレビリモコンは電源ボタン以外動作しません

> デフォルトのユニバーサルテレビリモコンデータベースは主に電源コードを含んでおり、他のボタンのコードは非常に少ないです。このファイル（SDカードの`infrared/assets/tv.ir`にあります）は、すべてのボタンの追加コードを含むファイルに手動で置き換えることができます。それを行うには、[このファイル](https://raw.githubusercontent.com/UberGuidoZ/Flipper/main/Infrared/tv.ir)をダウンロードし、[qFlipper](https://flipperzero.one/update)を使用して前述のパスに転送します。

### CSV/Pronto/IR Plusコードとは何ですか？

> これらの3つは異なるフォーマットの赤外線データベースです。Flipperと互換性はありませんが、[Flipper-IRDB](https://github.com/logickworkshop/Flipper-IRDB)のように互換性のあるバージョンに変換されるリポジトリもあります。

## BadUSB [🔝](#top)

### 米国以外のQWERTYキーボードを使用しているのですが、スクリプトを機能させるにはどうすればよいですか？

> ファームウェアに解決策がない場合、次の変換器のいずれかを試すことができます：
>
> - <http://helppox.com/badusbconvert.html>
> - <https://flippermaker.github.io/> （BadUSB文字列からAltコードへ）

## iButton [🔝](#top)

> *(進行中)*

## WiFiボード [🔝](#top)

### Wi-Fi開発ボードで何ができますか？

> WiFi開発ボードはFlipperとは完全に独立したコンピュータであるため、特定のタスクをFlipperから統合されたESP32チップ上で実行することができます。現在、開発ボードの主な用途は主に2つです：
>
> - [Blackmagicファームウェア（Flipperのファームウェア/アプリケーションのデバッグ用）](https://docs.flipper.net/development/hardware/wifi-developer-board)
> - [Marauderファームウェア（基本的なWi-Fi攻撃を実行するためのものです。悪用しないでください）](https://github.com/justcallmekoko/ESP32Marauder/wiki/flipper-zero)

### 開発ボードにファームウェアをフラッシュするにはどうすればよいですか？

> - Blackmagicをフラッシュする： [ufbtを使用](https://docs.flipper.net/development/hardware/wifi-developer-board/update)。
> - Marauderをフラッシュする：[次のいずれかのオプションを選択してください](https://github.com/justcallmekoko/ESP32Marauder/wiki/update-firmware#using-spacehuhn-web-updater)。
> - 他のファームウェアをフラッシュする： [ESP Flasherアプリ](https://lab.flipper.net/apps/esp_flasher)または[ESPWebTool](https://esp.huhn.me/)を使用して行います。
