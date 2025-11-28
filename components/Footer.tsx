import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-20 border-t border-gray-800">
      <div className="container mx-auto max-w-[1000px] px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* ブランド情報 */}
          <div className="space-y-4 max-w-xs">
            <div className="text-2xl font-bold tracking-tight">ショートカット</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI自動提案システムで、<br />
              BtoB取引のプロセスを大幅に短縮。
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-12">
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">ショートカットとは</Link>
            <Link href="/features" className="text-sm text-gray-400 hover:text-white transition-colors">機能</Link>
            <Link href="/usecase" className="text-sm text-gray-400 hover:text-white transition-colors">活用シーン</Link>
            <Link href="/plan" className="text-sm text-gray-400 hover:text-white transition-colors">料金・プラン</Link>
            <Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">よくある質問</Link>
          </div>
        </div>

        {/* 下部 */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <Link href="/contact" className="hover:text-white transition-colors">プライバシーポリシー</Link>
          <div>© 2025 shortcut All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
