"use client";

// Ver: 2024-12-09 Final Structure based on "00_LP構成シート.md"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LPHeader } from "@/components/LPHeader";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight, 
  Check, 
  Target, 
  Settings, 
  Search,
  TrendingUp,
  Database,
  Zap,
  RefreshCw,
  Users,
  BarChart,
  Award,
  MessageSquareQuote
} from "lucide-react";

export default function AiEditingDepartmentPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-gray-200">
      <LPHeader />

      {/* 1. Hero Section - Impact & Expectation */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="max-w-6xl">
            <div className="inline-block mb-8">
              <span className="text-[13px] tracking-[0.25em] uppercase font-bold border-b-2 border-black pb-2">
                Business Growth x AI
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
              <span className="block">Half the Time,</span>
              <span className="block text-gray-400">Twice the Result</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-10 tracking-tight">
              プロフェッショナルと共に、<br />
              事業成長に繋がる<span className="border-b-4 border-yellow-300">AI編集部</span>を構築する
            </h2>

            <p className="text-lg md:text-xl text-[#1a1a1a]/80 max-w-2xl leading-relaxed mb-16 font-medium">
              AIはあくまで手段です。重要なのは、それをどう事業成長に繋げるか。<br />
              数々の事業を成長させてきたプロフェッショナルが、<br />
              あなたの会社に「成果を生み出し続けるAI編集部」を実装します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="h-16 px-10 rounded-full text-base font-bold bg-[#1a1a1a] text-white hover:bg-black hover:scale-105 transition-all shadow-xl">
                <Link href="/contact/service">
                  案件相談・お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full text-base font-bold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white bg-transparent transition-all">
                <Link href="/download">
                  サービス資料ダウンロード
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section - Issues & Empathy */}
      <section id="problem" className="py-24 bg-[#f9f9f9] border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              AI活用において、<br />
              こんな<span className="text-red-500">「停滞」</span>を感じていませんか？
            </h2>
            <p className="text-lg text-gray-600">
              「AIを導入すれば勝手に成果が出る」わけではありません。<br />
              多くの企業が、<span className="font-bold underline">戦略なきAI活用</span>によって、時間とコストを浪費しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "「個人の効率化」で止まっている",
                desc: "メール作成や議事録は早くなったが、売上やリード獲得といった肝心の「事業成果」には全く繋がっていない。"
              },
              {
                title: "ツールの迷子になっている",
                desc: "次々と出る新しいAIツール。結局どれを使えばいいかわからず、現場は混乱し、使いこなせていない。"
              },
              {
                title: "品質が安定せず、属人化している",
                desc: "AIを使っても、プロンプトを書く人のスキルに依存し、品質がバラバラ。組織としてナレッジが蓄積されない。"
              },
              {
                title: "「何を作ればいいか」から悩んでいる",
                desc: "AI以前の問題として、明確なマーケティング戦略がなく、その場しのぎのコンテンツ制作になっている。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border-l-4 border-gray-300 hover:border-black transition-colors shadow-sm">
                <h3 className="font-bold text-xl mb-3 flex items-start gap-3">
                  <span className="text-gray-300 font-normal">0{i+1}.</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution Section - Concept & Logic */}
      <section id="solution" className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              AIは「魔法」ではありません。<br />
              <span className="text-yellow-300">「事業を加速させる手段」</span>です。
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              KAAANのAI編集部構築サービスは、単なるツール導入支援ではありません。<br />
              <span className="font-bold text-white border-b border-white pb-1">「事業課題の解決」から逆算された、戦略的なプロジェクト</span>です。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gray-700 z-0"></div>

            {[
              {
                step: "STEP 1",
                icon: Search,
                title: "課題の特定",
                en: "Issue",
                desc: "そもそも、なぜ事業が伸びていないのか？AIを入れる前に、マーケティングの根本課題を特定します。"
              },
              {
                step: "STEP 2",
                icon: Target,
                title: "戦略の策定",
                en: "Strategy",
                desc: "誰に、何を届けるべきか。AIを使う前に、勝てるマーケティング戦略を緻密に描きます。"
              },
              {
                step: "STEP 3",
                icon: Zap,
                title: "AIの実装",
                en: "Execution",
                desc: "その戦略を実行するために最適なAIフロー（プロンプトチェーン、DB構築）を組み上げます。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#2a2a2a] p-10 relative z-10 border border-gray-700 text-center group hover:border-yellow-300 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1a1a] border border-gray-600 mb-6 group-hover:border-yellow-300 group-hover:text-yellow-300 transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">{item.step}</p>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-yellow-300 font-bold mb-6 opacity-80">{item.en}</p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg font-bold">
              だから、KAAANは<span className="bg-white text-[#1a1a1a] px-2">「事業成長」を念頭に</span>AIを活用します。<br />
              部分最適ではなく、全体最適で成果を最大化します。
            </p>
          </div>
        </div>
      </section>

      {/* 4. How It Works - Methodology */}
      <section id="how" className="py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="mb-16">
             <span className="text-[#1a1a1a] font-bold tracking-widest text-sm uppercase mb-4 block">Methodology</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              「戦略」×「AI構築」×「自走化」の<br />
              統合プロセス
            </h2>
            <p className="text-gray-600 text-lg">
              1ヶ月目から実際にデータが見えてくるスピード感と、<br />
              最終的には自分たちでできる自立性を約束します。
            </p>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="flex flex-col md:flex-row border border-gray-200 shadow-sm overflow-hidden group hover:border-black transition-colors">
              <div className="bg-gray-50 p-8 md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                <span className="text-sm font-bold opacity-50 mb-2">PHASE 1</span>
                <h3 className="text-2xl font-bold">戦略と基盤</h3>
                <span className="text-sm opacity-70 mt-1">Marketing Strategy & Stock</span>
              </div>
              <div className="p-8 md:w-2/3 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-gray-400" /> マーケティングプランニング
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">ターゲット選定、ペルソナ設計、コンテンツ戦略の策定。AI以前の「勝つための設計図」を描きます。</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-gray-400" /> 資産のデータベース化
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">社内の会議データ、資料、Slackログ。これらを「AIが読み込める資産」としてデータベース化します。</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col md:flex-row border border-gray-200 shadow-sm overflow-hidden group hover:border-black transition-colors">
              <div className="bg-gray-50 p-8 md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                <span className="text-sm font-bold opacity-50 mb-2">PHASE 2</span>
                <h3 className="text-2xl font-bold">AI環境の構築</h3>
                <span className="text-sm opacity-70 mt-1">AI Construction</span>
              </div>
              <div className="p-8 md:w-2/3 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-gray-400" /> プロンプトチェーンの設計
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">単発の指示ではなく、複数のAI処理を連動させ、高品質なアウトプットを自動生成する仕組みを構築します。</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-gray-400" /> 最適ツールの実装
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Cursor、Notion AI、Claudeなどを組み合わせ、貴社のフローに最適な「AI編集部」環境を作り上げます。</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col md:flex-row border border-gray-200 shadow-sm overflow-hidden group hover:border-black transition-colors">
              <div className="bg-gray-50 p-8 md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                <span className="text-sm font-bold opacity-50 mb-2">PHASE 3</span>
                <h3 className="text-2xl font-bold">自走と展開</h3>
                <span className="text-sm opacity-70 mt-1">Self-Running & Expansion</span>
              </div>
              <div className="p-8 md:w-2/3 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" /> 徹底的なレクチャー
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">ブラックボックスにせず、貴社のメンバーが使いこなせるよう伴走型でレクチャーします。</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-gray-400" /> 完全自走化へ
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">最終的にはKAAANの手を離れ、貴社だけで運用・改善・展開ができる状態にします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why KAAAN - Authority & Trust */}
      <section id="authority" className="py-32 bg-[#f9f9f9] border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              私たちはAIの専門家ではありません。<br />
              <span className="border-b-4 border-[#1a1a1a]">事業成長のプロフェッショナル</span>です。
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-24">
            <div className="bg-white p-10 shadow-sm border-t-4 border-black">
              <Award className="w-12 h-12 mb-6 text-[#1a1a1a]" />
              <h3 className="text-xl font-bold mb-4">Half the Time, Twice the Resultへのコミット</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                時間を半分にし、成果を2倍にする。このスローガンを、私たち自身が徹底的に実践し、貴社の事業においてもその実現にコミットします。
              </p>
            </div>
            <div className="bg-white p-10 shadow-sm border-t-4 border-black">
              <Users className="w-12 h-12 mb-6 text-[#1a1a1a]" />
              <h3 className="text-xl font-bold mb-4">プロフェッショナルによる<br />伴走（Bansou）</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                AIエンジニアだけでなく、歴戦のマーケター、エディター、事業責任者がチームとして参画。ツールを渡して終わりではなく、事業成長まで泥臭く伴走します。
              </p>
            </div>
            <div className="bg-white p-10 shadow-sm border-t-4 border-black">
              <BarChart className="w-12 h-12 mb-6 text-[#1a1a1a]" />
              <h3 className="text-xl font-bold mb-4">自社での実践と実証<br />（Dogfooding）</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                提供するノウハウは、すべてKAAAN自社の事業成長のために開発・実証されたものです。机上の空論ではなく、「実際に成果が出た生きたノウハウ」だけを提供します。
              </p>
            </div>
          </div>

          {/* Testimonials / Achievements */}
          <div className="bg-white p-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-10">
              <MessageSquareQuote className="w-8 h-8 text-[#1a1a1a]" />
              <h3 className="text-2xl font-bold">支援実績・お客様の声</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                 <p className="text-lg font-bold mb-2">「初めてAIを使うメンバーばかりだったが、1ヶ月で記事制作が自走できるようになった」</p>
                 <p className="text-sm text-gray-500">SaaS企業 マーケティング責任者</p>
              </div>
              <div>
                 <p className="text-lg font-bold mb-2">「単なる時短ではなく、自分たちが気づかなかった企画案がAIから出てくるようになった」</p>
                 <p className="text-sm text-gray-500">人材系企業 事業部長</p>
              </div>
              <div>
                 <p className="text-lg font-bold mb-2">「プロと一緒に進めることで、AIへの苦手意識がなくなり、今では全社で活用している」</p>
                 <p className="text-sm text-gray-500">IT企業 代表</p>
              </div>
              <div>
                 <p className="text-lg font-bold mb-2">「BtoB企業のリード獲得数が200%達成。AI活用の本質がわかった」</p>
                 <p className="text-sm text-gray-500">BtoBサービス企業 経営企画室長</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Section - Timeline */}
      <section id="flow" className="py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">
            最短1.5ヶ月で、<br />
            強い組織へ。
          </h2>

          <div className="space-y-0 relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0">
            {[
              { step: "01", title: "Hearing & Audit", sub: "現状分析", desc: "現在の課題、体制、データの状況を詳細にヒアリングします。" },
              { step: "02", title: "Strategy Planning", sub: "戦略策定", desc: "2週間でマーケティング戦略とAI活用のロードマップを策定します。" },
              { step: "03", title: "Construction", sub: "構築・実装", desc: "約1ヶ月でAI環境（プロンプト、DB）を構築。初月からアウトプットを開始します。" },
              { step: "04", title: "Onboarding & Lecture", sub: "運用・定着", desc: "実際の業務の中でレクチャーを実施。メンバーが使いこなせるまで伴走します。" },
              { step: "05", title: "Self-Running", sub: "自走化", desc: "運用データを元にチューニングし、完全な自走体制へ移行します。" },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-gray-200 last:border-0 pl-12 md:pl-0">
                {/* Mobile Marker */}
                <div className="absolute left-[-5px] top-12 w-3 h-3 rounded-full bg-black md:hidden" />
                
                <div className="md:w-1/3 md:text-right md:pt-2">
                  <span className="text-lg font-bold text-gray-400 block mb-1">STEP {item.step}</span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <span className="text-xs font-bold text-[#1a1a1a] bg-gray-100 px-2 py-1 mt-2 inline-block">{item.sub}</span>
                </div>
                <div className="md:w-2/3 md:pt-3">
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA - Impact */}
      <section className="py-40 bg-[#1a1a1a] text-white text-center">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
            会議での発言を、<br />
            事業を伸ばす「武器」に変える。
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-medium">
            プロフェッショナルと一緒に、<br />
            あなたの会社の「AI編集部」を始めませんか？
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="h-16 px-12 rounded-full text-lg font-bold bg-white text-[#1a1a1a] hover:bg-gray-200 hover:scale-105 transition-all shadow-2xl">
              <Link href="/contact/service">
                無料相談に申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 rounded-full text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] bg-transparent">
              <Link href="/download">
                サービス資料をダウンロード
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
