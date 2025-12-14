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
      <section className="relative pt-20 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="max-w-6xl">
            <p className="text-base md:text-lg text-gray-600 uppercase tracking-widest font-bold mb-4">
              施策にかかる時間を半分に。成果を倍にすることから始める。
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
              <span className="block">AI編集部構築支援サービス</span>
            </h1>

            <p className="text-lg md:text-xl text-[#1a1a1a] max-w-2xl leading-relaxed mb-10 font-medium">
              マーケティングのプロフェッショナルが、<br />
              AIを武器に成果を出す編集部へと構築。<br />
              自走できるチームへと導きます。
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
              成果を出したい。<br className="md:hidden" />
              でも、リソースは限界。
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl group h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4 min-h-[5rem]">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-yellow-300 transition-colors shrink-0 mt-1">
                    <item.icon className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg leading-tight pt-1">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow min-h-[4.5rem]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution Section - Concept & Logic */}
      <section id="solution" className="py-24 md:py-32 bg-white relative scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          
          {/* Title Area */}
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#1a1a1a]">
              マーケティング戦略から、施策の実行まで。<br className="hidden md:block" />
              AIを武器に、成果を加速させる組織へ。
            </h2>
            <p className="text-lg md:text-xl font-medium text-gray-500 mb-12">
              KAAANのAI編集部構築支援サービス
            </p>
            
            {/* 4 Keywords Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
              {[
                { text: "量と品質の両立", icon: Target },
                { text: "内製化・脱属人化", icon: Users },
                { text: "ボトルネック解消", icon: Zap },
                { text: "成果最大化チーム", icon: TrendingUp }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-bold text-sm text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Content - Unified Box Layout */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 mb-24">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="lg:w-5/12 sticky top-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8">
                  「AIのプロ」<br />
                  ではない。<br />
                  <span className="text-gray-400">マーケティングのプロが<br />作る仕組み。</span>
                </h3>
              </div>

              <div className="lg:w-7/12">
                <div className="space-y-8 text-lg leading-relaxed text-gray-700 mb-16">
                  <p>
                    私たちは<strong className="text-black border-b border-gray-300">マーケティングのプロ</strong>であって、AIの専門家ではありません。
                  </p>
                  <p>
                    しかし、プロだからこそ、クライアントの成果を最大化できる「最高の道具（AI）」を、「専門外だから」と見過ごすわけにはいきません。
                  </p>
                  <p>
                    マーケティングの実務を知り尽くしたプロフェッショナルとして、
                    AIを活用しながら、実務に直結する成果を出す編集部の構築を支援します。
                  </p>
                </div>

                {/* Approach Grid */}
                <div className="border-t border-gray-200 pt-10">
                  <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-10">Our Approach</p>
                  <div className="space-y-12">
                    {[
                      { 
                        step: "01", 
                        title: "現状を把握", 
                        desc: "プロジェクト全体のボトルネックを特定" 
                      },
                      { 
                        step: "02", 
                        title: "戦略から入る", 
                        desc: "マーケティング戦略を明確にし、成果を最大化する設計" 
                      },
                      { 
                        step: "03", 
                        title: "仕組みを構築", 
                        desc: "成果を伸ばし、プロジェクトチームの時間を削減する仕組みをフルスクラッチで構築" 
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                        <span className="text-2xl font-bold text-gray-300 font-mono pt-1 group-hover:text-black transition-colors">
                          {item.step}
                        </span>
                        <div>
                          <h5 className="text-xl font-bold text-black mb-2">{item.title}</h5>
                          <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table (Visual) */}
          <div className="mb-32">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#1a1a1a]">一般的なAIツール導入とKAAANの違い</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              {/* Left: Common */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 opacity-80">
                <div className="text-center mb-8 pb-6 border-b border-gray-200">
                   <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Common Case</p>
                   <h4 className="text-xl font-bold text-gray-700">一般的なAIツール導入</h4>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <X className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-sm mb-1">導入完了・生産性向上</p>
                      <p className="text-xs text-gray-500">ゴールが「導入」になりがち</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <X className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-sm mb-1">作れる量を増やす</p>
                      <p className="text-xs text-gray-500">品質や管理は置き去り</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <X className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-sm mb-1">制作工程のみAI化</p>
                      <p className="text-xs text-gray-500">前後工程がボトルネックに</p>
                    </div>
                  </li>
                   <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <X className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-sm mb-1">ツール・知識の提供</p>
                      <p className="text-xs text-gray-500">使いこなせるかは個人次第</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right: KAAAN */}
              <div className="bg-[#1a1a1a] text-white rounded-2xl p-8 border-2 border-yellow-300 relative shadow-2xl transform md:-translate-y-4">
                 <div className="absolute -top-4 -right-4 bg-yellow-300 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">Recommended</div>
                 <div className="text-center mb-8 pb-6 border-b border-gray-700">
                   <p className="text-sm font-bold text-yellow-300 uppercase tracking-widest mb-2">KAAAN Service</p>
                   <h4 className="text-xl font-bold text-white">AI編集部構築支援</h4>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg mb-1">自走化・プロジェクトの成果</p>
                      <p className="text-sm text-gray-400">事業成果が出るまでコミット</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg mb-1">公開できる量を増やす</p>
                      <p className="text-sm text-gray-400">品質担保の仕組みもセットで</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg mb-1">レビュー・品質管理もAI化</p>
                      <p className="text-sm text-gray-400">全工程を最適化しスピードUP</p>
                    </div>
                  </li>
                   <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg mb-1">動く仕組み・基盤</p>
                      <p className="text-sm text-gray-400">明日から使える環境を構築</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 提供するもの Grid */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#1a1a1a]">提供するもの</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "インプットデータ基盤構築",
                  icon: Database,
                  items: [
                    "ナレッジ管理基盤 (Notion/Drive)",
                    "過去記事・動画・議事録の格納",
                    "AI用データクレンジング・構造化"
                  ]
                },
                {
                  title: "マーケティング設計",
                  icon: Target,
                  items: [
                    "ペルソナ・カスタマージャーニー再設計",
                    "戦略に基づくコンテンツ基盤構築",
                    "AIが参照可能な構造化データ作成"
                  ]
                },
                {
                  title: "プロンプトチェーン構築",
                  icon: Zap,
                  items: [
                    "企画→構成→執筆→編集の自動化",
                    "独自データを活用するプロンプト設計",
                    "高品質・高精度な出力チューニング"
                  ]
                },
                {
                  title: "品質管理フロー構築",
                  icon: Check,
                  items: [
                    "ファクトチェックの仕組み化",
                    "ハウスルール順守の自動チェック",
                    "人間による最終確認フロー設計"
                  ]
                },
                {
                  title: "カスタムツール開発",
                  icon: Settings,
                  items: [
                    "n8n/Zapierによる自動化ワークフロー",
                    "課題に応じた専用ツール開発",
                    "API連携・システム実装"
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-4 text-[#1a1a1a]">{item.title}</h4>
                  <ul className="space-y-3">
                    {item.items.map((subItem, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 shrink-0 group-hover:bg-yellow-300"></span>
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ツールスタック */}
          <div className="max-w-[800px] mx-auto mt-20">
            <h3 className="text-xl font-bold mb-10 text-center flex items-center justify-center gap-3 text-[#1a1a1a]">
              使用するAIツール
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                { label: "AI Editor", name: "Cursor", icon: PenTool },
                { label: "LLM", name: "Claude / Gemini", icon: Zap },
                { label: "Knowledge", name: "Notion / Drive", icon: Database },
                { label: "Automation", name: "n8n / Zapier", icon: RefreshCw },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center group">
                   <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-gray-700 group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors duration-300 shadow-sm border border-gray-100">
                     <item.icon className="w-8 h-8" />
                   </div>
                   <p className="font-bold text-[#1a1a1a] text-lg mb-1">{item.name}</p>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                 </div>
               ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-xs text-gray-400">※プロジェクトの課題に応じて最適なツールを選定・開発します</p>
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
              成果を伸ばすために、プロフェッショナルが伴走する。<br />
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
            ストラテジーから始める。成果を伸ばすロードマップ
          </h2>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0 space-y-12">
            {[
              { step: "01", title: "現状把握・診断", sub: "Phase 1", desc: "プロジェクト全体のボトルネックを特定（制作だけでなく、レビュー・承認・公開フローも含めて）。現状の制作フローを可視化し、マーケティングの成果を最大化するために、どこをAI化すべきかを診断" },
              { step: "02", title: "ストラテジーから入る - マーケティング戦略策定・プロジェクト設計", sub: "Phase 2", desc: "現状を把握してストラテジーを明確にする。ボトルネックに合わせた最適な生産量を設計（個人の生産性向上ではなく、マーケティングの成果を最大化する設計）。AI前提のコンテンツ戦略、新しいワークフロー、必要なツールスタックを設計。組織をどう作っていくのか、プロジェクトをどう設計していくのかを明確にする" },
              { step: "03", title: "フルスクラッチで仕組みを構築", sub: "Phase 3", desc: "成果を伸ばし、プロジェクトチームの時間を削減する仕組みを構築。データとミキシングしてアウトプットまで作っていく、レビュー、それを一気通貫するタイプで構築。レビュー・品質管理もAI化（制作だけでなく、チェック工程もスケールさせる）。実際に運用可能なプロンプトチェーン、データベース、品質チェックフローを構築し、納品" },
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
