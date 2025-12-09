import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 border-t border-gray-800">
      <div className="container mx-auto max-w-[1000px] px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* ブランド情報 */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tight mb-1">KAAAN</div>
            <p className="text-xs text-gray-400">
              サイトグロースエージェンシー
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="#problem" className="text-xs text-gray-400 hover:text-white transition-colors">課題</Link>
            <Link href="#solution" className="text-xs text-gray-400 hover:text-white transition-colors">解決策</Link>
            <Link href="#authority" className="text-xs text-gray-400 hover:text-white transition-colors">特徴</Link>
            <Link href="#flow" className="text-xs text-gray-400 hover:text-white transition-colors">流れ</Link>
          </div>
        </div>

        {/* 下部 */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500">
          <Link href="https://kaaan.jp/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">プライバシーポリシー</Link>
          <div>© 2025 KAAAN Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
