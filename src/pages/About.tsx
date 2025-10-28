import { Users, Award, Heart, Shield, MapPin, Plane, Star } from 'lucide-react';
import placeholderImage from '@/assets/placeholder.webp';
import AnimatedCounter from '@/components/AnimatedCounter';
import SEO from '@/components/SEO';
import { useTranslate } from '@/hooks/useTranslate';

const About = () => {
  const { t } = useTranslate();
  return (
    <div className="min-h-screen pt-24 pb-20">
      <SEO
        title="About Us - Oussaid Tourism | Your Trusted Morocco Travel Partner"
        description="Learn about Oussaid Tourism, your trusted partner for authentic Moroccan experiences since 2010. Expert guides, 350+ activities, 240+ tours, and 450+ transportation services."
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-muted-foreground">
              {t('about.tagline')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('about.ourStory')}</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  {t('about.storyPart1')}
                </p>
                <p>
                  {t('about.storyPart2')}
                </p>
                <p>
                  {t('about.storyPart3')}
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={placeholderImage}
                alt="Marrakech medina"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t('about.whyChooseUs')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: t('about.expertGuides'),
                description: t('about.expertGuidesDesc'),
              },
              {
                icon: Shield,
                title: t('about.safetyFirst'),
                description: t('about.safetyFirstDesc'),
              },
              {
                icon: Heart,
                title: t('about.customerCare'),
                description: t('about.customerCareDesc'),
              },
              {
                icon: Users,
                title: t('about.localExpertise'),
                description: t('about.localExpertiseDesc'),
              },
            ].map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-elegant text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">{t('about.successNumbers')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedCounter
                end={300}
                suffix="+"
                icon={<MapPin className="w-8 h-8 text-primary" />}
                label={t('about.activities')}
              />
              <AnimatedCounter
                end={200}
                suffix="+"
                icon={<Plane className="w-8 h-8 text-primary" />}
                label={t('about.tours')}
              />
              <AnimatedCounter
                end={400}
                suffix="+"
                icon={<Users className="w-8 h-8 text-primary" />}
                label={t('about.transportationServices')}
              />
              <AnimatedCounter
                end={98}
                suffix="%"
                icon={<Star className="w-8 h-8 text-primary" />}
                label={t('about.clientSatisfaction')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">{t('about.readyToExplore')}</h2>
            <p className="text-xl mb-8 text-white/90">
              {t('about.letUsCreate')}
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg">
                {t('about.getInTouch')}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
