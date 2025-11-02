import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home, Mail } from 'lucide-react';
import { useTranslate } from '@/hooks/useTranslate';

const ThankYou = () => {
  const { t } = useTranslate();
  const location = useLocation();
  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-16 h-16 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">{t('thankYou.title') || 'Thank You for Booking!'}</h1>

          <p className="text-xl text-muted-foreground mb-8">
            {t('thankYou.subtitle') || 'Your booking request has been successfully submitted to Oussaid Tourism.'}
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-8 text-left">
            <h2 className="text-2xl font-semibold mb-4">{t('thankYou.whatNext') || 'What Happens Next?'}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>You'll receive a confirmation email shortly with your booking details.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Our team will review your request and contact you within 24 hours to confirm availability.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>You'll receive detailed information about meeting points, what to bring, and payment options.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="w-5 h-5" />
                {t('common.back')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t('navbar.contact')}
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Have questions? Reach us at{' '}
              <a href="mailto:office@oussaidtourisme.com" className="text-primary hover:underline">
                office@oussaidtourisme.com
              </a>{' '}
              or call{' '}
              <a href="tel:+212707704981" className="text-primary hover:underline">
                +212 707-704981
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
