import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useTranslate } from '@/hooks/useTranslate';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslate();
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Oussaid Tourism" className="h-20 w-auto" />
            <p className="text-sm text-muted-foreground">
              Discover the magic of Marrakech with authentic tours, exciting activities, and reliable transportation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
          <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">{t('services.title')}</Link></li>
              <li><Link to="/activities" className="text-muted-foreground hover:text-primary transition-colors">{t('services.activities')}</Link></li>
              <li><Link to="/activities/agafay" className="text-muted-foreground hover:text-primary transition-colors">Agafay</Link></li>
              <li><Link to="/activities/palmeraie" className="text-muted-foreground hover:text-primary transition-colors">Palmeraie</Link></li>
              <li><Link to="/activities/other" className="text-muted-foreground hover:text-primary transition-colors">{t('services.activities')}</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{t('navbar.about')}</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">{t('navbar.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">18 Yacoub El Mansour Street<br />Next to Majorelle Gardens<br />Marrakech, Morocco</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+212707704981" className="text-sm hover:text-primary transition-colors">+212 707-704981</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:office@oussaidtourisme.com" className="text-sm hover:text-primary transition-colors">office@oussaidtourisme.com</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.workingHours')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>{t('contact.available24_7')}</p>
                  <p>Round-the-clock service</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.followUs')}</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/14MosGFidma/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/oussaid_tourisme/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@oussaid_tourisme?_t=ZS-90qfJyQSnif&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })} | {t('footer.poweredBy', { company: 'SiteQom' })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
