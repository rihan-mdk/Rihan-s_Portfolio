export interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  statement: string;
  overview: string;
  role: string;
  technologies: string[];
  process: {
    title: string;
    description: string;
  }[];
  results: {
    label: string;
    value: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  visualTheme: "satellite" | "agro" | "adaptive" | "gesture" | "scheduler" | "studio";
}

export const projects: Project[] = [
  {
    slug: "oceantrace",
    number: "01",
    name: "OceanTrace",
    category: "AI / Marine Telemetry & Geospatial ML",
    year: "2026",
    tagline: "Satellite and deep sensory telemetry pipeline detecting illegal maritime activity and ocean ecosystem anomalies.",
    statement: "Real-time maritime surveillance fusing Synthetic Aperture Radar (SAR) imagery with automated vessel trajectory anomaly detection.",
    overview: "OceanTrace addresses the critical challenge of maritime preservation and unregulated fishing. By ingesting public SAR satellite passes and Automatic Identification System (AIS) transponder feeds, the system detects 'dark vessels' (ships operating with disabled transponders) and flags unauthorized intrusions into Marine Protected Areas.",
    role: "AI/ML Lead & System Architect — Supervised dataset curation, model quantization, inference engine engineering, and geospatial dashboard interface.",
    technologies: ["Python", "PyTorch", "YOLOv8-OBB", "FastAPI", "GeoPandas", "Next.js", "TypeScript", "Tailwind CSS"],
    process: [
      {
        title: "01 / Synthetic Aperture Radar Ingestion",
        description: "Built automated data ingestion pipelines collecting Sentinel-1 SAR tiles across designated high-risk maritime corridors, applying speckle filtering and radiometric calibration."
      },
      {
        title: "02 / Oriented Bounding Box Detection",
        description: "Fine-tuned YOLOv8-OBB models to detect multi-angle surface vessels with high precision regardless of wave clutter and low-light conditions."
      },
      {
        title: "03 / AIS Kinematic Anomaly Correlator",
        description: "Implemented an anomaly engine matching detected optical signatures against AIS GPS positions, pinpointing unregistered radar targets in real-time."
      }
    ],
    results: [
      { label: "Inference Latency", value: "84ms / SAR Tile" },
      { label: "Vessel Detection mAP@50", value: "91.8%" },
      { label: "Correlated Coverage", value: "14,000+ sq km" }
    ],
    liveUrl: "https://github.com/rihanmr/oceantrace",
    githubUrl: "https://github.com/rihanmr/oceantrace",
    visualTheme: "satellite"
  },
  {
    slug: "farmer-mithra",
    number: "02",
    name: "Farmer Mithra",
    category: "Multimodal AI / Agritech",
    year: "2025",
    tagline: "Localized crop disease diagnosis and automated market intelligence platform for regional farmers.",
    statement: "On-device mobile vision diagnostics paired with regional vernacular speech query synthesis for rural agriculture.",
    overview: "Farmer Mithra is designed to bridge the accessibility gap in modern agritech. Smallholder farmers often struggle with delayed plant pathology diagnoses and volatile mandi pricing. Farmer Mithra combines lightweight computer vision on crop foliar scans with voice-driven localized advisory synthesis.",
    role: "Full Stack AI Engineer — Spearheaded the plant pathology vision pipeline, optimized edge inference, and designed the accessible high-contrast mobile web client.",
    technologies: ["Python", "PyTorch", "MobileNetV3", "FastEmbed", "Next.js", "Django", "Tailwind CSS"],
    process: [
      {
        title: "01 / Edge-Quantized Foliar Diagnostics",
        description: "Trained and quantized MobileNetV3 models to detect 38 classes of crop leaf diseases across paddy, areca nut, tomato, and corn, running seamlessly on low-tier mobile devices."
      },
      {
        title: "02 / Vernacular Audio Query Pipeline",
        description: "Engineered a low-bandwidth speech-to-text and text-to-speech advisory layer allowing farmers to speak queries in regional languages and receive spoken guidance."
      },
      {
        title: "03 / Real-Time Mandi Price Aggregation",
        description: "Scraped and normalized agricultural market pricing indices to recommend optimal harvest liquidation timeframes and nearby transport hubs."
      }
    ],
    results: [
      { label: "Foliar Pathology Accuracy", value: "94.6%" },
      { label: "Model Size (Quantized)", value: "14.2 MB" },
      { label: "Diagnoses Processed", value: "3,200+" }
    ],
    liveUrl: "https://github.com/rihanmr/farmer-mithra",
    githubUrl: "https://github.com/rihanmr/farmer-mithra",
    visualTheme: "agro"
  },
  {
    slug: "adaptlearning",
    number: "03",
    name: "AdaptLearning",
    category: "EdTech / Intelligent Systems",
    year: "2025",
    tagline: "Self-calibrating educational engine that maps conceptual friction and dynamically restructures learning paths.",
    statement: "Bayesian knowledge-tracing algorithms generating personalized curricula based on student hesitation patterns and micro-comprehension hurdles.",
    overview: "Conventional learning management systems rely on rigid linear syllabi. AdaptLearning tracks learner response times, hint requests, and conceptual regressions to build a dynamic knowledge graph that guides students through targeted remediation before advance topics are introduced.",
    role: "Product Designer & Core Developer — Designed UX architecture, knowledge tracing state machine, and clean responsive dashboard views.",
    technologies: ["Next.js", "TypeScript", "Scikit-learn", "Redis", "Tailwind CSS", "Framer Motion"],
    process: [
      {
        title: "01 / Conceptual Dependency Graph",
        description: "Modeled academic topics as directed acyclic graphs (DAGs), mapping prerequisite dependencies across complex engineering and computer science subjects."
      },
      {
        title: "02 / Friction Score Heuristics",
        description: "Calculated multi-factor friction scores by monitoring question revisitation frequency, typing cadence pauses, and diagnostic quiz accuracy."
      },
      {
        title: "03 / Dynamic Remediation Synthesis",
        description: "Automated instant modular flashcards and interactive visual sandboxes that trigger when conceptual misunderstandings are identified."
      }
    ],
    results: [
      { label: "Engagement Lift", value: "+38%" },
      { label: "Remediation Cycle Time", value: "-45%" },
      { label: "Student Test Retention", value: "89.2%" }
    ],
    liveUrl: "https://github.com/rihanmr/adaptlearning",
    githubUrl: "https://github.com/rihanmr/adaptlearning",
    visualTheme: "adaptive"
  },
  {
    slug: "digit",
    number: "04",
    name: "DIGIT",
    category: "Computer Vision / HCI",
    year: "2025",
    tagline: "Micro-latency edge inference engine converting spatial stroke dynamics into structured digital symbols.",
    statement: "Zero-dependency client-side hand gesture and handwritten spatial stroke recognizer with sub-15ms edge inference.",
    overview: "DIGIT explores frictionless human-computer interfaces. By combining spatial stroke velocity vectors with a compact neural classifier, users can execute complex system commands, digital ink parsing, and gesture-driven navigation without specialized hardware.",
    role: "AI Engineer & UI Specialist — Implemented stroke-smoothing bezier algorithms, ONNX model pipeline, and clean minimalist interactive playground.",
    technologies: ["Python", "OpenCV", "CNN", "ONNX Runtime Web", "WebGL Canvas", "TypeScript"],
    process: [
      {
        title: "01 / Stroke Vector Normalization",
        description: "Developed invariant coordinate resamplers and curvature estimators that transform raw pointer gestures into uniform spatial feature tensors."
      },
      {
        title: "02 / In-Browser ONNX Acceleration",
        description: "Compiled lightweight convolutional classifiers to ONNX Web format, leveraging WebGL acceleration for real-time edge evaluation without sending stroke data to external servers."
      },
      {
        title: "03 / Spatial Feedback Engine",
        description: "Rendered responsive tactile stroke visuals with minimal CPU footprint, ensuring flawless 60fps interaction on standard laptop and tablet displays."
      }
    ],
    results: [
      { label: "Edge Inference Time", value: "11.4 ms" },
      { label: "Gesture Classification Acc.", value: "97.4%" },
      { label: "Client Bundle Size", value: "480 KB" }
    ],
    liveUrl: "https://github.com/rihanmr/digit",
    githubUrl: "https://github.com/rihanmr/digit",
    visualTheme: "gesture"
  },
  {
    slug: "yensync",
    number: "05",
    name: "YenSync",
    category: "Web & Academic Systems",
    year: "2025-2026",
    tagline: "Automated institutional curriculum scheduler and unified synchronization ecosystem.",
    statement: "Conflict-free multi-department academic scheduler solving complex combinatorial room and faculty allocation constraints.",
    overview: "Designed for Yenepoya Institute of Technology, YenSync eliminates scheduling collisions across hundreds of course modules, lecture halls, and laboratory blocks. Built using constraint satisfaction heuristics, the system automates what used to take weeks of manual coordination.",
    role: "Full-Stack Architect — Database architecture, constraint solver algorithm, role-based access control, and intuitive scheduling interface.",
    technologies: ["Next.js", "Node.js", "Express", "MySQL", "Tailwind CSS", "TypeScript"],
    process: [
      {
        title: "01 / Constraint Satisfaction Modeling",
        description: "Formulated the academic timetable dilemma as a constrained optimization problem, factoring in faculty availability, room capacity, and batch prerequisites."
      },
      {
        title: "02 / Real-time Collision Resolution",
        description: "Engineered automated backtracking heuristics that resolve faculty substitutions and emergency rescheduling within seconds."
      },
      {
        title: "03 / Unified Student & Faculty Portals",
        description: "Created clean, personalized calendar views that sync seamlessly across mobile devices and send automated timetable adjustment updates."
      }
    ],
    results: [
      { label: "Schedule Generation Speed", value: "< 4.2 sec" },
      { label: "Resource Collision Rate", value: "0.0%" },
      { label: "Departments Supported", value: "7+" }
    ],
    liveUrl: "https://github.com/rihanmr/yensync",
    githubUrl: "https://github.com/rihanmr/yensync",
    visualTheme: "scheduler"
  },
  {
    slug: "ai-content-studio",
    number: "06",
    name: "AI Content Creator Studio",
    category: "Generative AI / Workbench",
    year: "2026",
    tagline: "Modular studio environment for chaining multimodal LLM prompts into structured narrative scripts.",
    statement: "An editorial workbench designed for creators to synthesize, refine, and structure multi-part video scripts and technical documentation.",
    overview: "AI Content Creator Studio replaces chaotic copy-pasting between chat windows with a sleek node-based and document-driven narrative editor. Users can define style guidelines, orchestrate multi-step LLM reasoning, and export production-ready storyboards in seconds.",
    role: "AI & UI Developer — Developed the prompt chaining engine, dynamic token streaming interface, and markdown previewer.",
    technologies: ["Next.js", "React", "Transformers API", "Python", "Tailwind CSS", "Framer Motion"],
    process: [
      {
        title: "01 / Stepwise Prompt Orchestration",
        description: "Designed a pipeline allowing users to feed narrative outlines into targeted style conditioning and fact-checking sub-prompts."
      },
      {
        title: "02 / Real-time Latency & Token Streamer",
        description: "Implemented server-sent events (SSE) with token-by-token visual feedback and live estimate monitors for API token usage."
      },
      {
        title: "03 / Minimalist Markdown Workspace",
        description: "Crafted a distraction-free editorial interface with instant typography preview, version comparison, and one-click JSON/MD exports."
      }
    ],
    results: [
      { label: "Script Production Speed", value: "3.5x faster" },
      { label: "Prompt Chaining Latency", value: "Streamed / 0ms delay" },
      { label: "Export Formats", value: "Markdown, JSON, PDF" }
    ],
    liveUrl: "https://github.com/rihanmr/ai-content-studio",
    githubUrl: "https://github.com/rihanmr/ai-content-studio",
    visualTheme: "studio"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}
