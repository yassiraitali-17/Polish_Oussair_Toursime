import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { getServicesBySubcategory } from '@/data/services';
import heroMarrakech from '@/assets/hero-marrakech.jpg';

const OtherActivities = () => {
  const otherServices = getServicesBySubcategory('other');

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroMarrakech})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Other Activities
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore Marrakech with biking tours, scooter rentals, paragliding adventures, and hot air balloon flights
          </p>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-12 pb-6">
        <Link to="/activities">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Activities
          </Button>
        </Link>
      </div>

      {/* Activities Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherActivities;
