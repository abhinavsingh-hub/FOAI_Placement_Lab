const resources = [
  {
    icon: "📚",
    title: "DSA Mastery",
    description: "Master data structures and algorithms with curated problems",
    color: "retro-lime",
  },
  {
    icon: "🎯",
    title: "Interview Patterns",
    description: "Learn the 15 essential coding interview patterns",
    color: "retro-yellow",
  },
  {
    icon: "💬",
    title: "System Design",
    description: "Design large-scale systems like pros",
    color: "retro-orange",
  },
  {
    icon: "🎤",
    title: "Behavioral Prep",
    description: "Master STAR method and common HR questions",
    color: "retro-pink",
  },
  {
    icon: "🚀",
    title: "Tech Deep Dives",
    description: "Understand technologies you've worked with deeply",
    color: "retro-purple",
  },
  {
    icon: "📝",
    title: "Resume Crafting",
    description: "Create a resume that gets you shortlisted",
    color: "retro-yellow",
  },
];

export default function ResourcesSection() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-yellow-100 via-orange-50 to-retro-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-display uppercase text-center mb-2">
          ▶ Interview Resources
        </h2>
        <p className="text-center text-gray-700 font-retro mb-12">
          Everything you need to ace your interviews
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="retro-border rounded-none p-6 cursor-pointer transform hover:scale-105 hover:shadow-lg transition-all duration-200"
              style={{
                borderColor: `hsl(var(--${resource.color}))`,
                backgroundColor: `hsla(var(--${resource.color}), 0.08)`,
              }}
            >
              <div className="text-5xl mb-4">{resource.icon}</div>
              <h3
                className="text-xl font-bold font-display mb-3 uppercase"
                style={{ color: `hsl(var(--${resource.color}))` }}
              >
                {resource.title}
              </h3>
              <p className="text-gray-700 font-retro text-sm leading-relaxed">
                {resource.description}
              </p>
              <div className="mt-4">
                <button className="retro-btn text-sm" style={{
                  color: `hsl(var(--${resource.color}))`,
                  borderColor: `hsl(var(--${resource.color}))`,
                }}>
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white retro-border border-4 border-retro-purple p-8">
          <h3 className="text-2xl font-bold font-display mb-4 text-retro-purple uppercase">
            ⚡ Quick Resource Map
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-retro text-sm">
            <div>
              <p className="font-bold text-retro-orange mb-2">Week 1-4:</p>
              <p className="text-gray-700">Focus on Array & Linked List problems</p>
            </div>
            <div>
              <p className="font-bold text-retro-yellow mb-2">Week 5-8:</p>
              <p className="text-gray-700">Trees, Graphs, and Dynamic Programming</p>
            </div>
            <div>
              <p className="font-bold text-retro-pink mb-2">Week 9+:</p>
              <p className="text-gray-700">Mock interviews & real question practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
