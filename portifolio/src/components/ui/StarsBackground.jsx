import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Canvas = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  opacity: 0.7;
`;

function generateStars(count) {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));
}

export default function StarsBackground() {
  const [stars, setStars] = useState(() => generateStars(160));

  useEffect(() => {
    const onResize = () => {
      setStars(generateStars(160));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Canvas aria-hidden="true">
      {stars.map((star, index) => (
        <Star
          key={index}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
        />
      ))}
    </Canvas>
  );
}
