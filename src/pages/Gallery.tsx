import { useState, useEffect } from 'react';
import GalleryForm from './GalleryForm';

const IMAGES = [
  'https://i.ibb.co/PzmvyJ3f/IMG-6250.jpg',
  'https://i.ibb.co/0RC5D9Vn/IMG-6249.jpg',
  'https://i.ibb.co/zH4h5mrb/IMG-6248.jpg',
];

export default function Gallery() {
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem('galleryAccess');
    if (access === 'true') setAccessGranted(true);
  }, []);

  if (!accessGranted) {
    return <GalleryForm onSubmit={() => setAccessGranted(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002D5B] to-[#004080] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Galerie Photos</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {IMAGES.map((img, idx) => (
            <img key={idx} src={img} alt={`Photo ${idx + 1}`} className="w-full h-48 object-cover rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
