import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const plans = [
  {
    name: "スタンダードプラン",
    price: "10万円",
    period: "/月",
    features: [
      "提案書生成: 月間50件まで",
      "ヒアリングシステム",
      "AI自動提案書生成",
      "品質保証システム",
      "メールサポート",
    ],
    featured: false,
  },
  {
    name: "プロフェッショナルプラン",
    price: "20万円",
    period: "/月",
    features: [
      "提案書生成: 月間200件まで",
      "ヒアリングシステム",
      "AI自動提案書生成",
      "品質保証システム",
      "ナレッジ蓄積・活用システム",
      "優先メールサポート",
      "導入支援",
    ],
    featured: true,
  },
  {
    name: "エンタープライズプラン",
    price: "カスタム",
    period: "お見積もり",
    features: [
      "提案書生成: 無制限",
      "全機能利用可能",
      "専任サポート",
      "カスタマイズ対応",
      "導入支援・トレーニング",
      "SLA保証",
    ],
    featured: false,
  },
];

export default function PlanPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="料金・プラン"
        description="シンプルな料金体系で、BtoB取引のプロセスをショートカットします。"
      />

      {/* Plan Cards */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`bg-white border p-10 md:p-[28px_20px] h-full flex flex-col ${
                  plan.featured 
                    ? "border-[#1a1a1a] border-2" 
                    : "border-[#e0e0e0]"
                }`}
              >
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-medium text-[#1a1a1a]">
                        {plan.price}
                      </span>
                      <span className="text-base text-[#666]">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full h-[42px] px-7 text-[13px] font-medium tracking-[0.06em] ${
                      plan.featured
                        ? "bg-[#1a1a1a] text-white hover:bg-[#333] border border-[#1a1a1a]"
                        : "bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white border border-[#1a1a1a]"
                    }`}
                  >
                    <Link href="/contact">お問い合わせ</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] text-center">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                無料トライアル
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-8 text-[15px] leading-[1.9] text-[#666]">
                14日間の無料トライアルで、ショートカットの効果を実感してください。
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[42px] px-7 text-[13px] font-medium tracking-[0.06em] border border-[#1a1a1a]"
              >
                <Link href="/demo">無料トライアルを始める</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}



