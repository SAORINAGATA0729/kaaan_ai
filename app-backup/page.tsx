import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-[140px] md:py-[140px] pb-[100px] md:pb-[100px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="text-[13px] tracking-[0.12em] uppercase opacity-60 mb-3">
              SHORTENING THE PROCESS
            </div>
            <h1 className="text-[56px] md:text-[56px] text-[36px] font-light tracking-[0.08em] mb-5 leading-[1.3]">
              BtoB取引のプロセスを大幅ショートカット
            </h1>
            <p className="text-lg md:text-lg text-base leading-[1.9] opacity-85 mb-7 font-light">
              リード獲得から商談まで1ヶ月〜2ヶ月かかっていた期間が、1日〜2日に短縮。<br />
              SaaS提供企業もSaaS導入検討企業も、BtoB取引のプロセス全体をショートカットすることで、事業成長を加速させます。
            </p>
            <div className="flex gap-3 justify-center flex-wrap mt-10">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-[#1a1a1a] hover:bg-transparent hover:text-white h-[42px] px-7 text-[13px] font-medium tracking-[0.06em] border border-white"
              >
                <Link href="#cta">無料トライアルを始める</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="bg-transparent text-white hover:bg-white hover:text-[#1a1a1a] h-[42px] px-7 text-[13px] font-medium tracking-[0.06em] border-white/40"
              >
                <Link href="#cta">サービス資料ダウンロード</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: サービス概要（Before/After/Howストーリー） */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-[60px] md:mb-[60px]">
            <h2 className="text-[28px] md:text-[28px] text-[24px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              従来のBtoB取引プロセスを根本から変える
            </h2>
            <p className="text-base max-w-[700px] mx-auto text-[#666] leading-[1.9]">
              プロセスは回っている。でも、成果が出ない。それが従来のBtoB取引の課題でした。
            </p>
          </div>
          
          {/* Before Story */}
          <div className="mb-8">
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-5">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  Before: 従来のプロセスを回しているのに、成果が出ない
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
                  従来のBtoB取引は、リード獲得から商談まで1ヶ月〜2ヶ月かかっていました。
                </p>
                <div className="text-sm leading-8 text-[#666] mb-5">
                  <div className="mb-3"><strong>マーケティング部門</strong>: リード獲得・育成（MAツール）</div>
                  <div className="mb-3">↓</div>
                  <div className="mb-3"><strong>インサイドセールス部門</strong>: アポ獲得・商談の場を設ける</div>
                  <div className="mb-3">↓</div>
                  <div className="mb-3"><strong>フィールドセールス部門</strong>: ヒアリング・提案・追いかけ</div>
                  <div className="mb-3">↓</div>
                  <div><strong>カスタマーサクセス部門</strong>: 導入支援・継続率向上</div>
                </div>
                <p className="text-[#999] text-[13px]">
                  期間: 1ヶ月〜2ヶ月 / プロセスは回っている。でも、成果が出ない。
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* After Story */}
          <div className="mb-8">
            <Card className="bg-white border border-[#1a1a1a] p-10 md:p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-5">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  After: 従来のプロセス全体をショートカットし、成果が出た
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
                  ショートカットは、BtoB取引プロセス全体をショートカットし、1日〜2日で完結します。
                </p>
                <div className="text-sm leading-8 text-[#666] mb-5">
                  <div className="mb-3"><strong>課題入力</strong>（Webフォーム）</div>
                  <div className="mb-3">↓</div>
                  <div className="mb-3"><strong>AIが自動生成</strong>（3-5分）</div>
                  <div className="mb-3">↓</div>
                  <div className="mb-3"><strong>提案書完成</strong></div>
                  <div className="mb-3">↓</div>
                  <div><strong>商談・意思決定・契約</strong></div>
                </div>
                <p className="text-[#1a1a1a] text-[13px] font-medium">
                  期間: 1日〜2日 / MAツールもインサイドセールスも不要。成果が出た。
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* How Story */}
          <div>
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-5">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  How: ヒアリングから提案書生成まで、3-5分で自動化
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="mb-5 text-[15px] leading-[1.9] text-[#666]">
                  ショートカットは、4つの主要機能で、提案書作成の時間を事業成長の時間に変えます。
                </p>
                <div className="text-sm leading-8 text-[#666]">
                  <div className="mb-3">1. <strong>AI簡易提案エンジン</strong>: 企業データ + 過去事例 + 業界知見 + 顧客課題 = 個別最適提案</div>
                  <div className="mb-3">2. <strong>ヒアリングシステム</strong>: 構造化されたヒアリングにより、必要な情報を効率的に収集</div>
                  <div className="mb-3">3. <strong>知識ベース統合</strong>: エリアエージェントによる自動選択により、必要な知識を自動統合</div>
                  <div>4. <strong>品質保証システム</strong>: 提案書の品質を自動チェック・改善</div>
                </div>
                <p className="mt-5 text-[#1a1a1a] text-[13px] font-medium">
                  その時間を、事業成長に。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: 主要機能紹介 */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-[60px] md:mb-[60px]">
            <h2 className="text-[28px] md:text-[28px] text-[24px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              ショートカットの4つの主要機能
            </h2>
            <p className="text-base max-w-[700px] mx-auto text-[#666] leading-[1.9]">
              提案書作成の時間を、事業成長の時間に変える4つの機能
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  1. AI簡易提案エンジン
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  企業データ + 過去事例 + 業界知見 + 顧客課題 = 個別最適提案。情報のミキシングにより、高品質な提案書を自動生成します。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  2. ヒアリングシステム
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  構造化されたヒアリングにより、必要な情報を効率的に収集。不要な質問を自動でスキップし、確度の高い案件に集中できます。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  3. 知識ベース統合
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  エリアエージェントによる自動選択により、必要な知識を自動統合。提案書作成時間を3-5分に短縮し、事業成長に直結する時間を創出します。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] md:col-span-2 lg:col-span-1">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  4. 品質保証システム
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  提案書の品質を自動チェック・改善。提案書の品質が一定水準以上に保たれることで、受注確度が向上し、組織全体の受注率が向上します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: 真の価値提案 */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-[60px] md:mb-[60px]">
            <h2 className="text-[28px] md:text-[28px] text-[24px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              ショートカットが実現する「ショートカットできること」
            </h2>
            <p className="text-base max-w-[700px] mx-auto text-[#666] leading-[1.9]">
              提供側と検討側の組織の規模やフェーズに関わらず、本当に価値のある業務に集中できる環境を作り出します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* SaaS提供企業の価値提案 */}
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-3">
                  SaaS提供企業がショートカットできること
                </CardTitle>
                <p className="mb-4 font-medium text-[#1a1a1a] text-[15px] leading-[1.9]">
                  リード獲得から商談までの時間とプロセスをショートカット
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 text-[15px] leading-[1.9] text-[#666] mb-5 list-none pl-0">
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">1ヶ月〜2ヶ月かかっていた期間が1日〜2日で済む</li>
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">MAツールでリードを育成する時間を、別の戦略的な業務に使える</li>
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">インサイドセールスが電話をかける時間を、本当にホットなリードとの商談に集中できる</li>
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">提案書作成に数時間〜数日かかっていた時間を、3-5分に短縮する</li>
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">個人のスキルに依存せず、誰でも高品質な提案書を作成できる</li>
                </ul>
                <p className="mt-5 text-[13px] text-[#1a1a1a] font-medium">
                  成果: リソース不足でも、少人数でも、確度の低いリード対応に追われる日々から抜け出せる。組織全体の受注率が向上、少人数でも効率的にビジネスを成長。
                </p>
              </CardContent>
            </Card>
            
            {/* SaaS導入検討企業の価値提案 */}
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-3">
                  SaaS導入検討企業がショートカットできること
                </CardTitle>
                <p className="mb-4 font-medium text-[#1a1a1a] text-[15px] leading-[1.9]">
                  情報収集から意思決定までのプロセスをショートカット
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 text-[15px] leading-[1.9] text-[#666] mb-5 list-none pl-0">
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">サイトで課題を入力するだけでAIが最適な簡易提案を生成</li>
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">すぐに商談の場が設けられる</li>
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">煩雑な情報収集や複数企業との商談プロセスが不要</li>
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">いちいち話を聞かないといけない、電話が来てくるといったものがなくなる</li>
                  <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">簡易提案に、機能、対応できる課題が記載されているため、すぐに必要な情報がわかる</li>
                </ul>
                <p className="mt-5 text-[13px] text-[#1a1a1a] font-medium">
                  成果: 意思決定のスピードが大幅に向上する。非効率なプロセスを経ることなく、必要な情報を得て迅速に意思決定ができる。
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10 p-10 bg-[#f8f8f8] border border-[#e0e0e0]">
            <p className="text-base leading-[1.9] text-[#1a1a1a] font-medium">
              その結果、提供側と検討側の組織の規模やフェーズに関わらず、<br />
              本当に価値のある業務に集中できる環境を作り出します。<br />
              BtoB取引プロセス全体をショートカットすることで、圧倒的なスピードで事業成長を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
