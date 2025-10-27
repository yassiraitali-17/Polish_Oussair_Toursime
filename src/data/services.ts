import placeholderImage from '@/assets/placeholder.webp';

export interface Service {
  id: string;
  category: 'activity' | 'tour' | 'transportation';
  subcategory?: 'agafay' | 'palmeraie' | string;
  title: string;
  description: string;
  shortDescription: string;
  price: string;
  duration: string;
  image: string;
  location: string;
  inclusions: string[];
  exclusions?: string[];
  itinerary?: {
    day: string;
    description: string;
  }[];
  gallery?: string[];
  priceVariants?: {
    label: string;
    price: string;
    priceNumeric: number;
  }[];
  variants?: {
    id: string;
    label: string;
    price: string;
    description?: string;
    duration?: string;
    inclusions?: string[];
  }[];
  isRental?: boolean;
  hideFromList?: boolean;
}

// Image asset mapping
const images = {
  agafay_pack_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fb5f5441734ef416baa85d8e3ec7bb8f2?format=webp&width=800',
  agafay_pack_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F54af5aa762624137b093dbe7edde208d?format=webp&width=800',
  agafay_pack_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fec6b047bb488465faf61e8913170d3a5?format=webp&width=800',
  agafay_pack_3: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fe4e68dede71e42f39ef67a08923f863f?format=webp&width=800',
  agafay_pack_4: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F7a825343b9664a24a09b45b7c69f6694?format=webp&width=800',
  
  biking_tour_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F4d2ce535363e4cc692477ef4f23b5fb7?format=webp&width=800',
  biking_tour_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F40bbed6ba6d6423da7499530d63db559?format=webp&width=800',
  biking_tour_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F319381ce1bf543e898497c276f90b721?format=webp&width=800',
  
  buggy_palmeraie_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fe77a58b4c94b4b38b21d8460acc0201d?format=webp&width=800',
  buggy_palmeraie_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F61d571e8222c42c9b50c4b14b7568100?format=webp&width=800',
  buggy_palmeraie_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F3ae4efa8a7b44829bac1b1de19da7b28?format=webp&width=800',
  
  camel_agafay_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F06bff8d5284f411dacffee8a6c63d0d6?format=webp&width=800',
  camel_agafay_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F512cf3ff29254e6180643fc5ad9e1aa7?format=webp&width=800',
  camel_agafay_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fac0b69435e4c4747b105fe6d78d340eb?format=webp&width=800',
  
  camel_palmeraie_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F50ec852a45da452c8a92e8b7d9e2331b?format=webp&width=800',
  camel_palmeraie_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fd180924c35974120aa0918ebef2e5150?format=webp&width=800',
  camel_palmeraie_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F655030f2918d478dad9d1d2370aaf74f?format=webp&width=800',
  
  cooking_class_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F4aea1cc0839c4ce79b683f5c65079b3f?format=webp&width=800',
  cooking_class_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fbb9304b97ee045bbb066b17eaaa5b32d?format=webp&width=800',
  cooking_class_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F56eb525b8f6c4371be30b900576eb99c?format=webp&width=800',
  
  horse_palmeraie_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F0a9d0daba6054d5eadd934557379b763?format=webp&width=800',
  horse_palmeraie_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fa86fb404a941419a8fedf1b3a8326436?format=webp&width=800',
  horse_palmeraie_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F849de24c84dd4a6aab00a0d02243b9d4?format=webp&width=800',
  
  hot_air_balloon_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F31787917bc5f4e978a383051a5be0495?format=webp&width=800',
  
  overnight_desert_stay: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F5b0eba128a3140b5b84ab6ecaddc73ea?format=webp&width=800',
  
  paragliding_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F5218a5bda92a4be391a0e145dfb67d7d?format=webp&width=800',
  paragliding_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fd04f30fd6c0d4641902552053477c223?format=webp&width=800',
  paragliding_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F66e7618c773a44d09f27b0a476fe400f?format=webp&width=800',
  
  quad_agafay_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F49cf4ead86a648708736b1267ab9cf8a?format=webp&width=800',
  quad_agafay_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Ffa93ddcef87044739566d94d6e50ea7f?format=webp&width=800',
  quad_agafay_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F303b5eec8a7f4d9191e3a720a3dc1315?format=webp&width=800',
  
  quad_palmeraie_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fd0d38a3c215a43ba89a232542c5a64af?format=webp&width=800',
  quad_palmeraie_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F4eb0f63296a64694a3b4b5bb8c9779bc?format=webp&width=800',
  quad_palmeraie_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fdd19cbcf828e49c8af19397e6e6d61cb?format=webp&width=800',

  buggy_agafay_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fb1d0198ffc87483e868580e7e8d8c8df?format=webp&width=800',
  buggy_agafay_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F70dfb963dcd449dea5c8819803973c17?format=webp&width=800',
  buggy_agafay_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F7ca6bb507cb740c78fe7ae47dbd29992?format=webp&width=800',

  horse_agafay_main: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F600999f44f044e9aad6888ada2dc05a3?format=webp&width=800',
  horse_agafay_1: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fdf79ce9f8b5149bb910b59df0ff97f64?format=webp&width=800',
  horse_agafay_2: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Fcb7be4aa67c24a5e961020b059518ef8?format=webp&width=800',
};

