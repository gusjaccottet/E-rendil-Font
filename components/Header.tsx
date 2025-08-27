
import React from 'react';
import { FONT_NAME, FONT_TAGLINE } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="text-center my-16 md:my-24">
      <h1 className="text-7xl md:text-9xl font-bold text-slate-100 tracking-tighter">
        {FONT_NAME}
      </h1>
      <p className="text-lg md:text-xl text-amber-300 mt-4 tracking-widest">
        {FONT_TAGLINE}
      </p>
       <p className="text-sm text-slate-400 mt-6 max-w-2xl mx-auto">
        <span className="font-bold text-amber-400">Please Note:</span> The 'Eärendil' font is a conceptual design. This page uses 'Cormorant Garamond' to simulate its intended style and elegance.
      </p>
    </header>
  );
};

export default Header;
