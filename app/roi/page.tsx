"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react";

export default function ROIPage() {
  // State for simulation inputs
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [proposalTime, setProposalTime] = useState(60); // minutes
  const [hourlyWage, setHourlyWage] = useState(5000); // JPY
  
  // Calculation results
  const [timeSaved, setTimeSaved] = useState(0);
  const [costSaved, setCostSaved] = useState(0);
  const [proposalIncrease, setProposalIncrease] = useState(0);

  useEffect(() => {
    // Logic:
    // Shortcut reduces proposal time to 5 mins
    const timePerProposalCurrent = proposalTime;
    const timePerProposalNew = 5;
    
    const timeSavedPerMonth = monthlyLeads * (timePerProposalCurrent - timePerProposalNew) / 60; // hours
    const costSavedPerMonth = timeSavedPerMonth * hourlyWage;
    
    // Assume 3x more proposals can be generated with saved time (conservative)
    const potentialIncrease = Math.floor(timeSavedPerMonth / (timePerProposalNew / 60));

    setTimeSaved(Math.round(timeSavedPerMonth));
    setCostSaved(Math.round(costSavedPerMonth));
    setProposalIncrease(potentialIncrease);
  }, [monthlyLeads, proposalTime, hourlyWage]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-32 md:py-48 relative overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-8 relative z-10">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.2] mb-8">
              ROIシミュレーション
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-[1.8] font-light max-w-[700px] mx-auto">
              提案書作成時間を短縮することで、どれだけのコスト削減と<br />
              事業成長の機会が生まれるか、シミュレーションできます。
            </p>
          </div>
        </div>
      </section>

      {/* Simulation Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Inputs */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-medium text-[#1a1a1a] mb-8">現状の数値を入力</h2>
                <p className="text-[#666] mb-8">
                  スライダーまたは数値を入力して、現在の業務状況を設定してください。
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-medium text-[#1a1a1a]">月間提案書作成数</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        type="number" 
                        value={monthlyLeads} 
                        onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                        className="w-20 text-right h-9"
                      />
                      <span className="text-sm text-[#666]">件</span>
                    </div>
                  </div>
                  <Slider 
                    value={[monthlyLeads]} 
                    max={500} 
                    step={10} 
                    onValueChange={(val) => setMonthlyLeads(val[0])}
                    className="py-2"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-medium text-[#1a1a1a]">1件あたりの作成時間</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        type="number" 
                        value={proposalTime} 
                        onChange={(e) => setProposalTime(Number(e.target.value))}
                        className="w-20 text-right h-9"
                      />
                      <span className="text-sm text-[#666]">分</span>
                    </div>
                  </div>
                  <Slider 
                    value={[proposalTime]} 
                    max={180} 
                    step={5} 
                    onValueChange={(val) => setProposalTime(val[0])}
                    className="py-2"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-medium text-[#1a1a1a]">平均時給コスト</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        type="number" 
                        value={hourlyWage} 
                        onChange={(e) => setHourlyWage(Number(e.target.value))}
                        className="w-24 text-right h-9"
                      />
                      <span className="text-sm text-[#666]">円</span>
                    </div>
                  </div>
                  <Slider 
                    value={[hourlyWage]} 
                    max={20000} 
                    step={1000} 
                    onValueChange={(val) => setHourlyWage(val[0])}
                    className="py-2"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-7">
              <div className="bg-[#f9f9f9] rounded-2xl p-10 md:p-16 border border-gray-100 h-full flex flex-col justify-center">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-12 text-center">ショートカット導入による月間効果</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <Card className="bg-white border-none shadow-sm p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 mx-auto mb-4 flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="text-sm text-[#666] mb-2">創出できる時間</div>
                    <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
                      {timeSaved.toLocaleString()}<span className="text-base font-normal text-[#666] ml-1">時間</span>
                    </div>
                  </Card>

                  <Card className="bg-white border-none shadow-sm p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-sm text-[#666] mb-2">削減できるコスト</div>
                    <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
                      ¥{costSaved.toLocaleString()}
                    </div>
                  </Card>
                </div>

                <div className="text-center space-y-6">
                  <p className="text-lg text-[#1a1a1a] font-medium">
                    年間で <span className="text-2xl font-bold">¥{(costSaved * 12).toLocaleString()}</span> のコスト削減効果
                  </p>
                  <p className="text-[#666] leading-relaxed">
                    浮いた時間で、さらに <span className="font-bold text-[#1a1a1a]">{proposalIncrease.toLocaleString()}件</span> の提案書を作成可能です。<br />
                    これは、単なるコスト削減ではなく、事業成長への投資です。
                  </p>
                  <div className="pt-8">
                    <Button asChild size="lg" className="bg-[#1a1a1a] text-white hover:bg-[#333] px-8 h-[52px] text-[15px] rounded-full shadow-lg transition-transform hover:scale-105">
                      <Link href="/demo">
                        無料トライアルで効果を体験
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
