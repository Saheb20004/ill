"use client";
import Link from "next/link";
import { teams } from "../../data/teams";
import { useState, useEffect } from "react";

const roleColors: Record<string, string> = {
  "Batter": "#3b82f6",
  "Bowler": "#ef4444",
  "All-rounder": "#22c55e",
  "Wicket-keeper": "#f59e0b",
};

export default function CSKPage() {
  const [visible, setVisible] = useState(false);
  const team = teams.find((t) => t.shortName === "CSK")!;
  const playing11Players = team.players.filter((p) => team.playing11.includes(p.name));

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main style={{ background: "#0a0a0f", minHeight: "calc(100vh - 60px)", padding: "40px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Link
          href="/"
          className="animate-fadeIn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "#666",
            textDecoration: "none",
            fontSize: 14,
            marginBottom: 32,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ccc")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#666")}
        >
          ← Back to All Teams
        </Link>

        <div
          className="animate-fadeInUp"
          style={{
            background: `linear-gradient(135deg, ${team.color} 0%, ${team.color}88 60%, #0f0f18 100%)`,
            borderRadius: 20,
            padding: "40px",
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 32,
            border: `1px solid ${team.color}55`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            flexWrap: "wrap",
          }}
        >
          <img
            src={team.logo}
            alt={team.shortName}
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              background: "#fff",
              flexShrink: 0,
              boxShadow: `0 0 40px ${team.color}aa`,
            }}
          />
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 48, fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>
              {team.name}
            </h1>
            <div style={{ fontSize: 16, color: "#ddd", marginBottom: 8 }}>
              Captain: <span style={{ color: team.accent, fontWeight: 700 }}>{team.captain}</span>
            </div>
            <div style={{ fontSize: 14, color: "#aaa" }}>
              Playing XI · {playing11Players.length} Players
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {playing11Players.map((p, i) => {
            const isCaptain = p.name === team.captain;

            return (
              <Link
                key={i}
                href={`/player/${encodeURIComponent(p.name)}?team=${encodeURIComponent(team.shortName)}`}
                className="animate-scaleIn"
                style={{
                  background: "#0f0f18",
                  border: "1px solid #ffffff0a",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "block",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "scale(1)" : "scale(0.9)",
                  transitionDelay: `${i * 0.05}s`,
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${team.color}55`;
                  (e.currentTarget as HTMLElement).style.borderColor = team.color + "aa";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "#ffffff0a";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    background: `linear-gradient(180deg, ${team.color}44 0%, ${team.color}11 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&size=200&background=${team.color.slice(1)}&color=fff&bold=true&font-size=0.4`}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {isCaptain && (
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        background: team.accent,
                        color: "#000",
                        borderRadius: 6,
                        padding: "4px 10px",
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: 1,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      CAPTAIN
                    </div>
                  )}
                </div>

                <div style={{ padding: 20 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#fff",
                      margin: "0 0 10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </h3>

                  <div style={{ marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: roleColors[p.role] ?? "#888",
                        background: roleColors[p.role] + "22" ?? "#88888822",
                        borderRadius: 6,
                        padding: "4px 10px",
                        border: `1px solid ${roleColors[p.role] ?? "#888"}44`,
                        display: "inline-block",
                      }}
                    >
                      {p.role}
                    </span>
                  </div>

                  <div style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
                    🌍 {p.country}
                  </div>

                  <div
                    style={{
                      paddingTop: 16,
                      borderTop: "1px solid #ffffff0a",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: 1 }}>
                        Matches
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: team.accent, marginTop: 4 }}>
                        TBD
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: 1 }}>
                        Avg/SR
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: team.accent, marginTop: 4 }}>
                        TBD
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
