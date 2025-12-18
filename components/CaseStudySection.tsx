"use client";

import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Bot, Workflow, Search, PenTool, Settings, CheckCircle2, User } from 'lucide-react';

export function CaseStudySection() {
  
  const caseStudies = [
    {
      id: 1,
      title: "「AIとの対話」だけで記事を量産。社員の専門性を最大化する、AI駆動型の編集部構築",
      summary: "社員の「暗黙知」を資産化し、組織全体のコンテンツ力を底上げ",
      profile: {
        industry: "デジタルマーケ支援企業（BtoB コンサル）",
        team: ""
      },
      problems: [
        "外部編集者依存で月2本の制作が限界、専門性が高く学習コストが高い",
        "社員ライター化に過去何度も失敗、業務多忙で執筆時間を確保できない",
        "品質担保と量産の両立が困難（執筆後の確認に時間がかかりボトルネックに）"
      ],
      overallInsight: "多くの企業は「どう書くか」というスキルに注目しがちですが、本質は「書かない」という選択肢をどう設計するかです。社員のコア価値を見極め、AIに任せる部分を大胆に切り替えることこそが、組織を変える第一歩になります。",
      process: [
        {
            title: "「書く」から「話す」へ",
            desc: "執筆スキルに依存せず、日常会話から社員の「暗黙知」を引き出す手法へシフト。"
        },
        {
            title: "「人手」から「AIシステム」へ",
            desc: "専門外のライティング学習を廃止し、AIとの対話だけで完結する仕組みへ移行。"
        },
        {
            title: "「努力」から「仕組み」へ",
            desc: "個人のモチベーションに頼らず、業務フローに組み込むことで持続可能な運用を実現。"
        }
      ],
      results: [
        "月2本から30本以上へ、制作数を15倍に拡大",
        "制作時間を5〜8時間から30分〜1時間に短縮",
        "社員の暗黙知を資産化し、自走する編集部を実現"
      ]
    },
    {
      id: 2,
      title: "AI編集部構築により、半年で利益率1.4倍、CV数6倍、トラフィック4.8倍の成果を実現",
      summary: "人手依存の従来型体制から、AI主導体制へ完全移行し、持続的な成長基盤を構築",
      profile: {
        industry: "BtoB向け商材 事業会社",
        team: ""
      },
      problems: [
        "人手依存による工数負担が大きく、月数本の制作が限界",
        "成果の伸び悩み（CV数・トラフィック共に成長が停滞）",
        "作ることに手一杯で、成果を追えていない"
      ],
      overallInsight: "リソース不足の解決策は「人を増やす」だけではありません。戦略レベルで「やらないこと」を決め、AIというレバレッジを最大限効かせる設計図を描くことで、少人数でも大きな成果を生み出せます。",
      process: [
        {
            title: "「作業」から「戦略」へ",
            desc: "作るだけの作業をやめ、AIで代替すべき領域と人がやるべき領域を再定義。"
        },
        {
            title: "「部分最適」から「全体設計」へ",
            desc: "個別の記事作成ではなく、成果を最大化する全体ワークフローを設計。"
        },
        {
            title: "「属人化」から「基盤構築」へ",
            desc: "人の手癖に頼らず、誰もが高品質を出せるプロンプト基盤をフルスクラッチで構築。"
        }
      ],
      results: [
        "利益率を50%から75%以上へ改善（約1.4倍）",
        "CV数を月6件から38件へ、トラフィックを17Kから81Kへ拡大（4.8倍）",
        "コンテンツ制作を月数本から月50本以上へ拡大（15倍）"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
            CASE STUDY
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            マーケティングの課題を、<br className="md:hidden" />
            AIと共創しながらどのように解決したのか。
            </p>
        </div>

        <div className="flex flex-col gap-16 w-full">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow p-8 md:p-14 border border-gray-100"
              >
                
                {/* Header: Title & Profile */}
                <div className="mb-10 border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1 rounded-full">CASE {caseStudy.id}</span>
                        <p className="text-sm font-bold text-gray-500">{caseStudy.profile.industry}</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-tight mb-4">
                    {caseStudy.title}
                    </h3>
                    {/* Summary */}
                    {(caseStudy as any).summary && (
                        <p className="text-lg text-gray-600 font-bold mb-4 leading-relaxed">
                            {(caseStudy as any).summary}
                        </p>
                    )}
                    {caseStudy.profile.team && (
                        <p className="text-sm text-gray-500">
                            {caseStudy.profile.team}
                        </p>
                    )}
                </div>

                {/* Body: Problem vs Result, then Process */}
                <div className="flex flex-col gap-12">
                    
                    {/* Upper Row: Problem vs Result */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Problem Section */}
                        <div className="bg-[#f5f5f5] rounded-xl p-8 h-full border border-transparent">
                            <h4 className="font-bold text-[#1a1a1a] mb-6 flex items-center gap-3 text-lg tracking-wide">
                                <span className="w-8 h-8 rounded-full bg-[#e0e0e0] text-[#1a1a1a] flex items-center justify-center text-sm font-bold">!</span>
                                課題背景
                            </h4>
                            <ul className="space-y-4">
                                {caseStudy.problems.map((prob, i) => (
                                    <li key={i} className="text-sm md:text-base text-gray-600 leading-relaxed pl-5 relative font-medium">
                                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                        {prob}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Results Section */}
                        <div className="bg-[#1a1a1a] rounded-xl p-8 h-full text-white shadow-lg">
                            <h4 className="font-bold text-white mb-6 flex items-center gap-3 text-lg tracking-wide">
                                <span className="w-8 h-8 rounded-full bg-white text-[#1a1a1a] flex items-center justify-center text-sm font-bold">✓</span>
                                成果
                            </h4>
                            <ul className="space-y-5">
                                {caseStudy.results.map((res, i) => (
                                    <li key={i} className="text-base md:text-lg text-gray-200 font-bold leading-relaxed flex items-start gap-3 border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                                        {/* 数字が含まれる場合、その数字を強調する処理を入れることも可能だが、今回はシンプルにテキストとして表示 */}
                                        {res}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Lower Row: Process */}
                    <div className="pt-8 border-t border-gray-100">
                        <h4 className="font-bold text-[#1a1a1a] mb-10 flex items-center gap-3 text-lg tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">→</span>
                            AI活用の3つのポイント
                        </h4>
                        
                        {/* 3 Columns for Process */}
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
                            {caseStudy.process.map((proc: any, i) => {
                                return (
                                    <div key={i} className="relative group flex flex-col h-full">
                                        <div className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">POINT {i+1}</div>
                                        <div className="mb-6">
                                            <h5 className="font-bold text-[#1a1a1a] text-xl leading-snug border-l-4 border-black pl-4">
                                                {proc.title}
                                            </h5>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed pl-5 font-medium">
                                            {proc.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Overall Insight Block */}
                        {(caseStudy as any).overallInsight && (
                            <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                                {/* 人のアイコン */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                                        <User className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                </div>
                                
                                {/* 吹き出し */}
                                <div className="flex-grow relative bg-gray-50 rounded-xl p-6 md:p-7">
                                    {/* 吹き出しのしっぽ（左側から出る） */}
                                    <div className="absolute left-0 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-gray-50 border-b-[10px] border-b-transparent -translate-x-2"></div>
                                    
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        {(caseStudy as any).overallInsight}
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>

                </div>

              </div>
            ))}
        </div>
        
      </div>
    </section>
  );
}