import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_CATEGORIES } from "../types/portfolio-categories";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-light text-center mb-16">Portfolio</h1>

          <div className="space-y-32">
            {PORTFOLIO_CATEGORIES.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <Link href={`/portfolio/${category.slug}`}>
                    <div className="relative aspect-[16/9] overflow-hidden group">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-light tracking-wide hover:tracking-wider transition-all duration-500">
                      {category.title}
                    </h2>
                    <div className="w-20 h-[2px] bg-black/70 transform origin-left hover:scale-x-150 transition-transform duration-500"></div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.subcategories.map((sub, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm text-gray-700 hover:from-black hover:to-gray-800 hover:text-white transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-black/10 hover:shadow-lg backdrop-blur-sm"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Link
                      href={`/portfolio/${category.slug}`}
                      className="group relative inline-block px-6 py-2 text-xs font-medium tracking-wider uppercase 
                      bg-black text-white rounded overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                      <span className="relative z-10">View Gallery</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black transform scale-x-0 
                      group-hover:scale-x-100 transition-transform duration-500 origin-left"/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
