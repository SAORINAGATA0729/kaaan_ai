"use client";

import { useRef } from 'react';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
      title: "AI編集部構築により、利益率1.4倍、CV数6倍の成果を実現",
      profile: {
        industry: "デジタルマーケ支援企業（BtoB コンサル）",
        team: "マーケ担当3名",
        info: "コンテンツ制作月2本 | 利益率30-50%"
      },
      problem_text: "人手依存で月2本が限界。成果指標も伸び悩み（CV数6件）",
      results: [
        {
          label: "利益率改善",
          before: "52.8%",
          after: "76.6%",
          unit: "",
          highlight: true
        },
        {
          label: "CV数成長",
          before: "6件",
          after: "38件",
          unit: "",
          highlight: true
        },
        {
          label: "トラフィック拡大",
          before: "17K",
          after: "81K",
          unit: "",
          highlight: true
        }
      ]
    },
    {
      id: 2,
      title: "AIと人の協業体制で月200本の記事制作、1年で100万MAU達成",
      profile: {
        industry: "マーケティング支援企業（BtoC メディア）",
        team: "新規メディア立ち上げチーム",
        info: "制作体制なし | 激戦領域への後発参入"
      },
      problem_text: "激戦領域での後発参入のため大量の高品質コンテンツが必要だが、リソース不足",
      results: [
        {
          label: "MAU成長",
          before: "0",
          after: "100万",
          unit: "",
          highlight: true
        },
        {
          label: "記事制作数",
          before: "月0本",
          after: "月200本",
          unit: "",
          highlight: true
        },
        {
          label: "検索流入",
          before: "圏外",
          after: "上位",
          unit: "表示",
          highlight: true
        }
      ]
    },
    {
      id: 3,
      title: "社内ナレッジをAIで資産化し、8万UUから300万UUへ40倍成長",
      profile: {
        industry: "大手BtoB企業",
        team: "オウンドメディアチーム",
        info: "8万UU | 費用対効果に課題"
      },
      problem_text: "社内の専門知識や議事録のコンテンツ化に工数が割けず、メディア成長が停滞",
      results: [
        {
          label: "UU数成長",
          before: "8万",
          after: "300万",
          unit: "",
          highlight: true
        },
        {
          label: "事業貢献",
          before: "赤字",
          after: "収益化",
          unit: "",
          highlight: true
        },
        {
          label: "制作体制",
          before: "外注依存",
          after: "内製化",
          unit: "",
          highlight: true
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#f3f5f8] relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-10 right-0 pointer-events-none select-none opacity-5">
            <span className="text-[200px] font-bold leading-none tracking-tighter">CASE</span>
        </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px] text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            KAAAN導入実績
            </h2>
            <p className="text-blue-600 font-bold text-lg">
            AI編集部構築・運用支援の<span className="text-blue-600">成功事例</span>
            </p>
        </div>

        <div className="relative w-full group">
            {/* Navigation Buttons (Left/Right Overlay) */}
            <button
                onClick={scrollLeft}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/90 text-[#1a1a1a] shadow-xl flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all border border-gray-100 backdrop-blur-sm"
                aria-label="前のケース"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/90 text-[#1a1a1a] shadow-xl flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all border border-gray-100 backdrop-blur-sm"
                aria-label="次のケース"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto pb-12 pt-4 scrollbar-hide flex gap-6 px-4 md:px-[10vw] snap-x snap-mandatory w-full"
          >
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="min-w-[90vw] md:min-w-[800px] bg-white rounded-xl shadow-xl p-8 md:p-10 snap-center relative border-t-4 border-[#1a1a1a] shrink-0"
              >
                {/* Background Watermark inside card */}
                 <div className="absolute top-4 right-8 text-gray-100 font-bold text-6xl md:text-8xl select-none pointer-events-none opacity-40">
                    CASE {caseStudy.id}
                 </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-tight mb-8 pr-12 relative z-10">
                  {caseStudy.title}
                </h3>

                <hr className="border-gray-200 mb-8" />

                {/* Profile & Problem Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
                    {/* Profile */}
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">PROFILE</p>
                        <p className="text-base font-bold text-[#1a1a1a] mb-2">{caseStudy.profile.industry}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {caseStudy.profile.team}
                            <span className="mx-2 text-gray-300">|</span>
                            {caseStudy.profile.info}
                        </p>
                    </div>

                    {/* Problem */}
                    <div className="bg-gray-50 p-4 rounded-lg flex gap-4 items-start">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                             <span className="text-white text-xs font-bold">課題</span>
                        </div>
                        <p className="text-sm font-medium text-[#1a1a1a] leading-relaxed pt-1">
                            {caseStudy.problem_text}
                        </p>
                    </div>
                </div>

                {/* After Section */}
                <div className="mt-8">
                    <h4 className="text-lg font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                        After with KAAAN
                        <span className="text-sm font-normal text-gray-500">（導入成果）</span>
                    </h4>

                    <div className="border border-gray-200 rounded-lg p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-gray-200">
                            {caseStudy.results.map((result, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
                                    <p className="text-sm font-bold text-gray-600 mb-4">{result.label}</p>
                                    
                                    <div className="space-y-2">
                                        <p className="text-xl font-bold text-gray-400 line-through decoration-gray-400/50">
                                            {result.before}
                                        </p>
                                        <div className="flex justify-center">
                                            <ArrowDown className="w-5 h-5 text-gray-400 animate-bounce" />
                                        </div>
                                        <p className="text-3xl md:text-4xl font-bold text-blue-600">
                                            {result.after}
                                            <span className="text-sm ml-1 text-gray-600 font-bold">{result.unit}</span>
                                        </p>
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
        
        <div className="mt-8 text-center">
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
