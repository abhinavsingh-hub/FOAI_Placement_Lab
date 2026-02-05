import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Resources", href: "#resources" },
    { label: "Companies", href: "#companies" },
    { label: "Motivation", href: "#motivation" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-retro-orange text-white shadow-lg">
      <div className="retro-border border-b-4 border-orange-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-bold font-display text-2xl uppercase hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-2xl">⚡</span>
            PLACEMENT LAB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 font-retro font-bold text-sm uppercase hover:bg-orange-600 transition-colors rounded-none border-2 border-transparent hover:border-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center gap-2 retro-btn text-sm border-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕ CLOSE" : "☰ MENU"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-4 border-orange-700 bg-orange-600 animate-in fade-in duration-200">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 font-retro font-bold text-sm uppercase hover:bg-orange-700 transition-colors rounded-none border-2 border-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
