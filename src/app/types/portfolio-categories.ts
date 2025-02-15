interface PortfolioCategoryType {
  title: string;
  description: string;
  image: string;
  subcategories: string[];
  slug: string;
  images?: GalleryImage[];
  priority?: boolean;
}

export const PORTFOLIO_CATEGORIES: PortfolioCategoryType[] = [
  {
    title: "Wedding Photography",
    description: "Capturing love stories and celebrations",
    image: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg",
    subcategories: ["Ceremonies", "Receptions", "Engagements", "Pre-wedding"],
    slug: "wedding",
    priority: true,
    images: [
      {
        src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
        width: 1920,
        height: 1280,
        title: "Autumn Wedding",
        description: "Beautiful autumn wedding ceremony in the park",
        subcategories: ["Ceremonies"],
      },
      {
        src: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
        width: 1920,
        height: 1280,
        title: "Beach Wedding",
        description: "Romantic sunset beach wedding",
        subcategories: ["Ceremonies"],
      },
      {
        src: "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg",
        width: 1920,
        height: 1280,
        title: "Wedding Reception",
        description: "Elegant indoor wedding reception",
        subcategories: ["Receptions"],
      },
      {
        src: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
        width: 1920,
        height: 1280,
        title: "Engagement Session",
        description: "Urban engagement photoshoot",
        subcategories: ["Receptions"],
      },
      {
        src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
        width: 1920,
        height: 1280,
        title: "Wedding Details",
        description: "Wedding rings and decorations",
        subcategories: ["Engagements"],
      },
      {
        src: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg",
        width: 1920,
        height: 1280,
        title: "First Dance",
        description: "Newlyweds first dance moment",
        subcategories: ["Engagements"],
      },
      {
        src: "https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg",
        width: 1920,
        height: 1280,
        title: "Bridal Preparation",
        description: "Bride getting ready for ceremony",
        subcategories: ["Pre-wedding"],
      },
      {
        src: "https://images.pexels.com/photos/2959188/pexels-photo-2959188.jpeg",
        width: 1920,
        height: 1280,
        title: "Wedding Party",
        description: "Bridesmaids and groomsmen group photo",
        subcategories: ["Pre-wedding"],
      },
      {
        src: "https://images.pexels.com/photos/3650469/pexels-photo-3650469.jpeg",
        width: 1920,
        height: 1280,
        title: "Destination Wedding",
        description: "Exotic destination wedding ceremony",
        subcategories: ["Pre-wedding"],
      },
    ]
  },
  {
    title: "Portrait Photography",
    description: "Professional and personal portraiture",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
    subcategories: ["Individual", "Family", "Corporate", "Headshots"],
    slug: "portrait",
    priority: true,
    images: [
      {
        src: "https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg",
        width: 1920,
        height: 1280,
        title: "Corporate Portrait",
        description: "Professional headshot for business profile",
        subcategories: ["Corporate", "Headshots"],
      },
      {
        src: "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg",
        width: 1920,
        height: 1280,
        description: "Fashion week runway show in Paris",
        subcategories: ["Corporate"],
      },
      {
        src: "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
        width: 1920,
        height: 1280,
        description: "Annual tech conference keynote",
        subcategories: ["Headshots"],
      },
      {
        src: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
        width: 1920,
        height: 1280,
        title: "Modern Architecture",
        subcategories: ["Individual"],
      },
      {
        src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg",
        width: 1920,
        height: 1280,
        title: "Family Portrait",
        description: "Outdoor family portrait session",
        subcategories: ["Family"],
      },
      {
        src: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg",
        width: 1920,
        height: 1280,
        title: "Corporate Headshots",
        description: "Professional studio headshots",
        subcategories: ["Individual", "Corporate"],
      },
    ]
  },
  {
    title: "Fashion & Editorial",
    description: "High-end fashion and magazine-style shoots",
    image: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg",
    subcategories: ["Editorial", "Runway", "Lookbooks", "Street Style"],
    slug: "fashion",
    priority: true,
    images: [
      {
        src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
        width: 1920,
        height: 1280,
        title: "Fashion Editorial",
        description: "High fashion magazine shoot",
        subcategories: ["Editorial", "Lookbooks"],
      },
      {
        src: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg",
        width: 1920,
        height: 1280,
        title: "Runway Show",
        description: "Fashion week catwalk",
        subcategories: ["Runway", "Street Style"],
      },
      {
        src: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
        width: 1920,
        height: 1280,
        title: "Street Style",
        description: "Urban fashion photography",
        subcategories: ["Street Style"],
      },
    ]
  },
  {
    title: "Event Photography",
    description: "Corporate and social event coverage",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    subcategories: ["Corporate Events", "Concerts", "Parties", "Conferences"],
    slug: "events",
    images: [
      {
        src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
        width: 1920,
        height: 1280,
        title: "Concert Photography",
        description: "Live music performance",
        subcategories: ["Concerts", "Parties"],
      },
      {
        src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
        width: 1920,
        height: 1280,
        title: "Corporate Conference",
        description: "Annual business conference",
        subcategories: ["Corporate Events"],
      },
    ]
  },
  {
    title: "Architecture & Interior",
    description: "Spaces and structures in their best light",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    subcategories: ["Commercial", "Residential", "Industrial", "Aerial"],
    slug: "architecture",
    images: [
      {
        src: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
        width: 1920,
        height: 1280,
        title: "Modern Office Building",
        description: "Contemporary architecture",
        subcategories: ["Commercial", "Industrial"],
      },
      {
        src: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
        width: 1920,
        height: 1280,
        title: "Luxury Interior",
        description: "High-end residential interior",
        subcategories: ["Aerial"],
      },
    ]
  },
  {
    title: "Nature & Landscape",
    description: "Capturing the beauty of the natural world",
    image: "https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg",
    subcategories: ["Landscapes", "Wildlife", "Macro", "Weather"],
    slug: "nature",
    images: [
      {
        src: "https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg",
        width: 1920,
        height: 1280,
        title: "Mountain Landscape",
        description: "Dramatic mountain vista",
        subcategories: ["Landscapes", "Weather"],
      },
      {
        src: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
        width: 1920,
        height: 1280,
        title: "Wildlife Photography",
        description: "Wild animals in natural habitat",
        subcategories: ["Macro"],
      },
    ]
  },
  {
    title: "Fine Art Photography",
    description: "Artistic and conceptual pieces",
    image: "https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg",
    subcategories: ["Abstract", "Black & White", "Conceptual", "Experimental"],
    slug: "fine-art",
    images: [
      {
        src: "https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg",
        width: 1920,
        height: 1280,
        title: "Abstract Art",
        description: "Creative abstract photography",
        subcategories: ["Abstract", "Experimental"],
      },
      {
        src: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
        width: 1920,
        height: 1280,
        title: "Black & White Portrait",
        description: "Artistic monochrome portrait",
        subcategories: ["Conceptual"],
      },
    ]
  },
  {
    title: "Commercial Photography",
    description: "Product and brand photography",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg",
    subcategories: ["Product", "Food", "Real Estate", "Advertising"],
    slug: "commercial",
    images: [
      {
        src: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg",
        width: 1920,
        height: 1280,
        title: "Product Photography",
        description: "Commercial product shoot",
        subcategories: ["Product", "Advertising"],
      },
      {
        src: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
        width: 1920,
        height: 1280,
        title: "Food Photography",
        description: "Gourmet food styling",
        subcategories: ["Product", "Food"],
      },
    ]
  },
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number]["slug"];

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
  subcategories: string[];
}

// Get all images for a specific category
export function getCategoryImages(category: PortfolioCategory): GalleryImage[] {
  const categoryData = PORTFOLIO_CATEGORIES.find(cat => cat.slug === category);
  return categoryData?.images || [];
}

// Get all available subcategories for a category
export function getCategorySubcategories(category: PortfolioCategory): string[] {
  const categoryData = PORTFOLIO_CATEGORIES.find(cat => cat.slug === category);
  return categoryData?.subcategories || [];
}
