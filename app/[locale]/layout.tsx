import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "ar"];

export const metadata: Metadata = {
  title: "Business Development SY - شركة تطوير الأعمال سوريا",
  description:
    "شركة تطوير الأعمال سوريا - متخصصة في تطوير الأعمال وتقديم الخدمات المتكاملة للشركات الناشئة والقائمة",
  keywords:
    "تطوير الأعمال, سوريا, استشارات, تأسيس الشركات, خدمات مالية, خدمات قانونية",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="scroll-smooth"
    >
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
