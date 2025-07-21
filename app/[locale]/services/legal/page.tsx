import {
  Scale,
  FileText,
  Shield,
  Users,
  BookOpen,
  ArrowRight,
  Gavel,
  AlertTriangle,
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

export default async function LegalServicesPage() {
  const t = await getTranslations();

  const services = [
    {
      icon: Scale,
      title: t("legal.services.consultation"),
      description: t("legal.services.consultationDesc"),
    },
    {
      icon: FileText,
      title: t("legal.services.contracts"),
      description: t("legal.services.contractsDesc"),
    },
    {
      icon: Shield,
      title: t("legal.services.compliance"),
      description: t("legal.services.complianceDesc"),
    },
    {
      icon: Gavel,
      title: t("legal.services.representation"),
      description: t("legal.services.representationDesc"),
    },
    {
      icon: BookOpen,
      title: t("legal.services.corporate"),
      description: t("legal.services.corporateDesc"),
    },
    {
      icon: Users,
      title: t("legal.services.employment"),
      description: t("legal.services.employmentDesc"),
    },
  ];

  const practiceAreas = [
    {
      title: t("legal.practiceAreas.commercial"),
      items: [
        "Business formation",
        "Commercial contracts",
        "Partnership agreements",
        "Mergers & acquisitions",
      ],
    },
    {
      title: t("legal.practiceAreas.employment"),
      items: [
        "Employment contracts",
        "HR policies",
        "Dispute resolution",
        "Labor compliance",
      ],
    },
    {
      title: t("legal.practiceAreas.regulatory"),
      items: [
        "Regulatory review",
        "Compliance audits",
        "Policy development",
        "Risk assessment",
      ],
    },
  ];

  const benefits = [
    t("legal.benefits.protection"),
    t("legal.benefits.guidance"),
    t("legal.benefits.compliance"),
    t("legal.benefits.cost"),
    t("legal.benefits.representation"),
    t("legal.benefits.peace"),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Scale className="h-16 w-16 text-brand-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("navigation.legal")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("legal.heroDescription")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("legal.servicesTitle")}
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="text-center">
                      <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-brand-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("legal.practiceAreasTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("legal.practiceAreasDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {area.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-2 rtl:space-x-reverse"
                      >
                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("legal.benefitsTitle")}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 rtl:space-x-reverse"
                  >
                    <Shield className="h-6 w-6 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
              <div className="text-center">
                <AlertTriangle className="h-16 w-16 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("legal.protectionTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("legal.protectionDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Scale className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-red-100">{t("legal.stats.successRate")}</p>
            </div>
            <div>
              <FileText className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">1000+</div>
              <p className="text-red-100">
                {t("legal.stats.contractsDrafted")}
              </p>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-red-100">{t("legal.stats.compliance")}</p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-red-100">{t("legal.stats.experience")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("legal.ctaTitle")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("legal.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-brand-primary hover:bg-brand-primary/90"
              >
                {t("common.bookConsultation")}
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                {t("common.viewAllServices")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
