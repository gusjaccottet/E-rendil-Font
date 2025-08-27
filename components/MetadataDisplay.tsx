
import React from 'react';
import { FONT_METADATA, COPYRIGHT_INFO } from '../constants';
import type { FontMetadata } from '../types';

const MetadataRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="grid grid-cols-3 gap-4 py-3 border-b border-slate-700">
    <dt className="text-sm text-slate-400">{label}</dt>
    <dd className="col-span-2 text-sm text-slate-200 font-mono">{value}</dd>
  </div>
);

const MetadataDisplay: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
        <h3 className="text-2xl text-slate-100 font-bold mb-4">Font Naming</h3>
        <dl>
          {Object.values(FONT_METADATA).map((style: FontMetadata) => (
            <React.Fragment key={style.postscriptName}>
              <MetadataRow label="Family Name" value={style.familyName} />
              <MetadataRow label="Style Name" value={style.styleName} />
              <MetadataRow label="Full Name" value={style.fullName} />
              <MetadataRow label="PostScript Name" value={style.postscriptName} />
              {style.styleName !== 'Silmaril' && <div className="h-4"></div>}
            </React.Fragment>
          ))}
        </dl>
      </div>
      <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
        <h3 className="text-2xl text-slate-100 font-bold mb-4">Copyright & Versioning</h3>
        <dl>
          <MetadataRow label="Designer" value={COPYRIGHT_INFO.designer} />
          <MetadataRow label="Copyright" value={COPYRIGHT_INFO.copyright} />
          <MetadataRow label="Version" value={COPYRIGHT_INFO.version} />
          <div className="grid grid-cols-3 gap-4 py-3">
            <dt className="text-sm text-slate-400">License</dt>
            <dd className="col-span-2 text-sm text-slate-200">{COPYRIGHT_INFO.license}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default MetadataDisplay;
