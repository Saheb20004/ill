export default function Loading() {
  return (
    <div
      style={{
        background: "#0a0a0f",
        minHeight: "calc(100vh - 60px)",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: 60,
            height: 60,
            border: "3px solid #ffffff15",
            borderTop: "3px solid #ff6b00",
            borderRadius: "50%",
            animation: "rotate 1s linear infinite",
            margin: "0 auto 20px",
          }}
        />
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            background: "linear-gradient(90deg, #ff6b00, #ff0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Loading Player...
        </div>
      </div>
    </div>
  );
}
