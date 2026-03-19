import Image from "next/image";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "../types/service-categories";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-base">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
          alt="Photography Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-display mb-4">Our Services</h1>
          <p className="text-xl font-body max-w-2xl text-center">
            Professional photography services tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((service, index) => (
              <div
                key={index}
                className="group bg-surface border border-subtle hover:border-secondary/30 overflow-hidden transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display mb-2">{service.title}</h3>
                  <p className="text-secondary font-body mb-8">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block w-full text-center text-[11px] tracking-[0.12em] uppercase bg-accent text-accent-contrast px-6 py-3 hover:bg-accent/90 transition-colors cursor-pointer"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-base-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display mb-6 text-primary">Ready to Get Started?</h2>
          <p className="text-secondary font-body mb-8">
            Let&rsquo;s discuss your photography needs and create something amazing
            together.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[11px] tracking-[0.12em] uppercase bg-accent text-accent-contrast px-8 py-3 hover:bg-accent/90 transition-colors cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
