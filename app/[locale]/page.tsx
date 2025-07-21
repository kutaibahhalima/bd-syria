import {
  ArrowRight,
  Building2,
  Users,
  Target,
  Award,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTranslations } from "next-intl/server";
import { Link } from "@/src/navigation";

export default async function HomePage() {
  const t = await getTranslations();

  const services = [
    {
      title: t("home.services.companyEstablishment"),
      description: t("home.services.companyEstablishmentDesc"),
      icon: Building2,
      href: "/services/company-establishment",
    },
    {
      title: t("home.services.financial"),
      description: t("home.services.financialDesc"),
      icon: Target,
      href: "/services/financial-consulting",
    },
    {
      title: t("home.services.administrative"),
      description: t("home.services.administrativeDesc"),
      icon: Users,
      href: "/services/administrative",
    },
    {
      title: t("home.services.legal"),
      description: t("home.services.legalDesc"),
      icon: Award,
      href: "/services/legal",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">{t("home.companyName")}</span>
              <span className="block text-brand-secondary text-2xl md:text-3xl mt-2">
                {t("home.companyNameEn")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t("home.heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-brand-primary hover:bg-brand-primary/90"
                asChild
              >
                <Link href="/services">
                  {t("common.exploreServices")}
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
                asChild
              >
                <Link href="/contact">{t("common.contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("home.aboutTitle")}
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("home.aboutCompanyTitle")}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t("home.aboutDescription")}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-brand-primary rounded-full p-1 mr-3 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    {t("home.features.innovative")}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-primary rounded-full p-1 mr-3 mt-1">
                    <Building2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    {t("home.features.standards")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("home.servicesTitle")}
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("home.servicesDescription")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-brand-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={service.href}>{t("common.learnMore")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/services">{t("common.viewAllServices")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("home.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-3 bg-white text-brand-secondary hover:bg-gray-100"
              asChild
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                {t("common.callNow")}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-brand-secondary"
              asChild
            >
              <Link href="mailto:info@businessdev-sy.com">
                <Mail className="mr-2 h-5 w-5" />
                {t("common.sendMessage")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
