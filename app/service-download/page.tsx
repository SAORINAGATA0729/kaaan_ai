"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, FileText } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Form Schema
const formSchema = z.object({
  company: z.string().min(1, "会社名を入力してください"),
  lastName: z.string().min(1, "姓を入力してください"),
  firstName: z.string().min(1, "名を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().min(10, "電話番号を入力してください"),
  documents: z.array(z.string()).refine((value) => value.length > 0, {
    message: "資料を1つ以上選択してください",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ServiceDownloadPage() {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documents: ["service-guide"], // Default selection
    }
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("資料のダウンロードURLをメールでお送りしました。");
  };

  const documents = watch("documents");

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const current = watch("documents");
    if (checked) {
      setValue("documents", [...current, value]);
    } else {
      setValue("documents", current.filter((item) => item !== value));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-[1000px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-12 leading-tight">
                サービス資料<br />ダウンロード
              </h1>

              <div className="bg-white border border-gray-200 p-8 rounded-xl mb-12 shadow-sm">
                <div className="bg-gray-100 aspect-[3/4] w-1/2 mx-auto flex items-center justify-center mb-8 rounded shadow-inner text-[#999]">
                  <FileText className="w-16 h-16 opacity-20" />
                </div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-4 text-center">ショートカット サービス概要資料</h3>
                <p className="text-sm text-[#666] mb-6 leading-relaxed">
                  ショートカットの機能詳細、料金プラン、導入事例などをまとめた資料です。社内検討用としてご活用ください。
                </p>
                <h4 className="text-sm font-medium text-[#1a1a1a] mb-3">資料に含まれる内容:</h4>
                <ul className="space-y-3">
                  {[
                    "サービス概要・特徴",
                    "具体的な活用シーン・事例",
                    "機能詳細・スペック",
                    "料金プラン表",
                    "導入までの流れ"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[13px] text-[#666]">
                      <Check className="w-4 h-4 text-[#1a1a1a] mr-2 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Form */}
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-xl font-medium text-[#1a1a1a] mb-8">
                  ダウンロードフォーム
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Document Selection */}
                  <div className="space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <Label className="text-base font-medium mb-2 block">希望する資料 <span className="text-red-500">*</span></Label>
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="doc-service" 
                        checked={documents.includes("service-guide")}
                        onCheckedChange={(checked) => handleCheckboxChange("service-guide", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="doc-service"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          サービス概要資料
                        </label>
                        <p className="text-xs text-[#666]">機能、料金、事例などサービスの全体像がわかります。</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 mt-4">
                      <Checkbox 
                        id="doc-case" 
                        checked={documents.includes("case-study")}
                        onCheckedChange={(checked) => handleCheckboxChange("case-study", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="doc-case"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          導入事例集
                        </label>
                        <p className="text-xs text-[#666]">業界別の具体的な活用事例をご覧いただけます。</p>
                      </div>
                    </div>
                    {errors.documents && <p className="text-red-500 text-xs mt-2">{errors.documents.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">会社名 <span className="text-red-500">*</span></Label>
                    <Input id="company" placeholder="例: 株式会社ショートカット" {...register("company")} className={errors.company ? "border-red-500" : ""} />
                    {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="lastName">姓 <span className="text-red-500">*</span></Label>
                      <Input id="lastName" placeholder="例: 山田" {...register("lastName")} className={errors.lastName ? "border-red-500" : ""} />
                      {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName">名 <span className="text-red-500">*</span></Label>
                      <Input id="firstName" placeholder="例: 太郎" {...register("firstName")} className={errors.firstName ? "border-red-500" : ""} />
                      {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス <span className="text-red-500">*</span></Label>
                    <Input id="email" type="email" placeholder="例: example@shortcut.jp" {...register("email")} className={errors.email ? "border-red-500" : ""} />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号 <span className="text-red-500">*</span></Label>
                    <Input id="phone" type="tel" placeholder="例: 03-1234-5678" {...register("phone")} className={errors.phone ? "border-red-500" : ""} />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>

                  <div className="pt-4 space-y-4">
                    <p className="text-xs text-[#666] leading-relaxed text-center">
                      本フォームに入力された情報の送信をもって、株式会社KAAANの<a href="/privacy" className="underline hover:text-[#1a1a1a]">プライバシーポリシー</a>にご同意いただいたものとみなします。
                    </p>
                    <Button type="submit" className="w-full bg-[#1a1a1a] hover:bg-[#333] h-12 text-[15px]">
                      資料をダウンロードする
                    </Button>
                  </div>

                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
