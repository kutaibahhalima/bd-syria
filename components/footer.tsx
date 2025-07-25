import { Building, Mail, Phone, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/src/navigation";
import Image from "next/image";

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Image
                src="/logo.png"
                alt="Business Development SY Logo"
                width={100}
                height={100}
                className="h-16 w-16"
              />
              <div>
                <h3 className="text-lg font-bold">Business Development SY</h3>
                <p className="text-sm text-gray-300">
                  شركة تطوير الأعمال سوريا
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t("home.aboutDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("navigation.services")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/company-establishment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.companyEstablishment")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/financial-consulting"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.financialConsulting")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/legal"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("navigation.legal")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("common.viewAllServices")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("contact.contactInfo")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <p className="text-gray-300 text-sm">
                  {t("contact.addressDetails")}
                </p>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-gray-400" />
                <p className="text-gray-300 text-sm">+963 11 123 4567</p>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-gray-400" />
                <p className="text-gray-300 text-sm">info@businessdev-sy.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Business Development SY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
