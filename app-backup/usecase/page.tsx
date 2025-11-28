import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const useCases = [
  { title: "大量にリードがあるが商談に繋がらない", href: "/usecase/lead-quality" },
  { title: "営業組織のスキル差", href: "/usecase/skill-gap" },
  { title: "リードタイムの長期化", href: "/usecase/leadtime" },
  { title: "リソース不足", href: "/usecase/resource-shortage" },
  { title: "リード獲得チャネルが限られている", href: "/usecase" },
  { title: "マーケティング施策の効果が出ない", href: "/usecase/marketing" },
  { title: "エンタープライズ企業への対応が複雑", href: "/usecase" },
  { title: "パートナー・チャネル管理に時間がかかる", href: "/usecase" },
  { title: "イベント・展示会に依存したリード獲得", href: "/usecase" },
  { title: "リードフォローに時間がかかる", href: "/usecase" },
  { title: "コンテンツマーケティングが商談に繋がらない", href: "/usecase" },
  { title: "確度の低いリード対応に追われる", href: "/usecase" },
  { title: "事業成長を加速させたい", href: "/usecase" },
  { title: "経営層・リーダーが営業業務に時間を取られる", href: "/usecase" },
  { title: "提案書作成に時間がかかる", href: "/usecase" },
];

export default function UseCasePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="活用シーン"
        description="ショートカットで解決できる課題を、用途別にご紹介します。"
      />

      {/* Category Grid */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Link key={index} href={useCase.href}>
                <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] hover:border-[#1a1a1a] transition-colors cursor-pointer h-full min-h-[150px] flex items-center justify-center">
                  <CardHeader className="p-0 text-center">
                    <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}

