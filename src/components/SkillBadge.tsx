import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800 text-sm">
      {name}
    </span>
  );
};

export default SkillBadge;