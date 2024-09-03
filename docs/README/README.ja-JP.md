```markdown
# Flipper\_Zero\_Apps

Flipper Zero ソフトウェア一覧

- サンプル1
- サンプル2

## よく使うコマンド

アプリを作成する

```sh
ufbt create APPID=<app_id>
```

# uFBT - ミニ Flipper ビルドツール

**uFBT には[公式 GitHub Action](https://github.com/marketplace/actions/build-flipper-application-package-fap)があります。これを利用することで、GitHub ワークフローを使用してアプリのビルドとリリースを自動化できます。**

## インストール

- **Linux および macOS**: `python3 -m pip install --upgrade ufbt`
- **Windows**: `py -m pip install --upgrade ufbt`

## 使用方法

### アプリケーションのビルドと実行

アプリケーションのルートディレクトリで `ufbt` を実行してください（このディレクトリには `application.fam` ファイルが含まれている必要があります）。これにより、アプリケーションがビルドされ、生成されたバイナリは `dist` サブディレクトリに配置されます。

`ufbt launch` を使用して、USB 接続された Flipper にアプリケーションをアップロードして起動できます。

利用可能な他のコマンドとオプションについては、`ufbt -h` を実行してください。

### デバッグ

アプリケーションをデバッグするには、現在の SDK バージョンと共に配布されているファームウェアを実行する必要があります。これを Flipper に書き込むために、`ufbt flash`（サポートされている SWD プローブを使用）または `ufbt flash_usb`（USB 経由）を使用できます。

他の書き込みやデバッグオプションについては、`ufbt -h`を参照してください。

### VSCode 統合

uFBT には、IDE でアプリケーションを直接ビルドしてデバッグするための VSCode 設定が用意されています。これをデプロイするには、アプリケーションのルートディレクトリで `ufbt vscode_dist` を実行してください。その後、VSCode でプロジェクトを開き（`ファイル` - `フォルダーを開く...`）、提供されたビルド（`ctrl+shift+b`）およびデバッグ（`ctrl+shift+d`）設定を使用できます。

### アプリケーションテンプレート

uFBT はアプリケーションのテンプレートを作成できます。これを行うには、アプリケーションを作成したいディレクトリで `ufbt create APPID=<app_id>` を実行してください。これにより、アプリケーションマニフェストとその主なソースファイルが作成されます。その後、上記の手順を使用してアプリケーションをビルドおよびデバッグできます。

アプリケーションマニフェストの詳細については、[FBT ドキュメント](https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/AppManifests.md)を参照してください。

### その他の機能

- `ufbt cli` はデバイスとの CLI セッションを開始します；
- `ufbt lint` と `ufbt format` はアプリケーションのソースコードに clang-format を実行します；
- ツールチェーンのバイナリ（コンパイラー、リンター、OpenOCD など）を一時的に PATH に追加できます。詳細については、`ufbt --help`を参照してください。

## SDK の管理

SDK を更新するには、`ufbt update` を実行します。これにより、以前使用されていたソースからすべての必要な SDK コンポーネントがダウンロードされ、インストールされます。

- 別の **リリースチャネル** の SDK に切り替えるには、`ufbt update --channel=[dev|rc|release]` を実行してください。
  - uFBT は、[公式ファームウェア](https://github.com/flipperdevices/flipperzero-firmware)と同じアーキテクチャに従うサードパーティのアップデートインデクサもサポートしています。これを使用するには、`ufbt update --index-url=<url>` を実行します。ここで `<url>` は、そのインデックスファイルのディレクトリ URL です。例えば `https://update.flipperzero.one/firmware/directory.json` のようになります。
- 特定の **リリースバージョン** またはまだマージされていない **ブランチ** の SDK を使用するには、`ufbt update --branch=0.81.1` または `ufbt update --branch=owner/my-awesome-feature` を実行してください。
  - 他のリポジトリにあるブランチの使用（インデックスディレクトリからビルドアーティファクトを取得できる場合）も `--index-url=<url>` を指定することで可能です。
- uFBT は、任意の **固定 URL** から SDK をダウンロードおよび更新することもできます。これを行うには、`ufbt update --url=<url>` を実行します。
- SDK の **ローカルコピー** を使用するには、`ufbt update --local=<path>` を実行します。これにより、ダウンロードするのではなく `<path>` にある SDK を使用します。ローカルでビルドした SDK をテストするのに非常に便利です。

### グローバルおよびプロジェクトごとの SDK 管理

デフォルトでは、uFBT は主ディレクトリの `.ufbt` サブフォルダーにその状態（SDK およびツールチェーン）を保存します。この場所は、`UFBT_HOME` 環境変数を設定することでオーバーライドできます。

uFBT は、現在のディレクトリでプロジェクトの環境変数をオーバーライドする dotenv (`.env`) ファイルもサポートしています。最も一般的な用途は、特定のバージョンや/またはハードウェアターゲットの SDK を使用できるように、デフォルトのステータスディレクトリをローカルディレクトリにオーバーライドすることです。

`ufbt dotenv_create` を実行することで、現在のディレクトリに dotenv モードを有効にできます。これにより、現在のディレクトリに `.env` ファイルが作成され、デフォルト値を使用して、SDK ステータスが現在のディレクトリの `.ufbt` サブフォルダーにリンクされ、主ディレクトリにツールチェーンのシンボリックリンクが作成されます。その後、`.env` ファイルを編集して環境をさらにカスタマイズできます。

`.env` ファイルを作成する際に他のオプションを指定することも可能です。詳細については、`ufbt dotenv_create --help` を参照してください。

### ufbt-bootstrap

SDK の更新は、uFBT コンポーネント *bootstrap* によって処理されます。専用のエントリポイント `ufbt-bootstrap` があり、特定のシナリオで役立つ場合があります。これらのオプションについては、`ufbt-bootstrap --help` を実行してください。

## トラブルシューティング

問題が発生し、uFBT の状態が破損している場合は、`ufbt clean` を実行してリセットできます。それでもうまくいかない場合は、主ディレクトリから `.ufbt` サブフォルダーを手動で削除してみてください。

`ufbt-bootstrap` および SDK に関連する `ufbt` サブコマンドは `--verbose` オプションを受け付け、追加のデバッグ情報が出力されます。
```

