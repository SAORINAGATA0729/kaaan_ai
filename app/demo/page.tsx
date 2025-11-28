"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, ArrowRight, ShieldCheck, Clock, Users, ChevronRight } from "lucide-react";

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [ctaButtonText, setCtaButtonText] = useState("お問い合わせ");
  const [showProposalSections, setShowProposalSections] = useState([false, false, false]);

  // Experience 01: CTAボタンのテキスト変更アニメーション
  useEffect(() => {
    const timer = setTimeout(() => {
      setCtaButtonText("提案を受け取る");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Experience 02: 提案書セクションの順次表示アニメーション
  useEffect(() => {
    const timers = [
      setTimeout(() => setShowProposalSections([true, false, false]), 1000),
      setTimeout(() => setShowProposalSections([true, true, false]), 2000),
      setTimeout(() => setShowProposalSections([true, true, true]), 3000),
    ];
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />

      {/* Main Layout Container */}
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-16 lg:gap-20 items-start py-[60px] md:py-[80px]">

          {/* Left Column: Main Content */}
          <div className="space-y-32">
            
            {/* Hero Content */}
            <section className="pt-2">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.15]">
                ビジネスの成長速度を、<br />
                加速させる14日間。
              </h1>
              <p className="text-lg text-gray-600 leading-[1.8] mb-12 font-light">
                提案書作成から商談獲得まで。<br />
                ショートカットの全機能を、今すぐ体験してください。<br />
                クレジットカードは不要です。
              </p>

              <div className="space-y-6">
                {[
                    { icon: Clock, title: "14日間完全無料", desc: "全機能を制限なくお試しいただけます。" },
                    { icon: ShieldCheck, title: "2分でアカウント作成完了", desc: "面倒な手続きは一切ありません。" }
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#f0f0f0] flex items-center justify-center shrink-0">
                            <item.icon className="w-5 h-5 text-[#1a1a1a]" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium text-base mb-1">{item.title}</h3>
                            <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </section>

            {/* Why Trial? */}
            <section>
              <h2 className="text-2xl font-medium mb-10">すべての機能を、今すぐ体験。</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { id: "01", title: "All Access", head: "全機能を、制限なく。", text: "スタンダードからエンタープライズまで、すべての機能を14日間フルアクセス。AI提案作成の精度を実際にご確認ください。" },
                    { id: "02", title: "Risk Free", head: "リスクは一切ありません。", text: "クレジットカード登録は不要。勝手に課金されることはありません。期間終了後も、自動で有料プランには移行しません。" }
                ].map((item) => (
                    <div key={item.id} className="bg-[#f9f9f9] p-8 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-7 h-7 rounded bg-[#1a1a1a] text-white text-xs font-medium flex items-center justify-center">{item.id}</span>
                            <span className="text-xs font-medium text-[#666] tracking-widest uppercase">{item.title}</span>
                        </div>
                        <h3 className="text-xl font-medium mb-3">{item.head}</h3>
                        <p className="text-[#666] text-sm leading-relaxed">{item.text}</p>
                    </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="space-y-24">
              <h2 className="text-2xl font-medium mb-10">導入するとどうなるか</h2>
                {/* Experience 01 */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#1a1a1a] text-white text-[10px] px-3 py-1 rounded-full font-medium tracking-wider">Step 01</span>
                    </div>
                    <h3 className="text-3xl font-medium leading-tight mb-8 break-keep">自社サイトのCTAが「提案を受け取る」に変わる</h3>
                    <div className="bg-white border border-gray-200 aspect-[2/1] rounded-xl mb-8 shadow-lg overflow-hidden">
                        {/* ブラウザフレーム */}
                        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 ml-4">example-company.com</div>
                        </div>
                        {/* サイトコンテンツ */}
                        <div className="p-12 h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">
                            <h2 className="text-3xl font-medium mb-4 text-gray-900">自社サービス名</h2>
                            <p className="text-gray-600 mb-8 text-center max-w-md">サービス説明がここに入ります</p>
                            <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-all duration-500 shadow-lg transform hover:scale-105">
                                <span className="inline-block transition-all duration-500">{ctaButtonText}</span>
                            </button>
                        </div>
                    </div>
                    <p className="text-[#666] leading-relaxed max-w-2xl font-light text-lg">ショートカットを導入すると、自社サービスサイトのCTAボタンが「提案を受け取る」ボタンに変わります。検討企業は、そのボタンを押すだけで提案を受け取ることができます。</p>
                </div>

                {/* Experience 02 */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#1a1a1a] text-white text-[10px] px-3 py-1 rounded-full font-medium tracking-wider">Step 02</span>
                    </div>
                    <h3 className="text-3xl font-medium leading-tight mb-8 break-keep">3〜5分で提案書が完成。検討企業が受け取る</h3>
                    <div className="bg-white border border-gray-200 aspect-[2/1] rounded-xl mb-8 shadow-lg overflow-hidden">
                        {/* ブラウザフレーム */}
                        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 ml-4">proposal.shortcut.jp/...</div>
                        </div>
                        {/* 提案書プレビュー */}
                        <div className="p-8 h-full bg-white overflow-y-auto">
                            <div className="max-w-3xl mx-auto">
                                <div className="mb-6">
                                    <div className="text-xs text-gray-400 mb-2">提案書</div>
                                    <h1 className="text-2xl font-bold mb-4">【企業名】様向け プロジェクト提案書</h1>
                                </div>
                                <div className="space-y-4">
                                    <div className={`border-l-4 pl-4 transition-all duration-700 ${showProposalSections[0] ? 'border-[#1a1a1a] opacity-100 translate-x-0' : 'border-gray-200 opacity-0 -translate-x-4'}`}>
                                        <h2 className="font-semibold mb-2">相談の背景</h2>
                                        <p className="text-sm text-gray-600 leading-relaxed">企業の現状と課題について...</p>
                                    </div>
                                    <div className={`border-l-4 pl-4 transition-all duration-700 delay-200 ${showProposalSections[1] ? 'border-[#1a1a1a] opacity-100 translate-x-0' : 'border-gray-200 opacity-0 -translate-x-4'}`}>
                                        <h2 className="font-semibold mb-2">プロとしての所感</h2>
                                        <p className="text-sm text-gray-600 leading-relaxed">戦略的な視点から...</p>
                                    </div>
                                    <div className={`border-l-4 pl-4 transition-all duration-700 delay-400 ${showProposalSections[2] ? 'border-[#1a1a1a] opacity-100 translate-x-0' : 'border-gray-200 opacity-0 -translate-x-4'}`}>
                                        <h2 className="font-semibold mb-2">プロジェクト設計</h2>
                                        <p className="text-sm text-gray-600 leading-relaxed">3フェーズでの進行計画...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-[#666] leading-relaxed max-w-2xl font-light text-lg">検討企業がヒアリングに答えると、AIが自動で課題を分析し、最適な構成で提案書を生成。3〜5分で完成した提案書を検討企業が受け取り、そのまま商談が入ります。</p>
                </div>

                {/* Experience 03 */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#1a1a1a] text-white text-[10px] px-3 py-1 rounded-full font-medium tracking-wider">Step 03</span>
                    </div>
                    <h3 className="text-3xl font-medium leading-tight mb-8 break-keep">検討企業がそのまま商談を予約。</h3>
                    <div className="bg-white border border-gray-200 aspect-[2/1] rounded-xl mb-8 shadow-lg overflow-hidden flex items-center justify-center bg-gray-50">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md w-full text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">商談予約が完了しました</h3>
                            <p className="text-gray-500 text-sm mb-6">【企業名】様との商談が設定されました。</p>
                            <div className="bg-gray-50 p-4 rounded-lg text-left text-sm space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">日時</span>
                                    <span className="font-medium">2025年12月10日(水) 14:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">場所</span>
                                    <span className="font-medium">オンライン (Zoom)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-[#666] leading-relaxed max-w-2xl font-light text-lg">完成した提案書を確認した検討企業は、その場で商談を予約することができます。あなたは商談の日程調整をする必要もありません。</p>
                </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-medium mb-8">よくある質問</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium py-6">トライアル期間終了後はどうなりますか？</AccordionTrigger>
                  <AccordionContent className="text-[#666] leading-[1.8] pb-6">
                    自動的に有料プランに移行することはありません。継続をご希望の場合のみ、お手続きをお願いします。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium py-6">セキュリティは安全ですか？</AccordionTrigger>
                  <AccordionContent className="text-[#666] leading-[1.8] pb-6">
                    はい。エンタープライズグレードのセキュリティ対策を実施しており、データは厳重に管理されます。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

          </div>

          {/* Right Column: Sticky Form */}
          <div className="relative z-10 lg:sticky lg:top-[100px]">
            <Card className="border-0 shadow-[0_0_40px_rgba(0,0,0,0.08)] bg-white overflow-hidden rounded-2xl">
              <div className="p-8 pb-0">
                <h2 className="text-2xl font-medium mb-3 text-[#1a1a1a]">無料トライアルをはじめる</h2>
                <p className="text-[#666] text-sm leading-relaxed">アカウントを作成して、すぐに利用を開始できます。</p>
              </div>
              
              <CardContent className="p-8 pt-6">
                {/* Step Indicator */}
                <div className="flex items-center gap-2 mb-6 text-sm">
                  <span className={`font-medium ${step === 1 ? "text-[#1a1a1a]" : "text-gray-400"}`}>1. 基本情報</span>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                  <span className={`font-medium ${step === 2 ? "text-[#1a1a1a]" : "text-gray-400"}`}>2. 詳細情報</span>
                </div>

                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-base font-medium">会社名</Label>
                      <Input id="company" placeholder="株式会社Example" className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors text-base px-4 shadow-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="lastname" className="text-base font-medium">姓</Label>
                        <Input id="lastname" placeholder="山田" className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors text-base px-4 shadow-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstname" className="text-base font-medium">名</Label>
                        <Input id="firstname" placeholder="太郎" className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors text-base px-4 shadow-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-medium">メールアドレス</Label>
                      <Input id="email" type="email" placeholder="name@company.com" className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors text-base px-4 shadow-sm" />
                      <p className="text-xs text-gray-500">会社のメールアドレスを入力してください</p>
                    </div>
                    <Button 
                      className="w-full h-14 text-base bg-[#1a1a1a] hover:bg-[#333] text-white mt-4 font-medium rounded-xl shadow-lg shadow-black/10 transition-all hover:shadow-xl hover:-translate-y-0.5"
                      onClick={() => setStep(2)}
                    >
                      次へ進む
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="department" className="text-base font-medium">部署</Label>
                        <Input id="department" placeholder="営業部" className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors text-base px-4 shadow-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position" className="text-base font-medium">役職</Label>
                        <Input id="position" placeholder="部長" className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors text-base px-4 shadow-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium">電話番号</Label>
                      <Input id="phone" placeholder="03-1234-5678" className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors text-base px-4 shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-base font-medium">パスワード設定</Label>
                      <Input id="password" type="password" placeholder="8文字以上の英数字" className="h-12 bg-white border-gray-200 focus:border-[#1a1a1a] transition-colors text-base px-4 shadow-sm" />
                    </div>
                    
                    <div className="pt-2 pb-2">
                      <p className="text-xs text-[#666] leading-relaxed">
                        本フォームに入力された情報の送信をもって、株式会社KAAANの<Link href="https://kaaan.jp/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1a1a1a]">プライバシーポリシー</Link>にご同意いただいたものとみなします。
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button className="w-full h-14 text-base bg-[#1a1a1a] hover:bg-[#333] text-white font-medium rounded-xl shadow-lg shadow-black/10 transition-all hover:shadow-xl hover:-translate-y-0.5">
                        無料トライアルをはじめる
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
