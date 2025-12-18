"use client";

import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Bot, Workflow, Search, PenTool, Settings, CheckCircle2 } from 'lucide-react';

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
      process: [
        "対話からの知見抽出：日常会話から社員の「経験」や「ノウハウ」を引き出し、AIとの対話だけで記事化する手法を確立",
        "AI対話システムの構築：非ライターでも30〜60分の会話だけで、高品質な記事を作成できる仕組みを実装",
        "無理のない運用設計：執筆業務をゼロにし、会話するだけの負担のないフローで持続可能な運用を実現"
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
      process: [
        "現状把握・診断：業務プロセスを分解し、AIで代替可能な領域と「人が介在すべき価値ある領域」を再定義",
        "戦略策定：マーケティング戦略に基づき、成果を最大化するためのワークフローと体制を設計",
        "基盤構築：ナレッジデータベース、プロンプトチェーン、品質管理フローをフルスクラッチで構築"
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
                <div className="flex flex-col gap-8">
                    
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
                        <h4 className="font-bold text-[#1a1a1a] mb-8 flex items-center gap-3 text-lg tracking-wide">
                            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">→</span>
                            実現プロセス
                        </h4>
                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {caseStudy.process.map((proc, i) => {
                                const [title, desc] = proc.split("：");
                                return (
                                    <div key={i} className="relative group">
                                        <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">STEP {i+1}</div>
                                        <div className="mb-3">
                                            <h5 className="font-bold text-[#1a1a1a] text-lg leading-snug border-l-2 border-black pl-4">
                                                {title}
                                            </h5>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed pl-4">
                                            {desc || proc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

              </div>
            ))}
        </div>
        
      </div>
    </section>
  );
}