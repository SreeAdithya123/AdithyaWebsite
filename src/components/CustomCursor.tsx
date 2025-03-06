import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  // Removed unused state variable 'linkHovered'
  const [, setLinkHovered] = useState(false);
  
  // Use refs for trail positions to create smoother animation
  const trailPositions = useRef<{ x: number; y: number }[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  // Animation function for smoother cursor movement
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Update trail positions
      if (trailPositions.current.length === 0) {
        for (let i = 0; i < 5; i++) {
          trailPositions.current.push({ x: position.x, y: position.y });
        }
      } else {
        // Shift positions in the array
        for (let i = trailPositions.current.length - 1; i > 0; i--) {
          trailPositions.current[i] = { ...trailPositions.current[i - 1] };
        }
        trailPositions.current[0] = { ...position };
      }
    }
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      const handleLinkMouseEnter = () => setLinkHovered(true);
      const handleLinkMouseLeave = () => setLinkHovered(false);

      const links = document.querySelectorAll('a, button, input, textarea, select');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleLinkMouseEnter);
        link.addEventListener('mouseleave', handleLinkMouseLeave);
      });

      return () => {
        links.forEach(link => {
          link.removeEventListener('mouseenter', handleLinkMouseEnter);
          link.removeEventListener('mouseleave', handleLinkMouseLeave);
        });
      };
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const cleanupLinkEvents = handleLinkHoverEvents();

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cleanupLinkEvents();
    };
  }, []);

  // Get the last trail position for the trailing effect
// Remove unused variable declaration since trailPos is not used anywhere

  return (
    <>
      {/* Inner dot */}
      <div 
        className={`custom-cursor-inner fixed pointer-events-none z-50 rounded-full ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-50' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.1s ease-out, transform 0.15s ease-out'
        }}
      />
      
      {/* Trail effect */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div 
          key={index}
          className={`custom-cursor-trail fixed pointer-events-none z-40 rounded-full ${hidden ? 'opacity-0' : `opacity-${60 - index * 10}`}`}
          style={{
            left: `${trailPositions.current[index]?.x || position.x}px`,
            top: `${trailPositions.current[index]?.y || position.y}px`,
            width: `${15 - index * 2}px`,
            height: `${15 - index * 2}px`,
            background: `rgba(139, 92, 246, ${0.2 - index * 0.03})`,
            boxShadow: `0 0 ${10 - index * 1.5}px ${2 - index * 0.2}px rgba(139, 92, 246, ${0.1 - index * 0.015})`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.2s ease-out'
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;