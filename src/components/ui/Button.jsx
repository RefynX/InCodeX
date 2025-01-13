import React from 'react';

export const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variants = {
    default: 'bg-red-600 hover:bg-red-700 text-white',
    outline: 'border border-red-600 text-red-600 hover:bg-red-50',
    ghost: 'text-red-600 hover:bg-red-50',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};