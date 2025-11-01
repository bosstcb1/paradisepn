import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ExternalLink } from "lucide-react";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-6"
        >
          {t("gallery") || "Galerie Photos"}
        </motion.h1>

        <p className="text-white/90 mb-10 text-lg">
          Retrouvez toutes les photos de l’événement directement sur Google Drive 👇
        </p>

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
