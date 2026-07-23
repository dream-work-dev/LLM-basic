export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147, 51, 234, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1320] via-transparent to-transparent" />
    </div>
  );
}
