import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="ショートカットの4つの主要機能"
        description="提案書作成の時間を、事業成長の時間に変える4つの機能"
      />

      {/* Feature 1: ヒアリングシステム */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="mb-[60px]">
            <h3 className="text-2xl font-medium mb-5 text-[#1a1a1a]">
              1. ヒアリングシステム
            </h3>
            <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
              構造化されたヒアリングにより、必要な情報を効率的に収集します。
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-4 text-[#1a1a1a]">主な機能</h4>
            <ul className="space-y-2 text-[15px] leading-[1.9] text-[#666] mb-6 list-none pl-0">
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">企業URL入力で自動情報取得</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">対話形式で効率的な情報収集</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">自動深掘り質問</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">サービス特化ヒアリング</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">プロジェクト設計書自動作成</li>
            </ul>
            
            <div className="bg-[#f8f8f8] p-6 border-l-[3px] border-[#1a1a1a] mt-6">
              <p className="text-sm text-[#1a1a1a] font-medium m-0">
                価値: 質の高い商談・リードに集中できる組織になる
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: 提案生成システム */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="mb-[60px]">
            <h3 className="text-2xl font-medium mb-5 text-[#1a1a1a]">
              2. 提案生成システム
            </h3>
            <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
              企業情報自動読み込みから最適提案生成まで、3-5分で完結します。
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-4 text-[#1a1a1a]">主な機能</h4>
            <ul className="space-y-2 text-[15px] leading-[1.9] text-[#666] mb-6 list-none pl-0">
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">企業情報自動読み込み</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">プロジェクト設計書から最適提案生成</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">「プロとしての所感」自動生成</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">「プロジェクト設計」自動生成</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">品質チェック自動実施</li>
            </ul>
            
            <div className="bg-white p-6 border-l-[3px] border-[#1a1a1a] mt-6">
              <p className="text-sm text-[#1a1a1a] font-medium m-0">
                価値: 受注確度向上、スキル標準化
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: ナレッジ蓄積・活用システム */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="mb-[60px]">
            <h3 className="text-2xl font-medium mb-5 text-[#1a1a1a]">
              3. ナレッジ蓄積・活用システム（ミキシングベースド）
            </h3>
            <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
              ナレッジを蓄積し、提案書作成に自動活用することで、提案書作成時間を3-5分に短縮します。
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-4 text-[#1a1a1a]">主な機能</h4>
            <ul className="space-y-2 text-[15px] leading-[1.9] text-[#666] mb-6 list-none pl-0">
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">ナレッジ追加・蓄積（ホワイトペーパー、営業資料、事例）</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">提案書作成への自動活用</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">該当ナレッジの自動選択</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">事例の自動マッチング</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">自己強化システム（使うほど価値向上）</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">継続的学習・進化</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-4 text-[#1a1a1a]">ミキシングベースドの説明</h4>
            <p className="mb-4 text-[15px] leading-[1.9] text-[#666]">
              ショートカットは、3つのミキシング（情報・施策・組織）により、高品質な提案書を自動生成します。
            </p>
            <ul className="space-y-2 text-[15px] leading-[1.9] text-[#666] mb-6 list-none pl-0">
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                <strong>情報のミキシング</strong>: 企業データ + 過去事例 + 業界知見 + 顧客課題 = 個別最適提案
              </li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                <strong>施策のミキシング</strong>: SNS向けコンテンツ → SEO記事 + ウェビナー素材 + 営業資料
              </li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                <strong>組織のミキシング</strong>: マーケ + セールス + CS = 統合顧客体験チーム
              </li>
            </ul>
            
            <div className="bg-[#f8f8f8] p-6 border-l-[3px] border-[#1a1a1a] mt-6">
              <p className="text-sm text-[#1a1a1a] font-medium m-0">
                価値: 戦略的業務に集中、提案書作成3-5分に短縮
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: 品質保証システム */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="mb-[60px]">
            <h3 className="text-2xl font-medium mb-5 text-[#1a1a1a]">
              4. 品質保証システム
            </h3>
            <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
              提案書の品質を自動チェック・改善し、一定水準以上に保ちます。
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-4 text-[#1a1a1a]">主な機能</h4>
            <ul className="space-y-2 text-[15px] leading-[1.9] text-[#666] mb-6 list-none pl-0">
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">品質チェック自動実施</li>
              <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">提案内容の一貫性保証</li>
            </ul>
            
            <div className="bg-white p-6 border-l-[3px] border-[#1a1a1a] mt-6">
              <p className="text-sm text-[#1a1a1a] font-medium m-0">
                価値: 受注確度向上、スキル標準化
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 4つの機能が実現する価値 */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-[60px] md:mb-[60px]">
            <h2 className="text-[28px] md:text-[28px] text-[24px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              4つの機能が実現する価値
            </h2>
          </div>
          
          <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
            <CardContent className="p-0">
              <ul className="space-y-2 text-[15px] leading-[2.2] text-[#666] list-none pl-0">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                  リード獲得から商談までの時間とプロセスをショートカット（1ヶ月〜2ヶ月 → 1日〜2日）
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                  確度の低いリード対応から解放
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                  受注率向上
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                  意思決定のスピードが大幅に向上
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



