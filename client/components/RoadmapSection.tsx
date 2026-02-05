const roadmapData = [
  {
    year: "1st Year",
    color: "retro-lime",
    tasks: [
      "Master Core DSA Fundamentals",
      "Build Strong Foundation in Programming",
      "Start Contributing to Open Source",
      "Develop Problem-Solving Skills",
    ],
  },
  {
    year: "2nd Year",
    color: "retro-yellow",
    tasks: [
      "Deep Dive into Advanced DSA",
      "System Design Basics",
      "Competitive Programming Practice",
      "Build 2-3 Portfolio Projects",
    ],
  },
  {
    year: "3rd Year",
    color: "retro-orange",
    tasks: [
      "System Design Mastery",
      "Interview-Specific Problems",
      "Behavioral Preparation",
      "Final Resume Polish",
    ],
  },
  {
    year: "Final Semester",
    color: "retro-pink",
    tasks: [
      "Mock Interviews Weekly",
      "Company-Specific Prep",
      "Networking & Referrals",
      "Interview Execution",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-retro-bg via-retro-bg to-yellow-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-display uppercase text-center mb-2">
          ▶ Placement Roadmap
        </h2>
        <p className="text-center text-gray-700 font-retro mb-12">
          Your year-wise guide to placement readiness
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapData.map((item, idx) => (
            <div
              key={idx}
              className={`retro-card border-4 p-6 transform hover:scale-105 transition-transform duration-200 cursor-pointer`}
              style={{
                borderColor: `hsl(var(--${item.color}))`,
                backgroundColor: `hsla(var(--${item.color}), 0.1)`,
              }}
            >
              <div
                className="text-2xl font-bold font-display mb-4 uppercase"
                style={{ color: `hsl(var(--${item.color}))` }}
              >
                {item.year}
              </div>
              <div className="space-y-2">
                {item.tasks.map((task, taskIdx) => (
                  <div
                    key={taskIdx}
                    className="flex items-start gap-2 font-retro text-sm"
                  >
                    <span
                      className="font-bold text-lg"
                      style={{ color: `hsl(var(--${item.color}))` }}
                    >
                      ●
                    </span>
                    <span className="text-gray-800">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 retro-card border-retro-purple border-4 bg-purple-50">
          <p className="text-center font-retro text-gray-800">
            <span className="text-retro-purple font-bold">★ PRO TIP ★</span>
            {" "}Don't wait for the final semester! Start building your DSA skills from day one.
            Consistency beats cramming every time.
          </p>
        </div>
      </div>
    </section>
  );
}
