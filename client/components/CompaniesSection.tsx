import { useState } from "react";

const companies = [
  {
    name: "Big Tech",
    icon: "🔵",
    focuses: ["DSA Heavy", "System Design", "Leadership"],
    difficulty: "Hard",
    category: "Enterprise",
    color: "retro-orange",
    description: "Google, Meta, Apple, Microsoft - The giants that set industry standards",
    salary: "₹20-50L+",
    examples: "Google, Meta, Apple, Microsoft",
  },
  {
    name: "Startups",
    icon: "🚀",
    focuses: ["Full Stack", "Quick Learning", "Impact"],
    difficulty: "Medium",
    category: "Startup",
    color: "retro-lime",
    description: "Fast-growing companies offering equity and learning opportunities",
    salary: "₹8-20L",
    examples: "Stripe, Figma, Notion, Canva",
  },
  {
    name: "Product Cos",
    icon: "⚙️",
    focuses: ["Core CS", "Problem Solving", "Design"],
    difficulty: "Hard",
    category: "Enterprise",
    color: "retro-purple",
    description: "Companies focused on building exceptional products and user experiences",
    salary: "₹18-40L",
    examples: "Adobe, Uber, Airbnb, Dropbox",
  },
  {
    name: "Fintech",
    icon: "💰",
    focuses: ["Algorithms", "Trading Logic", "Optimization"],
    difficulty: "Very Hard",
    category: "Specialized",
    color: "retro-pink",
    description: "Financial technology companies with complex algorithmic challenges",
    salary: "₹25-60L",
    examples: "Jane Street, Rubrik, Coinbase",
  },
  {
    name: "E-Commerce",
    icon: "🛒",
    focuses: ["Scalability", "Databases", "Performance"],
    difficulty: "Hard",
    category: "Enterprise",
    color: "retro-yellow",
    description: "Massive scale systems handling millions of transactions",
    salary: "₹15-35L",
    examples: "Amazon, Flipkart, OYO, Myntra",
  },
  {
    name: "Open Source",
    icon: "🌐",
    focuses: ["Collaboration", "Community", "Code Quality"],
    difficulty: "Medium",
    category: "Community",
    color: "retro-orange",
    description: "Contribute to open source while building your portfolio",
    salary: "₹10-25L",
    examples: "Mozilla, Linux, Apache, CNCF",
  },
];

const difficulties = ["All", "Medium", "Hard", "Very Hard"];
const categories = ["All", "Enterprise", "Startup", "Specialized", "Community"];

export default function CompaniesSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCompanies = companies.filter(company => {
    const matchDifficulty = selectedDifficulty === "All" || company.difficulty === selectedDifficulty;
    const matchCategory = selectedCategory === "All" || company.category === selectedCategory;
    return matchDifficulty && matchCategory;
  });

  return (
    <section className="py-16 px-6 relative bg-gradient-to-b from-retro-bg via-pink-50 to-orange-50">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold font-display uppercase mb-3" style={{
            color: "hsl(var(--retro-orange))",
            textShadow: "2px 2px 0 rgba(0,0,0,0.1)"
          }}>
            ▶ Company Profiles
          </h2>
          <p className="text-lg text-gray-700 font-retro max-w-2xl mx-auto">
            Explore different company types and prepare strategically for each
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12 p-6 retro-border border-4 border-retro-purple bg-purple-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold font-display text-retro-purple mb-3 uppercase">Filter by Difficulty</p>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`retro-btn text-xs ${selectedDifficulty === diff ? 'ring-2' : ''}`}
                    style={{
                      color: selectedDifficulty === diff ? "#fff" : `hsl(var(--retro-orange))`,
                      borderColor: `hsl(var(--retro-orange))`,
                      backgroundColor: selectedDifficulty === diff ? `hsl(var(--retro-orange))` : "transparent",
                    }}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold font-display text-retro-purple mb-3 uppercase">Filter by Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`retro-btn text-xs ${selectedCategory === cat ? 'ring-2' : ''}`}
                    style={{
                      color: selectedCategory === cat ? "#fff" : `hsl(var(--retro-lime))`,
                      borderColor: `hsl(var(--retro-lime))`,
                      backgroundColor: selectedCategory === cat ? `hsl(var(--retro-lime))` : "transparent",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company, idx) => (
              <div
                key={idx}
                className="retro-border group p-6 transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
                style={{
                  borderColor: `hsl(var(--${company.color}))`,
                  backgroundColor: `hsla(var(--${company.color}), 0.12)`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl">{company.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold font-display uppercase" style={{
                        color: `hsl(var(--${company.color}))`
                      }}>
                        {company.name}
                      </h3>
                      <div className="text-xs font-bold font-retro mt-1" style={{
                        color: `hsl(var(--${company.color}))`
                      }}>
                        {company.difficulty} {"▲".repeat(company.difficulty === "Medium" ? 2 : company.difficulty === "Hard" ? 3 : 4)}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-retro text-gray-700 mb-4">
                  {company.description}
                </p>

                <div className="mb-4 p-3 bg-white rounded-none border-2" style={{
                  borderColor: `hsl(var(--${company.color}))`
                }}>
                  <p className="text-xs font-bold font-retro text-gray-600 mb-1">Expected Salary</p>
                  <p className="text-lg font-bold font-display" style={{
                    color: `hsl(var(--${company.color}))`
                  }}>
                    {company.salary}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-retro font-bold text-gray-600 mb-2 uppercase">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {company.focuses.map((focus, focusIdx) => (
                      <span
                        key={focusIdx}
                        className="px-2 py-1 text-xs font-bold font-retro rounded-none text-white"
                        style={{
                          backgroundColor: `hsl(var(--${company.color}))`,
                        }}
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-retro text-gray-700">
                    <span className="font-bold">Examples:</span> {company.examples}
                  </p>
                </div>

                <button className="w-full retro-btn text-xs" style={{
                  color: `hsl(var(--${company.color}))`,
                  borderColor: `hsl(var(--${company.color}))`,
                }}
                onClick={() => alert(`Loading prep guide for ${company.name}...`)}>
                  📋 View Prep Guide
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-2xl font-bold font-display text-gray-600">No companies found</p>
              <p className="text-gray-600 font-retro mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-retro-orange via-retro-yellow to-retro-pink retro-border border-4 p-8">
          <div className="flex items-start gap-4 text-white">
            <span className="text-4xl flex-shrink-0">💡</span>
            <div>
              <p className="font-bold font-display uppercase mb-2">Pro Tips for Company-Specific Prep</p>
              <ul className="font-retro text-sm space-y-1">
                <li>✓ Check Glassdoor for actual interview experiences</li>
                <li>✓ Review LeetCode problem discussions for company-specific questions</li>
                <li>✓ Follow their engineering blogs and technical talks</li>
                <li>✓ Practice with problems from their previous interviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
