"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { ArrowRight, ChevronRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

// Form Schema
const formSchema = z.object({
  inquiryType: z.string().min(1, "お問い合わせ種別を選択してください"),
  company: z.string().min(1, "会社名を入力してください"),
  lastName: z.string().min(1, "お名前（姓）を入力してください"),
  firstName: z.string().min(1, "お名前（名）を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  department: z.string().min(1, "部署を入力してください"),
  position: z.string().min(1, "役職を入力してください"),
  phone: z.string().min(10, "電話番号を入力してください"),
  message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { register, handleSubmit, setValue, formState: { errors }, trigger } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const validateStep1 = async () => {
    const isValid = await trigger(["inquiryType", "company", "lastName", "firstName", "email"]);
    if (isValid) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("お問い合わせを受け付けました。担当者よりご連絡いたします。");
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <Header />
      
      <main className="pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Title & Context */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 pt-4">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.15]">
                お問い合わせ
              </h1>
              
              <div className="space-y-8 mb-12">
                <p className="text-lg text-gray-600 leading-[1.8] font-light">
                  導入に関するご相談や、機能についてのご質問など、お気軽にお問い合わせください。<br />
                  担当者より、2営業日以内にご返信いたします。
                </p>
              </div>

              <div className="space-y-6 border-t border-gray-100 pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">お問い合わせフォーム</h3>
                    <p className="text-[#666] text-sm leading-relaxed">24時間受付・2営業日以内に回答いたします。</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="text-xs text-[#666] leading-relaxed font-medium">
                  ※本フォームは、当社サービス導入をご検討中の企業様向けです。<br />
                  営業目的でのご連絡はご遠慮いただいております。
                </p>
              </div>
            </div>
            
            {/* Right Column: Form Card (Unified Design) */}
            <div className="lg:col-span-7 relative z-10">
              <Card className="border-0 shadow-[0_0_40px_rgba(0,0,0,0.08)] bg-white overflow-hidden rounded-2xl">
                {/* Header */}
                <div className="p-8 pb-0">
                  <h2 className="text-2xl font-medium mb-3 text-[#1a1a1a]">お問い合わせフォーム</h2>
                  <p className="text-[#666] text-sm leading-relaxed">以下の情報を入力して、お問い合わせください。</p>
                </div>
                
                <CardContent className="p-8 pt-6">
                  <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    
                    {/* Step Indicator */}
                    <div className="flex items-center gap-4 mb-12">
                      <div className={cn(
                        "flex items-center gap-3 transition-colors duration-300",
                        currentStep === 1 ? "text-[#1a1a1a]" : "text-gray-300"
                      )}>
                        <span className={cn(
                          "flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold border",
                          currentStep === 1 ? "border-[#1a1a1a] bg-[#1a1a1a] text-white" : "border-gray-200 text-gray-300"
                        )}>1</span>
                        <span className="text-sm font-medium tracking-wide">基本情報</span>
                      </div>
                      <div className="w-8 h-px bg-gray-200" />
                      <div className={cn(
                        "flex items-center gap-3 transition-colors duration-300",
                        currentStep === 2 ? "text-[#1a1a1a]" : "text-gray-300"
                      )}>
                        <span className={cn(
                          "flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold border",
                          currentStep === 2 ? "border-[#1a1a1a] bg-[#1a1a1a] text-white" : "border-gray-200 text-gray-300"
                        )}>2</span>
                        <span className="text-sm font-medium tracking-wide">詳細内容</span>
                      </div>
                    </div>

                    {/* Step 1 Content */}
                    <div className={cn(
                      currentStep === 1 ? "block animate-in fade-in slide-in-from-right-4 duration-500" : "hidden"
                    )}>
                      <div className="space-y-6">
                        {/* お問い合わせ種別 */}
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-type" className="text-base font-medium">お問い合わせ種別</Label>
                          <Select onValueChange={(val) => setValue("inquiryType", val)}>
                            <SelectTrigger className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base shadow-sm">
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
                          {errors.inquiryType && <p className="text-red-500 text-xs">{errors.inquiryType.message}</p>}
                        </div>
                        
                        {/* 会社名 */}
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-base font-medium">会社名</Label>
                          <Input 
                            id="company" 
                            placeholder="株式会社Example" 
                            {...register("company")} 
                            className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base px-4 shadow-sm"
                          />
                          {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                        </div>
                        
                        {/* お名前 */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-base font-medium">姓</Label>
                            <Input 
                              id="last-name" 
                              placeholder="山田" 
                              {...register("lastName")} 
                              className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base px-4 shadow-sm"
                            />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-base font-medium">名</Label>
                            <Input 
                              id="first-name" 
                              placeholder="太郎" 
                              {...register("firstName")} 
                              className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base px-4 shadow-sm"
                            />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                          </div>
                        </div>
                        
                        {/* メールアドレス */}
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-medium">メールアドレス</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="name@company.com" 
                            {...register("email")} 
                            className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base px-4 shadow-sm"
                          />
                          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                        </div>
                        
                        {/* Next Step Button */}
                        <div className="pt-4">
                          <Button 
                            type="button" 
                            onClick={validateStep1}
                            className="w-full h-14 text-base bg-[#1a1a1a] hover:bg-[#333] text-white rounded-xl font-medium shadow-lg shadow-black/10 transition-all hover:shadow-xl hover:-translate-y-0.5"
                          >
                            次へ進む <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 Content */}
                    <div className={cn(
                      currentStep === 2 ? "block animate-in fade-in slide-in-from-right-4 duration-500" : "hidden"
                    )}>
                      <div className="space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* 部署 */}
                          <div className="space-y-2">
                            <Label htmlFor="department" className="text-base font-medium">部署</Label>
                            <Input 
                              id="department" 
                              placeholder="営業部" 
                              {...register("department")} 
                              className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base px-4 shadow-sm"
                            />
                            {errors.department && <p className="text-red-500 text-xs">{errors.department.message}</p>}
                          </div>
                          
                          {/* 役職 */}
                          <div className="space-y-2">
                            <Label htmlFor="position" className="text-base font-medium">役職</Label>
                            <Input 
                              id="position" 
                              placeholder="部長" 
                              {...register("position")} 
                              className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base px-4 shadow-sm"
                            />
                            {errors.position && <p className="text-red-500 text-xs">{errors.position.message}</p>}
                          </div>
                        </div>
                        
                        {/* 電話番号 */}
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-medium">電話番号</Label>
                          <Input 
                            id="phone" 
                            placeholder="03-1234-5678" 
                            {...register("phone")} 
                            className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base px-4 shadow-sm"
                          />
                          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                        </div>
                        
                        {/* お問い合わせ内容 */}
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-base font-medium">お問い合わせ内容</Label>
                          <Textarea 
                            id="message" 
                            placeholder="ご質問やご要望がございましたら、具体的にご記入ください。" 
                            className={`min-h-[150px] bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors rounded-md text-base px-4 py-3 shadow-sm resize-y ${errors.message ? "border-red-500" : ""}`}
                            {...register("message")} 
                          />
                          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                        </div>
                        
                        {/* Privacy & Submit */}
                        <div className="pt-4 space-y-6 border-t border-gray-100">
                          <div className="text-center">
                            <p className="text-xs text-[#666] leading-relaxed">
                              本フォームに入力された情報の送信をもって、株式会社KAAANの
                              <Link href="/privacy" className="underline text-[#1a1a1a] hover:text-black mx-1">
                                プライバシーポリシー
                              </Link>
                              にご同意いただいたものとみなします。
                            </p>
                          </div>

                          <div className="flex flex-col gap-3">
                            <Button 
                              type="submit" 
                              className="w-full h-14 text-base bg-[#1a1a1a] hover:bg-[#333] text-white rounded-xl font-medium shadow-lg shadow-black/10 transition-all hover:shadow-xl hover:-translate-y-0.5"
                            >
                              お問い合わせをする
                            </Button>
                             <div className="text-center">
                               <button 
                                 type="button"
                                 onClick={() => setCurrentStep(1)}
                                 className="text-sm text-[#666] hover:text-[#1a1a1a] underline"
                               >
                                 基本情報に戻る
                               </button>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
