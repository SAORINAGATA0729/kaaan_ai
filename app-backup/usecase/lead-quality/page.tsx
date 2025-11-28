import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

export default function LeadQualityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <h1 className="text-[28px] font-bold leading-[1.4] mb-5 text-[#1a1a1a]">
            大量にリードがあるが商談に繋がらない
          </h1>
          <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
            展示会やイベントで大量のリードを獲得したのに、商談に繋がらない。メールマーケティングにも力を入れているが、なかなか引き上げが難しい。ホワイトペーパーも多数用意しているが、商談となるとかなり遠く、雑多なリードが溢れてしまう。
          </p>
          <p className="text-[15px] leading-[1.9] text-[#666]">
            経営会議ではマーケティングリード数・商談数が主要議題となり、パートナー含め、チームを作り商談数を追っているものの、なかなか成果が出ない。オフライン（展示会・イベント）でのリード獲得が中心で、オンラインでの獲得ができない。オフラインリードは多いが商談に繋がらず、ほぼリード獲得どまり。このような課題を抱えている企業は少なくありません。
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <h2 className="text-[28px] font-bold leading-[1.4] mb-5 text-[#1a1a1a]">
            なぜそのような状況に陥るのか
          </h2>
          <p className="text-[15px] leading-[1.9] text-[#666] mb-6">
            このような状況が起こる根本的な理由は、<strong>リードの温度感や課題の明確さを測る仕組みがない</strong>ことです。
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                マーケティング担当者の課題：リードの質が分からないまま、全てのリードを営業に引き渡してしまう
              </h3>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
                展示会やイベントで獲得したリードは、名刺交換や資料請求の段階で止まってしまうことが多く、そのリードが本当に商談に繋がる可能性があるのか、どのような課題を抱えているのかが分からないまま、営業チームに引き渡してしまいます。
              </p>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-2"><strong>マーケティング担当者の行動：</strong></p>
              <ul className="list-none p-0 space-y-2 mb-4">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  展示会・イベントで名刺を集める
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  資料請求フォームからリードを獲得する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  ホワイトペーパーをダウンロードしたリードを獲得する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  しかし、リードの温度感や課題の明確さが分からないまま、営業チームに引き渡す
                </li>
              </ul>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-2"><strong>結果：</strong></p>
              <ul className="list-none p-0 space-y-2">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  確度の低いリード対応に時間を取られ、本当に価値のある商談に集中できなくなる
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  無駄なリソース・無駄な工数が発生する
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                営業担当者の課題：リード獲得から商談までのプロセスが長すぎる
              </h3>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
                リードを獲得してから、ヒアリングを行い、課題を整理し、提案書を作成し、商談の場を設けるまでに数ヶ月かかってしまいます。
              </p>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-2"><strong>営業担当者の行動：</strong></p>
              <ul className="list-none p-0 space-y-2 mb-4">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  マーケティングから引き渡されたリードに対して架電を行う
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  ヒアリングを行い、課題を整理する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  課題を基に提案書を作成する（数時間〜数日かかる）
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  提案書を送付し、商談の場を設ける
                </li>
              </ul>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-2"><strong>結果：</strong></p>
              <ul className="list-none p-0 space-y-2">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  この間に、リードの温度感が下がってしまう
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  競合他社に先を越されてしまう可能性がある
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  特に、リードタイムが半年以上ある企業では、早めにクロージングしていかないと事業の数値にならないため、この長いプロセスが致命的になる
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                経営層の課題：リードの温度感を測る仕組みがない
              </h3>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
                メールマーケティングやコンテンツマーケティングでリードを獲得しても、そのリードがどの程度の温度感を持っているのか、具体的にどのような課題を抱えているのかが分からないため、適切なタイミングでアプローチすることができません。
              </p>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-2"><strong>経営層の行動：</strong></p>
              <ul className="list-none p-0 space-y-2 mb-4">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  マーケティングリード数・商談数を追っている
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  パートナー含め、チームを作り商談数を追っている
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  しかし、リードの質を測る仕組みがない
                </li>
              </ul>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-2"><strong>結果：</strong></p>
              <ul className="list-none p-0 space-y-2">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  リードは獲得できても、商談に繋がらないという状況が続いてしまう
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  商談化率が低いまま、改善できない
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <h2 className="text-[28px] font-bold leading-[1.4] mb-5 text-[#1a1a1a]">
            ショートカットが課題を解決します
          </h2>
          <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
            ショートカットは、この課題を根本から解決します。<strong>検討側が具体的な課題を入力することで、温度感の高いホットリードを獲得でき、提案書作成時間を大幅に短縮することで、迅速に商談の場を設けることができます</strong>。
          </p>
          <p className="text-[15px] leading-[1.9] text-[#666] mb-8">
            では、どのように解決していくのかを具体的な手順で説明していきます。
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                ステップ1: 検討側が具体的な課題を入力する
              </h3>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
                検討側（見込み顧客）が、ショートカットのフォームに具体的な課題を入力します。
              </p>
              <ul className="list-none p-0 space-y-2 mb-4">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  検討側が「現在の課題」を入力する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  検討側が「解決したいこと」を入力する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  検討側が「予算感」を入力する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  検討側が「導入時期」を入力する
                </li>
              </ul>
              <p className="text-[15px] leading-[1.9] text-[#666]">
                これにより、リードの温度感や課題の明確さが分かるようになります。従来は名刺交換や資料請求の段階で止まってしまっていたリードも、具体的な課題を入力することで、商談に直結する可能性が高いホットリードとして判定できるようになります。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                ステップ2: ショートカットがリードの温度感を判定する
              </h3>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
                ショートカットが、検討側が入力した課題を基に、リードの温度感を自動的に判定します。
              </p>
              <ul className="list-none p-0 space-y-2 mb-4">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  入力された課題の明確さを評価する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  予算感や導入時期から温度感を判定する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  商談に直結する可能性が高いリードを「ホットリード」として判定する
                </li>
              </ul>
              <p className="text-[15px] leading-[1.9] text-[#666]">
                マーケティング担当者は、ショートカットで判定されたホットリードのリストを確認し、リードの温度感や課題の明確さを確認してから、営業チームに引き渡すリードを選定できます。これにより、確度の低いリード対応から解放され、質の高いリードに集中できるようになります。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                ステップ3: ショートカットが提案書を自動生成する
              </h3>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
                ショートカットが、検討側が入力した課題を基に、提案書を自動生成します。
              </p>
              <ul className="list-none p-0 space-y-2 mb-4">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  検討側が入力した課題を基に、AIが提案書を生成する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  提案書作成時間が3-5分に短縮される
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  エンタープライズ企業に響く提案書も生成可能
                </li>
              </ul>
              <p className="text-[15px] leading-[1.9] text-[#666]">
                従来は、リードを獲得してから、ヒアリングを行い、課題を整理し、提案書を作成し、商談の場を設けるまでに数ヶ月かかっていました。しかし、ショートカットを活用することで、このプロセスが5-15分に短縮されます。これにより、リードの温度感が下がる前にアプローチでき、リードタイムを短縮し、早期クロージングが可能になります。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                ステップ4: 営業担当者が商談の場を設ける
              </h3>
              <p className="text-[15px] leading-[1.9] text-[#666] mb-4">
                営業担当者が、生成された提案書を基に、迅速に商談の場を設けます。
              </p>
              <ul className="list-none p-0 space-y-2 mb-4">
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  生成された提案書を確認する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  検討側に提案書を送付する
                </li>
                <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                  <span className="absolute left-0 text-[#1a1a1a]">•</span>
                  商談の場を設ける
                </li>
              </ul>
              <p className="text-[15px] leading-[1.9] text-[#666]">
                リード獲得から商談までのプロセスが3-5ヶ月から5-15分に短縮されるため、質の高いホットリードを獲得でき、商談化率が向上します。また、確度の低いリード対応から解放され、無駄なリソース・無駄な工数を削減できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Companies Section */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                こんな企業に適しています
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div>
                <p className="text-[15px] font-medium text-[#1a1a1a] mb-3"><strong>企業規模:</strong></p>
                <ul className="list-none p-0 space-y-2">
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    <strong>中規模SaaS企業</strong>: 少数精鋭の組織で、パートナー含め、チームを作り商談数を追っている企業
                  </li>
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    <strong>小規模SaaS企業</strong>: 正社員2名という小規模な組織で、全ての事業を横断的に見ている企業
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[15px] font-medium text-[#1a1a1a] mb-3"><strong>フェーズ:</strong></p>
                <ul className="list-none p-0 space-y-2">
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    <strong>投資フェーズ</strong>: 資金調達から投資フェーズに入っており、どれだけ事業拡大をできるかがかかっている企業
                  </li>
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    <strong>事業拡大フェーズ</strong>: 事業拡大を加速させたい企業
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[15px] font-medium text-[#1a1a1a] mb-3"><strong>部門:</strong></p>
                <ul className="list-none p-0 space-y-2">
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    <strong>営業部門</strong>: インサイドセールスとフィールドセールスが一体化しているTHE MODEL型の営業体制を持つ企業
                  </li>
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    <strong>マーケティング部門</strong>: オフライン（展示会・イベント）でのリード獲得が中心で、オンラインでの獲得ができない課題を抱えている企業
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[15px] font-medium text-[#1a1a1a] mb-3"><strong>具体的な状況:</strong></p>
                <ul className="list-none p-0 space-y-2">
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    展示会・イベントで大量のリードを獲得したが、商談に繋がらない経験がある企業
                  </li>
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    リード獲得から商談までのプロセスが長すぎる課題を抱えている企業
                  </li>
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    リードの温度感や課題の明確さを測る仕組みがない企業
                  </li>
                  <li className="pl-5 relative text-[15px] leading-[1.9] text-[#666]">
                    <span className="absolute left-0 text-[#1a1a1a]">•</span>
                    大規模企業やエンタープライズ企業へのアプローチが難しい企業
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <h2 className="text-[28px] font-bold leading-[1.4] mb-8 text-[#1a1a1a]">
            関連記事
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/usecase/skill-gap">
              <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] hover:border-[#1a1a1a] transition-colors cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-medium text-[#1a1a1a] mb-0">
                    営業組織のスキル差
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/usecase/leadtime">
              <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] hover:border-[#1a1a1a] transition-colors cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-medium text-[#1a1a1a] mb-0">
                    リードタイムの長期化
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/usecase/resource-shortage">
              <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] hover:border-[#1a1a1a] transition-colors cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-medium text-[#1a1a1a] mb-0">
                    リソース不足
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/usecase/marketing">
              <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] hover:border-[#1a1a1a] transition-colors cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-medium text-[#1a1a1a] mb-0">
                    マーケティング施策の効果が出ない
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/features">
              <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] hover:border-[#1a1a1a] transition-colors cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-medium text-[#1a1a1a] mb-0">
                    ショートカットの機能
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/roi">
              <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] hover:border-[#1a1a1a] transition-colors cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-medium text-[#1a1a1a] mb-0">
                    ROIシミュレーション
                  </CardTitle>
                </CardHeader>
              </Card>
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



