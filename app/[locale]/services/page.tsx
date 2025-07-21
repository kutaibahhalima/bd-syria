import {
  Building2,
  Calculator,
  Users,
  Scale,
  Wrench,
  Megaphone,
  GraduationCap,
  Monitor,
  Truck,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { Link } from "@/src/navigation";

export default async function ServicesPage() {
  const t = await getTranslations();

  const services = [
    {
      title: t("navigation.companyEstablishment"),
      description: t(
        "services.servicesOffered.companyEstablishment.description"
      ),
      icon: Building2,
      href: "/services/company-establishment",
      features: [
        t("services.servicesOffered.companyEstablishment.features.0"),
        t("services.servicesOffered.companyEstablishment.features.1"),
        t("services.servicesOffered.companyEstablishment.features.2"),
        t("services.servicesOffered.companyEstablishment.features.3"),
      ],
    },
    {
      title: t("navigation.financialConsulting"),
      description: t(
        "services.servicesOffered.financialConsulting.description"
      ),
      icon: Calculator,
      href: "/services/financial-consulting",
      features: [
        t("services.servicesOffered.financialConsulting.features.0"),
        t("services.servicesOffered.financialConsulting.features.1"),
        t("services.servicesOffered.financialConsulting.features.2"),
        t("services.servicesOffered.financialConsulting.features.3"),
      ],
    },
    {
      title: t("navigation.administrative"),
      description: t("services.servicesOffered.administrative.description"),
      icon: Users,
      href: "/services/administrative",
      features: [
        t("services.servicesOffered.administrative.features.0"),
        t("services.servicesOffered.administrative.features.1"),
        t("services.servicesOffered.administrative.features.2"),
        t("services.servicesOffered.administrative.features.3"),
      ],
    },
    {
      title: t("navigation.legal"),
      description: t("services.servicesOffered.legal.description"),
      icon: Scale,
      href: "/services/legal",
      features: [
        t("services.servicesOffered.legal.features.0"),
        t("services.servicesOffered.legal.features.1"),
        t("services.servicesOffered.legal.features.2"),
        t("services.servicesOffered.legal.features.3"),
      ],
    },
    {
      title: t("navigation.engineering"),
      description: t("services.servicesOffered.engineering.description"),
      icon: Wrench,
      href: "/services/engineering",
      features: [
        t("services.servicesOffered.engineering.features.0"),
        t("services.servicesOffered.engineering.features.1"),
        t("services.servicesOffered.engineering.features.2"),
        t("services.servicesOffered.engineering.features.3"),
      ],
    },
    {
      title: t("navigation.marketing"),
      description: t("services.servicesOffered.marketing.description"),
      icon: Megaphone,
      href: "/services/marketing",
      features: [
        t("services.servicesOffered.marketing.features.0"),
        t("services.servicesOffered.marketing.features.1"),
        t("services.servicesOffered.marketing.features.2"),
        t("services.servicesOffered.marketing.features.3"),
      ],
    },
    {
      title: t("navigation.training"),
      description: t("services.servicesOffered.training.description"),
      icon: GraduationCap,
      href: "/services/training",
      features: [
        t("services.servicesOffered.training.features.0"),
        t("services.servicesOffered.training.features.1"),
        t("services.servicesOffered.training.features.2"),
        t("services.servicesOffered.training.features.3"),
      ],
    },
    {
      title: t("navigation.it"),
      description: t("services.servicesOffered.it.description"),
      icon: Monitor,
      href: "/services/it",
      features: [
        t("services.servicesOffered.it.features.0"),
        t("services.servicesOffered.it.features.1"),
        t("services.servicesOffered.it.features.2"),
        t("services.servicesOffered.it.features.3"),
      ],
    },
    {
      title: t("navigation.importExport"),
      description: t("services.servicesOffered.importExport.description"),
      icon: Truck,
      href: "/services/import-export",
      features: [
        t("services.servicesOffered.importExport.features.0"),
        t("services.servicesOffered.importExport.features.1"),
        t("services.servicesOffered.importExport.features.2"),
        t("services.servicesOffered.importExport.features.3"),
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("services.title")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("services.description")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-brand-primary"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                      <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                        <Icon className="h-6 w-6 text-brand-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-brand-primary rounded-full ml-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-red-50 transition-colors"
                      >
                        {t("common.moreDetails")}
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("services.ctaTitle")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("services.ctaDescription")}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-brand-secondary hover:text-brand-secondary/80 bg-white hover:bg-gray-100"
            >
              {t("common.bookConsultation")}
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
