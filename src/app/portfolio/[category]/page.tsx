"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useParams, notFound } from "next/navigation";
import {
  GalleryImage,
  PORTFOLIO_CATEGORIES,
  PortfolioCategory,
} from "../../types/portfolio-categories";

// Sample gallery data
import { GALLERY_IMAGES } from "../../types/portfolio-category-images";

export default function CategoryGallery() {
  const params = useParams();
  const category = params.category as string;

  // Validate category exists
  if (!PORTFOLIO_CATEGORIES.some((cat) => cat.slug === category)) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Filter images by category first
  const categoryImages = GALLERY_IMAGES.filter(
    (img) => img.category === category
  );

  const filteredImages =
    selectedFilters.length === 0
      ? categoryImages
      : categoryImages.filter((img) =>
          img.subcategories.some((sub) => selectedFilters.includes(sub))
        );

  // Get subcategories only for this category
  const allSubcategories = Array.from(
    new Set(categoryImages.flatMap((img) => img.subcategories))
  ).sort();

  const toggleFilter = (subcategory: string) => {
    setSelectedFilters((prev) =>
      prev.includes(subcategory)
        ? prev.filter((f) => f !== subcategory)
        : [...prev, subcategory]
    );
  };

  return (
    <main className="min-h-screen bg-white py-20 px-4">
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
                className="object-cover transition-transform duration-300 group-hover:scale-105"
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
