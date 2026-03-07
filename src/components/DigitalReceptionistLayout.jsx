import React from 'react';
import DigitalReceptionistHeader from './DigitalReceptionistHeader';
import DigitalReceptionistFooter from './DigitalReceptionistFooter';

const DigitalReceptionistLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <DigitalReceptionistHeader />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <DigitalReceptionistFooter />
    </div>
  );
};

export default DigitalReceptionistLayout;