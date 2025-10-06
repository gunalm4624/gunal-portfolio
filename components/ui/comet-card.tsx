import React from 'react';

interface CometCardProps {
  children: React.ReactNode;
}

export const CometCard: React.FC<CometCardProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
    </div>
  );
};
