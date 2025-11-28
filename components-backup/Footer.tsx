import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white border-t border-gray-800">
      <div className="container mx-auto max-w-[1000px] px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_3fr_2fr] gap-8 mb-12">
          {/* 会社情報・ブランド */}
          <div className="footer-col">
            <div className="mb-4">
              <div className="text-xs text-white/60 mb-1 leading-[1.5]">
                AI自動提案システム
              </div>
              <div className="text-2xl font-medium leading-[1.2]">
                ショートカット
              </div>
            </div>
            <p className="text-xs leading-[1.8] text-white/75">
              BtoB取引のプロセスを大幅ショートカット。提案書作成の時間を、事業成長を加速する時間へ。
            </p>
          </div>

          {/* サービス・機能とサポートをまとめたブロック */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* サービス・機能 */}
            <div className="footer-col">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/about" 
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    ショートカットとは
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/features" 
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    機能
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/usecase" 
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    活用シーン
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/plan" 
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    料金・プラン
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/roi" 
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    シミュレーション
                  </Link>
                </li>
              </ul>
            </div>

            {/* サポート */}
            <div className="footer-col">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/faq" 
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/onboarding" 
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    導入プロセス
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="footer-col">
            <div className="flex flex-col gap-3">
              <Button 
                asChild 
                className="bg-white text-[#1a1a1a] hover:bg-white/90 h-[44px] px-6 text-[13px] font-medium tracking-[0.06em] border border-white"
              >
                <Link href="/demo">無料トライアル</Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="bg-transparent text-white/75 hover:bg-white/10 hover:text-white border-white/30 h-[44px] px-6 text-[13px] font-medium tracking-[0.06em]"
              >
                <Link href="/service-download">サービス資料ダウンロード</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 下部 */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link 
              href="/contact" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              プライバシーポリシー
            </Link>
          </div>
          <div className="text-sm text-white/60">
            © 2025 shortcut All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

