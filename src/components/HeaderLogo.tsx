
import React from 'react';

export const HeaderLogo = () => {
  return (
    <div className="flex items-center space-x-1">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-noda-gold rounded-md transform rotate-45"></div>
        <div className="absolute inset-[3px] bg-noda-dark rounded-sm transform rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-noda-gold text-xl font-bold">N</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
