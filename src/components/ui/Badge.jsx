import React from 'react';

export const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold';
  
  const variants = {
    default: 'bg-red-100 text-red-800',
    secondary: 'bg-gray-800 text-white',
    outline: 'border border-red-800 text-red-800',
  };

  const badgeStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <div className={badgeStyles} {...props}>
      {children}
    </div>
  );
};