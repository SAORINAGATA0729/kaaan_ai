import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ArrowUpRight } from "lucide-react";

export default function UsecasePage() {
  const usecases = [
    { title: "大量にリードがあるが商談に繋がらない", link: "/usecase/lead-quality" },
    { title: "営業組織のスキル差", link: "/usecase/skill-gap" },
    { title: "リードタイムの長期化", link: "/usecase/leadtime" },
    { title: "リソース不足", link: "/usecase/resource-shortage" },
    { title: "リード獲得チャネルが限られている", link: "/usecase/limited-channels" },
    { title: "マーケティング施策の効果が出ない", link: "/usecase/marketing-ineffective" },
    { title: "エンタープライズ企業への対応が複雑", link: "/usecase/enterprise-complex" },
    { title: "パートナー・チャネル管理に時間がかかる", link: "/usecase/partner-management" },
    { title: "イベント・展示会に依存したリード獲得", link: "/usecase/event-dependent" },
    { title: "リードフォローに時間がかかる", link: "/usecase/lead-followup" },
    { title: "コンテンツマーケティングが商談に繋がらない", link: "/usecase/content-marketing" },
    { title: "確度の低いリード対応に追われる", link: "/usecase/low-quality-leads" },
    { title: "事業成長を加速させたい", link: "/usecase/business-growth" },
    { title: "経営層・リーダーが営業業務に時間を取られる", link: "/usecase/executive-time" },
    { title: "提案書作成に時間がかかる", link: "/usecase/proposal-time" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-32 md:py-48 relative overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-8 relative z-10">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.2] mb-8">
              活用シーン
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-[1.8] font-light max-w-[700px] mx-auto">
              ショートカットで解決できる課題を、用途別にご紹介します。<br />
              あなたの組織が直面している課題に対する解決策が見つかります。
            </p>
          </div>
        </div>
      </section>

      {/* Usecase Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usecases.map((usecase, i) => (
              <Link key={i} href={usecase.link} className="group block h-full">
                <Card className="bg-white border border-gray-200 hover:border-[#1a1a1a] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-10 h-full flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-[#1a1a1a] group-hover:text-black transition-colors leading-snug mb-8">
                      {usecase.title}
                    </h3>
                    <div className="flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-[#f0f0f0] group-hover:bg-[#1a1a1a] flex items-center justify-center transition-colors duration-300">
                        <ArrowUpRight className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </CardContent>
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
