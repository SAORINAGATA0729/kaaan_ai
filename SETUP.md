# Gemini3 + shadcn/ui MCP セットアップガイド

## 現在の状況

✅ Next.jsプロジェクト作成済み
✅ shadcn/ui初期化済み
✅ MCPサーバー設定済み（`.cursor/mcp.json`）
⚠️ Gemini3設定が必要

## Gemini3の設定方法

### 1. CursorでGemini3を有効化

1. Cursorの設定を開く（`Cmd + ,` または `Cursor > Settings`）
2. 「AI Models」セクションに移動
3. 「Gemini」を選択
4. Google AI Studio（https://makersuite.google.com/app/apikey）でAPIキーを取得
5. APIキーをCursorに設定

### 2. MCPサーバーの確認

`.cursor/mcp.json`にshadcn/uiのMCPサーバーが設定されています：

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

### 3. MCPサーバーを有効化

1. Cursorの設定で「MCP Servers」セクションを開く
2. `shadcn`サーバーが表示されていることを確認
3. 緑色のドットが表示されていれば接続済み

## Gemini3 + MCPを使った開発方法

### 例：shadcn/uiコンポーネントを使ったページ作成

**従来の方法（手動）:**
```bash
npx shadcn@latest add button card
# その後、手動でコンポーネントをインポートして使用
```

**Gemini3 + MCPを使った方法:**
```
CursorのComposerで以下を指示：
「shadcn/uiのbuttonとcardコンポーネントを使って、お問い合わせフォームページを作成して」
```

AIが自動的に：
1. MCPサーバー経由でshadcn/uiコンポーネントを検索
2. 必要なコンポーネントを自動インストール
3. コンポーネントを使用したコードを生成

### MCPサーバーの機能

shadcn/uiのMCPサーバーは以下の機能を提供：

- **コンポーネントの検索**: 「buttonコンポーネントを探して」
- **コンポーネントのインストール**: 「buttonとcardを追加して」
- **レジストリの閲覧**: 「利用可能なコンポーネント一覧を表示して」

## 次のステップ

1.プロジェクトでGemini3を有効化
2. MCPサーバーが接続されていることを確認
3. Composerで「shadcn/uiのコンポーネントを使って〜」と指示して開発を進める

## 参考リンク

- [shadcn/ui MCP Documentation](https://ui.shadcn.com/docs/mcp)
- [Cursor MCP Documentation](https://docs.cursor.com/mcp)
- [Google AI Studio](https://makersuite.google.com/app/apikey)

