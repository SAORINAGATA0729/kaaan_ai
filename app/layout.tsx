import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAAAN AI編集部構築サービス - Half the Time, Twice the Result",
  description: "プロフェッショナルと共に、事業成長を実現するAI編集部を構築。社内に眠る情報を資産に変え、組織全体で成果に繋がるコンテンツを生み出し続ける仕組みを作ります。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "KAAAN AI編集部構築サービス",
    description: "プロフェッショナルと共に、事業成長を実現するAI編集部を構築",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
