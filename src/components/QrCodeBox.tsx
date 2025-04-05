
import React from 'react';

export const QrCodeBox = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="bg-white p-4 rounded-lg w-36 h-36 mb-6 shadow-lg">
        <div className="grid grid-cols-6 grid-rows-6 gap-1 w-full h-full">
          {/* Static QR code elements */}
          <div className="col-span-2 row-span-2 bg-black rounded-lg"></div>
          <div className="col-span-1 row-span-2 bg-transparent"></div>
          <div className="col-span-2 row-span-2 bg-black rounded-lg"></div>
          <div className="col-span-1 row-span-2 bg-transparent"></div>
          
          <div className="col-span-1 row-span-1 bg-transparent"></div>
          <div className="col-span-1 row-span-1 bg-black"></div>
          <div className="col-span-1 row-span-1 bg-transparent"></div>
          <div className="col-span-1 row-span-1 bg-black"></div>
          <div className="col-span-1 row-span-1 bg-transparent"></div>
          <div className="col-span-1 row-span-1 bg-black"></div>

          <div className="col-span-2 row-span-2 bg-black rounded-lg"></div>
          <div className="col-span-2 row-span-1 bg-black"></div>
          <div className="col-span-2 row-span-2 bg-black rounded-lg"></div>
          
          {/* Middle sections with random dots */}
          {[...Array(18)].map((_, i) => (
            <div 
              key={i}
              className={`col-span-1 row-span-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`}
            ></div>
          ))}
          
          <div className="col-span-2 row-span-2 bg-black rounded-lg"></div>
          <div className="col-span-1 row-span-1 bg-transparent"></div>
          <div className="col-span-1 row-span-1 bg-black"></div>
          <div className="col-span-2 row-span-2 bg-black rounded-lg"></div>
        </div>
      </div>
      <div className="text-lg font-bold text-white text-center md:text-left">Téléchargez l'application</div>
      <div className="text-sm text-gray-400 text-center md:text-left">
        Recevez un terminal de paiement<br />
        et obtenez <span className="text-noda-gold font-medium">-15%</span> sur<br />
        les <span className="text-white font-medium">frais de transaction</span>!
      </div>
    </div>
  );
};

export default QrCodeBox;
