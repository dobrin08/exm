export const PORTFOLIO_CATEGORIES = [
  {
    title: "Wedding Photography",
    description: "Capturing love stories and celebrations",
    image: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg",
    subcategories: ["Ceremonies", "Receptions", "Engagements", "Pre-wedding"],
    slug: "wedding",
  },
  {
    title: "Portrait Photography",
    description: "Professional and personal portraiture",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
    subcategories: ["Individual", "Family", "Corporate", "Headshots"],
    slug: "portrait",
  },
  {
    title: "Fashion & Editorial",
    description: "High-end fashion and magazine-style shoots",
    image: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg",
    subcategories: ["Editorial", "Runway", "Lookbooks", "Street Style"],
    slug: "fashion",
  },
  {
    title: "Event Photography",
    description: "Corporate and social event coverage",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    subcategories: ["Corporate Events", "Concerts", "Parties", "Conferences"],
    slug: "events",
  },
  {
    title: "Architecture & Interior",
    description: "Spaces and structures in their best light",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    subcategories: ["Commercial", "Residential", "Industrial", "Aerial"],
    slug: "architecture",
  },
  {
    title: "Nature & Landscape",
    description: "Capturing the beauty of the natural world",
    image: "https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg",
    subcategories: ["Landscapes", "Wildlife", "Macro", "Weather"],
    slug: "nature",
  },
  {
    title: "Fine Art Photography",
    description: "Artistic and conceptual pieces",
    image: "https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg",
    subcategories: ["Abstract", "Black & White", "Conceptual", "Experimental"],
    slug: "fine-art",
  },
  {
    title: "Commercial Photography",
    description: "Product and brand photography",
    image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg",
    subcategories: ["Product", "Food", "Real Estate", "Advertising"],
    slug: "commercial",
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
  category: PortfolioCategory;
}
