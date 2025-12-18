"use client";

import { useRef } from 'react';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Target, Zap, Users, BarChart, Settings, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CaseStudySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };
  
  const caseStudies = [
    {
      id: 1,
      title: "「時間を半分に、成果を倍に」を体現。利益率1.4倍・CV数6倍を実現した組織変革",
      profile: {
        industry: "デジタルマーケ支援企業（BtoB コンサル）",
        team: "マーケ担当3名",
        info: "コンテンツ制作月2本 | 利益率30-50%"
      },
      problems: [
        "制作に追われ、本来注力すべき戦略業務に時間を使えない",
        "制作コストがかさみ、事業の利益率を圧迫している",
        "量は作れても、肝心のCVや売上に繋がっていない"
      ],
      processes: [
        { title: "戦略先行", desc: "事業KPIから逆算し、目的を「利益改善」に設定" },
        { title: "工数圧縮", desc: "プロンプトエンジニアリングで制作工程を50%自動化" },
        { title: "成果追求", desc: "空いた時間を戦略に再投資し、CV最大化へ集中" }
      ],
      results: [
        {
          label: "利益率改善",
          before: "52.8%",
          after: "76.6%",
          unit: "",
          desc: "時間を削減し利益体質へ"
        },
        {
          label: "CV数成長",
          before: "6件",
          after: "38件",
          unit: "",
          desc: "戦略的なキーワード選定"
        },
        {
          label: "トラフィック",
          before: "17K",
          after: "81K",
          unit: "",
          desc: "4.8倍の集客拡大"
        }
      ]
    },
    {
      id: 2,
      title: "編集者の「知見」をAIで拡張。月200本制作と100万MAUを両立するハイブリッド体制",
      profile: {
        industry: "マーケティング支援企業（BtoC メディア）",
        team: "新規メディア立ち上げチーム",
        info: "制作体制なし | 激戦領域への後発参入"
      },
      problems: [
        "後発参入のため、短期間で大量のコンテンツが必要",
        "外部ライター依存では品質管理が難しく、手戻り工数が膨大",
        "社内にノウハウがなく、ゼロから組織を作る必要がある"
      ],
      processes: [
        { title: "プロの設計", desc: "編集者の思考をAIに落とし込み、品質基準を標準化" },
        { title: "分業確立", desc: "AIが「量」を、人が「質」を担う最適分業" },
        { title: "自走支援", desc: "未経験者でも高品質な記事が作れる環境を整備" }
      ],
      results: [
        {
          label: "MAU成長",
          before: "0",
          after: "100万",
          unit: "",
          desc: "1年で垂直立ち上げ"
        },
        {
          label: "記事制作数",
          before: "月0本",
          after: "月200本",
          unit: "",
          desc: "少人数で安定量産"
        },
        {
          label: "検索流入",
          before: "圏外",
          after: "上位",
          unit: "表示",
          desc: "ビッグワードで獲得"
        }
      ]
    },
    {
      id: 3,
      title: "埋もれた社内資産をAIで価値化。コストセンターから「40倍成長の収益源」へ",
      profile: {
        industry: "大手BtoB企業",
        team: "オウンドメディアチーム",
        info: "8万UU | 費用対効果に課題"
      },
      problems: [
        "専門知識を持つ社員は忙しく、情報発信に協力してもらえない",
        "外注記事では専門性が低く、修正指示に膨大な時間がかかる",
        "メディアのROIが見えず、投資判断ができない"
      ],
      processes: [
        { title: "資産活用", desc: "議事録や資料をAIで記事化し、社員負担ゼロへ" },
        { title: "プロの視点", desc: "マーケターが「読まれる記事」へ変換する方針策定" },
        { title: "収益化", desc: "リード獲得・売上貢献までの導線を設計・実装" }
      ],
      results: [
        {
          label: "UU数成長",
          before: "8万",
          after: "300万",
          unit: "",
          desc: "業界No.1の影響力"
        },
        {
          label: "事業貢献",
          before: "赤字",
          after: "収益化",
          unit: "",
          desc: "事業の柱として確立"
        },
        {
          label: "制作体制",
          before: "外注",
          after: "内製化",
          unit: "",
          desc: "AI活用でコスト削減"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1200px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            KAAAN導入実績
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            マーケティングのプロがAIを実装し、<br className="md:hidden" />
            <span className="font-bold text-[#1a1a1a]">「時間を半分に、成果を倍に」</span>を実現した成功事例。
            </p>
        </div>

        <div className="relative w-full group">
            {/* Navigation Buttons */}
            <button
                onClick={scrollLeft}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-[#1a1a1a] shadow-lg flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all border border-gray-200"
                aria-label="前のケース"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white text-[#1a1a1a] shadow-lg flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all border border-gray-200"
                aria-label="次のケース"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto pb-12 pt-4 scrollbar-hide flex gap-6 px-4 md:px-[10vw] snap-x snap-mandatory w-full"
          >
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="min-w-[90vw] md:min-w-[800px] bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 md:p-10 snap-center relative border border-gray-100 flex flex-col shrink-0"
              >
                
                {/* Header: Title & Profile */}
                <div className="mb-8 border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1 rounded-full">CASE {caseStudy.id}</span>
                        <p className="text-sm font-bold text-gray-500">{caseStudy.profile.industry}</p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-tight mb-4">
                    {caseStudy.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {caseStudy.profile.team} <span className="text-gray-300">|</span> {caseStudy.profile.info}
                    </p>
                </div>

                {/* Body: Problem -> Solution -> Result */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 flex-grow">
                    
                    {/* Left Column: Problem & Process */}
                    <div className="flex flex-col gap-8">
                        {/* Problem */}
                        <div>
                            <h4 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">!</span>
                                課題
                            </h4>
                            <ul className="space-y-3">
                                {caseStudy.problems.map((prob, i) => (
                                    <li key={i} className="text-sm text-gray-600 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                                        {prob}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Process (KAAAN's Approach) */}
                        <div>
                            <h4 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                                KAAANのアプローチ
                            </h4>
                            <div className="space-y-4">
                                {caseStudy.processes.map((proc, i) => (
                                    <div key={i} className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#1a1a1a] mb-1">{proc.title}</p>
                                            <p className="text-xs text-gray-600 leading-relaxed">{proc.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Results */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col justify-center">
                        <h4 className="font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">⚡</span>
                            導入成果
                        </h4>
                        
                        <div className="space-y-6">
                            {caseStudy.results.map((res, i) => (
                                <div key={i} className="relative">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-bold text-gray-600">{res.label}</span>
                                        <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">{res.desc}</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                        <div className="text-right w-1/3">
                                            <p className="text-sm text-gray-400 font-medium line-through">{res.before}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                                        <div className="text-left w-1/2">
                                            <p className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                                                {res.after}<span className="text-sm font-medium ml-1">{res.unit}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <Button asChild size="lg" className="h-16 px-12 rounded-full text-lg font-bold bg-[#1a1a1a] text-white hover:bg-black hover:scale-105 transition-all shadow-xl">
              <Link href="/contact/service?service=ai">
                実績について詳しく聞く
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
