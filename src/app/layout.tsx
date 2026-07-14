// src/app/layout.tsx
import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import { Analytics } from "@vercel/analytics/next";
import IndexMenu from "./_components/index-menu";
import Script from "next/script"; // 🔴 استدعاء مكون السكربت الذكي من Next.js

import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"] });

// 🔴 إضافة إعدادات الـ SEO المتقدمة للواتساب ومواقع التواصل
export const metadata: Metadata = {
  // 🔴 هذا هو السطر الذهبي الذي سيحل مشكلة اختفاء الصور في تطبيقات التواصل
  metadataBase: new URL("https://ahmedshaker.org"), 
  title: `تأملات وسط الضباب | أحمد شاكر`,
  description: `قراءة هادئة في زحام الحياة. مقالات فلسفية ودينية تسعى لإصلاح النفس والمجتمع بعيداً عن صخب اليوميات.`,
  openGraph: {
    title: `تأملات وسط الضباب | أحمد شاكر`,
    description: `قراءة هادئة في زحام الحياة. مقالات فلسفية ودينية تسعى لإصلاح النفس والمجتمع بعيداً عن صخب اليوميات.`,
    url: "https://ahmedshaker.org",
    siteName: "تأملات وسط الضباب",
    images: [
      {
        url: HOME_OG_IMAGE_URL, 
        width: 1200,
        height: 630,
        alt: "تأملات وسط الضباب - أحمد شاكر",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  // 🔴 إضافة كود إثبات الملكية الخاص بـ Google Search Console
  verification: {
    google: "rH0rvsLEackfLdBUqFkDZcDAzGto-Nmpp1OyEbXRO1M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* 🔴 كود Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4N1F2F5R4R" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4N1F2F5R4R');
          `}
        </Script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(cairo.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <IndexMenu /> {/* 🔴 إضافة الفهرس الجانبي العائم هنا */}
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Analytics /> {/* 🔴 تفعيل أداة التحليلات لترصد الزيارات في كل الصفحات */}
      </body>
    </html>
  );
}