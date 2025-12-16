import React from 'react';
import {
  FadeText,
  SlideText,
  WaveText,
  TypewriterText,
  GlitchText,
  CountUpNumber,
  FlipNumber,
  RollingNumber
} from '../../src/index';

export const ComponentRenderer = ({
  componentId,
  exampleType,
  fadeKey,
  slideKey,
  waveKey,
  typewriterKey,
  glitchKey,
  flipValue,
  counter,
  onFlipValueChange,
  onCounterChange
}) => {
  const renderComponent = () => {
    switch (componentId) {
      case 'fadeText':
        if (exampleType === 'useCase') {
          return (
            <div 
              className="relative w-full h-96 rounded-xl overflow-hidden flex items-center justify-center"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-center z-10">
                <FadeText 
                  key={fadeKey}
                  text="Welcome to Motion Text" 
                  direction="up"
                  className="text-6xl text-white font-bold mb-4"
                  loop={false}
                />
                <p className="text-gray-200 text-xl">
                  Elegant text animations for your next project
                </p>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <FadeText 
              key={fadeKey}
              text="Fade in from below" 
              direction="up"
              className="text-6xl text-white font-bold"
              loop={false}
            />
            <p className="text-gray-400 text-lg">
              Text fades in with a smooth opacity animation from below.
            </p>
          </div>
        );

      case 'slideText':
        if (exampleType === 'useCase') {
          return (
            <div className="w-full bg-linear-to-r from-blue-600 to-blue-800 rounded-xl p-8">
              <div className="flex items-center justify-between">
                <div>
                  <SlideText 
                    key={slideKey}
                    text="Limited Time Offer" 
                    direction="left"
                    className="text-5xl text-white font-bold mb-2"
                    loop={false}
                  />
                  <p className="text-blue-100 text-lg">Get 50% off your first purchase</p>
                </div>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <SlideText 
              key={slideKey}
              text="Sliding in with spring physics" 
              direction="left"
              className="text-6xl text-blue-400 font-bold"
              loop={false}
            />
            <p className="text-gray-400 text-lg">
              Text slides in from the left with smooth spring physics animation.
            </p>
          </div>
        );

      case 'waveText':
        if (exampleType === 'useCase') {
          return (
            <div className="space-y-8">
              <div className="text-center">
                <WaveText 
                  key={waveKey}
                  text="Loading your content..." 
                  className="text-5xl text-green-400 font-bold"
                  loop={true}
                />
              </div>
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <WaveText 
              key={waveKey}
              text="Wave Animation Effect" 
              className="text-6xl text-green-400 font-bold"
              loop={false}
            />
            <p className="text-gray-400 text-lg">
              Each character animates in a wave pattern, creating a flowing effect.
            </p>
          </div>
        );

      case 'typewriterText':
        if (exampleType === 'useCase') {
          return (
            <div className="space-y-6 max-w-2xl">
              <TypewriterText 
                key={typewriterKey}
                text="const greeting = 'Welcome to the future of web development!';" 
                speed={30}
                className="text-2xl text-yellow-400 font-mono"
                loop={false}
              />
              <p className="text-gray-300">Perfect for coding tutorials and technical blogs</p>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <TypewriterText 
              key={typewriterKey}
              text="This text types out character by character..." 
              speed={50}
              className="text-5xl text-yellow-400"
              loop={false}
            />
            <p className="text-gray-400 text-lg">
              Classic typewriter effect where characters appear one by one.
            </p>
          </div>
        );

      case 'glitchText':
        if (exampleType === 'useCase') {
          return (
            <div className="space-y-8 text-center">
              <GlitchText 
                key={glitchKey}
                text="ERROR 404" 
                className="text-7xl text-red-500 font-mono font-bold"
                loop={false}
              />
              <div>
                <p className="text-gray-300 text-xl">Page not found</p>
                <button className="mt-6 px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors">
                  Go Home
                </button>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <GlitchText 
              key={glitchKey}
              text="GLITCH EFFECT" 
              className="text-6xl text-cyan-400 font-mono font-bold"
              loop={false}
            />
            <p className="text-gray-400 text-lg">
              Digital glitch effect with color shifts and offset duplicates.
            </p>
          </div>
        );

      case 'countUpNumber':
        if (exampleType === 'useCase') {
          return (
            <div className="space-y-8 text-center">
              <div>
                <p className="text-gray-400 mb-2">Total Revenue</p>
                <CountUpNumber 
                  end={1234567}
                  duration={3}
                  separator=","
                  prefix="$"
                  className="text-7xl text-white font-bold"
                />
              </div>
              <div className="flex justify-center gap-12 text-gray-300">
                <div><p className="text-2xl text-blue-400">+24%</p><p className="text-sm">vs last month</p></div>
                <div><p className="text-2xl text-green-400">+156</p><p className="text-sm">new customers</p></div>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <CountUpNumber 
              end={1234567}
              duration={3}
              separator=","
              prefix="$"
              className="text-7xl text-white font-bold"
            />
            <p className="text-gray-400 text-lg">
              Numbers count up smoothly from 0 to the final value.
            </p>
          </div>
        );

      case 'flipNumber':
        if (exampleType === 'useCase') {
          return (
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Current Score</p>
                <FlipNumber 
                  value={flipValue}
                  className="text-8xl text-pink-400 font-bold"
                />
              </div>
              <button
                onClick={() => onFlipValueChange(Math.floor(Math.random() * 1000))}
                className="w-full px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold"
              >
                Roll Dice
              </button>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <FlipNumber 
              value={flipValue}
              className="text-7xl text-pink-400 font-bold"
            />
            <p className="text-gray-400 text-lg mb-8">
              Numbers flip with a 3D card-flip animation effect.
            </p>
            <button
              onClick={() => onFlipValueChange(Math.floor(Math.random() * 100))}
              className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold"
            >
              Random Number
            </button>
          </div>
        );

      case 'rollingNumber':
        if (exampleType === 'useCase') {
          return (
            <div className="space-y-8">
              <div className="bg-linear-to-r from-purple-900 to-purple-700 rounded-xl p-8 text-center">
                <p className="text-purple-200 mb-4">Items in Cart</p>
                <RollingNumber 
                  value={counter}
                  className="text-8xl text-white font-bold"
                />
              </div>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => onCounterChange(c => c + 1)}
                  className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold text-lg"
                >
                  + Add
                </button>
                <button
                  onClick={() => onCounterChange(c => Math.max(0, c - 1))}
                  className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold text-lg"
                >
                  - Remove
                </button>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <RollingNumber 
              value={counter}
              className="text-7xl text-purple-400 font-bold"
            />
            <p className="text-gray-400 text-lg mb-8">
              Numbers roll smoothly when values change.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => onCounterChange(c => c + 1)}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold"
              >
                + Increment
              </button>
              <button
                onClick={() => onCounterChange(c => Math.max(0, c - 1))}
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold"
              >
                - Decrement
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center text-gray-400">
            <p className="text-lg">Select a component from the sidebar</p>
          </div>
        );
    }
  };

  return renderComponent();
};
