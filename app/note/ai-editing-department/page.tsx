"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LPHeader } from "@/components/LPHeader";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight, 
  Check, 
  Target, 
  Settings, 
  Rocket,
  Sparkles,
  FileText,
  Search,
  TrendingUp
} from "lucide-react";

export default function AiEditingDepartmentPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-gray-200">
      <LPHeader />

      {/* 1. Hero Section - KAAAN Style (Bold & Minimal) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="max-w-5xl">
            <div className="inline-block mb-8">
              <span className="text-[13px] tracking-[0.25em] uppercase font-bold border-b-2 border-black pb-2">
                AI Editing Department Service
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
              <span className="block">Half the Time,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] to-gray-500">
                Twice the Result.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#1a1a1a] max-w-2xl leading-relaxed mb-16 font-medium">
              プロフェッショナルと一緒に、<br />
              <strong className="border-b-2 border-black pb-1">事業成長に繋がるAI編集部</strong>を構築します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="h-16 px-10 rounded-full text-base font-bold bg-[#1a1a1a] text-white hover:bg-black hover:scale-105 transition-all shadow-xl">
                <Link href="/contact/service">
                  案件相談
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full text-base font-bold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white bg-transparent transition-all">
                <Link href="/download">
                  サービス資料
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section (課題共感) - Clean Layout */}
      <section id="problem" className="py-24 bg-[#f9f9f9] border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                AIツールの活用について、<br />
                こんな悩み、ありませんか？
              </h2>
              <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                個人の生産性は上がっているかもしれません。<br />
                でも、組織としての成果に繋がっていますか？
              </p>
              
              <div className="mt-12">
                <Link href="/contact/service" className="group inline-flex items-center text-lg font-bold border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
                  この課題を解決する方法を知る
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-none border-l-4 border-black shadow-sm">
                <div className="flex items-start gap-4">
                  <Search className="h-6 w-6 text-[#1a1a1a] mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">ツール選びの迷走</h3>
                    <p className="text-gray-600 leading-relaxed">あらゆるツールがある中で何を使えばいいのかわからない。新しいツールが出るたびに翻弄されてしまう。</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-none border-l-4 border-black shadow-sm">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-[#1a1a1a] mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">成果が見えない</h3>
                    <p className="text-gray-600 leading-relaxed">編集部としてAIを使っているが、なかなかうまくいかない。「使ってるけど、そんなに使えるんだ」という気づきがない。</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right pt-4">
                <p className="text-xl font-bold">
                  これらは、<span className="bg-yellow-300 px-2">よくある企業の悩み</span>です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. New Discovery Section (新しい発見) ⭐最重要 - High Contrast */}
      <section id="discovery" className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-[1200px]">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-white"></div>
              <span className="text-white font-bold tracking-widest text-sm uppercase">New Perspective</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
              なぜ、個人の生産性は上がっているのに、<br />
              編集部としてうまくいっていないのか？
            </h2>
          </div>

          <div className="border border-white/20 p-8 md:p-16 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

            <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center leading-snug">
              AIを個人が活用するのと、<br />
              <span className="bg-white text-[#1a1a1a] px-4 py-1">AIベースにしたプロジェクト</span>は違う
            </h3>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div>
                  <h4 className="font-bold text-xl mb-4 text-gray-400">個人での活用（Productivity）</h4>
                  <p className="text-white/70 text-lg leading-relaxed border-l-2 border-gray-600 pl-6">
                    メールの下書き、資料作成の補助など、日常業務の効率化。「生産性向上ツール」としての使い方。
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600 to-white"></div>
                  <h4 className="font-bold text-2xl mb-4 text-white">組織での活用（Growth）</h4>
                  <p className="text-white text-lg leading-relaxed font-medium pl-6">
                    マーケティング戦略の中にどうAIを組み込むか設計し、最適化していく流れ。「事業成長エンジン」としての使い方。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 p-10 border border-white/10">
                <p className="text-xl leading-relaxed mb-8">
                  多くの企業が成果が出ない理由はここにあります。<br />
                  <span className="text-gray-400">マーケティング戦略がなく、AIをどう組み込むかの設計がなく、最適化のフローがない。</span>
                </p>
                <p className="text-xl font-bold border-t border-white/20 pt-8">
                  もし、これらが揃っていないなら、<br />
                  AIツールを使っていても事業成長に繋がらないのは当然です。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Button asChild size="lg" className="h-16 px-12 rounded-full text-base font-bold bg-white text-[#1a1a1a] hover:bg-gray-200 hover:scale-105 transition-all">
              <Link href="/contact/service">
                事業成長に繋がるAI活用を知る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Solution Section (解決策) - Minimal Cards */}
      <section id="solution" className="py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="mb-20 max-w-4xl">
            <span className="text-[#1a1a1a] font-bold tracking-widest text-sm uppercase mb-4 block">Our Solution</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              事業成長に繋がるAI編集部を、<br />
              1〜1.5ヶ月で構築する
            </h2>
            <p className="text-2xl text-gray-500 font-medium">
              AIはあくまで手段。事業成長につながらなければ何の意味もない。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "1. Marketing Planning",
                sub: "マーケティングプランニング",
                desc: "企業としての情報発信のあり方の戦略構築。実際にどのような体制とAI組むべきかを確定します。",
                point: "マーケティング戦略を明確にする"
              },
              {
                icon: Settings,
                title: "2. AI Environment Design",
                sub: "AI環境の設計と構築",
                desc: "情報発信を行う領域においてAI活用して爆速できる環境を構築。プロンプトチェーンや仕組みを一通り作ります。",
                point: "戦略の中にAIをどう組み込むか設計"
              },
              {
                icon: Rocket,
                title: "3. Deployment & Self-running",
                sub: "企業独自の展開と自走",
                desc: "企業独自の踏み方を展開していきます。最終的には自分たちでAIの編集部を展開できるようになります。",
                point: "最適化し、自走する流れを作る"
              }
            ].map((item, i) => (
              <div key={i} className="group border border-gray-200 p-10 hover:border-black transition-colors duration-300 relative">
                <div className="mb-8">
                  <item.icon className="w-10 h-10 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 font-bold mb-6">{item.sub}</p>
                <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-bold flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {item.point}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div id="features" className="bg-[#f5f5f5] p-12 border border-gray-200 scroll-mt-20">
            <h4 className="font-bold text-2xl mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#1a1a1a]" />
              ここが違います
            </h4>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-gray-300">01</div>
                <div>
                  <p className="font-bold text-xl mb-2">1ヶ月目からデータが見える</p>
                  <p className="text-gray-600 leading-relaxed">スピード感を持って構築するため、早期に成果のデータ（反応）が見えてきます。</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-gray-300">02</div>
                <div>
                  <p className="font-bold text-xl mb-2">最終的には自走できる</p>
                  <p className="text-gray-600 leading-relaxed">ブラックボックス化せず、貴社のメンバーがAI編集部を運用・展開できるようレクチャーします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why KAAAN Section - Iconic */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              プロフェッショナルと一緒に、<br />
              事業成長に繋がるAI編集部を
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: "自社で実践", desc: "自社でいろんなツールを使い倒し、加速させている実践知があります。" },
              { title: "プロが伴走", desc: "AIをゴリゴリ使っているエディター・プランナーが一緒に進みます。" },
              { title: "初めてでも安心", desc: "AIリテラシーが不安でも大丈夫。ガンガン活用できるレクチャーを提供。" },
              { title: "成果重視", desc: "Half the Time, Twice the Resultを実現します。" },
            ].map((item, i) => (
              <div key={i} className="border border-white/20 p-8 hover:bg-white/5 transition-colors">
                <Check className="w-8 h-8 text-white mb-6" />
                <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="h-16 px-12 rounded-full font-bold bg-white text-[#1a1a1a] hover:bg-gray-200">
              <Link href="/contact/service">
                案件相談
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Benefits & Tools - List Style */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">事業成長に繋がるコンテンツと仕組みを実現</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-bold text-2xl mb-8 flex items-center gap-3 border-b-2 border-black pb-4">
                <FileText className="w-6 h-6" />
                多様なコンテンツ制作
              </h3>
              <ul className="space-y-6">
                {[
                  "コンテンツSEO：自社のテイストを交えた記事作成",
                  "ノート：ノート形式のコンテンツを効率的に作成",
                  "企画コンテンツ：AI活用した企画アイデア出し",
                  "SNS投稿：X（旧Twitter）等の投稿作成",
                  "看板ライティング：社内メンバーが書きやすい環境構築"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-medium">
                    <span className="w-2 h-2 bg-black rounded-full mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-8 flex items-center gap-3 border-b-2 border-black pb-4">
                <Settings className="w-6 h-6" />
                強固な仕組み・体制
              </h3>
              <ul className="space-y-6">
                {[
                  "全面的なレクチャー：ストラテジーとAI活用法を伝授",
                  "レビュー体制：品質を担保するフローの構築",
                  "企画のネタ抽出：MTGデータからの自動抽出",
                  "データ管理：Notion等でのナレッジ蓄積",
                  "レポーティング：活動と成果の可視化"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-medium">
                    <span className="w-2 h-2 bg-black rounded-full mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-12 border-t border-gray-100 text-center">
            <p className="font-bold mb-6 text-gray-500 uppercase tracking-widest text-sm">Environment</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <span className="font-bold text-2xl md:text-3xl text-[#1a1a1a]">Cursor</span>
              <span className="font-bold text-2xl md:text-3xl text-[#1a1a1a]">Notion</span>
              <span className="font-bold text-2xl md:text-3xl text-[#1a1a1a]">Google Drive</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Process Section - Timeline */}
      <section id="flow" className="py-32 bg-[#f9f9f9] border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">
            1〜1.5ヶ月で、<br />
            事業成長に繋がる仕組みを構築
          </h2>

          <div className="space-y-0 relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0">
            {[
              { step: "01", title: "現状ヒアリング", desc: "現在のAI環境や情報発信の状況をヒアリングします。" },
              { step: "02", title: "ストラテジー構築", desc: "マーケティング戦略とAI活用の方向性を確定させます。" },
              { step: "03", title: "AIの設計と構築", desc: "1〜1.5ヶ月でプロンプトチェーンや仕組みを一通り構築します。初月からレクチャーを開始します。" },
              { step: "04", title: "レクチャーと活用", desc: "活用方法を全面的にレクチャーし、実践に入ります。" },
              { step: "05", title: "運用体制の確立", desc: "みんなで運用ができる体制のチューニングと、走りながら資料化も進めます。" },
              { step: "06", title: "レポート改善", desc: "レポート振り返りフローと活用ツールを構築し、データドリブンに改善します。" }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-gray-200 last:border-0 pl-12 md:pl-0">
                {/* Mobile Marker */}
                <div className="absolute left-[-5px] top-12 w-3 h-3 rounded-full bg-black md:hidden" />
                
                <div className="md:w-1/3 md:text-right md:pt-2">
                  <span className="text-4xl font-bold text-gray-200 block mb-2">STEP {item.step}</span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <div className="md:w-2/3 md:pt-3">
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Case Study (実績) - Typography */}
      <section className="py-32 bg-[#1a1a1a] text-white text-center">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-12 text-gray-500">Case Studies & Achievements</h2>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 font-bold text-3xl md:text-5xl opacity-80 leading-tight">
            <span className="hover:text-white transition-colors cursor-default">MarketEnterprise</span>
            <span className="hover:text-white transition-colors cursor-default">JQ</span>
            <span className="hover:text-white transition-colors cursor-default">Contents SEO</span>
            <span className="hover:text-white transition-colors cursor-default">FAQ System</span>
          </div>
          <div className="mt-16">
             <Button asChild variant="outline" className="h-14 px-8 rounded-full text-base font-bold border-white text-white hover:bg-white hover:text-black transition-all">
               <Link href="/contact/service">実績について問い合わせる</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* 10. Final CTA - Impact */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
            AIを事業成長のエンジンに<br />
            変えませんか？
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-3xl mx-auto font-medium">
            AIはあくまで手段。<br />
            プロフェッショナルと一緒に、事業成長に繋がるAI編集部を構築しましょう。
          </p>
          
          <div className="mb-16">
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] border-b-4 border-black pb-2">Half the Time, Twice the Result</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="h-16 px-12 rounded-full text-lg font-bold bg-[#1a1a1a] text-white hover:bg-black hover:scale-105 transition-all shadow-2xl">
              <Link href="/contact/service">
                案件相談
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 rounded-full text-lg font-bold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white bg-transparent">
              <Link href="/download">
                サービス資料
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
