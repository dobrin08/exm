import Image from "next/image";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "../types/service-categories";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
          alt="Photography Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl text-center">
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
                className="group bg-white border border-gray-100 hover:border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-xl font-light mb-6">{service.price}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-block w-full text-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors rounded"
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let&rsquo;s discuss your photography needs and create something amazing
            together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
