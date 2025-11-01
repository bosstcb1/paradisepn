export interface Visitor {
  id?: string;
  nom: string;
  prenoms: string;
  whatsapp: string;
  email: string;
  temoignage: string;
  language?: string;
  created_at?: string;
}

export interface Album {
  id: string;
  name: string;
  edition: string;
  images: string[];
}

export type Language = 'fr' | 'en';
