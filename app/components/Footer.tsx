"use client";
import Link from "next/link";
import { teams } from "../data/teams";

export default function Footer() {
  return (
    <footer
      className="animate-fadeInUp"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #07070d 100%)",
        borderTop: "1px solid #ffffff0a",
        marginTop: 100,
        padding: "60px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 48,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "linear-gradient(135deg, #ff6b00, #ff0080)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 14,
                color: "#fff",
                boxShadow: "0 4px 16px rgba(255,107,0,0.3)",
              }}
            >
              IPL
            </div>
            <span
              style={{
                fontWeight: 900,
                fontSize: 20,
                background: "linear-gradient(90deg, #ff6b00, #ff0080)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              IPL 2026
            </span>
          </div>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 20 }}>
            Your ultimate fan destination for IPL 2026. All teams, squads, and player stats in one place.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {["🏏", "⚡", "🏆"].map((emoji, i) => (
              <div
                key={i}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Teams */}
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#ff6b00",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Teams
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 16px",
            }}
          >
            {teams.map((t) => (
              <Link
                key={t.shortName}
                href={`/#${t.shortName}`}
                style={{
                  fontSize: 13,
                  color: "#777",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#777")}
              >
                {t.shortName}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#ff6b00",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Quick Links
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { href: "/", label: "All Teams" },
              { href: "/#standings", label: "Points Table" },
              { href: "/#stats", label: "Player Stats" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontSize: 13,
                  color: "#777",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#777")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "48px auto 0",
          paddingTop: 24,
          borderTop: "1px solid #ffffff08",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 13, color: "#444", fontWeight: 500 }}>
          © 2026 IPL Fan Hub · Made with ❤️ for cricket fans
        </span>
        <span style={{ fontSize: 13, color: "#444", fontWeight: 500 }}>
          Not affiliated with BCCI or IPL
        </span>
      </div>
    </footer>
  );
}
