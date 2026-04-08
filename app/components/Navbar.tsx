"use client";
import Link from "next/link";
import { teams } from "../data/teams";

export default function Navbar() {
  return (
    <nav
      className="animate-slideDown"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10,10,15,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid #ffffff0f",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        height: 60,
        overflowX: "auto",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="animate-bounceIn"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          flexShrink: 0,
          animationDelay: "0.1s",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "linear-gradient(135deg, #ff6b00, #ff0080)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: 13,
            color: "#fff",
            boxShadow: "0 4px 12px rgba(255,107,0,0.4)",
          }}
        >
          IPL
        </div>
        <span
          style={{
            fontWeight: 800,
            fontSize: 16,
            background: "linear-gradient(90deg, #ff6b00, #ff0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          2026
        </span>
      </Link>

      <div style={{ width: 1, height: 28, background: "#ffffff15", flexShrink: 0 }} />

      {/* Team Links */}
      {teams.map((t, i) => (
        <a
          key={t.shortName}
          href={`/#${t.shortName}`}
          className="animate-fadeIn"
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 7,
            textDecoration: "none",
            color: "#999",
            fontSize: 13,
            fontWeight: 700,
            padding: "6px 12px",
            borderRadius: 8,
            border: `1px solid ${t.color}33`,
            background: `${t.color}11`,
            transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            whiteSpace: "nowrap",
            animationDelay: `${0.1 + i * 0.05}s`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            (e.currentTarget as HTMLAnchorElement).style.background = `${t.color}33`;
            (e.currentTarget as HTMLAnchorElement).style.borderColor = `${t.color}66`;
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 12px ${t.color}44`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#999";
            (e.currentTarget as HTMLAnchorElement).style.background = `${t.color}11`;
            (e.currentTarget as HTMLAnchorElement).style.borderColor = `${t.color}33`;
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
        >
          <img src={t.logo} alt={t.shortName} width={20} height={20} style={{ borderRadius: "50%" }} />
          {t.shortName}
        </a>
      ))}
    </nav>
  );
}
