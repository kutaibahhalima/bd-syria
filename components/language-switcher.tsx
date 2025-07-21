"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";

    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

    // Navigate to the same page with new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse"
    >
      <Globe className="h-4 w-4" />
      <span className="text-xs">{locale === "ar" ? "English" : "العربية"}</span>
    </Button>
  );
}
