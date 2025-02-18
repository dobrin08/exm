interface ServicePackage {
  name: string;
  price: string;
  features: string[];
}

interface ProcessStep {
  title: string;
  description: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  link: string;
  packages: ServicePackage[];
  gallery: GalleryImage[];
  process: ProcessStep[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "wedding",
    title: "Wedding Photography",
    description: "Capturing your special moments with elegance and emotion. Full day coverage, engagement sessions, and custom albums.",
    image: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg",
    price: "from $2,500",
    features: [
      "Full Day Coverage",
      "Second Photographer",
      "Digital Gallery",
      "Custom Album",
    ],
    link: "/services/wedding",
    packages: [
      {
        name: "Essential",
        price: "$2,500",
        features: [
          "8 Hours Coverage",
          "1 Photographer",
          "Online Gallery",
          "200+ Edited Photos",
          "Print Release",
        ],
      },
      {
        name: "Premium",
        price: "$3,500",
        features: [
          "10 Hours Coverage",
          "2 Photographers",
          "Engagement Session",
          "Online Gallery",
          "400+ Edited Photos",
          "Wedding Album",
          "Print Release",
        ],
      },
    ],
    gallery: [
      {
        src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
        alt: "Wedding ceremony",
      },
      {
        src: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
        alt: "Beach wedding",
      },
      {
        src: "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg",
        alt: "Wedding reception",
      },
      {
        src: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
        alt: "Engagement session",
      },
      {
        src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
        alt: "Wedding details",
      },
      {
        src: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg",
        alt: "First dance",
      },
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "We'll discuss your vision, style preferences, and wedding details",
      },
      {
        title: "Booking & Planning",
        description: "Reserve your date and plan the photography timeline",
      },
      {
        title: "The Big Day",
        description: "Professional coverage of your special day",
      },
      {
        title: "Editing & Delivery",
        description: "Receive your beautifully edited photos within 4-6 weeks",
      },
    ],
  },
  {
    slug: "portrait",
    title: "Portrait Sessions",
    description: "Professional portraits that tell your story. Perfect for individuals, families, and corporate headshots.",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
    price: "from $300",
    features: [
      "1-2 Hour Session",
      "Multiple Outfits",
      "Retouched Photos",
      "Digital Delivery",
    ],
    link: "/services/portrait",
    packages: [
      {
        name: "Basic",
        price: "$300",
        features: [
          "1 Hour Session",
          "2 Outfit Changes",
          "10 Edited Photos",
          "Digital Delivery",
          "Print Release",
        ],
      },
      {
        name: "Premium",
        price: "$500",
        features: [
          "2 Hour Session",
          "4 Outfit Changes",
          "20 Edited Photos",
          "Digital Delivery",
          "Print Release",
          "Professional Retouching",
        ],
      },
    ],
    gallery: [
      {
        src: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
        alt: "Professional headshot",
      },
      {
        src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        alt: "Family portrait",
      },
      {
        src: "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg",
        alt: "Corporate portrait",
      },
      {
        src: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg",
        alt: "Outdoor portrait",
      },
      {
        src: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
        alt: "Studio portrait",
      },
      {
        src: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        alt: "Lifestyle portrait",
      },
    ],
    process: [
      {
        title: "Consultation",
        description: "Discuss your vision and plan the perfect portrait session",
      },
      {
        title: "Session Prep",
        description: "Tips for outfits, locations, and making the most of your session",
      },
      {
        title: "Photo Session",
        description: "Relaxed and fun portrait session at your chosen location",
      },
      {
        title: "Delivery",
        description: "Receive your beautifully edited photos within 1-2 weeks",
      },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial & Branding",
    description: "Elevate your brand with professional product and corporate photography.",
    image: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg",
    price: "from $800",
    features: [
      "Product Photography",
      "Team Headshots",
      "Location Shoots",
      "Commercial License",
    ],
    link: "/services/commercial",
    packages: [
      {
        name: "Basic Commercial",
        price: "$800",
        features: [
          "Half Day Shoot",
          "Product Photography",
          "Basic Retouching",
          "10 Final Images",
          "Commercial License",
        ],
      },
      {
        name: "Premium Commercial",
        price: "$1,500",
        features: [
          "Full Day Shoot",
          "Product & Team Photos",
          "Advanced Retouching",
          "25 Final Images",
          "Commercial License",
          "Rush Delivery",
        ],
      },
    ],
    gallery: [
      {
        src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        alt: "Product photography",
      },
      {
        src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
        alt: "Team headshots",
      },
      {
        src: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
        alt: "Corporate branding",
      },
      {
        src: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
        alt: "Office environment",
      },
      {
        src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
        alt: "Product lifestyle",
      },
      {
        src: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg",
        alt: "Corporate event",
      },
    ],
    process: [
      {
        title: "Brand Discovery",
        description: "Understanding your brand and photography needs",
      },
      {
        title: "Planning",
        description: "Detailed shot list and location scouting",
      },
      {
        title: "Production",
        description: "Professional photo shoot with attention to detail",
      },
      {
        title: "Delivery",
        description: "Polished images ready for your marketing needs",
      },
    ],
  },
  {
    slug: "events",
    title: "Events & Celebrations",
    description: "Document your special occasions with style. Corporate events, parties, and celebrations.",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    price: "from $600",
    features: [
      "Event Coverage",
      "Quick Turnaround",
      "Online Gallery",
      "Print Options",
    ],
    link: "/services/events",
    packages: [
      {
        name: "Basic Event",
        price: "$600",
        features: [
          "3 Hours Coverage",
          "1 Photographer",
          "100 Edited Photos",
          "Online Gallery",
          "Quick Delivery",
        ],
      },
      {
        name: "Premium Event",
        price: "$1,200",
        features: [
          "6 Hours Coverage",
          "2 Photographers",
          "200 Edited Photos",
          "Online Gallery",
          "Same-Day Preview",
          "Rush Delivery",
        ],
      },
    ],
    gallery: [
      {
        src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
        alt: "Corporate conference",
      },
      {
        src: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg",
        alt: "Birthday celebration",
      },
      {
        src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
        alt: "Company party",
      },
      {
        src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
        alt: "Award ceremony",
      },
      {
        src: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
        alt: "Networking event",
      },
      {
        src: "https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg",
        alt: "Social gathering",
      },
    ],
    process: [
      {
        title: "Event Brief",
        description: "Discuss event details and coverage requirements",
      },
      {
        title: "Planning",
        description: "Create timeline and shot list for the event",
      },
      {
        title: "Coverage",
        description: "Professional event documentation",
      },
      {
        title: "Quick Delivery",
        description: "Rapid turnaround of edited photos",
      },
    ],
  },
  {
    slug: "fashion",
    title: "Fashion & Editorial",
    description: "Creative fashion photography for models, designers, and publications.",
    image: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg",
    price: "from $1,000",
    features: [
      "Studio/Location",
      "Styling Support",
      "Retouching",
      "Usage Rights",
    ],
    link: "/services/fashion",
    packages: [
      {
        name: "Editorial Basic",
        price: "$1,000",
        features: [
          "Half Day Shoot",
          "Studio Location",
          "Basic Styling",
          "10 Retouched Images",
          "Digital Usage Rights",
        ],
      },
      {
        name: "Editorial Premium",
        price: "$2,000",
        features: [
          "Full Day Shoot",
          "Multiple Locations",
          "Professional Styling",
          "20 Retouched Images",
          "Full Usage Rights",
          "Behind-the-Scenes",
        ],
      },
    ],
    gallery: [
      {
        src: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg",
        alt: "Fashion editorial",
      },
      {
        src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
        alt: "Studio fashion",
      },
      {
        src: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg",
        alt: "Runway photography",
      },
      {
        src: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
        alt: "Street style",
      },
      {
        src: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
        alt: "Editorial shoot",
      },
      {
        src: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg",
        alt: "Fashion portrait",
      },
    ],
    process: [
      {
        title: "Creative Brief",
        description: "Define the creative direction and requirements",
      },
      {
        title: "Pre-Production",
        description: "Location scouting, styling, and team coordination",
      },
      {
        title: "Shoot Day",
        description: "Professional fashion photography session",
      },
      {
        title: "Post-Production",
        description: "High-end retouching and image delivery",
      },
    ],
  },
  {
    slug: "fine-art",
    title: "Fine Art & Prints",
    description: "Beautiful fine art prints for your home or office. Landscape and artistic photography.",
    image: "https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg",
    price: "from $200",
    features: [
      "Custom Sizes",
      "Premium Papers",
      "Framing Options",
      "Limited Editions",
    ],
    link: "/services/fine-art",
    packages: [
      {
        name: "Standard Print",
        price: "$200",
        features: [
          "Up to 16x20 Size",
          "Archival Paper",
          "Certificate of Authenticity",
          "Signed Print",
          "Mounting Options",
        ],
      },
      {
        name: "Collector's Edition",
        price: "$500",
        features: [
          "Up to 30x40 Size",
          "Museum-Grade Paper",
          "Limited Edition",
          "Signed & Numbered",
          "Custom Framing",
          "White Glove Delivery",
        ],
      },
    ],
    gallery: [
      {
        src: "https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg",
        alt: "Abstract art",
      },
      {
        src: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
        alt: "Black & white art",
      },
      {
        src: "https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg",
        alt: "Landscape art",
      },
      {
        src: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
        alt: "Nature art",
      },
      {
        src: "https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg",
        alt: "Fine art print",
      },
      {
        src: "https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg",
        alt: "Abstract composition",
      },
    ],
    process: [
      {
        title: "Art Selection",
        description: "Choose from our curated collection or commission a piece",
      },
      {
        title: "Customization",
        description: "Select size, paper, and framing options",
      },
      {
        title: "Production",
        description: "Fine art printing with attention to detail",
      },
      {
        title: "Delivery",
        description: "Careful packaging and white glove delivery service",
      },
    ],
  },
];

export type ServiceCategoryItem = (typeof SERVICE_CATEGORIES)[number]["slug"];

export function getServiceBySlug(slug: ServiceCategoryItem) {
  return SERVICE_CATEGORIES.find(
    service => service.link === `/services/${slug}`
  );
}
