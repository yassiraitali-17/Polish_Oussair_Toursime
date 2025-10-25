import { MapPin } from 'lucide-react';

interface MapItineraryProps {
  location: string;
  title: string;
}

const getMapUrl = (location: string): string => {
  const marrakechCoords = { lat: 31.6295, lng: -7.9889 };

  const destinations: Record<string, { lat: number; lng: number }> = {
    'Ourika Valley': { lat: 31.3167, lng: -7.7333 },
    'Essaouira': { lat: 31.5125, lng: -9.7700 },
    'Ouzoud': { lat: 32.0142, lng: -6.7194 },
    'Ouarzazate': { lat: 30.9335, lng: -6.9370 },
    'Merzouga - Sahara Desert': { lat: 31.0801, lng: -4.0133 },
    'Zagora - Draa Valley': { lat: 30.3297, lng: -5.8375 },
    'Agafay Desert': { lat: 31.4500, lng: -8.2000 },
    'Marrakech Palmeraie': { lat: 31.6837, lng: -7.9436 },
    'Atlas Mountains': { lat: 31.0753, lng: -7.8965 },
  };

  const destination = Object.keys(destinations).find(key => location.includes(key));

  if (destination) {
    const destCoords = destinations[destination];
    const bbox = `${Math.min(marrakechCoords.lng, destCoords.lng) - 0.5},${Math.min(marrakechCoords.lat, destCoords.lat) - 0.5},${Math.max(marrakechCoords.lng, destCoords.lng) + 0.5},${Math.max(marrakechCoords.lat, destCoords.lat) + 0.5}`;

    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${destCoords.lat},${destCoords.lng}`;
  }

  return `https://www.openstreetmap.org/export/embed.html?bbox=-8.0089,31.6095,-7.9689,31.6495&layer=mapnik&marker=${marrakechCoords.lat},${marrakechCoords.lng}`;
};

const MapItinerary = ({ location, title }: MapItineraryProps) => {
  return (
    <div className="w-full h-[400px] bg-muted rounded-2xl overflow-hidden relative">
      <iframe
        title={`Map for ${title}`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={getMapUrl(location)}
        allowFullScreen
      />
      <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-border">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-semibold text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default MapItinerary;
