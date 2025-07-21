import {
  Megaphone,
  Target,
  TrendingUp,
  Eye,
  PenTool,
  ArrowRight,
  BarChart3,
  Smartphone,
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

export default async function MarketingServicesPage() {
  const t = await getTranslations();

  const services = [
    {
      icon: Megaphone,
      title: t("marketing.services.digital"),
      description: t("marketing.services.digitalDesc"),
    },
    {
      icon: PenTool,
      title: t("marketing.services.brand"),
      description: t("marketing.services.brandDesc"),
    },
    {
      icon: Eye,
      title: t("marketing.services.social"),
      description: t("marketing.services.socialDesc"),
    },
    {
      icon: BarChart3,
      title: t("marketing.services.analytics"),
      description: t("marketing.services.analyticsDesc"),
    },
    {
      icon: Target,
      title: t("marketing.services.content"),
      description: t("marketing.services.contentDesc"),
    },
    {
      icon: Smartphone,
      title: t("marketing.services.mobile"),
      description: t("marketing.services.mobileDesc"),
    },
  ];

  const marketingChannels = [
    {
      title: "Search Engine Marketing",
      titleAr: "تسويق محركات البحث",
      description: "SEO, SEM, and Google Ads management",
      descriptionAr: "إدارة تحسين محركات البحث والإعلانات المدفوعة",
    },
    {
      title: "Social Media Advertising",
      titleAr: "إعلانات وسائل التواصل الاجتماعي",
      description: "Facebook, Instagram, LinkedIn, and TikTok advertising",
      descriptionAr: "إعلانات فيسبوك وإنستغرام ولينكد إن وتيك توك",
    },
    {
      title: "Email Marketing",
      titleAr: "التسويق عبر البريد الإلكتروني",
      description: "Newsletter campaigns and automated email sequences",
      descriptionAr: "حملات النشرة الإخبارية وتسلسل البريد الإلكتروني المؤتمت",
    },
    {
      title: "Influencer Marketing",
      titleAr: "تسويق المؤثرين",
      description: "Partnership with relevant influencers and content creators",
      descriptionAr: "شراكات مع المؤثرين ومنشئي المحتوى ذوي الصلة",
    },
  ];

  const benefits = [
    "Increased brand awareness and visibility",
    "Higher quality leads and conversions",
    "Better ROI on marketing investment",
    "Stronger customer engagement",
    "Improved market positioning",
    "Data-driven marketing decisions",
  ];

  const benefitsAr = [
    "زيادة الوعي بالعلامة التجارية والرؤية",
    "عملاء محتملين وتحويلات عالية الجودة",
    "عائد أفضل على الاستثمار التسويقي",
    "تفاعل أقوى مع العملاء",
    "تحسين موقع السوق",
    "قرارات تسويقية مدعومة بالبيانات",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Megaphone className="h-16 w-16 text-brand-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("navigation.marketing")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("marketing.heroDescription")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("marketing.servicesTitle")}
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
                      <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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

      {/* Marketing Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قنوات التسويق
            </h2>
            <p className="text-lg text-gray-600">
              نصل إلى جمهوركم عبر جميع القنوات الفعالة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {channel.titleAr}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{channel.title}</p>
                <p className="text-gray-600">{channel.descriptionAr}</p>
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
                فوائد خدماتنا التسويقية
              </h2>
              <ul className="space-y-4">
                {benefitsAr.map((benefit, index) => (
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
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-lg">
              <div className="text-center">
                <Target className="h-16 w-16 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  تسويق مستهدف
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  نستخدم أحدث التقنيات والاستراتيجيات للوصول إلى جمهوركم
                  المستهدف بالرسالة المناسبة في الوقت المناسب
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
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">150%</div>
              <p className="text-red-100">زيادة متوسط في المبيعات</p>
            </div>
            <div>
              <Eye className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">2M+</div>
              <p className="text-red-100">انطباع شهري</p>
            </div>
            <div>
              <Target className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">85%</div>
              <p className="text-red-100">معدل رضا العملاء</p>
            </div>
            <div>
              <BarChart3 className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">300%</div>
              <p className="text-red-100">عائد على الاستثمار</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("marketing.ctaTitle")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("marketing.ctaDescription")}
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
