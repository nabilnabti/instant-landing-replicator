
import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeaderLogo from '../components/HeaderLogo';
import StarField from '../components/StarField';
import CryptoBadges from '../components/CryptoBadges';
import UserAvatars from '../components/UserAvatars';
import QrCodeBox from '../components/QrCodeBox';
import PhoneDisplay from '../components/PhoneDisplay';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-noda-dark text-white overflow-hidden">
      <StarField />
      
      {/* Main container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Navigation */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <HeaderLogo />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">For Business</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">How it Works?</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Features</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-white/80 transition-colors underline">Sign Up</a>
            <button className="bg-noda-dark border border-white/10 hover:bg-white/5 text-white px-4 py-2 rounded-full transition-colors flex items-center">
              Get the App
              <span className="ml-2 flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full text-[10px]">+</span>
            </button>
          </div>
        </header>
        
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          
          {/* Left column - Hero text */}
          <div className="hero-card p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-6xl font-bold leading-tight mb-8">
                New <span className="inline-block">g<CryptoBadges />als</span> 
                <br />require new<br />
                meth<span className="inline-block relative mx-1">
                  <span className="inline-block w-8 h-4 bg-white/20 rounded-full relative">
                    <span className="absolute left-1/4 top-0 bottom-0 w-1/2 bg-white rounded-full"></span>
                  </span>
                </span>ds <span className="text-yellow-500">⚡</span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-8">
                All your crypto-assets are at your fingertips and ready<br />
                to be the means of payment in the simplest method!
              </p>
            </div>
            
            <div className="flex items-center mt-8">
              <a href="#" className="noda-button mr-6 flex items-center bg-gradient-to-r from-yellow-500 to-amber-600 text-black rounded-full px-8 py-3">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Your Card
              </a>
              <UserAvatars />
            </div>
          </div>
          
          {/* Right column - Phone display */}
          <div className="hero-card p-8 flex flex-col justify-center items-center">
            <PhoneDisplay />
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* QR code section */}
          <div className="hero-card p-8 flex flex-col justify-center items-start">
            <QrCodeBox />
          </div>
          
          {/* Brand logo section */}
          <div className="hero-card flex items-center justify-center p-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-noda-gold/90 rounded-xl transform rotate-0"></div>
                  <div className="absolute inset-[8px] bg-noda-dark rounded-lg transform rotate-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/lovable-uploads/259c3d22-791c-4847-8f5f-d86e7517f129.png" alt="Noda Pay Logo" className="w-24 h-24 object-contain" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mt-4">Noda Pay</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
