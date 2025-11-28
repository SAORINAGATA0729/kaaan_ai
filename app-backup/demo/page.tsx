"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("無料トライアルのお申し込みを受け付けました。担当者よりご連絡いたします。");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section & Trial Form */}
      <main>
        <section className="py-[100px] md:py-[100px] pb-[200px] md:pb-[200px]">
          <div className="container mx-auto max-w-[1000px] px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
              {/* Left Column: Content */}
              <div>
                <h2 className="text-[28px] font-normal leading-[1.4] mb-10 text-[#1a1a1a]">
                  無料トライアルお申し込み
                </h2>
                
                {/* Image Placeholder with Trial Benefits */}
                <div className="bg-[#e0e0e0] w-full min-h-[300px] p-10 flex flex-col justify-center mb-10">
                  <div className="text-[#999] text-sm mb-8 text-center">
                    トライアルのイメージ画像が入ります
                  </div>
                  <ul className="list-none p-0 space-y-4">
                    <li className="pl-6 relative text-[15px] text-[#666] leading-[1.8]">
                      <Check className="absolute left-0 top-0.5 text-[#1a1a1a] w-5 h-5" />
                      期間終了後、自動で有料版に切り替わることはありません
                    </li>
                    <li className="pl-6 relative text-[15px] text-[#666] leading-[1.8]">
                      <Check className="absolute left-0 top-0.5 text-[#1a1a1a] w-5 h-5" />
                      2~3営業日以内でトライアルアカウントを開設
                    </li>
                    <li className="pl-6 relative text-[15px] text-[#666] leading-[1.8]">
                      <Check className="absolute left-0 top-0.5 text-[#1a1a1a] w-5 h-5" />
                      有料版のほぼ全ての機能をお試しいただけます
                    </li>
                  </ul>
                </div>
                
                {/* Service Experience */}
                <div>
                  <h3 className="text-xl font-medium mb-6 text-[#1a1a1a]">
                    ショートカットではこんな体験ができます！
                  </h3>
                  <ul className="list-none p-0 space-y-3">
                    <li className="pl-6 relative text-[15px] text-[#666] leading-[1.8]">
                      <Check className="absolute left-0 top-0.5 text-[#1a1a1a] w-4 h-4" />
                      提案書作成の時間を大幅に短縮。業務効率が向上します
                    </li>
                    <li className="pl-6 relative text-[15px] text-[#666] leading-[1.8]">
                      <Check className="absolute left-0 top-0.5 text-[#1a1a1a] w-4 h-4" />
                      AIが自動で提案書を生成し、チーム全体のスキル差を解消
                    </li>
                    <li className="pl-6 relative text-[15px] text-[#666] leading-[1.8]">
                      <Check className="absolute left-0 top-0.5 text-[#1a1a1a] w-4 h-4" />
                      過去の提案書をナレッジとして蓄積・活用できます
                    </li>
                    <li className="pl-6 relative text-[15px] text-[#666] leading-[1.8]">
                      <Check className="absolute left-0 top-0.5 text-[#1a1a1a] w-4 h-4" />
                      品質の高い提案書を短時間で作成できます
                    </li>
                    <li className="pl-6 relative text-[15px] text-[#666] leading-[1.8]">
                      <Check className="absolute left-0 top-0.5 text-[#1a1a1a] w-4 h-4" />
                      BtoB取引のプロセス全体を効率化できます
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column: Form */}
              <Card className="bg-white border border-[#e0e0e0] p-10 md:p-[28px_20px] m-0 max-w-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Indicator */}
                  <div className="flex items-center mb-8 gap-2">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                        currentStep >= 1 
                          ? "bg-[#1a1a1a] text-white" 
                          : "bg-[#e0e0e0] text-[#666]"
                      }`}
                    >
                      1
                    </div>
                    <div 
                      className={`h-[1px] w-10 ${
                        currentStep >= 2 
                          ? "bg-[#1a1a1a]" 
                          : "bg-[#e0e0e0]"
                      }`}
                    />
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                        currentStep >= 2 
                          ? "bg-[#1a1a1a] text-white" 
                          : "bg-[#e0e0e0] text-[#666]"
                      }`}
                    >
                      2
                    </div>
                  </div>
                  
                  {/* Step 1 */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-baseline mb-2">
                          <Label htmlFor="company" className="text-[15px] font-medium text-[#1a1a1a]">
                            会社名 <span className="text-[#999]">*</span>
                          </Label>
                          <p className="text-xs text-[#666] m-0">
                            ※の項目は必須項目です
                          </p>
                        </div>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="例: 株式会社ショートカット"
                          required
                          className="h-[42px] text-[15px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-[15px] font-medium text-[#1a1a1a]">
                          お名前 <span className="text-[#999]">*</span>
                        </Label>
                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            id="last-name"
                            name="last-name"
                            type="text"
                            placeholder="例: 山田"
                            required
                            className="h-[42px] text-[15px]"
                          />
                          <Input
                            id="first-name"
                            name="first-name"
                            type="text"
                            placeholder="例: 太郎"
                            required
                            className="h-[42px] text-[15px]"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[15px] font-medium text-[#1a1a1a]">
                          メールアドレス <span className="text-[#999]">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="例: example@shortcut.jp"
                          required
                          className="h-[42px] text-[15px]"
                        />
                      </div>
                      
                      <div className="text-center mt-8">
                        <Button 
                          type="button"
                          onClick={handleNextStep}
                          size="lg"
                          className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[42px] px-14 text-base border border-[#1a1a1a]"
                        >
                          次のステップへ進む
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2 */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="department" className="text-[15px] font-medium text-[#1a1a1a]">
                          部署 <span className="text-[#999]">*</span>
                        </Label>
                        <Input
                          id="department"
                          name="department"
                          type="text"
                          placeholder="例: 営業部"
                          required
                          className="h-[42px] text-[15px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="position" className="text-[15px] font-medium text-[#1a1a1a]">
                          役職 <span className="text-[#999]">*</span>
                        </Label>
                        <Input
                          id="position"
                          name="position"
                          type="text"
                          placeholder="例: 部長"
                          required
                          className="h-[42px] text-[15px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-[15px] font-medium text-[#1a1a1a]">
                          パスワード <span className="text-[#999]">*</span>
                        </Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="パスワードを入力してください"
                          required
                          className="h-[42px] text-[15px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[15px] font-medium text-[#1a1a1a]">
                          電話番号 <span className="text-[#999]">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="例: 03-1234-5678"
                          required
                          className="h-[42px] text-[15px]"
                        />
                      </div>
                      
                      <div className="text-center mt-8">
                        <p className="text-xs text-[#666] mb-6 leading-[1.8] whitespace-nowrap">
                          本フォームに入力された情報の送信をもって、株式会社KAAANの
                          <Link href="/contact" className="underline text-[#666]">
                            プライバシーポリシー
                          </Link>
                          にご同意いただいたものとみなします。
                        </p>
                        <Button 
                          type="submit"
                          size="lg"
                          className="bg-[#1a1a1a] text-white hover:bg-[#333] h-[42px] px-14 text-base border border-[#1a1a1a]"
                        >
                          無料トライアルに申し込む
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

