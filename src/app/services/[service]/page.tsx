"use client";

import { use, useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getServiceBySlug } from "../../types/service-categories";
import LoadingMask from "../../components/LoadingMask";

type Params = Promise<{ service: string }>

export default function ServicePage(props: { params: Params }) {
  const params = use(props.params);
  const service = getServiceBySlug(params.service);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (!service) {
    notFound();
  }

  // Handle image load completion
  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      const newCount = prev + 1;
      // Count hero image + gallery images
      if (newCount === service.gallery.length + 1) {
        setIsLoading(false);
      }
      return newCount;
    });
  };

  // Reset loading state when service changes
  useEffect(() => {
    setImagesLoaded(0);
  }, [service]);

  return (
    <main className="min-h-screen">
      <LoadingMask isLoading={isLoading} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          onLoad={handleImageLoad}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-light text-white">{service.title}</h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600">{service.description}</p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Packages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.packages.map((pkg, index) => (
              <div key={index} className="bg-white p-8 shadow-lg rounded-lg">
                <h3 className="text-2xl font-light mb-4">{pkg.name}</h3>
                <p className="text-3xl mb-8">{pkg.price}</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center bg-black text-white px-6 py-3 mt-8 hover:bg-gray-800 transition-colors rounded"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.gallery.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-square group cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onLoad={handleImageLoad}
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-lg">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          <Lightbox
            open={selectedImage !== null}
            close={() => setSelectedImage(null)}
            index={selectedImage || 0}
            slides={service.gallery.map((img) => ({
              src: img.src,
              alt: img.alt,
            }))}
          />
        </div>
      </section>
    </main>
  );
}
