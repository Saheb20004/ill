"use client";
import { useRef, useState } from "react";

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => alert("Place ipl.mp3 in the /public folder to play the anthem.")); }
  };

  return (
    <>
      {/* Place your ipl.mp3 in /public folder */}
      <audio ref={audioRef} src="/ipl.mp3" loop />
      <button
        onClick={toggle}
        style={{
          marginTop: 28,
          padding: "12px 32px",
          borderRadius: 40,
          border: "none",
          background: playing
            ? "linear-gradient(90deg,#ff0080,#7c3aed)"
            : "linear-gradient(90deg,#ff6b00,#ff0080)",
          color: "#fff",
          fontWeight: 800,
          fontSize: 15,
          cursor: "pointer",
          letterSpacing: 1,
          boxShadow: "0 0 24px #ff6b0066",
          transition: "background 0.3s",
        }}
      >
        {playing ? "⏸ Pause Anthem" : "▶ Play IPL Anthem"}
      </button>
    </>
  );
}
