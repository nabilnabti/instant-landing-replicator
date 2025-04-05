
import React from 'react';

export const UserAvatars = () => {
  return (
    <div className="flex -space-x-3">
      {[...Array(4)].map((_, i) => (
        <div 
          key={i}
          className="w-10 h-10 rounded-full border-2 border-noda-dark overflow-hidden"
          style={{ 
            backgroundImage: `url(https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}
      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white">
        2k+
      </div>
    </div>
  );
};

export default UserAvatars;
