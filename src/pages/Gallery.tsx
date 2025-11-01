import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

export default function Gallery() {
  const { t } = useLanguage();

  // Injection du CSS pour l'animation de l’éclipse
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .eclipse-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        margin-bottom: 3rem;
      }

      .moon {
        background: black;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
      }

      .moon::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #fff;
        animation: eclipseAnimation 3.2s linear infinite alternate;
      }

      @keyframes eclipseAnimation {
        0% {
          transform: translateX(40px) scale(0.9);
          box-shadow: none;
        }
        50% {
          transform: translateX(0px) scale(1.02);
          box-shadow: 0 0 10px #fff, 0 0 80px 2px #fff;
        }
        100% {
          transform: translateX(-40px) scale(0.9);
          box-shadow: none;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-6"
        >
          {t("gallery") || "Galerie Photos"}
        </motion.h1>

        {/* Animation d’éclipse */}
        <div className="eclipse-container">
          <div className="moon"></div>
        </div>

        {/* Texte descriptif */}
        <p className="text-white/90 mb-10 text-lg">
          Retrouvez toutes les photos de l’événement directement sur Google Drive 👇
        </p>

        {/* Bouton lien vers le Drive */}
        <motion.a
          href="https://drive.google.com/drive/folders/12XDJwkhnKapS-ijWVY4VnB-fKft-V_Ye?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-[#FFD93D] text-[#002D5B] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 shadow-lg"
        >
          <ExternalLink className="w-5 h-5" />
          Voir toutes les photos
        </motion.a>
      </div>
    </div>
  );
}
