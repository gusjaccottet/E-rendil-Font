
import React, { useState } from 'react';
import { GLYPH_SETS } from '../constants';

type GlyphCategory = keyof typeof GLYPH_SETS;

const GlyphSetViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GlyphCategory>('uppercase');

  const categories = Object.keys(GLYPH_SETS) as GlyphCategory[];
  const activeGlyphs = GLYPH_SETS[activeTab];

  return (
    <div className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700">
      <div className="p-4 border-b border-slate-700">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-sm rounded-md transition-all duration-200 capitalize ${
                activeTab === cat
                  ? 'bg-amber-400 text-slate-900 font-bold shadow-md'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {cat.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
          {activeGlyphs.map((glyph, index) => (
            <div
              key={`${activeTab}-${index}`}
              title={glyph}
              className="flex items-center justify-center bg-slate-900 aspect-square rounded-md border border-slate-600 hover:bg-slate-700 hover:border-amber-400 transition-all duration-200 group"
            >
              <span className={`text-3xl md:text-4xl text-slate-100 group-hover:text-amber-300 transition-colors ${activeTab === 'ligatures' ? 'text-2xl' : ''}`}>
                {glyph}
              </span>
            </div>
          ))}
          {activeTab === 'swashes' && (
             <p className="col-span-full text-slate-400 text-sm mt-4">
              *Swashes are stylistic alternatives for select capitals, typically used for titles.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlyphSetViewer;
