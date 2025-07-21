import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  ArrowRight,
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

export default async function TrainingServicesPage() {
  const t = await getTranslations();

  const services = [
    {
      icon: GraduationCap,
      title: t("training.services.professional"),
      description: t("training.services.professionalDesc"),
    },
    {
      icon: Users,
      title: t("training.services.leadership"),
      description: t("training.services.leadershipDesc"),
    },
    {
      icon: Target,
      title: t("training.services.technical"),
      description: t("training.services.technicalDesc"),
    },
    {
      icon: Trophy,
      title: t("training.services.certification"),
      description: t("training.services.certificationDesc"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="h-16 w-16 text-brand-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("navigation.training")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("training.heroDescription")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("training.servicesTitle")}
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
                      <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("training.ctaTitle")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("training.ctaDescription")}
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
