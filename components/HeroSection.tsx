import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center bg-[#1a1a1a] text-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-[#222] -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />
      
      <div className="container mx-auto max-w-[1200px] px-8 relative z-10">
        <div className="max-w-[900px]">
          <div className="inline-block mb-8">
            <span className="text-[13px] tracking-[0.25em] uppercase font-medium border-b border-white/30 pb-2">
              Shortening the Process
            </span>
          </div>
          
          <h1 className="text-[64px] md:text-[88px] font-light tracking-tight leading-[1.1] mb-10 -ml-[4px]">
            BtoB取引の<br />
            プロセスを<br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">大幅ショートカット</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 leading-[2] max-w-[600px] mb-16 font-light">
            リード獲得から商談まで1ヶ月〜2ヶ月かかっていた期間が、1日〜2日に短縮。
            BtoB取引のプロセス全体をショートカットすることで、事業成長を加速させます。
          </p>
          
          <div className="flex gap-6 flex-wrap">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-[#1a1a1a] hover:bg-white/90 h-[56px] px-10 text-[15px] font-medium tracking-[0.06em] rounded-full transition-transform hover:scale-105"
            >
              <Link href="/demo">無料トライアルを始める</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white/10 hover:text-white h-[56px] px-10 text-[15px] font-medium tracking-[0.06em] border-white/30 rounded-full transition-transform hover:scale-105"
            >
              <Link href="/service-download">サービス資料ダウンロード</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
