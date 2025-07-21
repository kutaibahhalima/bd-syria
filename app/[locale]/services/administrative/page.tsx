import {
  Users,
  Settings,
  FileText,
  TrendingUp,
  Clock,
  ArrowRight,
  Briefcase,
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

export default async function AdministrativeServicesPage() {
  const t = await getTranslations();

  const services = [
    {
      icon: Users,
      title: t("administrative.services.hr"),
      description: t("administrative.services.hrDesc"),
    },
    {
      icon: Settings,
      title: t("administrative.services.organizational"),
      description: t("administrative.services.organizationalDesc"),
    },
    {
      icon: FileText,
      title: t("administrative.services.policies"),
      description: t("administrative.services.policiesDesc"),
    },
    {
      icon: Briefcase,
      title: t("administrative.services.operations"),
      description: t("administrative.services.operationsDesc"),
    },
    {
      icon: TrendingUp,
      title: t("administrative.services.performance"),
      description: t("administrative.services.performanceDesc"),
    },
    {
      icon: Target,
      title: t("administrative.services.strategic"),
      description: t("administrative.services.strategicDesc"),
    },
  ];

  const solutions = [
    {
      title: t("administrative.solutions.hr"),
      features: [
        "Recruitment & Selection",
        "Employee Onboarding",
        "Performance Reviews",
        "Training Programs",
      ],
    },
    {
      title: t("administrative.solutions.excellence"),
      features: [
        "Process Optimization",
        "Quality Management",
        "Efficiency Improvement",
        "Cost Reduction",
      ],
    },
    {
      title: t("administrative.solutions.design"),
      features: [
        "Structure Design",
        "Role Definition",
        "Reporting Lines",
        "Communication Flow",
      ],
    },
  ];

  const benefits = [
    t("administrative.benefits.efficiency"),
    t("administrative.benefits.satisfaction"),
    t("administrative.benefits.processes"),
    t("administrative.benefits.alignment"),
    t("administrative.benefits.costs"),
    t("administrative.benefits.productivity"),
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="h-16 w-16 text-brand-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("navigation.administrative")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("administrative.heroDescription")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("administrative.servicesTitle")}
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
                      <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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

      {/* Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("administrative.solutionsTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("administrative.solutionsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2 rtl:space-x-reverse"
                      >
                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
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
                {t("administrative.benefitsTitle")}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 rtl:space-x-reverse"
                  >
                    <TrendingUp className="h-6 w-6 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <Settings className="h-16 w-16 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("administrative.developmentTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("administrative.developmentDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">300+</div>
              <p className="text-blue-100">
                {t("administrative.stats.employeesTrained")}
              </p>
            </div>
            <div>
              <Settings className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="text-blue-100">
                {t("administrative.stats.systemsDeveloped")}
              </p>
            </div>
            <div>
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">40%</div>
              <p className="text-blue-100">
                {t("administrative.stats.productivityImprovement")}
              </p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">60%</div>
              <p className="text-blue-100">
                {t("administrative.stats.timeSavings")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("administrative.ctaTitle")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("administrative.ctaDescription")}
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
