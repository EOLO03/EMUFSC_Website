import { Link } from "react-router";
import { ChevronRight, Zap, Users, Rocket } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771454835499-778c63cf25ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwc3R1ZGVudCUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3Mjk5NDczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Formula Student Racing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-red-600">EMUFSC</span>
            <br />
            <span className="text-white">{t("home.hero.title")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            {t("home.hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/takim"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              {t("home.hero.cta1")}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/iletisim"
              className="inline-flex items-center px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-lg transition-colors"
            >
              {t("home.hero.cta2")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-white rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-neutral-400">{t("home.stats.members")}</div>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">1</div>
              <div className="text-neutral-400">{t("home.stats.year")}</div>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <Rocket className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">1</div>
              <div className="text-neutral-400">{t("home.stats.project")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {t("home.about.title")} <span className="text-red-600">{t("home.about.titleHighlight")}</span>
              </h2>
              <p className="text-neutral-300 mb-4">
                {t("home.about.p1")}
              </p>
              <p className="text-neutral-300 mb-6">
                {t("home.about.p2")}
              </p>
              <Link
                to="/takim"
                className="inline-flex items-center text-red-600 hover:text-red-500 transition-colors"
              >
                {t("home.about.link")}
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580835921597-91c6b459c917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzI5OTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t("home.news.title")} <span className="text-red-600">{t("home.news.titleHighlight")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("home.news.1.title"),
                date: t("home.news.1.date"),
                image:
                  "https://images.unsplash.com/photo-1771864617765-8620033c82b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcnNwb3J0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3Mjk5NDczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: t("home.news.2.title"),
                date: t("home.news.2.date"),
                image:
                  "https://images.unsplash.com/photo-1580835921597-91c6b459c917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzI5OTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: t("home.news.3.title"),
                date: t("home.news.3.date"),
                image:
                  "https://images.unsplash.com/photo-1768671716778-2e6ad7035963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBjb2NrcGl0JTIwZGV0YWlsfGVufDF8fHx8MTc3Mjk5NDczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-lg overflow-hidden hover:border-red-600 transition-colors"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-neutral-400 mb-2">
                    {news.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{news.title}</h3>
                  <button className="text-red-600 hover:text-red-500 transition-colors inline-flex items-center">
                    {t("home.news.readMore")}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("home.cta.title")} <span className="text-red-600">{t("home.cta.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            {t("home.cta.description")}
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            {t("home.cta.button")}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
