import React, { useState } from 'react';
import { ComponentRenderer } from './ComponentRenderer';


import { CodeDisplay } from './CodeDisplay';
import { componentTemplates } from './componentTemplates';

const Preview = ({ componentId }) => {
  const [fadeKey, setFadeKey] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const [waveKey, setWaveKey] = useState(0);
  const [typewriterKey, setTypewriterKey] = useState(0);
  const [glitchKey, setGlitchKey] = useState(0);
  const [flipValue, setFlipValue] = useState(0);
  const [counter, setCounter] = useState(42);
  const [activeTab, setActiveTab] = useState('preview');
  const [showMainCode, setShowMainCode] = useState(false);
  const [exampleType, setExampleType] = useState('useCase');

  const handleReplay = () => {
    switch (componentId) {
      case 'fadeText':
        setFadeKey(k => k + 1);
        break;
      case 'slideText':
        setSlideKey(k => k + 1);
        break;
      case 'waveText':
        setWaveKey(k => k + 1);
        break;
      case 'typewriterText':
        setTypewriterKey(k => k + 1);
        break;
      case 'glitchText':
        setGlitchKey(k => k + 1);
        break;
      default:
        break;
    }
  };

  const getUseCaseCode = () => {
    const template = componentTemplates[componentId];
    if (!template) return '';

    let code = template.import + '\n\n';
    code += 'export default function Example() {\n';
    if (template.state) {
      code += '  ' + template.state + '\n\n';
    }
    code += '  return (\n';
    code += '    ' + template.code.split('\n').join('\n    ') + '\n';
    code += '  );\n';
    code += '}';
    return code;
  };

  const getPlainCode = () => {
    const template = componentTemplates[componentId];
    if (!template) return '';

    let code = template.import + '\n\n';
    code += 'export default function Example() {\n';
    code += '  return (\n';
    code += '    ' + (template.plainCode || template.code).split('\n').join('\n    ') + '\n';
    code += '  );\n';
    code += '}';
    return code;
  };

  const shouldShowReplay = ['fadeText', 'slideText', 'waveText', 'typewriterText', 'glitchText'].includes(componentId);
  const template = componentTemplates[componentId] || {};

  return (
    <div className="flex-1 bg-black p-8 md:p-12 overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 geom">
            {template.title || 'Component Preview'}
          </h1>
          <p className="text-gray-400 text-lg">
            {template.description || 'Explore interactive examples of each animation component.'}
          </p>
        </div>

        {/* Main Preview (Use Case) */}
        <div className="relative mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">Preview</h2>
            <div className="flex gap-4">
              {shouldShowReplay && !showMainCode && (
                <button
                  onClick={handleReplay}
                  className="px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-medium text-sm flex items-center gap-2"
                >
                  <span>▶</span> Replay
                </button>
              )}
              <button
                onClick={() => setShowMainCode(!showMainCode)}
                className="px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-medium text-sm border border-white/10"
              >
                {showMainCode ? 'View Preview' : 'View Code'}
              </button>
            </div>
          </div>

          {showMainCode ? (
            <CodeDisplay code={getUseCaseCode()} />
          ) : (
            <div className="bg-linear-to-b from-[#02050e] via-[#0a0e1f] to-[#02050e] backdrop-blur-xl rounded-2xl p-12 border border-white/5 shadow-2xl min-h-96 flex items-center justify-center">
              <div className="w-full">
                <ComponentRenderer
                  componentId={componentId}
                  exampleType="useCase"
                  fadeKey={fadeKey}
                  slideKey={slideKey}
                  waveKey={waveKey}
                  typewriterKey={typewriterKey}
                  glitchKey={glitchKey}
                  flipValue={flipValue}
                  counter={counter}
                  onFlipValueChange={setFlipValue}
                  onCounterChange={setCounter}
                />
              </div>
            </div>
          )}
        </div>

        {/* Usage Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">Usage</h2>

          {/* Installation */}
          <div className="mb-10">
            <h3 className="text-lg font-medium text-gray-300 mb-4">Installation</h3>
            <div className="bg-[#0f111a] rounded-xl p-4 border border-white/5 font-mono text-sm text-gray-300">
              npm install react-motion-text
            </div>
          </div>

          {/* Basic Usage */}
          <div>
            <h3 className="text-lg font-medium text-gray-300 mb-4">Basic Usage</h3>
            <div className="bg-[#0f111a] rounded-xl overflow-hidden border border-white/5">
              <CodeDisplay code={getPlainCode()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
