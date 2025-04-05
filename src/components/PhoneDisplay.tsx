
import React from 'react';

export const PhoneDisplay = () => {
  return (
    <div className="relative max-w-xs mx-auto">
      {/* 3D Device Mockup */}
      <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-black shadow-2xl transform rotate-0 perspective-1000">
        {/* Phone screen with blue background */}
        <div className="bg-[#1e3a5f] pt-8 pb-6 px-4 rounded-t-3xl h-[500px]">
          {/* Back button and title */}
          <div className="flex items-center mb-8">
            <div className="mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-white text-xl font-semibold">New Payment</div>
            <div className="ml-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FF7846" fillOpacity="0.2"/>
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#FF7846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9H9.01" stroke="#FF7846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9H15.01" stroke="#FF7846" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Amount */}
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-white">10 €</div>
            <div className="text-white opacity-80 mt-1">Choisissez votre crypto</div>
          </div>

          {/* Crypto options */}
          <div className="space-y-4 mb-6">
            {/* Bitcoin */}
            <div className="bg-black bg-opacity-30 rounded-2xl p-4 flex items-center">
              <div className="w-6 h-6 mr-3 text-xl flex items-center justify-center">
                <span>₿</span>
              </div>
              <div>
                <div className="text-white font-medium">Bitcoin</div>
                <div className="text-white text-sm opacity-80">1 BTC = 134,500 €</div>
              </div>
            </div>
            
            {/* Ethereum */}
            <div className="bg-black bg-opacity-30 rounded-2xl p-4 flex items-center">
              <div className="w-6 h-6 mr-3 text-xl flex items-center justify-center">
                <span>Ξ</span>
              </div>
              <div>
                <div className="text-white font-medium">Ethereum</div>
                <div className="text-white text-sm opacity-80">1 ETH = 1,950 €</div>
              </div>
            </div>
            
            {/* Tether */}
            <div className="bg-black bg-opacity-30 rounded-2xl p-4 flex items-center">
              <div className="w-6 h-6 mr-3 text-xl flex items-center justify-center">
                <span>₮</span>
              </div>
              <div>
                <div className="text-white font-medium">Tether USD</div>
                <div className="text-white text-sm opacity-80">1 USDT = 0,92 €</div>
              </div>
            </div>
          </div>

          {/* Generate QR Code Button */}
          <div className="mt-6">
            <button className="w-full py-4 bg-[#E67E46] rounded-2xl text-white font-medium">
              Generate QR Code
            </button>
          </div>

          {/* Home button */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-gray-300"></div>
          </div>
        </div>
      </div>
      
      {/* Mockup shadows and reflections for 3D effect */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-white/20 to-transparent rounded-[40px] pointer-events-none"></div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-md rounded-full"></div>
    </div>
  );
};

export default PhoneDisplay;
