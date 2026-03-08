import { Building2, Handshake, TrendingUp, Award, AlertCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Sponsors() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: t("sponsors.benefit.visibility"),
      description: t("sponsors.benefit.visibility.desc"),
    },
    {
      icon: Building2,
      title: t("sponsors.benefit.csr"),
      description: t("sponsors.benefit.csr.desc"),
    },
    {
      icon: Handshake,
      title: t("sponsors.benefit.networking"),
      description: t("sponsors.benefit.networking.desc"),
    },
    {
      icon: Award,
      title: t("sponsors.benefit.talent"),
      description: t("sponsors.benefit.talent.desc"),
    },
  ];

  const packages = [
    {
      name: "Platinum Package",
      price: "€10,000+",
      features: [
        "Primary logo on vehicle",
        "Logo on team apparel",
        "Dedicated website section",
        "Exclusive social media content",
        "VIP competition invitations",
        "Annual promotion report",
      ],
      highlight: true,
    },
    {
      name: "Gold Package",
      price: "€5,000 - €10,000",
      features: [
        "Logo placement on vehicle",
        "Logo on team apparel",
        "Website listing",
        "Social media promotion",
        "Competition invitations",
      ],
      highlight: false,
    },
    {
      name: "Silver Package",
      price: "€2,500 - €5,000",
      features: [
        "Small logo on vehicle",
        "Website logo",
        "Social media acknowledgment",
        "Promotional materials placement",
      ],
      highlight: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771864617765-8620033c82b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcnNwb3J0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3Mjk5NDczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sponsors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("sponsors.hero.title")}<span className="text-red-600">{t("sponsors.hero.titleHighlight")}</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {t("sponsors.hero.description")}
          </p>
        </div>
      </section>

      {/* Looking for Sponsors Notice */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-6 flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                {t("sponsors.looking")}
              </h3>
              <p className="text-neutral-300">
                {t("sponsors.looking.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            {t("sponsors.why.title")} <span className="text-red-600">{t("sponsors.why.titleHighlight")}</span>
            {t("sponsors.why.subtitle")}
          </h2>
          <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
            {t("sponsors.why.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-white/10 rounded-lg p-6 hover:border-red-600 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-neutral-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            {t("sponsors.packages.title")} <span className="text-red-600">{t("sponsors.packages.titleHighlight")}</span>
          </h2>
          <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
            {t("sponsors.packages.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  pkg.highlight
                    ? "bg-gradient-to-b from-red-600/20 to-black border-2 border-red-600"
                    : "bg-black border border-white/10"
                }`}
              >
                {pkg.highlight && (
                  <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full mb-4">
                    {t("sponsors.package.popular")}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-red-600 mb-6">{pkg.price}</div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-red-600 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("sponsors.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("sponsors.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                {t("sponsors.cta.form")}
              </a>
              <a
                href="mailto:sponsorship@emufsc.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                {t("sponsors.cta.email")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t("sponsors.impact.title")} <span className="text-red-600">{t("sponsors.impact.titleHighlight")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-xl text-neutral-400">{t("sponsors.impact.students")}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">5K+</div>
              <div className="text-xl text-neutral-400">{t("sponsors.impact.reach")}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">1</div>
              <div className="text-xl text-neutral-400">{t("sponsors.impact.project")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
