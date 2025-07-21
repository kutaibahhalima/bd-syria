import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("contact.description")}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("contact.contactInfo")}
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-red-100 rounded-full p-2">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t("contact.address")}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t("contact.addressDetails")}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-red-100 rounded-full p-2">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t("contact.phone")}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t("contact.phoneNumbers")}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-red-100 rounded-full p-2">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t("contact.email")}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t("contact.emailAddresses")}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-red-100 rounded-full p-2">
                    <Clock className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t("contact.workingHours")}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t("contact.hoursDetails")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("contact.form.title")}
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.form.namePlaceholder")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("contact.form.phonePlaceholder")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.company")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.form.companyPlaceholder")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.form.subjectPlaceholder")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={6}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90"
                >
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("contact.cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("contact.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-3 bg-white text-brand-secondary hover:bg-gray-100"
            >
              {t("common.contactUs")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
