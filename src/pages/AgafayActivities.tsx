import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { getServicesBySubcategory } from '@/data/services';
import agafayHero from '@/assets/agafay-hero.jpg';

const AgafayActivities = () => {
  const agafayServices = getServicesBySubcategory('agafay');

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={agafayHero}
          alt="Agafay Desert"
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Agafay Desert Adventures
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Experience the magic of the Agafay Desert with quad biking, camel rides, and unforgettable dinner shows
          </p>
        </div>
      </section>

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
            {agafayServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgafayActivities;
