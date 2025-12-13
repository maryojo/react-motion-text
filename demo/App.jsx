import React, { useState } from 'react';
import {
  FadeText,
  SlideText,
  WaveText,
  TypewriterText,
  GlitchText,
  CountUpNumber,
  FlipNumber,
  RollingNumber
} from '../src/index';

function App() {
  const [counter, setCounter] = useState(42);
  const [flipValue, setFlipValue] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const [waveKey, setWaveKey] = useState(0);
  const [typewriterKey, setTypewriterKey] = useState(0);
  const [glitchKey, setGlitchKey] = useState(0);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold geom text-white mb-4">
            Animated Text Library
          </h1>
          <p className="text-xl text-purple-200">
            Beautiful animations with Framer Motion + Tailwind CSS
          </p>
        </div>

        {/* Text Animations */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8">Text Animations</h2>
          
          <div className="grid gap-8">
            <div className="space-y-3">
              <span className="text-sm font-mono text-purple-300">FadeText</span>
              <div className="flex items-center gap-6">
                <FadeText 
                  key={fadeKey}
                  text="Fade in from below" 
                  direction="up"
                  className="text-4xl text-white font-bold"
                  loop={false}
                />
                <button
                  onClick={() => setFadeKey(k => k + 1)}
                  className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  Replay
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-mono text-purple-300">SlideText</span>
              <div className="flex items-center gap-6">
                <SlideText 
                  key={slideKey}
                  text="Sliding in with spring physics" 
                  direction="left"
                  className="text-4xl text-blue-400 font-bold"
                  loop={false}
                />
                <button
                  onClick={() => setSlideKey(k => k + 1)}
                  className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  Replay
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-mono text-purple-300">WaveText</span>
              <div className="flex items-center gap-6">
                <WaveText 
                  key={waveKey}
                  text="Wave Animation Effect" 
                  className="text-4xl text-green-400 font-bold"
                  loop={false}
                />
                <button
                  onClick={() => setWaveKey(k => k + 1)}
                  className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  Replay
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-mono text-purple-300">TypewriterText</span>
              <div className="flex items-center gap-6">
                <TypewriterText 
                  key={typewriterKey}
                  text="This text types out character by character..." 
                  speed={50}
                  className="text-3xl text-yellow-400"
                  loop={false}
                />
                <button
                  onClick={() => setTypewriterKey(k => k + 1)}
                  className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  Replay
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-mono text-purple-300">GlitchText</span>
              <div className="flex items-center gap-6">
                <GlitchText 
                  key={glitchKey}
                  text="GLITCH EFFECT" 
                  className="text-4xl text-cyan-400 font-mono font-bold"
                  loop={false}
                />
                <button
                  onClick={() => setGlitchKey(k => k + 1)}
                  className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors text-sm"
                >
                  Replay
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Number Animations */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8">Number Animations</h2>
          
          <div className="grid gap-8">
            <div className="space-y-3">
              <span className="text-sm font-mono text-purple-300">CountUpNumber</span>
              <CountUpNumber 
                end={1234567}
                duration={3}
                separator=","
                prefix="$"
                className="text-6xl text-white font-bold"
              />
            </div>

            <div className="space-y-3">
              <span className="text-sm font-mono text-purple-300">FlipNumber</span>
              <div className="flex items-center gap-6">
                <FlipNumber 
                  value={flipValue}
                  className="text-6xl text-pink-400 font-bold"
                />
                <button
                  onClick={() => setFlipValue(Math.floor(Math.random() * 100))}
                  className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold"
                >
                  Random
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-mono text-purple-300">RollingNumber</span>
              <div className="flex items-center gap-6">
                <RollingNumber 
                  value={counter}
                  className="text-6xl text-purple-400 font-bold"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => setCounter(c => c + 1)}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setCounter(c => Math.max(0, c - 1))}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;