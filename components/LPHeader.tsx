"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function LPHeader() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          
          {/* Navigation - Desktop - Anchor Links */}
          <nav className="hidden xl:flex items-center gap-8 flex-1 justify-end mr-8">
            {[
              { label: "課題", id: "problem" },
              { label: "解決策", id: "solution" },
              { label: "手法", id: "how" },
              { label: "特徴", id: "authority" },
              { label: "流れ", id: "flow" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-[15px] font-medium text-[#666] hover:text-[#1a1a1a] transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>
          
          {/* CTA Buttons - Desktop */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Button 
              asChild 
              size="sm" 
              className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[44px] px-6 text-[14px] font-bold tracking-wide rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact/service?service=ai">案件相談・お問い合わせ</Link>
            </Button>
            <Button 
              asChild 
              size="sm" 
              variant="outline"
              className="bg-transparent text-[#1a1a1a] hover:bg-gray-50 h-[44px] px-6 text-[14px] font-bold tracking-wide border border-[#1a1a1a] rounded-full transition-all"
            >
              <Link href="/download">サービス紹介資料</Link>
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
