import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CheckCircle2, FileText, Users, Laptop, Rocket } from "lucide-react";

export default function OnboardingPage() {
  const steps = [
    {
      icon: FileText,
      step: "STEP 01",
      title: "お問い合わせ・ヒアリング",
      desc: "まずはWebフォームよりお問い合わせください。貴社の課題や現状の業務プロセスについて、担当者がヒアリングさせていただきます。",
      duration: "1日〜"
    },
    {
      icon: Laptop,
      step: "STEP 02",
      title: "デモンストレーション・トライアル",
      desc: "実際の画面を用いたデモンストレーションを実施します。また、14日間の無料トライアルで、実際の操作感や生成される提案書の品質をご確認いただけます。",
      duration: "1週間〜"
    },
    {
      icon: Users,
      step: "STEP 03",
      title: "プラン選定・ご契約",
      desc: "トライアルの結果を踏まえ、最適なプランをご提案します。契約手続きはクラウドサイン等でスムーズに完結します。",
      duration: "1日〜"
    },
    {
      icon: Rocket,
      step: "STEP 04",
      title: "導入・オンボーディング",
      desc: "アカウント発行後、キックオフミーティングを実施します。初期設定やナレッジの登録、利用メンバーへのレクチャーなど、運用開始まで手厚くサポートします。",
      duration: "1週間〜"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#f9f9f9] py-20 md:py-32">
        <div className="container mx-auto max-w-[1000px] px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-6 leading-tight">
            導入プロセス
          </h1>
          <p className="text-[#666]">
            お問い合わせから運用開始までの流れをご紹介します。<br />
            最短2週間で本格的な運用を開始いただけます。
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="space-y-12 relative">
            {/* Vertical Line (Desktop) */}
            <div className="absolute left-[40px] top-0 bottom-0 w-[1px] bg-gray-200 hidden md:block" />

            {steps.map((step, i) => (
              <div key={i} className="relative pl-0 md:pl-24">
                {/* Icon Circle (Desktop) */}
                <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10 hidden md:flex">
                  <step.icon className="w-8 h-8 text-[#1a1a1a]" strokeWidth={1.5} />
                </div>

                <Card className="border border-gray-200 shadow-none hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-bold text-[#1a1a1a] tracking-widest">{step.step}</div>
                      <div className="text-xs font-medium text-[#666] bg-gray-100 px-2 py-1 rounded">
                        期間目安: {step.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-medium text-[#1a1a1a]">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[15px] text-[#666] leading-relaxed">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-[#1a1a1a] text-white py-24 md:py-32">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              安心の導入支援体制
            </h2>
            <p className="text-white/70 font-light">
              ツールを導入して終わりではありません。<br />
              お客様のビジネス成果創出に向けて、カスタマーサクセスチームが伴走します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "キックオフ", desc: "導入目的の再確認と、運用ルールの策定を支援します。" },
              { title: "勉強会・レクチャー", desc: "利用メンバー向けの実践的なトレーニングを実施します。" },
              { title: "定例ミーティング", desc: "利用状況の分析と、改善に向けたアドバイスを行います。" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      
      <Footer />
    </div>
  );
}
