import CategoryCard from '@/components/CategoryCard';
import agafayHero from '@/assets/agafay-hero.jpg';
import palmeraieHero from '@/assets/palmeraie-hero.jpg';
import heroMarrakech from '@/assets/hero-marrakech.jpg';

const Activities = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Exciting Activities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover thrilling adventures and unique experiences in the stunning landscapes of Marrakech and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <CategoryCard 
            title="Agafay"
            subtitle="Agafay Desert Adventures — Quad, Camel rides, Dinner show"
            image={agafayHero}
            link="/activities/agafay"
          />
          <CategoryCard 
            title="Palmeraie"
            subtitle="Palmeraie Oasis — Quad biking, Hot air balloon, Palm grove tours"
            image={palmeraieHero}
            link="/activities/palmeraie"
          />
          <CategoryCard 
            title="Other Activities"
            subtitle="Adventure & exploration — Biking, Scooter, Paragliding, Hot Air Balloon"
            image={heroMarrakech}
            link="/activities/other"
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
