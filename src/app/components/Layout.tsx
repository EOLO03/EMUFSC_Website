import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.team"), href: "/takim" },
    { name: t("nav.vehicle"), href: "/arac" },
    { name: t("nav.sponsors"), href: "/sponsorlar" },
    { name: t("nav.contact"), href: "/iletisim" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-red-600">EMU</span>
                <span className="text-white">FSC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-red-600"
                      : "text-white hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                className="flex items-center space-x-1 px-3 py-1.5 border border-white/20 rounded-lg hover:border-red-600 transition-colors"
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm uppercase">{language}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block transition-colors ${
                    isActive(item.href)
                      ? "text-red-600"
                      : "text-white hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <button
                onClick={() => {
                  setLanguage(language === "tr" ? "en" : "tr");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-white hover:text-red-600 transition-colors"
              >
                <Languages className="h-5 w-5" />
                <span>{language === "tr" ? "English" : "Türkçe"}</span>
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-red-600">EMU</span>
                <span className="text-white">FSC</span>
              </div>
              <p className="text-neutral-400">
                {t("footer.description")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-neutral-400 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.contactTitle")}</h3>
              <p className="text-neutral-400 whitespace-pre-line">
                {t("footer.address")}
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-neutral-400">
            {t("footer.copyright")}
          </div>
        </div>
      </footer>
    </div>
  );
}