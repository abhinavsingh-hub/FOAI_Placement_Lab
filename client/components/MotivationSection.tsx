import { useState } from "react";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    emoji: "⭐",
    category: "Inspiration",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    emoji: "⏰",
    category: "Persistence",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    emoji: "🔥",
    category: "Resilience",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    emoji: "🌱",
    category: "Action",
  },
  {
    text: "Strive for progress, not perfection.",
    author: "Unknown",
    emoji: "📈",
    category: "Growth",
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
    emoji: "🚀",
    category: "Mindset",
  },
];

const stats = [
  { number: "500+", label: "DSA Problems", icon: "📚", color: "retro-lime" },
  { number: "100+", label: "Interview Patterns", icon: "🎯", color: "retro-yellow" },
  { number: "50+", label: "Companies", icon: "🏢", color: "retro-orange" },
  { number: "10k+", label: "Community Members", icon: "👥", color: "retro-pink" },
];

const successStories = [
  { name: "Rahul K.", company: "Google", message: "Went from struggling to interview-ready in 4 months!" },
  { name: "Priya M.", company: "Meta", message: "System design section helped me crack the advanced round." },
  { name: "Arun S.", company: "Amazon", message: "Consistent practice on DSA was the game-changer." },
];

export default function MotivationSection() {
  const [quotesExpanded, setQuotesExpanded] = useState(false);

  return (
    <section className="py-16 px-6 relative bg-gradient-to-b from-purple-50 via-retro-bg to-pink-50">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-display uppercase mb-3" style={{
            color: "hsl(var(--retro-purple))",
            textShadow: "2px 2px 0 rgba(0,0,0,0.1)"
          }}>
            ▶ Stay Motivated
          </h2>
          <p className="text-lg text-gray-700 font-retro max-w-2xl mx-auto">
            Remember why you started and celebrate how far you've come
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="retro-border border-4 p-6 text-center transform hover:scale-110 transition-transform duration-300"
              style={{
                borderColor: `hsl(var(--${stat.color}))`,
                backgroundColor: `hsla(var(--${stat.color}), 0.15)`,
              }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold font-display mb-2" style={{
                color: `hsl(var(--${stat.color}))`
              }}>
                {stat.number}
              </div>
              <p className="font-retro text-sm text-gray-700 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-display uppercase mb-8 text-center" style={{
            color: "hsl(var(--retro-lime))"
          }}>
            ✨ Real Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="retro-border border-4 border-retro-lime bg-lime-50 p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-4xl">⭐</span>
                  <div>
                    <p className="font-bold font-display text-retro-lime">{story.name}</p>
                    <p className="text-xs font-retro text-gray-700">@{story.company}</p>
                  </div>
                </div>
                <p className="font-retro text-gray-800 italic">"{story.message}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inspirational Quotes */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-display uppercase mb-8 text-center" style={{
            color: "hsl(var(--retro-purple))"
          }}>
            💭 Inspiration
          </h3>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${quotesExpanded ? '' : 'max-h-96 overflow-hidden'}`}>
            {quotes.map((quote, idx) => (
              <div
                key={idx}
                className="retro-border border-4 border-retro-purple bg-purple-50 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-5xl">{quote.emoji}</div>
                  <div className="text-xs font-retro font-bold text-retro-purple uppercase">
                    {quote.category}
                  </div>
                </div>
                <p className="font-retro text-lg mb-4 italic text-gray-800">
                  "{quote.text}"
                </p>
                <p className="font-bold font-retro text-right text-retro-purple">
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              className="retro-btn"
              style={{
                color: "hsl(var(--retro-purple))",
                borderColor: "hsl(var(--retro-purple))",
              }}
              onClick={() => setQuotesExpanded(!quotesExpanded)}
            >
              {quotesExpanded ? '▲ Show Less' : '▼ Show More'} Quotes
            </button>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="bg-gradient-to-r from-retro-orange via-retro-yellow to-retro-lime retro-border border-4 p-8 mb-12">
          <h3 className="text-2xl font-bold font-display uppercase mb-4 text-gray-900">
            🎯 Today's Challenge
          </h3>
          <p className="font-retro text-gray-900 mb-6">
            Solve 5 DSA problems, Learn 1 new design pattern, and Build 30 minutes towards your project.
            Small consistent steps lead to massive breakthroughs!
          </p>
          <button className="retro-btn text-gray-900 border-gray-900" onClick={() => alert('Challenge started! 💪')}>
            Start Challenge Now →
          </button>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-retro-purple via-retro-pink to-retro-orange retro-border border-4 p-12 text-center mb-12">
          <h3 className="text-4xl font-bold font-display mb-4 uppercase text-white drop-shadow-lg">
            Ready to Crush It?
          </h3>
          <p className="font-retro text-white mb-8 max-w-2xl mx-auto text-lg drop-shadow-md">
            Join thousands of students who transformed their careers with consistent practice and the right guidance.
            Your dream placement is just a few months away!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="retro-btn px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-retro-purple"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Roadmap ↑
            </button>
            <button className="retro-btn px-8 py-4 text-lg bg-white text-retro-purple border-white"
              onClick={() => alert('Subscription feature coming soon!')}>
              Get Premium Access →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t-4 border-retro-orange pt-8">
          <p className="font-retro text-gray-700 mb-2">
            Made with ❤️ for dreamers and doers
          </p>
          <p className="font-retro text-gray-600 text-sm">
            Last updated: 2024 | Keep Coding ⚡ | Your journey to success starts now!
          </p>
        </div>
      </div>
    </section>
  );
}
