import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, period, description, skills }) => {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
      <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <Briefcase size={14} className="text-white" />
      </div>
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
            <p className="text-gray-300">{company}</p>
          </div>
          <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800 text-sm">
            {period}
          </span>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;