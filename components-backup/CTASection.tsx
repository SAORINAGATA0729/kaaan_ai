import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="cta" className="py-[70px] border-t border-gray-200">
      <div className="container mx-auto max-w-[1000px] px-8">
        <div className="max-w-[500px] mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[32px] md:text-[32px] text-[28px] font-medium leading-[1.2] mb-7 text-[#1a1a1a] whitespace-nowrap md:whitespace-normal">
            ショートカットをはじめませんか？
          </h2>
          
          {/* Description */}
          <p className="text-base leading-[1.9] mb-10 text-[#666]">
            無料トライアルで、BtoB取引のプロセスを<br />
            ショートカットする効果を実感してください。
          </p>
          
          {/* Primary CTA Buttons */}
          <div className="flex gap-3 justify-center flex-wrap mb-5">
            <Button 
              asChild 
              size="lg"
              className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[42px] px-7 text-[13px] font-medium tracking-[0.06em] border border-[#1a1a1a]"
            >
              <Link href="/demo">無料トライアルを始める</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white h-[42px] px-7 text-[13px] font-medium tracking-[0.06em] border border-[#1a1a1a]"
            >
              <Link href="/service-download">サービス資料ダウンロード</Link>
            </Button>
          </div>
          
          {/* Secondary Links */}
          <div className="flex justify-center gap-3 text-[13px] flex-wrap">
            <Link 
              href="/contact" 
              className="text-[#666] hover:text-[#1a1a1a] transition-colors"
            >
              お問い合わせ
            </Link>
            <span className="text-[#ccc]">|</span>
            <Link 
              href="/roi" 
              className="text-[#666] hover:text-[#1a1a1a] transition-colors"
            >
              料金シュミレーションを試す
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



