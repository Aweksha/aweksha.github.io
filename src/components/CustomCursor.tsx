import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    const moveMouse = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      cursor.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", moveMouse);

    const animationFrame = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="pixel-magnifier">
      <svg
        className="magnifier-art"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {/* Outer pixel rim */}
        <circle
          className="magnifier-outer"
          cx="38"
          cy="36"
          r="27"
        />

        {/* Inner lens */}
        <circle
          className="magnifier-inner"
          cx="38"
          cy="36"
          r="21"
        />

        {/* Glass reflection */}
        <path
          className="magnifier-reflection"
          d="M25 24 C30 18 39 16 46 19"
        />

        <path
          className="magnifier-reflection-small"
          d="M22 31 C22 27 23 25 25 23"
        />

        {/* Connector */}
        <rect
          className="magnifier-metal"
          x="56"
          y="54"
          width="14"
          height="9"
          rx="2"
          transform="rotate(43 63 58)"
        />

        {/* Handle */}
        <path
          className="magnifier-handle-main"
          d="
            M63 58
            L89 83
            L83 90
            L57 64
            Z
          "
        />

        {/* Handle detail */}
        <path
          className="magnifier-handle-detail"
          d="M67 67 L82 82"
        />

        <path
          className="magnifier-handle-detail"
          d="M72 63 L87 78"
        />

        {/* End cap */}
        <path
          className="magnifier-cap"
          d="
            M82 88
            L88 82
            L94 88
            L88 94
            Z
          "
        />
      </svg>

      <span className="magnifier-sparkle sparkle-a">✦</span>
      <span className="magnifier-sparkle sparkle-b">✧</span>
      <span className="magnifier-sparkle sparkle-c">✦</span>
    </div>
  );
}

export default CustomCursor;