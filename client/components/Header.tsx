import { useState } from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { label: "Students", value: "10k+" },
    { label: "Resources", value: "500+" },
    { label: "Success Rate", value: "94%" },
  ];

  return (
    <header id="home" className="relative overflow-hidden mb-8 mt-20">
      {/* Animated background */}
      <div
        className="absolute inset-0 pattern-grid"
        style={{
          background:
            "linear-gradient(135deg, #FFB366 0%, #FFA500 50%, #FF9933 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Main title */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">💻</div>
            <h1
              className="text-5xl md:text-6xl font-bold font-display uppercase text-white drop-shadow-lg"
              style={{
                textShadow:
                  "4px 4px 0 rgba(0,0,0,0.3), 8px 8px 0 rgba(0,0,0,0.2)",
              }}
            >
              PLACEMENT LAB
            </h1>
          </div>
          <p
            className="text-lg md:text-xl text-white font-retro max-w-3xl drop-shadow-md"
            style={{
              textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
            }}
          >
            Your ultimate gateway to landing your dream placement. Master DSA,
            crack interviews, and level up your career in 90s style.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8 md:max-w-2xl">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="retro-border border-4 border-white bg-white bg-opacity-20 p-4 text-center backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white font-display">
                {stat.value}
              </div>
              <p className="text-white text-sm font-bold uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            className="retro-btn bg-white text-retro-orange border-white hover:bg-retro-orange hover:text-white"
            onClick={() => {
              document
                .querySelector('[id="roadmap"]')
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Roadmap
          </button>
          <button
            className="retro-btn bg-retro-pink text-white border-white"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            View Resources
          </button>
        </div>

        {/* Additional Info Box */}
        {isExpanded && (
          <div className="retro-border border-4 border-white bg-white bg-opacity-95 p-6 max-w-2xl animate-in fade-in duration-300">
            <h3 className="font-bold font-display text-retro-orange text-lg mb-3 uppercase">
              What You'll Learn
            </h3>
            <ul className="space-y-2 text-gray-800 font-retro">
              <li>✓ Data Structures & Algorithms (Complete) </li>
              <li>✓ System Design for Large Scale Apps</li>
              <li>✓ Behavioral Interview Mastery</li>
              <li>✓ Company-Specific Preparation</li>
              <li>✓ Networking & Referral Strategies</li>
            </ul>
          </div>
        )}
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 text-9xl opacity-10 pointer-events-none">
        ⚡
      </div>
    </header>
  );
}
