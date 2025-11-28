import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

export function CTASection({
  title = "ショートカットをはじめませんか？",
  description = (
    <>
      無料トライアルで、BtoB取引のプロセスを<br className="hidden md:block" />
      ショートカットする効果を実感してください。
    </>
  ),
  primaryButtonText = "無料トライアルを始める",
  primaryButtonLink = "/demo"
}: CTASectionProps) {
  return (
    <section id="cta" className="py-20 border-t border-gray-100 bg-white">
      <div className="container mx-auto max-w-[1000px] px-8">
        <div className="max-w-[600px] mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#1a1a1a] tracking-tight">
            {title}
          </h2>
          
          {/* Description */}
          <div className="text-base leading-relaxed mb-10 text-[#666] font-light">
            {description}
          </div>
          
          {/* Primary CTA Buttons */}
          <div className="flex justify-center">
            <Button 
              asChild 
              className="bg-[#1a1a1a] text-white hover:bg-[#333] h-12 px-10 text-[14px] font-bold tracking-wide rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 min-w-[240px]"
            >
              <Link href={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
