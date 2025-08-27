
import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import InteractiveTester from './components/InteractiveTester';
import GlyphSetViewer from './components/GlyphSetViewer';
import MetricsVisualizer from './components/MetricsVisualizer';
import MetadataDisplay from './components/MetadataDisplay';
import ExportInfo from './components/ExportInfo';
import Footer from './components/Footer';
import KerningShowcase from './components/KerningShowcase';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-900 text-slate-300">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        <Introduction />
        <InteractiveTester />
        
        <Section title="Phase 1: The Glyph Set" id="glyphs">
          <GlyphSetViewer />
        </Section>
        
        <Section title="Phase 2: Metrics & Kerning" id="metrics">
          <MetricsVisualizer />
          <KerningShowcase />
        </Section>
        
        <Section title="Phase 3: The Metadata" id="metadata">
          <MetadataDisplay />
        </Section>
        
        <Section title="Phase 4: The Final Product" id="export">
          <ExportInfo />
        </Section>
        
        <Footer />
      </main>
    </div>
  );
};

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, id, children }) => (
  <section id={id} className="my-16 md:my-24 scroll-mt-20">
    <div className="relative mb-8">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-300 tracking-wider">
        {title}
      </h2>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-amber-300/30 to-transparent -translate-y-1/2 -z-10"></div>
    </div>
    {children}
  </section>
);

export default App;
