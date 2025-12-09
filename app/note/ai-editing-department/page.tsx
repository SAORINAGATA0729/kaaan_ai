"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LPHeader } from "@/components/LPHeader";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight, 
  Check, 
  Settings, 
  Database,
  Users,
  BarChart,
  MessageSquare,
  FileText,
  Layers,
  Zap,
  HelpCircle
} from "lucide-react";

export default function AiEditingDepartmentPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-gray-200">
      <LPHeader />

      {/* 1. Hero Section - KAAAN Style (Bold & Minimal) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="max-w-5xl">
            <div className="inline-block mb-8">
              <span className="text-[13px] tracking-[0.25em] uppercase font-bold border-b-2 border-black pb-2">
                AI Editing Department Service
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-12">
              <span className="block">経営OSをアップデートさせる、</span>
              <span className="block text-gray-400">AIと共創する</span>
              <span className="block">編集部へ</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#1a1a1a] max-w-3xl leading-relaxed mb-16 font-medium border-l-4 border-black pl-8">
              テクノロジーの進化で、従来の何倍ものスピードで事業成長できる時代に。<br />
              ナレッジをデータベース化し、<br />
              全員が高品質なアウトプットを生み出せる組織を実現します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="h-16 px-10 rounded-full text-base font-bold bg-[#1a1a1a] text-white hover:bg-black hover:scale-105 transition-all shadow-xl">
                <Link href="/contact/service">
                  案件相談
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full text-base font-bold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white bg-transparent transition-all">
                <Link href="/download">
                  サービス資料
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Consultation Examples (よくある相談例) - Concrete & Professional */}
      <section id="problem" className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <MessageSquare className="w-8 h-8" />
            多くの企業が抱えるAI活用の課題
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">データ・ナレッジの課題</h3>
              <ul className="space-y-4">
                {[
                  "制作物のナレッジが属人化しており、担当者がいないと回らない",
                  "過去のコンテンツや社内資料が活用されず、埋もれている",
                  "データが蓄積されず検索もできないため、毎回ゼロから作っている",
                  "社内の知見が形式知化されておらず、AIに学習させられない"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 mt-1 text-gray-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">品質・効率・組織の課題</h3>
              <ul className="space-y-4">
                {[
                  "AIを導入したが品質が担保できず、結局手直しに時間がかかる",
                  "企画の切り口がワンパターンになり、ターゲットに刺さらない",
                  "編集部が対外発信だけで終わり、マーケ・営業と連携できていない",
                  "採用・育成にコストがかかり、スケールする体制が作れない"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 mt-1 text-gray-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Value Proposition (提供価値) - Deep Dive */}
      <section id="discovery" className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="mb-20">
            <span className="text-[#1a1a1a] font-bold tracking-widest text-sm uppercase mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              AIと共創し、<br />
              全員が価値を生み出す組織へ
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              テクノロジーの進化により、従来の何倍ものスピードで事業成長できる時代になりました。<br />
              これまで、コンテンツ制作は特定の担当者に依存し、ナレッジが属人化。高クオリティなものを量産することは困難でした。<br />
              しかし、AIと共創することで、従来不可能だったことが可能になります。<br />
              <br />
              社内のあらゆるナレッジをデータベースとして蓄積することで、担当者だけでなく、全員が高クオリティなアウトプットを生み出せる組織に変わります。<br />
              自社でAIと共創しながら編集部を構築し、実践し続けているKAAANが、ナレッジをデータベース化する仕組み、体制づくり、教育まで一貫して支援します。
            </p>
          </div>

          <div className="grid gap-12">
            {[
              {
                num: "01",
                title: "データ蓄積の仕組み構築",
                desc: "過去のコンテンツ、企画の切り口、社内の専門知識を検索可能な形でデータベース化します。NotionやGoogleドライブなどを活用し、ターゲット別、フェーズ別など複数の切り口を整理。ワンパターンな企画から脱却します。",
                icon: Database
              },
              {
                num: "02",
                title: "体制構築・役割設計",
                desc: "AIと共創する編集部の体制を設計します。誰が企画を担当し、誰がレビューを行い、誰が最終承認をするのか。AIと人の役割分担を明確化し、スケールする組織体制を構築します。",
                icon: Users
              },
              {
                num: "03",
                title: "AIワークフロー構築",
                desc: "企画、執筆、編集、レビューの各フェーズでAIをどう活用するか、誰がどのタイミングで介入するかを明確化。効果的なプロンプトテンプレートを作成し、効率と品質を両立する仕組みを作ります。",
                icon: Zap
              },
              {
                num: "04",
                title: "AI教育・レクチャー",
                desc: "チームメンバーへのAI教育を実施します。AIツールの使い方、プロンプトの書き方、データの蓄積方法など、実務を通じて段階的に共有。自走できるまで伴走します。",
                icon: FileText
              },
              {
                num: "05",
                title: "コミュニケーション設計",
                desc: "誰に、何を、どのように伝えるかを明確化します。ペルソナ・カスタマージャーニーを設計し、フェーズやタッチポイントに合わせたコミュニケーション戦略を構築。AIで制作する前提での設計を行います。",
                icon: MessageSquare
              },
              {
                num: "06",
                title: "他部門との連携設計",
                desc: "編集部を対外発信だけでなく、社内の知識基盤として機能させます。マーケティング・営業・CS部門と連携し、各部門が持つ知見をコンテンツ化、あるいはコンテンツを各部門で活用するフローを作ります。",
                icon: Layers
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start border-t border-gray-200 pt-12">
                <div className="w-20 shrink-0 text-3xl font-bold text-gray-300">{item.num}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <item.icon className="w-6 h-6" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Members (プロフェッショナル) - Real People */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              事業成長のプロフェッショナルが<br />
              チームに伴走します
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              単なるAIツールの導入支援ではありません。<br />
              数々の事業成長を実現してきたマーケター、エディター、エンジニアが、貴社のプロジェクトメンバーとして参画します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Member 1: Tajima */}
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
              <div className="w-20 h-20 bg-gray-600 rounded-full mb-6 overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gray-500 flex items-center justify-center text-xs">田島</div>
              </div>
              <div className="mb-4">
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Representative</p>
                <h3 className="text-xl font-bold">田島 光太郎</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                サイトグロースの全体設計を担当。AIを「事業成長の武器」として定義し、経営戦略への実装をリードする。数々のクライアント企業の事業変革を支援。
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-gray-500 font-bold">担当領域</p>
                <p className="text-sm">全体戦略設計 / 経営実装</p>
              </div>
            </div>

            {/* Member 2: Somehiko */}
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
               <div className="w-20 h-20 bg-gray-600 rounded-full mb-6 overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gray-500 flex items-center justify-center text-xs">寺倉</div>
              </div>
              <div className="mb-4">
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">CSO</p>
                <h3 className="text-xl font-bold">寺倉 大史</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                コンテンツマーケティングの第一人者。MOLTSでの豊富な支援実績を持ち、「価値あるコンテンツ」の定義と品質担保の仕組みを構築する。
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-gray-500 font-bold">担当領域</p>
                <p className="text-sm">編集戦略 / 品質管理フロー</p>
              </div>
            </div>

            {/* Member 3: Nagata/Kishi (Combined or Representative) */}
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
               <div className="w-20 h-20 bg-gray-600 rounded-full mb-6 overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gray-500 flex items-center justify-center text-xs">永田</div>
              </div>
              <div className="mb-4">
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Director</p>
                <h3 className="text-xl font-bold">永田 さおり</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                AI活用の最前線でオペレーションを構築。自身の業務をAIで劇的に効率化し、そのノウハウを「誰でも使える形」に言語化・実装する。
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-gray-500 font-bold">担当領域</p>
                <p className="text-sm">オペレーション構築 / 伴走支援</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process (支援の流れ) - Step by Step */}
      <section id="flow" className="py-32 bg-[#f9f9f9]">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">支援開始までの流れ</h2>
          
          <div className="space-y-8">
             {[
               { step: "01", title: "ヒアリング・現状分析", desc: "貴社の事業課題、現在のコンテンツ制作体制、保有しているデータ資産（議事録、資料等）の状況をヒアリングします。" },
               { step: "02", title: "戦略・ロードマップ策定", desc: "目指すべき編集部の姿と、そこに至るまでのステップを策定。どのAIツールを選定し、どう組み合わせるかの設計図を描きます。" },
               { step: "03", title: "ご提案・ディスカッション", desc: "策定したプランをご提案します。単なる見積もり提示ではなく、実現可能性や期待効果について深く議論します。" },
               { step: "04", title: "プロジェクト開始・環境構築", desc: "合意後、プロジェクトを開始。データベースの設計、AIツールの導入設定、初期プロンプトの構築をKAAAN主導で行います。" },
               { step: "05", title: "運用・レクチャー・内製化", desc: "実際にコンテンツを制作しながら、貴社メンバーへのレクチャーを実施。最終的にはKAAANの手を離れて自走できる状態を目指します。" }
             ].map((item, i) => (
               <div key={i} className="flex flex-col md:flex-row gap-8 bg-white p-8 border border-gray-200 items-start">
                 <div className="text-sm font-bold bg-black text-white px-3 py-1 shrink-0">STEP {item.step}</div>
                 <div>
                   <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                   <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ (よくある質問) - Real Questions */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">よくある質問</h2>
          
          <div className="grid gap-8">
            {[
              { q: "AI編集部構築には、どのくらいの期間がかかりますか?", a: "プロジェクトの規模によりますが、3〜6ヶ月程度を想定しています。最初の1〜1.5ヶ月で基盤構築と初期レクチャーを集中的に行い、その後は運用しながら内製化を進めます。" },
              { q: "社内にAIリテラシーがない状態でも大丈夫ですか?", a: "はい、問題ありません。AIツールの使い方、プロンプトの書き方から丁寧にレクチャーします。実務を通じて段階的にスキルを習得できるよう支援しますので、現時点でのリテラシーは問いません。" },
              { q: "既存のライターや編集者はどうなりますか?", a: "彼らの役割は「書くこと」から「ディレクション・品質管理」へと進化します。AIが下書きや構成案を作成し、人間が最終的なクオリティを引き上げる。この共創フローへの移行も支援します。" },
              { q: "どのようなAIツールを使用しますか?", a: "プロジェクトの要件に応じて最適なツールを選定します（ChatGPT, Claude, Perplexity, Notion AIなど）。特定のツールありきではなく、目的から逆算して選定・組み合わせ（AIミキシング）を行います。" },
              { q: "データ蓄積の仕組みは、どのようなツールで構築しますか?", a: "NotionやGoogleドライブなど、既存の社内ツールを活用することが多いです。新規ツール導入の場合は、運用負荷やコストを考慮して提案します。重要なのはツールではなく、蓄積されたデータを検索・活用できる設計です。" }
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-8 last:border-0">
                <h3 className="font-bold text-lg mb-4 flex items-start gap-3">
                  <span className="text-[#1a1a1a] shrink-0">Q.</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">
                  <span className="font-bold text-black mr-2">A.</span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA - Impact */}
      <section className="py-40 bg-[#f9f9f9] text-center">
        <div className="container mx-auto px-6 md:px-8 max-w-[1000px]">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight tracking-tight">
            AIを事業成長のエンジンに変えませんか？
          </h2>
          <p className="text-xl text-gray-500 mb-16 max-w-3xl mx-auto font-medium">
            まずは貴社の現状をお聞かせください。<br />
            最適なAI編集部の形をご提案します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="h-16 px-12 rounded-full text-lg font-bold bg-[#1a1a1a] text-white hover:bg-black hover:scale-105 transition-all shadow-2xl">
              <Link href="/contact/service">
                案件相談
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 rounded-full text-lg font-bold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white bg-transparent">
              <Link href="/download">
                サービス資料
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
