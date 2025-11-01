import { Album } from '../types';

const baseImages = [
'https://i.ibb.co/PzmvyJ3f/IMG-6250.jpg',
'https://i.ibb.co/0RC5D9Vn/IMG-6249.jpg',
'https://i.ibb.co/zH4h5mrb/IMG-6248.jpg',
'https://i.ibb.co/7JF8YY86/IMG-6245.jpg',
'https://i.ibb.co/Y4vPD9tk/IMG-6244.jpg',
'https://i.ibb.co/k2JKcD2p/IMG-6242.jpg',
'https://i.ibb.co/YTYmwRYX/IMG-6240.jpg',
'https://i.ibb.co/m5F214rs/IMG-6236.jpg',
'https://i.ibb.co/6csr87kr/IMG-6235.jpg',
  'https://i.ibb.co/NnxZwNkd/IMG-6233.jpg',
];

// Fonction pour générer un certain nombre d’images
const generateImages = (count: number) => {
  const images: string[] = [];
  for (let i = 0; i < count; i++) {
    images.push(...baseImages);
  }
  return images;
};

export const albums: Album[] = [
  {
    id: 'edition-2025',
    name: 'Paradise Pic-Nic 2025',
    edition: '3ème édition',
    images: generateImages(20), // 20×10 = 200 images
  },
  {
    id: 'edition-2024',
    name: 'Paradise Pic-Nic 2024',
    edition: '2ème édition',
    images: generateImages(25), // 250 images
  },
  {
    id: 'edition-2023',
    name: 'Paradise Pic-Nic 2023',
    edition: '1ère édition',
    images: generateImages(22), // 220 images
  },
  {
    id: 'best-moments',
    name: 'Meilleurs moments',
    edition: 'Collection spéciale',
    images: generateImages(20),
  },
  {
    id: 'behind-scenes',
    name: 'Coulisses',
    edition: 'Behind the scenes',
    images: generateImages(18),
  },
];
