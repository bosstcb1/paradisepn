import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Blog() {
  const { language } = useLanguage();

  const posts = [
    {
      id: 1,
      title: language === 'fr'
        ? 'Paradise Pic-Nic 2025 : Un succès retentissant !'
        : 'Paradise Pic-Nic 2025: A resounding success!',
      excerpt: language === 'fr'
        ? 'Plus de 1500 participants ont répondu présent pour la 3ème édition du Paradise Pic-Nic. Retour en images sur cette journée mémorable...'
        : 'More than 1500 participants attended the 3rd edition of Paradise Pic-Nic. A look back at this memorable day in pictures...',
      date: '07 Septembre 2025',
      author: 'Norris Codjo',
      image: 'https://i.ibb.co/F5RZ7pZ/picnic1.jpg',
      category: language === 'fr' ? 'Événement' : 'Event'
    },
    {
      id: 2,
      title: language === 'fr'
        ? 'Préparatifs en cours pour l\'édition 2026'
        : 'Preparations underway for the 2026 edition',
      excerpt: language === 'fr'
        ? 'L\'équipe Paradise Pic-Nic est déjà au travail pour vous offrir une édition 2026 encore plus spectaculaire. Découvrez les premières annonces...'
        : 'The Paradise Pic-Nic team is already at work to offer you an even more spectacular 2026 edition. Discover the first announcements...',
      date: '15 Janvier 2026',
      author: 'Rénato TCHOBO',
      image: 'https://i.ibb.co/YTMkjxy/picnic2.jpg',
      category: language === 'fr' ? 'Actualité' : 'News'
    },
    {
      id: 3,
      title: language === 'fr'
        ? 'Les coulisses du Paradise Pic-Nic'
        : 'Behind the scenes of Paradise Pic-Nic',
      excerpt: language === 'fr'
        ? 'Découvrez les coulisses de l\'organisation du plus grand pique-nique de Cotonou. Des mois de préparation pour une journée parfaite...'
        : 'Discover the behind-the-scenes of organizing Cotonou\'s biggest picnic. Months of preparation for a perfect day...',
      date: '10 Mars 2026',
      author: 'Équipe Paradise',
      image: 'https://i.ibb.co/4P3K8mZ/picnic3.jpg',
      category: language === 'fr' ? 'Reportage' : 'Feature'
    },
    {
      id: 4,
      title: language === 'fr'
        ? 'Nos partenaires s\'engagent pour 2026'
        : 'Our partners commit to 2026',
      excerpt: language === 'fr'
        ? 'De nombreuses marques locales et internationales ont déjà confirmé leur participation en tant que partenaires pour l\'édition 2026...'
        : 'Many local and international brands have already confirmed their participation as partners for the 2026 edition...',
      date: '22 Avril 2026',
      author: 'Norris Codjo',
      image: 'https://i.ibb.co/0cmKLJX/picnic4.jpg',
      category: language === 'fr' ? 'Partenariat' : 'Partnership'
    },
    {
      id: 5,
      title: language === 'fr'
        ? 'Les meilleurs moments des éditions précédentes'
        : 'Best moments from previous editions',
      excerpt: language === 'fr'
        ? 'Un voyage dans le temps à travers les plus beaux souvenirs des trois premières éditions du Paradise Pic-Nic...'
        : 'A journey through time through the most beautiful memories of the first three editions of Paradise Pic-Nic...',
      date: '05 Mai 2026',
      author: 'Équipe Paradise',
      image: 'https://i.ibb.co/sKQ5dYr/picnic5.jpg',
      category: language === 'fr' ? 'Rétrospective' : 'Retrospective'
    },
    {
      id: 6,
      title: language === 'fr'
        ? 'Comment se préparer pour le Paradise Pic-Nic'
        : 'How to prepare for Paradise Pic-Nic',
      excerpt: language === 'fr'
        ? 'Nos conseils pour profiter au maximum de votre journée au Paradise Pic-Nic : tenue, accessoires, programme...'
        : 'Our tips to make the most of your day at Paradise Pic-Nic: outfit, accessories, program...',
      date: '18 Juin 2026',
      author: 'Rénato TCHOBO',
      image: 'https://i.ibb.co/HPL8xKr/beach1.jpg',
      category: language === 'fr' ? 'Conseils' : 'Tips'
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-200">
            {language === 'fr'
              ? 'Actualités, reportages et coulisses de l\'événement'
              : 'News, reports and behind the scenes of the event'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FFD93D] text-[#002D5B] px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#002D5B] mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <button className="flex items-center gap-2 text-[#002D5B] font-semibold hover:text-[#FFD93D] transition-colors duration-200">
                  {language === 'fr' ? 'Lire la suite' : 'Read more'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="bg-[#FFD93D] text-[#002D5B] px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors duration-200 shadow-lg">
            {language === 'fr' ? 'Voir plus d\'articles' : 'See more articles'}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
