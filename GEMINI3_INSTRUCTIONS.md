# Gemini3向け実装指示書

## プロジェクト概要

ショートカット（BtoB取引プロセスをショートカットするサービス）のWebサイトを、Goodpatchレベルの高品質なデザインで実装してください。

## 重要な前提条件

1. **HTMLワイヤーフレームの扱い**
   - `data/sitemap/wireframes/` にあるHTMLファイルから、**テキストと構造のみを抽出**
   - `<style>`タグ、インラインスタイル、CSSは**完全に無視**
   - セマンティックなHTML構造（`<h1>`, `<h2>`, `<p>`, `<section>`など）とテキストコンテンツのみを参考にする

2. **MCP経由でshadcn/uiコンポーネントを使用**
   - MCPサーバー経由でshadcn/uiコンポーネントを検索・使用
   - 必要なコンポーネントはMCP経由で追加
   - コンポーネントの使用例もMCP経由で確認

3. **デザインクオリティの目標**
   - 参考サイト: https://goodpatch.com/
   - このレベルの洗練されたデザインを目指す
   - モーションは不要だが、デザインのクオリティは同等以上を目指す

## デザイン原則（Goodpatchレベル）

### 1. タイポグラフィ
- **大胆な見出し**: 見出しは極端に大きく（`text-4xl`〜`text-6xl`）
- **適切な行間**: `leading-[1.1]`〜`leading-[1.3]`でタイトに、本文は`leading-[1.8]`〜`leading-[2]`でゆったりと
- **字間**: `tracking-tight`で見出しを引き締める
- **フォントウェイト**: 見出しは`font-medium`または`font-light`、本文は`font-light`または`font-normal`

### 2. 余白とスペーシング（最重要）
- **セクション間**: `py-32 md:py-48`（128px〜192px）の大きな余白
- **要素間**: `space-y-16`〜`space-y-24`（64px〜96px）の余白
- **コンテナ内**: `px-8`（32px）の左右パディング
- **カード内**: `p-10 md:p-14`（40px〜56px）のパディング
- **余白をデザインの一部として扱う**: 情報密度を下げ、余白を大胆に使う

### 3. レイアウト
- **グリッドシステム**: `grid-cols-1 md:grid-cols-2`で2カラム、必要に応じて3カラム
- **最大幅**: `max-w-[1200px]`でコンテンツ幅を制限
- **中央揃え**: `mx-auto`で中央配置
- **Sticky要素**: 必要に応じて`sticky top-32`で固定

### 4. カラーパレット
- **背景**: `bg-white`（白）、`bg-[#f9f9f9]`（薄いグレー）
- **テキスト**: `text-[#1a1a1a]`（黒）、`text-[#666]`（グレー）、`text-[#999]`（薄いグレー）
- **アクセント**: `bg-[#1a1a1a]`（黒）、`border-[#1a1a1a]`（黒のボーダー）
- **ホバー**: `hover:shadow-lg`、`hover:scale-105`で微細な動き

### 5. カードとコンポーネント
- **ボーダー**: `border border-gray-200`または`border-transparent`（ホバー時のみ表示）
- **シャドウ**: `shadow-sm`（通常）、`hover:shadow-lg`（ホバー）
- **角丸**: `rounded-xl`（12px）で柔らかく
- **トランジション**: `transition-all duration-500`で滑らかに

### 6. 視覚的階層
- **見出しのサイズ差**: h1 > h2 > h3で明確に差をつける
- **コントラスト**: 重要な要素は`font-medium`または`font-bold`で強調
- **区切り**: `border-b border-gray-100`でセクションを区切る

## 実装手順

### Step 1: HTMLワイヤーフレームの読み取り

```
1. `data/sitemap/wireframes/pages/[ページ名].html`を読み取る
2. `<style>`タグとインラインスタイルを無視
3. テキストコンテンツとHTML構造（h1, h2, p, sectionなど）のみを抽出
4. 抽出した情報を構造化して理解する
```

### Step 2: MCP経由でコンポーネントを確認

```
1. MCP経由でshadcn/uiコンポーネントを検索
   - 例: Card, Button, Input, Label, Select, Textarea, Checkbox, Accordion, Form, Table, DropdownMenu
2. コンポーネントの使用例をMCP経由で確認
3. 必要に応じてMCP経由でコンポーネントを追加
```

### Step 3: デザインの実装

```
1. Goodpatchレベルのデザイン原則に従って実装
2. 余白を大胆に使う（py-32 md:py-48）
3. 見出しを大きく（text-4xl〜text-6xl）
4. カードはシンプルに（border-transparent、ホバー時のみ表示）
5. トランジションを追加（transition-all duration-500）
```

### Step 4: コードレビューと改善

```
1. 実装後のコードをレビュー
2. デザインの一貫性をチェック
3. 余白とスペーシングが適切か確認
4. タイポグラフィが洗練されているか確認
```

## 各ページの実装指示

### TOPページ (`app/page.tsx`)

**HTMLワイヤーフレーム**: `data/sitemap/wireframes/pages/top.html`

