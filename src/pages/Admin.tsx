import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Visitor } from '../types';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visitors, setVisitors] = useState<Visitor[]>([]);

  const correctPassword = 'BaseM@rketing2025';

  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchVisitors();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      fetchVisitors();
    }
  };

  const fetchVisitors = async () => {
    const { data, error } = await supabase.from('visitors').select('*').order('created_at', { ascending: false });
    if (error) console.error(error);
    else setVisitors(data || []);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg">
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe admin" className="border px-4 py-2 rounded-lg mb-4 w-full" />
          <button type="submit" className="bg-[#FFD93D] px-4 py-2 rounded-lg w-full">Se connecter</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Visiteurs</h1>
      <table className="w-full border border-gray-300 table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Nom</th>
            <th className="border px-4 py-2">Prénoms</th>
            <th className="border px-4 py-2">WhatsApp</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Témoignage</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((v, i) => (
            <tr key={v.id}>
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{v.nom}</td>
              <td className="border px-4 py-2">{v.prenoms}</td>
              <td className="border px-4 py-2">{v.whatsapp}</td>
              <td className="border px-4 py-2">{v.email}</td>
              <td className="border px-4 py-2">{v.temoignage}</td>
              <td className="border px-4 py-2">{new Date(v.created_at || '').toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
