import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

function Page({ onClick, isFlipping }) {
  const pageRef = useRef();
  const [flipped, setFlipped] = useState(false);

  useFrame(() => {
    if (isFlipping) {
      gsap.to(pageRef.current.rotation, {
        y: flipped ? 0 : -Math.PI, // Animasi membalik halaman
        duration: 1,
        ease: "power2.inOut",
      });
    }
  });

  const handleFlip = () => {
    if (!isFlipping) {
      setFlipped(!flipped);
      onClick();
    }
  };

  return (
    <mesh ref={pageRef} position={[0, 0, 0]} onClick={handleFlip}>
      <planeGeometry args={[3, 4]} />
      <meshBasicMaterial color={flipped ? "white" : "orange"} />
    </mesh>
  );
}

export default function FlipBook() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = useState(false);

  const goToStory = () => {
    setIsFlipping(true);
    setTimeout(() => navigate("/story"), 1000);
  };

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <Page onClick={goToStory} isFlipping={isFlipping} />
    </Canvas>
  );
}
