"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm transition-all duration-300">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex h-[80px] items-center justify-between gap-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg font-bold tracking-tight text-[#1a1a1a] hover:opacity-80 transition-opacity shrink-0"
          >
            ショートカット
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden xl:flex items-center gap-6 flex-1 justify-end mr-4">
            <Link 
              href="/about" 
              className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors relative group py-2"
            >
              ショートカットとは
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-200 group-hover:w-full" />
            </Link>
            
            <Link 
              href="/features" 
              className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors relative group py-2"
            >
              機能
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-200 group-hover:w-full" />
            </Link>
            
            {/* 活用シーン Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors flex items-center gap-1 focus:outline-none group py-2">
                活用シーン
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-[700px] p-6 mt-2 rounded-xl border border-gray-100 shadow-xl bg-white/98 backdrop-blur-lg"
                sideOffset={5}
              >
                <div className="space-y-6">
                  {/* 用途別セクション */}
                  <div>
                    <DropdownMenuLabel className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">
                      <Link href="/usecase" className="hover:text-[#1a1a1a] transition-colors">
                        一覧で見る
                      </Link>
                    </DropdownMenuLabel>
                    <div className="grid grid-cols-3 gap-2">
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/lead-quality" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          大量にリードがあるが商談に繋がらない
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/skill-gap" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          営業組織のスキル差
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/leadtime" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          リードタイムの長期化
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/resource-shortage" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          リソース不足
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/limited-channels" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          リード獲得チャネルが限られている
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/marketing-ineffective" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          マーケティング施策の効果が出ない
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/enterprise-complex" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          エンタープライズ企業への対応が複雑
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/partner-management" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          パートナー・チャネル管理に時間がかかる
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/event-dependent" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          イベント・展示会に依存したリード獲得
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/lead-followup" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          リードフォローに時間がかかる
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/content-marketing" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          コンテンツマーケティングが商談に繋がらない
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/low-quality-leads" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          確度の低いリード対応に追われる
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/business-growth" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          事業成長を加速させたい
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/executive-time" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          経営層・リーダーが営業業務に時間を取られる
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/proposal-time" 
                          className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                        >
                          提案書作成に時間がかかる
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/plan" 
              className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors relative group py-2"
            >
              料金・プラン
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-200 group-hover:w-full" />
            </Link>

            {/* お知らせ Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors flex items-center gap-1 focus:outline-none group py-2">
                お知らせ
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-[240px] p-2 mt-2 rounded-xl border border-gray-100 shadow-xl bg-white/98 backdrop-blur-lg"
                sideOffset={5}
              >
                <div className="flex flex-col gap-1">
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/releases" 
                      className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors font-medium"
                    >
                      リリースノート
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/news" 
                      className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors font-medium"
                    >
                      最新情報
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/faq" 
              className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors relative group py-2"
            >
              よくある質問
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-200 group-hover:w-full" />
            </Link>
          </nav>
          
          {/* CTA Buttons - Desktop */}
          <div className="hidden xl:flex flex-col items-end gap-2 shrink-0">
            <Link 
              href="/contact" 
              className="text-xs text-[#666] hover:text-[#1a1a1a] transition-colors whitespace-nowrap"
            >
              ショートカットをご利用中の方へ｜ログイン
            </Link>
            <div className="flex items-center gap-3">
              <Button 
                asChild 
                size="sm" 
                className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[40px] px-5 text-[13px] font-bold tracking-wide rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Link href="/demo">無料トライアル</Link>
              </Button>
              <Button 
                asChild 
                size="sm" 
                variant="outline"
                className="bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white h-[40px] px-5 text-[13px] font-bold tracking-wide border border-[#1a1a1a] rounded-full transition-all"
              >
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <Button variant="ghost" size="sm" className="text-[#1a1a1a]">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
