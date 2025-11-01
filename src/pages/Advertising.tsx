import { motion } from 'framer-motion';
import { Award, Megaphone, TrendingUp, Users, Eye, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Advertising() {
  const { language } = useLanguage();

  const packages = [
    {
      name: language === 'fr' ? 'Pack Bronze' : 'Bronze Package',
      price: '150,000 FCFA',
      features: [
        language === 'fr' ? 'Logo sur les supports de communication' : 'Logo on communication materials',
        language === 'fr' ? 'Mention sur les réseaux sociaux' : 'Social media mention',
        language === 'fr' ? 'Stand d\'exposition' : 'Exhibition stand',
      ],
      icon: <Award className="w-12 h-12" />
    },
    {
      name: language === 'fr' ? 'Pack Argent' : 'Silver Package',
      price: '300,000 FCFA',
      features: [
        language === 'fr' ? 'Tout le Pack Bronze' : 'All Bronze Package features',
        language === 'fr' ? 'Logo sur les T-shirts de l\'équipe' : 'Logo on team T-shirts',
        language === 'fr' ? 'Interview lors de l\'événement' : 'Event interview',
        language === 'fr' ? 'Stand premium' : 'Premium stand',
      ],
      icon: <Megaphone className="w-12 h-12" />
    },
    {
      name: language === 'fr' ? 'Pack Or' : 'Gold Package',
      price: '500,000 FCFA',
      features: [
        language === 'fr' ? 'Tout le Pack Argent' : 'All Silver Package features',
        language === 'fr' ? 'Partenaire officiel de l\'événement' : 'Official event partner',
        language === 'fr' ? 'Logo géant sur la scène principale' : 'Giant logo on main stage',
        language === 'fr' ? 'Vidéo promotionnelle projetée' : 'Promotional video projected',
        language === 'fr' ? 'Stand VIP premium' : 'Premium VIP stand',
      ],
      icon: <TrendingUp className="w-12 h-12" />
    }
  ];

  const stats = [
    {
      value: '2000+',
      label: language === 'fr' ? 'Participants attendus' : 'Expected participants',
      icon: <Users className="w-10 h-10" />
    },
    {
      value: '50K+',
      label: language === 'fr' ? 'Portée sur les réseaux' : 'Social media reach',
      icon: <Eye className="w-10 h-10" />
    },
    {
      value: '20+',
      label: language === 'fr' ? 'Médias partenaires' : 'Media partners',
      icon: <Megaphone className="w-10 h-10" />
    },
    {
      value: '100%',
      label: language === 'fr' ? 'Visibilité garantie' : 'Guaranteed visibility',
      icon: <Target className="w-10 h-10" />
    }
  ];

  const previousSponsors = [
    'GOD\'S EYE',
    'EDMAX DESIGN',
    'MAGIC RECORDS',
    'BFL PHOTOGRAPHE',
    'INAYA',
    'Drinks House',
    'JOMHO',
    'La française pharmacie'
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
            {language === 'fr' ? 'Devenez partenaire' : 'Become a partner'}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Associez votre marque au plus grand événement estival de Cotonou et bénéficiez d\'une visibilité exceptionnelle'
              : 'Associate your brand with the biggest summer event in Cotonou and benefit from exceptional visibility'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#002D5B] mb-6 text-center">
            {language === 'fr' ? 'Pourquoi nous rejoindre ?' : 'Why join us?'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3 text-[#FFD93D]">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#002D5B] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {language === 'fr' ? 'Nos packages de partenariat' : 'Our partnership packages'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <div className="text-[#FFD93D] mb-4 flex justify-center">
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#002D5B] mb-3 text-center">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-[#FFD93D] mb-6 text-center">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#FFD93D] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#002D5B] text-white py-3 rounded-full font-bold hover:bg-[#003366] transition-colors duration-200">
                  {language === 'fr' ? 'Choisir ce pack' : 'Choose this package'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {language === 'fr' ? 'Nos partenaires précédents' : 'Our previous partners'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {previousSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 flex items-center justify-center text-center font-bold text-[#002D5B] hover:bg-[#FFD93D] transition-colors duration-300"
              >
                {sponsor}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#FFD93D] rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-[#002D5B] mb-4">
            {language === 'fr' ? 'Intéressé ?' : 'Interested?'}
          </h2>
          <p className="text-lg text-[#002D5B] mb-6">
            {language === 'fr'
              ? 'Contactez-nous pour discuter d\'un partenariat sur mesure'
              : 'Contact us to discuss a customized partnership'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+22990169974381"
              className="bg-[#002D5B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#003366] transition-colors duration-200 inline-block"
            >
              {language === 'fr' ? 'Appeler maintenant' : 'Call now'}
            </a>
            <a
              href="mailto:norriscodjo@gmail.com"
              className="bg-white text-[#002D5B] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              {language === 'fr' ? 'Envoyer un email' : 'Send an email'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
