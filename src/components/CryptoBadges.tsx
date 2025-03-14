
import React from 'react';

export const CryptoBadges = () => {
  const cryptoIcons = [
    { icon: "₿", label: "Bitcoin" },
    { icon: "Ξ", label: "Ethereum" },
    { icon: "◈", label: "Tether" },
    { icon: "Ƭ", label: "Tron" },
    { icon: "◑", label: "BNB" },
  ];

  return (
    <div className="inline-flex items-center bg-black/30 rounded-full px-2 py-1 border border-white/20">
      {cryptoIcons.map((crypto, index) => (
        <span 
          key={index} 
          className="crypto-badge mx-1 text-white text-lg font-medium" 
          title={crypto.label}
        >
          {crypto.icon}
        </span>
      ))}
    </div>
  );
};

export default CryptoBadges;
