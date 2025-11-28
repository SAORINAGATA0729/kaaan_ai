# Gemini3設定 - 最終手順

## 状況
Cursorの設定画面ではGemini3の設定項目が見つかりませんでした。

## 解決方法

### 方法1: 環境変数で設定（推奨）

1. ターミナルで以下を実行：
```bash
export GEMINI_API_KEY="your_api_key_here"
```

2. Cursorを再起動

### 方法2: CursorのComposerで直接使用

CursorのComposerで以下を試してください：
```
Gemini3を使って、shadcn/uiのコンポーネントでお問い合わせフォームを作成して
```

Cursorが自動的にGemini3を使用する可能性があります。

### 方法3: Cursorのバージョン確認

Cursorのバージョンが最新か確認してください：
- Cursor > About Cursor でバージョンを確認
- 最新版にアップデート

## 現在の設定状況

✅ MCPサーバー設定完了（`.cursor/mcp.json`）
✅ shadcn/uiのMCPサーバー設定済み
⚠️ Gemini3のAPIキー設定が必要

## 次のステップ

1. Google AI Studio（https://makersuite.google.com/app/apikey）でAPIキーを取得
2. 環境変数に設定
3. Cursorを再起動
4. Composerで「Gemini3を使って〜」と指示

