
import React from 'react';

export const CryptoBadges = () => {
  const cryptoIcons = [
    { symbol: "₿", label: "Bitcoin" },
    { symbol: "Ξ", label: "Ethereum" },
    { symbol: "◈", label: "Tether" },
    { symbol: "Ƭ", label: "Tron" },
    { symbol: "Ð", label: "Dogecoin" },
  ];

  return (
    <div className="inline-flex items-center">
      {cryptoIcons.map((crypto, index) => (
        <span 
          key={index} 
          className="crypto-badge" 
          title={crypto.label}
        >
          {crypto.symbol}
        </span>
      ))}
    </div>
  );
};

export default CryptoBadges;
