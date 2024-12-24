import { useState } from "react";

const Gallery = () => {
  const images = [
    { id: 1, src: "/assets/rum.jpeg", alt: "Deluxe Room" },
    { id: 2, src: "/assets/rep.jpeg", alt: "Indoor Bar" },
    { id: 3, src: "/assets/dep.jpeg", alt: "Restaurant & Bar" },
    { id: 4, src: "/assets/fum.jpeg", alt: "Luxury Suite" },
    { id: 5, src: "/assets/lep.jpeg", alt: "Standard Room" },
  ];

  const [lightbox, setLightbox] = useState({ isOpen: false, src: "" });

  return (
    <div className="flex flex-col items-center justify-center p-4">

      <h2 className="section-heading" data-aos="fade-down">
        Gallery
      </h2>
      
      <div className="grid grid-cols-6 gap-2 w-full h-[700px] max-w-4xl overflow-hidden rounded-lg mt-4 shadow-lg">
     
        
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative group ${
              index === 0
                ? "col-span-3 row-span-3"
                : index === 1
                ? "col-span-2 row-span-1"
                : index === 2
                ? "col-span-1 row-span-1"
                : index === 3
                ? "col-span-2 row-span-2"
                : index === 4
                ? "col-span- row-span-2"
                : "col-span-2 row-span-1"
            }`}
            onClick={() => setLightbox({ isOpen: true, src: image.src })}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-1"
            />
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold text-lg">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-500">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setLightbox({ isOpen: false, src: "" })}
          >
            &times;
          </button>
          <img
            src={lightbox.src}
            alt="Lightbox"
            className="max-w-full max-h-full transform scale-75 transition-transform duration-500 ease-out"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
