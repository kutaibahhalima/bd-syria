import { Building2, Users, Target, Award, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations();

  const values = [
    {
      icon: Award,
      title: t("about.values.quality"),
      description: t("about.values.qualityDesc"),
    },
    {
      icon: Users,
      title: t("about.values.expertise"),
      description: t("about.values.expertiseDesc"),
    },
    {
      icon: Target,
      title: t("about.values.innovation"),
      description: t("about.values.innovationDesc"),
    },
    {
      icon: Globe,
      title: t("about.values.standards"),
      description: t("about.values.standardsDesc"),
    },
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("about.title")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("about.description")}
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("about.companyTitle")}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t("home.aboutDescription")}
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <Building2 className="h-20 w-20 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("about.visionTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("about.visionDescription")}
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("about.missionTitle")}
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Target className="h-16 w-16 text-brand-primary mx-auto mb-4" />
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("about.missionDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("about.valuesTitle")}
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("about.impactTitle")}
            </h2>
            <p className="text-xl text-blue-100">
              {t("about.impactDescription")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("about.impact.development")}
              </h3>
              <p className="text-blue-100">
                {t("about.impact.developmentDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-primary rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("about.impact.jobs")}
              </h3>
              <p className="text-blue-100">{t("about.impact.jobsDesc")}</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-primary rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t("about.impact.global")}
              </h3>
              <p className="text-blue-100">{t("about.impact.globalDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t("about.teamTitle")}
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Users className="h-16 w-16 text-brand-primary mx-auto mb-4" />
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {t("about.teamDescription")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
