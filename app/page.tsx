"use client";
import { teams } from "./data/teams";
import Link from "next/link";

const roleColors: Record<string, string> = {
  "Batter": "#3b82f6",
  "Bowler": "#ef4444",
  "All-rounder": "#22c55e",
  "Wicket-keeper": "#f59e0b",
};

export default function Home() {
  return (
    <main style={{ background: "#0a0a0f" }}>
      {/* Hero */}
      <div
        className="animate-fadeIn liquid-glass-panel"
        style={{
          background: "linear-gradient(180deg, #1a0a2e 0%, #0d0d1a 60%, #0a0a0f 100%)",
          textAlign: "center",
          padding: "80px 20px 64px",
          borderBottom: "1px solid #ffffff0d",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span className="liquid-glass-bubble bubble-1" />
        <span className="liquid-glass-bubble bubble-2" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 50% 0%, rgba(255,107,0,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className="animate-fadeInUp"
            style={{
              display: "inline-block",
              fontSize: 11,
              letterSpacing: 5,
              color: "#ff6b00",
              textTransform: "uppercase",
              marginBottom: 20,
              fontWeight: 700,
              animationDelay: "0.1s",
            }}
          >
            ◆ Indian Premier League ◆
          </div>

          <h1
            className="animate-fadeInUp"
            style={{
              fontSize: "clamp(52px, 9vw, 96px)",
              fontWeight: 900,
              background: "linear-gradient(90deg, #ff6b00 0%, #ff0080 50%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: "0 0 16px",
              lineHeight: 1.1,
              animationDelay: "0.2s",
            }}
          >
            IPL 2026
          </h1>

          <div
            className="animate-fadeInUp"
            style={{ color: "#888", fontSize: 16, animationDelay: "0.3s", marginBottom: 32 }}
          >
            {teams.length} Teams · All Playing XI Squads
          </div>

          <div
            className="animate-fadeInUp"
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              animationDelay: "0.4s",
            }}
          >
            <a
              href="#teams"
              style={{
                background: "linear-gradient(135deg, #ff6b00, #ff0080)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(255,107,0,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Explore Teams
            </a>
          </div>
        </div>
      </div>

      {/* All Teams with Player Cards */}
      <div id="teams" style={{ maxWidth: 1400, margin: "0 auto", padding: "64px 20px 0" }}>
        {teams.map((team, teamIndex) => {
          const playing11Players = team.players.filter((p) => team.playing11.includes(p.name));

          return (
            <div
              key={team.shortName}
              id={team.shortName}
              style={{
                marginBottom: 80,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: `${teamIndex * 0.1}s`,
              }}
            >
              {/* Team Header */}
              <Link
                href={`/teams/${team.shortName.toLowerCase()}`}
                className="liquid-glass-panel"
                style={{
                  background: `linear-gradient(135deg, ${team.color}22 0%, ${team.color}11 60%, #0f0f18 100%)`,
                  borderRadius: 20,
                  padding: "32px 40px",
                  marginBottom: 32,
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  border: `2px solid ${team.color}44`,
                  textDecoration: "none",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  cursor: "pointer",
                  position: "relative" as const,
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${team.color}55`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${team.color}88`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = `${team.color}44`;
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
                    boxShadow: `0 4px 20px ${team.color}66`,
                    border: `3px solid ${team.color}`,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 38, fontWeight: 900, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.5px" }}>
                    {team.name}
                  </h2>
                  <div style={{ fontSize: 15, color: "#ccc" }}>
                    Captain: <span style={{ color: team.accent, fontWeight: 800 }}>{team.captain}</span>
                    <span style={{ color: "#999", marginLeft: 20 }}>• Playing XI · {playing11Players.length} Players</span>
                  </div>
                </div>
              </Link>

              {/* Player Cards Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: 20,
                }}
              >
                {playing11Players.map((p, i) => {
                  const isCaptain = p.name === team.captain;

                  return (
                    <Link
                      key={i}
                      href={`/player/${encodeURIComponent(p.name)}?team=${encodeURIComponent(team.shortName)}`}
                      className="liquid-glass-panel"
                      style={{
                        background: "rgba(15, 15, 24, 0.6)",
                        backdropFilter: "blur(30px) saturate(150%)",
                        WebkitBackdropFilter: "blur(30px) saturate(150%)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: 16,
                        overflow: "hidden",
                        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s, border-color 0.3s",
                        cursor: "pointer",
                        textDecoration: "none",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-8px) scale(1.02)";
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${team.color}44`;
                        (e.currentTarget as HTMLElement).style.borderColor = team.color + "77";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        (e.currentTarget as HTMLElement).style.borderColor = "#ffffff0a";
                      }}
                    >
                      {/* Player Photo */}
                      <div
                        style={{
                          width: "100%",
                          height: 180,
                          background: `linear-gradient(180deg, ${team.color}44 0%, ${team.color}11 100%)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&size=180&background=${team.color.slice(1)}&color=fff&bold=true&font-size=0.4`}
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
                              top: 10,
                              right: 10,
                              background: team.accent,
                              color: "#000",
                              borderRadius: 6,
                              padding: "3px 8px",
                              fontSize: 9,
                              fontWeight: 800,
                              letterSpacing: 1,
                              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                            }}
                          >
                            C
                          </div>
                        )}
                      </div>

                      {/* Player Info */}
                      <div style={{ padding: 16 }}>
                        {/* Player Name */}
                        <h3
                          style={{
                            fontSize: 16,
                            fontWeight: 800,
                            color: "#fff",
                            margin: "0 0 8px",
                            lineHeight: 1.3,
                          }}
                        >
                          {p.name}
                        </h3>

                        {/* Role Badge */}
                        <div style={{ marginBottom: 8 }}>
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: roleColors[p.role] ?? "#888",
                              background: roleColors[p.role] + "22" ?? "#88888822",
                              borderRadius: 6,
                              padding: "3px 8px",
                              border: `1px solid ${roleColors[p.role] ?? "#888"}44`,
                              display: "inline-block",
                            }}
                          >
                            {p.role}
                          </span>
                        </div>

                        {/* Country */}
                        <div style={{ fontSize: 12, color: "#666" }}>
                          🌍 {p.country}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
