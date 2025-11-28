"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

export default function ROIPage() {
  const [results, setResults] = useState<{
    revenueIncrease: number;
    costReduction: number;
    totalEffect: number;
    roi: number;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const leads = parseFloat(formData.get("leads") as string);
    const conversionRate = parseFloat(formData.get("conversion-rate") as string) / 100;
    const averagePrice = parseFloat(formData.get("average-price") as string);
    const proposalTime = parseFloat(formData.get("proposal-time") as string);
    const hourlyRate = parseFloat(formData.get("hourly-rate") as string);
    
    // 商談化率向上を仮定（10%向上）
    const improvedConversionRate = conversionRate * 1.1;
    
    // 月間売上増加額の計算
    const currentRevenue = leads * conversionRate * averagePrice;
    const improvedRevenue = leads * improvedConversionRate * averagePrice;
    const revenueIncrease = improvedRevenue - currentRevenue;
    
    // 提案書作成時間削減によるコスト削減額
    const costReduction = leads * proposalTime * hourlyRate / 10000; // 万円単位
    
    // 月間総効果額
    const totalEffect = revenueIncrease + costReduction;
    
    // ROI計算
    const subscriptionFee = 10; // 10万円/月
    const roi = totalEffect / subscriptionFee;
    
    setResults({
      revenueIncrease: Math.round(revenueIncrease),
      costReduction: Math.round(costReduction),
      totalEffect: Math.round(totalEffect),
      roi: Math.round(roi * 100) / 100,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="シミュレーション"
        description="ショートカット導入による投資対効果を計算します。以下の項目を入力して、ショートカット導入による投資対効果を計算してください。"
      />

      {/* ROI Calculator Form */}
      <section className="py-[100px] md:py-[100px] pb-[60px] md:pb-[60px]">
        <div className="container mx-auto max-w-[1000px] px-8">
          <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="leads" className="text-[15px] font-medium text-[#1a1a1a]">
                  月間リード獲得数
                </Label>
                <Input
                  id="leads"
                  name="leads"
                  type="number"
                  placeholder="例: 100"
                  min="0"
                  required
                  className="h-[42px] text-[15px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="conversion-rate" className="text-[15px] font-medium text-[#1a1a1a]">
                  現在の商談化率（%）
                </Label>
                <Input
                  id="conversion-rate"
                  name="conversion-rate"
                  type="number"
                  placeholder="例: 10"
                  min="0"
                  max="100"
                  step="0.1"
                  required
                  className="h-[42px] text-[15px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="average-price" className="text-[15px] font-medium text-[#1a1a1a]">
                  平均単価（万円）
                </Label>
                <Input
                  id="average-price"
                  name="average-price"
                  type="number"
                  placeholder="例: 300"
                  min="0"
                  required
                  className="h-[42px] text-[15px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="proposal-time" className="text-[15px] font-medium text-[#1a1a1a]">
                  提案書作成時間（時間/件）
                </Label>
                <Input
                  id="proposal-time"
                  name="proposal-time"
                  type="number"
                  placeholder="例: 5"
                  min="0"
                  step="0.1"
                  required
                  className="h-[42px] text-[15px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hourly-rate" className="text-[15px] font-medium text-[#1a1a1a]">
                  営業担当者の時給（円）
                </Label>
                <Input
                  id="hourly-rate"
                  name="hourly-rate"
                  type="number"
                  placeholder="例: 3000"
                  min="0"
                  required
                  className="h-[42px] text-[15px]"
                />
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[42px] px-7 text-[13px] font-medium tracking-[0.06em] border border-[#1a1a1a]"
                >
                  シュミレーションをする
                </Button>
              </div>
            </form>
            
            {results && (
              <div className="mt-10 pt-10 border-t border-[#e0e0e0]">
                <h3 className="text-xl font-medium mb-6 text-[#1a1a1a]">計算結果</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] text-[#666]">月間売上増加額</span>
                    <strong className="text-[15px] font-medium text-[#1a1a1a]">
                      {results.revenueIncrease}万円
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] text-[#666]">提案書作成時間削減によるコスト削減額</span>
                    <strong className="text-[15px] font-medium text-[#1a1a1a]">
                      {results.costReduction}万円
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] text-[#666]">月間総効果額</span>
                    <strong className="text-[15px] font-medium text-[#1a1a1a]">
                      {results.totalEffect}万円
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] text-[#666]">ショートカット月額料金</span>
                    <span className="text-[15px] text-[#666]">10万円</span>
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-[#1a1a1a]">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-[#666] mb-2">投資対効果（ROI）</p>
                        <p className="text-sm text-[#666]">
                          月額10万円の投資で<br />
                          月間{results.totalEffect}万円の効果<br />
                          <span className="text-xs">（売上増加＋コスト削減）</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[32px] font-bold text-[#1a1a1a] m-0">
                          {results.totalEffect}万円
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
          
          <Card className="bg-white border-none p-10 md:p-[28px_20px]">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-xl font-medium text-[#1a1a1a] mb-0">
                計算ロジック
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3 text-[15px] leading-[1.9] text-[#666] list-none pl-0">
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                  月間売上増加額 = 月間リード獲得数 × (商談化率 × 1.1) × 平均単価 - 月間リード獲得数 × 商談化率 × 平均単価
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                  提案書作成時間削減によるコスト削減額 = 月間リード獲得数 × 提案書作成時間(時間) × 時間単価(円) ÷ 10,000
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                  月間総効果額 = 月間売上増加額 + 提案書作成時間削減によるコスト削減額
                </li>
                <li className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-[#1a1a1a]">
                  投資対効果（ROI）= 月間総効果額 ÷ ショートカット月額料金（10万円）
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



