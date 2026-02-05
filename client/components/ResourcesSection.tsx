import { useState } from "react";

const resources = [
  {
    icon: "📚",
    title: "DSA Mastery",
    description: "Master data structures and algorithms with curated problems",
    color: "retro-lime",
    fullContent:
      "Learn arrays, linked lists, trees, graphs, and dynamic programming. Solve 500+ problems with detailed explanations.",
    time: "3-4 months",
    link: "#dsa",
  },
  {
    icon: "🎯",
    title: "Interview Patterns",
    description: "Learn the 15 essential coding interview patterns",
    color: "retro-yellow",
    fullContent:
      "Sliding window, two pointers, fast & slow pointers, merge intervals, and more. Every pattern with examples.",
    time: "4 weeks",
    link: "#patterns",
  },
  {
    icon: "🏗️",
    title: "System Design",
    description: "Design large-scale systems like pros",
    color: "retro-orange",
    fullContent:
      "Learn scalability, databases, caching, message queues. Design Twitter, Netflix, YouTube from scratch.",
    time: "2 months",
    link: "#design",
  },
  {
    icon: "🎤",
    title: "Behavioral Prep",
    description: "Master STAR method and common HR questions",
    color: "retro-pink",
    fullContent:
      "Ace HR rounds with confidence. STAR method, common questions, and strategies to impress.",
    time: "2 weeks",
    link: "#behavioral",
  },
  {
    icon: "🔬",
    title: "Tech Deep Dives",
    description: "Understand technologies you've worked with deeply",
    color: "retro-purple",
    fullContent:
      "Understand the technology stack you've built with. From basics to advanced concepts.",
    time: "6 weeks",
    link: "#techdive",
  },
  {
    icon: "📝",
    title: "Resume Mastery",
    description: "Create a resume that gets you shortlisted",
    color: "retro-yellow",
    fullContent:
      "Optimize your resume with ATS keywords, strong action verbs, and quantified achievements.",
    time: "1 week",
    link: "#resume",
  },
];

const timeline = [
  { phase: "Month 1-2", focus: "Arrays, Strings, Linked Lists", icon: "🎯" },
  { phase: "Month 3-4", focus: "Trees, Graphs, Recursion", icon: "🌳" },
  { phase: "Month 5-6", focus: "Dynamic Programming & Advanced", icon: "🧠" },
  { phase: "Month 7-8", focus: "System Design Fundamentals", icon: "🏗️" },
];

export default function ResourcesSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="resources" className="py-16 px-6 relative bg-gradient-to-b from-orange-50 via-yellow-50 to-retro-bg">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-lines opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold font-display uppercase mb-3"
            style={{
              color: "hsl(var(--retro-orange))",
              textShadow: "2px 2px 0 rgba(0,0,0,0.1)",
            }}
          >
            ▶ Interview Resources Hub
          </h2>
          <p className="text-lg text-gray-700 font-retro max-w-2xl mx-auto">
            Comprehensive learning paths for every aspect of your interview
            preparation
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="cursor-pointer transition-all duration-300"
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            >
              <div
                className={`retro-border p-6 h-full flex flex-col ${expandedIdx === idx ? "shadow-2xl" : "hover:shadow-lg"}`}
                style={{
                  borderColor: `hsl(var(--${resource.color}))`,
                  backgroundColor:
                    expandedIdx === idx
                      ? `hsla(var(--${resource.color}), 0.18)`
                      : `hsla(var(--${resource.color}), 0.08)`,
                  borderWidth: expandedIdx === idx ? "5px" : "4px",
                }}
              >
                <div className="text-6xl mb-4">{resource.icon}</div>
                <h3
                  className="text-2xl font-bold font-display mb-2 uppercase"
                  style={{ color: `hsl(var(--${resource.color}))` }}
                >
                  {resource.title}
                </h3>
                <p className="text-gray-700 font-retro text-sm leading-relaxed mb-4 flex-1">
                  {resource.description}
                </p>

                {expandedIdx === idx && (
                  <div
                    className="mb-4 p-4 bg-white rounded-none border-2"
                    style={{
                      borderColor: `hsl(var(--${resource.color}))`,
                    }}
                  >
                    <p className="text-gray-800 font-retro text-sm mb-3">
                      {resource.fullContent}
                    </p>
                    <p
                      className="text-xs font-bold font-display"
                      style={{
                        color: `hsl(var(--${resource.color}))`,
                      }}
                    >
                      ⏱️ Typical Duration: {resource.time}
                    </p>
                  </div>
                )}

                <button
                  className="w-full retro-btn text-sm"
                  style={{
                    color: `hsl(var(--${resource.color}))`,
                    borderColor: `hsl(var(--${resource.color}))`,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = resource.link;
                  }}
                >
                  {expandedIdx === idx ? "▼ Close" : "▶ Learn More"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div
          className="bg-white retro-border border-4 p-8 mb-12"
          style={{
            borderColor: "hsl(var(--retro-purple))",
          }}
        >
          <h3 className="text-3xl font-bold font-display mb-8 uppercase text-retro-purple">
            📅 8-Month Prep Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-bold font-display text-retro-orange mb-2">
                  {item.phase}
                </p>
                <p className="font-retro text-sm text-gray-700">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="retro-border border-4 border-retro-lime bg-lime-50 p-6 text-center">
            <div className="text-4xl font-bold font-display text-retro-lime mb-2">
              500+
            </div>
            <p className="font-retro font-bold text-gray-700">DSA Problems</p>
          </div>
          <div className="retro-border border-4 border-retro-purple bg-purple-50 p-6 text-center">
            <div className="text-4xl font-bold font-display text-retro-purple mb-2">
              15+
            </div>
            <p className="font-retro font-bold text-gray-700">
              Interview Patterns
            </p>
          </div>
          <div className="retro-border border-4 border-retro-pink bg-pink-50 p-6 text-center">
            <div className="text-4xl font-bold font-display text-retro-pink mb-2">
              100+
            </div>
            <p className="font-retro font-bold text-gray-700">
              System Design Topics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
