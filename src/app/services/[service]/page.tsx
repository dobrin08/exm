import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "../../types/services";

export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = SERVICES[params.service as keyof typeof SERVICES];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={service.hero}
          alt={service.title}
          fill
          className="object-cover"
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
              <div key={index} className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
