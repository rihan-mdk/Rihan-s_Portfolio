import React from "react";

interface VisualArtifactProps {
  theme: "satellite" | "agro" | "adaptive" | "gesture" | "scheduler" | "studio";
  className?: string;
  badgeText?: string;
}

export function VisualArtifact({ theme, className = "", badgeText }: VisualArtifactProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-[#131313] border border-white/[0.06] select-none ${className}`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, #F4F4F4 1px, transparent 1px), linear-gradient(to bottom, #F4F4F4 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle Noise / Radial Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#101010]/30 to-[#101010]/90 pointer-events-none" />

      {/* Project-Specific Monochromatic Vector Illustration */}
      {theme === "satellite" && (
        <svg
          viewBox="0 0 600 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover p-6 text-[#F4F4F4]"
        >
          {/* Radar Telemetry Sweep Circles */}
          <circle cx="300" cy="190" r="160" stroke="#F4F4F4" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.2" />
          <circle cx="300" cy="190" r="110" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.3" />
          <circle cx="300" cy="190" r="60" stroke="#F4F4F4" strokeWidth="0.75" strokeDasharray="2 4" opacity="0.4" />
          
          {/* Crosshairs & Compass */}
          <line x1="300" y1="20" x2="300" y2="360" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.25" />
          <line x1="120" y1="190" x2="480" y2="190" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.25" />
          
          {/* Oriented Bounding Boxes (Maritime Vessels) */}
          <g transform="translate(340, 130) rotate(24)">
            <rect x="0" y="0" width="46" height="20" stroke="#F4F4F4" strokeWidth="1.25" fill="#F4F4F4" fillOpacity="0.08" />
            <line x1="0" y1="10" x2="46" y2="10" stroke="#F4F4F4" strokeWidth="0.5" strokeDasharray="2 2" />
            <text x="52" y="14" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.8">TGT_01: AIS_OFF</text>
          </g>

          <g transform="translate(230, 220) rotate(-15)">
            <rect x="0" y="0" width="56" height="24" stroke="#F4F4F4" strokeWidth="1" strokeDasharray="3 2" fill="#F4F4F4" fillOpacity="0.04" />
            <text x="62" y="16" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">TGT_02: 14.2 KTS</text>
          </g>

          {/* Coordinate Readouts */}
          <text x="36" y="45" fill="#F4F4F4" fontSize="9" fontFamily="monospace" letterSpacing="0.1em" opacity="0.5">
            SAR SATELLITE PASS SENTINEL-1 // 12°49&apos;N 74°52&apos;E
          </text>
          <text x="36" y="345" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.5">
            ACQUISITION BAND: C-BAND DUAL-POL (VV+VH)
          </text>
          <text x="440" y="345" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.5">
            STATUS: ACTIVE SWEEP
          </text>
        </svg>
      )}

      {theme === "agro" && (
        <svg
          viewBox="0 0 600 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover p-6 text-[#F4F4F4]"
        >
          {/* Foliar Venation Geometry */}
          <path
            d="M 120 330 C 180 280, 260 210, 480 70"
            stroke="#F4F4F4"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <path d="M 230 240 C 270 210, 320 220, 360 230" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.35" />
          <path d="M 290 195 C 330 160, 390 170, 440 180" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.35" />
          <path d="M 190 270 C 170 230, 190 190, 230 160" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.3" />
          <path d="M 360 145 C 400 110, 460 120, 510 130" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.3" />

          {/* Micro Cellular Diagnostic Nodes */}
          <circle cx="280" cy="205" r="32" stroke="#F4F4F4" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
          <circle cx="280" cy="205" r="4" fill="#F4F4F4" />
          <text x="325" y="200" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.9">PATHOLOGY_CONFIDENCE: 94.6%</text>
          <text x="325" y="214" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.5">CLASS: FOLIAR_BLIGHT_STAGE_1</text>

          {/* Vernacular Speech Query Waveform */}
          <g transform="translate(60, 60)">
            <rect x="0" y="0" width="180" height="42" stroke="#F4F4F4" strokeWidth="0.75" fill="#F4F4F4" fillOpacity="0.05" />
            <path
              d="M 12 21 L 24 10 L 36 32 L 48 14 L 60 28 L 72 8 L 84 34 L 96 18 L 108 24 L 120 12 L 132 30 L 144 19 L 168 21"
              stroke="#F4F4F4"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            <text x="12" y="54" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.45">AUDIO_IN: VERNACULAR_STT_ACTIVE</text>
          </g>

          <text x="36" y="345" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.5">
            EDGE INFERENCE ENGINE // MOBILENET-V3 QUANTIZED 14.2MB
          </text>
        </svg>
      )}

      {theme === "adaptive" && (
        <svg
          viewBox="0 0 600 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover p-6 text-[#F4F4F4]"
        >
          {/* Directed Acyclic Knowledge Graph */}
          <line x1="120" y1="190" x2="220" y2="120" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.4" />
          <line x1="120" y1="190" x2="220" y2="260" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.4" />
          <line x1="220" y1="120" x2="340" y2="120" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.4" />
          <line x1="220" y1="260" x2="340" y2="200" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.4" />
          <line x1="340" y1="120" x2="460" y2="190" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.4" />
          <line x1="340" y1="200" x2="460" y2="190" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.4" />

          {/* Dynamic Calibration Nodes */}
          <circle cx="120" cy="190" r="16" stroke="#F4F4F4" strokeWidth="1" fill="#131313" />
          <text x="120" y="193" textAnchor="middle" fill="#F4F4F4" fontSize="8" fontFamily="monospace">N_0</text>

          <circle cx="220" cy="120" r="20" stroke="#F4F4F4" strokeWidth="1.25" fill="#131313" />
          <text x="220" y="123" textAnchor="middle" fill="#F4F4F4" fontSize="8" fontFamily="monospace">CALIB</text>

          <circle cx="220" cy="260" r="14" stroke="#F4F4F4" strokeWidth="0.75" strokeDasharray="2 2" fill="#131313" />
          <text x="220" y="263" textAnchor="middle" fill="#F4F4F4" fontSize="8" fontFamily="monospace">REV</text>

          {/* Attention / Friction Vector Point */}
          <g transform="translate(340, 120)">
            <circle cx="0" cy="0" r="28" stroke="#F4F4F4" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
            <circle cx="0" cy="0" r="8" fill="#F4F4F4" fillOpacity="0.2" />
            <circle cx="0" cy="0" r="3" fill="#F4F4F4" />
            <text x="36" y="-6" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.8">FRICTION_INDEX: 0.12</text>
            <text x="36" y="8" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.5">LEARNING_PATH: RE-ROUTED</text>
          </g>

          <circle cx="460" cy="190" r="22" stroke="#F4F4F4" strokeWidth="1.5" fill="#131313" />
          <text x="460" y="193" textAnchor="middle" fill="#F4F4F4" fontSize="8" fontFamily="monospace">TARGET</text>

          <text x="36" y="45" fill="#F4F4F4" fontSize="9" fontFamily="monospace" letterSpacing="0.1em" opacity="0.5">
            BAYESIAN KNOWLEDGE TRACING // DYNAMIC CURRICULUM GRAPH
          </text>
          <text x="36" y="345" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.5">
            STUDENT COMPREHENSION LATENCY HEURISTICS // RETENTION 89.2%
          </text>
        </svg>
      )}

      {theme === "gesture" && (
        <svg
          viewBox="0 0 600 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover p-6 text-[#F4F4F4]"
        >
          {/* Spatial Vector Stroke Coordinates */}
          <path
            d="M 120 280 C 160 120, 220 90, 280 180 C 320 240, 360 290, 420 140 C 450 65, 490 100, 520 180"
            stroke="#F4F4F4"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />

          {/* Tangent lines and Bezier Knots */}
          <line x1="280" y1="180" x2="310" y2="120" stroke="#F4F4F4" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
          <circle cx="280" cy="180" r="4" fill="#F4F4F4" />
          <circle cx="310" cy="120" r="3" stroke="#F4F4F4" strokeWidth="0.75" fill="#131313" />

          <line x1="420" y1="140" x2="390" y2="80" stroke="#F4F4F4" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
          <circle cx="420" cy="140" r="4" fill="#F4F4F4" />
          <circle cx="390" cy="80" r="3" stroke="#F4F4F4" strokeWidth="0.75" fill="#131313" />

          {/* Coordinate Crosshairs */}
          <g transform="translate(180, 70)">
            <rect x="0" y="0" width="130" height="34" stroke="#F4F4F4" strokeWidth="0.75" fill="#F4F4F4" fillOpacity="0.04" />
            <text x="10" y="14" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.8">ONNX INFERENCE: 11.4ms</text>
            <text x="10" y="26" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.5">SYMBOL: ALPHA_CHAR_SIGMA</text>
          </g>

          <text x="36" y="345" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.5">
            CLIENT-SIDE SPATIAL STROKE DYNAMICS // 60FPS WEBGL ACCELERATED
          </text>
        </svg>
      )}

      {theme === "scheduler" && (
        <svg
          viewBox="0 0 600 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover p-6 text-[#F4F4F4]"
        >
          {/* Combinatorial Schedule Matrix */}
          <g transform="translate(60, 70)">
            {/* Header row */}
            <rect x="0" y="0" width="480" height="24" stroke="#F4F4F4" strokeWidth="0.75" opacity="0.4" />
            <text x="15" y="16" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">PERIOD</text>
            <text x="110" y="16" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">MON</text>
            <text x="210" y="16" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">TUE</text>
            <text x="310" y="16" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">WED</text>
            <text x="410" y="16" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">THU</text>

            {/* Block 1 */}
            <rect x="0" y="36" width="480" height="40" stroke="#F4F4F4" strokeWidth="0.5" opacity="0.2" />
            <rect x="90" y="42" width="90" height="28" fill="#F4F4F4" fillOpacity="0.12" stroke="#F4F4F4" strokeWidth="0.75" />
            <text x="96" y="58" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.8">CS-401 [LAB A]</text>

            <rect x="290" y="42" width="90" height="28" fill="#F4F4F4" fillOpacity="0.08" stroke="#F4F4F4" strokeWidth="0.75" />
            <text x="296" y="58" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.7">AI-302 [SEM 6]</text>

            {/* Block 2 */}
            <rect x="0" y="88" width="480" height="40" stroke="#F4F4F4" strokeWidth="0.5" opacity="0.2" />
            <rect x="190" y="94" width="90" height="28" fill="#F4F4F4" fillOpacity="0.1" stroke="#F4F4F4" strokeWidth="0.75" />
            <text x="196" y="110" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.8">ML-501 [HALL 3]</text>

            {/* Block 3 */}
            <rect x="0" y="140" width="480" height="40" stroke="#F4F4F4" strokeWidth="0.5" opacity="0.2" />
            <rect x="390" y="146" width="85" height="28" fill="#F4F4F4" fillOpacity="0.12" stroke="#F4F4F4" strokeWidth="0.75" />
            <text x="396" y="162" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.8">YENSYNC SYNC</text>
          </g>

          <text x="60" y="40" fill="#F4F4F4" fontSize="9" fontFamily="monospace" letterSpacing="0.1em" opacity="0.5">
            CONSTRAINT SATISFACTION ENGINE // 0.0% RESOURCE COLLISIONS
          </text>
          <text x="60" y="325" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.5">
            HEURISTIC SOLVER TIME: 4.18s // 7 DEPARTMENTS SYNCHRONIZED
          </text>
        </svg>
      )}

      {theme === "studio" && (
        <svg
          viewBox="0 0 600 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover p-6 text-[#F4F4F4]"
        >
          {/* Prompt Chaining Pipeline */}
          <g transform="translate(60, 60)">
            {/* Step 1 */}
            <rect x="0" y="40" width="130" height="70" stroke="#F4F4F4" strokeWidth="0.75" fill="#131313" />
            <text x="12" y="60" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">NODE_01: PROMPT</text>
            <text x="12" y="78" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.9">OUTLINE_PARSE</text>
            <text x="12" y="94" fill="#F4F4F4" fontSize="7" fontFamily="monospace" opacity="0.4">TEMP: 0.2 // MAX: 256</text>

            <line x1="130" y1="75" x2="180" y2="75" stroke="#F4F4F4" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />

            {/* Step 2 */}
            <rect x="180" y="40" width="140" height="70" stroke="#F4F4F4" strokeWidth="1.25" fill="#131313" />
            <text x="192" y="60" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">NODE_02: TRANSFORM</text>
            <text x="192" y="78" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.9">NARRATIVE_SYNTH</text>
            <text x="192" y="94" fill="#F4F4F4" fontSize="7" fontFamily="monospace" opacity="0.4">STREAMING: ACTIVE</text>

            <line x1="320" y1="75" x2="370" y2="75" stroke="#F4F4F4" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />

            {/* Step 3 */}
            <rect x="370" y="40" width="110" height="70" stroke="#F4F4F4" strokeWidth="0.75" fill="#131313" />
            <text x="382" y="60" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.6">NODE_03: EXPORT</text>
            <text x="382" y="78" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.9">MARKDOWN</text>
            <text x="382" y="94" fill="#F4F4F4" fontSize="7" fontFamily="monospace" opacity="0.4">STATUS: READY</text>
          </g>

          {/* Token Waveform Bar Grid */}
          <g transform="translate(60, 200)">
            <rect x="0" y="0" width="480" height="50" stroke="#F4F4F4" strokeWidth="0.5" opacity="0.2" />
            <text x="14" y="20" fill="#F4F4F4" fontSize="8" fontFamily="monospace" opacity="0.5">TOKEN PROBABILITY STREAMING LOG</text>
            {/* Bars */}
            {[20, 35, 15, 28, 42, 18, 30, 24, 38, 14, 29, 32, 16, 26, 40, 22].map((h, i) => (
              <rect
                key={i}
                x={240 + i * 14}
                y={40 - h}
                width="8"
                height={h}
                fill="#F4F4F4"
                fillOpacity={0.15 + (i % 3) * 0.15}
              />
            ))}
          </g>

          <text x="60" y="325" fill="#F4F4F4" fontSize="9" fontFamily="monospace" opacity="0.5">
            MULTIMODAL LLM WORKBENCH // ZERO-LATENCY SSE TOKEN STREAMING
          </text>
        </svg>
      )}

      {/* Subtle Top-Right Technical Tag */}
      {badgeText && (
        <div className="absolute top-4 right-4 z-10 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-[#F4F4F4]/70 border border-white/[0.08] bg-[#101010]/80 backdrop-blur-xs">
          {badgeText}
        </div>
      )}
    </div>
  );
}
