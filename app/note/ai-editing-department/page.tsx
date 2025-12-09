"use client";

// Ver: English Hero + Polished Process

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LPHeader } from "@/components/LPHeader";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight, 
  Search, 
  TrendingUp,
  Database,
  Zap,
  RefreshCw,
  Settings,
  Target,
  Check
} from "lucide-react";

export default function AiEditingDepartmentPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-gray-200">
      <LPHeader />

      {/* 1. Hero Section - English Main Message */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="max-w-6xl">
            <div className="inline-block mb-8">
              <span className="text-[13px] tracking-[0.25em] uppercase font-bold border-b-2 border-black pb-2">
                AI Editing Department Service
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
              <span className="block">Half the Time,</span>
              <span className="block text-gray-400">Twice the Result</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-10 tracking-tight">
              会議での発言が、<br className="md:hidden" />
              そのまま最強のコンテンツになる。
            </h2>

            <p className="text-lg md:text-xl text-[#1a1a1a]/80 max-w-2xl leading-relaxed mb-16 font-medium">
              「何を書こう？」から考えるのは、もう終わり。<br />
              社内のあらゆる情報を資産に変え、<br />
              <strong className="border-b-2 border-black pb-1">AIと共創する新しい編集部</strong>を構築します。
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

      {/* 2. Problem Section - Empathy */}
      <section id="problem" className="py-24 bg-[#f9f9f9] border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                AIツールを入れたのに、<br />
                なぜ現場は楽にならない？
              </h2>
              <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                「メール作成は早くなった」「議事録は自動化できた」。<br />
                でも、肝心のコンテンツ制作や事業企画は、相変わらず<br />
                特定の人に依存し、時間がかかっていませんか？
              </p>
              
              <div className="mt-12">
                <Link href="/contact/service" className="group inline-flex items-center text-lg font-bold border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
                  その原因を知る
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-none border-l-4 border-black shadow-sm">
                <div className="flex items-start gap-4">
                  <Search className="h-6 w-6 text-[#1a1a1a] mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">「何を作ろう？」から始めている</h3>
                    <p className="text-gray-600 leading-relaxed">
                      毎回ゼロから企画を考え、担当者が情報を集めに行く。
                      これではAIを使っても、本質的な工数は減りません。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-none border-l-4 border-black shadow-sm">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-[#1a1a1a] mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">ナレッジが流れている</h3>
                    <p className="text-gray-600 leading-relaxed">
                      日々の会議での素晴らしい発言や、Slackでの議論。<br />
                      これらが活用されず、ただ流れて消えてしまっています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. New Discovery Section - The Core Concept */}
      <section id="discovery" className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-[1200px]">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-white"></div>
              <span className="text-white font-bold tracking-widest text-sm uppercase">New Perspective</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
              「アウトプット」から考えるのをやめ、<br />
              <span className="text-gray-400">「インプット」から生成する</span>へ。
            </h2>
          </div>

          <div className="border border-white/20 p-8 md:p-16 relative bg-[#1a1a1a]">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-16 text-center leading-snug">
              KAAANが提唱する<br />
              <span className="bg-white text-[#1a1a1a] px-4 py-1 mx-2">逆転の発想</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              {/* Conventional */}
              <div className="space-y-6 opacity-60">
                <div className="border-b border-gray-600 pb-4 mb-6">
                  <h4 className="font-bold text-xl text-gray-400">これまでの作り方</h4>
                </div>
                <div className="pl-6 border-l-2 border-gray-600 space-y-4">
                  <p className="text-lg">1. 目的を決める（採用、マーケ）</p>
                  <p className="text-lg">2. 担当者が情報を集めに行く（取材、調査）</p>
                  <p className="text-lg">3. コンテンツを作る</p>
                </div>
                <p className="text-sm pt-4">❌ 担当者に依存する / スピードが遅い / 質がばらつく</p>
              </div>

              {/* KAAAN Way */}
              <div className="space-y-6 relative">
                 <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-white to-gray-500"></div>
                <div className="border-b border-white pb-4 mb-6">
                  <h4 className="font-bold text-xl text-white">AI編集部のアプローチ</h4>
                </div>
                <div className="pl-6 space-y-4 font-bold text-xl">
                  <p>1. 日々の活動を全て蓄積する（会議、Slack、資料）</p>
                  <p>2. <span className="text-yellow-300">ここからAIが生成する</span></p>
                  <p>3. 目的に合わせて形を変える（記事、資料、SNS）</p>
                </div>
                <p className="text-base pt-4 text-white">⭕️ 情報収集ゼロ秒 / 爆速アウトプット / 誰でも高品質</p>
              </div>
            </div>

            <div className="mt-16 bg-white/10 p-8 text-center">
              <p className="text-xl leading-relaxed font-medium">
                わざわざ情報を集めに行く必要はありません。<br />
                <span className="underline decoration-yellow-300 underline-offset-4">あなたの会社には、すでに最強の素材（インプット）があるからです。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution Section - The 3 Steps */}
      <section id="solution" className="py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="mb-20 max-w-4xl">
            <span className="text-[#1a1a1a] font-bold tracking-widest text-sm uppercase mb-4 block">Our Solution</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              埋もれた資産を価値に変える<br />
              3つのエンジン
            </h2>
            <p className="text-2xl text-gray-500 font-medium">
              1〜1.5ヶ月で、このサイクルをあなたの会社に構築します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Database,
                title: "1. Stock (蓄積)",
                sub: "情報のデータベース化",
                desc: "会議の議事録、日報、Slackのやり取り、社内資料。これら全てを一箇所に集約。AIがいつでも引き出せる状態にします。",
                point: "情報収集コストをゼロにする"
              },
              {
                icon: Zap,
                title: "2. Generate (生成)",
                sub: "AIオペレーション構築",
                desc: "「採用広報用に」「営業資料用に」など、目的に合わせてAIが最適な形に変換。プロンプトチェーンを組み、自動化します。",
                point: "用途に合わせた爆速生成"
              },
              {
                icon: RefreshCw,
                title: "3. Cycle (循環)",
                sub: "フィードバックと進化",
                desc: "生成されたコンテンツの反応データを再び蓄積。AIの精度が日々向上し、使うほどに賢くなる編集部へと進化します。",
                point: "自走し、進化し続ける組織へ"
              }
            ].map((item, i) => (
              <div key={i} className="group border border-gray-200 p-10 hover:border-black transition-colors duration-300 relative bg-white">
                <div className="mb-8 p-4 bg-gray-50 inline-block rounded-full">
                  <item.icon className="w-8 h-8 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 font-bold mb-6">{item.sub}</p>
                <p className="text-gray-600 leading-relaxed mb-8 text-sm h-24">
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
             <div className="text-center mb-12">
               <h4 className="font-bold text-3xl mb-4">なぜ、自社だけではできないのか？</h4>
               <p className="text-gray-600">AIツールを契約するだけでは、この仕組みは作れません。</p>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <div className="bg-white p-8 shadow-sm">
                 <h5 className="font-bold text-xl mb-4 flex items-center gap-2">
                   <Settings className="w-5 h-5" />
                   オペレーター（Engineering）
                 </h5>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   単なるプロンプト入力ではなく、複数のAIを連携させる「プロンプトチェーン」や「ワークフロー」の設計が必要です。KAAANのエンジニアリングチームがこれを実装します。
                 </p>
               </div>
               <div className="bg-white p-8 shadow-sm">
                 <h5 className="font-bold text-xl mb-4 flex items-center gap-2">
                   <Target className="w-5 h-5" />
                   フロント（Designing）
                 </h5>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   「誰に」「何を」届けるかというコミュニケーション設計が必要です。マーケティングのプロが、AIのアウトプットを成果に繋がる文脈へ導きます。
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Why KAAAN Section */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              プロフェッショナルと一緒に、<br />
              「最強の編集部」を実装する
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: "自社で実践済み", desc: "KAAAN自身がこの仕組みで運営。実験ではなく、実証されたノウハウです。" },
              { title: "エンジニアリング", desc: "単なるライティングではなく、AIを組み込む技術実装まで行います。" },
              { title: "ブラックボックス化なし", desc: "最終的には貴社メンバーが運用できるよう、全てのノウハウを移譲します。" },
              { title: "成果重視", desc: "Half the Time, Twice the Result。時間半分で、2倍の成果を。" },
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

      {/* 7. Process Section - Timeline (Polished) */}
      <section id="flow" className="py-32 bg-[#f9f9f9] border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">
            1〜1.5ヶ月で、<br />
            あなたの会社が「メディア」になる
          </h2>

          <div className="space-y-8">
            {[
              { step: "01", title: "資産の棚卸し (ヒアリング)", desc: "現在、社内にどんな情報（会議、資料）があるかを確認し、データベース化の設計を行います。" },
              { step: "02", title: "生成フローの設計 (ストラテジー)", desc: "「採用」や「リード獲得」など、目的に合わせてAIに何を生成させるか戦略を決めます。" },
              { step: "03", title: "AIワークフロー実装 (構築)", desc: "1〜1.5ヶ月で、情報蓄積から生成までの自動化フローをKAAANが構築します。" },
              { step: "04", title: "レクチャーと実践 (伴走)", desc: "構築した仕組みの使い方をレクチャー。実際に記事や資料を生成し、効果を体感します。" },
              { step: "05", title: "自走化と展開 (内製化)", desc: "社内メンバーだけで運用できるようチューニング。他の部署へも展開していきます。" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-12 border border-gray-200 hover:border-black transition-colors flex flex-col md:flex-row gap-8 items-start shadow-sm">
                <div className="md:w-1/4">
                  <span className="text-5xl font-bold text-gray-200 block mb-2">0{i + 1}</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA - Impact */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
            社内の「会話」を、<br />
            事業を伸ばす「武器」に変える。
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-3xl mx-auto font-medium">
            AI編集部で、<br />
            Half the Time, Twice the Resultを実現しませんか？
          </p>
          
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
