"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Home() {
  const featuredWork = [
    {
      src: "https://images.pexels.com/photos/1244627/pexels-photo-1244627.jpeg",
      alt: "Wedding photography",
      label: "Weddings",
    },
    {
      src: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
      alt: "Portrait photography",
      label: "Portraits",
    },
    {
      src: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
      alt: "Cityscape photography",
      label: "Architecture",
    },
    {
      src: "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg",
      alt: "Event photography",
      label: "Events",
    },
    {
      src: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg",
      alt: "Fashion photography",
      label: "Fashion",
    },
    {
      src: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
      alt: "Fine art photography",
      label: "Fine Art",
    },
  ];

  const services = [
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
  ];

  const testimonials = [
    {
      text: "John has an extraordinary eye for detail. He captured our wedding day with such artistry that every image feels like a painting. Truly unforgettable work.",
      author: "Sarah & Mike",
      context: "Wedding, Summer 2024",
    },
    {
      text: "Professional, creative, and incredibly intuitive. He understood exactly the mood we wanted for our brand campaign before we could even articulate it.",
      author: "Emily Johnson",
      context: "Commercial Campaign",
    },
    {
      text: "Working with John elevated our editorial to a level we didn&rsquo;t think was possible. His command of light and shadow is masterful.",
      author: "Vogue Italia",
      context: "Fashion Editorial",
    },
  ];

  return (
    <main className="min-h-screen bg-base">
      {/* ═══ HERO ═══ */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
          alt="Featured photography work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-display text-6xl md:text-7xl lg:text-8xl text-white mb-4"
            >
              John Doe
            </motion.h1>
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="w-10 h-[1.5px] bg-white/40 mx-auto mb-4"
            />
            <motion.p
              variants={fadeUp}
              custom={0.4}
              className="text-[13px] tracking-[0.25em] uppercase text-white/70"
            >
              Photography
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-6 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-28 md:py-36 px-6 bg-base">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-[11px] tracking-[0.2em] uppercase text-muted mb-8"
          >
            About
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-lg md:text-xl leading-relaxed text-secondary"
          >
            With over a decade of experience capturing life&rsquo;s most
            extraordinary moments, I specialize in wedding, portrait, and
            editorial photography. My approach merges natural light with
            considered composition to craft images that are both timeless and
            deeply personal.
          </motion.p>
          <motion.div variants={fadeUp} custom={0.3}>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 mt-8 text-[12px] tracking-[0.12em] uppercase text-secondary hover:text-primary transition-colors duration-200 group cursor-pointer"
            >
              <span>Read More</span>
              <span className="inline-block w-5 h-[1px] bg-subtle group-hover:w-8 group-hover:bg-secondary transition-all duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ FEATURED WORK ═══ */}
      <section className="py-28 md:py-36 px-6 bg-base-alt">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] tracking-[0.2em] uppercase text-muted mb-6"
            >
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-display text-4xl md:text-5xl text-primary"
            >
              Featured Work
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {featuredWork.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative aspect-[4/5] group overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-white">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Link
                href="/portfolio"
                className="inline-block text-[12px] tracking-[0.15em] uppercase text-secondary hover:text-primary border-b border-subtle hover:border-primary pb-1 transition-all duration-200 cursor-pointer"
              >
                View All Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-28 md:py-36 px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] tracking-[0.2em] uppercase text-muted mb-6"
            >
              Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-display text-4xl md:text-5xl text-primary"
            >
              What I Offer
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mt-5 text-secondary max-w-lg mx-auto leading-relaxed"
            >
              Professional photography services tailored to your vision,
              delivering exceptional quality and memorable experiences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group bg-surface border border-subtle hover:border-secondary/30 p-8 transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="font-display text-xl text-primary mb-5">
                  {service.price}
                </p>
                <ul className="space-y-2 mb-7">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-secondary"
                    >
                      <span className="w-1 h-1 rounded-full bg-subtle mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="block w-full text-center text-[11px] tracking-[0.12em] uppercase py-3 border border-subtle text-secondary hover:bg-accent hover:text-accent-contrast hover:border-accent transition-all duration-200 cursor-pointer"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Link
                href="/services"
                className="inline-block text-[12px] tracking-[0.15em] uppercase border border-accent text-accent px-10 py-3 hover:bg-accent hover:text-accent-contrast transition-all duration-200 cursor-pointer"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-28 md:py-36 px-6 bg-base-alt">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[11px] tracking-[0.2em] uppercase text-muted mb-6"
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="font-display text-4xl md:text-5xl text-primary"
            >
              Kind Words
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-surface border border-subtle p-8"
              >
                <span className="block font-display text-4xl text-subtle leading-none mb-4">
                  &ldquo;
                </span>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="w-5 h-[1.5px] bg-subtle mb-3" />
                <p className="text-xs font-medium tracking-wide text-primary">
                  {testimonial.author}
                </p>
                <p className="text-muted text-xs mt-1">
                  {testimonial.context}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-32 md:py-40 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 max-w-xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-display text-4xl md:text-5xl text-white mb-5"
          >
            Let&rsquo;s Work Together
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.25}
            className="text-white/60 mb-10 leading-relaxed"
          >
            I&rsquo;m currently available for bookings and would love to discuss
            your next project.
          </motion.p>
          <motion.div variants={fadeUp} custom={0.4}>
            <Link
              href="/contact"
              className="inline-block text-[12px] tracking-[0.15em] uppercase bg-white text-primary px-10 py-3.5 hover:bg-white/90 transition-colors duration-200 cursor-pointer"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
