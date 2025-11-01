import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { Visitor } from '../types';

interface GalleryFormProps {
  onSubmit: () => void;
}

export default function GalleryForm({ onSubmit }: GalleryFormProps) {
  const [formData, setFormData] = useState<Visitor>({
    nom: '',
    prenoms: '',
    whatsapp: '',
    email: '',
    temoignage: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error } = await supabase.from('visitors').insert([formData]);
      if (error) throw error;

      localStorage.setItem('galleryAccess', 'true');
      localStorage.setItem('visitorEmail', formData.email || '');
      onSubmit();
    } catch (err) {
      console.error(err);
      setError('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#002D5B] to-[#004080] p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-[#002D5B] mb-6 text-center">Accès à la Galerie</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="nom" placeholder="Nom *" value={formData.nom} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FFD93D]" />
          <input name="prenoms" placeholder="Prénoms *" value={formData.prenoms} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FFD93D]" />
          <input name="whatsapp" placeholder="WhatsApp *" value={formData.whatsapp} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FFD93D]" />
          <input name="email" type="email" placeholder="Email *" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FFD93D]" />
          <textarea name="temoignage" placeholder="Témoignage" value={formData.temoignage} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FFD93D]" />
          {error && <div className="text-red-600">{error}</div>}
          <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-[#FFD93D] text-[#002D5B] font-bold rounded-full hover:bg-yellow-300">
            {isSubmitting ? 'Envoi...' : 'Valider'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
