// Ultra-low latency, tactile UI click sound synthesizer using pre-rendered AudioBuffer

let sharedAudioContext: AudioContext | null = null;
let cachedClickBuffer: AudioBuffer | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!sharedAudioContext) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        sharedAudioContext = new AudioCtx();
        cachedClickBuffer = generateClickBuffer(sharedAudioContext);
      }
    }
    return sharedAudioContext;
  } catch {
    return null;
  }
}

/**
 * Pre-synthesize an ultra-crisp tactile mechanical switch sound into a raw AudioBuffer.
 * This eliminates all runtime audio node creation latency and garbage collection spikes.
 */
function generateClickBuffer(ctx: AudioContext): AudioBuffer {
  const sampleRate = ctx.sampleRate;
  const duration = 0.032; // 32ms total
  const length = Math.floor(sampleRate * duration);
  const buffer = ctx.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < length; i++) {
    const t = i / sampleRate;

    // High-frequency mechanical tactile snap (first 3ms)
    const snapDecay = Math.exp(-t * 1800);
    const snap = (Math.random() * 2 - 1) * snapDecay * 0.32;

    // Fluid body resonance (frequency sweep from 720Hz down to 140Hz)
    const freq = 140 + 580 * Math.exp(-t * 110);
    const toneDecay = Math.exp(-t * 125);
    const tone = Math.sin(2 * Math.PI * freq * t) * toneDecay * 0.22;

    data[i] = snap + tone;
  }
  return buffer;
}

// Warm up AudioContext on the earliest user pointerdown/keydown so it is already running when clicked
if (typeof window !== "undefined") {
  const warmUp = () => {
    const ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
  };
  window.addEventListener("pointerdown", warmUp, { passive: true, capture: true });
  window.addEventListener("keydown", warmUp, { passive: true, capture: true });
}

export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    if (!cachedClickBuffer) {
      cachedClickBuffer = generateClickBuffer(ctx);
    }

    const source = ctx.createBufferSource();
    source.buffer = cachedClickBuffer;
    source.connect(ctx.destination);
    source.start(0);
  } catch {
    // Fail silently if browser blocks audio
  }
}
