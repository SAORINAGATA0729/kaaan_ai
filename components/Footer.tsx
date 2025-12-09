import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-20 border-t border-gray-800">
      <div className="container mx-auto max-w-[1000px] px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* ブランド情報 */}
          <div className="space-y-4 max-w-xs">
            <div className="text-2xl font-bold tracking-tight">KAAAN</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              サイトグロースエージェンシー<br />
              Growth Your Business, Using Landing Site.
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-12">
            <Link href="/note" className="text-sm text-gray-400 hover:text-white transition-colors">NOTE</Link>
            <Link href="/service/site-optimization" className="text-sm text-gray-400 hover:text-white transition-colors">サービス</Link>
            <Link href="/casestudy" className="text-sm text-gray-400 hover:text-white transition-colors">事例</Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">会社情報</Link>
            <Link href="/contact/service" className="text-sm text-gray-400 hover:text-white transition-colors">お問い合わせ</Link>
          </div>
        </div>

        {/* 下部 */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
          <div>© 2025 KAAAN All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
