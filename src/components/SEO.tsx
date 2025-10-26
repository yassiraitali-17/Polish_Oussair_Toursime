import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const SEO = ({
  title = 'Oussaid Tourism - Discover Marrakech | Tours, Activities & Transportation',
  description = 'Experience the magic of Marrakech with Oussaid Tourism. Authentic tours, exciting activities, and reliable transportation services in Morocco. Book your Agafay Desert adventure or Palmeraie quad biking today!',
  image = '/favicon.png',
  article = false
}: SEOProps) => {
  const location = useLocation();
  const url = `https://oussaidtourism.com${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:type', content: article ? 'article' : 'website' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }, [title, description, url, image, article]);

  return null;
};

export default SEO;
