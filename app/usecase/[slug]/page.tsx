import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, ArrowLeft } from "lucide-react";

// Usecase Data Dictionary
const usecases: Record<string, { title: string; description: string; challenge: string; solution: string }> = {
  "lead-quality": {
    title: "大量にリードがあるが商談に繋がらない",
    description: "マーケティング施策でリード数は確保できているものの、インサイドセールスのリソース不足や質のバラつきにより、有効な商談に繋げられていないケース。",
    challenge: "リードへの対応スピードが遅く、競合他社に先を越されてしまう。また、ヒアリングの質が担当者によって異なり、確度の見極めができていない。",
    solution: "ショートカットの「ヒアリングシステム」と「AI簡易提案エンジン」により、リード発生と同時に自動でヒアリングと一次提案を実施。確度の高いリードのみを商談化します。"
  },
  "skill-gap": {
    title: "営業組織のスキル差",
    description: "トップセールスと若手・新人セールスの間で、提案品質や受注率に大きな乖離があるケース。",
    challenge: "提案書の作成スキルや商談運びが属人化しており、ナレッジが共有されていない。組織全体の底上げが進まない。",
    solution: "「ナレッジ統合」機能により、トップセールスの提案ロジックや過去の勝ちパターンをAIが学習。誰でも高品質な提案書を生成できるようになり、スキル差を解消します。"
  },
  "leadtime": {
    title: "リードタイムの長期化",
    description: "初回接触から受注までの期間が長く、機会損失が発生しているケース。",
    challenge: "顧客の情報収集期間が長く、検討プロセスが不透明。提案書の作成にも時間がかかり、顧客の熱量が冷めてしまう。",
    solution: "顧客が課題を入力した瞬間に提案書を提示することで、検討プロセスを一気に短縮。必要な情報を即座に提供し、意思決定を加速させます。"
  },
  "resource-shortage": {
    title: "リソース不足",
    description: "少人数の営業組織で、多数のリード対応や既存顧客フォローに追われているケース。",
    challenge: "コア業務である商談や戦略立案に時間を使いたいが、提案書作成や日程調整などのノンコア業務に忙殺されている。",
    solution: "提案書作成業務をAIが代行することで、営業担当者は「商談」などの人間にしかできない業務に集中できます。"
  },
  "limited-channels": {
    title: "リード獲得チャネルが限られている",
    description: "特定のチャネルに依存しており、新規顧客の開拓が頭打ちになっているケース。",
    challenge: "既存のチャネルだけでは目標達成が困難。新しいチャネルを開拓したいが、ノウハウやリソースがない。",
    solution: "Webフォームによる自動提案は、様々なチャネル（SNS、広告、メール）からの着地先として機能します。新たな顧客接点を創出します。"
  },
  "marketing-ineffective": {
    title: "マーケティング施策の効果が出ない",
    description: "広告費をかけてリードを獲得しても、その後のフォローが追いつかず、ROIが悪化しているケース。",
    challenge: "リード獲得後のナーチャリングプロセスが設計されておらず、放置されるリードが発生している。",
    solution: "獲得したリードに対して即座に価値ある提案を行うことで、リードの温度感を維持し、商談化率を最大化します。"
  },
  "enterprise-complex": {
    title: "エンタープライズ企業への対応が複雑",
    description: "大手企業特有の複雑な意思決定プロセスや要件に対応できず、失注してしまうケース。",
    challenge: "関係者が多く、それぞれのニーズに合わせた提案書を作成するのに膨大な時間がかかる。",
    solution: "AIが過去の類似事例や業界動向を分析し、エンタープライズ企業の意思決定者に響く提案書を自動生成します。"
  },
  "partner-management": {
    title: "パートナー・チャネル管理に時間がかかる",
    description: "代理店やパートナー企業への情報提供や提案サポートにリソースを取られているケース。",
    challenge: "パートナー企業ごとの提案品質にバラつきがあり、ブランドイメージの毀損や機会損失のリスクがある。",
    solution: "パートナー企業にもショートカットを提供することで、提案品質を均一化し、パートナー経由の売上を最大化します。"
  }
};

export default async function UsecaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = usecases[slug] || {
    title: "その他の活用シーン",
    description: "様々なビジネス課題をショートカットで解決します。",
    challenge: "従来の非効率なプロセスにより、本来の価値提供ができていない。",
    solution: "BtoB取引のプロセス全体をショートカットし、事業成長を加速させます。"
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white py-20 md:py-32">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="mb-8">
            <Link href="/usecase" className="text-white/60 hover:text-white flex items-center gap-2 text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" /> 活用シーン一覧に戻る
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-6">
            {data.title}
          </h1>
          <p className="text-lg text-white/80 font-light max-w-[800px]">
            {data.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-[800px] px-8 space-y-24">
          
          {/* Challenge */}
          <div>
            <div className="text-sm tracking-widest text-gray-400 uppercase font-medium mb-4">Challenge</div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-6">
              抱えていた課題
            </h2>
            <p className="text-lg text-[#666] leading-[1.8] font-light">
              {data.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div className="text-sm tracking-widest text-gray-400 uppercase font-medium mb-4">Solution</div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-6">
              ショートカットによる解決
            </h2>
            <p className="text-lg text-[#666] leading-[1.8] font-light mb-8">
              {data.solution}
            </p>
            
            <div className="bg-[#f9f9f9] p-8 rounded-xl border border-gray-100">
              <h3 className="font-medium text-[#1a1a1a] mb-4">導入後の効果</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#666]">
                  <CheckCircle2 className="w-5 h-5 text-[#1a1a1a] shrink-0" />
                  <span>提案書作成時間が数日から数分へ短縮</span>
                </li>
                <li className="flex items-start gap-3 text-[#666]">
                  <CheckCircle2 className="w-5 h-5 text-[#1a1a1a] shrink-0" />
                  <span>商談化率が大幅に向上</span>
                </li>
                <li className="flex items-start gap-3 text-[#666]">
                  <CheckCircle2 className="w-5 h-5 text-[#1a1a1a] shrink-0" />
                  <span>営業メンバーの工数削減とモチベーション向上</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