**実装内容**:
1. HeroSectionコンポーネントを使用（既に実装済み）
2. Before/After/Howストーリーセクション
   - タイムラインのような縦の流れ
   - 大きな余白（space-y-24）
   - シンプルなボーダー（border-l）
3. 主要機能紹介セクション
   - グリッドレイアウト（grid-cols-1 md:grid-cols-2）
   - 番号を大きく薄く表示（text-4xl font-light text-gray-200）
   - ホバー時にボーダーとシャドウを表示
4. 価値提案セクション
   - シンプルなリスト形式
   - 大きな余白（space-y-8）
   - 装飾を最小限に

**デザインのポイント**:
- セクション間の余白を`py-32 md:py-48`に設定
- 見出しを`text-3xl md:text-5xl`で大きく
- カードのボーダーを`border-transparent`にして、ホバー時のみ表示
- トランジションを`transition-all duration-500`で滑らかに

### Aboutページ (`app/about/page.tsx`)

**HTMLワイヤーフレーム**: `data/sitemap/wireframes/pages/about.html`

**実装内容**:
1. MCP経由でCard, Tableコンポーネントを確認・使用
2. 会社情報を洗練されたデザインで表示
3. テーブルはシンプルで読みやすく

**デザインのポイント**:
- セクション間の余白を`py-32 md:py-48`に設定
- 見出しを`text-3xl md:text-4xl`で大きく
- テーブルは`border-gray-200`でシンプルに

### Featuresページ (`app/features/page.tsx`)

**HTMLワイヤーフレーム**: `data/sitemap/wireframes/pages/features.html`

**実装内容**:
1. MCP経由でCardコンポーネントを確認・使用
2. 機能をカード形式で表示
3. グリッドレイアウトで整理

**デザインのポイント**:
- カードは`border-transparent`で、ホバー時のみ表示
- グリッドは`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- カード内のパディングを`p-10 md:p-14`に設定

### その他のページ

同様のデザイン原則に従って実装してください。

## 実装時の注意事項

1. **HTMLワイヤーフレームの扱い**
   - CSS/スタイルは完全に無視
   - テキストと構造のみを抽出
   - デザインはGoodpatchレベルで独自に実装

2. **MCPの活用**
   - コンポーネントは必ずMCP経由で検索・確認
   - 使用例もMCP経由で確認
   - 必要に応じてMCP経由で追加

3. **デザインクオリティ**
   - 余白を大胆に使う（最重要）
   - 見出しを大きく
   - シンプルで洗練されたデザイン
   - トランジションで滑らかな動き

4. **コード品質**
   - TypeScriptの型を適切に使用
   - コンポーネントは再利用可能に
   - レスポンシブデザインを考慮

## 参考サイト

- **Goodpatch**: https://goodpatch.com/
  - このレベルの洗練されたデザインを目指す
  - 特に余白の使い方、タイポグラフィ、シンプルなレイアウトを参考にする

## チェックリスト

実装後、以下を確認してください：

- [ ] HTMLワイヤーフレームからテキストと構造のみを抽出できているか
- [ ] MCP経由でshadcn/uiコンポーネントを使用しているか
- [ ] セクション間の余白が`py-32 md:py-48`になっているか
- [ ] 見出しが`text-3xl md:text-4xl`以上になっているか
- [ ] カードのボーダーが`border-transparent`で、ホバー時のみ表示されているか
- [ ] トランジションが`transition-all duration-500`で滑らかか
- [ ] Goodpatchレベルのクオリティになっているか

## 実装例（TOPページのBefore/Afterセクション）

```tsx
<section className="py-32 md:py-48 bg-white">
  <div className="container mx-auto max-w-[1200px] px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
      {/* 左側: 見出し（Sticky） */}
      <div className="lg:col-span-5 sticky top-32">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-[#1a1a1a] leading-[1.15]">
          従来の<br />
          BtoB取引プロセスを<br />
          根本から変える
        </h2>
        <p className="text-lg text-[#666] leading-[1.9] font-light">
          プロセスは回っている。でも、成果が出ない。<br />
          それが従来のBtoB取引の課題でした。
        </p>
      </div>
      
      {/* 右側: コンテンツ */}
      <div className="lg:col-span-7 space-y-24">
        {/* Before Story */}
        <div className="relative pl-8 border-l border-gray-200">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200" />
          <div className="mb-6 text-sm tracking-widest text-gray-400 uppercase font-medium">Before</div>
          <h3 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-8 leading-snug">
            従来のプロセスを回しているのに、<br />成果が出ない
          </h3>
          {/* コンテンツ */}
        </div>
        
        {/* After Story */}
        <div className="relative pl-8 border-l-2 border-[#1a1a1a]">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1a1a1a]" />
          <div className="mb-6 text-sm tracking-widest text-[#1a1a1a] uppercase font-bold">After</div>
          <h3 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-8 leading-snug">
            従来のプロセス全体を<br />ショートカットし、成果が出る
          </h3>
          {/* コンテンツ */}
        </div>
      </div>
    </div>
  </div>
</section>
```

この実装例を参考に、各ページを実装してください。

