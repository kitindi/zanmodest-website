import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gallery-001.jpeg",
  "/images/gallery-001.jpg",
  "/images/galler-002.jpg",
  "/images/gallery-003.jpg",
  "/images/gallery-004.jpeg",
  "/images/gallery-005.jpg",
  "/images/gallery-006.jpg",
  "/images/gallery-007.png",
  "/images/gallery-008.jpg",
  "/images/gallery-009.jpg",
  "/images/gallery-010.jpg",
  "/images/gallery-011.jpg",
  "/images/gallery-012.jpg",
  "/images/gallery-013.jpg",
  "/images/gallery-014.jpg",
  "/images/gallery-015.jpg",
  "/images/gallery-016.jpg",
  "/images/gallery-017.jpg",
  "/images/gallery-018.jpg",
  "/images/gallery-019.jpeg",
  "/images/gallery-020.jpg",
  "/images/gallery-021.jpg",
  "/images/gallery-022.jpg",
  "/images/gallery-023.jpg",
];

export default function DestinationGallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);

  const showPrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="px-4 md:px-0 w-full max-w-6xl mx-auto py-20 md:py-32">
      <h3 className="text-4xl text-center mb-8 font-semibold text-[#512731]">Our Travel Photo Gallery</h3>
      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Destination ${index + 1}`}
            className="w-full h-60 min-h-0 object-cover rounded-lg cursor-pointer shadow-sm hover:opacity-80 transition"
            onClick={() => openImage(index)}
          />
        ))}
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white text-3xl" onClick={closeImage}>
              <X size={36} />
            </button>

            {/* Prev Button */}
            <button className="absolute left-6 text-white" onClick={showPrev}>
              <ChevronLeft size={48} />
            </button>

            {/* Current Image */}
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Destination ${currentIndex + 1}`}
              className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />

            {/* Next Button */}
            <button className="absolute right-6 text-white" onClick={showNext}>
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
