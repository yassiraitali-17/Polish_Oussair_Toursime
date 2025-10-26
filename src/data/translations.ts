import { Language } from '@/contexts/LanguageContext';

export const translations: Record<Language, Record<string, any>> = {
  en: {
    navbar: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
    home: {
      heroTitle: 'Discover the Magic of Marrakech',
      heroSubtitle: 'Authentic tours, exciting activities, and reliable transportation with Oussaid Tourism',
      exploreServices: 'Explore Services',
      contactUs: 'Contact Us',
      welcomeTitle: 'Welcome to Oussaid Tourism',
      welcomeText: 'Based in the heart of Marrakech, we specialize in creating unforgettable experiences that showcase the beauty, culture, and adventure of Morocco. With years of expertise and a passion for hospitality, we\'re your trusted partner for exploring this magical destination.',
      learnMore: 'Learn More About Us',
      activitiesTitle: 'Popular Activities',
      toursTitle: 'Guided Tours',
      transportationTitle: 'Transportation Services',
      viewAll: 'View All Services',
    },
    services: {
      title: 'Our Services',
      activities: 'Activities',
      tours: 'Tours',
      transportation: 'Transportation',
      filter: 'Filter by Category',
      noResults: 'No services found',
    },
    about: {
      title: 'About Oussaid Tourism',
      mission: 'Our Mission',
      values: 'Our Values',
      team: 'Meet Our Team',
    },
    contact: {
      title: 'Contact Us',
      form: 'Contact Form',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Working Hours',
      sendMessage: 'Send Message',
      available24_7: '24/7 Available',
    },
    footer: {
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      workingHours: 'Working Hours',
      followUs: 'Follow Us',
      copyright: '© {year} Oussaid Tourism. All rights reserved.',
      poweredBy: 'Powered by {company}',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      readMore: 'Read More',
      bookNow: 'Book Now',
      learnMore: 'Learn More',
      language: 'Language',
    },
  },
  fr: {
    navbar: {
      home: 'Accueil',
      services: 'Services',
      about: 'À Propos',
      contact: 'Contact',
      bookNow: 'Réserver',
    },
    home: {
      heroTitle: 'Découvrez la Magie de Marrakech',
      heroSubtitle: 'Visites authentiques, activités passionnantes et transports fiables avec Oussaid Tourism',
      exploreServices: 'Explorer les Services',
      contactUs: 'Nous Contacter',
      welcomeTitle: 'Bienvenue chez Oussaid Tourism',
      welcomeText: 'Basé au cœur de Marrakech, nous nous spécialisons dans la création d\'expériences inoubliables qui mettent en valeur la beauté, la culture et l\'aventure du Maroc. Avec des années d\'expertise et une passion pour l\'hospitalité, nous sommes votre partenaire de confiance pour explorer cette destination magique.',
      learnMore: 'En Savoir Plus sur Nous',
      activitiesTitle: 'Activités Populaires',
      toursTitle: 'Visites Guidées',
      transportationTitle: 'Services de Transport',
      viewAll: 'Voir Tous les Services',
    },
    services: {
      title: 'Nos Services',
      activities: 'Activités',
      tours: 'Visites',
      transportation: 'Transport',
      filter: 'Filtrer par Catégorie',
      noResults: 'Aucun service trouvé',
    },
    about: {
      title: 'À Propos d\'Oussaid Tourism',
      mission: 'Notre Mission',
      values: 'Nos Valeurs',
      team: 'Notre Équipe',
    },
    contact: {
      title: 'Nous Contacter',
      form: 'Formulaire de Contact',
      phone: 'Téléphone',
      email: 'E-mail',
      address: 'Adresse',
      hours: 'Heures d\'Ouverture',
      sendMessage: 'Envoyer le Message',
      available24_7: 'Disponible 24h/24',
    },
    footer: {
      quickLinks: 'Liens Rapides',
      contactInfo: 'Contact',
      workingHours: 'Heures d\'Ouverture',
      followUs: 'Suivez-nous',
      copyright: '© {year} Oussaid Tourism. Tous droits réservés.',
      poweredBy: 'Propulsé par {company}',
    },
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      success: 'Succès',
      close: 'Fermer',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Précédent',
      readMore: 'En Savoir Plus',
      bookNow: 'Réserver',
      learnMore: 'En Savoir Plus',
      language: 'Langue',
    },
  },
};

export const useTranslation = (language: Language) => {
  return {
    t: (path: string, fallback?: string) => {
      const keys = path.split('.');
      let value: any = translations[language];
      
      for (const key of keys) {
        value = value?.[key];
        if (value === undefined) {
          return fallback || path;
        }
      }
      
      return value;
    },
  };
};
