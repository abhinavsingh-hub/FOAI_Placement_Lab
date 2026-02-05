const companies = [
  {
    name: "Big Tech",
    icon: "🔵",
    focuses: ["DSA Heavy", "System Design", "Leadership"],
    difficulty: "Hard",
    color: "retro-orange",
  },
  {
    name: "Startups",
    icon: "🚀",
    focuses: ["Full Stack", "Quick Learning", "Impact"],
    difficulty: "Medium",
    color: "retro-lime",
  },
  {
    name: "Product Cos",
    icon: "⚙️",
    focuses: ["Core CS", "Problem Solving", "Design"],
    difficulty: "Hard",
    color: "retro-purple",
  },
  {
    name: "Fintech",
    icon: "💰",
    focuses: ["Algorithms", "Trading Logic", "Optimization"],
    difficulty: "Very Hard",
    color: "retro-pink",
  },
  {
    name: "E-Commerce",
    icon: "🛒",
    focuses: ["Scalability", "Databases", "Performance"],
    difficulty: "Hard",
    color: "retro-yellow",
  },
  {
    name: "Open Source",
    icon: "🌐",
    focuses: ["Collaboration", "Community", "Code Quality"],
    difficulty: "Medium",
    color: "retro-orange",
  },
];

export default function CompaniesSection() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-retro-bg via-pink-50 to-retro-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-display uppercase text-center mb-2">
          ▶ Company Profiles
        </h2>
        <p className="text-center text-gray-700 font-retro mb-12">
          Prepare strategically based on company type
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="retro-border group p-6 cursor-pointer transform hover:-translate-y-2 transition-transform duration-200"
              style={{
                borderColor: `hsl(var(--${company.color}))`,
                backgroundColor: `hsla(var(--${company.color}), 0.12)`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{company.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold font-display uppercase" style={{
                    color: `hsl(var(--${company.color}))`
                  }}>
                    {company.name}
                  </h3>
                  <div className="text-xs font-bold font-retro" style={{
                    color: `hsl(var(--${company.color}))`
                  }}>
                    {company.difficulty} ▲
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs font-retro font-bold text-gray-600 mb-2 uppercase">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {company.focuses.map((focus, focusIdx) => (
                    <span
                      key={focusIdx}
                      className="px-2 py-1 text-xs font-bold font-retro rounded-none"
                      style={{
                        backgroundColor: `hsl(var(--${company.color}))`,
                        color: "#fff",
                      }}
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full retro-btn text-xs" style={{
                color: `hsl(var(--${company.color}))`,
                borderColor: `hsl(var(--${company.color}))`,
              }}>
                View Prep Guide
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-retro-orange to-retro-pink retro-border border-4 border-retro-orange p-8">
          <p className="text-center font-retro text-white font-bold text-lg">
            💡 Pro Tip: Check Glassdoor reviews and LeetCode discussion forums for company-specific questions!
          </p>
        </div>
      </div>
    </section>
  );
}
