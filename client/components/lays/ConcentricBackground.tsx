interface ConcentricBackgroundProps {
  color1: string;
  color2: string;
}

const circleData = [
  { w: 1847, h: 1730 },
  { w: 1508, h: 1415 },
  { w: 1390, h: 1300 },
  { w: 1271, h: 1200 },
  { w: 1132, h: 1082 },
  { w: 1012, h: 964 },
  { w: 872, h: 860 },
  { w: 740, h: 728 },
  { w: 613, h: 629 },
  { w: 483, h: 496 },
];

export default function ConcentricBackground({ color1, color2 }: ConcentricBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circleData.map((circle, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: circle.w,
            height: circle.h,
            backgroundColor: i % 2 === 0 ? color1 : color2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "background-color 0.6s ease",
          }}
        />
      ))}
      {/* Soft white glow behind product */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 341,
          height: 344,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          filter: "blur(150px)",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
