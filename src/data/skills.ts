export interface SkillCategory {
  title: string;
  subtitle: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / ML",
    subtitle: "Modeling, Training & Inference",
    items: ["Python", "PyTorch", "Scikit-learn", "Transformers", "Computer Vision", "YOLOv8", "ONNX Runtime"]
  },
  {
    title: "WEB",
    subtitle: "Modern Frontend Architecture",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "BACKEND",
    subtitle: "APIs, Storage & Systems",
    items: ["Django", "Node.js", "FastAPI", "MySQL", "Redis", "RESTful Architectures"]
  },
  {
    title: "TOOLS",
    subtitle: "Workflow, Development & Design",
    items: ["Git", "GitHub", "VS Code", "Google AI Studio", "Figma", "Docker Basics", "Linux / CLI"]
  }
];
