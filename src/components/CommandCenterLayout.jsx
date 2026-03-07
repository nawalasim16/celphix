import React from 'react';
import CommandCenterHeader from './CommandCenterHeader';
import CommandCenterFooter from './CommandCenterFooter';

const CommandCenterLayout = ({ children, customHeader, customFooter }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black font-sans">
      {customHeader || <CommandCenterHeader />}
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      {customFooter || <CommandCenterFooter />}
    </div>
  );
};

export default CommandCenterLayout;