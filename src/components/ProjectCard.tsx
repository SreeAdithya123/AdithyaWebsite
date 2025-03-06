import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image, link }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 transition-all duration-500 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 opacity-0 hover-lift hover-glow"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
        <h3 className="text-xl font-semibold mb-2 text-blue-300 transition-colors duration-300 group-hover:text-blue-200">{title}</h3>
        <p className="text-gray-400 mb-4 transition-colors duration-300 group-hover:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 border border-blue-800 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-800/40"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 group-hover:translate-x-2"
        >
          View Project <ExternalLink size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-45" />
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>
    </div>
  );
};

export default ProjectCard;