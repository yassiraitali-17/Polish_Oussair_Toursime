import { Users, Award, Heart, Shield, MapPin, Plane, Star } from 'lucide-react';
import placeholderImage from '@/assets/placeholder.webp';
import AnimatedCounter from '@/components/AnimatedCounter';
import SEO from '@/components/SEO';

const About = () => {
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
            <h1 className="text-5xl font-bold mb-6">About Oussaid Tourism</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for authentic Moroccan experiences since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in the heart of Marrakech, Oussaid Tourism was born from a passion for sharing 
                  the rich culture, breathtaking landscapes, and warm hospitality of Morocco with travelers 
                  from around the world.
                </p>
                <p>
                  What started as a small family business has grown into one of Marrakech's most trusted 
                  tourism agencies, serving thousands of satisfied customers each year. Our deep roots in 
                  the local community and extensive network across Morocco allow us to offer authentic 
                  experiences that go beyond typical tourist attractions.
                </p>
                <p>
                  We believe in responsible tourism that benefits local communities while creating 
                  unforgettable memories for our guests. Every tour, activity, and service is carefully 
                  crafted to showcase the best of Moroccan culture, nature, and adventure.
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
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Expert Guides',
                description: 'Professional, knowledgeable guides who are passionate about Morocco',
              },
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Fully insured services with the highest safety standards',
              },
              {
                icon: Heart,
                title: 'Customer Care',
                description: '24/7 support and personalized service for every guest',
              },
              {
                icon: Users,
                title: 'Local Expertise',
                description: 'Deep local knowledge and authentic cultural connections',
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
            <h2 className="text-4xl font-bold text-center mb-12">Our Success in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedCounter
                end={300}
                suffix="+"
                icon={<MapPin className="w-8 h-8 text-primary" />}
                label="Activities"
              />
              <AnimatedCounter
                end={200}
                suffix="+"
                icon={<Plane className="w-8 h-8 text-primary" />}
                label="Tours"
              />
              <AnimatedCounter
                end={400}
                suffix="+"
                icon={<Users className="w-8 h-8 text-primary" />}
                label="Transportation Services"
              />
              <AnimatedCounter
                end={98}
                suffix="%"
                icon={<Star className="w-8 h-8 text-primary" />}
                label="Client Satisfaction"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Morocco?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let us create an unforgettable adventure tailored just for you.
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
