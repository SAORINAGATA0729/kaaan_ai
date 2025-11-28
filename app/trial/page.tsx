"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Check, Clock, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TrialPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <Header />

      <main className="pt-24 pb-32">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.15] text-[#1a1a1a]">
                ビジネスの成長速度を、<br />
                劇的に変える30日間。
              </h1>
              
              <div className="space-y-8 mb-12">
                <p className="text-lg text-[#666] leading-[1.9] font-light">
                  提案書作成から商談獲得まで。<br />
                  ショートカットの全機能を、今すぐ体験してください。<br />
                  クレジットカードは不要です。
                </p>
              </div>

              <div className="space-y-8 border-t border-gray-100 pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f9f9f9] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">30日間完全無料</h3>
                    <p className="text-[#666] text-sm leading-relaxed">全機能を制限なくお試しいただけます。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f9f9f9] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">導入支援サポート付き</h3>
                    <p className="text-[#666] text-sm leading-relaxed">専任チームが並走してサポートします。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f9f9f9] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">2分でアカウント作成完了</h3>
                    <p className="text-[#666] text-sm leading-relaxed">面倒な手続きは一切ありません。</p>
                  </div>
                </div>
              </div>

               {/* Trust / Social Proof */}
               <div className="mt-16 pt-8 border-t border-gray-100">
                 <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
                 <div className="flex gap-8 opacity-40 grayscale">
                   {/* Logo Placeholders - Simple Blocks for now */}
                   <div className="h-6 w-20 bg-gray-200" />
                   <div className="h-6 w-20 bg-gray-200" />
                   <div className="h-6 w-20 bg-gray-200" />
                 </div>
               </div>
            </div>

            {/* Right Column: Sign Up Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 p-10 md:p-14 rounded-sm">
                
                <div className="mb-10">
                  <h2 className="text-2xl font-medium mb-2">無料トライアルを始める</h2>
                  <p className="text-[#666] text-sm">アカウントを作成して、すぐに利用を開始できます。</p>
                </div>

                {/* Step Indicator */}
                <div className="flex items-center gap-4 mb-12">
                  <div className={cn(
                    "flex items-center gap-3 transition-colors duration-300",
                    step === 1 ? "text-[#1a1a1a]" : "text-gray-300"
                  )}>
                    <span className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold border",
                      step === 1 ? "border-[#1a1a1a] bg-[#1a1a1a] text-white" : "border-gray-200 text-gray-300"
                    )}>1</span>
                    <span className="text-sm font-medium tracking-wide">基本情報</span>
                  </div>
                  <div className="w-8 h-px bg-gray-200" />
                  <div className={cn(
                    "flex items-center gap-3 transition-colors duration-300",
                    step === 2 ? "text-[#1a1a1a]" : "text-gray-300"
                  )}>
                    <span className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold border",
                      step === 2 ? "border-[#1a1a1a] bg-[#1a1a1a] text-white" : "border-gray-200 text-gray-300"
                    )}>2</span>
                    <span className="text-sm font-medium tracking-wide">詳細情報</span>
                  </div>
                </div>

                {/* Step 1 Form */}
                <div className={cn(
                  step === 1 ? "block animate-in fade-in slide-in-from-right-4 duration-500" : "hidden"
                )}>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-sm font-medium text-[#1a1a1a]">会社名</Label>
                      <Input id="company" placeholder="株式会社Example" className="h-14 bg-gray-50 border-transparent focus:border-[#1a1a1a] focus:bg-white transition-all rounded-none text-base px-4 placeholder:text-gray-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <Label htmlFor="lastname" className="text-sm font-medium text-[#1a1a1a]">姓</Label>
                        <Input id="lastname" placeholder="山田" className="h-14 bg-gray-50 border-transparent focus:border-[#1a1a1a] focus:bg-white transition-all rounded-none text-base px-4 placeholder:text-gray-400" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="firstname" className="text-sm font-medium text-[#1a1a1a]">名</Label>
                        <Input id="firstname" placeholder="太郎" className="h-14 bg-gray-50 border-transparent focus:border-[#1a1a1a] focus:bg-white transition-all rounded-none text-base px-4 placeholder:text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-medium text-[#1a1a1a]">メールアドレス</Label>
                      <Input id="email" type="email" placeholder="name@company.com" className="h-14 bg-gray-50 border-transparent focus:border-[#1a1a1a] focus:bg-white transition-all rounded-none text-base px-4 placeholder:text-gray-400" />
                      <p className="text-xs text-gray-400">会社のメールアドレスを入力してください</p>
                    </div>
                    
                    <div className="pt-8">
                      <Button 
                        className="w-full h-14 text-base bg-[#1a1a1a] hover:bg-[#333] text-white font-medium rounded-none transition-all"
                        onClick={() => setStep(2)}
                      >
                        次へ進む
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Step 2 Form */}
                <div className={cn(
                  step === 2 ? "block animate-in fade-in slide-in-from-right-4 duration-500" : "hidden"
                )}>
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <Label htmlFor="department" className="text-sm font-medium text-[#1a1a1a]">部署</Label>
                        <Input id="department" placeholder="営業部" className="h-14 bg-gray-50 border-transparent focus:border-[#1a1a1a] focus:bg-white transition-all rounded-none text-base px-4 placeholder:text-gray-400" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="position" className="text-sm font-medium text-[#1a1a1a]">役職</Label>
                        <Input id="position" placeholder="部長" className="h-14 bg-gray-50 border-transparent focus:border-[#1a1a1a] focus:bg-white transition-all rounded-none text-base px-4 placeholder:text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-medium text-[#1a1a1a]">電話番号</Label>
                      <Input id="phone" placeholder="03-1234-5678" className="h-14 bg-gray-50 border-transparent focus:border-[#1a1a1a] focus:bg-white transition-all rounded-none text-base px-4 placeholder:text-gray-400" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="password" className="text-sm font-medium text-[#1a1a1a]">パスワード設定</Label>
                      <Input id="password" type="password" placeholder="8文字以上の英数字" className="h-14 bg-gray-50 border-transparent focus:border-[#1a1a1a] focus:bg-white transition-all rounded-none text-base px-4 placeholder:text-gray-400" />
                    </div>
                    
                    <div className="pt-4 space-y-4 border-t border-gray-100">
                      <div className="space-y-2">
                         <Label className="text-xs text-gray-500 uppercase tracking-wider font-bold">アンケート（任意）</Label>
                         <Select>
                           <SelectTrigger className="h-12 bg-gray-50 border-transparent rounded-none text-sm"><SelectValue placeholder="従業員数を選択" /></SelectTrigger>
                           <SelectContent>
                             <SelectItem value="1-10">1-10名</SelectItem>
                             <SelectItem value="11-50">11-50名</SelectItem>
                             <SelectItem value="51-100">51-100名</SelectItem>
                             <SelectItem value="101+">101名以上</SelectItem>
                           </SelectContent>
                         </Select>
                      </div>

                      <div className="flex items-start space-x-3 pt-2">
                        <Checkbox id="terms" className="mt-1 border-gray-300 rounded-none data-[state=checked]:bg-[#1a1a1a] data-[state=checked]:border-[#1a1a1a]" />
                        <label htmlFor="terms" className="text-sm text-[#666] leading-tight cursor-pointer">
                          <Link href="/terms" className="underline hover:text-[#1a1a1a]">利用規約</Link> および <Link href="/privacy" className="underline hover:text-[#1a1a1a]">プライバシーポリシー</Link> に同意します。
                        </label>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full h-14 text-base bg-[#1a1a1a] hover:bg-[#333] text-white font-medium rounded-none transition-all">
                        無料トライアルを開始
                      </Button>
                      <div className="mt-4 text-center">
                        <button 
                          onClick={() => setStep(1)}
                          className="text-sm text-[#666] hover:text-[#1a1a1a] underline"
                        >
                          基本情報に戻る
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
