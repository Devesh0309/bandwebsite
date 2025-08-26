import React, { useRef, useEffect } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.5,
      color: "#e0e0e0",
    });

    const init = () => {
      particles.current = [];
      for (let i = 0; i < 100; i++) particles.current.push(createParticle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.x = p.x < 0 ? canvas.width : 0;
        if (p.y < 0 || p.y > canvas.height) p.y = p.y < 0 ? canvas.height : 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    init();
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>;
};

export default ParticleBackground;
