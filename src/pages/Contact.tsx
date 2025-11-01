import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-200">
            {language === 'fr'
              ? 'Une question ? Une suggestion ? N\'hésitez pas à nous contacter'
              : 'A question? A suggestion? Feel free to contact us'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-[#002D5B] mb-6">
                {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
              </h2>

              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  {language === 'fr'
                    ? 'Message envoyé avec succès ! Nous vous répondrons bientôt.'
                    : 'Message sent successfully! We will respond soon.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? 'Nom complet' : 'Full name'} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] focus:border-transparent outline-none transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? 'Sujet' : 'Subject'} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFD93D] text-[#002D5B] py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === 'fr' ? 'Informations de contact' : 'Contact information'}
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFD93D] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#002D5B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {language === 'fr' ? 'Téléphone' : 'Phone'}
                    </h3>
                    <p className="text-gray-200">+229 90 16 99 74 381</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFD93D] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#002D5B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-200">norriscodjo@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFD93D] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#002D5B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {language === 'fr' ? 'Adresse' : 'Address'}
                    </h3>
                    <p className="text-gray-200">Gangbè Playa (Fidjrossè Plage)</p>
                    <p className="text-gray-200">Cotonou, Bénin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                {language === 'fr' ? 'Suivez-nous' : 'Follow us'}
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#FFD93D] rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-200"
                >
                  <Facebook className="w-6 h-6 text-[#002D5B]" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#FFD93D] rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6 text-[#002D5B]" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#FFD93D] rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-200"
                >
                  <Twitter className="w-6 h-6 text-[#002D5B]" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7236893959316!2d2.4287894!3d6.3701634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9c0000f5c5d%3A0x4f3e1e0c6f8f2d4e!2sFidjross%C3%A8%20Plage%2C%20Cotonou%2C%20Benin!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
