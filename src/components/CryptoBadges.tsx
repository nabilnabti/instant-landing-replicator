
import React from 'react';

export const CryptoBadges = () => {
  const cryptoIcons = [
    { icon: "₿", label: "Bitcoin", price: "34,500€" },
    { icon: "Ξ", label: "Ethereum", price: "1,950€" },
    { icon: "₮", label: "Tether", price: "0,92€" },
    { icon: "◈", label: "BNB", price: "205€" },
  ];

  return (
    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
      {cryptoIcons.map((crypto, index) => (
        <div 
          key={index} 
          className="crypto-badge mx-2 text-white flex items-center" 
          title={`${crypto.label}: ${crypto.price}`}
        >
          <span className="text-lg font-medium mr-1">{crypto.icon}</span>
          <span className="text-xs font-light hidden sm:inline">→ €</span>
        </div>
      ))}
    </div>
  );
};

export default CryptoBadges;
