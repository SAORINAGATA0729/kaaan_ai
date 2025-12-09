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

export default function AiEditingDepartmentPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-gray-200">
      <LPHeader />

      {/* 1. Hero Section - Impact & Expectation */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="max-w-6xl">
            <div className="inline-block mb-8">
              <span className="text-[13px] tracking-[0.25em] uppercase font-bold border-b-2 border-black pb-2">
                Business Growth x AI
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-10">
              <span className="block">Half the Time,</span>
              <span className="block text-gray-400">Twice the Result</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-bold leading-tight mb-8 tracking-tight text-gray-800">
              プロフェッショナルと共に、<br className="md:hidden" />
              事業成長を実現する<br className="md:hidden" />
              <span className="border-b-4 border-yellow-300">AI編集部構築サービス</span>
            </h2>

            <p className="text-base md:text-lg text-[#1a1a1a]/80 max-w-2xl leading-relaxed mb-12 font-medium">
              時間を半分にし、成果を2倍にする。単なる効率化ではありません。<br className="hidden md:inline" />
              社内に眠る情報を資産に変え、事業成長を加速させるための<br className="hidden md:inline" />
              最強のチームと仕組みを構築します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 rounded-full text-base font-bold bg-[#1a1a1a] text-white hover:bg-black hover:scale-105 transition-all shadow-xl">
                <Link href="/contact/service">
                  案件相談・お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-bold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-gray-50 bg-transparent transition-all">
                <Link href="/download">
                  サービス資料ダウンロード
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
              AI活用において、<br className="md:hidden" />
              このような課題はありませんか？
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "「個人の効率化」止まり",
                desc: "メールや議事録は早くなったが、事業成果（売上・リード）には繋がっていない。",
                icon: Users
              },
              {
                title: "ツール迷子と疲弊",
                desc: "次々と出る新ツール。選定基準がなく、現場は振り回されているだけ。",
                icon: Compass
              },
              {
                title: "属人化とブラックボックス",
                desc: "「あの人しか使えない」。組織としてナレッジが蓄積されず、品質もバラバラ。",
                icon: Lock
              },
              {
                title: "戦略なきAI利用",
                desc: "「何を作るか」の企画以前に、マーケティング戦略がなく、AIを活かせていない。",
                icon: Target
              },
              {
                title: "費用対効果が見えない",
                desc: "ツール代はかかるが、それが本当に事業利益として回収できているのか不明確。",
                icon: CircleDollarSign
              },
              {
                title: "導入しただけで満足",
                desc: "勉強会を開いて終わり。現場の業務プロセスに組み込まれず、定着していない。",
                icon: Flag
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border-l-4 border-gray-300 hover:border-black transition-colors shadow-sm group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-yellow-300 transition-colors shrink-0">
                    <item.icon className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg whitespace-nowrap">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Insight Section - Core Question */}
      <section className="py-32 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[900px]">
          <h2 className="text-2xl md:text-5xl font-extrabold leading-tight mb-16 tracking-tight text-left">
            「個人の生産性」は上がった。<br />
            <span className="inline-block whitespace-nowrap text-[0.9em] md:text-[1em]">でも、<span className="border-b-4 border-black pb-1">「組織の成果」</span>は変わっていない。</span>
          </h2>
          
          <div className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed font-medium text-center">
            {/* Voices - Grouped and Centered */}
            <div className="space-y-3 mb-12 text-gray-500">
              <p>「議事録の要約は、一瞬で終わるようになった。」</p>
              <p>「資料の骨子作成も、壁打ちも、AIがやってくれる。」</p>
              <p>「確かに、現場の『作業』は楽になったはずです。」</p>
            </div>
            
            {/* Core Message - Centered */}
            <div className="space-y-12">
              <p className="text-2xl font-bold text-black">
                しかし、肝心の「売上」や「採用」は伸びていない。
              </p>
              
              <p>
                結局、重要な仕事は<span className="font-bold border-b-2 border-yellow-300">優秀な個人が手作業で</span>回している。
              </p>
              
              <p className="text-2xl font-extrabold text-black leading-normal">
                「個人の時短」が「組織の成果」に繋がらない。<br />
                これが、多くの企業の現実です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution Section - Concept & Logic */}
      <section id="solution" className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-[1200px]">
          {/* Title & Lead */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              組織の「情報」を、<br />
              成果を生み出す<span className="text-yellow-300">「資産」</span>に変える。
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              生産性を向上させるだけでは、事業は伸びません。<br />
              社内に眠る膨大な情報を「資産」へと変え、<br />
              <span className="text-white font-bold border-b border-white pb-1">組織全体で成果に繋がるコンテンツを生み出し続ける。</span>
            </p>
            <p className="text-xl font-bold text-white">
              そのための「仕組み作り」こそが、KAAANが提供する「AI編集部構築サービス」です。
            </p>
          </div>

          {/* Why Input? */}
          <div className="bg-[#2a2a2a] p-10 md:p-16 mb-24 border border-gray-700 max-w-[1000px] mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                事業成長を実現するために、<br />
                なぜインプットデータが重要になるのか？
              </h3>
              <p className="text-gray-300 leading-relaxed">
                なぜ、AIを使っても「誰でも書けるような内容」しか出てこないのか。<br />
                それは、<span className="font-bold text-yellow-300">AIに与える「インプット（情報）」が圧倒的に足りないから</span>です。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-8 border border-gray-700 opacity-70">
                <div className="flex items-center gap-3 mb-4 text-gray-400">
                  <X className="w-6 h-6" />
                  <span className="font-bold text-lg">インプットがないAI</span>
                </div>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li><span className="block text-xs uppercase tracking-widest mb-1">INPUT</span>インターネット上の一般論</li>
                  <li><span className="block text-xs uppercase tracking-widest mb-1">OUTPUT</span>「どこかで見たような、薄いコンテンツ」</li>
                  <li className="pt-2 text-white font-bold">→ 他社も同じものを量産できるため、情報が埋もれてしまい、成果に繋がらない。</li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] p-8 border-2 border-yellow-300 relative shadow-[0_0_30px_rgba(253,224,71,0.1)]">
                <div className="absolute -top-3 -right-3 bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full">KAAAN's Approach</div>
                <div className="flex items-center gap-3 mb-4 text-yellow-300">
                  <Check className="w-6 h-6" />
                  <span className="font-bold text-lg">インプットがあるAI</span>
                </div>
                <ul className="space-y-4 text-sm text-white">
                  <li><span className="block text-xs uppercase tracking-widest mb-1 text-gray-500">INPUT</span><span className="font-bold">社内の独自情報</span>（会議・日報・顧客の声）</li>
                  <li><span className="block text-xs uppercase tracking-widest mb-1 text-gray-500">OUTPUT</span><span className="font-bold">「その企業にしか書けない、唯一無二のコンテンツ」</span></li>
                  <li className="pt-2 text-yellow-300 font-bold">→ 競合が模倣できない「独自性」があるため、顧客に選ばれる。</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center border-t border-gray-700 pt-10">
              <p className="text-lg font-bold leading-relaxed">
                だからこそ、KAAANは「インプット」に徹底的にこだわります。<br />
                社内に眠る膨大な情報を「資産」として整理し、<span className="text-yellow-300">AIに学習させ続ける。</span><br />
                そうすることで、AIはその企業の事業を深く理解した「最強のパートナー」へと進化します。
              </p>
            </div>
          </div>

          {/* 3 Steps */}
          <div className="max-w-[1200px] mx-auto mb-32">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gray-700 z-0"></div>

              {[
                {
                  step: "STEP 1",
                  icon: Database,
                  title: "Input (資産化)",
                  sub: "「素材」を溜める",
                  desc: "会議、インタビュー、日報。社内の一次情報をすべてデータベース化し、AIがいつでも引き出せる「脳みそ」を作ります。"
                },
                {
                  step: "STEP 2",
                  icon: PenTool,
                  title: "Edit (編集・生成)",
                  sub: "「企画」を形にする",
                  desc: "「採用を強化したい」「リードを取りたい」。人間の意図（企画）に合わせて、蓄積された素材からAIが最適なコンテンツを生成します。"
                },
                {
                  step: "STEP 3",
                  icon: TrendingUp,
                  title: "Growth (自走)",
                  sub: "「組織」に残す",
                  desc: "運用するほどDBが賢くなり、誰でも高品質なコンテンツが生み出せる「自走する編集部」へと育ちます。"
                }
              ].map((item, i) => (
                <div key={i} className="bg-[#2a2a2a] p-10 relative z-10 border border-gray-700 text-center group hover:border-yellow-300 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1a1a] border border-gray-600 mb-6 group-hover:border-yellow-300 group-hover:text-yellow-300 transition-colors">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">{item.step}</p>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-yellow-300 font-bold mb-6 opacity-80">{item.sub}</p>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Before / After */}
          <div className="bg-white text-[#1a1a1a] p-10 md:p-20 max-w-[1000px] mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
            
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold leading-relaxed md:leading-relaxed">
                AIを「効率化ツール」で終わらせない。<br />
                事業成長を加速させる<br />
                <span className="bg-black text-white px-2 inline-block mt-2">「成長エンジン」</span>へと進化させる。
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 p-8 text-center opacity-70 grayscale">
                <h4 className="font-bold text-gray-500 mb-6 text-xl">これまでのAI活用<br /><span className="text-sm font-normal">（効率化ツール）</span></h4>
                <ul className="space-y-4 text-left text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 mt-0.5 shrink-0" />
                    <div><span className="font-bold block text-gray-700">目的：作業を楽にする・時短する</span>個人の手元作業のみ（点での利用）</div>
                  </li>
                  <li className="flex items-start gap-3 pt-2 border-t border-gray-200">
                    <span className="font-bold text-gray-500">Result:</span>
                    <span className="font-bold text-gray-700">組織の成果（売上・利益）には繋がらない</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <ArrowRight className="hidden md:block absolute top-1/2 -left-9 -translate-y-1/2 w-8 h-8 text-black" />
                <div className="bg-black text-white p-10 shadow-2xl scale-105 relative">
                  <div className="absolute -top-4 -right-4 bg-yellow-300 text-black font-bold px-4 py-1 text-sm shadow-lg">New Standard</div>
                  <h4 className="font-bold text-white mb-6 text-2xl">KAAANのAI編集部<br /><span className="text-sm font-normal text-gray-300">（成長エンジン）</span></h4>
                  <ul className="space-y-5 text-left text-sm text-gray-300">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 text-yellow-300 shrink-0" />
                      <div><span className="font-bold block text-white">目的：「事業」を伸ばす・成果を出す</span>組織全体の情報とアウトプット（面での利用）</div>
                    </li>
                    <li className="flex items-start gap-3 pt-4 border-t border-gray-700">
                      <span className="font-bold text-yellow-300">Result:</span>
                      <span className="font-bold text-white text-lg">事業成長が加速し、競争優位が生まれる</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                  「Half the Time, Twice the Result」へのコミット
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  時間を半分にし、成果を2倍にする。<br />
                  KAAANが目指すのは、単なる「作業の効率化」ではありません。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  空いた時間をクリエイティブな思考や戦略立案に充て、
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
                  プロフェッショナルによる伴走
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  AIエンジニアだけでなく、数々の事業を成長させてきたプロフェッショナルが参画。
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
                <p className="text-lg text-gray-600 leading-relaxed">
                  机上の空論ではなく、<span className="font-bold text-black border-b border-yellow-300">私たち自身がこの「AI編集部」で成果を出している</span>からこそ、
                  生きた仕組みと、再現性のあるメソッドを提供できるのです。
                </p>
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
                { text: "初めてAIを使うメンバーばかりだったが、1ヶ月で記事制作が自走できるようになった", attr: "SaaS企業 マーケティング責任者" },
                { text: "単なる時短ではなく、自分たちが気づかなかった企画案がAIから出てくるようになった", attr: "人材系企業 事業部長" },
                { text: "プロと一緒に進めることで、AIへの苦手意識がなくなり、今では全社で活用している", attr: "IT企業 代表" },
                { text: "BtoB企業のリード獲得数が200%達成。AI活用の本質がわかった", attr: "BtoBサービス企業 経営企画室長" },
                { text: "導入から3ヶ月でオウンドメディアの公開記事数が3倍に増加しました", attr: "Webメディア 編集長" },
                { text: "社内にある議事録がこれほど価値あるコンテンツになるとは驚きでした", attr: "コンサルティング企業 マネージャー" },
                { text: "採用広報の記事作成時間が1/3に短縮され、スカウト業務に集中できるように", attr: "スタートアップ 人事責任者" },
                { text: "「AIに任せる」ではなく「AIと作る」感覚がつかめ、チームの士気が上がった", attr: "EC事業 責任者" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute top-6 left-4 text-4xl text-gray-200 font-serif leading-none">“</div>
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

          <div className="space-y-0 relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0">
            {[
              { step: "01", title: "Hearing & Audit", sub: "現状分析", desc: "現在の課題、体制、データの状況を詳細にヒアリングします。" },
              { step: "02", title: "Strategy Planning", sub: "戦略策定", desc: "2週間でマーケティング戦略とAI活用のロードマップを策定します。" },
              { step: "03", title: "Construction", sub: "構築・実装", desc: "約1ヶ月でAI環境（プロンプト、DB）を構築。初月からアウトプットを開始します。" },
              { step: "04", title: "Onboarding & Lecture", sub: "運用・定着", desc: "実際の業務の中でレクチャーを実施。メンバーが使いこなせるまで伴走します。" },
              { step: "05", title: "Self-Running", sub: "自走化", desc: "運用データを元にチューニングし、完全な自走体制へ移行します。" },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-gray-200 last:border-0 pl-12 md:pl-0">
                {/* Mobile Marker */}
                <div className="absolute left-[-5px] top-12 w-3 h-3 rounded-full bg-black md:hidden" />
                
                <div className="md:w-1/3 md:text-right md:pt-2">
                  <span className="text-lg font-bold text-gray-400 block mb-1">STEP {item.step}</span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <span className="text-xs font-bold text-[#1a1a1a] bg-gray-100 px-2 py-1 mt-2 inline-block">{item.sub}</span>
                </div>
                <div className="md:w-2/3 md:pt-3">
                  <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA - Impact */}
      <section className="py-40 bg-[#1a1a1a] text-white text-center">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
            AIと共創し、<br />
            事業成長を加速させる<br />
            <span className="whitespace-nowrap">「強い組織」へ。</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-medium">
            社内に眠る情報を「資産」に変える。<br />
            プロフェッショナルが泥臭く伴走し、あなたの会社に「AI編集部」を構築します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="h-16 px-12 rounded-full text-lg font-bold bg-white text-[#1a1a1a] hover:bg-gray-200 hover:scale-105 transition-all shadow-2xl">
              <Link href="/contact/service">
                案件相談・お問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 rounded-full text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] bg-transparent">
              <Link href="/download">
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
