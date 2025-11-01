import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { Visitor } from '../types';
import { ExternalLink } from 'lucide-react';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<Visitor>({
    nom: '',
    prenoms: '',
    whatsapp: '',
    email: '',
    temoignage: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // --- Gestion de la soumission du formulaire ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: dbError } = await supabase
        .from('visitors')
        .insert([formData]);
      if (dbError) throw dbError;

      localStorage.setItem('galleryAccess', 'true');
      localStorage.setItem('visitorEmail', formData.email);
      setFormSubmitted(true); // On passe à la galerie
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Rendu ---
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4 flex items-center justify-center">
      {!formSubmitted ? (
        // --- Formulaire ---
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-[#002D5B] mb-6 text-center">
              {t('formTitle')}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('lastName')} *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('firstNames')} *
                </label>
                <input
                  type="text"
                  name="prenoms"
                  value={formData.prenoms}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="+229 XX XX XX XX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('testimonial')}
                </label>
                <textarea
                  name="temoignage"
                  value={formData.temoignage}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] outline-none transition-all resize-none"
                />
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFD93D] text-[#002D5B] py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : t('submit')}
              </button>
            </form>
          </div>
        </motion.div>
      ) : (
        // --- Galerie après validation ---
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            {t('gallery') || 'Galerie Photos'}
          </h1>

          <p className="text-white/90 mb-10 text-lg">
            Retrouvez toutes les photos de l’événement directement sur Google Drive 👇
          </p>

          {/* Animation éclipse/lune */}
          <div className="mb-12 flex justify-center">
            <div className="moon w-48 h-48 rounded-full bg-black relative overflow-hidden shadow-lg">
              <div className="crescent absolute top-0 left-0 w-full h-full bg-white rounded-full animate-eclipse"></div>
            </div>
          </div>

          {/* Bouton Drive */}
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
        </motion.div>
      )}

      {/* --- CSS animation éclipse (ajoute dans ton global.css ou style jsx) --- */}
      <style jsx>{`
        @keyframes eclipse {
          0% { transform: translateX(50%) scale(0.9); }
          50% { transform: translateX(0%) scale(1.02); }
          100% { transform: translateX(-50%) scale(0.9); }
        }
        .animate-eclipse {
          animation: eclipse 3.2s linear infinite alternate;
        }
      `}</style>
    </div>
  );
}
