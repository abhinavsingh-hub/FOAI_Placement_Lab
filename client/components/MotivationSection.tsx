const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    emoji: "⭐",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    emoji: "⏰",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    emoji: "🔥",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    emoji: "🌱",
  },
];

const stats = [
  { number: "500+", label: "Problems Solved" },
  { number: "100+", label: "Interview Patterns" },
  { number: "50+", label: "Companies" },
  { number: "10k+", label: "Community Members" },
];

export default function MotivationSection() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-retro-bg via-purple-50 to-retro-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-display uppercase text-center mb-2">
          ▶ Stay Motivated
        </h2>
        <p className="text-center text-gray-700 font-retro mb-12">
          Remember why you started
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="retro-border border-4 border-retro-orange bg-orange-50 p-6 text-center"
            >
              <div className="text-3xl font-bold font-display text-retro-orange mb-2">
                {stat.number}
              </div>
              <p className="font-retro text-sm text-gray-700 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {quotes.map((quote, idx) => (
            <div
              key={idx}
              className="retro-border border-4 border-retro-purple bg-purple-50 p-8 relative"
            >
              <div className="absolute -top-6 -left-6 text-6xl opacity-20">
                {quote.emoji}
              </div>
              <p className="font-retro text-lg mb-4 italic text-gray-800 relative z-10">
                "{quote.text}"
              </p>
              <p className="font-bold font-retro text-right text-retro-purple">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-retro-lime via-retro-yellow to-retro-orange retro-border border-4 border-retro-lime p-12 text-center">
          <h3 className="text-3xl font-bold font-display mb-4 uppercase text-gray-900">
            Ready to Crush Your Placement?
          </h3>
          <p className="font-retro text-gray-900 mb-8 max-w-2xl mx-auto">
            Start with the roadmap above, explore the resources, and join thousands of students
            achieving their dream placements. Your success story starts now!
          </p>
          <button className="retro-btn px-8 py-4 text-lg border-4 border-gray-900 text-gray-900">
            Begin Your Journey →
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center font-retro text-gray-600 mt-12 text-sm">
          Made with ❤️ for students | Last updated: 2024 | Keep Coding ⚡
        </p>
      </div>
    </section>
  );
}
