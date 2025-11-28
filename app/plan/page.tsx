import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Check, X } from "lucide-react";

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-32 md:py-48 relative overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-8 relative z-10">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.2] mb-8">
              料金・プラン
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-[1.8] font-light max-w-[700px] mx-auto">
              お客様の規模や課題に合わせて、最適なプランをお選びいただけます。<br />
              まずは無料トライアルから、効果を実感してください。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Light Plan */}
            <Card className="bg-white border border-gray-200 shadow-sm flex flex-col p-8 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0 mb-8">
                <div className="text-lg font-medium text-[#1a1a1a] mb-2">Light</div>
                <div className="text-3xl font-bold text-[#1a1a1a] mb-4">
                  ¥30,000<span className="text-sm font-normal text-[#666]">/月</span>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  まずは小さく始めたい企業向け。<br />
                  基本的な提案生成機能を体験できます。
                </p>
              </CardHeader>
              <CardContent className="p-0 flex-1 mb-8">
                <ul className="space-y-4">
                  {[
                    "月間提案生成数: 10件",
                    "ヒアリングシステム",
                    "簡易提案生成",
                    "ユーザー数: 1名",
                    "メールサポート"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-[14px] text-[#666]">
                      <Check className="w-4 h-4 text-[#1a1a1a] mr-3 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0">
                <Button asChild className="w-full bg-white text-[#1a1a1a] border border-[#1a1a1a] hover:bg-gray-50" size="lg">
                  <Link href="/contact?plan=light">申し込む</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Standard Plan - Featured */}
            <Card className="bg-white border-2 border-[#1a1a1a] shadow-xl flex flex-col p-8 relative transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-[#1a1a1a] text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">
                Recommended
              </div>
              <CardHeader className="p-0 mb-8">
                <div className="text-lg font-medium text-[#1a1a1a] mb-2">Standard</div>
                <div className="text-3xl font-bold text-[#1a1a1a] mb-4">
                  ¥100,000<span className="text-sm font-normal text-[#666]">/月</span>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  本格的に導入したい成長企業向け。<br />
                  ナレッジ活用と品質保証が含まれます。
                </p>
              </CardHeader>
              <CardContent className="p-0 flex-1 mb-8">
                <ul className="space-y-4">
                  {[
                    "月間提案生成数: 無制限",
                    "ヒアリングシステム（カスタマイズ可）",
                    "高度な提案生成（ナレッジ活用）",
                    "ユーザー数: 5名",
                    "品質保証システム",
                    "優先サポート（Chat/Email）"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-[14px] text-[#1a1a1a] font-medium">
                      <Check className="w-4 h-4 text-[#1a1a1a] mr-3 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0">
                <Button asChild className="w-full bg-[#1a1a1a] text-white hover:bg-[#333]" size="lg">
                  <Link href="/demo">無料トライアルを始める</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white border border-gray-200 shadow-sm flex flex-col p-8 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0 mb-8">
                <div className="text-lg font-medium text-[#1a1a1a] mb-2">Enterprise</div>
                <div className="text-3xl font-bold text-[#1a1a1a] mb-4">
                  要お問い合わせ
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  大規模組織・全社導入向け。<br />
                  専任サポートと高度なセキュリティ。
                </p>
              </CardHeader>
              <CardContent className="p-0 flex-1 mb-8">
                <ul className="space-y-4">
                  {[
                    "月間提案生成数: 無制限",
                    "フルカスタマイズ",
                    "ナレッジベース専有環境",
                    "ユーザー数: 無制限",
                    "SSO / IP制限",
                    "専任カスタマーサクセス"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start text-[14px] text-[#666]">
                      <Check className="w-4 h-4 text-[#1a1a1a] mr-3 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0">
                <Button asChild className="w-full bg-white text-[#1a1a1a] border border-[#1a1a1a] hover:bg-gray-50" size="lg">
                  <Link href="/contact?plan=enterprise">お問い合わせ</Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[800px] px-8">
          <h2 className="text-3xl font-medium text-center text-[#1a1a1a] mb-16">よくある質問</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "無料トライアル期間はどのくらいですか？",
                a: "無料トライアル期間は14日間です。Standardプランの全機能をお試しいただけます。"
              },
              {
                q: "プランの変更はいつでも可能ですか？",
                a: "はい、契約期間中でもプランのアップグレードが可能です。ダウングレードは次回の更新タイミングから適用されます。"
              },
              {
                q: "導入サポートはありますか？",
                a: "Standardプラン以上では、導入時のオンボーディングサポート（Web会議）を提供しています。Enterpriseプランでは専任のカスタマーサクセスが支援します。"
              },
              {
                q: "セキュリティ対策はどうなっていますか？",
                a: "通信の暗号化（SSL/TLS）、データの暗号化保存、定期的な脆弱性診断を実施しています。EnterpriseプランではIP制限などの追加機能もご利用いただけます。"
              },
              {
                q: "支払い方法は何がありますか？",
                a: "クレジットカード決済と請求書払い（銀行振込）に対応しています。"
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-[15px] font-medium text-[#1a1a1a] hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-[#666] pb-6 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-12">
             <Link href="/faq" className="text-[#1a1a1a] border-b border-[#1a1a1a] hover:opacity-70 transition-opacity text-sm pb-1">
               すべてのよくある質問を見る
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
