'use client';

import { useState } from 'react';
import { GalleryItem } from '@marvinho/ui';

const galleryImages = [
  { id: '1', src: '/gallery/studio-1.jpg', alt: 'Corporate Event Photography', category: 'Studio' },
  { id: '2', src: '/gallery/studio-2.jpg', alt: 'Wedding Coverage', category: 'Studio' },
  { id: '3', src: '/gallery/studio-3.jpg', alt: 'Product Photography', category: 'Studio' },
  { id: '4', src: '/gallery/agency-1.jpg', alt: 'Office Cleaning', category: 'Agency' },
  { id: '5', src: '/gallery/agency-2.jpg', alt: 'Facility Management', category: 'Agency' },
  { id: '6', src: '/gallery/tiling-1.jpg', alt: 'Marble Installation', category: 'Tiling' },
  { id: '7', src: '/gallery/tiling-2.jpg', alt: 'Floor Finishing', category: 'Tiling' },
  { id: '8', src: '/gallery/frame-1.jpg', alt: 'Canvas Printing', category: 'Frame' },
  { id: '9', src: '/gallery/frame-2.jpg', alt: 'Corporate Wall Art', category: 'Frame' },
  { id: '10', src: '/gallery/corporate-1.jpg', alt: 'Corporate Event', category: 'Studio' },
  { id: '11', src: '/gallery/agency-3.jpg', alt: 'Deep Cleaning', category: 'Agency' },
  { id: '12', src: '/gallery/tiling-3.jpg', alt: 'Wall Tiling', category: 'Tiling' },
];

const categories = ['All', 'Studio', 'Agency', 'Tiling', 'Frame'];

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-[#141414] text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((image) => (
          <GalleryItem
            key={image.id}
            src={image.src}
            alt={image.alt}
            category={image.category}
          />
        ))}
      </div>
    </>
  );
}
