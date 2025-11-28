import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { MousePointerClick, FileText, ShieldCheck, Users, BarChart3 } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    { 
       id: "web-form",
       icon: <MousePointerClick className="w-8 h-8 text-[#1a1a1a]" />,
       title: "課題入力Webフォーム", 
       subtitle: "顧客の課題を、最短で理解する",
       description: "検討側がWebフォームで課題を入力するだけで、提供側がその課題を即座に理解できます。従来のヒアリングやメールのやり取りを省略し、本質的な課題解決に向けたスタートダッシュを切ることができます。",
       points: [
         "シンプルな入力フォームで、顧客の負担を軽減",
         "選択式の設問で、課題を構造的に把握",
         "入力内容は即座にAIが分析し、提案の準備を開始"
       ]
    },
    { 
       id: "ai-proposal",
       icon: <FileText className="w-8 h-8 text-[#1a1a1a]" />,
       title: "AI自動提案書生成", 
       subtitle: "高品質な提案書を、瞬時に",
       description: "入力された課題をもとに、AIが3-5分で高品質な提案書を自動生成します。過去の膨大な事例や成功パターンを学習したAIが、顧客ごとに最適化された提案を作成します。",
       points: [
         "課題解決に直結する構成と内容を自動生成",
         "業界や業種に合わせたトーン＆マナーの調整",
         "編集可能なフォーマットで、微調整も簡単"
       ]
    },
    { 
       id: "quality-assurance",
       icon: <ShieldCheck className="w-8 h-8 text-[#1a1a1a]" />,
       title: "提案書品質保証", 
       subtitle: "誰が作っても、トップセールスのクオリティ",
       description: "AIが生成する提案書は、一定の品質が保証されています。経験の浅いメンバーでも、トップセールス並みの提案書を作成することが可能です。",
       points: [
         "論理構成の破綻を防ぎ、説得力のある提案を実現",
         "誤字脱字や表記ゆれを自動チェック",
         "エンタープライズ企業にも通用する高い完成度"
       ]
    },
    { 
       id: "skill-gap",
       icon: <Users className="w-8 h-8 text-[#1a1a1a]" />,
       title: "スキル差補完", 
       subtitle: "組織の力を、底上げする",
       description: "提供側の営業メンバーのスキル差を補完し、誰でも高品質な提案書を作成できます。属人化しがちな提案業務を標準化し、組織全体の営業力を底上げします。",
       points: [
         "新人教育のコストと時間を大幅に削減",
         "ナレッジの共有と蓄積を自動化",
         "チーム全体の成約率向上に貢献"
       ]
    },
    { 
       id: "data-driven",
       icon: <BarChart3 className="w-8 h-8 text-[#1a1a1a]" />,
       title: "データドリブン", 
       subtitle: "感覚ではなく、データで勝つ",
       description: "過去の事例や業界知見を活用し、データドリブンな提案を実現します。AIが常に最新のデータを学習し続けるため、提案の精度は使い込むほどに向上します。",
       points: [
         "成功事例に基づいた、確度の高い提案ロジック",
         "市場トレンドや競合情報を踏まえた分析",
         "継続的な学習による、提案精度の自律的な向上"
       ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-[1000px] px-8 relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">
              FEATURES
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1a1a1a]">
              機能
            </h1>
            <div className="w-20 h-1 bg-[#1a1a1a] mx-auto mb-10"></div>
            <p className="text-lg md:text-xl text-[#666] leading-loose font-light tracking-wide">
              ショートカットは、BtoB取引のあらゆるフェーズを<br className="hidden md:block" />
              最適化する機能を備えています。<br className="hidden md:block" />
              AIが複雑なプロセスを自動化し、<br className="hidden md:block" />
              本来の価値創造に集中できる環境を提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Feature Details Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div key={feature.id} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual / Icon Area */}
                <div className="w-full md:w-1/3 sticky top-32">
                  <div className="bg-gray-50 rounded-2xl p-12 flex items-center justify-center aspect-square border border-gray-100 shadow-sm">
                    <div className="bg-white p-6 rounded-full shadow-md">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="text-center mt-6">
                     <div className="text-xs font-bold text-gray-300 tracking-widest uppercase">FEATURE {index + 1}</div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="w-full md:w-2/3 pt-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a1a1a] tracking-tight">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-[#1a1a1a] font-medium mb-8 border-l-4 border-[#1a1a1a] pl-4">
                    {feature.subtitle}
                  </p>
                  
                  <p className="text-[#666] leading-loose mb-10 font-light">
                    {feature.description}
                  </p>

                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <h3 className="text-sm font-bold text-[#1a1a1a] mb-4 uppercase tracking-wider">KEY POINTS</h3>
                    <ul className="space-y-4">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#444]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] flex-shrink-0"></span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto max-w-[800px] px-8 text-center">
          <div className="mb-10">
             <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm mb-8">
                <Zap className="w-8 h-8 text-white" />
             </div>
             <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug tracking-tight">
               ビジネスのスピードを加速させ、<br />
               本質的な成長を実現するための基盤。
             </h2>
             <p className="text-white/70 leading-loose font-light text-lg">
               ショートカットの機能は、単なる効率化ツールではありません。<br />
               組織全体が、迷いなく成果へ向かうための新しいOSです。
             </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
