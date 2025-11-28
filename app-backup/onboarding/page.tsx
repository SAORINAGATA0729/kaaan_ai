import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const steps = [
  {
    number: 1,
    title: "お問い合わせ・ヒアリング",
    description:
      "お問い合わせフォームからご連絡いただき、担当者よりヒアリングを実施します。",
    items: [
      "現在の課題やニーズの確認",
      "最適なプランのご提案",
      "導入スケジュールの調整",
    ],
  },
  {
    number: 2,
    title: "契約・アカウント設定",
    description: "契約締結後、アカウント設定を行います。",
    items: ["契約書の締結", "アカウントの作成", "初期設定の実施"],
  },
  {
    number: 3,
    title: "導入支援・トレーニング",
    description: "導入支援とトレーニングを実施します。",
    items: [
      "システムの使い方説明",
      "ナレッジの登録方法",
      "実際の提案書生成の練習",
    ],
  },
  {
    number: 4,
    title: "本番運用開始",
    description: "本番運用を開始し、継続的なサポートを提供します。",
    items: [
      "本番環境での運用開始",
      "継続的なサポート",
      "定期的なフォローアップ",
    ],
  },
];

export default function OnboardingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="導入プロセス"
        description="ショートカットの導入プロセスとサポート体制についてご説明します。"
      />

      {/* Introduction Period */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                導入期間の目安
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
                ショートカットの導入期間は、プランによって異なります。
              </p>
              <ul className="list-none p-0 space-y-3">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  <strong className="text-[#1a1a1a]">スタンダードプラン</strong>: 1週間〜2週間
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  <strong className="text-[#1a1a1a]">プロフェッショナルプラン</strong>: 2週間〜1ヶ月
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  <strong className="text-[#1a1a1a]">エンタープライズプラン</strong>: 1ヶ月〜2ヶ月（カスタマイズ内容により異なります）
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Introduction Steps */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              導入ステップ
            </h2>
          </div>
          <div className="space-y-6">
            {steps.map((step) => (
              <Card
                key={step.number}
                className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]"
              >
                <CardContent className="p-0">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-medium text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-medium text-[#1a1a1a] mb-3">
                        {step.title}
                      </h4>
                      <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
                        {step.description}
                      </p>
                      <ul className="list-none p-0 space-y-2">
                        {step.items.map((item, index) => (
                          <li
                            key={index}
                            className="pl-5 relative text-[15px] leading-[1.9] text-[#666]"
                          >
                            <span className="absolute left-0 text-[#1a1a1a]">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support System */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                サポート体制
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
                ショートカットでは、導入後も継続的なサポートを提供しています。
              </p>
              <ul className="list-none p-0 space-y-3">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  <strong className="text-[#1a1a1a]">メールサポート</strong>: 営業日48時間以内に回答
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  <strong className="text-[#1a1a1a]">優先サポート</strong>: プロフェッショナルプラン以上で利用可能
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  <strong className="text-[#1a1a1a]">専任サポート</strong>: エンタープライズプランで利用可能
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  <strong className="text-[#1a1a1a]">定期的なフォローアップ</strong>: 導入後の運用状況を確認し、改善提案を実施
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preparation Items */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                導入前の準備事項
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
                スムーズな導入のために、以下の準備をお願いします。
              </p>
              <ul className="list-none p-0 space-y-3">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  営業資料やホワイトペーパーなどのナレッジの準備
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  過去の提案書や事例の整理
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  利用予定の担当者の決定
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  導入スケジュールの調整
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}



