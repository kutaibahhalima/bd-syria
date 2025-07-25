"use client";

import * as React from "react";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/src/navigation";

export default function Navigation() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);

  const navItems = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.about"), href: "/about" },
    {
      name: t("navigation.services"),
      href: "/services",
      submenu: [
        {
          name: t("navigation.companyEstablishment"),
          href: "/services/company-establishment",
        },
        {
          name: t("navigation.financialConsulting"),
          href: "/services/financial-consulting",
        },
        {
          name: t("navigation.administrative"),
          href: "/services/administrative",
        },
        { name: t("navigation.legal"), href: "/services/legal" },
        { name: t("navigation.engineering"), href: "/services/engineering" },
        { name: t("navigation.marketing"), href: "/services/marketing" },
        { name: t("navigation.training"), href: "/services/training" },
        { name: t("navigation.it"), href: "/services/it" },
        { name: t("navigation.importExport"), href: "/services/import-export" },
      ],
    },
    // { name: t("navigation.activities"), href: "/activities" },
    { name: t("navigation.contact"), href: "/contact" },
  ];

  const switchLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    // Use the locale-aware router to switch languages
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Image
                src="/logo.png"
                alt="Business Development SY Logo"
                width={32}
                height={32}
                className="h-16 w-16"
              />
              <div className="text-sm font-bold text-gray-900">
                <span className="block">Business Development Syria</span>
                <span className=" block">شركة تطوير الأعمال سوريا</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                    <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={switchLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs">
                {locale === "ar" ? "English" : "العربية"}
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            {/* Mobile Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={switchLanguage}
              className="flex items-center space-x-1 rtl:space-x-reverse"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs">{locale === "ar" ? "EN" : "ع"}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === item.name ? null : item.name
                          )
                        }
                        className="w-full text-left text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
                      >
                        {item.name}
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="pl-4 rtl:pl-0 rtl:pr-4">
                          {item.submenu.map((subitem, subindex) => (
                            <Link
                              key={subindex}
                              href={subitem.href}
                              className="text-gray-600 hover:text-primary block px-3 py-2 text-sm transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
