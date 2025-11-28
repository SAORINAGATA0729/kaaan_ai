# MCP + Gemini3 実装ガイド

## 現在の状況

✅ MCP設定ファイル作成済み（`.cursor/mcp.json`）
⚠️ MCPサーバーがまだ有効化されていない可能性があります
⚠️ Gemini3の設定が必要です

## MCPサーバーを有効化する手順

### 1. Cursorを再起動
MCP設定ファイルを作成した後、Cursorを完全に再起動してください。

### 2. MCPサーバーの確認
1. Cursorの設定を開く（`Cmd + ,`）
2. 「MCP Servers」セクションを確認
3. `shadcn`サーバーが表示され、緑色のドットが表示されていることを確認

### 3. Gemini3の設定確認
1. Cursorの設定で「AI Models」セクションを確認
2. Gemini3が有効化されていることを確認
3. APIキーが設定されていることを確認

## MCP + Gemini3を使った実装方法

### 従来の方法（手動）
```bash
npx shadcn@latest add button card
```

### MCP + Gemini3を使った方法
CursorのComposerで以下のように指示：

```
「shadcn/uiのMCPサーバーを使って、buttonとcardコンポーネントを検索して、このプロジェクトに追加してください。Gemini3を使って、コードの品質をレビューしてください。」
```

## MCPサーバーの機能

shadcn/uiのMCPサーバーは以下の機能を提供：

- **コンポーネントの検索**: MCP経由でshadcn/uiのコンポーネントを検索
- **コンポーネントのインストール**: MCP経由でコンポーネントを自動インストール
- **レジストリの閲覧**: 利用可能なコンポーネント一覧を取得

## 次のステップ

1. Cursorを再起動してMCPサーバーを有効化
2. MCPサーバーが動作していることを確認
3. Composerで「MCP経由でshadcn/uiコンポーネントを使って〜」と指示
4. Gemini3を使ってコードレビューと改善を実施

## 参考リンク

- [shadcn/ui MCP Documentation](https://ui.shadcn.com/docs/mcp)
- [Cursor MCP Documentation](https://docs.cursor.com/mcp)



