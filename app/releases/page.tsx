import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

export default function ReleasesPage() {
  const releaseItems = [
    { date: "2025.11.10", version: "v2.1.0", title: "ナレッジ統合機能のアップデート：外部ファイル（PDF/PPT）のインポートに対応しました", link: "#" },
    { date: "2025.10.05", version: "v2.0.5", title: "提案書エディタのUI改善とパフォーマンス向上", link: "#" },
    { date: "2025.09.20", version: "v2.0.0", title: "メジャーアップデート：AIエンジンの刷新により生成速度が50%向上しました", link: "#" },
    { date: "2025.08.15", version: "v1.5.2", title: "セキュリティ強化：IPアドレス制限機能の追加", link: "#" },
    { date: "2025.07.10", version: "v1.5.0", title: "新機能：チーム内での提案書共有・コメント機能を追加", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#f9f9f9] py-20 md:py-32">
        <div className="container mx-auto max-w-[1000px] px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-6 leading-tight">
            リリースノート
          </h1>
          <p className="text-[#666]">
            ショートカットの機能追加・改善情報をお届けします。
          </p>
        </div>
      </section>

      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-[800px] px-8">
          <div className="space-y-6">
            {releaseItems.map((item, i) => (
              <Link key={i} href={item.link} className="block group">
                <article className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 border-b border-gray-100 group-hover:border-gray-300 transition-colors">
                  <div className="flex flex-col gap-1 md:w-[120px] shrink-0 pt-1">
                    <time className="text-sm text-[#666] font-mono">{item.date}</time>
                    <span className="text-xs font-medium text-[#1a1a1a] bg-gray-100 px-2 py-0.5 rounded w-fit">
                      {item.version}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-medium text-[#1a1a1a] group-hover:text-[#666] transition-colors mb-2 leading-relaxed">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#999]">クリックして詳細を見る</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#1a1a1a] transition-colors hidden md:block shrink-0 mt-2" />
                </article>
              </Link>
            ))}
          </div>
          
          {/* Pagination (Static) */}
          <div className="mt-16 flex justify-center gap-2">
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-[#1a1a1a] text-white border-[#1a1a1a]">1</Button>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 hover:bg-gray-50">2</Button>
          </div>
        </div>
      </div>

      <CTASection />
      
      <Footer />
    </div>
  );
}
