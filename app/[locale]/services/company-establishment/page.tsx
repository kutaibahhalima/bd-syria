import {
  Building2,
  FileText,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Star,
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

export default async function CompanyEstablishmentPage() {
  const t = await getTranslations();

  const services = [
    {
      icon: FileText,
      title: t("companyEstablishment.services.legalFormation"),
      description: t("companyEstablishment.services.legalFormationDesc"),
    },
    {
      icon: Shield,
      title: t("companyEstablishment.services.licensing"),
      description: t("companyEstablishment.services.licensingDesc"),
    },
    {
      icon: Building2,
      title: t("companyEstablishment.services.structure"),
      description: t("companyEstablishment.services.structureDesc"),
    },
    {
      icon: Users,
      title: t("companyEstablishment.services.management"),
      description: t("companyEstablishment.services.managementDesc"),
    },
  ];

  const process = [
    {
      step: "01",
      title: t("companyEstablishment.process.consultation"),
      description: t("companyEstablishment.process.consultationDesc"),
    },
    {
      step: "02",
      title: t("companyEstablishment.process.documentation"),
      description: t("companyEstablishment.process.documentationDesc"),
    },
    {
      step: "03",
      title: t("companyEstablishment.process.registration"),
      description: t("companyEstablishment.process.registrationDesc"),
    },
    {
      step: "04",
      title: t("companyEstablishment.process.licensing"),
      description: t("companyEstablishment.process.licensingDesc"),
    },
    {
      step: "05",
      title: t("companyEstablishment.process.support"),
      description: t("companyEstablishment.process.supportDesc"),
    },
  ];

  const benefits = [
    t("companyEstablishment.benefits.compliance"),
    t("companyEstablishment.benefits.speed"),
    t("companyEstablishment.benefits.guidance"),
    t("companyEstablishment.benefits.support"),
    t("companyEstablishment.benefits.cost"),
    t("companyEstablishment.benefits.assurance"),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Building2 className="h-16 w-16 text-brand-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("navigation.companyEstablishment")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("companyEstablishment.heroDescription")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("companyEstablishment.servicesTitle")}
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                        <Icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("companyEstablishment.processTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("companyEstablishment.processDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
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
                {t("companyEstablishment.benefitsTitle")}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 rtl:space-x-reverse"
                  >
                    <CheckCircle className="h-6 w-6 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <Star className="h-16 w-16 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("companyEstablishment.expertiseTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("companyEstablishment.expertiseDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-blue-100">
                {t("companyEstablishment.stats.companiesFormed")}
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <p className="text-blue-100">
                {t("companyEstablishment.stats.averageTime")}
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">
                {t("companyEstablishment.stats.successRate")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("companyEstablishment.ctaTitle")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("companyEstablishment.ctaDescription")}
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
