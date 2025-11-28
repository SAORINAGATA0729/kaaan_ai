# Gemini3設定手順

## 現在の設定状況

✅ MCPサーバー設定完了（`.cursor/mcp.json`）
⚠️ Gemini3 APIキーの設定が必要

## Gemini3の設定手順

### 1. Google AI StudioでAPIキーを取得

1. https://makersuite.google.com/app/apikey にアクセス
2. Googleアカウントでログイン
3. 「Create API Key」をクリック
4. APIキーをコピー

### 2. CursorでGemini3を設定

1. Cursorを開く
2. `Cmd + ,`（Mac）または `Ctrl + ,`（Windows）で設定を開く
3. 左サイドバーで「AI Models」を選択
4. 「Gemini」セクションを開く
5. 「API Key」フィールドに取得したAPIキーを貼り付け
6. 「Save」をクリック

### 3. MCPサーバーの確認

1. Cursorの設定で「MCP Servers」を開く
2. `shadcn`サーバーが表示されていることを確認
3. 緑色のドットが表示されていれば接続済み

## 設定完了後の確認

Composerで以下を試してください：

```
shadcn/uiの利用可能なコンポーネント一覧を表示して
```

MCPサーバーが正しく動作していれば、AIがコンポーネント一覧を返します。

