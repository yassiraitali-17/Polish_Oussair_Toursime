import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, subtitle, image, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="group relative block overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {subtitle}
          </p>
          <Button 
            variant="hero"
            size="lg"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
          >
            Explore Activities
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
