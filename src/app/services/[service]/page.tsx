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
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-display text-white">{service.title}</h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-4 bg-base">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-secondary font-body">{service.description}</p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-base-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-16 text-primary">Packages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.packages.map((pkg, index) => (
              <div key={index} className="bg-surface border border-subtle p-8">
                <h3 className="text-2xl font-display mb-4 text-primary">{pkg.name}</h3>
                <p className="text-3xl font-display mb-8 text-primary">{pkg.price}</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-secondary font-body">
                      <span className="w-1 h-1 rounded-full bg-subtle mr-3 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center text-[11px] tracking-[0.12em] uppercase bg-accent text-accent-contrast px-6 py-3 mt-8 hover:bg-accent/90 transition-colors cursor-pointer"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-base">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-16 text-primary">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent text-accent-contrast flex items-center justify-center text-xl font-body mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-display mb-2 text-primary">{step.title}</h3>
                <p className="text-secondary font-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-base-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display text-center mb-16 text-primary">Gallery</h2>
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
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-lg font-body">{image.alt}</p>
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
