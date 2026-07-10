// src/app/layout.tsx
import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"] });

// 🔴 إضافة إعدادات الـ SEO المتقدمة للواتساب ومواقع التواصل
export const metadata: Metadata = {
  title: `تأملات وسط الضباب | أحمد شاكر`,
  description: `قراءة هادئة في زحام الحياة. مقالات فلسفية ودينية تسعى لإصلاح النفس والمجتمع بعيداً عن صخب اليوميات.`,
  openGraph: {
    title: `تأملات وسط الضباب | أحمد شاكر`,
    description: `قراءة هادئة في زحام الحياة. مقالات فلسفية ودينية تسعى لإصلاح النفس والمجتمع بعيداً عن صخب اليوميات.`,
    url: "https://ahmedshaker.org",
    siteName: "تأملات وسط الضباب",
    images: [
      {
        url: HOME_OG_IMAGE_URL, // سيتم ربطه لاحقاً بصورة اللوجو الخاص بك
        width: 1200,
        height: 630,
        alt: "تأملات وسط الضباب - أحمد شاكر",
      },
    ],
    locale: "ar_EG",
    type: "website",
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
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Analytics /> {/* 🔴 تفعيل أداة التحليلات لترصد الزيارات في كل الصفحات */}
      </body>
    </html>
  );
}