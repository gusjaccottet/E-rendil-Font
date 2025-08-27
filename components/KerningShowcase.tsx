
import React from 'react';
import { KERNING_PAIRS } from '../constants';

const KerningShowcase: React.FC = () => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 md:p-8 shadow-lg border border-slate-700">
      <h3 className="text-2xl text-slate-100 font-bold mb-2">Kerning</h3>
      <p className="text-slate-400 mb-6 text-sm leading-relaxed">
        Kerning is the art of adjusting the space between specific letter pairs to create visually pleasing and legible text. Below are examples of critical pairs that require fine-tuning.
      </p>
      <div className="bg-slate-900/50 p-6 rounded-md">
        <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
          {KERNING_PAIRS.map(pair => (
            <div key={pair} className="text-5xl md:text-6xl text-slate-100 tracking-tighter">
              {pair}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KerningShowcase;
