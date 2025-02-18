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
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl font-light text-center mb-4">About Me</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A passionate photographer dedicated to capturing life&rsquo;s most precious moments 
          through the lens of artistic vision and technical excellence.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
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
            <div className="text-3xl font-bold mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Alternating Sections */}
      <section className="space-y-32">
        {/* My Journey Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl mb-6">My Journey</h2>
            <p className="text-gray-600 mb-6">
              My passion for photography began over a decade ago, inspired by the 
              desire to capture the beauty in everyday moments. From weddings to 
              portraits, I&rsquo;ve had the privilege of telling countless stories through 
              my lens.
            </p>
            <div className="flex flex-wrap gap-3">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full text-sm"
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
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Featured Work Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl mb-6">Featured Work</h2>
            <div className="space-y-4">
              {featuredWork.map((work, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl mb-2">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
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
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Equipment Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl mb-6">My Equipment</h2>
            <p className="text-gray-600 mb-6">
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
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
} 