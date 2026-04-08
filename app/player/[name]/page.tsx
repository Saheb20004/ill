"use client";
import { use } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { teams } from "../../data/teams";
import { useEffect, useState } from "react";

const roleColors: Record<string, string> = {
  "Batter": "#3b82f6",
  "Bowler": "#ef4444",
  "All-rounder": "#22c55e",
  "Wicket-keeper": "#f59e0b",
};

// Helper to generate ESPN Cricinfo player image URL
const getPlayerPhoto = (name: string) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  return `https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png`;
};

export default function PlayerPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const searchParams = useSearchParams();
  const teamShortName = searchParams.get("team");
  const playerName = decodeURIComponent(name);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const team = teams.find((t) => t.shortName === teamShortName);
  const player = team?.players.find((p) => p.name === playerName);

  if (!team || !player) {
    return (
      <div style={{ padding: 60, textAlign: "center", color: "#666" }}>
        <h1>Player not found</h1>
        <Link href="/" style={{ color: "#ff6b00", textDecoration: "none" }}>
          ← Back to Teams
        </Link>
      </div>
    );
  }

  const playing11Players = team.players.filter((p) => team.playing11.includes(p.name));

  return (
    <main style={{ background: "#0a0a0f", minHeight: "calc(100vh - 60px)", padding: "40px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Back Button */}
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
          ← Back to Teams
        </Link>

        {/* Team Header */}
        <div
          className="animate-fadeInUp"
          style={{
            background: `linear-gradient(135deg, ${team.color} 0%, ${team.color}88 60%, #0f0f18 100%)`,
            borderRadius: 20,
            padding: "32px 40px",
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 24,
            border: `1px solid ${team.color}55`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <img
            src={team.logo}
            alt={team.shortName}
            width={80}
            height={80}
            style={{
              borderRadius: "50%",
              background: "#fff",
              flexShrink: 0,
              boxShadow: `0 0 30px ${team.color}aa`,
            }}
          />
          <div>
            <h1 style={{ fontSize: 42, fontWeight: 900, color: "#fff", margin: "0 0 8px" }}>
              {team.name}
            </h1>
            <div style={{ fontSize: 15, color: "#ddd" }}>
              Captain: <span style={{ color: team.accent, fontWeight: 700 }}>{team.captain}</span>
              <span style={{ color: "#aaa", marginLeft: 20 }}>Playing XI</span>
            </div>
          </div>
        </div>

        {/* Playing 11 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {playing11Players.map((p, i) => {
            const isCurrentPlayer = p.name === playerName;
            const isCaptain = p.name === team.captain;

            return (
              <div
                key={i}
                className="animate-scaleIn"
                style={{
                  background: isCurrentPlayer ? `${team.color}22` : "#0f0f18",
                  border: isCurrentPlayer ? `2px solid ${team.color}` : "1px solid #ffffff0a",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  cursor: "pointer",
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
                  (e.currentTarget as HTMLElement).style.borderColor = isCurrentPlayer ? team.color : "#ffffff0a";
                }}
              >
                {/* Player Photo */}
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
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&size=200&background=${team.color.slice(1)}&color=fff&bold=true&font-size=0.4`;
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

                {/* Player Info */}
                <div style={{ padding: 20 }}>
                  {/* Player Name */}
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

                  {/* Role Badge */}
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

                  {/* Country */}
                  <div style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
                    🌍 {p.country}
                  </div>

                  {/* Stats */}
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
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
