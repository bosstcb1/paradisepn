import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Music,
  Image as ImageIcon,
  Users,
  MapPin,
  Trophy,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t, language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Compte à rebours dynamique
  useEffect(() => {
    const eventDate = new Date("2026-08-29T14:00:00");
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const logoUrl =
    "https://i.ibb.co/ZzK99VjH/42f6ffd3-e9e1-4992-b561-ee9a99b6c187.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#012A57] to-[#003D80] overflow-hidden text-white">
      {/* HERO SECTION */}
      <section className="pt-24 pb-20 px-6 flex flex-col items-center text-center md:grid md:grid-cols-2 md:gap-16 md:text-left max-w-7xl mx-auto">
        {/* RIGHT IMAGE FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 flex justify-center mb-10 md:mb-0"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-2xl ring-8 ring-[#FFD93D]/20 flex items-center justify-center">
              <img
                src={logoUrl}
                alt="Paradise Pic-Nic Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="order-2 md:order-1 flex flex-col justify-center items-center md:items-start"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md">
            {t("heroTitle")}
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-3">
            {t("heroSubtitle")} 🌴
          </p>

          <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed max-w-md">
            {t("heroDescription")}
          </p>

          {/* COUNTDOWN */}
          <div className="flex justify-center md:justify-start gap-3 sm:gap-6 mb-8 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg">
            {[
              { label: "Jours", value: timeLeft.days },
              { label: "Heures", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#FFD93D]">
                  {item.value.toString().padStart(2, "0")}
                </p>
                <p className="text-xs md:text-sm text-gray-200">{item.label}</p>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <button
              onClick={() => onNavigate("program")}
              className="bg-[#FFD93D] text-[#002D5B] px-6 py-3 rounded-[15px] font-semibold shadow-md border-2 border-[#FFD93D] hover:bg-yellow-300 hover:border-double hover:border-4 hover:shadow-lg transition-all duration-300"
            >
              {t("seeProgram")}
            </button>

            <button
              onClick={() => onNavigate("gallery")}
              className="border-2 border-white text-white px-6 py-3 rounded-[15px] font-semibold hover:border-double hover:border-4 hover:bg-white hover:text-[#002D5B] transition-all duration-300"
            >
              {t("accessGallery")}
            </button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 bg-white text-center text-[#002D5B]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("about")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {language === "fr"
              ? "Le Pique-nique Paradisiaque est l'événement estival incontournable de Cotonou : une journée unique mêlant musique, art, gastronomie et détente sur la plage de Fidjrossè."
              : "Paradise Picnic is Cotonou’s must-attend summer event — a unique day of music, art, food, and relaxation on Fidjrossè beach."}
          </p>
        </motion.div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D5B] mb-12">
            {t("objective")}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Music className="w-10 h-10" />,
                title:
                  language === "fr"
                    ? "Célébrer la culture"
                    : "Celebrate culture",
                desc:
                  language === "fr"
                    ? "Promouvoir la richesse culturelle béninoise à travers la musique, l’art et les traditions."
                    : "Promote Beninese culture through music, art, and traditions.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title:
                  language === "fr"
                    ? "Rassembler les gens"
                    : "Bring people together",
                desc:
                  language === "fr"
                    ? "Créer un espace convivial et festif pour toutes les générations."
                    : "Create a warm, festive space for all generations.",
              },
              {
                icon: <Trophy className="w-10 h-10" />,
                title:
                  language === "fr"
                    ? "Expérience unique"
                    : "Unique experience",
                desc:
                  language === "fr"
                    ? "Offrir une journée mémorable alliant détente, musique et découvertes."
                    : "Offer a memorable day of fun, music, and discoveries.",
              },
            ].map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-[#FFD93D] mb-4 flex justify-center">
                  {obj.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#002D5B] mb-2">
                  {obj.title}
                </h3>
                <p className="text-gray-600">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section className="py-20 px-6 bg-[#002D5B]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t("program")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: language === "fr" ? "Date & Horaire" : "Date & Time",
                desc:
                  language === "fr"
                    ? "29 Août 2026 à partir de 14h"
                    : "August 29, 2026 from 2pm",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: language === "fr" ? "Lieu" : "Location",
                desc: "Gangbè Playa (Fidjrossè Plage), Cotonou",
              },
              {
                icon: <Music className="w-8 h-8" />,
                title: language === "fr" ? "Ambiance DJ" : "DJ Atmosphere",
                desc:
                  language === "fr"
                    ? "DJ live, musique variée"
                    : "Live DJ, mixed music",
              },
              {
                icon: <ImageIcon className="w-8 h-8" />,
                title:
                  language === "fr" ? "Shooting Photo" : "Photo Shooting",
                desc:
                  language === "fr"
                    ? "Studio photo professionnel"
                    : "Professional photo studio",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:bg-white/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[#FFD93D] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002D5B] mb-10">
          {t("partners")}
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          {language === "fr"
            ? "Un événement organisé par GOD’S EYE en partenariat avec des marques de référence."
            : "An event organized by GOD’S EYE in partnership with renowned brands."}
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {["GOD’S EYE", "EDMAX DESIGN", "MAGIC RECORDS", "Drinks House", "INAYA"].map(
            (partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-100 px-8 py-5 rounded-lg font-semibold text-[#002D5B] hover:bg-[#FFD93D] hover:shadow-lg transition-all duration-300"
              >
                {partner}
              </motion.div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
