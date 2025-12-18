"use client";

import { ArrowRight } from 'lucide-react';

export function CaseStudySection() {
  
  const caseStudies = [
    {
      id: 1,
      title: "AI対話システムで社員をライター化、月2本から30本へ15倍の生産性向上を達成",
      profile: {
        industry: "デジタルマーケ支援企業（BtoB コンサル）",
        team: "マーケ担当チーム"
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
      title: "AI編集部構築により、利益率1.4倍、CV数6倍、トラフィック4.8倍の成果を実現",
      profile: {
        industry: "デジタルマーケ支援企業（BtoB コンサル）",
        team: "マーケ担当3名"
      },
      problems: [
        "人手依存による工数負担が大きく、利益率が30~50%台で低迷",
        "外部編集者依存で、月2本の制作が限界",
        "成果指標の伸び悩み（CV数が月6件程度で頭打ち、トラフィックが17K程度で成長が停滞）",
        "作ることが目的になっていて、成果を追えていない"
      ],
      process: [
        "現状把握・診断：プロジェクト全体のボトルネックを特定し、AI化すべき領域を診断",
        "戦略策定：マーケティング戦略に基づき、成果を最大化するためのワークフローと体制を設計",
        "基盤構築：ナレッジデータベース、プロンプトチェーン、品質管理フローをフルスクラッチで構築"
      ],
      results: [
        "利益率を52.8%から76.6%へ改善（約1.4倍、+23.8ポイント）",
        "CV数を月6件から38件へ成長（6倍）",
        "トラフィックを17Kから81Kへ拡大（4.8倍）",
        "コンテンツ制作を月2本から月30本以上へ拡大（15倍）",
        "人手依存の従来型体制から、AI主導体制へ完全移行し、持続的な成長基盤を構築"
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
            AIと共創しながらどのように解決したのか。
            </p>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 md:p-12 border border-gray-100"
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
                    <p className="text-sm text-gray-500">
                        {caseStudy.profile.team}
                    </p>
                </div>

                {/* Body: Problem vs Result, then Process */}
                <div className="flex flex-col gap-8">
                    
                    {/* Upper Row: Problem vs Result */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Problem Section */}
                        <div className="bg-red-50/50 rounded-xl p-6 border border-red-100 h-full">
                            <h4 className="font-bold text-red-700 mb-6 flex items-center gap-2 text-lg">
                                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">!</span>
                                課題背景
                            </h4>
                            <ul className="space-y-4">
                                {caseStudy.problems.map((prob, i) => (
                                    <li key={i} className="text-sm text-gray-700 leading-relaxed pl-5 relative">
                                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-red-300"></span>
                                        {prob}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Results Section */}
                        <div className="bg-green-50/50 rounded-xl p-6 border border-green-100 h-full">
                            <h4 className="font-bold text-green-700 mb-6 flex items-center gap-2 text-lg">
                                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</span>
                                結果どうなった
                            </h4>
                            <ul className="space-y-4">
                                {caseStudy.results.map((res, i) => (
                                    <li key={i} className="text-sm text-gray-800 font-medium leading-relaxed flex items-start gap-3 bg-white p-3 rounded-lg border border-green-100 shadow-sm">
                                        <span className="text-green-500 text-lg mt-[-2px]">✓</span>
                                        {res}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Lower Row: Process */}
                    <div className="bg-blue-50/30 rounded-xl p-6 border border-blue-50">
                        <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2 text-lg">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">→</span>
                            実現までのプロセス
                        </h4>
                        <div className="grid md:grid-cols-3 gap-6 relative">
                             {/* PCでの横矢印演出（背景装飾として薄く入れるイメージ、またはシンプルにグリッドで並べる） */}
                            {caseStudy.process.map((proc, i) => (
                                <div key={i} className="relative bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
                                    <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">STEP {i+1}</div>
                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{proc}</p>
                                </div>
                            ))}
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
