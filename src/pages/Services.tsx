import { useState } from 'react';
import ServiceCard from '@/components/ServiceCard';
import CategoryCard from '@/components/CategoryCard';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import agafayHero from '@/assets/agafay-hero.jpg';
import palmeraieHero from '@/assets/palmeraie-hero.jpg';
import heroMarrakech from '@/assets/hero-marrakech.jpg';
import SEO from '@/components/SEO';
import { useTranslate } from '@/hooks/useTranslate';

const Services = () => {
  const { t } = useTranslate();
  const [activeFilter, setActiveFilter] = useState<'all' | 'activity' | 'tour' | 'transportation'>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const getFilteredServices = () => {
    let filtered = services.filter(service => !service.hideFromList);

    if (activeFilter === 'all') return filtered;
    if (activeFilter === 'activity' && activeSubcategory) {
      return filtered.filter(service =>
        service.category === 'activity' && service.subcategory === activeSubcategory
      );
    }
    return filtered.filter(service => service.category === activeFilter);
  };

  const filteredServices = getFilteredServices();
  const shouldShowSubcategories = activeFilter === 'activity' && !activeSubcategory;
  const shouldShowServices = activeFilter === 'all' || (activeFilter !== 'activity' || activeSubcategory);

  const handleFilterClick = (filter: 'all' | 'activity' | 'tour' | 'transportation') => {
    setActiveFilter(filter);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setActiveSubcategory(subcategory);
  };

  const activitySubcategories = [
    {
      id: 'agafay',
      title: 'Agafay',
      subtitle: 'Agafay Desert Adventures — Quad, Camel rides, Dinner show',
      image: agafayHero,
    },
    {
      id: 'palmeraie',
      title: 'Palmeraie',
      subtitle: 'Palmeraie Oasis — Quad biking, Hot air balloon, Palm grove tours',
      image: palmeraieHero,
    },
    {
      id: 'other',
      title: 'Other Activities',
      subtitle: 'Adventure & exploration — Biking, Scooter, Paragliding, Hot Air Balloon',
      image: heroMarrakech,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <SEO
        title="Our Services - Marrakech Tours, Activities & Transportation | Oussaid Tourism"
        description="Browse all our services: Agafay Desert adventures, Palmeraie activities, Merzouga and Zagora desert tours, Ourika Valley excursions, airport transfers, and more. Book your perfect Marrakech experience today!"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.filter')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            size="lg"
            onClick={() => handleFilterClick('all')}
          >
            All Services
          </Button>
          <Button
            variant={activeFilter === 'activity' ? 'default' : 'outline'}
            size="lg"
            onClick={() => handleFilterClick('activity')}
          >
            Activities
          </Button>
          <Button
            variant={activeFilter === 'tour' ? 'default' : 'outline'}
            size="lg"
            onClick={() => handleFilterClick('tour')}
          >
            Tours
          </Button>
          <Button
            variant={activeFilter === 'transportation' ? 'default' : 'outline'}
            size="lg"
            onClick={() => handleFilterClick('transportation')}
          >
            Transportation
          </Button>
        </div>

        {/* Activity Subcategories */}
        {shouldShowSubcategories && (
          <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {activitySubcategories.map((subcategory) => (
                <div key={subcategory.id} onClick={() => handleSubcategoryClick(subcategory.id)}>
                  <CategoryCard
                    title={subcategory.title}
                    subtitle={subcategory.subtitle}
                    image={subcategory.image}
                    link="#"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to Subcategories Button */}
        {activeFilter === 'activity' && activeSubcategory && (
          <div className="mb-8 text-center">
            <Button
              variant="outline"
              onClick={() => setActiveSubcategory(null)}
            >
              ← Back to Activity Categories
            </Button>
          </div>
        )}

        {/* Services Grid */}
        {shouldShowServices && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredServices.length === 0 && shouldShowServices && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No services found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
