"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Team } from "../data/teams";

const roleColors: Record<string, string> = {
  "Batter": "#3b82f6",
  "Bowler": "#ef4444",
  "All-rounder": "#22c55e",
  "Wicket-keeper": "#f59e0b",
};

const roleBg: Record<string, string> = {
  "Batter": "#3b82f615",
  "Bowler": "#ef444415",
  "All-rounder": "#22c55e15",
  "Wicket-keeper": "#f59e0b15",
};

export default function TeamCard({ team, index }: { team: Team; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="team-card"
      style={{
        background: "#0f0f18",
        border: `1px solid ${team.color}55`,
        borderRadius: 18,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.07}s, transform 0.6s ease ${index * 0.07}s, box-shadow 0.25s, border-color 0.25s`,
      }}
    >
      {/* Team Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${team.color} 0%, ${team.color}88 60%, #0f0f18 100%)`,
          padding: "clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(12px, 2.5vw, 20px)",
        }}
      >
        <img
          src={team.logo}
          alt={team.shortName}
          width={64}
          height={64}
          style={{
            borderRadius: "50%",
            flexShrink: 0,
            objectFit: "contain",
            background: "#fff",
            boxShadow: `0 0 24px ${team.color}99`,
            width: "clamp(48px, 10vw, 64px)",
            height: "clamp(48px, 10vw, 64px)",
          }}
        />
        <div>
          <div style={{ fontWeight: 800, fontSize: "clamp(16px, 3.5vw, 22px)", color: "#fff", letterSpacing: 0.5 }}>
            {team.name}
          </div>
          <div style={{ fontSize: "clamp(11px, 2.2vw, 13px)", color: "#ddd", marginTop: 4 }}>
            Captain:{" "}
            <span style={{ color: team.accent, fontWeight: 700 }}>{team.captain}</span>
            <span style={{ color: "#aaa", marginLeft: "clamp(8px, 2vw, 16px)" }}>
              {team.players.length} Players
            </span>
          </div>
        </div>
      </div>

      {/* Players Table */}
      <div style={{ paddingBottom: 20 }}>
        {/* Table Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40px 1fr 160px 130px 40px",
            padding: "10px 24px",
            borderBottom: `1px solid ${team.color}33`,
            background: `${team.color}11`,
          }}
        >
          <span style={{ fontSize: 11, color: "#555", fontWeight: 700, textTransform: "uppercase" }}>#</span>
          <span style={{ fontSize: 11, color: "#555", fontWeight: 700, textTransform: "uppercase" }}>Player</span>
          <span style={{ fontSize: 11, color: "#555", fontWeight: 700, textTransform: "uppercase" }}>Role</span>
          <span style={{ fontSize: 11, color: "#555", fontWeight: 700, textTransform: "uppercase" }}>Country</span>
          <span />
        </div>

        {/* Player Rows */}
        {team.players.map((p, i) => {
          const isPlaying11 = team.playing11.includes(p.name);
          const RowTag = isPlaying11 ? Link : "div";
          const rowProps = isPlaying11
            ? {
                href: `/player/${encodeURIComponent(p.name)}?team=${encodeURIComponent(team.shortName)}`,
                className: "player-row",
              }
            : { className: "" };

          return (
            <RowTag
              key={i}
              {...rowProps}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr 160px 130px 40px",
                padding: "11px clamp(12px, 2vw, 24px)",
                borderBottom: "1px solid #ffffff07",
                alignItems: "center",
                background: i % 2 === 0 ? "transparent" : "#ffffff04",
                color: "inherit",
                textDecoration: "none",
                cursor: isPlaying11 ? "pointer" : "default",
                transition: isPlaying11 ? "background 0.18s, transform 0.18s" : "none",
                animationDelay: visible ? `${i * 0.03}s` : "0s",
              }}
              onMouseEnter={(e) => {
                if (isPlaying11) {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                }
              }}
              onMouseLeave={(e) => {
                if (isPlaying11) {
                  (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "transparent" : "#ffffff04";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }
              }}
            >
            <span style={{ fontSize: 12, color: "#444", fontWeight: 600 }}>{i + 1}</span>

            <span
              style={{
                fontSize: 14,
                fontWeight: p.name === team.captain ? 700 : 500,
                color: p.name === team.captain ? team.accent : "#e8e8e8",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {p.name}
              {p.name === team.captain && (
                <span
                  style={{
                    fontSize: 9,
                    background: team.accent,
                    color: "#000",
                    borderRadius: 4,
                    padding: "1px 5px",
                    fontWeight: 800,
                    letterSpacing: 0.5,
                  }}
                >
                  C
                </span>
              )}
            </span>

            <span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: roleColors[p.role] ?? "#888",
                  background: roleBg[p.role] ?? "#88888815",
                  borderRadius: 6,
                  padding: "3px 8px",
                  border: `1px solid ${roleColors[p.role] ?? "#888"}33`,
                }}
              >
                {p.role}
              </span>
            </span>

            <span style={{ fontSize: 12, color: "#666" }}>{p.country}</span>

            <span style={{ fontSize: 14, color: isPlaying11 ? "#22c55e" : "#333", fontWeight: 700 }}>›</span>
          </RowTag>
        );})}
      </div>

      {/* Role Legend */}
      <div
        style={{
          display: "flex",
          gap: "clamp(10px, 2vw, 16px)",
          padding: "clamp(10px, 2vw, 12px) clamp(12px, 2vw, 24px)",
          borderTop: `1px solid ${team.color}22`,
          flexWrap: "wrap",
          background: "#ffffff04",
        }}
      >
        {Object.entries(roleColors).map(([role, color]) => (
          <div key={role} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#555" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}
