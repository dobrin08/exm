import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
          alt="Featured photography work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-light mb-4">JOHN DOE</h1>
          <p className="text-xl">CAPTURING MOMENTS | CREATING MEMORIES</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-8">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            With over a decade of experience capturing life&rsquo;s most precious
            moments, I specialize in wedding, portrait, and landscape
            photography. My style combines natural light with creative
            composition to tell your unique story.
          </p>
        </div>
      </section>

      {/* Portfolio Preview Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg",
                alt: "Wedding photography",
              },
              {
                src: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
                alt: "Portrait photography",
              },
              {
                src: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
                alt: "Cityscape photography",
              },
              {
                src: "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
                alt: "Event photography",
              },
              {
                src: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg",
                alt: "Fashion photography",
              },
              {
                src: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
                alt: "Wildlife photography",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative aspect-square group overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-light text-center mb-4">Services</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Professional photography services tailored to your needs, delivering
            exceptional quality and memorable experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Photography",
                description:
                  "Capturing your special moments with elegance and emotion. Full day coverage, engagement sessions, and custom albums.",
                price: "from $2,500",
                features: [
                  "Full Day Coverage",
                  "Second Photographer",
                  "Digital Gallery",
                  "Custom Album",
                ],
                link: "/services/wedding",
              },
              {
                title: "Portrait Sessions",
                description:
                  "Professional portraits that tell your story. Perfect for individuals, families, and corporate headshots.",
                price: "from $300",
                features: [
                  "1-2 Hour Session",
                  "Multiple Outfits",
                  "Retouched Photos",
                  "Digital Delivery",
                ],
                link: "/services/portrait",
              },
              {
                title: "Commercial & Branding",
                description:
                  "Elevate your brand with professional product and corporate photography.",
                price: "from $800",
                features: [
                  "Product Photography",
                  "Team Headshots",
                  "Location Shoots",
                  "Commercial License",
                ],
                link: "/services/commercial",
              },
              {
                title: "Events & Celebrations",
                description:
                  "Document your special occasions with style. Corporate events, parties, and celebrations.",
                price: "from $600",
                features: [
                  "Event Coverage",
                  "Quick Turnaround",
                  "Online Gallery",
                  "Print Options",
                ],
                link: "/services/events",
              },
              {
                title: "Fashion & Editorial",
                description:
                  "Creative fashion photography for models, designers, and publications.",
                price: "from $1,000",
                features: [
                  "Studio/Location",
                  "Styling Support",
                  "Retouching",
                  "Usage Rights",
                ],
                link: "/services/fashion",
              },
              {
                title: "Fine Art & Prints",
                description:
                  "Beautiful fine art prints for your home or office. Landscape and artistic photography.",
                price: "from $200",
                features: [
                  "Custom Sizes",
                  "Premium Papers",
                  "Framing Options",
                  "Limited Editions",
                ],
                link: "/services/fine-art",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 hover:border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
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

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-block border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "An amazing photographer who captured our wedding perfectly!",
                author: "Sarah & Mike",
              },
              {
                text: "Professional, creative, and a joy to work with!",
                author: "Emily Johnson",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-white shadow-md">
                <p className="italic mb-4">{testimonial.text}</p>
                <p className="font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-8">Let&rsquo;s Work Together</h2>
          <p className="text-gray-600 mb-8">
            I&rsquo;m currently available for bookings and would love to discuss your
            project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
