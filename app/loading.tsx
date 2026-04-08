export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        zIndex: 9999,
      }}
    >
      {/* Animated Logo */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 16,
          background: "linear-gradient(135deg, #ff6b00, #ff0080)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 28,
          color: "#fff",
          animation: "pulse-glow 2s ease-in-out infinite, float 3s ease-in-out infinite",
          boxShadow: "0 0 40px rgba(255,107,0,0.5)",
        }}
      >
        IPL
      </div>

      {/* Spinner */}
      <div
        style={{
          width: 50,
          height: 50,
          border: "3px solid #ffffff15",
          borderTop: "3px solid #ff6b00",
          borderRadius: "50%",
          animation: "rotate 1s linear infinite",
        }}
      />

      {/* Loading Text */}
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          background: "linear-gradient(90deg, #ff6b00, #ff0080, #7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "fadeIn 1s ease infinite alternate",
        }}
      >
        Loading IPL 2026...
      </div>
    </div>
  );
}
