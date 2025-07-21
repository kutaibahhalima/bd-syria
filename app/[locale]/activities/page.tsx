import { Calendar, Users, Award, Newspaper, ArrowRight } from "lucide-react";
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

export default async function ActivitiesPage() {
  const t = await getTranslations();

  // These could be dynamic from a CMS or database
  const activities = [
    {
      title: "ورشة عمل حول تطوير الأعمال",
      titleEn: "Business Development Workshop",
      description:
        "ورشة عمل متخصصة حول استراتيجيات تطوير الأعمال للشركات الناشئة",
      descriptionEn:
        "Specialized workshop on business development strategies for startups",
      date: "15 مارس 2024",
      dateEn: "March 15, 2024",
      category: "تدريب",
      categoryEn: "Training",
    },
    {
      title: "مؤتمر الاستثمار السوري",
      titleEn: "Syrian Investment Conference",
      description: "مشاركتنا في مؤتمر الاستثمار السنوي لعرض أحدث خدماتنا",
      descriptionEn:
        "Our participation in the annual investment conference to showcase our latest services",
      date: "2 فبراير 2024",
      dateEn: "February 2, 2024",
      category: "مؤتمر",
      categoryEn: "Conference",
    },
    {
      title: "تدشين برنامج دعم الشركات الناشئة",
      titleEn: "Startup Support Program Launch",
      description: "إطلاق برنامج جديد لدعم ومرافقة الشركات الناشئة في رحلتها",
      descriptionEn:
        "Launching a new program to support and guide startups on their journey",
      date: "20 يناير 2024",
      dateEn: "January 20, 2024",
      category: "إعلان",
      categoryEn: "Announcement",
    },
    {
      title: "ندوة حول التحول الرقمي",
      titleEn: "Digital Transformation Seminar",
      description: "ندوة تعريفية حول أهمية التحول الرقمي في الأعمال",
      descriptionEn:
        "Educational seminar on the importance of digital transformation in business",
      date: "10 ديسمبر 2023",
      dateEn: "December 10, 2023",
      category: "ندوة",
      categoryEn: "Seminar",
    },
    {
      title: "حصولنا على شهادة الجودة الدولية",
      titleEn: "International Quality Certification Achievement",
      description: "فخورون بحصولنا على شهادة الجودة الدولية في مجال الاستشارات",
      descriptionEn:
        "Proud to receive international quality certification in consulting",
      date: "5 نوفمبر 2023",
      dateEn: "November 5, 2023",
      category: "إنجاز",
      categoryEn: "Achievement",
    },
    {
      title: "دورة تدريبية في إدارة المشاريع",
      titleEn: "Project Management Training Course",
      description: "دورة تدريبية مكثفة في إدارة المشاريع للمهنيين",
      descriptionEn:
        "Intensive project management training course for professionals",
      date: "25 أكتوبر 2023",
      dateEn: "October 25, 2023",
      category: "تدريب",
      categoryEn: "Training",
    },
  ];

  const stats = [
    {
      icon: Users,
      title: t("activities.stats.clients"),
      value: "500+",
      description: t("activities.stats.clientsDesc"),
    },
    {
      icon: Award,
      title: t("activities.stats.projects"),
      value: "200+",
      description: t("activities.stats.projectsDesc"),
    },
    {
      icon: Calendar,
      title: t("activities.stats.experience"),
      value: "10+",
      description: t("activities.stats.experienceDesc"),
    },
    {
      icon: Newspaper,
      title: t("activities.stats.events"),
      value: "50+",
      description: t("activities.stats.eventsDesc"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Newspaper className="h-16 w-16 text-slate-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("activities.title")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("activities.description")}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("activities.statsTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("activities.statsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("activities.latestTitle")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("activities.latestDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-red-100 to-blue-200 flex items-center justify-center">
                  <Newspaper className="h-16 w-16 text-brand-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-red-100 text-brand-primary text-sm rounded-full">
                      {activity.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {activity.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {t("common.readMore")}
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("activities.ctaTitle")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("activities.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-brand-secondary hover:text-brand-secondary/80 bg-white hover:bg-gray-100"
              >
                {t("common.contactUs")}
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-brand-secondary"
              >
                {t("common.exploreServices")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
