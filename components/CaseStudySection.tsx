"use client";

import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Users } from 'lucide-react';

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
      title: "利益率1.4倍、CV数6倍の成果を実現。戦略的な仕組み構築による組織変革",
      profile: {
        industry: "デジタルマーケ支援企業（BtoB コンサル）",
        team: "マーケ担当3名",
        info: "コンテンツ制作月2本 | 利益率30-50%"
      },
      problems: [
        "人手依存による工数負担が大きく、制作本数が限界（月2本）",
        "制作に時間がかかり、成果指標（CV数）が伸び悩んでいる",
        "利益率が低く、事業としての効率に課題がある"
      ],
      processes: [
        { title: "戦略設計", desc: "ストラテジーから入り、事業成果に直結するKPIを設計" },
        { title: "仕組み構築", desc: "フルスクラッチで制作フローと仕組みを構築" },
        { title: "伴走支援", desc: "プロフェッショナルによる運用伴走で成果を創出" }
      ],
      results: [
        {
          label: "利益率改善",
          before: "52.8%",
          after: "76.6%",
          unit: "",
          desc: "約1.4倍の改善"
        },
        {
          label: "CV数成長",
          before: "6件",
          after: "38件",
          unit: "",
          desc: "6倍の成長"
        },
        {
          label: "トラフィック",
          before: "17K",
          after: "81K",
          unit: "",
          desc: "4.8倍の拡大"
        }
      ]
    },
    {
      id: 2,
      title: "立ち上げ1年で100万MAU達成、分業と品質管理で月200本の記事制作を実現",
      profile: {
        industry: "マーケティング支援企業（BtoC メディア）",
        team: "新規メディア立ち上げチーム",
        info: "制作体制なし | 激戦領域への後発参入"
      },
      problems: [
        "大手プレイヤーが存在する激戦領域への後発参入",
        "短期間で大量のコンテンツが必要だがリソースが不足",
        "品質のばらつきと管理コストの増大"
      ],
      processes: [
        { title: "戦略設計", desc: "ユーザー行動に基づくトレンド分析と地域特化戦略" },
        { title: "体制構築", desc: "分業と品質管理の多段階プロセスを構築" },
        { title: "運用整備", desc: "メンバーの専門性を活かす運用体制を整備" }
      ],
      results: [
        {
          label: "MAU成長",
          before: "0",
          after: "100万",
          unit: "",
          desc: "1年で達成"
        },
        {
          label: "記事制作数",
          before: "月0本",
          after: "月200本",
          unit: "",
          desc: "安定稼働"
        },
        {
          label: "検索流入",
          before: "圏外",
          after: "上位",
          unit: "表示",
          desc: "ビッグワード獲得"
        }
      ]
    },
    {
      id: 3,
      title: "ステークホルダー巻き込み戦略で8万UUから300万UUへ40倍成長達成",
      profile: {
        industry: "大手BtoB企業",
        team: "オウンドメディアチーム",
        info: "8万UU | 費用対効果に課題"
      },
      problems: [
        "メディアの成長が停滞（8万UUで頭打ち）",
        "費用対効果が見えにくく、社内の協力が得られにくい",
        "制作体制が外注依存で、独自性を出しにくい"
      ],
      processes: [
        { title: "体制構築", desc: "ステークホルダーを巻き込む編集体制の構築" },
        { title: "フロー整備", desc: "独自コンテンツを生み出す制作フロー整備" },
        { title: "収益化", desc: "事業貢献を可視化するマネタイズ体制の確立" }
      ],
      results: [
        {
          label: "UU数成長",
          before: "8万",
          after: "300万",
          unit: "",
          desc: "40倍の成長"
        },
        {
          label: "事業貢献",
          before: "赤字",
          after: "収益化",
          unit: "",
          desc: "マネタイズ確立"
        },
        {
          label: "制作体制",
          before: "外注",
          after: "内製化",
          unit: "",
          desc: "独自制作へ"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1200px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
            CASE STUDY
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            マーケティングの課題を、<br className="md:hidden" />
            プロフェッショナルによる仕組み化でどう解決したのか。
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
        
      </div>
    </section>
  );
}
