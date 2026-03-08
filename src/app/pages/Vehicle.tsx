import { Gauge, Zap, Weight, Wind, Cog, Battery } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Vehicle() {
  const { t } = useLanguage();

  const targetSpecs = [
    {
      icon: Gauge,
      label: "Max Speed",
      value: "120+ km/h",
    },
    {
      icon: Zap,
      label: "0-100 km/h",
      value: "< 4.0s",
    },
    {
      icon: Weight,
      label: "Weight",
      value: "< 250 kg",
    },
    {
      icon: Wind,
      label: "Downforce",
      value: "400+ N",
    },
    {
      icon: Cog,
      label: "Power",
      value: "80 HP",
    },
    {
      icon: Battery,
      label: "Battery",
      value: "7.2 kWh",
    },
  ];

  const features = [
    {
      title: t("vehicle.feature.monocoque"),
      description: t("vehicle.feature.monocoque.desc"),
      image:
        "https://images.unsplash.com/photo-1768671716778-2e6ad7035963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBjb2NrcGl0JTIwZGV0YWlsfGVufDF8fHx8MTc3Mjk5NDczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: t("vehicle.feature.electric"),
      description: t("vehicle.feature.electric.desc"),
      image:
        "https://images.unsplash.com/photo-1708063785769-43da3123684d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBlbmdpbmUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3Mjk5NDczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: t("vehicle.feature.aero"),
      description: t("vehicle.feature.aero.desc"),
      image:
        "https://images.unsplash.com/photo-1771454835499-778c63cf25ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwc3R1ZGVudCUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3Mjk5NDczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const timeline = [
    {
      phase: t("vehicle.phase.research"),
      period: t("vehicle.phase.research.period"),
      description: t("vehicle.phase.research.desc"),
    },
    {
      phase: t("vehicle.phase.design"),
      period: t("vehicle.phase.design.period"),
      description: t("vehicle.phase.design.desc"),
    },
    {
      phase: t("vehicle.phase.production"),
      period: t("vehicle.phase.production.period"),
      description: t("vehicle.phase.production.desc"),
    },
    {
      phase: t("vehicle.phase.testing"),
      period: t("vehicle.phase.testing.period"),
      description: t("vehicle.phase.testing.desc"),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771454835499-778c63cf25ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwc3R1ZGVudCUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3Mjk5NDczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Racing Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("vehicle.hero.title")}
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {t("vehicle.hero.description")}
          </p>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("vehicle.concept.title")} <span className="text-red-600">{t("vehicle.concept.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-neutral-300">
            {t("vehicle.concept.description")}
          </p>
        </div>
      </section>

      {/* Target Specs Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            {t("vehicle.features.title")} <span className="text-red-600">{t("vehicle.features.titleHighlight")}</span>
          </h2>
          <p className="text-center text-neutral-400 mb-12">Target Specifications</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {targetSpecs.map((spec, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-lg p-6 text-center hover:border-red-600 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-4">
                  <spec.icon className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold mb-2">{spec.value}</div>
                <div className="text-sm text-neutral-400">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Key Design <span className="text-red-600">Goals</span>
          </h2>
          <p className="text-center text-neutral-400 mb-12">
            What we're working towards for our first electric vehicle
          </p>
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-neutral-300 text-lg">{feature.description}</p>
                </div>
                <div className={`relative h-80 rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ImageWithFallback
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t("vehicle.timeline.title")} <span className="text-red-600">{t("vehicle.timeline.titleHighlight")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-black border border-white/10 rounded-lg p-6 hover:border-red-600 transition-colors h-full">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.phase}</h3>
                  <div className="text-sm text-neutral-400 mb-3">{item.period}</div>
                  <p className="text-neutral-300">{item.description}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-600/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("vehicle.join.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("vehicle.join.description")}
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              {t("vehicle.join.button")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
