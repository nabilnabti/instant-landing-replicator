
import React from 'react';

export const StarField = () => {
  const stars = Array.from({ length: 60 }, (_, i) => {
    const size = Math.random() > 0.85 ? 'large-star' : 
                 Math.random() > 0.6 ? 'medium-star' : 
                 Math.random() > 0.3 ? 'small-star' : 'tiny-star';
    
    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      size,
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.size}`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
