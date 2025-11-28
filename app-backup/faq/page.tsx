import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const newCustomerFAQs = [
  {
    question: "提案書の品質はどの程度ですか？",
    answer:
      "ショートカットは、AI簡易提案エンジンと品質保証システムにより、高品質な提案書を自動生成します。過去の事例や業界知見を活用し、エンタープライズ企業にも響く提案書を生成します。",
  },
  {
    question: "セキュリティは大丈夫ですか？",
    answer:
      "ショートカットは、セキュリティ要件を満たした環境で運用しています。Geminiを使用しており、セキュリティ要件の厳格な企業でも安心してご利用いただけます。",
  },
  {
    question: "導入コスト・ROIはどの程度ですか？",
    answer:
      "ショートカットの月額料金は10万円からです。リード獲得から商談までの時間短縮（1ヶ月〜2ヶ月 → 1日〜2日）や提案書作成時間の短縮（数時間〜数日 → 3-5分）により、投資対効果として十分な価値を提供します。シミュレーションで具体的な効果を試算できます。",
  },
  {
    question: "導入プロセスはどの程度かかりますか？",
    answer:
      "プランによって異なりますが、スタンダードプランで1週間〜2週間、プロフェッショナルプランで2週間〜1ヶ月程度です。エンタープライズプランはカスタマイズ内容により異なります。",
  },
  {
    question: "過去の失敗体験との違いは何ですか？",
    answer:
      "ショートカットは、単なるマーケティングツールや営業スキル向上研修ではありません。BtoB取引プロセス全体をショートカットし、提案書作成の時間を事業成長の時間に変える、成果に焦点を当てたソリューションです。",
  },
  {
    question: "エンタープライズ企業への対応は可能ですか？",
    answer:
      "はい、可能です。ショートカットは、エンタープライズ企業（年間300万円以上のライセンス）へのアプローチにも対応しています。高品質な提案書を3-5分で生成でき、商談を加速できます。",
  },
  {
    question: "小規模組織での導入は可能ですか？",
    answer:
      "はい、可能です。ショートカットは、少人数でも効率的にビジネスを成長させることができます。提案書作成時間を3-5分に短縮し、リソース不足でも確度の低いリード対応に追われる日々から抜け出せます。",
  },
  {
    question: "投資フェーズでの事業加速は可能ですか？",
    answer:
      "はい、可能です。ショートカットは、投資フェーズで事業を一気に加速させることができます。確度の低いリード対応から解放され、本当にホットなリードのみと商談できるようになります。",
  },
];

const existingCustomerFAQs = [
  {
    question: "使い方ガイドはありますか？",
    answer:
      "はい、使い方ガイドをご用意しています。アカウントにログイン後、ヘルプセンターからアクセスできます。",
  },
  {
    question: "ベストプラクティスはありますか？",
    answer:
      "はい、ベストプラクティスをご用意しています。ナレッジの登録方法や提案書生成のコツなど、効果的な使い方をご紹介しています。",
  },
  {
    question: "社内定着を促進するにはどうすればよいですか？",
    answer:
      "社内定着を促進するためには、導入支援やトレーニングを活用し、実際の提案書生成を練習することが重要です。定期的なフォローアップも実施しています。",
  },
  {
    question: "営業スキル標準化はどの程度進みますか？",
    answer:
      "ショートカットは、営業メンバーのスキル差を補完し、組織全体の受注率を向上させます。提案書の品質が一定水準以上に保たれることで、営業スキルが標準化されます。",
  },
  {
    question: "代表の負荷軽減はどの程度可能ですか？",
    answer:
      "提案書作成時間を3-5分に短縮することで、代表の負荷を軽減できます。エンタープライズ企業への提案書も3-5分で生成でき、プロダクト開発に注力できる時間を確保できます。",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="よくある質問（FAQ）"
        description="ショートカットに関するよくある質問と回答をご紹介します。"
      />

      {/* FAQ: New Customer */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-8 text-[#1a1a1a]">
              新規導入検討向け
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {newCustomerFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-[#e0e0e0] py-4"
                >
                  <AccordionTrigger className="text-[15px] font-medium text-[#1a1a1a] hover:no-underline py-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[15px] font-medium text-[#1a1a1a] min-w-[24px]">
                        {index + 1}
                      </span>
                      <span className="text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-[1.9] text-[#666] pt-2 pb-4 pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ: Existing Customer */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-8 text-[#1a1a1a]">
              既存顧客向け
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {existingCustomerFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`existing-item-${index}`}
                  className="border-b border-[#e0e0e0] py-4"
                >
                  <AccordionTrigger className="text-[15px] font-medium text-[#1a1a1a] hover:no-underline py-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[15px] font-medium text-[#1a1a1a] min-w-[24px]">
                        {index + 1}
                      </span>
                      <span className="text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-[1.9] text-[#666] pt-2 pb-4 pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}



