import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, X, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { Visitor } from '../types';

export default function Admin() {
  const { t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = 'BaseM@rketing2025';

  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchVisitors();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setError('');
      fetchVisitors();
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const fetchVisitors = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('visitors')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVisitors(data || []);
    } catch (err) {
      console.error('Error fetching visitors:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredVisitors = visitors.filter(visitor =>
    visitor.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
    visitor.prenoms.toLowerCase().includes(searchQuery.toLowerCase()) ||
    visitor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    visitor.whatsapp.includes(searchQuery)
  );

  const exportToCSV = () => {
    const headers = ['Nom', 'Prénoms', 'WhatsApp', 'Email', 'Témoignage', 'Date'];
    const rows = visitors.map(v => [
      v.nom,
      v.prenoms,
      v.whatsapp,
      v.email,
      v.temoignage || '',
      new Date(v.created_at || '').toLocaleString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `visitors_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const exportToJSON = () => {
    const jsonContent = JSON.stringify(visitors, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `visitors_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const exportToPDF = () => {
    alert('Export PDF - Fonctionnalité en développement. Utilisez CSV pour le moment.');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-[#002D5B]" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-[#002D5B] mb-2 text-center">
            {t('administration')}
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Accès sécurisé - Mot de passe requis
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD93D] focus:border-transparent outline-none transition-all"
                placeholder="Entrez le mot de passe"
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#FFD93D] text-[#002D5B] py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Se connecter
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {t('administration')}
              </h1>
              <p className="text-gray-200">
                {visitors.length} {t('visitors')} enregistrés
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={exportToCSV}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('exportCSV')}
              </button>
              <button
                onClick={exportToJSON}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('exportJSON')}
              </button>
              <button
                onClick={exportToPDF}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('exportPDF')}
              </button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD93D] focus:border-transparent outline-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">
              Chargement des données...
            </div>
          ) : filteredVisitors.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Aucun visiteur trouvé
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#002D5B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Nom</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Prénoms</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">WhatsApp</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Témoignage</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">{t('date')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredVisitors.map((visitor, index) => (
                    <tr key={visitor.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{visitor.nom}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{visitor.prenoms}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{visitor.whatsapp}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{visitor.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                        {visitor.temoignage || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {new Date(visitor.created_at || '').toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => {
              sessionStorage.removeItem('adminAuth');
              setIsAuthenticated(false);
              setPassword('');
            }}
            className="text-white hover:text-[#FFD93D] transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <X className="w-4 h-4" />
            Déconnexion
          </button>
        </motion.div>
      </div>
    </div>
  );
}
