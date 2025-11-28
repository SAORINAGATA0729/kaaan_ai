import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, ArrowRight, ArrowDown, User, Building2, Brain, Zap, Lightbulb, Briefcase, Search, MousePointerClick, FileText, ShieldCheck, Users, BarChart3 } from "lucide-react";

export default function AboutPage() {
  const useCaseItems = [
    { label: "大量にリードがあるが\n商談に繋がらない" },
    { label: "営業組織のスキル差" },
    { label: "リソース不足" },
    { label: "提案書作成に時間がかかる" },
    { label: "リードタイムの長期化" },
    { label: "事業成長を加速させたい" },
    { label: "リード獲得チャネルが限られている" },
    { label: "マーケティング施策の効果が出ない" },
    { label: "確度の低いリード対応に追われる" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Header />

      {/* Hero Section - Custom for About Page */}
      <section className="relative py-24 md:py-32 bg-[#1a1a1a] text-white overflow-hidden flex items-center justify-center min-h-[80vh]">
        {/* 背景エフェクト */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a2a2a] via-[#1a1a1a] to-[#1a1a1a] opacity-50" />
        <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-b from-white/5 to-transparent -skew-x-12 translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto max-w-[1000px] px-8 relative z-10">
          <div className="max-w-[900px] mx-auto text-center">
            {/* 英語アクセント */}
            <span className="inline-block text-xs font-medium tracking-[0.3em] text-white/40 mb-8 border border-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
              OUR VISION
            </span>

            {/* メインコピー */}
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold tracking-tighter leading-[1.1] mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              BtoB取引のプロセスを<br />
              <span className="text-white">根本から変える</span>
            </h1>

            {/* リード文 */}
            <div className="space-y-8 mb-16">
              <p className="text-xl md:text-2xl text-white font-medium tracking-wide">
                それが、私たちがショートカットを通じて実現したい世界です。
              </p>
              <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto"></div>
              <p className="text-base md:text-lg text-white/60 leading-[2.2] font-light max-w-[640px] mx-auto tracking-wide">
                従来当たり前だった複雑なプロセスやコミュニケーションを<br className="hidden md:block" />
                大幅にショートカットし、BtoB取引のプロセス全体を最適化。<br className="hidden md:block" />
                圧倒的なスピードで事業成長を実現します。
              </p>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-white text-[#1a1a1a] hover:bg-white/90 hover:scale-105 rounded-full px-12 h-16 text-[16px] font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300">
                <Link href="/demo">無料トライアルを始める</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: 従来のBtoB取引の課題 & 構造 (Storytelling) */}
      <section className="py-24 md:py-36 bg-gray-50">
        <div className="container mx-auto max-w-[1000px] px-8">
          
          {/* Intro */}
          <div className="mb-24 text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">従来のBtoB取引の課題</h2>
            <p className="text-[#666] text-lg font-light leading-relaxed">
              サービス提供側と検討側。お互いの状況が見えない「正解なき手探りのプロセス」が、<br className="hidden md:block" />
              膨大な時間とリソースの浪費を生んでいました。
            </p>
          </div>

          <div className="space-y-32">
            
            {/* 1. サービス提供側の視点 */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-1 space-y-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                  <div className="w-2 h-2 bg-[#1a1a1a] rounded-full"></div> PROVIDER SIDE
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                    リードの温度感が分からず、<br />リソースを浪費
                  </h3>
                  <p className="text-gray-600 leading-loose font-light text-lg">
                    相手の温度感が分からない「手探りの状態」のため、すべてのリードに等しくリソースを割かざるを得ません。<br />
                    「リード獲得から商談まで1ヶ月以上」「確度の低い対応に追われる日々」。営業効率は著しく低下します。
                  </p>
                </div>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm font-medium text-gray-500">
                       <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                       商談化まで1-2ヶ月のリードタイム
                   </li>
                   <li className="flex items-center gap-3 text-sm font-medium text-gray-500">
                       <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                       提案書作成に数日〜数週間
                   </li>
                   <li className="flex items-center gap-3 text-sm font-medium text-gray-500">
                       <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                       属人化による営業品質のバラつき
                   </li>
                </ul>
              </div>
              <div className="order-2 relative">
                 <div className="aspect-square rounded-full bg-white border border-gray-100 relative overflow-hidden flex items-center justify-center p-12 shadow-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />
                    <div className="w-full h-full relative animate-[spin_60s_linear_infinite]">
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-gray-200 rounded-full"></div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed border-gray-200 rounded-full"></div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border border-dashed border-gray-200 rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                       <div className="text-3xl font-light text-gray-300 mb-2">?</div>
                       <div className="text-xs font-bold text-gray-400 tracking-widest">UNKNOWN</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* 2. サービス検討側の視点 */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div> BUYER SIDE
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                    必要な情報が不足し、<br />検討が長期化
                  </h3>
                  <p className="text-gray-600 leading-loose font-light text-lg">
                    必要な情報がすぐに手に入らず、自社に合うサービスなのか判断できません。<br />
                    「情報収集に数週間」「複数社との煩雑なやり取り」。意思決定までに膨大な時間を浪費してしまいます。
                  </p>
                </div>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm font-medium text-gray-500">
                       <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                       意思決定まで数週間の遅延
                   </li>
                   <li className="flex items-center gap-3 text-sm font-medium text-gray-500">
                       <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                       不透明な判断基準
                   </li>
                   <li className="flex items-center gap-3 text-sm font-medium text-gray-500">
                       <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                       煩雑なコミュニケーションコスト
                   </li>
                </ul>
              </div>
              <div className="order-2 lg:order-1 relative">
                 <div className="aspect-square rounded-full bg-white border border-gray-100 relative overflow-hidden flex items-center justify-center shadow-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gray-50 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gray-50 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gray-50 rounded-full animate-pulse delay-300"></div>
                    <div className="text-center relative z-10">
                       <div className="text-3xl font-light text-gray-300 mb-2">...</div>
                       <div className="text-xs font-bold text-gray-400 tracking-widest">CONFUSION</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* 3. 構造的な分断 (The Gap) - Original Layout Restored */}
            <div className="pt-24 md:pt-32 border-t border-gray-100">
               <div className="text-center max-w-[600px] mx-auto mb-16">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4 tracking-tight">その時間は、誰のためにもなっていない</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed">
                     確信のない提案、終わらない検討。<br className="hidden md:block" />
                     双方の貴重な時間が、ただ浪費されるだけの構造がありました。
                  </p>
               </div>
               
               <div className="bg-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
                  
                  <div className="relative w-full max-w-[600px] flex items-center justify-between gap-8 md:gap-16">
                     <div className="flex flex-col items-center gap-4 z-10">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center">
                           <span className="font-bold text-[#1a1a1a] text-sm">検討側</span>
                        </div>
                        <span className="text-xs font-bold text-gray-300 tracking-widest">BUYER</span>
                     </div>

                     <div className="flex-1 flex flex-col items-center justify-center relative h-32">
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-full h-px bg-gray-200 border-t border-dashed border-gray-300"></div>
                        </div>
                        <div className="bg-white px-6 py-2 border border-gray-200 rounded-full relative z-10 shadow-sm">
                           <span className="text-xs font-bold text-gray-400 tracking-[0.3em]">DISCONNECT</span>
                        </div>
                        <div className="absolute top-0 text-gray-200 font-light text-2xl animate-[bounce_3s_infinite]">?</div>
                        <div className="absolute bottom-0 text-gray-200 font-light text-2xl animate-[bounce_3s_infinite_1.5s]">?</div>
                     </div>

                     <div className="flex flex-col items-center gap-4 z-10">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1a1a1a] text-white rounded-full shadow-lg flex items-center justify-center">
                           <span className="font-bold text-sm">提供側</span>
                        </div>
                        <span className="text-xs font-bold text-gray-300 tracking-widest">SELLER</span>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section: ショートカットの構造（解決） */}
      <section className="py-24 md:py-36 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="container mx-auto max-w-[1000px] px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Solution Diagram */}
            <div className="order-2 lg:order-1 bg-white/5 p-12 rounded-2xl border border-white/10 relative overflow-hidden group backdrop-blur-sm">
               <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                  <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl" />
                  <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-purple-500/20 to-transparent blur-3xl" />
               </div>

               <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                  <h4 className="text-xs font-medium text-white/60 tracking-[0.2em] mb-16">ショートカットの構造</h4>

                  <div className="w-full flex justify-between items-center relative">
                    <div className="absolute top-[2rem] left-12 right-12 h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 z-0"></div>

                    <div className="flex flex-col items-center gap-4 z-10 relative">
                      <div className="w-16 h-16 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-white/30 transition-colors">
                        <div className="text-xs text-white/90 font-medium">課題</div>
                      </div>
                      <div className="text-[11px] text-white/60 font-medium uppercase tracking-wider">Input</div>
                    </div>

                    <div className="flex flex-col items-center gap-6 z-10 relative -mt-6">
                       <div className="relative">
                         <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse"></div>
                         <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center shadow-2xl text-[#1a1a1a]">
                           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                           </svg>
                         </div>
                         <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-white/20 px-3 py-0.5 rounded-full">
                           <span className="text-[10px] font-bold text-white tracking-widest">AI</span>
                         </div>
                       </div>
                       <div className="text-center">
                         <div className="text-sm text-white font-medium">提案システム</div>
                         <div className="text-[11px] text-white/60 mt-1 font-medium">3-5 mins</div>
                       </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 z-10 relative">
                      <div className="w-16 h-16 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-white/30 transition-colors">
                        <div className="text-xs text-white/90 font-medium">提案書</div>
                      </div>
                      <div className="text-[11px] text-white/60 font-medium uppercase tracking-wider">Output</div>
                    </div>
                  </div>

                  <p className="text-xs text-white/50 mt-12 font-light tracking-wide">提案システムがハブとなり、双方に必要な情報を瞬時に提供</p>
               </div>
            </div>

            {/* Solution Text */}
            <div className="order-1 lg:order-2 space-y-8 text-lg leading-[2] font-light text-white/80">
               <p>
                 その解決策として、ショートカットは提案システムAIをハブとした仕組みを構築しました。
               </p>
               <p>
                 検討側が課題を入力し、AIがそれを分析して最適な提案書を生成し、提供側に届ける。
               </p>
               <p>
                 この流れによって、検討側は必要な情報をすぐに得られ、
                 提供側は温度感の高いリードを効率的に獲得できる。
               </p>
            <p className="font-medium text-white">
              「正解なき手探りのプロセス」を終わらせ、両社の課題を同時に解決します。
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: ショートカットが目指すBtoB取引の在り方 */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container mx-auto max-w-[1000px] px-8">
          
          {/* Vision Text */}
          <div className="max-w-[900px] mx-auto text-center mb-24">
             <div className="mb-8">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">THE NEW STANDARD</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-[1.2] tracking-tight text-[#1a1a1a]">
                「正解なき手探りのプロセス」をなくし、<br />
                <span className="border-b-2 border-[#1a1a1a] pb-2">本質的な価値創造</span>に集中できる世界へ。
             </h2>
             <div className="space-y-8 text-lg text-gray-600 font-light leading-[2.2]">
                <p>
                    「正解なき手探りのプロセス」を解消し、<br />
                    本質的な価値を生む時間を創り出す。
                </p>
                <p>
                    お互いの状況が見えないことで、<br className="hidden md:block" />
                    多くの時間とリソースが浪費されていました。
                </p>
                <p>
                    ショートカットは、この無駄をなくします。
                </p>
                <p>
                    提供側は、確度の高い提案にリソースを集中。<br className="hidden md:block" />
                    検討側は、納得感のある決断に時間を投資。
                </p>
                <p className="text-[#1a1a1a] font-medium text-xl mt-4">
                   プロセスをショートカットし、<br className="hidden md:block" />
                   BtoB取引の新しいスタンダードを築きます。
                </p>
             </div>
          </div>

          {/* プロセス比較 - Refined */}
          <div className="grid lg:grid-cols-2 gap-12 mb-32 items-stretch">
            {/* 従来のプロセス: Complex & Slow */}
            <div className="p-10 rounded-2xl border border-gray-100 bg-gray-50/50 relative overflow-hidden group hover:border-gray-200 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200" />
              
              <div className="flex justify-between items-end mb-10">
                <h3 className="text-lg font-medium text-gray-500">従来のプロセス</h3>
                <span className="text-sm font-medium text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100">1-2 Months</span>
              </div>

              <div className="relative pl-8 border-l border-dashed border-gray-300 space-y-10 py-2">
                {/* Phase 1 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-gray-50" />
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-gray-600">リード獲得・育成</div>
                    <div className="text-xs text-gray-400">MAツール / メルマガ / セミナー</div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-gray-50" />
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-gray-600">アポ獲得・ヒアリング</div>
                    <div className="text-xs text-gray-400">インサイドセールス / 日程調整</div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-gray-50" />
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-gray-600">提案書作成・商談</div>
                    <div className="text-xs text-gray-400">属人的な作成 / 複数回の商談</div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-gray-50" />
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-gray-700">受注・契約</div>
                    <div className="text-xs text-gray-400">社内稟議 / 法務確認</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200 text-center">
                 <p className="text-xs text-gray-400 font-medium">多くの時間とリソースが分散</p>
              </div>
            </div>

            {/* ショートカットのプロセス: Simple & Fast */}
            <div className="p-10 rounded-2xl bg-[#1a1a1a] text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-white" />
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex justify-between items-end mb-10 relative z-10">
                <h3 className="text-lg font-medium text-white">ショートカット</h3>
                <span className="text-sm font-bold text-[#1a1a1a] bg-white px-3 py-1 rounded-full">1-2 Days</span>
              </div>

              <div className="relative pl-8 border-l-2 border-white space-y-10 py-2 z-10">
                {/* Step 1 */}
                <div className="relative group-hover:translate-x-1 transition-transform duration-300">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#1a1a1a] shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">課題入力</div>
                    <div className="text-xs text-white/50">Webフォーム</div>
                  </div>
                </div>

                {/* AI Action - Highlight */}
                <div className="relative py-4 -my-4">
                  <div className="absolute -left-[48px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center z-20 shadow-lg scale-110">
                    <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10 ml-[-10px] pl-8">
                     <div className="text-xs font-bold text-white mb-1">AI自動生成</div>
                     <div className="text-[10px] text-white/60">提案書作成・温度感判定 (3-5分)</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative group-hover:translate-x-1 transition-transform duration-300">
                  <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#1a1a1a] shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white">意思決定・契約</div>
                    <div className="text-xs text-white/50">即座に商談・クロージング</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-700 text-center relative z-10">
                 <div className="text-white font-bold mb-1">結果: 時間とリソースの最適化、機会創出</div>
                 <div className="text-sm text-blue-300">プロセス期間: 98%短縮</div>
              </div>
            </div>
          </div>

          {/* 比較表 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left font-medium text-gray-500 w-1/3">比較項目</th>
                  <th className="py-4 px-6 text-left font-medium text-gray-500 w-1/3">従来のBtoB</th>
                  <th className="py-4 px-6 text-left font-bold text-[#1a1a1a] bg-gray-50 w-1/3">ショートカット</th>
                </tr>
              </thead>
              <tbody className="text-[#333]">
                {[
                  { label: "プロセス期間", old: "1ヶ月〜2ヶ月", new: "1日〜2日（98%短縮）" },
                  { label: "提案書作成時間", old: "数時間〜数日", new: "3-5分（99%短縮）" },
                  { label: "必要人員", old: "各部門に専門人材", new: "AI中心・最小人員" },
                  { label: "MAツール", old: "必須", new: "不要" },
                  { label: "インサイドセールス", old: "必須", new: "不要" },
                  { label: "顧客接点", old: "複数担当者", new: "一元化（Webフォーム）" },
                  { label: "提案精度", old: "属人的", new: "データドリブン" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6 font-medium">{row.label}</td>
                    <td className="py-4 px-6 text-gray-600">{row.old}</td>
                    <td className="py-4 px-6 font-bold text-[#1a1a1a] bg-gray-50">{row.new}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">総合的な効果: 時間・コスト・リソースの大幅削減</p>
        </div>
      </section>

      {/* Section 3: ショートカットの機能 - Refined Design */}
      <section className="py-24 md:py-36 bg-gray-50">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">ショートカットの機能</h2>
            <p className="text-gray-500">
               「手探り」をなくし、確実な成果を生むための5つの機能
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                 icon: <MousePointerClick className="w-6 h-6" />,
                 title: "課題入力Webフォーム", 
                 desc: "検討側がWebフォームで課題を入力するだけで、提供側がその課題を即座に理解できます。" 
              },
              { 
                 icon: <FileText className="w-6 h-6" />,
                 title: "AI自動提案書生成", 
                 desc: "入力された課題をもとに、AIが3-5分で高品質な提案書を自動生成します。" 
              },
              { 
                 icon: <ShieldCheck className="w-6 h-6" />,
                 title: "提案書品質保証", 
                 desc: "高品質な提案書を保証し、エンタープライズ企業にも響く提案書を生成します。" 
              },
              { 
                 icon: <Users className="w-6 h-6" />,
                 title: "スキル差補完", 
                 desc: "提供側の営業メンバーのスキル差を補完し、誰でも高品質な提案書を作成できます。" 
              },
              { 
                 icon: <BarChart3 className="w-6 h-6" />,
                 title: "データドリブン", 
                 desc: "過去の事例や業界知見を活用し、データドリブンな提案を実現します。" 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-[#1a1a1a]">{feature.title}</h3>
                <p className="text-[#666] leading-relaxed text-sm font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-[#1a1a1a] text-white hover:bg-[#333] h-14 px-12 text-[15px] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Link href="/features">機能一覧をみる</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: 具体的な活用ケース - Refined Design */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">具体的な活用ケース</h2>
            <p className="text-gray-500">
               あらゆる「手探り」の場面で、ショートカットは力を発揮します
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {useCaseItems.map((item, i) => (
              <Link href="/usecase" key={i} className="block group">
                 <div className="flex items-center justify-center text-center p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-100 aspect-[4/3] hover:border-[#1a1a1a] hover:bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-[#1a1a1a] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                   <span className={`font-bold text-gray-600 group-hover:text-[#1a1a1a] transition-colors text-sm md:text-base leading-relaxed`}>
                     {item.label.split('\n').map((line, j) => (
                       <span key={j}>
                         {line}
                         {j < item.label.split('\n').length - 1 && <br />}
                       </span>
                     ))}
                   </span>
                 </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-[#1a1a1a] text-white hover:bg-[#333] h-14 px-12 text-[15px] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Link href="/usecase">活用ケース一覧をみる</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: ビジョン - Refined Design */}
      <section className="py-32 md:py-48 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto max-w-[900px] px-8 relative z-10">
            <div className="space-y-16 text-center">
              <p className="text-xl md:text-3xl font-bold leading-relaxed tracking-tight text-[#1a1a1a]">
                「手探り」の時間をなくし、<br />
                売上を生むための「本来の業務」に集中できる環境を。
              </p>

              <div className="w-20 h-1 bg-[#1a1a1a] mx-auto"></div>

              <div className="space-y-10">
                <p className="text-lg md:text-xl text-[#444] leading-loose font-light tracking-tight">
                  プロセスをショートカットすれば、<br className="hidden md:block" />
                  ビジネスはもっとシンプルに、力強くなります。
                </p>

                <p className="text-lg md:text-xl text-[#444] leading-loose font-light tracking-tight">
                  組織の規模やリソースに関わらず、<br className="hidden md:block" />
                  すべての企業が、迷うことなく成果へ向かえるように。<br className="hidden md:block" />
                  私たちが、その環境を作ります。
                </p>
              </div>
            </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
