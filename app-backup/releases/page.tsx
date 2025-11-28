import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const releases = [
  {
    version: "v1.0.0",
    date: "2025年1月10日",
    title: "正式リリース",
    content:
      "ショートカットの正式リリースを行いました。AI自動提案システムの基本機能を提供します。",
  },
  {
    version: "v0.9.0",
    date: "2024年12月20日",
    title: "ベータ版リリース",
    content:
      "ベータ版をリリースしました。一部の機能を制限して提供しています。",
  },
];

export default function ReleasesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="リリースノート"
        description="ショートカットのバージョン更新情報をお知らせします。"
      />

      {/* Releases List */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="space-y-6">
            {releases.map((release, index) => (
              <Card 
                key={index}
                className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]"
              >
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-lg font-medium text-[#1a1a1a]">
                        {release.version}
                      </span>
                      <span className="text-sm text-[#666]">{release.date}</span>
                    </div>
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">
                      {release.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-[1.9] text-[#666]">
                    {release.content}
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



