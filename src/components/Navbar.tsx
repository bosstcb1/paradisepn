import { useState } from "react";
import { Menu, X, Globe, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: "home", label: t("home"), icon: <Home className="inline-block w-4 h-4 mr-1 mb-[2px]" /> },
    { id: "gallery", label: t("gallery") },
    { id: "program", label: t("program") },
    { id: "advertising", label: t("advertising") },
    { id: "blog", label: t("blog") },
    { id: "contact", label: t("contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#002D5B] shadow-xl z-50 border-b border-[#FFD93D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* --- Logo --- */}
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={() => onNavigate("home")}
          >
            <img
              src="https://i.ibb.co/TM0rNL8m/42f6ffd3-e9e1-4992-b561-ee9a99b6c187-removebg-preview.png" // 👉 Mets ici le chemin de ton logo (par ex. public/logo.png)
              alt="Paradise Logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* --- Navigation Desktop --- */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-white flex items-center transition-all duration-300 ${
                  currentPage === item.id
                    ? "text-[#FFD93D] font-semibold"
                    : "hover:text-[#FFD93D]"
                }`}
              >
                {item.icon && item.icon}
                {item.label}
              </button>
            ))}

            {/* --- Lien admin --- */}
            <button
              onClick={() => onNavigate("admin")}
              className="text-white/70 hover:text-[#FFD93D] text-sm transition-colors duration-300"
            >
              {t("administration")}
            </button>

            {/* --- Changement de langue --- */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white hover:text-[#FFD93D] transition-colors duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>

            {/* --- CTA Bouton --- */}
            <button
              onClick={() => onNavigate("buy-pass")}
              className="relative bg-[#FFD93D] text-[#002D5B] px-6 py-2 font-semibold 
                         rounded-[15px] transition-all duration-300 hover:bg-yellow-300 
                         hover:shadow-lg border-2 border-[#FFD93D] hover:border-double"
            >
              {t("buyPass")}
            </button>
          </div>

          {/* --- Menu Mobile --- */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLanguage} className="text-white hover:text-[#FFD93D]">
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FFD93D] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Menu Mobile --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#003366] shadow-inner"
          >
            <div className="px-4 py-5 space-y-3 text-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full py-2 text-white transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-[#FFD93D] font-semibold"
                      : "hover:text-[#FFD93D]"
                  }`}
                >
                  {item.icon && item.icon}
                  {item.label}
                </button>
              ))}

              {/* CTA mobile */}
              <button
                onClick={() => {
                  onNavigate("buy-pass");
                  setIsOpen(false);
                }}
                className="w-full bg-[#FFD93D] text-[#002D5B] px-6 py-2 font-semibold 
                           rounded-[15px] hover:bg-yellow-300 transition-all duration-300 
                           border-2 border-[#FFD93D] hover:border-double"
              >
                {t("buyPass")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
