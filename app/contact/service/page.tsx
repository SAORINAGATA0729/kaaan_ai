"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  company: z.string().min(1, "会社名を入力してください"),
  role: z.string().min(1, "役職を選択してください"),
  email: z.string().email("メールアドレスの形式が正しくありません"),
  consultation: z.array(z.string()).min(1, "ご相談内容を少なくとも1つ選択してください"),
  budget: z.string().optional(),
  detail: z.string().optional(),
  source: z.enum(["known", "unknown"], {
    required_error: "知ったキッカケを選択してください",
  }),
});

function ContactForm() {
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      email: "",
      consultation: [],
      budget: "",
      detail: "",
      source: undefined,
    },
  });

  useEffect(() => {
    const service = searchParams.get("service");
    if (service === "ai") {
      const current = form.getValues("consultation");
      if (!current.includes("AI編集部構築支援")) {
        form.setValue("consultation", [...current, "AI編集部構築支援"]);
      }
    }
  }, [searchParams, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically handle the form submission
    alert("送信しました (デモ)");
  }

  const consultationGroups = [
    {
      title: "サイト価値最大化支援",
      items: "コミュニケーションリデザイン, データ分析・計測基盤構築, CTR・CVR改善, クリエイティブ制作",
    },
    {
      title: "コミュニケーション支援",
      items: "コンテンツマーケティング, オウンドメディア, 運用型広告, SEO・LLMO強化",
    },
    {
      title: "総合プロジェクト支援",
      items: "コミュニケーションプランニング, マーケティングプロジェクト推進, 組織・体制構築",
    },
    {
      title: "AI編集部構築支援",
      items: "AI編集部構築支援",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="flex h-[80px] items-center">
            <Link 
              href="/" 
              className="text-lg font-bold tracking-tight text-[#1a1a1a] hover:opacity-80 transition-opacity"
            >
              KAAAN
            </Link>
          </div>
        </div>
      </header>
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-8 max-w-[800px]">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold mb-4">ご相談</h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              KAAANにご興味をもっていただき、ありがとうございます。<br />
              フォームに必要事項をご入力の上、送信してください。担当者が内容を確認後、ご連絡いたします。<br />
              <br />
              取材依頼、資本業務提携、サービス紹介などは、<a href="#" className="underline hover:text-black">総合お問い合わせ</a>へご連絡ください。
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      お名前 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="山田 太郎" 
                        {...field} 
                        className="h-12 bg-white border-gray-300 focus:border-black focus:ring-0 rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      会社名 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="株式会社KAAAN" 
                        {...field} 
                        className="h-12 bg-white border-gray-300 focus:border-black focus:ring-0 rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      役職 <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-white border-gray-300 focus:border-black focus:ring-0 rounded-md">
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="executive">経営者・役員</SelectItem>
                        <SelectItem value="manager">責任者クラス</SelectItem>
                        <SelectItem value="employee">一般社員</SelectItem>
                        <SelectItem value="freelance">フリーランス</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      メールアドレス <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="example@kaaan.jp" 
                        type="email"
                        {...field} 
                        className="h-12 bg-white border-gray-300 focus:border-black focus:ring-0 rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consultation"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      ご相談内容 <span className="text-red-500">*</span>
                    </FormLabel>
                    <div className="space-y-4 mt-2">
                      {consultationGroups.map((group) => (
                        <FormField
                          key={group.title}
                          control={form.control}
                          name="consultation"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={group.title}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(group.title)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, group.title])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== group.title
                                            )
                                          )
                                    }}
                                    className="border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black mt-1"
                                  />
                                </FormControl>
                                <div className="flex-1">
                                  <FormLabel className="text-sm font-bold cursor-pointer !mt-0 block mb-1">
                                    {group.title}
                                  </FormLabel>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {group.items}
                                  </p>
                                </div>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">現時点でのご予算</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-white border-gray-300 focus:border-black focus:ring-0 rounded-md">
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under_1m">100万円以下</SelectItem>
                        <SelectItem value="under_5m">500万円以下</SelectItem>
                        <SelectItem value="under_10m">1000万円以下</SelectItem>
                        <SelectItem value="under_30m">3000万円以下</SelectItem>
                        <SelectItem value="under_50m">5000万円以下</SelectItem>
                        <SelectItem value="over_50m">5001万円以上</SelectItem>
                        <SelectItem value="undecided">予算未定</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="detail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">ご相談の詳細</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="ご相談内容の詳細をご記入ください" 
                        className="min-h-[120px] bg-white border-gray-300 focus:border-black focus:ring-0 rounded-md resize-y"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-sm font-medium">
                      知ったキッカケ <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="known" 
                            value="known" 
                            checked={field.value === "known"}
                            onChange={() => field.onChange("known")}
                            className="h-4 w-4 border-gray-300 text-black focus:ring-black focus:ring-2"
                          />
                          <label htmlFor="known" className="text-sm font-normal cursor-pointer">
                            もともとKAAANを知っていた
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input 
                            type="radio" 
                            id="unknown" 
                            value="unknown" 
                            checked={field.value === "unknown"}
                            onChange={() => field.onChange("unknown")}
                            className="h-4 w-4 border-gray-300 text-black focus:ring-black focus:ring-2"
                          />
                          <label htmlFor="unknown" className="text-sm font-normal cursor-pointer">
                            KAAANを知らなかった
                          </label>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-6 space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  株式会社KAAANは規定の<a href="https://kaaan.jp/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">プライバシーポリシー</a>に従い、情報を取り扱います。同意いただける場合は、送信を押してください。
                </p>
                <Button type="submit" className="w-full h-14 text-base font-medium bg-black hover:bg-gray-800 text-white rounded-md">
                  送信する
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ContactServicePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 md:px-8 max-w-[800px]">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">ご相談</h1>
              <p className="text-sm text-gray-600">読み込み中...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}

