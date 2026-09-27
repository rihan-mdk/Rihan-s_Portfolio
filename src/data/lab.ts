export interface LabItem {
  id: string;
  number: string;
  title: string;
  category: "AI" | "WEB" | "UI" | "PROTOTYPES" | "IDEAS";
  year: string;
  description: string;
  status: "EXPLORATION" | "PROTOTYPE" | "CONCEPT" | "ARCHIVED";
  notes?: string;
  metrics?: string;
  codeSnippet?: string;
}

export const labItems: LabItem[] = [
  {
    id: "latent-flow",
    number: "EXP-01",
    title: "Neural Latent Flow",
    category: "AI",
    year: "2026",
    description: "Visualizing high-dimensional embedding clusters projected onto 2D manifold slices with real-time vector cosine similarity calculations in the browser.",
    status: "EXPLORATION",
    notes: "Utilizes UMAP dimensional reduction algorithms compiled to WebAssembly for client-side embedding exploration.",
    metrics: "512-dim vectors -> 2D plane @ 60fps"
  },
  {
    id: "token-streamer",
    number: "EXP-02",
    title: "Dynamic Token Streamer",
    category: "PROTOTYPES",
    year: "2026",
    description: "A minimal, zero-latency streaming text generator interface that highlights token probability heatmaps and predicts sentence completion branching.",
    status: "PROTOTYPE",
    notes: "Simulating byte-pair encoding (BPE) boundaries with subtle opacity shifts.",
    metrics: "< 8ms visual rendering delay"
  },
  {
    id: "spatial-canvas",
    number: "EXP-03",
    title: "Spatial Audio Canvas",
    category: "UI",
    year: "2025",
    description: "Interactive sound design environment utilizing Web Audio API panner nodes mapped to 2D cursor distance and velocity fields.",
    status: "PROTOTYPE",
    notes: "Investigating how spatial sound queues can assist visually impaired users during canvas navigation.",
    metrics: "Binaural 3D acoustic field"
  },
  {
    id: "edge-vision-tracker",
    number: "EXP-04",
    title: "Edge Landmark Detector",
    category: "AI",
    year: "2025",
    description: "Zero-server facial and hand landmark tracker running completely inside a Web Worker thread, preventing main-thread UI jank.",
    status: "EXPLORATION",
    notes: "Trained on synthetic keypoint representations to preserve absolute user privacy.",
    metrics: "21 keypoints @ 14.8ms on M-series CPU"
  },
  {
    id: "variable-kinetic-grid",
    number: "EXP-05",
    title: "Kinetic Variable Typography",
    category: "IDEAS",
    year: "2025",
    description: "Experimental typographic layout system where font optical size and weight interpolate based on pointer speed and reading acceleration.",
    status: "CONCEPT",
    notes: "Explores reactive editorial pacing for long-form technical research papers.",
    metrics: "CSS wght 100-900 dynamic curve"
  },
  {
    id: "prompt-permutation-diff",
    number: "EXP-06",
    title: "Prompt Permutation Diff",
    category: "WEB",
    year: "2025",
    description: "Deterministic AST comparison tool for LLM system prompts that highlights potential hallucination risks and semantic drift across model iterations.",
    status: "PROTOTYPE",
    notes: "Built with TypeScript regex AST parser and Levenshtein token distance calculation.",
    metrics: "Instant AST semantic divergence score"
  }
];
