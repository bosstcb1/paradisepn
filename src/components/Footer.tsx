import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002D5B] text-white border-t border-[#FFD93D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* --- Section À propos / Logo --- */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img
            src="https://i.ibb.co/TM0rNL8m/42f6ffd3-e9e1-4992-b561-ee9a99b6c187-removebg-preview.png"
            alt="Paradise Logo"
            className="h-12 w-auto object-contain"
          />
          <p className="text-gray-300 text-sm">
            Événement 2025. Promouvoir la culture et les échanges artistiques.
          </p>
        </div>

        {/* --- Section Liens utiles --- */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-yellow-400 font-semibold mb-2">Liens utiles</h3>
          <a href="/about" className="hover:text-[#FFD93D] transition-colors text-sm">À propos</a>
          <a href="/gallery" className="hover:text-[#FFD93D] transition-colors text-sm">Galerie</a>
          <a href="/program" className="hover:text-[#FFD93D] transition-colors text-sm">Programme</a>
          <a href="/advertising" className="hover:text-[#FFD93D] transition-colors text-sm">Publicité</a>
          <a href="/contact" className="hover:text-[#FFD93D] transition-colors text-sm">Contact</a>
        </div>

        {/* --- Section Contact / Réseaux --- */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <h3 className="text-yellow-400 font-semibold mb-2">Contact</h3>
          <p className="text-gray-300 text-sm">
            Téléphone : <span className="font-medium">+229 0000 0000</span> <br />
            Email : <span className="font-medium">contact@evenement.com</span>
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" className="p-2 border-2 border-white rounded-full hover:bg-[#FFD93D] hover:text-[#002D5B] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" className="p-2 border-2 border-white rounded-full hover:bg-[#FFD93D] hover:text-[#002D5B] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://wa.me/22900000000" target="_blank" className="p-2 border-2 border-white rounded-full hover:bg-[#FFD93D] hover:text-[#002D5B] transition-all">
              <Phone className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" className="p-2 border-2 border-white rounded-full hover:bg-[#FFD93D] hover:text-[#002D5B] transition-all">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="mailto:contact@evenement.com" className="p-2 border-2 border-white rounded-full hover:bg-[#FFD93D] hover:text-[#002D5B] transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Bas du footer: Texte légal --- */}
      <div className="border-t border-[#FFD93D]/20 mt-6 pt-4 text-center text-gray-400 text-xs">
        © 2025 Événement | Promu par <span className="text-white font-medium">Norris Codjo</span> — Site créé par <span className="text-white font-medium">Rénato TCHOBO</span>
      </div>
    </footer>
  );
}
