import { useEffect, useState } from "react";

const bootLines = [
  "Booting personal environment...",
  "Loading developer profile...",
  "Taking a break...",
  "Okay i'm back...",
  "Boot sequence complete.",
];

export default function BootScreen({ onComplete }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (visibleCount < bootLines.length) {
      const timer = setTimeout(() => {
        setVisibleCount((count) => count + 1);
      }, 950);

      return () => clearTimeout(timer);
    }

    const fadeTimer = setTimeout(() => setFade(true), 900);
    const completeTimer = setTimeout(() => onComplete(), 1150);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [visibleCount, onComplete]);

  return (
    <div id="boot-screen" className={fade ? "boot-fade" : ""}>
      <div id="boot-terminal" className="terminal-window">
        <div className="terminal-topbar">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
        </div>

        <div className="terminal-body">
          <div id="terminal-output">
            {bootLines.slice(0, visibleCount).map((line, index) => (
              <p key={index}>
                <span className="prompt">&gt;</span> {line}
              </p>
            ))}
          </div>

          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
}