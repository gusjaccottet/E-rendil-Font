
import React from 'react';

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const FormatCard: React.FC<{ title: string; subtitle: string; description: string; }> = ({ title, subtitle, description }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 flex flex-col">
    <div className="flex-grow">
      <h4 className="text-xl font-bold text-amber-300">{title}</h4>
      <p className="text-sm text-slate-400 mb-4">{subtitle}</p>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
    </div>
    <button className="mt-6 w-full bg-slate-700 text-slate-200 hover:bg-amber-400 hover:text-slate-900 transition-colors duration-200 font-bold py-2 px-4 rounded-lg flex items-center justify-center">
        <DownloadIcon/>
        Download {title}
    </button>
  </div>
);

const ExportInfo: React.FC = () => {
  return (
    <div>
       <p className="text-slate-400 mb-8 max-w-3xl">
        The final step is to generate the font files for every use case. Eärendil is provided in industry-standard formats for both desktop installation and high-performance web use, ensuring it looks perfect everywhere.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FormatCard 
          title=".OTF"
          subtitle="For Desktop"
          description="The OpenType Font is the modern standard for graphic design and print. It contains all advanced features like ligatures and stylistic alternates, making it the primary choice for professionals."
        />
        <FormatCard 
          title=".WOFF2"
          subtitle="For Modern Web"
          description="The Web Open Font Format 2 offers superior compression, leading to faster website load times. This is the essential format for any modern web project."
        />
         <FormatCard 
          title=".VF"
          subtitle="Variable Font (Advanced)"
          description="A single, powerful file containing the entire family. It allows for infinite control over weight and style on supported platforms, representing the cutting edge of font technology."
        />
      </div>
    </div>
  );
};

export default ExportInfo;
