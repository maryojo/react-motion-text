import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('fadeText');

  const components = [
    // Text Animations
    { id: 'fadeText', name: 'FadeText', category: 'Text' },
    { id: 'slideText', name: 'SlideText', category: 'Text' },
    { id: 'waveText', name: 'WaveText', category: 'Text' },
    { id: 'typewriterText', name: 'TypewriterText', category: 'Text' },
    { id: 'glitchText', name: 'GlitchText', category: 'Text' },
    // Number Animations
    { id: 'countUpNumber', name: 'CountUpNumber', category: 'Numbers' },
    { id: 'flipNumber', name: 'FlipNumber', category: 'Numbers' },
    { id: 'rollingNumber', name: 'RollingNumber', category: 'Numbers' },
  ];

  return (
    <div className="flex min-h-screen bg-[#030914]">
      <Sidebar 
        items={components} 
        activeItem={selectedComponent} 
        onSelectItem={setSelectedComponent}
      />
      <Preview componentId={selectedComponent} />
    </div>
  );
}

export default App;