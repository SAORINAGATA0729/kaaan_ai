"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("お問い合わせを受け付けました。担当者よりご連絡いたします。");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section & Contact Form */}
      <main>
        <section className="py-[100px] md:py-[100px] pb-[200px] md:pb-[200px]">
          <div className="container mx-auto max-w-[1000px] px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
              {/* Left Column: Title */}
              <div className="text-left">
                <h2 className="text-[28px] font-bold leading-[1.4] mb-3 text-[#1a1a1a]">
                  お問い合わせ
                </h2>
                <p className="text-base max-w-[700px] mb-4 text-[#666] leading-[1.9]">
                  ショートカットに関するご質問やご相談がございましたら、<br />
                  お気軽にお問い合わせください。
                </p>
                <p className="text-xs text-[#666] mt-4 leading-[1.8]">
                  ※本フォームは、当社サービス導入をご検討中の企業様向けです。営業目的でのご連絡はご遠慮いただいております。
                </p>
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
                          <Label className="text-[15px] font-medium text-[#1a1a1a]">
                            お問い合わせ種別 <span className="text-[#999]">*</span>
                          </Label>
                          <p className="text-xs text-[#666] m-0">
                            ※の項目は必須項目です
                          </p>
                        </div>
                        <Select name="inquiry-type" required>
                          <SelectTrigger className="h-[42px] text-[15px]">
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-service">サービスの新規導入について</SelectItem>
                            <SelectItem value="estimate">お見積りについて</SelectItem>
                            <SelectItem value="feature">機能について</SelectItem>
                            <SelectItem value="existing">既存サービスの利用について</SelectItem>
                            <SelectItem value="other">その他</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-[15px] font-medium text-[#1a1a1a]">
                          会社名 <span className="text-[#999]">*</span>
                        </Label>
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
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[15px] font-medium text-[#1a1a1a]">
                          お問い合わせ内容 <span className="text-[#999]">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="ご質問やご要望がございましたら、ご記入ください。"
                          required
                          className="min-h-[120px] text-[15px]"
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
                          お問い合わせをする
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



