# ショートカット Next.js プロジェクト

## 概要
既存のHTMLワイヤーフレームからコンテンツを抽出し、shadcn/uiとNext.jsで新規プロジェクトを構築しています。

## セットアップ完了項目
- ✅ Next.jsプロジェクト作成（TypeScript + TailwindCSS）
- ✅ shadcn/ui初期化
- ✅ Cursor MCP設定（`.cursor/mcp.json`）

## 次のステップ
1. 既存HTMLファイルからコンテンツ（テキスト・素材）を抽出
2. Gemini3統合設定
3. 各ページコンポーネントの作成
4. ナビゲーション・ルーティングの実装

## 開発コマンド
```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run start    # 本番サーバー起動
```

## プロジェクト構造
```
nextjs-app/
├── app/              # Next.js App Router
├── components/       # Reactコンポーネント
│   └── ui/          # shadcn/uiコンポーネント
├── lib/             # ユーティリティ
├── content/         # 抽出したコンテンツデータ（作成予定）
└── .cursor/         # Cursor設定
    └── mcp.json     # MCPサーバー設定
```
