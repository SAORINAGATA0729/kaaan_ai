"use client";

import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
        before: "コンテンツ制作月2本 | 利益率30-50%"
      },
      problems: [
        "人手依存による工数負担の大きさ",
        "コンテンツ制作の限界（月2本が限界）",
        "成果指標の伸び悩み（CV数6件、トラフィック17K）"
      ],
      solutions: [
        "ストラテジーから入る",
        "フルスクラッチで仕組みを構築",
        "プロフェッショナルによる伴走"
      ],
      results: [
        {
          label: "利益率改善",
          before: "52.8%",
          after: "76.6%",
          improvement: "約1.4倍"
        },
        {
          label: "CV数成長",
          before: "6件",
          after: "38件",
          improvement: "6倍"
        },
        {
          label: "トラフィック拡大",
          before: "17K",
          after: "81K",
          improvement: "4.8倍"
        }
      ]
    },
    {
      id: 2,
      title: "立ち上げ1年で100万MAU達成、分業と品質管理で月200本の記事制作を実現",
      profile: {
        industry: "マーケティング支援企業（BtoC メディア）",
        team: "新規メディア立ち上げチーム",
        before: "制作体制なし | 激戦領域への後発参入"
      },
      problems: [
        "大手プレイヤーが存在する激戦領域",
        "コンテンツ制作のリソース不足",
        "品質のばらつきと管理コスト"
      ],
      solutions: [
        "ユーザー行動に基づくトレンド分析と地域特化戦略",
        "分業と品質管理の多段階プロセス構築",
        "メンバーの専門性を活かす運用体制整備"
      ],
      results: [
        {
          label: "MAU成長",
          before: "0",
          after: "100万",
          improvement: "1年で達成"
        },
        {
          label: "記事制作数",
          before: "月0本",
          after: "月200本",
          improvement: "安定稼働"
        },
        {
          label: "検索流入",
          before: "圏外",
          after: "上位表示",
          improvement: "ビッグワード"
        }
      ]
    },
    {
      id: 3,
      title: "ステークホルダー巻き込み戦略で8万UUから300万UUへ40倍成長達成",
      profile: {
        industry: "大手BtoB企業",
        team: "オウンドメディアチーム",
        before: "8万UU | 費用対効果に課題"
      },
      problems: [
        "メディアの成長が停滞（8万UUで頭打ち）",
        "費用対効果が見えにくい",
        "社内の協力が得られにくい"
      ],
      solutions: [
        "ステークホルダーを巻き込む編集体制の構築",
        "独自コンテンツの制作フロー整備",
        "収益化とマネタイズ体制の確立"
      ],
      results: [
        {
          label: "UU数成長",
          before: "8万",
          after: "300万",
          improvement: "40倍"
        },
        {
          label: "事業貢献",
          before: "赤字",
          after: "収益化",
          improvement: "マネタイズ確立"
        },
        {
          label: "制作体制",
          before: "外注依存",
          after: "独自制作",
          improvement: "内製化"
        }
      ]
    }
  ];

  return (
    <section className="py-32 bg-[#f9f9f9]">
      <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="text-[#1a1a1a] font-bold tracking-widest text-sm uppercase mb-4 block">Case Studies</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                クライアントとともに<br />創出してきた成果
                </h2>
            </div>
            <div className="hidden md:flex gap-4">
                 <button
                    onClick={scrollLeft}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
                    aria-label="前のケース"
                >
                    <ChevronLeft className="w-6 h-6 text-[#1a1a1a]" />
                </button>
                <button
                    onClick={scrollRight}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
                    aria-label="次のケース"
                >
                    <ChevronRight className="w-6 h-6 text-[#1a1a1a]" />
                </button>
            </div>
        </div>

        <div className="relative -mx-6 md:-mx-8 px-6 md:px-8">
          {/* ケーススタディカード */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto pb-12 scrollbar-hide flex gap-6 md:gap-8 px-4 snap-x snap-mandatory"
          >
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="min-w-[85vw] md:min-w-[700px] bg-white rounded-xl shadow-lg p-8 md:p-12 snap-center border border-gray-100"
              >
                {/* ケース番号とタイトル */}
                <div className="mb-8">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                    CASE {caseStudy.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-tight">
                    {caseStudy.title}
                  </h3>
                </div>

                {/* プロフィール */}
                <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">PROFILE</p>
                  <p className="text-sm md:text-base font-bold text-[#1a1a1a]">{caseStudy.profile.industry}</p>
                  <p className="text-sm text-gray-600 mt-1">{caseStudy.profile.team} | {caseStudy.profile.before}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* 課題 */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                            <span className="text-red-600 text-sm">⚠️</span>
                        </div>
                        <h4 className="text-lg font-bold text-[#1a1a1a]">課題</h4>
                        </div>
                        <ul className="space-y-3 pl-2">
                        {caseStudy.problems.map((problem, idx) => (
                            <li key={idx} className="text-sm md:text-base text-gray-700 flex items-start">
                            <span className="mr-2 text-red-400">•</span>
                            <span>{problem}</span>
                            </li>
                        ))}
                        </ul>
                    </div>

                    {/* 解決策 */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 text-sm">💡</span>
                        </div>
                        <h4 className="text-lg font-bold text-[#1a1a1a]">KAAANのアプローチ</h4>
                        </div>
                        <ul className="space-y-3 pl-2">
                        {caseStudy.solutions.map((solution, idx) => (
                            <li key={idx} className="text-sm md:text-base text-gray-700 flex items-start">
                            <span className="mr-2 text-blue-400">•</span>
                            <span>{solution}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>

                {/* 成果 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 text-sm">📈</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#1a1a1a]">成果</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center relative overflow-hidden group hover:shadow-md transition-shadow">
                        <p className="text-sm font-bold text-gray-500 mb-4">{result.label}</p>
                        
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="text-right">
                                <p className="text-lg font-bold text-gray-400 line-through decoration-gray-400/50">{result.before}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300" />
                            <div className="text-left">
                                <p className="text-2xl font-bold text-[#1a1a1a]">{result.after}</p>
                            </div>
                        </div>

                        <div className="inline-block bg-[#F4E04D] px-3 py-1 rounded-full text-xs font-bold text-[#1a1a1a]">
                            {result.improvement}
                        </div>
                      </div>
                    ))}
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

