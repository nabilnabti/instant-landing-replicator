
import React from 'react';

export const PhoneDisplay = () => {
  return (
    <div className="relative max-w-xs mx-auto">
      {/* Phone frame */}
      <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-black">
        {/* Phone screen */}
        <div className="bg-black pt-8 pb-6 px-4 rounded-t-3xl">
          {/* Status bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-xs text-white">9:41</div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" fill="none" stroke="currentColor" className="text-white">
                  <path d="M18 8.5V7C18 5.34315 16.6569 4 15 4H9C7.34315 4 6 5.34315 6 7V8.5" strokeLinecap="round" strokeWidth="2" />
                  <path d="M8 15.5V20L12 17L16 20V15.5" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" fill="none" stroke="currentColor" className="text-white">
                  <path d="M19 5H5C4 5 3 5.9 3 7V17C3 18.1 4 19 5 19H19C20 19 21 18.1 21 17V7C21 5.9 20 5 19 5Z" strokeWidth="2" />
                  <path d="M3 7L12 13L21 7" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* App title */}
          <div className="text-xl font-bold text-white mb-6">Home</div>

          {/* Card section */}
          <div className="flex space-x-3 mb-6">
            {/* Gold card */}
            <div className="w-28 h-20 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 flex flex-col justify-between">
              <div className="flex items-center text-xs text-white">
                <span className="mr-1">1</span>
                <span className="text-[8px]">*4321</span>
              </div>
              <div>
                <div className="text-xs text-white">$5,432<span className="text-[8px]">.87</span></div>
                <div className="flex items-center space-x-1">
                  <div className="w-5 h-3 bg-white rounded-sm opacity-80"></div>
                  <div className="w-5 h-3 bg-white rounded-sm opacity-80"></div>
                </div>
              </div>
            </div>
            
            {/* Blue card */}
            <div className="w-28 h-20 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3 flex flex-col justify-between">
              <div className="flex items-center text-xs text-white">
                <span className="mr-1">5</span>
                <span className="text-[8px]">*2620</span>
              </div>
              <div>
                <div className="text-xs text-white">$458<span className="text-[8px]">.90</span></div>
                <div className="w-8 h-3 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-[6px] text-blue-600 font-bold">VISA</span>
                </div>
              </div>
            </div>
          </div>

          {/* App features */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {/* Feature buttons */}
            <div className="bg-gray-800 rounded-xl p-2 flex flex-col items-center">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" className="text-white">
                  <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
                  <path d="M12 18H12.01" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[8px] text-gray-400">Mobile Top Up</span>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-2 flex flex-col items-center">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" className="text-white">
                  <path d="M20 9V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V9" strokeWidth="2" />
                  <path d="M8 9V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V9" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-[8px] text-gray-400">Utility Bills</span>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-2 flex flex-col items-center">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" className="text-white">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                  <path d="M8 11V17" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 8V17" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 14V17" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[8px] text-gray-400">Tickets</span>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-2 flex flex-col items-center">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" className="text-white">
                  <path d="M4 4H20V20H4V4Z" strokeWidth="2" />
                  <path d="M4 8H20" strokeWidth="2" />
                  <path d="M8 4V8" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-[8px] text-gray-400">QR Scanner</span>
            </div>
          </div>

          {/* Second row of features */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            <div className="bg-gray-800 rounded-xl p-2 flex flex-col items-center">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" className="text-white">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" strokeWidth="2" />
                  <path d="M12 7V12L15 15" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[8px] text-gray-400">Insurance</span>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-2 flex flex-col items-center">
              <div className="w-8 h-8 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" className="text-white">
                  <path d="M12 5V19" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 12H19" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[8px] text-gray-400">Add More</span>
            </div>
          </div>

          {/* History section */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-white">History</span>
              <span className="text-xs text-gray-400">View all</span>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-3 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-noda-gold flex items-center justify-center mr-3">
                  <span className="text-xs">$</span>
                </div>
                <div>
                  <div className="text-xs text-white">Money Transfer</div>
                  <div className="text-[8px] text-gray-400">February 5, 2023</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white">260,00 USD</div>
                <div className="text-[8px] text-gray-400">0,005 BTC</div>
              </div>
            </div>
          </div>

          {/* Navigation bar */}
          <div className="flex justify-between pt-2">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" className="text-white">
                  <path d="M9 22V12H15V22" strokeWidth="2" />
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" strokeWidth="2" />
                </svg>
              </div>
              <div className="w-1 h-1 rounded-full bg-white"></div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" className="text-gray-500">
                  <path d="M4 21V8.8C4 8.32 4.36 7.8 4.8 7.6L14.8 3.12C14.96 3.08 15.12 3.04 15.28 3.04C16.08 3.04 16.76 3.64 16.76 4.36V8.88" strokeWidth="2" />
                  <path d="M8 12H20V22H8V12Z" strokeWidth="2" />
                  <path d="M12 22V12" strokeWidth="2" />
                  <path d="M16 22V12" strokeWidth="2" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 mb-1 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" className="text-gray-500">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" strokeWidth="2" />
                  <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brand mark */}
      <div className="absolute top-8 right-4 rounded-full z-20 opacity-20">
        <div className="w-16 h-16 flex items-center justify-center">
          <div className="text-[8px] text-white text-opacity-80 flex flex-col items-center font-light">
            <div>NODA PAY LTD</div>
            <div>•</div>
            <div>BLOCKCHAIN</div>
            <div>•</div>
            <div>QUALITY</div>
            <div>•</div>
            <div>NODA PAY LTD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDisplay;