export const services: Service[] = [
  // Agafay Activities
  {
    id: 'agafay-pack-complet',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Pack Complet',
    shortDescription: '1h quad, 30min camel, dinner show, pool access',
    description: 'Includes 1h quad, 30min camel ride, dinner with show and fire performance, pool access, and round-trip transport.',
    price: '€66 / 660Dhs',
    duration: 'Full experience | Departure at 9:00',
    image: images.agafay_pack_main,
    location: 'Agafay Desert',
    inclusions: ['1h quad ride', '30min camel ride', 'Dinner & show', 'Pool access', 'Round-trip transport', 'Photos stop'],
    gallery: [
      images.agafay_pack_1,
      images.agafay_pack_2,
      images.agafay_pack_3,
      images.agafay_pack_4,
    ],
  },
  {
    id: 'agafay-quad',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Quad Agafay',
    shortDescription: 'Choose your quad adventure experience',
    description: 'Select from multiple quad riding options with different durations and add-ons like dinner.',
    price: '€35 / 350Dhs',
    duration: '1 hour',
    image: images.quad_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['Quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_agafay_1, images.quad_agafay_2],
    variants: [
      {
        id: 'agafay-quad-1h-solo',
        label: '1h Quad (Solo)',
        price: '€35 / 350Dhs',
        description: 'Standard 1-hour solo quad tour in the Agafay desert',
        duration: '1 hour | Departure at 9:00',
        inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
      },
      {
        id: 'agafay-quad-1h-double',
        label: '1h Quad (Double)',
        price: '€40 / 400Dhs',
        description: 'Shared quad experience for two people, 1 hour',
        duration: '1 hour | Departure at 9:00',
        inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
      },
      {
        id: 'agafay-quad-2h',
        label: '2h Quad',
        price: '€45 / 450Dhs',
        description: 'Extended 2-hour desert ride for adventure lovers',
        duration: '2 hours | Departure at 9:00',
        inclusions: ['2h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
      },
      {
        id: 'agafay-quad-dinner',
        label: 'Quad + Dinner',
        price: '€45 / 450Dhs',
        description: '1h quad ride followed by dinner and show under the stars',
        duration: '4 hours | Departure at 9:00',
        inclusions: ['1h quad ride', 'Dinner & show', 'Round-trip transport', 'Photos stop'],
      },
    ],
  },
  {
    id: 'agafay-quad-dinner-old',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Quad + Dinner',
    shortDescription: '1h quad ride followed by dinner and show',
    description: '1h quad ride followed by dinner and show.',
    price: '€45 / 450Dhs',
    duration: '4 hours',
    image: images.quad_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['1h quad ride', 'Dinner & show', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_agafay_main, images.quad_agafay_1, images.quad_agafay_2],
    hideFromList: true,
  },
  {
    id: 'agafay-camel',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Camel Ride Agafay',
    shortDescription: 'Choose your camel ride experience',
    description: 'Select from camel riding options with or without dinner experience.',
    price: '€15 / 150Dhs',
    duration: '30 minutes',
    image: images.camel_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['Camel ride', 'Round-trip transport', 'Photos stop'],
    gallery: [images.camel_agafay_1, images.camel_agafay_2],
    variants: [
      {
        id: 'agafay-camel-ride',
        label: 'Camel Ride',
        price: '€15 / 150Dhs',
        description: '30min scenic camel ride in Agafay dunes',
        duration: '30 minutes | Departure at 9:00',
        inclusions: ['30min camel ride', 'Round-trip transport', 'Photos stop'],
      },
      {
        id: 'agafay-camel-dinner',
        label: 'Camel Ride + Dinner',
        price: '€40 / 400Dhs',
        description: '30min camel ride and dinner with live show and fire performance',
        duration: '3 hours | Departure at 9:00',
        inclusions: ['30min camel ride', 'Dinner & show', 'Round-trip transport', 'Photos stop'],
      },
    ],
  },
  {
    id: 'agafay-camel-dinner-old',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Camel Ride + Dinner',
    shortDescription: '30min camel ride and dinner with show',
    description: '30min camel ride and dinner with show.',
    price: '€40 / 400Dhs',
    duration: '3 hours',
    image: images.camel_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['30min camel ride', 'Dinner & show', 'Round-trip transport', 'Photos stop'],
    gallery: [images.camel_agafay_main, images.camel_agafay_1, images.camel_agafay_2],
    hideFromList: true,
  },
  {
    id: 'agafay-quad-1h-solo',
    category: 'activity',
    subcategory: 'agafay',
    title: '1h Quad (Solo)',
    shortDescription: 'Standard 1-hour quad tour in Agafay desert',
    description: 'Standard 1-hour quad tour in Agafay desert.',
    price: '€35 / 350Dhs',
    duration: '1 hour',
    image: images.quad_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_agafay_main, images.quad_agafay_1, images.quad_agafay_2],
    hideFromList: true,
  },
  {
    id: 'agafay-quad-1h-double',
    category: 'activity',
    subcategory: 'agafay',
    title: '1h Quad (Double)',
    shortDescription: 'Shared quad experience for two people',
    description: 'Shared quad experience for two people.',
    price: '€40 / 400Dhs',
    duration: '1 hour',
    image: images.quad_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_agafay_main, images.quad_agafay_1, images.quad_agafay_2],
    hideFromList: true,
  },
  {
    id: 'agafay-quad-2h',
    category: 'activity',
    subcategory: 'agafay',
    title: '2h Quad',
    shortDescription: 'Extended 2-hour desert ride for adventure lovers',
    description: 'Extended 2-hour desert ride for adventure lovers.',
    price: '€45 / 450Dhs',
    duration: '2 hours',
    image: images.quad_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['2h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_agafay_main, images.quad_agafay_1, images.quad_agafay_2],
    hideFromList: true,
  },
  {
    id: 'agafay-buggy-1h',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Buggy Ride (1h, 2 persons)',
    shortDescription: '1-hour buggy adventure for 2 people',
    description: '1-hour buggy adventure for 2 people.',
    price: '€120 / 1200Dhs',
    duration: '1 hour | Departure at 9:00',
    image: images.buggy_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['1h buggy ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.buggy_agafay_1, images.buggy_agafay_2],
  },
  {
    id: 'agafay-camel-ride',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Camel Ride',
    shortDescription: '30min scenic camel ride in Agafay dunes',
    description: '30min scenic camel ride in Agafay dunes.',
    price: '€15 / 150Dhs',
    duration: '30 minutes',
    image: images.camel_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['30min camel ride', 'Round-trip transport', 'Photos stop'],
    gallery: [images.camel_agafay_main, images.camel_agafay_1, images.camel_agafay_2],
    hideFromList: true,
  },
  {
    id: 'agafay-dinner-show',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Dinner & Show',
    shortDescription: 'Dinner under the stars with live show',
    description: 'Dinner under the stars with live show and fire performance.',
    price: '€30 / 300Dhs',
    duration: '3 hours',
    image: images.agafay_pack_main,
    location: 'Agafay Desert',
    inclusions: ['Traditional dinner', 'Live show', 'Fire performance', 'Round-trip transport', 'Photos stop'],
    gallery: [images.agafay_pack_main, images.agafay_pack_1, images.agafay_pack_2],
  },
  {
    id: 'agafay-overnight',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Overnight Desert Stay',
    shortDescription: 'Dinner, breakfast, and private tent overnight stay',
    description: 'Includes dinner, breakfast, and private tent overnight stay.',
    price: '€150 / 1500Dhs',
    duration: 'Overnight | Departure at 9:00',
    image: images.overnight_desert_stay,
    location: 'Agafay Desert',
    inclusions: ['Dinner', 'Breakfast', 'Private tent', 'Round-trip transport', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/o/assets%2Ff5ae612caa3a43a889240417f0349a86%2F3c392de6fc71437b8c2b722e03e18eaf?alt=media&token=b74bbd71-6db6-4d56-9d46-85062fbfa031&apiKey=f5ae612caa3a43a889240417f0349a86',
      'https://cdn.builder.io/o/assets%2Ff5ae612caa3a43a889240417f0349a86%2F20211411011d46689988f50bb75f4a93?alt=media&token=d0c52f38-36d0-4339-961a-05cd9cdb1615&apiKey=f5ae612caa3a43a889240417f0349a86'
    ],
  },
  {
    id: 'agafay-horse-ride',
    category: 'activity',
    subcategory: 'agafay',
    title: 'Horse Ride (1h)',
    shortDescription: '1-hour horse ride experience in Agafay desert',
    description: '1-hour horse ride experience in Agafay desert.',
    price: '€45 / 450Dhs',
    duration: '1 hour | Departure at 9:00',
    image: images.horse_agafay_main,
    location: 'Agafay Desert',
    inclusions: ['1h horse ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.horse_agafay_1, images.horse_agafay_2],
  },

  // Palmeraie Activities
  {
    id: 'palmeraie-camel-ride',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Camel Ride (1h)',
    shortDescription: 'Scenic 1-hour camel ride through Marrakech palm groves',
    description: 'Scenic 1-hour camel ride through Marrakech palm groves.',
    price: '€20 / 200Dhs',
    duration: '1 hour',
    image: images.camel_palmeraie_main,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h camel ride', 'Round-trip transport', 'Photos stop'],
    gallery: [images.camel_palmeraie_1, images.camel_palmeraie_2],
  },
  {
    id: 'palmeraie-quad',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Quad Palmeraie',
    shortDescription: 'Choose your quad adventure experience',
    description: 'Select from multiple quad riding options through the palm groves with different durations.',
    price: '€30 / 300Dhs',
    duration: '1 hour',
    image: images.quad_palmeraie_main,
    location: 'Marrakech Palmeraie',
    inclusions: ['Quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_palmeraie_main, images.quad_palmeraie_1, images.quad_palmeraie_2],
    variants: [
      {
        id: 'palmeraie-quad-1h-solo',
        label: '1h Quad (Solo)',
        price: '€30 / 300Dhs',
        description: 'Standard 1-hour solo quad tour through the Palmeraie',
        duration: '1 hour | Departure at 9:00',
        inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
      },
      {
        id: 'palmeraie-quad-double',
        label: 'Quad (Double)',
        price: '€40 / 400Dhs',
        description: 'Quad for 2 people through the Palmeraie, 1 hour',
        duration: '1 hour | Departure at 9:00',
        inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
      },
    ],
  },
  {
    id: 'palmeraie-quad-1h-solo',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Quad (1h Solo)',
    shortDescription: 'Standard 1-hour solo quad tour',
    description: 'Standard 1-hour solo quad tour.',
    price: '€30 / 300Dhs',
    duration: '1 hour',
    image: images.quad_palmeraie_main,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_palmeraie_main, images.quad_palmeraie_1, images.quad_palmeraie_2],
    hideFromList: true,
  },
  {
    id: 'palmeraie-quad-2h',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Quad (2h)',
    shortDescription: 'Extended 2-hour desert ride',
    description: 'Extended 2-hour desert ride.',
    price: '€45 / 450Dhs',
    duration: '2 hours',
    image: images.quad_palmeraie_main,
    location: 'Marrakech Palmeraie',
    inclusions: ['2h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_palmeraie_main, images.quad_palmeraie_1, images.quad_palmeraie_2],
    hideFromList: true,
  },
  {
    id: 'palmeraie-quad-double',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Quad (Double)',
    shortDescription: 'Quad for 2 people through the Palmeraie',
    description: 'Quad for 2 people through the Palmeraie.',
    price: '€40 / 400Dhs',
    duration: '1 hour',
    image: images.quad_palmeraie_main,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h quad ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.quad_palmeraie_main, images.quad_palmeraie_1, images.quad_palmeraie_2],
    hideFromList: true,
  },
  {
    id: 'palmeraie-buggy-1h',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Buggy (1h, 2 persons)',
    shortDescription: '1-hour buggy ride for 2',
    description: '1-hour buggy ride for 2.',
    price: '€120 / 1200Dhs',
    duration: '1 hour',
    image: images.buggy_palmeraie_main,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h buggy ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.buggy_palmeraie_1, images.buggy_palmeraie_2],
  },
  {
    id: 'palmeraie-horse-ride',
    category: 'activity',
    subcategory: 'palmeraie',
    title: 'Horse Ride (1h)',
    shortDescription: '1-hour horseback ride in the palm groves',
    description: '1-hour horseback ride in the palm groves.',
    price: '€45 / 450Dhs',
    duration: '1 hour',
    image: images.horse_palmeraie_main,
    location: 'Marrakech Palmeraie',
    inclusions: ['1h horse ride', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.horse_palmeraie_1, images.horse_palmeraie_2],
  },

  // Other Activities
  {
    id: 'hot-air-balloon',
    category: 'activity',
    subcategory: 'other',
    title: 'Hot Air Balloon',
    shortDescription: 'Peaceful sunrise flight with breakfast and certificate',
    description: 'Peaceful sunrise flight with 360° view, followed by breakfast and certificate.',
    price: 'From €80 / 800Dhs',
    duration: '4 hours | Departure at 9:00',
    image: images.hot_air_balloon_main,
    location: 'Marrakech Region',
    inclusions: ['Sunrise balloon flight', 'Breakfast', 'Flight certificate', 'Round-trip transport', 'Photos stop'],
    gallery: ['https://cdn.builder.io/o/assets%2Ff5ae612caa3a43a889240417f0349a86%2Faa7d57cf66844e86870f59a73e628652?alt=media&token=53eb403c-26e2-4242-8d2b-0ece20d97402&apiKey=f5ae612caa3a43a889240417f0349a86'],
    priceVariants: [
      { label: 'Adult', price: '€150 / 1500Dhs', priceNumeric: 150 },
      { label: 'Child (-7 years)', price: '€80 / 800Dhs', priceNumeric: 80 }
    ],
  },
  {
    id: 'biking-tour',
    category: 'activity',
    subcategory: 'other',
    title: 'Biking Tour',
    shortDescription: 'Guided biking tour through Marrakech surroundings',
    description: 'Guided biking tour through Marrakech surroundings.',
    price: '€45',
    duration: '3 hours',
    image: images.biking_tour_main,
    location: 'Marrakech Region',
    inclusions: ['Professional guide', 'Bike rental', 'Safety equipment', 'Round-trip transport', 'Photos stop'],
    gallery: [images.biking_tour_1, images.biking_tour_2],
  },
  {
    id: 'bike-rental',
    category: 'activity',
    subcategory: 'other',
    title: 'Bike Rental',
    shortDescription: 'Explore freely with a rented bicycle',
    description: 'Explore freely with a rented bicycle.',
    price: 'From €15',
    duration: 'Flexible',
    image: placeholderImage,
    location: 'Marrakech',
    inclusions: ['Bike rental', 'Safety equipment', 'Lock'],
    gallery: [],
    isRental: true,
  },
  {
    id: 'scooter-rental',
    category: 'activity',
    subcategory: 'other',
    title: 'Scooter Rental',
    shortDescription: 'Rent a scooter for a full-day city or countryside ride',
    description: 'Rent a scooter for a full-day city or countryside ride.',
    price: '€50',
    duration: 'Full day',
    image: placeholderImage,
    location: 'Marrakech',
    inclusions: ['Scooter rental', 'Helmet', 'Insurance', 'City map'],
    gallery: [placeholderImage, placeholderImage, placeholderImage],
    isRental: true,
  },
  {
    id: 'paragliding',
    category: 'activity',
    subcategory: 'other',
    title: 'Paragliding',
    shortDescription: 'Experience aerial views of Marrakech and the Atlas Mountains',
    description: 'Experience aerial views of Marrakech and the Atlas Mountains.',
    price: '€85',
    duration: '30 minutes flight',
    image: images.paragliding_main,
    location: 'Atlas Mountains',
    inclusions: ['Professional pilot', 'Safety equipment', 'Round-trip transport', 'Photos & video', 'Photos stop'],
    gallery: [images.paragliding_1, images.paragliding_2],
  },
  {
    id: 'cooking-class',
    category: 'activity',
    subcategory: 'other',
    title: 'Moroccan Cooking Class',
    shortDescription: 'Learn to prepare authentic Moroccan dishes and enjoy your creations',
    description: 'Immerse yourself in Moroccan culinary traditions with a hands-on cooking class. Learn to prepare traditional dishes like tagine, couscous, and Moroccan salads from experienced local chefs. After cooking, sit down to enjoy the delicious meal you have created. All ingredients, equipment, and instruction are included in this authentic cultural experience.',
    price: '€50 / 500Dhs',
    duration: '3-4 hours',
    image: images.cooking_class_main,
    location: 'Marrakech',
    inclusions: ['Professional chef instructor', 'All ingredients and equipment', 'Recipe booklet', 'Eat your prepared meal', 'Round-trip transport', 'Apron and cooking tools', 'Photos stop'],
    gallery: [images.cooking_class_1, images.cooking_class_2],
  },
  {
    id: 'chez-ali',
    category: 'activity',
    subcategory: 'other',
    title: 'Chez Ali',
    shortDescription: 'Spectacular evening show with traditional Moroccan performances',
    description: 'Experience an unforgettable evening at Chez Ali with a world-class show featuring traditional Moroccan performances. The spectacular evening includes:\n\nCérémonie de bienvenue:\n• Saut de cheval arabe (Arabian horse jump)\n• Arrivée escortée par des cavaliers (Arrival escorted by cavalry)\n• Lancement de pétales de roses par les filles (Rose petal throw by dancers)\n• Spectacle de l\'homme bleu avec des torches (Blue man torch show)\n• Exposition sur cheval et fantaisie (Horse and fantasy exhibition)\n• Visite de la grotte d\'ali baba (Ali Baba cave visit)\n• Service d\'escorte à votre table (Table escort service)\n• Entrée majestueuse au restaurant (Majestic restaurant entrance)\n\nDuring dinner, enjoy performances from multiple regions:\n• Tiskiwine (Amz Miz)\n• Zayane (Khnifra)\n• Gnawa\n• Kelaa M\'Gouna\n• Ahwache Ouarzazate\n• Imin Tanout\n• Dekka (Marrakech)\n• Ahwache Ourika\n• Ait Ben Haddou (Azilal)\n• Guedra\n\nAfter dinner spectacular performances:\n• Danseuse du ventre (Belly dancer)\n• Spectacle Spectaculaire (Spectacular show)\n• Fantasia Spectaculaire (Spectacular fantasy)\n• Cascadeurs et spectacle de voltige d\'âne (Acrobats and donkey stunts)\n• Enchantement du tapis magique (Magic carpet enchantment)\n• Défilé de toute la troupe folklorique (Folk troupe parade)\n• Spectacle son et lumière (Sound and light show)\n• Coup final des cavaliers (Final cavalry performance)',
    price: '€35 / 350Dhs',
    duration: 'Evening | Departure at 6:00 PM',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Faa7d57cf66844e86870f59a73e628652?format=webp&width=800',
    location: 'Marrakech - Chez Ali',
    inclusions: ['Welcome ceremony', 'Arabian horse performances', 'Regional musical performances', 'Dinner (choice of menu)', 'Dance and acrobat performances', 'Sound and light show', 'Round-trip transport'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2Faa7d57cf66844e86870f59a73e628652?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F4a7e933f980e4a1e885ecda90853113d?format=webp&width=800',
    ],
    variants: [
      {
        id: 'chez-ali-spectacle',
        label: 'Spectacle',
        price: '€35 / 350Dhs',
        description: 'Spectacular show only without dinner',
        duration: '3 hours | Departure at 6:00 PM',
        inclusions: ['Welcome ceremony', 'Arabian horse performances', 'Regional musical performances', 'Dance and acrobat performances', 'Sound and light show', 'Round-trip transport'],
      },
      {
        id: 'chez-ali-dinner-tajine',
        label: 'Spectacle avec dinner tajine',
        price: '€50 / 500Dhs',
        description: 'Show with traditional Moroccan tajine dinner',
        duration: '4 hours | Departure at 6:00 PM',
        inclusions: ['Welcome ceremony', 'Traditional tajine dinner', 'Arabian horse performances', 'Regional musical performances', 'Dance and acrobat performances', 'Sound and light show', 'Round-trip transport'],
      },
      {
        id: 'chez-ali-dinner-mechoui',
        label: 'Spectacle avec dinner Mechoui',
        price: '€70 / 700Dhs',
        description: 'Show with premium Mechoui (roasted lamb) dinner',
        duration: '4 hours | Departure at 6:00 PM',
        inclusions: ['Welcome ceremony', 'Premium Mechoui dinner', 'Arabian horse performances', 'Regional musical performances', 'Dance and acrobat performances', 'Sound and light show', 'Round-trip transport'],
      },
    ],
  },

  // Tours
  {
    id: 'ourika-valley-tour',
    category: 'tour',
    title: 'Ourika Valley – 1 Day',
    shortDescription: 'Discover the stunning Ourika Valley with its waterfalls and traditional Berber villages',
    description: 'Experience the beauty of the Ourika Valley, nestled in the foothills of the Atlas Mountains. Visit traditional Berber villages, explore local markets, and enjoy breathtaking waterfall views.',
    price: '€20 / 200Dhs',
    duration: 'Full day | Departure at 8:30 or 9:00',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fbd3d65f6ab2d4d5cb8b3184523df279d?format=webp&width=800',
    location: 'Ourika Valley',
    inclusions: ['Round-trip transport', 'Professional guide', 'Waterfall visit', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fafbb854a89b3485c971a7de2b8463cf5?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Ff9e05f76ac654b38b5d24759f0fa5e46?format=webp&width=800',
    ],
    priceVariants: [
      { label: 'Adult', price: '€20 / 200Dhs', priceNumeric: 20 },
      { label: 'Child (-7 years)', price: '€10 / 100Dhs', priceNumeric: 10 }
    ],
  },
  {
    id: 'ouzoud-waterfalls-tour',
    category: 'tour',
    title: 'Ouzoud Waterfalls – 1 Day',
    shortDescription: 'Visit Morocco\'s most spectacular waterfalls and see wild monkeys in their natural habitat',
    description: 'Journey to the magnificent Ouzoud Waterfalls, one of North Africa\'s most stunning natural wonders. Enjoy a scenic hike, spot Barbary monkeys, and take a refreshing boat ride at the base of the falls.',
    price: '€30 / 300Dhs',
    duration: 'Full day | Departure at 8:30',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F253dc0b0e0874aad9b1f7e4818963077?format=webp&width=800',
    location: 'Ouzoud',
    inclusions: ['Round-trip transport', 'Professional guide', 'Boat ride', 'Lunch', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F1452e1e03efe40cba2060b6920a3fffd?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F4b7d76de6d784244b8cc7ad1160e1a1f?format=webp&width=800',
    ],
    priceVariants: [
      { label: 'Adult', price: '€30 / 300Dhs', priceNumeric: 30 },
      { label: 'Child (-7 years)', price: '€20 / 200Dhs', priceNumeric: 20 }
    ],
  },
  {
    id: 'essaouira-tour',
    category: 'tour',
    title: 'Essaouira – 1 Day',
    shortDescription: 'Explore the charming coastal city of Essaouira with its historic medina and beautiful beaches',
    description: 'Discover the picturesque port city of Essaouira, a UNESCO World Heritage site. Wander through the historic medina, visit the bustling harbor, and enjoy fresh seafood by the Atlantic Ocean.',
    price: '€25 / 250Dhs',
    duration: 'Full day | Departure at 8:30',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F2e1d2aab1883484ca89bef7324cd8724?format=webp&width=800',
    location: 'Essaouira',
    inclusions: ['Round-trip transport', 'Professional guide', 'Free time in medina', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F59b8dc80a3f74683883ae0fbadf490ce?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F11799ed8575f4d92bc28d21287bce0c9?format=webp&width=800',
    ],
    priceVariants: [
      { label: 'Adult', price: '€25 / 250Dhs', priceNumeric: 25 },
      { label: 'Child (-7 years)', price: '€15 / 150Dhs', priceNumeric: 15 }
    ],
  },
  {
    id: 'ouarzazate-tour',
    category: 'tour',
    title: 'Ouarzazate – 1 Day',
    shortDescription: 'Visit the famous movie studios and the UNESCO-listed fortress of Ait Ben Haddou',
    description: 'Explore the gateway to the Sahara Desert. Visit the ancient kasbah of Ait Ben Haddou, a UNESCO World Heritage site and famous filming location, along with the Atlas Film Studios in Ouarzazate.',
    price: '€30 / 300Dhs',
    duration: 'Full day | Departure at 7:30',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fc4ee61a2987b43c78b70dd120940e4d9?format=webp&width=800',
    location: 'Ouarzazate',
    inclusions: ['Round-trip transport', 'Professional guide', 'Entrance fees', 'Lunch', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fc8a9a9f47ebf49f6ab3b42866a2865d5?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F7506b72e5628401d800527cb86812236?format=webp&width=800',
    ],
    priceVariants: [
      { label: 'Adult', price: '€30 / 300Dhs', priceNumeric: 30 },
      { label: 'Child (-7 years)', price: '€20 / 200Dhs', priceNumeric: 20 }
    ],
  },
  {
    id: 'merzouga-tour',
    category: 'tour',
    title: 'Merzouga Desert – 3 Days / 2 Nights',
    shortDescription: 'Experience the magical Sahara Desert with camel rides and overnight stay in traditional Berber camp',
    description: 'Embark on an unforgettable journey to the spectacular Erg Chebbi dunes of Merzouga. Experience authentic Sahara desert life with camel trekking, stunning sunset and sunrise views, traditional Berber hospitality, and a night under the stars in a desert camp. This 3-day adventure includes visits to the Atlas Mountains, Todra Gorges, and authentic Berber villages along the way.',
    price: 'From €150 / 1500Dhs',
    duration: '3 days / 2 nights | Departure at 7:00',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Feef5e3634cd8406fbe94cdec81d57156?format=webp&width=800',
    location: 'Merzouga - Sahara Desert',
    inclusions: ['Round-trip transport', 'Professional guide', 'Camel trek', 'Breakfast and Dinner', 'Desert camp accommodation', 'Hotel accommodation', 'Sandboarding', 'Photos stop'],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F4a7e933f980e4a1e885ecda90853113d?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fa6e256472ba643f292ff7f54a7c18688?format=webp&width=800',
    ],
    priceVariants: [
      { label: 'Adult', price: '€150 / 1500Dhs', priceNumeric: 150 },
      { label: 'Child (under 10 years)', price: '€100 / 1000Dhs', priceNumeric: 100 }
    ],
  },
  {
    id: 'zagora-tour',
    category: 'tour',
    title: 'Zagora Desert – 2 Days / 1 Night',
    shortDescription: 'A two-day desert adventure from Marrakech to Zagora. Cross the High Atlas Mountains, visit Aït Ben Haddou and Draa Valley, then ride a camel into the dunes for a night under the stars',
    description: 'A two-day desert adventure from Marrakech to Zagora. Cross the High Atlas Mountains, visit Aït Ben Haddou and Draa Valley, then ride a camel into the dunes for a night under the stars. Includes dinner and breakfast at the camp.',
    price: '€100 / 1000Dhs',
    duration: '2 days / 1 night | Departure at 7:00',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F2fda08ffc38342e885108cf40225225f?format=webp&width=800',
    location: 'Zagora - Draa Valley',
    inclusions: [
      'Hotel/riad pickup & drop-off',
      'Air-conditioned minivan',
      '1 night in desert camp (Berber tent)',
      'Sunset & sunrise camel trek',
      'Dinner and breakfast in camp',
      'English/French-speaking driver-guide'
    ],
    exclusions: [
      'Lunches and beverages',
      'Entrance fees (e.g. Aït Ben Haddou, studios)',
      'Tips and personal expenses',
      'Optional tent upgrades'
    ],
    itinerary: [
      {
        day: 'Day 1',
        description: 'Early pickup (7:00–8:00 AM) from your Marrakech hotel/riad. Drive through the High Atlas Mountains (Tizi n\'Tichka pass). Visit Aït Ben Haddou (UNESCO site) and explore the ksar. Continue through Ouarzazate and the Draa Valley. Camel ride at sunset into the Zagora dunes. Dinner and overnight in a Berber camp (music, campfire, stars).'
      },
      {
        day: 'Day 2',
        description: 'Sunrise over dunes + breakfast in camp. Camel ride back to meet transport. Return via Ouarzazate with lunch stop. Arrive in Marrakech late afternoon (~6 PM).'
      }
    ],
    gallery: [
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2F16ab4df749334c5abdcc6632c11b6fb7?format=webp&width=800',
      'https://cdn.builder.io/api/v1/image/assets%2Ff0ef3956f1594dd0bfe19365a1ee323f%2Fe49fcfe412ff464c8d20577c48ac4a3c?format=webp&width=800',
    ],
  },

  {
    id: 'airport-transfer',
    category: 'transportation',
    title: 'Airport Transfer',
    shortDescription: 'Reliable airport pickup and drop-off service',
    description: 'Comfortable and reliable transfer service between Marrakech Airport and your accommodation. Professional drivers, clean vehicles, and punctual service guaranteed.',
    price: '€30 / 300Dhs',
    duration: '30-45 minutes',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F5dd1f8a344bb4a95bd13a7629e92a492?format=webp&width=800',
    location: 'Marrakech Airport',
    inclusions: ['Professional driver', 'Clean comfortable vehicle', 'Meet & greet service', 'Luggage assistance'],
  },
  {
    id: 'city-to-city-transfer',
    category: 'transportation',
    title: 'City-to-City Transfer',
    shortDescription: 'Custom transfer service between Moroccan cities',
    description: 'Comfortable private transfer service between any cities in Morocco. Perfect for traveling to Casablanca, Fes, Essaouira, Agadir, or any other destination. Professional drivers with modern, air-conditioned vehicles ensure a safe and pleasant journey.',
    price: 'Custom Quote',
    duration: 'Variable',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Ff5ae612caa3a43a889240417f0349a86%2F9da8d3d6d9a34a618f4b613860af98f2?format=webp&width=800',
    location: 'Morocco-wide',
    inclusions: ['Professional driver', 'Modern air-conditioned vehicle', 'Flexible departure times', 'Luggage assistance', 'Rest stops included'],
  },

];

export const getServicesByCategory = (category: 'activity' | 'tour' | 'transportation') => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

export const getServicesBySubcategory = (subcategory: string) => {
  return services.filter(service => service.subcategory === subcategory);
};

export const getVariantById = (variantId: string) => {
  for (const service of services) {
    if (service.variants) {
      const variant = service.variants.find(v => v.id === variantId);
      if (variant) {
        return { service, variant };
      }
    }
  }
  return null;
};

export const getFeaturedServices = () => {
  return [
    services.find(s => s.id === 'quad-biking-palm-grove'),
    services.find(s => s.id === 'sahara-desert-3-days'),
    services.find(s => s.id === 'airport-transfer'),
  ].filter(Boolean) as Service[];
};
