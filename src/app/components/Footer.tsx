import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ];

  return (
    <footer className="bg-base-alt border-t border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl text-primary">
                John Doe
              </span>
            </Link>
            <p className="mt-4 text-secondary text-sm leading-relaxed max-w-xs">
              Capturing life&rsquo;s most extraordinary moments through a lens
              of artistry and passion. Based in New York, available worldwide.
            </p>
            <div className="w-8 h-[1.5px] bg-subtle mt-6" />
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] tracking-[0.15em] uppercase text-muted mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary text-sm hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] tracking-[0.15em] uppercase text-muted mb-6">
              Connect
            </h3>
            <div className="space-y-3 text-secondary text-sm mb-8">
              <a
                href="mailto:hello@johndoe.com"
                className="block hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                hello@johndoe.com
              </a>
              <a
                href="tel:+15551234567"
                className="block hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                +1 (555) 123-4567
              </a>
              <p>New York, NY</p>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.12em] uppercase text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-subtle py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs tracking-wide">
            &copy; {new Date().getFullYear()} John Doe Photography. All rights
            reserved.
          </p>
          <p className="text-muted/60 text-xs tracking-wide">
            Crafted with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
