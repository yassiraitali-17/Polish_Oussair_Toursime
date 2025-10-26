import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
  disableAutoplay?: boolean;
}

const isVideoUrl = (url: string): boolean => {
  return url.endsWith('.mp4') || url.endsWith('.webm') || url.includes('alt=media');
};

const ImageGallery = ({ images, title, disableAutoplay = false }: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaThumbRef] = useEmblaCarousel({ 
    containScroll: 'keepSnaps',
    dragFree: true 
  });

  // Auto-play functionality (disabled if disableAutoplay is true)
  useEffect(() => {
    if (!emblaApi || disableAutoplay) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
    scrollTo(index);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="relative rounded-2xl overflow-hidden shadow-elegant mb-4">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((media, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0 h-[60vh] cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {isVideoUrl(media) ? (
                  <video
                    src={media}
                    className="w-full h-full object-cover bg-black"
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    playsinline
                    playsInline
                  />
                ) : (
                  <img
                    src={media}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); scrollNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div ref={emblaThumbRef} className="overflow-hidden mb-8">
          <div className="flex gap-4">
            {images.map((media, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`relative flex-[0_0_20%] min-w-[100px] h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  selectedIndex === index
                    ? 'opacity-100 ring-2 ring-primary'
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
              >
                {isVideoUrl(media) ? (
                  <>
                    <video
                      src={media}
                      className="w-full h-full object-cover bg-black"
                      preload="none"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-3 border-l-black border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={media}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <div ref={emblaRef} className="overflow-hidden w-full h-full">
            <div className="flex h-full">
              {images.map((media, index) => (
                <div
                  key={index}
                  className="relative flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-4 bg-black"
                >
                  {isVideoUrl(media) ? (
                    <video
                      src={media}
                      className="max-w-full max-h-full object-contain"
                      controls
                      controlsList="nodownload"
                      autoPlay
                      preload="metadata"
                      playsinline
                      playsInline
                    />
                  ) : (
                    <img
                      src={media}
                      alt={`${title} - Image ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
