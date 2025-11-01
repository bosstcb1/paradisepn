import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    home: 'Accueil',
    gallery: 'Galerie',
    program: 'Programme',
    advertising: 'Publicité',
    blog: 'Blog',
    contact: 'Contact',
    buyPass: 'Acheter un pass',
    seeProgram: 'Voir le programme',
    accessGallery: 'Accéder à la galerie',
    daysRemaining: 'Il reste {days} jours avant le grand jour !',
    heroTitle: 'Pique-nique paradisiaque 2026',
    heroSubtitle: 'Le rendez-vous estival incontournable de Cotonou',
    heroDescription: 'Musique, art, détente et ambiance ensoleillée vous attendent le 29 Août 2026.',
    about: 'À propos',
    objective: "Objectif de l'événement",
    partners: 'Partenaires',
    footer: 'Promoteur de l\'événement : Norris Codjo | Site créé par Rénato TCHOBO',
    formTitle: 'Inscrivez-vous pour accéder à la galerie',
    lastName: 'Nom',
    firstNames: 'Prénoms',
    testimonial: 'Témoignage (optionnel)',
    submit: 'Accéder à la galerie',
    searchPlaceholder: 'Rechercher des photos...',
    filterByAlbum: 'Filtrer par album',
    allAlbums: 'Tous les albums',
    downloadImage: 'Télécharger',
    administration: 'Administration',
    exportCSV: 'Exporter CSV',
    exportPDF: 'Exporter PDF',
    exportJSON: 'Exporter JSON',
    visitors: 'Visiteurs',
    date: 'Date',
    actions: 'Actions',
    close: 'Fermer',
    search: 'Rechercher...',
  },
  en: {
    home: 'Home',
    gallery: 'Gallery',
    program: 'Program',
    advertising: 'Advertising',
    blog: 'Blog',
    contact: 'Contact',
    buyPass: 'Buy a pass',
    seeProgram: 'See program',
    accessGallery: 'Access gallery',
    daysRemaining: '{days} days remaining until the big day!',
    heroTitle: 'Paradise Picnic 2026',
    heroSubtitle: 'The unmissable summer event in Cotonou',
    heroDescription: 'Music, art, relaxation and sunny atmosphere await you on August 29, 2026.',
    about: 'About',
    objective: 'Event Objective',
    partners: 'Partners',
    footer: 'Event Promoter: Norris Codjo | Website created by Rénato TCHOBO',
    formTitle: 'Register to access the gallery',
    lastName: 'Last Name',
    firstNames: 'First Names',
    testimonial: 'Testimonial (optional)',
    submit: 'Access gallery',
    searchPlaceholder: 'Search photos...',
    filterByAlbum: 'Filter by album',
    allAlbums: 'All albums',
    downloadImage: 'Download',
    administration: 'Administration',
    exportCSV: 'Export CSV',
    exportPDF: 'Export PDF',
    exportJSON: 'Export JSON',
    visitors: 'Visitors',
    date: 'Date',
    actions: 'Actions',
    close: 'Close',
    search: 'Search...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.fr];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
