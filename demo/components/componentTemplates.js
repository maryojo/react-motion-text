// Code templates for each component
export const componentTemplates = {
  fadeText: {
    title: "Fade Text",
    description: "Text fades in with a smooth opacity animation from below.",
    code: `<div 
  className="relative w-full h-96 rounded-xl overflow-hidden flex items-center justify-center"
  style={{
    backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className="text-center z-10">
    <FadeText 
      text="Welcome to Motion Text" 
      direction="up"
      className="text-6xl text-white font-bold mb-4"
      loop={false}
    />
    <p className="text-gray-200 text-xl">
      Elegant text animations for your next project
    </p>
  </div>
</div>`,
    plainCode: `<FadeText 
  text="Fade in from below" 
  direction="up"
  className="text-6xl text-white font-bold"
  loop={false}
/>`,
    import: 'import { FadeText } from \'react-motion-text\';'
  },
  slideText: {
    title: "Slide Text",
    description: "Text slides in from the left with smooth spring physics animation.",
    code: `<div className="w-full bg-linear-to-r from-blue-600 to-blue-800 rounded-xl p-8">
  <div className="flex items-center justify-between">
    <div>
      <SlideText 
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
</div>`,
    plainCode: `<SlideText 
  text="Sliding in with spring physics" 
  direction="left"
  className="text-6xl text-blue-400 font-bold"
  loop={false}
/>`,
    import: 'import { SlideText } from \'react-motion-text\';'
  },
  waveText: {
    title: "Wave Text",
    description: "Each character animates in a wave pattern, creating a flowing effect.",
    code: `<div className="space-y-8">
  <div className="text-center">
    <WaveText 
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
</div>`,
    plainCode: `<WaveText 
  text="Wave Animation Effect" 
  className="text-6xl text-green-400 font-bold"
  loop={false}
/>`,
    import: 'import { WaveText } from \'react-motion-text\';'
  },
  typewriterText: {
    title: "Typewriter Text",
    description: "Classic typewriter effect where characters appear one by one.",
    code: `<div className="space-y-6 max-w-2xl">
  <TypewriterText 
    text="const greeting = 'Welcome to the future of web development!';" 
    speed={30}
    className="text-2xl text-yellow-400 font-mono"
    loop={false}
  />
  <p className="text-gray-300">Perfect for coding tutorials and technical blogs</p>
</div>`,
    plainCode: `<TypewriterText 
  text="This text types out character by character..." 
  speed={50}
  className="text-5xl text-yellow-400"
  loop={false}
/>`,
    import: 'import { TypewriterText } from \'react-motion-text\';'
  },
  glitchText: {
    title: "Glitch Text",
    description: "Digital glitch effect with color shifts and offset duplicates.",
    code: `<div className="space-y-8 text-center">
  <GlitchText 
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
</div>`,
    plainCode: `<GlitchText 
  text="GLITCH EFFECT" 
  className="text-6xl text-cyan-400 font-mono font-bold"
  loop={false}
/>`,
    import: 'import { GlitchText } from \'react-motion-text\';'
  },
  countUpNumber: {
    title: "Count Up Number",
    description: "Numbers count up smoothly from 0 to the final value.",
    code: `<div className="space-y-8 text-center">
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
</div>`,
    plainCode: `<CountUpNumber 
  end={1234567}
  duration={3}
  separator=","
  prefix="$"
  className="text-7xl text-white font-bold"
/>`,
    import: 'import { CountUpNumber } from \'react-motion-text\';'
  },
  flipNumber: {
    title: "Flip Number",
    description: "Numbers flip with a 3D card-flip animation effect.",
    code: `<div className="space-y-8">
  <div className="text-center">
    <p className="text-gray-400 mb-4">Current Score</p>
    <FlipNumber 
      value={flipValue}
      className="text-8xl text-pink-400 font-bold"
    />
  </div>
  <button
    onClick={() => setValue(Math.floor(Math.random() * 1000))}
    className="w-full px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold"
  >
    Roll Dice
  </button>
</div>`,
    plainCode: `<div className="space-y-8">
  <FlipNumber 
    value={value}
    className="text-7xl text-pink-400 font-bold"
  />
  <button
    onClick={() => setValue(Math.floor(Math.random() * 100))}
    className="px-6 py-3 bg-pink-500 text-white rounded-lg"
  >
    Random Number
  </button>
</div>`,
    import: 'import { useState } from \'react\';\nimport { FlipNumber } from \'react-motion-text\';',
    state: 'const [value, setValue] = useState(0);'
  },
  rollingNumber: {
    title: "Rolling Number",
    description: "Numbers roll smoothly when values change.",
    code: `<div className="space-y-8">
  <div className="bg-linear-to-r from-purple-900 to-purple-700 rounded-xl p-8 text-center">
    <p className="text-purple-200 mb-4">Items in Cart</p>
    <RollingNumber 
      value={counter}
      className="text-8xl text-white font-bold"
    />
  </div>
  <div className="flex gap-3 justify-center">
    <button
      onClick={() => setCounter(c => c + 1)}
      className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold text-lg"
    >
      + Add
    </button>
    <button
      onClick={() => setCounter(c => Math.max(0, c - 1))}
      className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold text-lg"
    >
      - Remove
    </button>
  </div>
</div>`,
    plainCode: `<div className="space-y-8">
  <RollingNumber 
    value={counter}
    className="text-7xl text-purple-400 font-bold"
  />
  <div className="flex gap-3">
    <button
      onClick={() => setCounter(c => c + 1)}
      className="px-6 py-3 bg-purple-500 text-white rounded-lg"
    >
      + Increment
    </button>
    <button
      onClick={() => setCounter(c => Math.max(0, c - 1))}
      className="px-6 py-3 bg-purple-500 text-white rounded-lg"
    >
      - Decrement
    </button>
  </div>
</div>`,
    import: 'import { useState } from \'react\';\nimport { RollingNumber } from \'react-motion-text\';',
    state: 'const [counter, setCounter] = useState(42);'
  }
};
