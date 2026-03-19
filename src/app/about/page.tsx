'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  {
    number: '10+',
    label: 'Years of Photography',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=100&h=100'
  },
  {
    number: '500+',
    label: 'Happy Clients',
    image: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=100&h=100'
  },
  {
    number: '15+',
    label: 'Photography Awards',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=100&h=100'
  },
];

const specialties = [
  'Portrait Photography',
  'Wedding Photography',
  'Landscape',
  'Event Coverage',
  'Fashion Photography',
  'Commercial',
];

const featuredWork = [
  {
    title: 'Wedding Collections',
    description: 'Capturing beautiful moments of love and celebration...',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=500',
  },
  {
    title: 'Portrait Series',
    description: 'Professional portraits that tell your unique story...',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-base min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-28 text-center"
      >
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-body mb-4">
          The Artist
        </p>
        <h1 className="font-display text-5xl text-primary mb-6">About Me</h1>
        <p className="text-lg text-secondary font-body max-w-3xl mx-auto">
          A passionate photographer dedicated to capturing life&rsquo;s most precious moments
          through the lens of artistic vision and technical excellence.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface p-6 border border-subtle text-center cursor-pointer"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div className="text-3xl font-bold text-primary font-body mb-2">{stat.number}</div>
              <div className="text-secondary font-body">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Alternating Sections */}
      <section className="max-w-7xl mx-auto px-4 space-y-32 pb-20">
        {/* My Journey Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-body mb-3">
              Background
            </p>
            <h2 className="text-3xl font-display text-primary mb-6">My Journey</h2>
            <p className="text-secondary font-body mb-6">
              My passion for photography began over a decade ago, inspired by the
              desire to capture the beauty in everyday moments. From weddings to
              portraits, I&rsquo;ve had the privilege of telling countless stories through
              my lens.
            </p>
            <div className="flex flex-wrap gap-3">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-base-alt text-primary font-body px-3 py-1 text-sm cursor-pointer"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=500"
              alt="Photographer at work"
              width={500}
              height={400}
              className="border border-subtle object-cover"
            />
          </div>
        </motion.div>

        {/* Featured Work Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="flex-1">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-body mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl font-display text-primary mb-6">Featured Work</h2>
            <div className="space-y-4">
              {featuredWork.map((work, index) => (
                <div key={index} className="mb-4 cursor-pointer">
                  <h3 className="text-xl font-body text-primary mb-2">{work.title}</h3>
                  <p className="text-secondary font-body">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=500"
              alt="Featured Photography Work"
              width={500}
              height={400}
              className="border border-subtle object-cover"
            />
          </div>
        </motion.div>

        {/* Equipment Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-body mb-3">
              Tools of the Trade
            </p>
            <h2 className="text-3xl font-display text-primary mb-6">My Equipment</h2>
            <p className="text-secondary font-body mb-6">
              I work with professional-grade equipment to ensure the highest quality
              results for every shoot. My kit includes top-of-the-line cameras,
              various prime and zoom lenses, and professional lighting equipment.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=500"
              alt="Photography Equipment"
              width={500}
              height={400}
              className="border border-subtle object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
