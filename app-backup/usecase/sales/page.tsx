import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

export default function SalesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <h1 className="text-[28px] font-bold leading-[1.4] mb-5 text-[#1a1a1a]">
            営業組織の課題
          </h1>
          <p className="text-[15px] leading-[1.9] text-[#666]">
            営業組織の課題を解決し、営業効率を向上させます。
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}



