import React from 'react';

export const Card = ({ className = '', ...props }) => {
  return (
    <div 
      className={`rounded-lg border border-zinc-800 bg-zinc-900 text-gray-100 ${className}`} 
      {...props} 
    />
  );
};

export const CardHeader = ({ className = '', ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props} />
  );
};

export const CardTitle = ({ className = '', ...props }) => {
  return (
    <h3 className={`text-2xl font-semibold text-white ${className}`} {...props} />
  );
};

export const CardDescription = ({ className = '', ...props }) => {
  return (
    <p className={`text-sm text-gray-400 ${className}`} {...props} />
  );
};

export const CardContent = ({ className = '', ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props} />
  );
};
