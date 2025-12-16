import React from 'react';

export const CodeDisplay = ({ code }) => {
  return (
    <div className="space-y-6">
      <div className="bg-[#02050e] backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
        <div className="bg-[#0f1419] border-b border-white/5 px-6 py-4">
          <p className="text-sm font-mono text-gray-400">Example Code</p>
        </div>
        <pre className="p-8 overflow-x-auto">
          <code className="text-sm leading-relaxed font-mono text-gray-300">
            {code || 'No code available for this component'}
          </code>
        </pre>
      </div>
    </div>
  );
};
