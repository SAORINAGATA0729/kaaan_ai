import { redirect } from "next/navigation";

export default function Home() {
  redirect("/note/ai-editing-department");
  // Animation Phase State
  // website -> cta_change -> hearing_start -> hearing_input1 -> hearing_q2 -> hearing_input2 -> generating -> proposal -> booking
  const [phase, setPhase] = useState<string>('website');
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  
  // Animation Sequence
  useEffect(() => {
    const runSequence = async () => {
      // 1. Website (Initial State)
      setPhase('website');
      await new Promise(r => setTimeout(r, 2000));

      // 2. CTA Change (Transformation)
      setPhase('cta_change');
      await new Promise(r => setTimeout(r, 2000));

      // 3. Hearing Start (AI Q1)
      setPhase('hearing_start');
      setTypedText1("");
      setTypedText2("");
      await new Promise(r => setTimeout(r, 800));

      // 4. Hearing Input 1 (User A1)
      setPhase('hearing_input1');
      const text1 = "リード獲得後の商談化率が低く、改善したいです。";
      for (let i = 0; i <= text1.length; i++) {
        await new Promise(r => setTimeout(r, 30));
        setTypedText1(text1.slice(0, i));
      }
      await new Promise(r => setTimeout(r, 800));

      // 5. Hearing Q2 (AI Q2)
      setPhase('hearing_q2');
      await new Promise(r => setTimeout(r, 1000));

      // 6. Hearing Input 2 (User A2)
      setPhase('hearing_input2');
      const text2 = "従業員数100〜500名の中堅企業がメインです。";
      for (let i = 0; i <= text2.length; i++) {
        await new Promise(r => setTimeout(r, 30));
        setTypedText2(text2.slice(0, i));
      }
      await new Promise(r => setTimeout(r, 1000));

      // 7. Generating (AI Processing)
      setPhase('generating');
      await new Promise(r => setTimeout(r, 2000));

      // 8. Proposal (Result)
      setPhase('proposal');
      await new Promise(r => setTimeout(r, 2500));

      // 9. Booking (Goal)
      setPhase('booking');
      await new Promise(r => setTimeout(r, 4000));

      // Loop
      runSequence();
    };

    runSequence();

    // Cleanup function - component unmount will stop the sequence
    return () => {
      // Animation will stop when component unmounts
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
            BtoB取引のプロセスを<br />
            <span className="text-white">大幅ショートカット</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-[800px] mx-auto mb-12 font-light">
            課題の入力から提案書の作成まで、AIがすべてを自動化。<br className="hidden md:block" />
            リード獲得から商談までのプロセスを短縮し、ビジネスの成長を加速させます。
          </p>
          
          <div className="flex justify-center mb-20">
            <Button asChild size="lg" className="bg-white text-[#1a1a1a] hover:bg-gray-100 h-14 px-10 text-base font-bold rounded-full min-w-[240px] transition-all duration-300">
              <Link href="/demo">無料トライアルをはじめる</Link>
            </Button>
          </div>

          {/* Hero Animation Visual */}
          <div className="relative max-w-[900px] mx-auto">
             <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] md:aspect-[16/9] relative select-none">
                {/* Browser Bar */}
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2 absolute top-0 left-0 right-0 z-20">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                   </div>
                   <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-400 flex-1 font-mono flex items-center justify-between">
                      <span>
                        {phase === 'website' || phase === 'cta_change' ? 'example.com' : 'shortcut.ai/app'}
                      </span>
                      {phase === 'generating' && <Loader2 className="w-3 h-3 animate-spin" />}
                   </div>
                </div>

                {/* Content Area */}
                <div className="pt-[53px] h-full bg-white text-left relative overflow-hidden">
                   
                   {/* Scene 1 & 2: Website CTA Change */}
                   <div className={`absolute inset-0 pt-[53px] bg-gray-50 transition-all duration-500 ${(phase === 'website' || phase === 'cta_change') ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                      <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                         <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">株式会社Example</h2>
                            <p className="text-gray-500 max-w-md mx-auto">
                               私たちは、革新的なソリューションでビジネスの成長を支援します。
                            </p>
                         </div>
                         
                         <div className="relative h-24 w-80 flex items-center justify-center">
                            {/* Old Button */}
                            <div className={`absolute transition-all duration-500 ease-in-out transform ${phase === 'website' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-4'}`}>
                               <button className="bg-gray-200 text-gray-600 px-8 py-3 rounded-full font-bold text-sm border border-gray-300 shadow-sm">
                                  資料請求・お問い合わせ
                               </button>
                            </div>
                            
                            {/* New Button */}
                            <div className={`absolute transition-all duration-700 ease-out transform ${phase === 'cta_change' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 translate-y-4'}`}>
                               <div className="relative">
                                  <button className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3 animate-[pulse_2s_infinite]">
                                     <Sparkles className="w-5 h-5 text-yellow-400" />
                                     提案を受け取る
                                  </button>
                                  {/* Flash Effect */}
                                  <div className="absolute inset-0 rounded-full bg-yellow-400/30 animate-ping" />
                                  
                                  {/* Cursor Animation */}
                                  <div className="absolute -right-12 top-10 animate-bounce">
                                     <MousePointer2 className="w-10 h-10 text-black fill-white drop-shadow-md" />
                                  </div>
                               </div>
                            </div>
                         </div>
                         
                         {phase === 'cta_change' && (
                             <div className="mt-8 text-sm text-[#1a1a1a] font-bold bg-yellow-100 px-4 py-2 rounded-full animate-in fade-in slide-in-from-bottom-4 shadow-sm">
                                <span className="mr-2">✨</span>CTAが自動で最適化されました
                             </div>
                         )}
                      </div>
                   </div>

                   {/* Scene 3: Hearing (Expanded) */}
                   <div className={`absolute inset-0 pt-[53px] bg-white transition-all duration-500 ${phase.startsWith('hearing') ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                      <div className="h-full flex flex-col max-w-xl mx-auto p-6 md:p-8 overflow-y-auto">
                         <div className="flex-1 space-y-6">
                            
                            {/* Q1 */}
                            <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                               <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                                  <Brain className="w-4 h-4 text-white" />
                               </div>
                               <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 text-sm text-gray-800 shadow-sm">
                                  どのような課題を解決したいですか？
                               </div>
                            </div>

                            {/* A1 */}
                            {(phase === 'hearing_input1' || phase === 'hearing_q2' || phase === 'hearing_input2') && (
                                <div className="flex gap-3 flex-row-reverse animate-in fade-in slide-in-from-bottom-2 duration-500">
                                   <div className="bg-[#1a1a1a] text-white rounded-2xl rounded-tr-none p-4 text-sm shadow-md">
                                      {typedText1}
                                      {phase === 'hearing_input1' && <span className="inline-block w-1 h-4 bg-white ml-1 animate-pulse align-middle"/>}
                                   </div>
                                </div>
                            )}

                            {/* Q2 */}
                            {(phase === 'hearing_q2' || phase === 'hearing_input2') && (
                                <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                   <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                                      <Brain className="w-4 h-4 text-white" />
                                   </div>
                                   <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 text-sm text-gray-800 shadow-sm">
                                      承知しました。ターゲット企業の規模感はどのくらいですか？
                                   </div>
                                </div>
                            )}

                            {/* A2 */}
                            {phase === 'hearing_input2' && (
                                <div className="flex gap-3 flex-row-reverse animate-in fade-in slide-in-from-bottom-2 duration-500">
                                   <div className="bg-[#1a1a1a] text-white rounded-2xl rounded-tr-none p-4 text-sm shadow-md">
                                      {typedText2}
                                      <span className="inline-block w-1 h-4 bg-white ml-1 animate-pulse align-middle"/>
                                   </div>
                                </div>
                            )}

                         </div>
                      </div>
                   </div>

                   {/* Scene 4: Generating */}
                   <div className={`absolute inset-0 pt-[53px] flex flex-col items-center justify-center bg-[#1a1a1a] transition-all duration-500 ${phase === 'generating' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                      <div className="relative mb-8">
                         <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
                            <Brain className="w-12 h-12 text-white" />
                         </div>
                         <div className="absolute inset-0 rounded-full border-t-2 border-white animate-spin"></div>
                         <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">AIが提案書を作成中...</h3>
                      <p className="text-white/60">課題分析・構成案作成・スライド生成</p>
                   </div>

                   {/* Scene 5: Proposal */}
                   <div className={`absolute inset-0 pt-[53px] bg-gray-50 overflow-y-auto transition-all duration-500 ${phase === 'proposal' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-10 pointer-events-none'}`}>
                      <div className="max-w-3xl mx-auto bg-white min-h-full shadow-lg p-8 md:p-12">
                         <div className="flex items-center justify-between border-b pb-6 mb-8">
                            <div>
                               <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Generated Proposal</div>
                               <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">商談獲得効率化のご提案</h2>
                            </div>
                            <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                               <Check className="w-4 h-4" /> 完成
                            </div>
                         </div>
                         
                         <div className="space-y-6">
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                               <h3 className="font-bold text-[#1a1a1a] mb-2">1. 課題の分析</h3>
                               <p className="text-gray-600 text-sm">リード獲得後の商談化率低下の要因として...</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                               <h3 className="font-bold text-[#1a1a1a] mb-2">2. 解決策の提示</h3>
                               <p className="text-gray-600 text-sm">AI活用によるインサイドセールスの自動化により...</p>
                            </div>
                            
                            <div className="flex justify-center pt-8">
                               <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl w-full max-w-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                                  <Calendar className="w-5 h-5" />
                                  この内容で商談を予約する
                               </button>
                               <div className="absolute bottom-20 right-1/3 animate-bounce z-20">
                                  <MousePointer2 className="w-8 h-8 text-black fill-white" />
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Scene 6: Booking Complete */}
                   <div className={`absolute inset-0 pt-[53px] flex flex-col items-center justify-center bg-green-50 transition-all duration-500 ${phase === 'booking' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl animate-in zoom-in duration-500">
                         <Check className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">商談予約が完了しました</h3>
                      <p className="text-gray-600 mb-8">あなたのカレンダーに予定が追加されました。</p>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full max-w-sm">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-500">
                               10/15
                            </div>
                            <div>
                               <div className="font-bold">初回提案ミーティング</div>
                               <div className="text-sm text-gray-500">14:00 - 15:00</div>
                            </div>
                         </div>
                         <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                             <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-white flex items-center justify-center text-xs text-white font-bold">You</div>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section: Problem (Shared Pain) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">従来のBtoB取引の課題</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                「提供側」と「検討側」、お互いに情報が不足していることで、<br className="hidden md:block" />
                非効率なコミュニケーションと機会損失が生まれています。
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute left-1/2 top-24 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-gray-300 to-transparent border-l border-dashed border-gray-300"></div>
             <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-100 rounded-full items-center justify-center border border-gray-200 z-10 text-gray-400">?</div>

             {/* Service Provider Side */}
             <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                   <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-700" />
                   </div>
                   <h3 className="text-xl font-bold">サービス提供側</h3>
                </div>
                <ul className="space-y-4">
                   {[
                      "リードの温度感がわからず、全ての対応に疲弊",
                      "提案書作成に数時間〜数日かかる",
                      "営業担当によって提案品質にばらつきがある"
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                         <span>{item}</span>
                      </li>
                   ))}
                </ul>
             </div>

             {/* Client Side */}
             <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                   <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-gray-700" />
                   </div>
                   <h3 className="text-xl font-bold">サービス検討側</h3>
                </div>
                <ul className="space-y-4">
                   {[
                      "自社に合うサービスかわからず、判断に迷う",
                      "情報収集から商談まで数週間かかる",
                      "複数企業とのやりとりが煩雑で面倒"
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                         <span>{item}</span>
                      </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Section: Solution (Shortcut Structure - REDESIGNED) */}
      <section className="py-24 md:py-32 bg-[#1a1a1a] text-white">
        <div className="container mx-auto max-w-[1200px] px-8">
           <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIが双方をつなぎ、<br className="md:hidden" />商談までのプロセスをショートカット。</h2>
             <p className="text-lg text-white/60 max-w-2xl mx-auto">
                「知りたいことがわからない」検討側と、「相手の温度感がわからない」提供側。<br className="hidden md:block" />
                AIが架け橋となり、最適なマッチングを実現します。
             </p>
          </div>

          {/* Flow Diagram - Single Connected Process */}
          <div className="max-w-5xl mx-auto">
             <div className="bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
                
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                   
                   {/* Step 1 */}
                   <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold">1</div>
                         <div className="text-sm font-bold text-white/60 uppercase tracking-wider">Client Side</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">課題を入力</h3>
                      <div className="bg-white/10 rounded-xl p-6 border border-white/10 h-[160px] flex flex-col justify-center">
                         <div className="flex gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                               <MessageSquare className="w-4 h-4" />
                            </div>
                            <div className="text-sm font-medium">どのような課題がありますか？</div>
                         </div>
                         <div className="ml-11 bg-white/5 p-3 rounded-lg text-sm text-white/60">
                            リードの商談化率が低く...
                         </div>
                      </div>
                      <p className="mt-4 text-sm text-white/60 leading-relaxed">
                         Webサイト上で、自社の状況や課題をチャット形式で入力します。
                      </p>
                   </div>

                   {/* Connector Arrow (Mobile: Down, Desktop: Right) */}
                   <div className="hidden md:flex absolute top-1/2 left-[33%] -translate-y-1/2 text-white/20 z-0">
                      <ArrowRight className="w-12 h-12" />
                   </div>

                   {/* Step 2 */}
                   <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold">2</div>
                         <div className="text-sm font-bold text-white/60 uppercase tracking-wider">Shortcut AI</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">提案書が届く</h3>
                      <div className="bg-gradient-to-b from-white/20 to-white/5 rounded-xl p-6 border border-white/20 h-[160px] flex flex-col items-center justify-center text-center relative shadow-lg">
                         <Sparkles className="absolute top-3 right-3 w-5 h-5 text-yellow-400 animate-pulse" />
                         <div className="w-12 h-12 bg-white text-[#1a1a1a] rounded-lg flex items-center justify-center mb-3">
                            <FileText className="w-6 h-6" />
                         </div>
                         <div className="font-bold">個別提案書</div>
                         <div className="text-xs text-white/60 mt-1">Generated by AI</div>
                      </div>
                      <p className="mt-4 text-sm text-white/60 leading-relaxed">
                         入力内容に基づき、AIが最適な解決策を提示した提案書をその場で生成します。
                      </p>
                   </div>

                   {/* Connector Arrow */}
                   <div className="hidden md:flex absolute top-1/2 left-[66%] -translate-y-1/2 text-white/20 z-0">
                      <ArrowRight className="w-12 h-12" />
                   </div>

                   {/* Step 3 */}
                   <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold">3</div>
                         <div className="text-sm font-bold text-white/60 uppercase tracking-wider">Result</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">商談を予約</h3>
                      <div className="bg-white/10 rounded-xl p-6 border border-white/10 h-[160px] flex flex-col items-center justify-center text-center">
                         <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                            <Check className="w-6 h-6 text-white" />
                         </div>
                         <div className="font-bold">商談予約完了</div>
                         <div className="text-xs text-white/60 mt-1">確度の高い商談を獲得</div>
                      </div>
                      <p className="mt-4 text-sm text-white/60 leading-relaxed">
                         提案内容に興味を持てば、その場で商談を予約。無駄なやり取りは発生しません。
                      </p>
                   </div>

                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section: Features Grid (Revised to 5 items in 3x2 grid) */}
      <section className="py-24 md:py-32 bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">ショートカットの機能</h2>
            <p className="text-gray-600">属人性を排除し、誰もがトップセールスのクオリティを実現します。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: "ヒアリングシステム", desc: "構造化された質問で、顧客の真の課題を自動で引き出します。" },
              { icon: Zap, title: "AI自動提案書生成", desc: "入力された課題をもとに、AIが3-5分で高品質な提案書を自動生成します。" },
              { icon: Shield, title: "品質保証システム", desc: "提案書の構成や論理展開をAIがチェックし、一定水準以上の品質を担保。" },
              { icon: Brain, title: "ナレッジ蓄積・活用", desc: "過去の受注案件や社内ドキュメントをAIが学習し、提案に反映します。" },
              { icon: BarChart3, title: "分析・測定システム", desc: "提案書の閲覧状況や商談化率を分析し、継続的に改善します。" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-6 text-white">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#1a1a1a]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full px-8 h-12 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all">
              <Link href="/features">機能の詳細を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section: Use Cases Summary (9 items) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">活用シーン</h2>
            <p className="text-gray-600">様々なビジネス課題をショートカットで解決します。</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "大量にリードがあるが商談に繋がらない", desc: "確度の低いリード対応に追われている", link: "/usecase/lead-quality" },
              { title: "営業組織のスキル差を埋めたい", desc: "提案書の品質が人によってばらつく", link: "/usecase/skill-gap" },
              { title: "リソース不足でリードをフォローできない", desc: "少人数でも効率的に成果を出したい", link: "/usecase/resource-shortage" },
              { title: "提案書作成に時間がかかる", desc: "作成時間を短縮し、商談準備を効率化", link: "/usecase/proposal-time" },
              { title: "リードタイムの長期化を解決する", desc: "商談までの期間を大幅に短縮", link: "/usecase/lead-time" },
              { title: "マーケティング施策の効果が出ない", desc: "リード獲得後のプロセスを最適化", link: "/usecase/marketing-roi" },
              { title: "展示会で獲得したリードを即商談化したい", desc: "鉄は熱いうちに打つ。スピード対応を実現", link: "/usecase/exhibition" },
              { title: "インサイドセールスの負荷を減らしたい", desc: "初期対応を自動化し、本質的な業務へ", link: "/usecase/inside-sales" },
              { title: "既存顧客への新提案を効率化したい", desc: "過去データを活かし、最適なアップセル提案", link: "/usecase/upsell" },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="group block h-full">
                <div className="flex flex-col justify-between p-8 rounded-2xl border border-gray-100 hover:border-[#1a1a1a] hover:bg-gray-50 transition-all duration-300 h-full">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a] transition-colors">
                      <ArrowRight className="w-4 h-4 text-[#1a1a1a] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:translate-x-1 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/usecase" className="text-sm font-bold text-[#1a1a1a] inline-flex items-center gap-1 hover:opacity-70 border-b border-transparent hover:border-[#1a1a1a] pb-0.5 transition-all">
              すべての活用シーンを見る <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section className="py-24 md:py-32 bg-[#f9f9f9]">
        <div className="container mx-auto max-w-[800px] px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">よくある質問</h2>
            <p className="text-gray-600">ショートカットに関する疑問にお答えします。</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "無料トライアル期間終了後はどうなりますか？", a: "自動的に有料プランに移行することはありません。継続をご希望の場合のみ、お手続きをお願いします。" },
                { q: "セキュリティは安全ですか？", a: "はい。エンタープライズグレードのセキュリティ対策を実施しており、データは厳重に管理されます。Geminiを使用しており、セキュリティ要件の厳格な企業でも安心してご利用いただけます。" },
                { q: "導入コスト・ROIはどの程度ですか？", a: "月額料金は10万円からです。リード獲得から商談までの時間や、提案書作成時間の短縮により、高い投資対効果を提供します。" },
                { q: "導入支援はありますか？", a: "はい、プロフェッショナルプランとエンタープライズプランでは、専任のサポートチームによる導入支援を提供しています。" },
                { q: "既存のSFA/CRMと連携できますか？", a: "はい、主要なSFA/CRMツールとの連携が可能です。詳細はお問い合わせください。" }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-gray-100 last:border-0">
                  <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline hover:text-[#666] transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-bold text-[#1a1a1a] inline-flex items-center gap-1 hover:opacity-70 border-b border-transparent hover:border-[#1a1a1a] pb-0.5 transition-all">
              よくある質問一覧を見る <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Latest News */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-[800px] px-8">
          <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-4">
            <h2 className="text-3xl font-bold text-[#1a1a1a]">最新情報</h2>
            <Link href="/news" className="text-sm font-bold text-[#1a1a1a] inline-flex items-center gap-1 hover:opacity-70">
              一覧を見る <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="space-y-0">
            {[
              { date: "2025.01.15", cat: "アップデート", title: "バージョン2.0.0をリリースしました" },
              { date: "2025.01.10", cat: "お知らせ", title: "無料トライアル期間を30日間に延長しました" },
              { date: "2024.12.20", cat: "お知らせ", title: "年末年始の営業について" },
              { date: "2024.11.25", cat: "メディア掲載", title: "「TechCrunch Japan」に掲載されました" },
            ].map((item, i) => (
              <Link key={i} href="/news" className="group block">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg">
                  <div className="text-sm text-gray-400 font-mono shrink-0">{item.date}</div>
                  <div className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded w-fit shrink-0">{item.cat}</div>
                  <div className="font-medium text-[#1a1a1a] group-hover:text-[#666] transition-colors line-clamp-1">
                    {item.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section: CTA */}
      <CTASection />
      
      <Footer />
    </div>
  );
}
