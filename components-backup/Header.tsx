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
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-[1000px] px-8 md:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-base font-medium tracking-[0.06em] text-black hover:opacity-80 transition-opacity"
          >
            ショートカット
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-5 flex-1 justify-end">
            <Link 
              href="/about" 
              className="text-[13px] text-gray-600 hover:text-black transition-colors relative group"
            >
              ショートカットとは
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
            </Link>
            
            <Link 
              href="/features" 
              className="text-[13px] text-gray-600 hover:text-black transition-colors relative group"
            >
              機能
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
            </Link>
            
            {/* 活用シーン Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[13px] text-gray-600 hover:text-black transition-colors flex items-center gap-1 focus:outline-none group">
                活用シーン
                <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-[600px] p-8 mt-5"
                sideOffset={20}
              >
                <div className="space-y-8">
                  {/* 用途別セクション */}
                  <div>
                    <DropdownMenuLabel className="text-sm font-medium text-black mb-4 px-0">
                      用途別
                    </DropdownMenuLabel>
                    <div className="grid grid-cols-3 gap-0">
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/lead-quality" 
                          className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                        >
                          大量にリードがあるが商談に繋がらない
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/skill-gap" 
                          className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                        >
                          営業組織のスキル差
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/leadtime" 
                          className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                        >
                          リードタイムの長期化
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/resource-shortage" 
                          className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                        >
                          リソース不足
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                  
                  <DropdownMenuSeparator />
                  
                  {/* 部門・部署セクション */}
                  <div>
                    <DropdownMenuLabel className="text-sm font-medium text-black mb-4 px-0">
                      部門・部署
                    </DropdownMenuLabel>
                    <div className="grid grid-cols-3 gap-0">
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/sales" 
                          className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                        >
                          営業
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase/marketing" 
                          className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                        >
                          マーケティング
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link 
                          href="/usecase" 
                          className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                        >
                          カスタマーサクセス
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/plan" 
              className="text-[13px] text-gray-600 hover:text-black transition-colors relative group"
            >
              料金・プラン
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
            </Link>
            
            <Link 
              href="/roi" 
              className="text-[13px] text-gray-600 hover:text-black transition-colors relative group"
            >
              シミュレーション
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
            </Link>
            
            {/* お知らせ Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[13px] text-gray-600 hover:text-black transition-colors flex items-center gap-1 focus:outline-none group">
                お知らせ
                <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-[300px] p-4 mt-5"
                sideOffset={20}
              >
                <div className="grid grid-cols-2 gap-2">
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/releases" 
                      className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                    >
                      リリースノート
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/news" 
                      className="px-4 py-3 text-sm text-black hover:bg-gray-50 rounded-md cursor-pointer"
                    >
                      最新情報
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/contact" 
              className="text-[13px] text-gray-600 hover:text-black transition-colors relative group"
            >
              お問い合わせ
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full" />
            </Link>
          </nav>
          
          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3 ml-4 relative">
            <div className="absolute -top-8 right-0 whitespace-nowrap">
              <Link 
                href="/contact" 
                className="text-[13px] text-gray-600 hover:text-black transition-colors"
              >
                ショートカットをご利用中の方へ｜ログイン
              </Link>
            </div>
            <Button 
              asChild 
              size="sm" 
              className="bg-black text-white hover:bg-gray-800 h-[36px] px-4 text-[13px] font-medium tracking-[0.06em]"
            >
              <Link href="/demo">無料トライアル</Link>
            </Button>
            <Button 
              asChild 
              size="sm" 
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white h-[36px] px-4 text-[13px] font-medium tracking-[0.06em]"
            >
              <Link href="/service-download">サービス資料</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

