
import React from 'react';

const MetricLine: React.FC<{ y: string; color: string; label: string }> = ({ y, color, label }) => (
  <div className="absolute w-full" style={{ top: y }}>
    <div className={`w-full h-px ${color}`}></div>
    <span className={`absolute -left-2 -translate-x-full -translate-y-1/2 text-xs font-mono ${color.replace('bg-', 'text-')}`}>{label}</span>
  </div>
);

const MetricsVisualizer: React.FC = () => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 md:p-8 shadow-lg border border-slate-700 mb-12">
      <h3 className="text-2xl text-slate-100 font-bold mb-6">Vertical Metrics</h3>
      <div className="relative h-48 bg-slate-900/50 p-4 rounded-md overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <MetricLine y="15%" color="bg-cyan-400" label="Ascender" />
          <MetricLine y="30%" color="bg-green-400" label="Cap-height" />
          <MetricLine y="55%" color="bg-yellow-400" label="x-height" />
          <MetricLine y="70%" color="bg-slate-300" label="Baseline" />
          <MetricLine y="90%" color="bg-rose-400" label="Descender" />
          
          <span className="text-8xl text-slate-100 select-none" style={{ lineHeight: '1' }}>
            Eärendil
          </span>
        </div>
      </div>
      <p className="text-slate-400 mt-6 text-sm leading-relaxed">
        Vertical metrics define the rhythm and structure of the text. Eärendil features a high ascender for elegance, a generous x-height for readability, and graceful descenders. These carefully tuned proportions ensure harmony on the page.
      </p>
    </div>
  );
};

export default MetricsVisualizer;
