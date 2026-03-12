import { Users, Wrench, Cpu, Code, PenTool, Settings, Briefcase, Award, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Team() {
  const { t, language } = useLanguage();

  // Senin gönderdiğin şemaya göre güncellenen 5 departman
  const departments = [
    {
      name: language === 'tr' ? 'Sponsorluk & Belgeleme' : 'Sponsorships & Documentation',
      icon: Briefcase,
      description: language === 'tr' 
        ? 'Sponsorluk süreçlerini ve resmi dökümantasyonu yöneten ekibimiz.' 
        : 'Our team managing sponsorship processes and official documentation.',
      members: 2,
    },
    {
      name: language === 'tr' ? 'Elektrik & Elektronik' : 'Electrical & Electronics',
      icon: Cpu,
      description: language === 'tr' 
        ? 'Düşük ve yüksek voltaj sistemlerini, PCB tasarımlarını yapan ekibimiz.' 
        : 'Our team working on low/high voltage systems and PCB designs.',
      members: 5,
    },
    {
      name: language === 'tr' ? 'Yazılım' : 'Software',
      icon: Code,
      description: language === 'tr' 
        ? 'Telemetri, veri analizi ve gömülü sistem yazılımlarından sorumlu ekibimiz.' 
        : 'Our team responsible for telemetry, data analysis, and embedded software.',
      members: 3,
    },
    {
      name: language === 'tr' ? 'Araç Yapısı & Dinamikleri' : 'Car Structure & Dynamics',
      icon: PenTool,
      description: language === 'tr' 
        ? 'Şasi tasarımı, aerodinamik ve araç dinamiği üzerine çalışan ekibimiz.' 
        : 'Our team working on chassis design, aerodynamics, and vehicle dynamics.',
      members: 7,
    },
    {
      name: language === 'tr' ? 'Aktarma Organları' : 'Drivetrain',
      icon: Settings,
      description: language === 'tr' 
        ? 'Motor gücünün tekerleklere iletilmesi ve mekanik montaj ekibimiz.' 
        : 'Our team focusing on power transmission and mechanical assembly.',
      members: 4,
    },
  ];

  const values = [
    {
      icon: Award,
      title: t("team.value.excellence"),
      description: t("team.value.excellence.desc"),
    },
    {
      icon: Users,
      title: t("team.value.teamwork"),
      description: t("team.value.teamwork.desc"),
    },
    {
      icon: Target,
      title: t("team.value.innovation"),
      description: t("team.value.innovation.desc"),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1580835921597-91c6b459c917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzI5OTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("team.hero.title")} <span className="text-red-600">{t("team.hero.titleHighlight")}</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {t("team.hero.description")}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {t("team.story.title")}<span className="text-red-600">{t("team.story.titleHighlight")}</span>
            </h2>
            <p className="text-neutral-300 mb-4">{t("team.story.p1")}</p>
            <p className="text-neutral-300 mb-4">{t("team.story.p2")}</p>
            <p className="text-neutral-300">{t("team.story.p3")}</p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t("team.departments.title")}<span className="text-red-600">{t("team.departments.titleHighlight")}</span>
          </h2>
          {/* Departmanları yan yana 5'li sığdırmak için grid ayarını güncelledim */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-lg p-6 hover:border-red-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-4">
                    <dept.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 leading-tight">{dept.name}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{dept.description}</p>
                </div>
                <div className="flex items-center text-sm text-neutral-500">
                  <Users className="h-4 w-4 mr-1" />
                  {dept.members} {language === 'tr' ? 'Üye' : 'Members'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t("team.values.title")}<span className="text-red-600">{t("team.values.titleHighlight")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("team.join.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("team.join.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                {t("team.join.cta1")}
              </a>
              {/* APPLICATION BUTONU BURASI - Liderinin form linkini buraya bağladım */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehDRov0lOZypwVmEm_BqfLoN24S6BM32PRe3XIkZ4xbODgtg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                {t("team.join.cta2")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
