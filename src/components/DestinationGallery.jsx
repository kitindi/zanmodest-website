import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/images/IMG-1001.jpg", "/images/IMG-1048.jpg", "/images/IMG-1071.jpg", "/images/IMG-1074.jpg", "/images/IMG-1078.jpg"];

export default function DestinationGallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);

  const showPrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="p-4">
      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Destination ${index + 1}`}
            className="w-full h-48 object-cover rounded-2xl cursor-pointer shadow-md hover:opacity-80 transition"
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
