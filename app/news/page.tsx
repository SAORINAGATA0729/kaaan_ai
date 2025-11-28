import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

export default function NewsPage() {
  const newsItems = [
    { date: "2025.11.15", category: "プレスリリース", title: "シリーズAラウンドで3億円の資金調達を実施しました", link: "#" },
    { date: "2025.10.20", category: "お知らせ", title: "導入企業数が100社を突破しました", link: "#" },
    { date: "2025.09.05", category: "イベント", title: "「SaaS Growth Summit 2025」に登壇します", link: "#" },
    { date: "2025.08.12", category: "メディア掲載", title: "日本経済新聞に「ショートカット」が掲載されました", link: "#" },
    { date: "2025.07.30", category: "お知らせ", title: "オフィス移転のお知らせ", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#f9f9f9] py-20 md:py-32">
        <div className="container mx-auto max-w-[1000px] px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-6 leading-tight">
            最新情報
          </h1>
          <p className="text-[#666]">
            ショートカットからの最新のお知らせをご覧いただけます。
          </p>
        </div>
      </section>

      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-[800px] px-8">
          <div className="space-y-6">
            {newsItems.map((item, i) => (
              <Link key={i} href={item.link} className="block group">
                <article className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-gray-100 group-hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-4 md:w-[200px] shrink-0">
                    <time className="text-sm text-[#666] font-mono">{item.date}</time>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-[#666] rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-[#1a1a1a] flex-1 group-hover:text-[#666] transition-colors">
                    {item.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#1a1a1a] transition-colors hidden md:block shrink-0" />
                </article>
              </Link>
            ))}
          </div>
          
          {/* Pagination (Static) */}
          <div className="mt-16 flex justify-center gap-2">
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-[#1a1a1a] text-white border-[#1a1a1a]">1</Button>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 hover:bg-gray-50">2</Button>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 hover:bg-gray-50">3</Button>
          </div>
        </div>
      </div>

      <CTASection />
      
      <Footer />
    </div>
  );
}
