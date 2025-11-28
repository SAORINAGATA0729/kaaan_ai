"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Check, X, ArrowRight, Users, BarChart3, Brain, Zap, Target, Clock, Mail } from "lucide-react";

export default function LeadQualityPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-8 relative z-10">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-6">
              大量にリードがあるが<br className="md:hidden" />商談に繋がらない
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-[1.8] font-light max-w-[800px] mx-auto mb-0">
              すべてのリードに、高品質な提案を。<br className="hidden md:block" />
              AIが商談化までのプロセスを自動化し、確度の高い商談だけを生み出します。
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">このような課題はありませんか</h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed max-w-[800px] mx-auto">
              マーケティング施策でリードは獲得できているものの、そこからの商談化率が伸び悩んでいませんか？
              「とりあえず架電」の繰り返しでリソースが疲弊し、本当に追うべき顧客を逃している可能性があります。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "商談化率が低い",
                desc: "資料ダウンロードやホワイトペーパー経由のリードが大量にあるが、なかなか商談に繋がらない。"
              },
              {
                icon: Users,
                title: "リソース不足",
                desc: "インサイドセールスのリソースが足りず、全てのリードに対して十分なフォローができていない。"
              },
              {
                icon: BarChart3,
                title: "確度が見えない",
                desc: "リードの温度感が分からず、優先順位をつけられないため、非効率なアプローチを続けている。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: The Solution */}
      <section className="py-24 md:py-32 bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              AIが「提案」を自動化し、<br className="md:hidden" />商談化率を劇的に改善
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed max-w-[800px] mx-auto">
              ショートカットは、リード企業の公式サイト情報をAIが分析し、その企業ごとの課題に合わせた「個別提案書」を自動生成します。
              顧客は「一般的な資料」ではなく「自社向けの提案」を受け取るため、興味関心が高まり、自ら商談を希望するようになります。
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">リード情報の入力</h3>
                  <p className="text-gray-600 leading-relaxed">獲得したリードのURLを入力するだけ。面倒な設定は不要です。</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-lg shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AIによる自動分析・生成</h3>
                  <p className="text-gray-600 leading-relaxed">AIが企業の課題を分析し、最適な提案書を3-5分で作成します。</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-lg shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">提案書の送付</h3>
                  <p className="text-gray-600 leading-relaxed">生成された提案書URLを顧客に送付。メール文面もAIが作成支援します。</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-lg shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">顧客のアクション</h3>
                  <p className="text-gray-600 leading-relaxed">提案書に興味を持った顧客が、そのまま商談カレンダーから予約します。</p>
                </div>
              </div>
            </div>
            
            {/* Visual Representation (Abstract) */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 aspect-square flex flex-col justify-center items-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
               
               <div className="relative z-10 w-full max-w-xs space-y-4">
                 {/* Card 1: Lead */}
                 <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
                   <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"><Users className="w-5 h-5 text-gray-400" /></div>
                   <div>
                     <div className="h-2 w-24 bg-gray-200 rounded mb-2"></div>
                     <div className="h-2 w-16 bg-gray-100 rounded"></div>
                   </div>
                 </div>
                 
                 {/* Arrow Down */}
                 <div className="flex justify-center text-gray-300"><ArrowRight className="w-6 h-6 rotate-90" /></div>
                 
                 {/* Card 2: AI Processing */}
                 <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#1a1a1a] shadow-lg flex items-center gap-3 text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Brain className="w-5 h-5 text-white" /></div>
                   <div>
                     <div className="text-sm font-bold mb-1">AI Analysis</div>
                     <div className="text-xs text-white/60">Generating Proposal...</div>
                   </div>
                 </div>

                 {/* Arrow Down */}
                 <div className="flex justify-center text-gray-300"><ArrowRight className="w-6 h-6 rotate-90" /></div>

                 {/* Card 3: Success */}
                 <div className="bg-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                   <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center"><Check className="w-5 h-5 text-green-600" /></div>
                   <div>
                     <div className="text-sm font-bold text-gray-900">商談獲得</div>
                     <div className="text-xs text-gray-500">High Quality Lead</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50/50">
                <div className="flex items-center gap-3 mb-8">
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full">BEFORE</span>
                  <h3 className="text-xl font-bold text-gray-500">従来のプロセス</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-gray-500">
                    <X className="w-5 h-5 shrink-0 mt-1 text-gray-400" />
                    <div>
                      <span className="block font-medium text-gray-700 mb-1">全員に画一的なアプローチ</span>
                      <span className="text-sm">電話やメールで同じ内容を送り続けるため、反応率が低い。</span>
                    </div>
                  </li>
                  <li className="flex gap-4 text-gray-500">
                    <X className="w-5 h-5 shrink-0 mt-1 text-gray-400" />
                    <div>
                      <span className="block font-medium text-gray-700 mb-1">断られる・無視される</span>
                      <span className="text-sm">顧客の課題に合っていないため、「今は結構です」と断られる。</span>
                    </div>
                  </li>
                  <li className="flex gap-4 text-gray-500">
                    <X className="w-5 h-5 shrink-0 mt-1 text-gray-400" />
                    <div>
                      <span className="block font-medium text-gray-700 mb-1">営業が疲弊する</span>
                      <span className="text-sm">アポ獲得ノルマに追われ、提案の質を上げる時間が取れない。</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* After */}
              <div className="p-10 md:p-14 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full" />
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <span className="px-3 py-1 bg-[#1a1a1a] text-white text-xs font-bold rounded-full">AFTER</span>
                  <h3 className="text-xl font-bold text-[#1a1a1a]">ショートカット導入後</h3>
                </div>
                <ul className="space-y-6 relative z-10">
                  <li className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0 mt-1 text-[#1a1a1a]" />
                    <div>
                      <span className="block font-medium text-[#1a1a1a] mb-1">個別提案書を送付</span>
                      <span className="text-sm text-gray-600">AIが作成した「その企業専用」の提案書を送るため、開封率が高い。</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0 mt-1 text-[#1a1a1a]" />
                    <div>
                      <span className="block font-medium text-[#1a1a1a] mb-1">顧客が興味を持つ</span>
                      <span className="text-sm text-gray-600">「自社のことを分かってくれている」と感じ、信頼を獲得できる。</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Check className="w-5 h-5 shrink-0 mt-1 text-[#1a1a1a]" />
                    <div>
                      <span className="block font-medium text-[#1a1a1a] mb-1">商談に集中できる</span>
                      <span className="text-sm text-gray-600">興味のある顧客との商談だけに集中でき、受注率が向上する。</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Suitable Companies */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">こんな企業に最適です</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-sm">1</span>
                 リード獲得状況
               </h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3 text-gray-700">
                   <Check className="w-5 h-5 text-[#1a1a1a] mt-0.5 shrink-0" />
                   <span>月間100件以上のリードがあるが、商談化率が5%以下</span>
                 </li>
                 <li className="flex items-start gap-3 text-gray-700">
                   <Check className="w-5 h-5 text-[#1a1a1a] mt-0.5 shrink-0" />
                   <span>ホワイトペーパーや展示会で大量の名刺を獲得している</span>
                 </li>
               </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-sm">2</span>
                 営業体制
               </h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3 text-gray-700">
                   <Check className="w-5 h-5 text-[#1a1a1a] mt-0.5 shrink-0" />
                   <span>インサイドセールスが不足している、または存在しない</span>
                 </li>
                 <li className="flex items-start gap-3 text-gray-700">
                   <Check className="w-5 h-5 text-[#1a1a1a] mt-0.5 shrink-0" />
                   <span>フィールドセールスがリード対応まで兼務しており、手一杯</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-24 md:py-32 bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <h2 className="text-2xl font-bold mb-8 text-[#1a1a1a]">
            関連する活用シーン
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "リソース不足", desc: "限られた人数で最大の成果を出すための、AI活用術。", link: "/usecase/resource-shortage" },
              { title: "リードタイムの長期化", desc: "検討期間を短縮し、早期受注につなげるアプローチ。", link: "/usecase/leadtime" },
              { title: "確度の低いリード対応", desc: "追うべき顧客を見極め、営業効率を最大化する方法。", link: "/usecase/low-quality-leads" },
              { title: "営業組織のスキル差", desc: "AI活用で属人化を解消し、誰でも高品質な提案が可能に。", link: "/usecase/skill-gap" },
              { title: "マーケティング施策の効果", desc: "リード獲得後のプロセスを最適化し、ROIを最大化。", link: "/usecase/marketing-ineffective" },
              { title: "提案書作成の効率化", desc: "作成時間を大幅に短縮し、商談準備を効率化。", link: "/usecase/proposal-time" }
            ].map((item, i) => (
              <Link key={i} href={item.link} className="group">
                <Card className="bg-white border border-gray-200 p-6 hover:border-[#1a1a1a] hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-sm font-bold text-[#1a1a1a] flex items-center gap-1">
                    詳しく見る <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      
      <Footer />
    </div>
  );
}
