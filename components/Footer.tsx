
import React from 'react';
import { FONT_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="text-center mt-24 pt-8 border-t border-slate-700">
      <p className="text-sm text-slate-400">
        The {FONT_NAME} Font Specimen Page. 
        <br/>
        A conceptual project designed and coded with passion.
      </p>
      <p className="text-xs text-slate-500 mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
