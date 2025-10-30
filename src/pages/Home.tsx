import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { getFeaturedServices, getServicesByCategory } from '@/data/services';
import heroImage from '@/assets/hero-marrakech.jpg';
import SEO from '@/components/SEO';
import { useTranslate } from '@/hooks/useTranslate';

// Google Icon Component
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Home = () => {
  const { t } = useTranslate();
  const allServices = getServicesByCategory('activity');
  const tours = getServicesByCategory('tour');
  const transportation = getServicesByCategory('transportation');

  const featuredActivities = [
    allServices.find(s => s.id === 'agafay-pack-complet'),
    allServices.find(s => s.id === 'agafay-quad'),
    allServices.find(s => s.id === 'agafay-camel'),
  ].filter(Boolean);

  const featuredTours = [
    tours.find(s => s.id === 'ourika-valley-tour'),
    tours.find(s => s.id === 'essaouira-tour'),
    tours.find(s => s.id === 'merzouga-tour'),
  ].filter(Boolean);

  const featuredTransportation = [
    transportation.find(s => s.id === 'airport-transfer'),
    transportation.find(s => s.id === 'city-to-city-transfer'),
  ].filter(Boolean);

  return (
    <div className="min-h-screen">
      <SEO />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Marrakech Morocco"
            className="w-full h-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {t('home.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md">
            {t('home.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button variant="hero" size="lg">
                {t('home.exploreServices')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                {t('home.contactUs')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t('home.welcomeTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('home.welcomeText')}
            </p>
            <Link to="/about">
              <Button variant="secondary" size="lg">
                {t('home.learnMore')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">{t('home.activitiesTitle')}</h2>
              <p className="text-muted-foreground">{t('home.activitiesSubtitle')}</p>
            </div>
            <Link to="/activities">
              <Button variant="outline">
                {t('home.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredActivities.map((activity) => (
              <ServiceCard key={activity.id} service={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">{t('home.toursTitle')}</h2>
              <p className="text-muted-foreground">{t('home.toursSubtitle')}</p>
            </div>
            <Link to="/services">
              <Button variant="outline">
                {t('home.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <ServiceCard key={tour.id} service={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">{t('home.transportationTitle')}</h2>
              <p className="text-muted-foreground">{t('home.transportationSubtitle')}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredTransportation.map((transport) => (
              <ServiceCard key={transport.id} service={transport} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">{t('testimonials.title')}</h2>
          <div className="flex justify-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                // TODO: Replace with your Google Business profile URL
                // Example: https://www.google.com/maps/place/Oussaid+Tourism/@YOUR_COORDINATES/YOUR_PLACE_ID
                window.open('https://google.com', '_blank');
              }}
            >
              <GoogleIcon className="w-5 h-5" />
              {t('testimonials.readReviews')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
