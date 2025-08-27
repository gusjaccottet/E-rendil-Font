
import React, { useState } from 'react';

const InteractiveTester: React.FC = () => {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog.');
  const [fontSize, setFontSize] = useState(48);
  const [isItalic, setIsItalic] = useState(false);
  const [weight, setWeight] = useState(400);

  const fontStyle = {
    fontSize: `${fontSize}px`,
    fontStyle: isItalic ? 'italic' : 'normal',
    fontWeight: weight,
  };

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 md:p-8 shadow-lg border border-slate-700 mb-16 md:mb-24">
      <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <label htmlFor="fontSize" className="text-slate-400 text-sm">Font Size: {fontSize}px</label>
          <input
            id="fontSize"
            type="range"
            min="12"
            max="120"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-32 md:w-48 accent-amber-400"
          />
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setWeight(weight === 400 ? 700 : 400)}
            className={`px-3 py-1 text-sm rounded transition-colors ${weight === 700 ? 'bg-amber-400 text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
          >
            Bold
          </button>
          <button
            onClick={() => setIsItalic(!isItalic)}
            className={`px-3 py-1 text-sm rounded transition-colors ${isItalic ? 'bg-amber-400 text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
          >
            Italic
          </button>
        </div>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 bg-slate-900 rounded-md border border-slate-600 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300 text-slate-100 resize-y min-h-[150px] leading-normal"
        style={fontStyle}
        placeholder="Type here to test Eärendil..."
      />
    </div>
  );
};

export default InteractiveTester;
