export interface Milestone {
  year: string;
  period?: string;
  title: string;
  institution: string;
  description: string;
  tag?: string;
}

export const journeyMilestones: Milestone[] = [
  {
    year: "2026",
    period: "PRESENT",
    title: "AI / ML Engineering",
    institution: "Yenepoya Institute of Technology",
    description: "Specializing in neural architectures, deep learning computer vision, and applied machine learning pipelines while architecting digital products.",
    tag: "ACADEMIC"
  },
  {
    year: "2026",
    period: "CURRENT INITIATIVE",
    title: "Hackathons, Research & Applied Systems",
    institution: "Autonomous Engineering & Team Collaborations",
    description: "Architecting real-time anomaly detection for OceanTrace and automated institutional timetable synchronization engines (YenSync).",
    tag: "ENGINEERING"
  },
  {
    year: "2025",
    period: "MILESTONE",
    title: "Multimodal AI & Agritech Innovation",
    institution: "Regional Agricultural AI Initiative",
    description: "Engineered Farmer Mithra, integrating quantized plant disease vision classifiers and vernacular advisory synthesis for local farming communities.",
    tag: "PROJECT LEAD"
  },
  {
    year: "2025",
    period: "WORKSHOPS & EXPLORATION",
    title: "Technical Workshops & Open Systems",
    institution: "AI & Developer Communities",
    description: "Deepened practical expertise in PyTorch model fine-tuning, Transformers pipelines, ONNX edge deployment, and Next.js full-stack development.",
    tag: "DEVELOPMENT"
  },
  {
    year: "2024",
    period: "FOUNDATIONAL",
    title: "Foundations of Computer Science & Algorithms",
    institution: "Yenepoya Institute of Technology",
    description: "Built strong grounding in data structures, computational mathematics, discrete systems, and clean object-oriented code principles.",
    tag: "FOUNDATION"
  }
];
