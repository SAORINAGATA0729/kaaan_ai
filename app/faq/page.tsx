import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

export default function FAQPage() {
  const newCustomerFAQs = [
    { q: "提案書の品質はどの程度ですか？", a: "ショートカットは、AI簡易提案エンジンと品質保証システムにより、高品質な提案書を自動生成します。過去の事例や業界知見を活用し、エンタープライズ企業にも響く提案書を生成します。" },
    { q: "セキュリティは大丈夫ですか？", a: "ショートカットは、セキュリティ要件を満たした環境で運用しています。Geminiを使用しており、セキュリティ要件の厳格な企業でも安心してご利用いただけます。" },
    { q: "導入コスト・ROIはどの程度ですか？", a: "ショートカットの月額料金は10万円からです。リード獲得から商談までの時間短縮（1ヶ月〜2ヶ月 → 1日〜2日）や提案書作成時間の短縮（数時間〜数日 → 3-5分）により、投資対効果として十分な価値を提供します。シミュレーションで具体的な効果を試算できます。" },
    { q: "導入プロセスはどの程度かかりますか？", a: "プランによって異なりますが、スタンダードプランで1週間〜2週間、プロフェッショナルプランで2週間〜1ヶ月程度です。エンタープライズプランはカスタマイズ内容により異なります。" },
    { q: "過去の失敗体験との違いは何ですか？", a: "ショートカットは、単なるマーケティングツールや営業スキル向上研修ではありません。BtoB取引プロセス全体をショートカットし、提案書作成の時間を事業成長の時間に変える、成果に焦点を当てたソリューションです。" },
    { q: "エンタープライズ企業への対応は可能ですか？", a: "はい、可能です。ショートカットは、エンタープライズ企業（年間300万円以上のライセンス）へのアプローチにも対応しています。高品質な提案書を3-5分で生成でき、商談を加速できます。" },
    { q: "小規模組織での導入は可能ですか？", a: "はい、可能です。ショートカットは、少人数でも効率的にビジネスを成長させることができます。提案書作成時間を3-5分に短縮し、リソース不足でも確度の低いリード対応に追われる日々から抜け出せます。" },
    { q: "投資フェーズでの事業加速は可能ですか？", a: "はい、可能です。ショートカットは、投資フェーズで事業を一気に加速させることができます。確度の低いリード対応から解放され、本当にホットなリードのみと商談できるようになります。" }
  ];

  const existingCustomerFAQs = [
    { q: "使い方ガイドはありますか？", a: "はい、使い方ガイドをご用意しています。アカウントにログイン後、ヘルプセンターからアクセスできます。" },
    { q: "ベストプラクティスはありますか？", a: "はい、ベストプラクティスをご用意しています。ナレッジの登録方法や提案書生成のコツなど、効果的な使い方をご紹介しています。" },
    { q: "社内定着を促進するにはどうすればよいですか？", a: "社内定着を促進するためには、導入支援やトレーニングを活用し、実際の提案書生成を練習することが重要です。定期的なフォローアップも実施しています。" },
    { q: "営業スキル標準化はどの程度進みますか？", a: "ショートカットは、営業メンバーのスキル差を補完し、組織全体の受注率を向上させます。提案書の品質が一定水準以上に保たれることで、営業スキルが標準化されます。" },
    { q: "代表の負荷軽減はどの程度可能ですか？", a: "提案書作成時間を3-5分に短縮することで、代表の負荷を軽減できます。エンタープライズ企業への提案書も3-5分で生成でき、プロダクト開発に注力できる時間を確保できます。" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#f9f9f9] py-20 md:py-32">
        <div className="container mx-auto max-w-[1000px] px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-6 leading-tight">
            よくある質問
          </h1>
          <p className="text-[#666]">
            ショートカットに関するよくある質問と回答をご紹介します。
          </p>
        </div>
      </section>

      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-[800px] px-8 space-y-24">
          
          {/* New Customer Section */}
          <section>
            <h2 className="text-2xl font-medium text-[#1a1a1a] mb-10 pb-4 border-b border-gray-100">
              新規導入検討向け
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {newCustomerFAQs.map((item, i) => (
                <AccordionItem key={i} value={`new-${i}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-[15px] font-medium text-[#1a1a1a] hover:no-underline py-6 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-[#666] pb-6 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Existing Customer Section */}
          <section>
            <h2 className="text-2xl font-medium text-[#1a1a1a] mb-10 pb-4 border-b border-gray-100">
              既存顧客向け
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {existingCustomerFAQs.map((item, i) => (
                <AccordionItem key={i} value={`existing-${i}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-[15px] font-medium text-[#1a1a1a] hover:no-underline py-6 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-[#666] pb-6 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

        </div>
      </div>

      <CTASection />
      
      <Footer />
    </div>
  );
}
