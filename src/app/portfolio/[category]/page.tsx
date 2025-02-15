"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useParams, notFound } from "next/navigation";
import {
  PORTFOLIO_CATEGORIES,
  PortfolioCategory,
  getCategoryImages,
  getCategorySubcategories,
} from "../../types/portfolio-categories";
import LoadingMask from "../../components/LoadingMask";

export default function CategoryGallery() {
  const params = useParams();
  const category = params.category as string;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Validate category exists
  if (!PORTFOLIO_CATEGORIES.some((cat) => cat.slug === category)) {
    notFound();
  }

  const categoryImages = getCategoryImages(category as PortfolioCategory);

  const filteredImages =
    selectedFilters.length === 0
      ? categoryImages
      : categoryImages.filter((img) =>
          img.subcategories.some((sub) => selectedFilters.includes(sub))
        );

  // Handle image load completion
  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;

      if (newCount === filteredImages.length) {
        setIsLoading(false);
      }

      return newCount;
    });
  };

  // Reset loading state when filters change
  useEffect(() => {
    setImagesLoaded(0);
  }, [selectedFilters]);

  // Get subcategories for this category
  const allSubcategories = getCategorySubcategories(category as PortfolioCategory);

  const toggleFilter = (subcategory: string) => {
    setSelectedFilters((prev) =>
      prev.includes(subcategory)
        ? prev.filter((f) => f !== subcategory)
        : [...prev, subcategory]
    );
  };

  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <LoadingMask isLoading={isLoading} />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-light text-center mb-12 capitalize">
          {category.replace("-", " ")} Photography
        </h1>

        {/* Filter Tags */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {allSubcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => toggleFilter(subcategory)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedFilters.includes(subcategory)
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.title || "Gallery image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onLoad={handleImageLoad}
                priority={index < 6}
              />
              {image.title && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-lg">{image.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={selectedImage !== null}
          close={() => setSelectedImage(null)}
          index={selectedImage || 0}
          slides={filteredImages.map((img) => ({
            src: img.src,
            description: img.description,
            title: img.title,
          }))}
        />
      </div>
    </main>
  );
}
