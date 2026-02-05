export default function FloatingObjects() {
  const objects = [
    {
      id: 1,
      emoji: "💻",
      top: "10%",
      left: "5%",
      size: "60px",
      animation: "float-slow",
      delay: "0s",
    },
    {
      id: 2,
      emoji: "📚",
      top: "20%",
      right: "10%",
      size: "50px",
      animation: "float-drift",
      delay: "1s",
    },
    {
      id: 3,
      emoji: "⚡",
      top: "30%",
      left: "15%",
      size: "55px",
      animation: "float-up",
      delay: "0.5s",
    },
    {
      id: 4,
      emoji: "🎯",
      top: "15%",
      right: "20%",
      size: "45px",
      animation: "float-drift",
      delay: "2s",
    },
    {
      id: 5,
      emoji: "🚀",
      top: "40%",
      left: "8%",
      size: "58px",
      animation: "float-slow",
      delay: "1.5s",
    },
    {
      id: 6,
      emoji: "💡",
      top: "25%",
      right: "5%",
      size: "52px",
      animation: "float-up",
      delay: "2.5s",
    },
    {
      id: 7,
      emoji: "🎨",
      bottom: "20%",
      left: "12%",
      size: "48px",
      animation: "float-drift",
      delay: "0.8s",
    },
    {
      id: 8,
      emoji: "⭐",
      bottom: "25%",
      right: "8%",
      size: "54px",
      animation: "float-slow",
      delay: "2s",
    },
    {
      id: 9,
      emoji: "🔥",
      top: "50%",
      right: "15%",
      size: "50px",
      animation: "float-up",
      delay: "1s",
    },
    {
      id: 10,
      emoji: "🌟",
      bottom: "35%",
      left: "20%",
      size: "56px",
      animation: "float-drift",
      delay: "3s",
    },
  ];

  return (
    <>
      {objects.map((obj) => (
        <div
          key={obj.id}
          className={`float-object ${obj.animation}`}
          style={{
            top: obj.top,
            bottom: obj.bottom,
            left: obj.left,
            right: obj.right,
            fontSize: obj.size,
            animationDelay: obj.delay,
          }}
        >
          {obj.emoji}
        </div>
      ))}
    </>
  );
}
