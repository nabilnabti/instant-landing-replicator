
import React from 'react';

export const UserAvatars = () => {
  // Generate random colors for avatars
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
    'bg-red-500', 'bg-purple-500', 'bg-pink-500'
  ];

  return (
    <div className="flex -space-x-2">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className={`${colors[i % colors.length]} w-8 h-8 rounded-full border-2 border-noda-dark flex items-center justify-center text-xs text-white font-bold`}
        >
          {String.fromCharCode(65 + i)}
        </div>
      ))}
      <div className="w-8 h-8 rounded-full bg-noda-card border-2 border-noda-dark flex items-center justify-center text-xs font-bold">
        10k
      </div>
    </div>
  );
};

export default UserAvatars;
