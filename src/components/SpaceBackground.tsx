import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    setCanvasDimensions();

    // Update canvas size on window resize
    window.addEventListener('resize', setCanvasDimensions);

    // Star properties
    const stars: { x: number; y: number; radius: number; color: string; velocity: number; twinkleSpeed: number; twinklePhase: number }[] = [];
    const numStars = Math.floor(canvas.width * canvas.height / 1000);
    
    // Create stars with twinkling effect
    for (let i = 0; i < numStars; i++) {
      const radius = Math.random() * 1.5;
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
        velocity: Math.random() * 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }

    // Shooting star properties with enhanced effects
    const shootingStars: {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      life: number;
      maxLife: number;
      width: number;
    }[] = [];

    // Create a new shooting star with enhanced properties
    const createShootingStar = () => {
      const angle = Math.random() * Math.PI / 2 + Math.PI / 8;
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 120 + 100,
        speed: Math.random() * 18 + 12,
        angle,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 50 + 25,
        width: Math.random() * 3 + 2
      });
    };

    // Create shooting stars more frequently
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.5) {
        createShootingStar();
      }
    }, 1000);

    // Animation
    let animationFrameId: number;
    let time = 0;
    
    const render = () => {
      time += 0.016;
      ctx.fillStyle = 'rgb(10, 10, 30)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars with twinkling effect
      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * twinkle, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace(/[\d.]+\)$/g, `${twinkle})`);
        ctx.fill();
        
        // Move stars with parallax effect
        star.y += star.velocity * (1 + Math.sin(time * 0.1) * 0.2);
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Draw and update shooting stars with enhanced effects
      shootingStars.forEach((star, index) => {
        const startX = star.x;
        const startY = star.y;
        const endX = star.x - Math.cos(star.angle) * star.length;
        const endY = star.y - Math.sin(star.angle) * star.length;
        
        // Enhanced gradient for the trail
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.1, `rgba(111, 168, 220, ${star.opacity * 0.9})`);
        gradient.addColorStop(0.3, `rgba(94, 96, 206, ${star.opacity * 0.7})`);
        gradient.addColorStop(0.5, `rgba(75, 0, 130, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        // Draw enhanced trail
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.width;
        ctx.stroke();
        
        // Enhanced head glow effect
        const glowSize = star.width * 2;
        ctx.beginPath();
        ctx.arc(startX, startY, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Secondary glow
        ctx.beginPath();
        ctx.arc(startX, startY, glowSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
        ctx.fill();
        
        // Update position with smooth acceleration
        const acceleration = Math.sin(star.life / star.maxLife * Math.PI) * 0.5 + 1;
        star.x += Math.cos(star.angle) * star.speed * acceleration;
        star.y += Math.sin(star.angle) * star.speed * acceleration;
        
        star.life += 1.5;
        if (star.life > star.maxLife / 2) {
          star.opacity = 1 - ((star.life - star.maxLife / 2) / (star.maxLife / 2));
        }
        
        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height || star.life >= star.maxLife) {
          shootingStars.splice(index, 1);
        }
      });
      
      // Enhanced nebula effect
      const nebulaGradient = ctx.createRadialGradient(
        canvas.width * 0.5, 
        canvas.height * 0.5, 
        0, 
        canvas.width * 0.5, 
        canvas.height * 0.5, 
        canvas.width * 0.8
      );
      
      const pulseIntensity = (Math.sin(time * 0.5) * 0.01 + 0.03);
      nebulaGradient.addColorStop(0, `rgba(75, 0, 130, ${pulseIntensity})`);
      nebulaGradient.addColorStop(0.5, `rgba(138, 43, 226, ${pulseIntensity * 0.7})`);
      nebulaGradient.addColorStop(1, 'rgba(0, 0, 50, 0)');
      
      ctx.fillStyle = nebulaGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default SpaceBackground;