export const SERVICES = {
  wedding: {
    title: "Wedding Photography",
    hero: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg",
    description:
      "Your wedding day is one of the most important days of your life. Let us capture every precious moment with our professional wedding photography services.",
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
      // Add more images
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We'll discuss your vision, style preferences, and wedding details",
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
  // Add other services...
};
