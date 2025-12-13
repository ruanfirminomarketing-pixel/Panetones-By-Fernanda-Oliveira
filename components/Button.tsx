import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-lg md:text-xl uppercase tracking-wide";
  
  const variants = {
    primary: "bg-holiday-red text-white border-2 border-holiday-red hover:bg-red-700",
    secondary: "bg-holiday-green text-white border-2 border-holiday-green hover:bg-emerald-900"
  };

  const pulseAnimation = pulse ? "animate-bounce" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${pulseAnimation} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};