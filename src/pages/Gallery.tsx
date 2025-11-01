import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
// Assurez-vous que ce chemin d'importation est correct
import { useLanguage } from '../context/LanguageContext';

// --- Définition des URL d'images (Déplacé hors du composant pour la propreté) ---
const IMAGES = [
  'https://i.ibb.co/PzmvyJ3f/IMG-6250.jpg',
  'https://i.ibb.co/0RC5D9Vn/IMG-6249.jpg',
  'https://i.ibb.co/zH4h5mrb/IMG-6248.jpg',
  'https://i.ibb.co/7JF8YY86/IMG-6245.jpg',
  'https://i.ibb.co/Y4vPD9tk/IMG-6244.jpg',
  'https://i.ibb.co/k2JKcD2p/IMG-6242.jpg',
  'https://i.ibb.co/YTYmwRYX/IMG-6240.jpg',
  'https://i.ibb.co/m5F214rs/IMG-6236.jpg',
  'https://i.ibb.co/6csr87kr/IMG-6235.jpg',
  'https://i.ibb.co/NnxZwNkd/IMG-6233.jpg',
];

// --- Composant principal de la Galerie ---
export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Utilisation de useCallback pour les fonctions qui ne changent pas entre les rendus
  const handleImageClick = useCallback((image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % IMAGES.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(IMAGES[nextIndex]);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(IMAGES[prevIndex]);
  }, [currentIndex]);

  const handleDownload = (url: string) => {
    // Ouvre l'image dans un nouvel onglet, permettant à l'utilisateur de la télécharger manuellement.
    // Pour un téléchargement direct, une implémentation plus complexe serait nécessaire.
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8"
        >
          {t('gallery')}
        </motion.h1>

        {/* --- Grille des images --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {IMAGES.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => handleImageClick(image, index)}
            >
              <img
                src={image}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy" // Ajout de lazy loading
              />
              {/* Overlay pour le téléchargement */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Download
                  className="w-8 h-8 text-white hover:text-yellow-400 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation(); // Empêche l'ouverture de la modale
                    handleDownload(image);
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bouton Voir toutes les photos --- */}
        <motion.a
          href="https://exemple.com/toutes-les-photos" // 🔗 Remplace par ton vrai lien
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-[#FFD93D] text-[#002D5B] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 shadow-lg"
        >
          Voir toutes les photos
        </motion.a>
      </div>

      {/* --- Modale plein écran (Lightbox) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)} // Fermer en cliquant sur le fond
          >
            {/* Bouton Fermer */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
              aria-label="Fermer la galerie"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Bouton Précédent */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 text-white hover:text-gray-300 z-50 p-2 md:left-8"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            {/* Bouton Suivant */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-gray-300 z-50 p-2 md:right-8"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            {/* Image en plein écran */}
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt={`Photo ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain cursor-default"
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture lors du clic sur l'image
            />

            {/* Bouton Télécharger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(selectedImage);
              }}
              className="absolute bottom-4 right-4 bg-[#FFD93D] text-[#002D5B] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center gap-2 shadow-lg"
              aria-label="Télécharger l'image"
            >
              <Download className="w-5 h-5" />
              {t('downloadImage')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}