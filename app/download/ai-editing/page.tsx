"use client";

// AI編集部構築支援サービス 資料ダウンロードページ
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
import Link from "next/link";
import { Footer } from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  company: z.string().min(1, "会社名を入力してください"),
  role: z.string().min(1, "役職を選択してください"),
  email: z.string().email("メールアドレスの形式が正しくありません"),
});

export default function DownloadAiEditingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically handle the form submission and trigger download
    alert("資料をダウンロードしました (デモ)");
  }

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
        <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Content & Preview */}
            <div className="space-y-8">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-8">
                AI編集部構築支援サービス紹介資料
              </h1>
              
              <div className="space-y-6 text-sm leading-relaxed text-[#1a1a1a]">
                <p>
                  AI活用が進まない最大の原因は、「ツール」ではなく「プロセス」にあります。<br />
                  本資料では、単なる効率化に留まらず、<span className="font-bold">「事業成果（売上・リード）」を創出するAI編集部の構築メソッド</span>について、具体的な事例を交えて解説しています。
                </p>
                
                <div>
                  <p className="font-bold mb-3">本資料でわかること:</p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-2">
                      <span className="text-black mt-1">-</span>
                      <span>なぜ、「個人の生産性」が上がっても「組織の成果」は変わらないのか？</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black mt-1">-</span>
                      <span>「インプット思考」で実現する、競合優位性の高いコンテンツ生成フロー</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black mt-1">-</span>
                      <span>AI編集部構築の具体的な3ステップ（Input / Edit / Growth）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black mt-1">-</span>
                      <span>半年で自走するためのロードマップと支援体制</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black mt-1">-</span>
                      <span>実際の導入企業におけるBefore/Afterと成果事例</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  ぜひ、貴社の事業成長にお役立てください。
                </p>
              </div>

              {/* Preview Images - 4枚 */}
              <div className="grid grid-cols-2 gap-3 max-w-xs">
                {[1, 2, 3, 4].map((num) => (
                  <div 
                    key={num}
                    className="w-full aspect-[3/4] bg-gray-200 rounded flex items-center justify-center border border-gray-300"
                  >
                    <div className="text-center text-gray-400">
                      <p className="text-xs font-medium">資料{num}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 mb-4">
                        <span className="text-red-500">*</span> が付いている項目は必須です
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            お名前 <span className="text-red-500 text-xs ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="山田 太郎" {...field} className="h-12" />
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
                          <FormLabel>
                            会社名 <span className="text-red-500 text-xs ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="株式会社KAAAN" {...field} className="h-12" />
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
                          <FormLabel>
                            役職 <span className="text-red-500 text-xs ml-1">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
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
                          <FormLabel>
                            メールアドレス <span className="text-red-500 text-xs ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="example@kaaan.jp" type="email" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-xs text-gray-500 leading-relaxed mb-6">
                        株式会社KAAANは規定の<a href="https://kaaan.jp/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">プライバシーポリシー</a>に従い、情報を取り扱います。同意いただける場合は、送信を押してください。
                      </p>
                      <Button type="submit" size="lg" className="w-full h-14 text-base rounded-full bg-black hover:bg-gray-800">
                        送信する
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

