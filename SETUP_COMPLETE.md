# Gemini3設定完了ガイド

## APIキー設定済み
✅ APIキー取得完了: `AIzaSyBgyZuduIca6z3WypAOSZidqc3dFuKPfyI`

## 設定手順

### 1. 環境変数の設定

ターミナルで以下を実行してください：

```bash
export GEMINI_API_KEY="AIzaSyBgyZuduIca6z3WypAOSZidqc3dFuKPfyI"
```

### 2. Cursorを再起動

環境変数を設定したら、Cursorを完全に再起動してください。

### 3. 動作確認

CursorのComposerで以下を試してください：

```
Gemini3を使って、shadcn/uiのbuttonコンポーネントでお問い合わせフォームを作成して
```

または：

```
shadcn/uiの利用可能なコンポーネント一覧を表示して
```

## 現在の設定状況

✅ MCPサーバー設定完了（`.cursor/mcp.json`）
✅ shadcn/uiのMCPサーバー設定済み
✅ Gemini3のAPIキー取得済み
✅ 環境変数設定が必要（上記手順参照）

## 注意事項

- 環境変数はターミナルセッションごとに設定が必要です
- 永続的に設定するには、`~/.zshrc`または`~/.bash_profile`に追加してください
- APIキーは機密情報なので、Gitにコミットしないでください


