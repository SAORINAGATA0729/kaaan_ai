import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-[100px] md:py-[100px] pb-[100px] md:pb-[100px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center max-w-[800px] mx-auto">
            <p className="text-[28px] font-medium mb-6 text-white">
              BtoB取引のプロセスを根本から変える
            </p>
            <p className="mb-6 text-white text-[15px] leading-[1.9]">
              それが、私たちがショートカットを通じて実現したい世界です。
            </p>
            <p className="mb-10 text-white text-[15px] leading-[1.9]">
              従来当たり前だった複雑なプロセスやコミュニケーションを大幅にショートカットし、<br />
              BtoB取引のプロセス全体を最適化。圧倒的なスピードで事業成長を実現。
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

      {/* Section 2: 従来のBtoB取引の課題 */}
      <section id="why" className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-[60px] md:mb-[60px]">
            <h2 className="text-[32px] md:text-[32px] text-[28px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              従来のBtoB取引の課題
            </h2>
            <p className="text-base max-w-[700px] mx-auto text-[#666] leading-[1.9] mb-10">
              従来のBtoB取引には、サービス提供側と検討側の両方に共通する課題が多くありました。
            </p>
            <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#f0f0f0] mx-auto mb-3 flex items-center justify-center text-[32px]">👤</div>
                <div className="text-sm font-medium text-[#1a1a1a]">サービス提供側</div>
              </div>
              <div className="text-center px-5">
                <div className="text-[13px] text-[#666] leading-[1.6]">
                  サービスを提供する<br />
                  ↔︎<br />
                  サービスを検討する
                </div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#f0f0f0] mx-auto mb-3 flex items-center justify-center text-[32px]">👤</div>
                <div className="text-sm font-medium text-[#1a1a1a]">サービス検討側</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[60px]">
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-5">
                <CardTitle className="text-lg font-medium text-[#1a1a1a] mb-0">
                  サービス提供側の課題
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2">
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    リード獲得から商談まで1ヶ月〜2ヶ月かかる
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    確度の低いリード対応に追われる日々
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    提案書作成に数時間〜数日かかる
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    営業メンバーのスキル差によるばらつき
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    質の高いリードを獲得できない
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    リソース不足でも効率的にビジネスを成長させたい
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-5">
                <CardTitle className="text-lg font-medium text-[#1a1a1a] mb-0">
                  サービス検討側の課題
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2">
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    情報収集から意思決定まで数週間かかる
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    複数企業との商談プロセスが煩雑
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    必要な情報がすぐにわからない
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    迅速に意思決定したいができない
                  </div>
                  <div className="text-[15px] leading-[1.9] text-[#666] relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                    煩雑な情報収集や複数企業との商談プロセスを避けたい
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* 解決方法と従来の構図 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[60px] items-center">
            <div className="flex items-center">
              <div className="text-[15px] leading-[1.9] text-[#666]">
                <p className="mb-5">
                  提供側は「獲得したリードの購買意欲がどの程度か分からない」、<br />
                  検討側は「提供側のサービスが自社に合うかどうかが分からない」。
                </p>
                <p className="mb-5">
                  この情報不足により、提供側は確度の分からないリードの対応や精査に時間がかかってしまい、<br />
                  検討側は情報を収集し判断するだけでも膨大な時間がかかってしまいます。
                </p>
                <p>
                  両社の課題を解決するための「何か」が必要でした。
                </p>
              </div>
            </div>
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-10">
                <CardTitle className="text-lg font-medium text-center text-[#1a1a1a] mb-0">
                  従来の構造（課題）
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-6 mb-7">
                  <div className="text-center">
                    <h4 className="text-base font-medium mb-3 text-[#1a1a1a]">検討側</h4>
                    <div className="text-[13px] leading-8 text-[#666]">
                      情報がわからない<br />
                      時間がかかる<br />
                      意思決定が遅い
                    </div>
                  </div>
                  <div className="text-2xl text-[#1a1a1a]">?</div>
                  <div className="text-center">
                    <h4 className="text-base font-medium mb-3 text-[#1a1a1a]">提供側</h4>
                    <div className="text-[13px] leading-8 text-[#666]">
                      リードの温度感がわからない<br />
                      時間がかかる<br />
                      確度の低いリード対応
                    </div>
                  </div>
                </div>
                <p className="text-center text-[13px] text-[#999] mt-7 leading-[1.8]">
                  検討側は提供側のサービスが自社に合うかわからない。<br />
                  提供側は獲得したリードの購買意欲がどの程度かわからない。<br />
                  お互いに必要な情報が不足している。
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* ショートカットの構造 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="flex items-center">
              <div className="text-[15px] leading-[1.9] text-[#666]">
                <p className="mb-5">
                  その解決策として、ショートカットは提案システムAIをハブとした仕組みを構築しました。
                </p>
                <p className="mb-5">
                  検討側が課題を入力し、AIがそれを分析して最適な提案書を生成し、提供側に届ける。
                </p>
                <p className="mb-5">
                  この流れによって、検討側は必要な情報をすぐに得られ、<br />
                  提供側は温度感の高いリードを効率的に獲得できる。
                </p>
                <p>
                  両社の課題を同時に解決できる仕組みです。
                </p>
              </div>
            </div>
            <Card className="bg-white border border-[#e0e0e0] p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-lg font-medium text-center text-[#1a1a1a] mb-0">
                  ショートカットの構造（解決）
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-center justify-center gap-4 mb-5">
                  <div className="text-center p-[18px] min-w-[140px] bg-white border border-[#e0e0e0]">
                    <h4 className="text-sm font-medium mb-2 text-[#1a1a1a]">検討側</h4>
                    <div className="text-xs leading-[1.6] text-[#666]">
                      課題を入力<br />
                      <span className="text-[#999]">(Webフォーム)</span>
                    </div>
                  </div>
                  <div className="text-base text-[#1a1a1a]">→</div>
                  <div className="text-center p-6 min-w-[160px] bg-[#f8f8f8] border border-[#e0e0e0]">
                    <h4 className="text-sm font-medium mb-2 text-center text-[#1a1a1a]">提案システムAI</h4>
                    <ul className="text-[11px] leading-[1.6] text-center list-none p-0 mt-3 space-y-1 text-[#666]">
                      <li>課題分析</li>
                      <li>提案書生成</li>
                      <li>温度感判定</li>
                    </ul>
                  </div>
                  <div className="text-base text-[#1a1a1a]">←</div>
                  <div className="text-center p-[18px] min-w-[140px] bg-white border border-[#e0e0e0]">
                    <h4 className="text-sm font-medium mb-2 text-[#1a1a1a]">提供側</h4>
                    <div className="text-xs leading-[1.6] text-[#666]">
                      提案書受領<br />
                      <span className="text-[#999]">(3-5分)</span><br />
                      温度感明確化
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs mt-5 leading-[1.6] text-[#666]">
                  AIが課題をヒアリングし提案書を生成することで、<br />
                  検討側は必要な情報を、提供側はリードの温度感を<br />
                  同時に把握できる。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: ショートカットが目指すBtoB取引の在り方 */}
      <section id="vision" className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-[30px]">
            <h2 className="text-[28px] md:text-[28px] text-[24px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              ショートカットが目指すBtoB取引の在り方
            </h2>
          </div>
          
          <div className="max-w-[800px] mx-auto mb-[60px] text-center">
            <p className="text-[15px] leading-[1.9] text-[#666] mb-6">
              ショートカットが目指す新たなBtoB取引は、サービス提供側も検討側も両社が時間とリソースを最適化し、<br />
              本当に価値のある業務に集中できる世界です。
            </p>
            <p className="text-[15px] leading-[1.9] text-[#666]">
              従来は、提供側がリード獲得から契約まで1ヶ月〜2ヶ月、検討側が情報収集から意思決定まで数週間かかっていました。ショートカットは、提供側を1日〜2日、検討側を数時間に短縮し、両社の課題を同時に解決します。
            </p>
          </div>
          
          {/* プロセス比較：2カラム */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* 従来のBtoB取引プロセス */}
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  従来のBtoB取引プロセス
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-6 mb-7">
                  <div>
                    <div className="text-sm font-medium mb-3 text-[#1a1a1a]">提供側</div>
                    <div className="text-sm leading-[2.2] text-[#666]">
                      リード獲得<br />
                      ↓<br />
                      リード育成（MAツール）<br />
                      ↓<br />
                      アポ獲得（インサイド）<br />
                      ↓<br />
                      ヒアリング<br />
                      ↓<br />
                      提案書作成<br />
                      ↓<br />
                      商談<br />
                      ↓<br />
                      受注・契約
                    </div>
                    <div className="text-[13px] text-[#999] mt-4">1ヶ月〜2ヶ月</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-3 text-[#1a1a1a]">検討側</div>
                    <div className="text-sm leading-[2.2] text-[#666]">
                      情報収集<br />
                      ↓<br />
                      複数企業との商談<br />
                      ↓<br />
                      比較検討<br />
                      ↓<br />
                      意思決定
                    </div>
                    <div className="text-[13px] text-[#999] mt-4">数週間</div>
                  </div>
                </div>
                <p className="text-[13px] text-[#999] text-center pt-5 border-t border-[#e8e8e8]">
                  時間とリソースの無駄、機会損失
                </p>
              </CardContent>
            </Card>
            
            {/* ショートカットのBtoB取引プロセス */}
            <Card className="bg-white border border-[#1a1a1a] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  ショートカットのBtoB取引プロセス
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-5 items-start mb-7">
                  <div>
                    <div className="text-sm font-medium mb-3 text-[#1a1a1a]">検討側</div>
                    <div className="text-sm leading-[2.2] text-[#666]">
                      課題入力（Webフォーム）<br />
                      →<br />
                      提案書受領<br />
                      ↓<br />
                      意思決定
                    </div>
                    <div className="text-[13px] text-[#1a1a1a] mt-4 font-medium">数時間</div>
                  </div>
                  <div className="text-center p-3 bg-[#f8f8f8] border border-[#e8e8e8] self-stretch flex flex-col justify-center">
                    <div className="text-[11px] text-[#999] mb-1.5">提案システムAI</div>
                    <div className="text-[10px] text-[#666] leading-[1.6]">
                      AI生成<br />
                      3-5分
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-3 text-[#1a1a1a]">提供側</div>
                    <div className="text-sm leading-[2.2] text-[#666]">
                      提案書完成（3-5分）<br />
                      ←<br />
                      商談<br />
                      ↓<br />
                      受注・契約
                    </div>
                    <div className="text-[13px] text-[#1a1a1a] mt-4 font-medium">1日〜2日</div>
                  </div>
                </div>
                <p className="text-[13px] text-[#1a1a1a] text-center pt-5 border-t border-[#e8e8e8] font-medium">
                  時間とリソースの最適化、機会創出
                </p>
                <p className="text-xs text-[#999] text-center mt-3">
                  プロセス期間: 98%短縮（1ヶ月〜2ヶ月 → 1日〜2日）
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* 比較項目の表 */}
          <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] mt-[60px] mb-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-medium text-[#1a1a1a]">比較項目</TableHead>
                  <TableHead className="font-medium text-[#1a1a1a]">従来のBtoB</TableHead>
                  <TableHead className="font-medium text-[#1a1a1a]">ショートカット</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-[#1a1a1a]">プロセス期間</TableCell>
                  <TableCell className="text-[#666]">1ヶ月〜2ヶ月</TableCell>
                  <TableCell className="font-medium text-[#1a1a1a]">
                    1日〜2日<br />
                    <span className="text-xs text-[#999] font-normal">98%短縮</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-[#1a1a1a]">提案書作成時間</TableCell>
                  <TableCell className="text-[#666]">数時間〜数日</TableCell>
                  <TableCell className="font-medium text-[#1a1a1a]">
                    3-5分<br />
                    <span className="text-xs text-[#999] font-normal">99%短縮</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-[#1a1a1a]">必要人員</TableCell>
                  <TableCell className="text-[#666]">各部門に専門人材</TableCell>
                  <TableCell className="font-medium text-[#1a1a1a]">AI中心・最小人員</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-[#1a1a1a]">MAツール</TableCell>
                  <TableCell className="text-[#666]">必須</TableCell>
                  <TableCell className="font-medium text-[#1a1a1a]">不要</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-[#1a1a1a]">インサイドセールス</TableCell>
                  <TableCell className="text-[#666]">必須</TableCell>
                  <TableCell className="font-medium text-[#1a1a1a]">不要</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-[#1a1a1a]">顧客接点</TableCell>
                  <TableCell className="text-[#666]">複数担当者</TableCell>
                  <TableCell className="font-medium text-[#1a1a1a]">一元化（Webフォーム）</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-[#1a1a1a]">提案精度</TableCell>
                  <TableCell className="text-[#666]">属人的</TableCell>
                  <TableCell className="font-medium text-[#1a1a1a]">データドリブン</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-center mt-7 text-[13px] text-[#999]">
              総合的な効果: 時間・コスト・リソースの大幅削減
            </p>
          </Card>
        </div>
      </section>

      {/* Section 4: ショートカットの機能 */}
      <section className="bg-[#f8f8f8] py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-[60px] md:mb-[60px]">
            <h2 className="text-[32px] md:text-[32px] text-[28px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              ショートカットの機能
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  機能1: 課題入力Webフォーム
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  検討側がWebフォームで課題を入力するだけで、提供側がその課題を即座に理解できます。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  機能2: AI自動提案書生成
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  入力された課題をもとに、AIが3-5分で高品質な提案書を自動生成します。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  機能3: 提案書品質保証
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  高品質な提案書を保証し、エンタープライズ企業にも響く提案書を生成します。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px]">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  機能4: スキル差補完
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  提供側の営業メンバーのスキル差を補完し、誰でも高品質な提案書を作成できます。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] md:col-span-2 lg:col-span-1">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  機能5: データドリブン
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[15px] leading-[1.9] text-[#666]">
                  過去の事例や業界知見を活用し、データドリブンな提案を実現します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: 具体的な活用ケース */}
      <section id="cases" className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center mb-[60px] md:mb-[60px]">
            <h2 className="text-[32px] md:text-[32px] text-[28px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
              具体的な活用ケース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/usecase/lead-quality">
              <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] hover:border-[#1a1a1a] transition-colors cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                    大量にリードがあるが商談に繋がらない
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  営業組織のスキル差
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  リソース不足
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  提案書作成に時間がかかる
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  リードタイムの長期化
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  事業成長を加速させたい
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  リード獲得チャネルが限られている
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  マーケティング施策の効果が出ない
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                  確度の低いリード対応に追われる
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-[60px]">
            <Button 
              asChild 
              size="lg"
              className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[42px] px-14 text-base border border-[#1a1a1a]"
            >
              <Link href="/usecase">活用ケースをみる</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: ビジョン */}
      <section className="bg-[#1a1a1a] text-white py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="text-center max-w-[800px] mx-auto">
            <p className="text-[15px] leading-[2.4] mb-6 text-white">
              ショートカットは、サービス提供側と検討側の組織の規模やフェーズに関わらず、
            </p>
            <p className="text-[15px] leading-[2.4] mb-6 text-white">
              本当に価値のある業務に集中できる環境を作り出します。
            </p>
            <p className="text-[15px] leading-[2.4] mb-6 text-white">
              BtoB取引プロセス全体をショートカットすることで、圧倒的なスピードで事業成長を実現。
            </p>
            <p className="text-[15px] leading-[2.4] mb-6 text-white">
              リソース不足でも、少人数でも、確度の低いリード対応に追われる日々から抜け出せます。
            </p>
            <p className="text-[15px] leading-[2.4] mb-6 text-white">
              組織の規模やフェーズに関わらず、本当に価値のある業務に集中できる環境が作られ、
            </p>
            <p className="text-[15px] leading-[2.4] text-white">
              業界全体が変わる構造を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <CTASection />
      
      <Footer />
    </div>
  );
}

