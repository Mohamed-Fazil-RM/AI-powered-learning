
import React from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
  icon?: LucideIcon;
  label: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withIcon = false,
  icon: Icon = ChevronRight,
  label,
  className,
  ...props
}) => {
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/10",
    secondary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
    outline: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50",
    white: "bg-white text-blue-700 hover:scale-105 shadow-xl",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button
      className={cn(
        "relative rounded-full font-bold transition-all active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span>{label}</span>
      {withIcon && <Icon className={cn(
        "w-4 h-4 transition-transform",
        size === 'md' && "w-5 h-5",
        size === 'lg' && "w-6 h-6",
        "group-hover:translate-x-1"
      )} />}
    </button>
  );
};

export default CTAButton;
