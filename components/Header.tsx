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
            KAAAN
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden xl:flex items-center gap-6 flex-1 justify-end mr-4">
            <Link 
              href="/note" 
              className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors relative group py-2"
            >
              NOTE
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-200 group-hover:w-full" />
            </Link>
            
            {/* サービス Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors flex items-center gap-1 focus:outline-none group py-2">
                サービス
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-[300px] p-4 mt-2 rounded-xl border border-gray-100 shadow-xl bg-white/98 backdrop-blur-lg"
                sideOffset={5}
              >
                <div className="flex flex-col gap-2">
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/service/site-optimization" 
                      className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                    >
                      サイト価値最大化支援
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      href="/service/project-support" 
                      className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors block"
                    >
                      総合プロジェクト支援
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/casestudy" 
              className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors relative group py-2"
            >
              事例
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-200 group-hover:w-full" />
            </Link>

            {/* 会社情報 Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[13px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors flex items-center gap-1 focus:outline-none group py-2">
                会社情報
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
                      href="/about" 
                      className="px-3 py-2 text-sm text-[#1a1a1a] hover:bg-gray-50 rounded-md cursor-pointer transition-colors font-medium"
                    >
                      私たちについて
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          {/* CTA Buttons - Desktop */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Button 
              asChild 
              size="sm" 
              variant="outline"
              className="bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white h-[40px] px-5 text-[13px] font-bold tracking-wide border border-[#1a1a1a] rounded-full transition-all"
            >
              <Link href="/ai-proposal">AI簡易提案</Link>
            </Button>
            <Button 
              asChild 
              size="sm" 
              variant="outline"
              className="bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white h-[40px] px-5 text-[13px] font-bold tracking-wide border border-[#1a1a1a] rounded-full transition-all"
            >
              <Link href="/download">資料請求</Link>
            </Button>
            <Button 
              asChild 
              size="sm" 
              className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[40px] px-5 text-[13px] font-bold tracking-wide rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact/service">無料相談</Link>
            </Button>
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
