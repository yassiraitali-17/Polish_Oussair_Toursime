import { Link } from 'react-router-dom';
import { Clock, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { language } = useLanguage();
  const [selectedVariant, setSelectedVariant] = useState(service.variants?.[0]);
  const [showVariants, setShowVariants] = useState(false);

  const currentPrice = selectedVariant?.price || service.price;
  const currentDuration = selectedVariant?.duration || service.duration;
  const currentTitle = selectedVariant?.(language === 'fr' ? 'labelFr' : 'label') || selectedVariant?.label || (language === 'fr' ? service.titleFr : service.title) || service.title;

  const hasVariants = service.variants && service.variants.length > 0;

  const handleVariantSelect = (e: React.MouseEvent, variant: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedVariant(variant);
    setShowVariants(false);
  };

  return (
    <Link to={`/service/${service.id}`} className="block">
      <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer h-full relative">
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold shadow-lg ${
            currentPrice.toLowerCase().includes('free')
              ? 'bg-green-500 text-white'
              : 'bg-primary text-primary-foreground'
          }`}>
            {currentPrice}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {currentTitle}
            </h3>
            {hasVariants && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowVariants(!showVariants);
                }}
                className="p-1 hover:bg-muted rounded transition-colors flex-shrink-0"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${showVariants ? 'rotate-180' : ''}`}
                />
              </button>
            )}
          </div>

          {hasVariants && showVariants && (
            <div
              className="absolute top-full left-4 right-4 bg-white border border-border rounded-lg shadow-lg z-10 mt-2 max-h-64 overflow-y-auto"
              onClick={(e) => e.preventDefault()}
            >
              {service.variants!.map((variant) => (
                <button
                  key={variant.id}
                  onClick={(e) => handleVariantSelect(e, variant)}
                  className={`w-full text-left px-4 py-3 border-b last:border-b-0 hover:bg-muted transition-colors ${
                    selectedVariant?.id === variant.id ? 'bg-primary/10 font-semibold' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{variant.label}</p>
                      {variant.description && (
                        <p className="text-sm text-muted-foreground">{variant.description}</p>
                      )}
                    </div>
                    <p className="font-semibold text-primary text-sm ml-2 flex-shrink-0">{variant.price}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {selectedVariant?.description || service.shortDescription}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{currentDuration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{service.location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button className="w-full group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
