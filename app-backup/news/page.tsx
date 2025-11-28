import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const newsItems = [
  {
    category: "プレスリリース",
    categoryClass: "press",
    title: "ショートカットが正式リリースされました",
    date: "2025年1月10日",
    content:
      "BtoB取引のプロセスを大幅ショートカットするAI自動提案システム「ショートカット」が正式リリースされました。リード獲得から商談まで1ヶ月〜2ヶ月かかっていた期間を1日〜2日に短縮します。",
  },
  {
    category: "メディア掲載",
    categoryClass: "media",
    title: "TechCrunch Japanに掲載されました",
    date: "2024年12月25日",
    content:
      "TechCrunch Japanにて、ショートカットのサービス紹介記事が掲載されました。AIを活用した提案書自動生成システムとして注目を集めています。",
  },
  {
    category: "キャンペーン",
    categoryClass: "campaign",
    title: "無料トライアルキャンペーン実施中",
    date: "2024年12月1日",
    content:
      "期間限定で無料トライアルキャンペーンを実施中です。2〜3営業日以内でトライアルアカウントを開設し、有料版のほぼ全ての機能をお試しいただけます。",
  },
  {
    category: "プレスリリース",
    categoryClass: "press",
    title: "株式会社KAAANがショートカットを開発・提供開始",
    date: "2024年11月18日",
    content:
      "株式会社KAAANは、BtoB取引のプロセスを大幅ショートカットするAI自動提案システム「ショートカット」の開発・提供を開始することをお知らせします。",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="最新情報"
        description="ショートカットに関する最新情報をお知らせします。"
      />

      {/* News List */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="space-y-6">
            {newsItems.map((news, index) => (
              <Card 
                key={index}
                className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]"
              >
                <CardContent className="p-0">
                  <div className="mb-4">
                    <span 
                      className={`inline-block px-3 py-1 text-xs font-medium mb-3 ${
                        news.categoryClass === "press"
                          ? "bg-blue-100 text-blue-800"
                          : news.categoryClass === "media"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {news.category}
                    </span>
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-[#666]">{news.date}</p>
                  </div>
                  <p className="text-[15px] leading-[1.9] text-[#666]">
                    {news.content}
                  </p>
                </CardContent>
              </Card>
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



