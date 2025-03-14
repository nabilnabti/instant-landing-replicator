
import React from 'react';

export const UserAvatars = () => {
  // Les URLs vers des images de profil peuvent être remplacées par de vraies images
  return (
    <div className="flex -space-x-3">
      {[...Array(6)].map((_, i) => (
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
      <div className="w-10 h-10 rounded-full bg-noda-dark border-2 border-noda-dark flex items-center justify-center text-xs font-bold">
        10k
      </div>
    </div>
  );
};

export default UserAvatars;
