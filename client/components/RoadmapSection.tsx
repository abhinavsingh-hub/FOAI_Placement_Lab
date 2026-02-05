import { useState } from "react";

const roadmapData = [
  {
    year: "1st Year",
    icon: "🌱",
    color: "retro-lime",
    duration: "12 months",
    difficulty: "Beginner",
    tasks: [
      "Master Core DSA Fundamentals",
      "Build Strong Foundation in Programming",
      "Start Contributing to Open Source",
      "Develop Problem-Solving Skills",
    ],
    tips: [
      "2-3 hours daily on competitive programming",
      "Join coding community forums",
      "Build 1-2 projects during this year",
    ],
  },
  {
    year: "2nd Year",
    icon: "📈",
    color: "retro-yellow",
    duration: "12 months",
    difficulty: "Intermediate",
    tasks: [
      "Deep Dive into Advanced DSA",
      "System Design Basics",
      "Competitive Programming Practice",
      "Build 2-3 Portfolio Projects",
    ],
    tips: [
      "Focus on problem patterns, not just solutions",
      "Start learning system design fundamentals",
      "Participate in hackathons",
    ],
  },
  {
    year: "3rd Year",
    icon: "🚀",
    color: "retro-orange",
    duration: "12 months",
    difficulty: "Advanced",
    tasks: [
      "System Design Mastery",
      "Interview-Specific Problems",
      "Behavioral Preparation",
      "Final Resume Polish",
    ],
    tips: [
      "Start mock interviews with peers",
      "Deep dive into company engineering blogs",
      "Optimize your GitHub profile",
    ],
  },
  {
    year: "Final Semester",
    icon: "🏆",
    color: "retro-pink",
    duration: "6 months",
    difficulty: "Expert",
    tasks: [
      "Mock Interviews Weekly",
      "Company-Specific Prep",
      "Networking & Referrals",
      "Interview Execution",
    ],
    tips: [
      "2-3 mock interviews per week",
      "Personalized company research",
      "Network with alumni and professionals",
    ],
  },
];

export default function RoadmapSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-16 px-6 relative bg-gradient-to-b from-retro-bg via-yellow-50 to-orange-50">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-display uppercase mb-3" style={{
            color: "hsl(var(--retro-orange))",
            textShadow: "2px 2px 0 rgba(0,0,0,0.1)"
          }}>
            ▶ Your Placement Roadmap
          </h2>
          <p className="text-lg text-gray-700 font-retro max-w-2xl mx-auto">
            Follow this year-by-year guide to prepare systematically and crush your placements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roadmapData.map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer transform transition-all duration-300"
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >
              <div
                className={`retro-card border-4 p-6 h-full flex flex-col ${expandedIdx === idx ? 'scale-105 shadow-2xl' : 'hover:shadow-lg'}`}
                style={{
                  borderColor: `hsl(var(--${item.color}))`,
                  backgroundColor: expandedIdx === idx
                    ? `hsla(var(--${item.color}), 0.2)`
                    : `hsla(var(--${item.color}), 0.08)`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3
                      className="text-2xl font-bold font-display uppercase"
                      style={{ color: `hsl(var(--${item.color}))` }}
                    >
                      {item.year}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-retro font-bold text-gray-600 uppercase">{item.duration}</p>
                    <p className="text-xs font-retro font-bold" style={{ color: `hsl(var(--${item.color}))` }}>
                      {item.difficulty}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  {item.tasks.map((task, taskIdx) => (
                    <div
                      key={taskIdx}
                      className="flex items-start gap-2 font-retro text-sm"
                    >
                      <span
                        className="font-bold text-lg flex-shrink-0"
                        style={{ color: `hsl(var(--${item.color}))` }}
                      >
                        ➜
                      </span>
                      <span className="text-gray-800">{task}</span>
                    </div>
                  ))}
                </div>

                {expandedIdx === idx && (
                  <div className="mt-6 pt-6 border-t-2" style={{
                    borderColor: `hsl(var(--${item.color}))`
                  }}>
                    <p className="font-bold font-display text-sm mb-3 uppercase" style={{ color: `hsl(var(--${item.color}))` }}>
                      💡 Key Strategies
                    </p>
                    {item.tips.map((tip, tipIdx) => (
                      <p key={tipIdx} className="text-xs font-retro text-gray-700 mb-2">
                        • {tip}
                      </p>
                    ))}
                  </div>
                )}

                <button className="mt-4 w-full retro-btn text-xs" style={{
                  color: `hsl(var(--${item.color}))`,
                  borderColor: `hsl(var(--${item.color}))`,
                  backgroundColor: expandedIdx === idx ? `hsla(var(--${item.color}), 0.15)` : 'transparent',
                }}>
                  {expandedIdx === idx ? '▼ Less Info' : '▶ More Info'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="retro-border border-4 p-8 bg-gradient-to-r from-purple-50 to-purple-100" style={{
          borderColor: "hsl(var(--retro-purple))"
        }}>
          <div className="flex items-start gap-4">
            <span className="text-4xl">⭐</span>
            <div>
              <p className="font-bold font-display text-retro-purple uppercase mb-2">Pro Tip: Consistency Wins</p>
              <p className="font-retro text-gray-800">
                The students who crack top companies start preparing from day one. Don't wait for your final semester!
                Build one project, solve 5 DSA problems daily, and you'll be unstoppable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
