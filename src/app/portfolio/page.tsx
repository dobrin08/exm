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
                  <h2 className="text-3xl font-light">{category.title}</h2>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {category.subcategories.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-gray-50 text-center hover:bg-gray-100 transition-colors"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${category.slug}`}
                    className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
