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
import { Header } from "@/components/Header";
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
      items: [
        "コミュニケーションリデザイン",
        "データ分析・計測基盤構築",
        "CTR・CVR改善",
        "クリエイティブ制作",
      ],
    },
    {
      title: "コミュニケーション支援",
      items: [
        "コンテンツマーケティング",
        "オウンドメディア",
        "運用型広告",
        "SEO・LLMO強化",
      ],
    },
    {
      title: "総合プロジェクト支援",
      items: [
        "コミュニケーションプランニング",
        "マーケティングプロジェクト推進",
        "組織・体制構築",
        // "AI編集部構築" removed as per request
      ],
    },
    {
        title: "AI編集部構築支援", // New category
        items: [
            "AI編集部構築支援"
        ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <Header />
      
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              
              <div className="space-y-6">
                <div className="flex gap-2 items-center text-sm font-bold border-b pb-2 mb-6">
                  お客様情報
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お名前 <span className="text-red-500 text-xs ml-1">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="山田 太郎" {...field} />
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
                        <FormLabel>会社名 <span className="text-red-500 text-xs ml-1">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="株式会社KAAAN" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>役職 <span className="text-red-500 text-xs ml-1">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
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
                        <FormLabel>メールアドレス <span className="text-red-500 text-xs ml-1">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="example@kaaan.jp" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-2 items-center text-sm font-bold border-b pb-2 mb-6">
                  ご相談内容 <span className="text-red-500 text-xs ml-1">*</span>
                </div>
                
                <FormField
                  control={form.control}
                  name="consultation"
                  render={() => (
                    <FormItem>
                      <div className="space-y-8">
                        {consultationGroups.map((group) => (
                          <div key={group.title}>
                            <h3 className="font-bold mb-3 text-sm">{group.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {group.items.map((item) => (
                                <FormField
                                  key={item}
                                  control={form.control}
                                  name="consultation"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item}
                                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm hover:bg-gray-50 transition-colors"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(item)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, item])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== item
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal cursor-pointer w-full">
                                          {item}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-6">
                <div className="flex gap-2 items-center text-sm font-bold border-b pb-2 mb-6">
                  詳細情報
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>現時点でのご予算</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
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
                      <FormLabel>ご相談の詳細</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="ご相談内容の詳細をご記入ください" 
                          className="min-h-[150px]"
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
                      <FormLabel>知ったキッカケ <span className="text-red-500 text-xs ml-1">*</span></FormLabel>
                      <FormControl>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-3">
                            <input 
                                type="radio" 
                                id="known" 
                                value="known" 
                                checked={field.value === "known"}
                                onChange={field.onChange}
                                className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                            />
                            <label htmlFor="known" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              もともとKAAANを知っていた
                            </label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <input 
                                type="radio" 
                                id="unknown" 
                                value="unknown" 
                                checked={field.value === "unknown"}
                                onChange={field.onChange}
                                className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                            />
                            <label htmlFor="unknown" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              KAAANを知らなかった
                            </label>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="text-center space-y-6 pt-8">
                <p className="text-sm text-gray-500">
                  株式会社KAAANは規定の<a href="#" className="underline">プライバシーポリシー</a>に従い、情報を取り扱います。<br />
                  同意いただける場合は、送信を押してください。
                </p>
                <Button type="submit" size="lg" className="px-12 py-6 text-lg rounded-full bg-black hover:bg-gray-800">
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

