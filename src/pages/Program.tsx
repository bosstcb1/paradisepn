import { motion } from 'framer-motion';
import { Clock, MapPin, Music, Camera, Utensils, Palette, Users, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Program() {
  const { language } = useLanguage();

  const schedule = [
    {
      time: '14h00',
      title: language === 'fr' ? 'Ouverture des portes' : 'Doors open',
      description: language === 'fr' ? 'Accueil des participants et installation' : 'Welcome and setup',
      icon: <Users className="w-8 h-8" />
    },
    {
      time: '14h30',
      title: language === 'fr' ? 'Début des animations' : 'Activities begin',
      description: language === 'fr' ? 'Jeux, mini défilé de mode, photo shooting' : 'Games, mini fashion show, photo shooting',
      icon: <Camera className="w-8 h-8" />
    },
    {
      time: '15h00',
      title: language === 'fr' ? 'Ambiance DJ' : 'DJ Session',
      description: language === 'fr' ? 'Musique live avec nos DJs résidents' : 'Live music with our resident DJs',
      icon: <Music className="w-8 h-8" />
    },
    {
      time: '16h00',
      title: language === 'fr' ? 'Restauration & Goodies' : 'Food & Goodies',
      description: language === 'fr' ? 'Dégustation et partage de goodies' : 'Tasting and sharing goodies',
      icon: <Utensils className="w-8 h-8" />
    },
    {
      time: '17h00',
      title: language === 'fr' ? 'Exposition photos' : 'Photo exhibition',
      description: language === 'fr' ? 'Découverte des clichés de la journée' : 'Discover the day\'s shots',
      icon: <Palette className="w-8 h-8" />
    },
    {
      time: '19h00',
      title: language === 'fr' ? 'Clôture' : 'Closing',
      description: language === 'fr' ? 'Fin de l\'événement et remerciements' : 'Event closing and thanks',
      icon: <Trophy className="w-8 h-8" />
    }
  ];

  const activities = [
    {
      title: language === 'fr' ? 'Shooting Photo Professionnel' : 'Professional Photo Shooting',
      description: language === 'fr'
        ? 'Studio photo avec décors paradisiaques et photographes professionnels'
        : 'Photo studio with paradise backdrops and professional photographers',
      icon: <Camera className="w-12 h-12" />
    },
    {
      title: language === 'fr' ? 'Mini Défilé de Mode' : 'Mini Fashion Show',
      description: language === 'fr'
        ? 'Présentation de créations locales dans une ambiance estivale'
        : 'Presentation of local creations in a summer atmosphere',
      icon: <Palette className="w-12 h-12" />
    },
    {
      title: language === 'fr' ? 'Ambiance DJ' : 'DJ Atmosphere',
      description: language === 'fr'
        ? 'Mix live de musique afro, coupé-décalé, afrobeat et plus'
        : 'Live mix of afro music, coupé-décalé, afrobeat and more',
      icon: <Music className="w-12 h-12" />
    },
    {
      title: language === 'fr' ? 'Restauration' : 'Catering',
      description: language === 'fr'
        ? 'Variété de plats et boissons rafraîchissantes'
        : 'Variety of dishes and refreshing drinks',
      icon: <Utensils className="w-12 h-12" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'fr' ? 'Programme de l\'événement' : 'Event Program'}
          </h1>
          <p className="text-xl text-gray-200">
            {language === 'fr'
              ? 'Une journée complète d\'animations et de découvertes'
              : 'A full day of entertainment and discoveries'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#FFD93D]" />
              <h2 className="text-2xl font-bold text-[#002D5B]">
                {language === 'fr' ? 'Horaires' : 'Schedule'}
              </h2>
            </div>
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="text-[#FFD93D]">{item.icon}</div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg font-bold text-[#002D5B]">{item.time}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="font-semibold text-[#002D5B]">{item.title}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#FFD93D]" />
              <h2 className="text-2xl font-bold text-[#002D5B]">
                {language === 'fr' ? 'Informations pratiques' : 'Practical Information'}
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#002D5B] mb-2">
                  {language === 'fr' ? 'Lieu' : 'Location'}
                </h3>
                <p className="text-gray-700">Gangbè Playa (Fidjrossè Plage)</p>
                <p className="text-gray-700">Cotonou, Bénin</p>
              </div>
              <div>
                <h3 className="font-bold text-[#002D5B] mb-2">
                  {language === 'fr' ? 'Date et horaire' : 'Date and time'}
                </h3>
                <p className="text-gray-700">
                  {language === 'fr' ? '29 Août 2026' : 'August 29, 2026'}
                </p>
                <p className="text-gray-700">14h00 - 19h00</p>
              </div>
              <div>
                <h3 className="font-bold text-[#002D5B] mb-2">
                  {language === 'fr' ? 'Tarif' : 'Price'}
                </h3>
                <p className="text-2xl font-bold text-[#FFD93D]">4999 FCFA</p>
              </div>
              <div>
                <h3 className="font-bold text-[#002D5B] mb-2">
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </h3>
                <p className="text-gray-700">+229 90 16 99 74 381</p>
                <p className="text-gray-700">norriscodjo@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {language === 'fr' ? 'Activités principales' : 'Main Activities'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-[#FFD93D] mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                <p className="text-gray-200">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-[#FFD93D] rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-[#002D5B] mb-4">
            {language === 'fr' ? 'Réservez votre pass maintenant !' : 'Book your pass now!'}
          </h2>
          <p className="text-lg text-[#002D5B] mb-6">
            {language === 'fr'
              ? 'Places limitées - Ne manquez pas cet événement exceptionnel'
              : 'Limited places - Don\'t miss this exceptional event'}
          </p>
          <button className="bg-[#002D5B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#003366] transition-colors duration-200 shadow-lg">
            {language === 'fr' ? 'Acheter mon pass' : 'Buy my pass'}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
