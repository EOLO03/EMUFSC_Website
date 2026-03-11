import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // URL (sayfa) her değiştiğinde ekranı 0'a 0 (en tepeye) kaydır
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}