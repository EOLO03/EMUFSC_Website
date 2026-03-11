import { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUserimport { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Senin Formspree linkin eklendi
    const formspreeLink = "https://formspree.io/f/mvzwaaay";

    try {
      const response = await fetch(formspreeLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(t("contact.form.success") || "Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Formu temizle
      } else {
        alert("Mesaj gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      alert("Sistemsel bir hata oluştu, lütfen daha sonra tekrar deneyin.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.address"),
      content: t("footer.address"),
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      content: "For Sponsorships: asmefsracing@gmail.com\n For General Information: emufsc@gmail.com",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      content: "+90 537 047 4366\n+90 548 877 4569",
    },
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
  ];

  const faqs = [
    {
      q: "How can I join the team?",
      qTr: "Takıma nasıl katılabilirim?",
      a: "We recruit new members at the beginning of each semester. You can apply by filling out the contact form or following our social media announcements.",
      aTr: "Her dönem başında üye alımı yapıyoruz. İletişim formunu doldurarak bize başvurabilir veya sosyal medya hesaplarımızdan duyuruları takip edebilirsiniz.",
    },
    {
      q: "Which departments can students from different faculties join?",
      qTr: "Hangi bölümlerden öğrenciler katılabilir?",
      a: "Students from engineering (mechanical, electrical-electronics, computer, industrial), business, graphic design, and communication departments can join our team.",
      aTr: "Mühendislik (mekanik, elektrik-elektronik, bilgisayar, endüstri), işletme, grafik tasarım ve iletişim bölümlerinden öğrenciler takımımıza katılabilir.",
    },
    {
      q: "What do I need to do to become a sponsor?",
      qTr: "Sponsor olmak için ne yapmam gerekiyor?",
      a: "To discuss sponsorship, you can reach us at asmefsracing@gmail or use the contact form.",
      aTr: "Sponsorluk konusunda görüşmek için asmefsracing@gmail adresinden veya iletişim formunu kullanarak bize ulaşabilirsiniz.",
    },
    {
      q: "Can I visit the workshop?",
      qTr: "Atölyeyi ziyaret edebilir miyim?",
      a: "Yes! You can visit our workshop by making an appointment, meet our team, and see our projects up close.",
      aTr: "Evet! Randevu alarak atölyemizi ziyaret edebilir, takımımızı tanıyabilir ve projelerimizi yakından görebilirsiniz.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("contact.hero.title")} <span className="text-red-600">{t("contact.hero.titleHighlight")}</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {t("contact.hero.description")}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-lg p-6 text-center hover:border-red-600 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-full mb-4">
                  <info.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <p className="text-neutral-400 whitespace-pre-line">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t("contact.form.title")} <span className="text-red-600">{t("contact.form.titleHighlight")}</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                    placeholder={t("contact.form.name")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                  >
                    <option value="">{t("contact.form.subject.select")}</option>
                    <option value="general">{t("contact.form.subject.general")}</option>
                    <option value="membership">{t("contact.form.subject.membership")}</option>
                    <option value="sponsorship">{t("contact.form.subject.sponsorship")}</option>
                    <option value="media">{t("contact.form.subject.media")}</option>
                    <option value="other">{t("contact.form.subject.other")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder={t("contact.form.message")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t("contact.quick.title")} <span className="text-red-600">{t("contact.quick.titleHighlight")}</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-neutral-900 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{t("contact.hours.title")}</h3>
                  <p className="text-neutral-400">
                    {t("contact.hours.weekday")}
                    <br />
                    {t("contact.hours.saturday")}
                    <br />
                    {t("contact.hours.sunday")}
                  </p>
                </div>

                <div className="bg-neutral-900 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{t("contact.visit.title")}</h3>
                  <p className="text-neutral-400 mb-4">
                    {t("contact.visit.description")}
                  </p>
                  <button className="text-red-600 hover:text-red-500 transition-colors">
                    {t("contact.visit.button")}
                  </button>
                </div>
<div className="bg-neutral-900 border border-white/10 rounded-lg p-6 border-red-600/50">
                  <h3 className="text-xl font-semibold mb-3">Join the Team</h3>
                  <p className="text-neutral-400 mb-4">
                    Ready to build the future? Fill out the application form to become a part of our racing team!
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSehDRov0lOZypwVmEm_BqfLoN24S6BM32PRe3XlkZ4xbODgtg/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold"
                  >
                    Application Form
                  </a>
                </div>
                <div className="bg-neutral-900 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{t("contact.social.title")}</h3>
                  <div className="flex gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="inline-flex items-center justify-center w-12 h-12 bg-red-600/20 hover:bg-red-600 rounded-lg transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("contact.location.title")}<span className="text-red-600">{t("contact.location.titleHighlight")}</span>
          </h2>
          <div className="bg-black border border-white/10 rounded-lg overflow-hidden h-96">
            <div className="w-full h-full flex items-center justify-center bg-neutral-800">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <p className="text-neutral-400 whitespace-pre-line">
                  {t("footer.address")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("contact.faq.title")} <span className="text-red-600">{t("contact.faq.titleHighlight")}</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-white/10 rounded-lg p-6 hover:border-red-600 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {faq.qTr}
                </h3>
                <p className="text-neutral-400">{faq.aTr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
