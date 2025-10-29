import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Check, ArrowRight, ArrowLeft, Users, ChevronDown } from 'lucide-react';
import { getServiceById } from '@/data/services';
import MapItinerary from '@/components/MapItinerary';
import ImageGallery from '@/components/ImageGallery';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = getServiceById(id || '');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selectedVariant, setSelectedVariant] = useState(service?.variants?.[0]);
  const [showVariantsDropdown, setShowVariantsDropdown] = useState(false);
  const [personsCount, setPersonsCount] = useState<number>(1);

  const currentPrice = selectedVariant?.price || service?.price;
  const currentDescription = selectedVariant?.description || service?.description;
  const currentDuration = selectedVariant?.duration || service?.duration;
  const currentInclusions = selectedVariant?.inclusions || service?.inclusions;

  const otherVariants = service?.variants?.filter(v => v.id !== selectedVariant?.id) || [];

  const calculateTotal = () => {
    if (!service?.priceVariants) return null;
    let total = 0;
    service.priceVariants.forEach((variant, index) => {
      const qty = quantities[index] || 0;
      total += variant.priceNumeric * qty;
    });
    return total;
  };

  const extractNumericPrice = (priceString: string): number => {
    const match = priceString.match(/€(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const calculateSingleServiceTotal = (): number => {
    const numericPrice = extractNumericPrice(currentPrice);
    return numericPrice * personsCount;
  };

  const handleQuantityChange = (index: number, value: string) => {
    const qty = parseInt(value) || 0;
    setQuantities(prev => ({ ...prev, [index]: qty }));
  };

  if (!service) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {selectedVariant?.label || service.title}
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{currentDuration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{service.location}</span>
            </div>
          </div>
        </div>

        {/* Top Section: Image + Booking Card */}
        <div className={`grid grid-cols-1 ${service.category !== 'transportation' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 mb-12`}>
          {/* Image Gallery */}
          {service.category !== 'transportation' && (
            <div className="lg:col-span-2">
              <ImageGallery
                images={[service.image, ...(service.gallery || [])]}
                title={service.title}
                disableAutoplay={service.id === 'hot-air-balloon' || service.id === 'agafay-overnight'}
              />
            </div>
          )}

          {service.category === 'transportation' && (
            <div className="lg:col-span-1">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          )}

          {/* Booking Card */}
          <div className={service.category !== 'transportation' ? 'lg:col-span-1' : 'lg:col-span-1'}>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant sticky top-24">
              {service.priceVariants ? (
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-4">Pricing Options</div>
                  <div className="space-y-4 mb-6">
                    {service.priceVariants.map((variant, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-semibold">{variant.label}</div>
                            <div className="text-lg font-bold text-primary">{variant.price}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`qty-${index}`} className="text-sm">Number of persons</Label>
                          <div className="relative">
                            <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                              id={`qty-${index}`}
                              type="number"
                              min="0"
                              value={quantities[index] || 0}
                              onChange={(e) => handleQuantityChange(index, e.target.value)}
                              className="pl-9"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {calculateTotal() !== null && calculateTotal()! > 0 && (
                    <div className="bg-primary/10 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="text-2xl font-bold text-primary">€{calculateTotal()}</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Price Per Person</div>
                  <div className="text-4xl font-bold text-primary mb-4">{currentPrice}</div>

                  <div className="space-y-3 mb-4">
                    <Label htmlFor="persons-count" className="text-sm">Number of Persons</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="persons-count"
                        type="number"
                        min="1"
                        value={personsCount}
                        onChange={(e) => setPersonsCount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="pl-9"
                      />
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">Total Price</span>
                      <span className="text-2xl font-bold text-primary">€{calculateSingleServiceTotal()}</span>
                    </div>
                  </div>
                </div>
              )}

              {service.id === 'city-to-city-transfer' ? (
                <Link to="/contact" className="block mb-4">
                  <Button className="w-full" size="lg">
                    Contact us for custom quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <Link to={`/checkout/${selectedVariant?.id || service.id}`} className="block mb-4">
                  <Button className="w-full" size="lg">
                    Book Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              )}

              {service.variants && service.variants.length > 0 && (
                <div className="relative mb-4">
                  <button
                    onClick={() => setShowVariantsDropdown(!showVariantsDropdown)}
                    className="w-full px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors flex items-center justify-between animate-pulse-attention"
                    style={{ animation: 'pulse-attention 2s infinite' }}
                  >
                    <span className="text-sm font-medium">Discover Other Variations</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${showVariantsDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {showVariantsDropdown && otherVariants.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-border rounded-lg shadow-lg z-10 mt-1 overflow-hidden">
                      {otherVariants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => {
                            setSelectedVariant(variant);
                            setShowVariantsDropdown(false);
                          }}
                          className="w-full text-left px-4 py-3 border-b last:border-b-0 hover:bg-muted transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">{variant.label}</p>
                              {variant.description && (
                                <p className="text-xs text-muted-foreground mt-1">{variant.description}</p>
                              )}
                            </div>
                            <p className="font-semibold text-primary text-sm ml-2 flex-shrink-0">{variant.price}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">{currentDuration.split('|')[0].trim()}</span>
                </div>
                {currentDuration.includes('Departure') && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Departure</span>
                    <span className="font-semibold">{currentDuration.split('Departure at ')[1]}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-semibold">{service.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-semibold capitalize">{service.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">About This Experience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{currentDescription}</p>
          </div>

          {/* Map Itinerary - Hide for rentals */}
          {!service.isRental && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Location & Itinerary</h2>
              <div className="max-w-4xl">
                <MapItinerary location={service.location} title={service.title} />
              </div>
            </div>
          )}

          {service.itinerary && service.itinerary.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Itinerary Highlights</h2>
              <div className="space-y-6">
                {service.itinerary.map((day, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">{day.day}</h3>
                    <p className="text-lg leading-relaxed">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-3xl font-bold mb-4">What's Included</h2>
            <ul className="space-y-3">
              {currentInclusions.map((inclusion, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.exclusions && service.exclusions.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">What's NOT Included</h2>
              <ul className="space-y-3">
                {service.exclusions.map((exclusion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-muted-foreground">✕</span>
                    <span className="text-lg text-muted-foreground">{exclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
