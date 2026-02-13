
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden transition-transform ${className}`}
      style={{ 
        width: size, 
        height: size,
      }}
    >
      <img 
        src="https://ik.imagekit.io/fazil/Logo-png.png?updatedAt=1767018728555" 
        alt="LearnEzily Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
