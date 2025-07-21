import {
  Calculator,
  TrendingUp,
  FileBarChart,
  PieChart,
  ArrowRight,
  DollarSign,
  Shield,
  Target,
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

export default async function FinancialConsultingPage() {
  const t = await getTranslations();

  const services = [
    {
      icon: Calculator,
      title: t("financialConsulting.services.accounting"),
      description: t("financialConsulting.services.accountingDesc"),
    },
    {
      icon: TrendingUp,
      title: t("financialConsulting.services.advisory"),
      description: t("financialConsulting.services.advisoryDesc"),
    },
    {
      icon: FileBarChart,
      title: t("financialConsulting.services.tax"),
      description: t("financialConsulting.services.taxDesc"),
    },
    {
      icon: PieChart,
      title: t("financialConsulting.services.analysis"),
      description: t("financialConsulting.services.analysisDesc"),
    },
    {
      icon: Shield,
      title: t("financialConsulting.services.risk"),
      description: t("financialConsulting.services.riskDesc"),
    },
    {
      icon: Target,
      title: t("financialConsulting.services.cost"),
      description: t("financialConsulting.services.costDesc"),
    },
  ];

  const benefits = [
    {
      title: t("financialConsulting.benefits.cashFlow"),
      description: t("financialConsulting.benefits.cashFlowDesc"),
    },
    {
      title: t("financialConsulting.benefits.taxOptimization"),
      description: t("financialConsulting.benefits.taxOptimizationDesc"),
    },
    {
      title: t("financialConsulting.benefits.insights"),
      description: t("financialConsulting.benefits.insightsDesc"),
    },
    {
      title: t("financialConsulting.benefits.compliance"),
      description: t("financialConsulting.benefits.complianceDesc"),
    },
  ];

  const process = [
    {
      step: "01",
      title: t("financialConsulting.process.assessment"),
      description: t("financialConsulting.process.assessmentDesc"),
    },
    {
      step: "02",
      title: t("financialConsulting.process.strategy"),
      description: t("financialConsulting.process.strategyDesc"),
    },
    {
      step: "03",
      title: t("financialConsulting.process.implementation"),
      description: t("financialConsulting.process.implementationDesc"),
    },
    {
      step: "04",
      title: t("financialConsulting.process.monitoring"),
      description: t("financialConsulting.process.monitoringDesc"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Calculator className="h-16 w-16 text-brand-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("navigation.financialConsulting")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("financialConsulting.heroDescription")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("financialConsulting.servicesTitle")}
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
                      <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("financialConsulting.processTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("financialConsulting.processDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("financialConsulting.benefitsTitle")}
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("financialConsulting.statsTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <DollarSign className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">25%</div>
              <p className="text-red-100">
                {t("financialConsulting.stats.taxSavings")}
              </p>
            </div>
            <div>
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">150+</div>
              <p className="text-red-100">
                {t("financialConsulting.stats.activeClients")}
              </p>
            </div>
            <div>
              <FileBarChart className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-red-100">
                {t("financialConsulting.stats.reportsCompleted")}
              </p>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-red-100">
                {t("financialConsulting.stats.compliance")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("financialConsulting.ctaTitle")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("financialConsulting.ctaDescription")}
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
