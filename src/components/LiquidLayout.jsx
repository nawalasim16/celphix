
import React from 'react';
import LiquidHeader from './LiquidHeader';
import LiquidFooter from './LiquidFooter';

const LiquidLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <LiquidHeader />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <LiquidFooter />
    </div>
  );
};

export default LiquidLayout;
