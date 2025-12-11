"use client";

// Ver: 2024-12-09 Final Structure based on "00_LP構成シート.md"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LPHeader } from "@/components/LPHeader";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight, 
  Target, 
  Settings, 
  Search,
  Zap,
  RefreshCw,
  Users,
  BarChart,
  Award,
  MessageSquareQuote,
  Database,
  PenTool,
  TrendingUp,
  X,
  Check,
  FlaskConical,
  Compass,
  Lock,
  Flag,
  CircleDollarSign
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-gray-200">
      <LPHeader />

      {/* 1. Hero Section - Impact & Expectation */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="max-w-6xl">
            <div className="inline-block mb-8">
              <span className="text-[13px] tracking-[0.25em] uppercase font-bold border-b-2 border-black pb-2">
                導入でなく、成果を倍にする。
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-10">
              <span className="block">AI編集部支援サービス</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1a1a1a] max-w-2xl leading-relaxed mb-12 font-medium">
              マーケティングのプロフェッショナルが、AIを武器に成果を出す編集部へと構築。自走できるチームへと導きます。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 rounded-full text-base font-bold bg-[#1a1a1a] text-white hover:bg-black hover:scale-105 transition-all shadow-xl">
                <Link href="/contact/service?service=ai">
                  案件相談・お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-bold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-gray-50 bg-transparent transition-all">
                <Link href="/download/ai-editing">
                  サービス紹介資料
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section - Issues & Empathy */}
      <section id="problem" className="py-32 bg-[#f9f9f9] border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              やりたい施策は山積み。<br className="md:hidden" />
              でも、リソースは限界。
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "量を増やすと品質が落ち、品質にこだわると数が作れない",
                desc: "コンテンツを増やそうとすれば品質が落ち、品質にこだわれば数が作れない。「もっと発信したいのに、クオリティチェックだけで日が暮れる」",
                icon: Target
              },
              {
                title: "外注依存で、社内にノウハウが残らない",
                desc: "制作会社やライターに頼りきりで、社内にナレッジが蓄積されない。修正指示のラリーで消耗し、コストだけが嵩んでいく",
                icon: RefreshCw
              },
              {
                title: "「あの人しか書けない」属人化で、チーム全体が底上げできない",
                desc: "「あの人しか書けない」「あの人しか分からない」業務が多すぎる。人が増えても生産性が上がらず、優秀なメンバーがルーチンワークに忙殺される",
                icon: Lock
              },
              {
                title: "増え続けるチャネルと業務で、全てが中途半端になってしまう",
                desc: "SEO、SNS、メルマガ、動画、ホワイトペーパー... 媒体は増えるのに、担当者は増えない。「1人で3人分の動き」を求められる限界状態",
                icon: Zap
              },
              {
                title: "レビュー・承認フローのボトルネック",
                desc: "制作は早くなったが、レビュー・承認に時間がかかる。ボトルネックがレビュー工程に移り、結局公開数は変わらない",
                icon: Settings
              },
              {
                title: "作ることが目的になっていて、成果を追えていない",
                desc: "コンテンツを増やすことに必死で、リード獲得やCVにつながっているか見えていない。リソースも足りないし品質も担保しないといけない。でも成果指標が曖昧で、何を優先すべきかわからない",
                icon: BarChart
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border-l-4 border-gray-300 hover:border-black transition-colors shadow-sm group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-yellow-300 transition-colors shrink-0">
                    <item.icon className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution Section - Concept & Logic */}
      <section id="solution" className="py-32 bg-white relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-[1200px]">
          {/* Title & Lead */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-[#1a1a1a]">
              AIを活用して編集部の課題を解決。<br />
              マーケティングを一気に加速させる
            </h2>
            <p className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-12">
              KAAANのAI編集部構築支援サービス
            </p>
            <div className="max-w-4xl mx-auto text-left space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="font-bold text-xl text-[#1a1a1a]">
                「AIのプロ」ではない。マーケティングのプロが作る仕組み
              </p>
              <p>
                私たちは<strong>マーケティングのプロ</strong>であって、AIの専門家ではありません。
              </p>
              <p>
                しかし、<strong>プロだからこそ</strong>、クライアントの成果を最大化できる「最高の道具（AI）」を、「専門外だから」と見過ごすわけにはいきません。
              </p>
              <p>
                マーケティングの実務を知り尽くしたプロフェッショナルとして、AIを活用しながら、実務に直結する成果を出す編集部の構築を支援します。
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>量だけでなく、品質も担保する仕組みを構築</li>
                <li>外注依存・属人化を解消し、内製化できる体制を実現</li>
                <li>ボトルネックを解消し、「公開できる量」を増やす</li>
                <li>作ることが目的ではなく、成果を最大化するチームに</li>
              </ul>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-[#f9f9f9] p-8 md:p-12 mb-20 max-w-[1000px] mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#1a1a1a]">一般的なAIツール導入とKAAANの違い</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-4 font-bold text-[#1a1a1a]"></th>
                    <th className="text-left py-4 px-4 font-bold text-gray-600">一般的なAIツール導入</th>
                    <th className="text-left py-4 px-4 font-bold text-[#1a1a1a]">KAAANのAI編集部構築支援</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">ゴール</td>
                    <td className="py-4 px-4 text-gray-600">導入完了・生産性向上</td>
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">自走化・プロジェクトの成果</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">焦点</td>
                    <td className="py-4 px-4 text-gray-600">作れる量を増やす</td>
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">公開できる量を増やす</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">範囲</td>
                    <td className="py-4 px-4 text-gray-600">制作工程のみAI化</td>
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">レビュー・品質管理もAI化</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">成果物</td>
                    <td className="py-4 px-4 text-gray-600">ツール・知識</td>
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">動く仕組み・基盤</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">サポート</td>
                    <td className="py-4 px-4 text-gray-600">導入時のみ</td>
                    <td className="py-4 px-4 font-bold text-[#1a1a1a]">継続的な伴走</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 提供するもの */}
          <div className="mb-20 max-w-[1000px] mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#1a1a1a]">提供するもの</h3>
            <div className="space-y-8">
              {[
                {
                  title: "1. インプットデータ基盤構築",
                  items: [
                    "Notion / Google Drive をベースにしたナレッジ管理基盤の構築（組織全体で使えるデータ蓄積の仕組み）",
                    "過去に制作した記事・資料、社内打ち合わせの録画データ・議事録など、あらゆる情報の格納",
                    "蓄積したデータをAIが情報を引き出しやすいようにクレンジング・構造化"
                  ]
                },
                {
                  title: "2. マーケティングコミュニケーション設計",
                  items: [
                    "インプットデータを元に、ペルソナ・カスタマージャーニーを再設計",
                    "コミュニケーション設計に基づくマーケティング戦略の策定",
                    "AIが参照できる形で構造化し、コンテンツ作成の基盤を構築"
                  ]
                },
                {
                  title: "3. プロンプト構築",
                  items: [
                    "企画→構成→執筆→編集の一連の制作フローを自動化するプロンプトチェーンの作成",
                    "インプットデータとマーケティングコミュニケーション設計の基盤を活用したプロンプト設計"
                  ]
                },
                {
                  title: "4. 品質管理フロー構築",
                  items: [
                    "ファクトチェック、ハウスルールを守る仕組みの構築"
                  ]
                },
                {
                  title: "5. 必要な機能・ツール開発",
                  items: [
                    "プロジェクトに必要なカスタムツールや自動化ワークフローの構築",
                    "担当コンサルタントがAIでシステム開発ができるため、課題に応じて必要なツールを開発・提供"
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border-l-4 border-black p-6 shadow-sm">
                  <h4 className="font-bold text-lg mb-4 text-[#1a1a1a]">{item.title}</h4>
                  <ul className="space-y-2 text-gray-700">
                    {item.items.map((subItem, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 実際に納品されるもの */}
          <div className="mb-20 max-w-[1000px] mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#1a1a1a]">実際に納品されるもの</h3>
            <div className="space-y-6">
              {[
                {
                  title: "カンバライティングの仕組み",
                  desc: "誰でも簡単にAIと対話するだけでコンテンツ制作が完了する仕組み。あなたのブランドの「声」を学習した専用のAIが、企画出しから執筆、校正まで一連の流れを自動化するプロンプトのセット"
                },
                {
                  title: "品質管理基準書",
                  desc: "AIが出力したコンテンツを、人間がどこをどうチェックすべきかを定義したマニュアル"
                },
                {
                  title: "業務フロー図・マニュアル",
                  desc: "「誰が」「いつ」「どのツールを」使うのか。属人化を防ぎ、新人が入ってもすぐに自走できるための業務設計図"
                }
              ].map((item, i) => (
                <div key={i} className="bg-[#f9f9f9] p-6 border border-gray-200">
                  <h4 className="font-bold text-lg mb-3 text-[#1a1a1a]">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 使用するツール */}
          <div className="mb-20 max-w-[1000px] mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#1a1a1a]">使用するツール</h3>
            <div className="space-y-6">
              {[
                {
                  title: "AIツール",
                  desc: "主に「Cursor」などのAIエディタや、Claude、Geminiなどの最新モデルを活用し、業務プロセス自体を変革する環境を構築します。"
                },
                {
                  title: "ナレッジ管理",
                  desc: "Notion、Google Drive 組織全体で使えるデータ蓄積の仕組みとして構築します。"
                },
                {
                  title: "自動化ツール",
                  desc: "n8n、Zapier など プロジェクトに必要な自動化ワークフローを構築します。"
                },
                {
                  title: "その他",
                  desc: "プロジェクトに応じて必要なカスタムツールを開発"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border-l-4 border-gray-300 p-6">
                  <h4 className="font-bold text-lg mb-2 text-[#1a1a1a]">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Feature Section (Why KAAAN) */}
      <section id="authority" className="py-32 bg-[#f9f9f9] border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              KAAANが選ばれる、<br />
              3つの理由。
            </h2>
          </div>

          <div className="space-y-24 mb-32">
            {/* Reason 1: Right Image, Left Text (Standard) */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="w-10 h-10 text-black stroke-1" />
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Reason 01</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  AI活用でなく、事業成長へのコミット
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  KAAANが目指すのは、単なる「作業の効率化」ではありません。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  マーケティングの成果を最大化し、
                  <span className="font-bold text-black border-b border-yellow-300">「事業成果の最大化」を実現すること</span>。
                  そのために必要なチーム構築とプロセス変革に、徹底的にコミットします。
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 bg-gray-100 aspect-square md:aspect-[4/3] relative overflow-hidden group">
                 {/* Placeholder for Image */}
                 <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-500">
                    <Zap className="w-32 h-32 text-gray-400 opacity-20" />
                 </div>
                 <div className="absolute inset-0 border-2 border-black/5 m-4"></div>
              </div>
            </div>

            {/* Reason 2: Left Image, Right Text (Reverse) */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
               <div className="w-full md:w-1/2 order-1 bg-gray-100 aspect-square md:aspect-[4/3] relative overflow-hidden group">
                 {/* Placeholder for Image */}
                 <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-500">
                    <Users className="w-32 h-32 text-gray-400 opacity-20" />
                 </div>
                 <div className="absolute inset-0 border-2 border-black/5 m-4"></div>
              </div>
              <div className="w-full md:w-1/2 order-2">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-10 h-10 text-black stroke-1" />
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Reason 02</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  マーケティングのプロフェッショナルによる伴走
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  数々の事業を成長させてきたマーケティングのプロフェッショナルが参画。
                  ツール導入で終わらせず、<span className="font-bold text-black border-b border-yellow-300">「事業成長」というゴールまで伴走します。</span>
                </p>
                
                <div className="bg-white border-l-4 border-black p-6 shadow-sm">
                  <p className="font-bold mb-4 text-sm text-gray-400 uppercase tracking-widest">主要実績</p>
                  <ul className="space-y-3 text-base text-gray-700 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      市場とブランドをつなぐコミュニケーション設計
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      データドリブンな集客施策の最適化と運用
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      サイトグロースを通じた継続的な事業成長の実現
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      クライアント経営層と伴走するプロジェクト推進
                    </li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-4 text-right">※一部抜粋して掲載</p>
                </div>
              </div>
            </div>

            {/* Reason 3: Right Image, Left Text (Standard) */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <FlaskConical className="w-10 h-10 text-black stroke-1" />
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Reason 03</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  自社での実践と実証
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  KAAANが提供するノウハウは、すべて自社の成長のために開発・実証されたものです。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  机上の空論ではなく、<span className="font-bold text-black border-b border-yellow-300">私たち自身がこの「AI編集部」で成果を出している</span>からこそ、
                  生きた仕組みと、再現性のあるメソッドを提供できるのです。
                </p>
                <div className="bg-white border-l-4 border-black p-6 shadow-sm">
                  <p className="font-bold mb-4 text-sm text-gray-400 uppercase tracking-widest">KAAANの取り組み</p>
                  <ul className="space-y-3 text-base text-gray-700 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      「全員が月1回、新ツールや手法を発表する」社内文化
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      全メンバーが「Cursor」を活用し、非エンジニアでもAIと共創してシステムを構築
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      自社サイトを実験場とした、継続的な仮説検証とアップデート
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 bg-gray-100 aspect-square md:aspect-[4/3] relative overflow-hidden group">
                 {/* Placeholder for Image */}
                 <div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-500">
                    <FlaskConical className="w-32 h-32 text-gray-400 opacity-20" />
                 </div>
                 <div className="absolute inset-0 border-2 border-black/5 m-4"></div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white p-8 md:p-12 border border-gray-200 rounded-xl relative">
            <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
              <MessageSquareQuote className="w-8 h-8 text-[#1a1a1a]" />
              <h3 className="text-2xl font-bold">支援実績・お客様の声</h3>
            </div>
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
               <p className="text-xs text-gray-400">※一部抜粋して掲載</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { text: "導入から3ヶ月でリード獲得数が200%達成。マーケティングの成果を最大化する方法がわかった", attr: "BtoBサービス企業 経営企画室長" },
                { text: "コンテンツマーケティングの成果が明確になり、CV数が前年比150%に。作ることが目的ではなく、成果を追える体制になった", attr: "SaaS企業 マーケティング責任者" },
                { text: "マーケ部門立ち上げから半年で、月間リード獲得数が目標の120%を達成。ゼロから始めたのに、これほど早く成果が出るとは思わなかった", attr: "中堅BtoB企業 マーケティング責任者" },
                { text: "外注費を半分に削減しながら、リード獲得数は1.5倍に。内製化できたことで、コストパフォーマンスが劇的に改善した", attr: "Webメディア 編集長" },
                { text: "社内の議事録やナレッジをコンテンツ化したことで、認知拡大につながり、問い合わせが3倍に増加", attr: "コンサルティング企業 マネージャー" },
                { text: "マーケティングの成果指標が明確になり、何を優先すべきかがわかるようになった。結果として、売上に直結する施策に集中できるようになった", attr: "IT企業 代表" },
                { text: "AIを活用したコンテンツ戦略により、ブランド認知が向上し、採用応募数が前年比180%に。採用広報の成果が明確になった", attr: "スタートアップ 人事責任者" },
                { text: "プロと一緒に進めることで、マーケティングの成果を最大化する方法がわかった。今では事業成長の重要な武器になっている", attr: "EC事業 責任者" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute top-6 left-4 text-4xl text-gray-200 font-serif leading-none">"</div>
                  <p className="text-sm font-bold text-gray-800 mb-4 relative z-10 pt-2 leading-relaxed">
                    {item.text}
                  </p>
                  <p className="text-xs text-gray-500 font-medium border-t border-gray-200 pt-3">
                    {item.attr}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Section - Timeline */}
      <section id="flow" className="py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">
            プロジェクトの進め方
          </h2>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0 space-y-12">
            {[
              { step: "01", title: "現状把握・診断", sub: "Phase 1", desc: "プロジェクト全体のボトルネックを特定（制作だけでなく、レビュー・承認・公開フローも含めて）。現状の制作フローを可視化し、マーケティングの成果を最大化するために、どこをAI化すべきかを診断" },
              { step: "02", title: "マーケティング戦略策定・プロジェクト設計", sub: "Phase 2", desc: "ボトルネックに合わせた最適な生産量を設計（個人の生産性向上ではなく、マーケティングの成果を最大化する設計）。AI前提のコンテンツ戦略、新しいワークフロー、必要なツールスタックを設計" },
              { step: "03", title: "AIシステム構築", sub: "Phase 3", desc: "レビュー・品質管理もAI化（制作だけでなく、チェック工程もスケールさせる）。実際に運用可能なプロンプトチェーン、データベース、品質チェックフローを構築し、納品" },
              { step: "04", title: "レクチャー・チューニング", sub: "Phase 4", desc: "構築したシステムを実際の業務で使いこなせるよう、ハンズオンワークショップと実案件での並走を通じてサポート。マーケティングの成果を最大化するために、プロンプトやワークフローを継続的にチューニング・最適化" },
              { step: "05", title: "自走化", sub: "Phase 5", desc: "完全な内製化を確認し、プロジェクトは完了。以降は対等なパートナーとして、必要に応じてナレッジを共有" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-start md:gap-12 relative pl-12 md:pl-0 group">
                {/* Number & Border (Desktop) */}
                <div className="hidden md:block w-32 shrink-0 text-right sticky top-32">
                  <span className="text-6xl font-bold text-gray-200 group-hover:text-black transition-colors leading-none block">{item.step}</span>
                </div>

                {/* Mobile Marker */}
                <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-black md:hidden" />
                
                {/* Content */}
                <div className="md:pt-2 border-l-0 md:border-l-2 md:border-gray-200 md:pl-12 md:pb-12 md:group-last:border-l-0 md:group-last:pb-0 relative transition-all duration-300">
                   {/* Desktop Dot */}
                   <div className="hidden md:block absolute -left-[7px] top-3 w-3 h-3 rounded-full bg-gray-300 group-hover:bg-black transition-colors" />

                   <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                     <span className="md:hidden text-gray-300 font-bold text-xl">{item.step}</span>
                     {item.title}
                     <span className="text-xs font-bold text-white bg-black px-2 py-1 ml-2 rounded-sm">{item.sub}</span>
                   </h3>
                   <p className="text-lg text-gray-600 leading-relaxed">
                     {item.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 bg-white border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[800px]">
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">
            よくある質問
          </h2>
          <div className="space-y-16">
            {[
              {
                q: "どのくらいの期間でAI編集部を構築できますか？",
                a: "企業の状況によりますが、構築から1.5ヶ月で基盤完成、2-3ヶ月で自走体制の確立を目指します。リード獲得やCV数などの成果指標は、基盤完成後から徐々に向上していきます。"
              },
              {
                q: "AIリテラシーが低く、使いこなせるか不安です。",
                a: "問題ありません。マーケティングのプロフェッショナルが、目的達成の手段としてAIをどう活用すべきかを設計し、実務で使いこなせるようになるまで伴走します。"
              },
              {
                q: "マーケ部門を立ち上げたばかりですが、相談は可能ですか？",
                a: "はい、対応可能です。むしろ、ゼロから始める場合こそ、最初からAIネイティブな体制を構築することで、効率的に成果を出せます。マーケティングのプロフェッショナルが、戦略設計から実務まで一貫して伴走します。"
              },
              {
                q: "すでに導入しているAIツールがあるのですが、連携は可能ですか？",
                a: "はい、可能です。ただしツールありきではなく、「事業成果を出すために何が最適か」という視点で戦略を設計します。既存ツールを活かすべきか、より適した構成に見直すべきかを含めて精査・提案します。"
              },
              {
                q: "社内のセキュリティ規定が厳しいですが対応できますか？",
                a: "はい、可能です。Cursorをベースとした編集部の構築を支援するため、貴社のセキュリティポリシーによっては対応が難しい場合もございます。その際は、情報システム部との連携や、最適なパートナーの紹介を含めてご提案いたしますので、一度直接ご相談ください。"
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-5">
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-bold leading-none shrink-0 font-serif mt-1">Q</span>
                  <h3 className="text-lg md:text-xl font-bold leading-relaxed">
                    {item.q}
                  </h3>
                </div>
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-bold leading-none shrink-0 font-serif mt-1">A</span>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA - Impact */}
      <section className="py-20 bg-[#1a1a1a] text-white text-center">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            まずは、現状の課題を<br />
            お聞かせください
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-medium">
            プロフェッショナルが伴走し、事業成長につながる「AI編集部」を構築します。
          </p>
          <p className="text-sm text-gray-500 mb-10">
            ※ 月間の対応社数には限りがあります。お早めにご相談ください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="h-16 px-12 rounded-full text-lg font-bold bg-white text-[#1a1a1a] hover:bg-gray-200 hover:scale-105 transition-all shadow-2xl">
              <Link href="/contact/service?service=ai">
                案件相談・お問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 rounded-full text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] bg-transparent">
              <Link href="/download/ai-editing">
                サービス紹介資料
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
