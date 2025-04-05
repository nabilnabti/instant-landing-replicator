
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import HeaderLogo from '../components/HeaderLogo';
import StarField from '../components/StarField';
import CryptoBadges from '../components/CryptoBadges';
import UserAvatars from '../components/UserAvatars';
import QrCodeBox from '../components/QrCodeBox';
import PhoneDisplay from '../components/PhoneDisplay';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#1e3a5f] text-white overflow-hidden">
      <StarField />
      
      {/* Main container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Navigation */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <HeaderLogo />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Pour Commerçants</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Comment ça marche ?</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Tarifs</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-white/80 transition-colors underline">Connexion</a>
            <button className="bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full transition-colors flex items-center">
              Démo gratuite
              <span className="ml-2 flex items-center justify-center w-5 h-5 bg-noda-gold rounded-full text-[10px] text-black">+</span>
            </button>
          </div>
        </header>
        
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          
          {/* Left column - Hero text */}
          <div className="hero-card p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-8">
                Acceptez les<br /> crypto-paiements,<br />
                Recevez en <span className="text-noda-gold">€</span> !
              </h1>
              
              <p className="text-gray-200 text-lg mb-8">
                Terminal de paiement plug & play pour commerçants.<br />
                Simple, sans compétence technique requise.
              </p>

              {/* Key features with check marks */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="mr-2 text-noda-gold"><Check size={20} /></div>
                  <div>Paiement en crypto, règlement en euros sur votre compte bancaire</div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-noda-gold"><Check size={20} /></div>
                  <div>Aucun risque de volatilité - taux de conversion garantis</div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-noda-gold"><Check size={20} /></div>
                  <div>Terminal à usage unique: seulement 249€</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <a href="#" className="noda-button w-full sm:w-auto flex items-center justify-center bg-noda-gold text-black rounded-full px-8 py-3">
                <ArrowRight className="w-5 h-5 mr-2" />
                Obtenir votre Terminal
              </a>
              <div className="hidden sm:block">
                <UserAvatars />
              </div>
            </div>
          </div>
          
          {/* Right column - 3D Phone display */}
          <div className="relative flex justify-center items-center p-4">
            <div className="absolute -z-10 w-80 h-80 bg-noda-gold/20 rounded-full blur-3xl"></div>
            <PhoneDisplay />
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* QR code section */}
          <div className="hero-card p-8 flex flex-col justify-center items-center md:items-start">
            <QrCodeBox />
          </div>
          
          {/* Brand message section */}
          <div className="hero-card flex flex-col items-center justify-center p-8">
            <div className="text-center md:text-left max-w-md">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir Noda Pay ?</h2>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-noda-gold mr-2">✓</span>
                  <span>Installation en moins de 5 minutes - aucune connaissance technique nécessaire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-noda-gold mr-2">✓</span>
                  <span>Augmentez votre clientèle avec les détenteurs de crypto-monnaies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-noda-gold mr-2">✓</span>
                  <span>Commissions réduites par rapport aux cartes bancaires traditionnelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-noda-gold mr-2">✓</span>
                  <span>Service client disponible 24/7 pour vous accompagner</span>
                </li>
              </ul>
              <div className="mt-8">
                <CryptoBadges />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
