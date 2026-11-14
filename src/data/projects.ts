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
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  onLinkedIn?: boolean;
}

export const projects: Project[] = [
  {
    slug: "inkread",
    number: "01",
    name: "InkRead",
    category: "Deep Learning / Handwriting Recognition",
    year: "2025",
    tagline: "AI-powered handwriting recognition web application converting handwritten script into digital text with fine-tuned TrOCR.",
    statement: "An applied vision-language transformer pipeline converting handwritten words and cursive paragraphs into clean digital text.",
    overview: "InkRead is an AI-powered handwriting recognition system engineered to transcribe handwritten manuscripts, notes, and paragraphs into structured digital text. Built on a fine-tuned TrOCR (Transformer Optical Character Recognition) backbone combined with OpenCV image segmentation, PyTorch, FastAPI, and Next.js, InkRead covers the complete machine learning lifecycle — from dataset preparation and image segmentation to real-time inference and a responsive modern web interface.",
    role: "Machine Learning & Full-Stack Developer — Implemented the end-to-end ML pipeline spanning dataset preparation, TrOCR fine-tuning, OpenCV segmentation heuristics, FastAPI inference microservice, and Next.js frontend.",
    technologies: ["PyTorch", "TrOCR", "OpenCV", "FastAPI", "Next.js", "Python", "TypeScript", "Tailwind CSS"],
    process: [
      {
        title: "01 / Preprocessing & Text-Line Segmentation",
        description: "Implemented adaptive thresholding, bilateral noise filtering, and horizontal projection contour profiling in OpenCV to segment cursive lines and words cleanly."
      },
      {
        title: "02 / Vision-Language Transformer Fine-Tuning",
        description: "Fine-tuned Microsoft's TrOCR architecture on domain-specific handwriting corpora with PyTorch, optimizing cross-attention mechanisms for complex cursive styles."
      },
      {
        title: "03 / High-Throughput Inference Microservice",
        description: "Constructed an asynchronous FastAPI backend microservice that streams segmented image batches directly to the model, returning transcribed digital text in real time."
      }
    ],
    image: "/images/inkread.jpeg",
    onLinkedIn: true,
    githubUrl: "https://github.com/rihan-mdk/InkRead",
  },
  {
    slug: "farmer-mitra",
    number: "02",
    name: "FarmerMitra",
    category: "Multimodal AI / Computer Vision",
    year: "2025",
    tagline: "AI-powered agricultural assistant diagnosing crop diseases instantly using deep learning and Gemini recovery strategies.",
    statement: "Deep learning foliar pathology diagnostics coupled with LLM agronomic treatment synthesis and regional multilingual accessibility.",
    overview: "Developed for a national-level hackathon based on a problem statement from Kokos.ai, FarmerMitra is an AI-powered agricultural intelligence platform designed to protect crop yields. By simply uploading a leaf image, farmers receive immediate crop disease classification powered by deep learning (ConvNeXt + CBAM attention mechanisms). Beyond classification, the platform integrates Google Gemini to formulate tailored chemical and organic remedies, recovery timelines, and preventive agronomic regimens — delivered in regional Indian languages to make smart farming accessible and efficient.",
    role: "Lead AI & Full-Stack Developer — Engineered the deep learning crop disease vision classifier, integrated CBAM attention blocks, built the Gemini advisory pipeline, and developed the responsive web client.",
    technologies: ["PyTorch", "ConvNeXt", "CBAM Attention", "Google Gemini API", "Flask", "React", "Python", "Tailwind CSS"],
    process: [
      {
        title: "01 / Deep Convolutional Vision with Attention",
        description: "Trained a ConvNeXt architecture augmented with Convolutional Block Attention Modules (CBAM) to focus on subtle lesion boundaries and textural symptoms under variable outdoor field conditions."
      },
      {
        title: "02 / Generative Agronomic Advisory Pipeline",
        description: "Connected vision model predictions to Google Gemini with structured agronomic prompting, automatically generating actionable treatment regimens, recovery schedules, and preventive measures."
      },
      {
        title: "03 / Multilingual Regional Speech & Text Interface",
        description: "Engineered multilingual support across regional languages, enabling farmers of diverse linguistic backgrounds to understand diagnostic outputs clearly and intuitively."
      }
    ],
    image: "/images/farmer-mitra.jpeg",
    onLinkedIn: true,
    githubUrl: "https://github.com/mrtechniques/FarmerMitra",
  },
  {
    slug: "neels-designer-studio",
    number: "03",
    name: "Neels Designer Studio",
    category: "Web Design / Creative",
    year: "2024",
    tagline: "Bespoke digital presence and booking experience crafted for a boutique fashion design studio.",
    statement: "An editorial web experience built for an independent fashion studio — refined typography, fluid motion, and an integrated consultation booking flow.",
    overview: "Neels Designer Studio is a bespoke web application created for a contemporary fashion and couture design studio. The platform translates the brand's tangible design sensibility into a digital showcase — pairing large editorial lookbook layouts with smooth scroll choreography and an integrated consultation booking system.",
    role: "Frontend Designer & Full-Stack Developer — Designed the brand's web visual identity, authored responsive grid architectures, and implemented the interactive booking system.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    process: [
      {
        title: "01 / Editorial Lookbook Grid",
        description: "Designed an asymmetric editorial grid system balancing high-resolution couture photography with spacious typographic breathing room."
      },
      {
        title: "02 / Fluid Motion Architecture",
        description: "Implemented scroll-linked parallax transitions and smooth layout shifts using Framer Motion to elevate perceived digital craftsmanship."
      },
      {
        title: "03 / Integrated Booking Flow",
        description: "Engineered a client inquiry and appointment scheduling workflow with automated confirmation delivery and calendar synchronization."
      }
    ],
    image: "/images/neels-designer-studio.png",
    onLinkedIn: false,
    liveUrl: "https://neels-designer-studio.vercel.app",
    githubUrl: "https://github.com/rihan-mdk/NDS",
  },
  {
    slug: "seoul-minimalist",
    number: "04",
    name: "Seoul Minimalist",
    category: "E-Commerce / Minimal Jewellery",
    year: "2024",
    tagline: "Curated Korean minimal jewellery brand and storefront built with high-performance commerce in Google Antigravity.",
    statement: "A refined Korean minimal jewellery storefront built in Google Antigravity — featuring clean editorial product curation and seamless purchasing.",
    overview: "Seoul Minimalist is a curated Korean minimal jewellery brand and e-commerce platform built directly within Google Antigravity. Embodying Korean aesthetic minimalism, the storefront features delicate jewellery showcases, high-contrast visual detailing, material provenance, and an effortless checkout experience.",
    role: "Full-Stack Developer & Designer — Designed and developed the entire minimal jewellery e-commerce platform in Antigravity from visual identity to deployment.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Antigravity", "Framer Motion", "Vercel"],
    process: [
      {
        title: "01 / High-Contrast Minimalist Interface",
        description: "Eliminated visual noise to spotlight fine jewellery metalwork, delicate stone settings, and curated styling guides through spacious editorial cards."
      },
      {
        title: "02 / Reactive Cart & Seamless Checkout",
        description: "Built an optimistic client-side cart drawer coupled with secure checkout integration, minimizing transactional friction."
      },
      {
        title: "03 / Image Optimization & Performance",
        description: "Leveraged Next.js automated image optimization, responsive picture elements, and static page generation to ensure instant page delivery."
      }
    ],
    image: "/images/seoul-minimalist.png",
    onLinkedIn: false,
    liveUrl: "https://seoul-minimalist.vercel.app",
    githubUrl: "https://github.com/rihan-mdk/seoul",
  },
  {
    slug: "edutimes",
    number: "05",
    name: "EduTimes",
    category: "Academic Scheduling / Clash Detection",
    year: "2024",
    tagline: "Intelligent timetable synthesis and clash detection platform solving multi-department scheduling conflicts.",
    statement: "Automated academic scheduling system deploying constraint satisfaction heuristics to eliminate faculty, room, and batch collisions.",
    overview: "EduTimes is an institutional academic scheduling platform built to automate the complex, multi-variable process of university timetable generation. Scheduling across dozens of departments, shared laboratories, lecture halls, and faculty availability traditionally results in recurring clashes and administrative bottlenecks. EduTimes integrates a heuristic clash detection engine that models institutional constraints to generate conflict-free academic schedules automatically.",
    role: "Full-Stack Architect & Algorithm Designer — Designed the multi-dimensional clash detection algorithm, database architecture, and responsive institutional timetable portal.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Constraint Heuristics", "Tailwind CSS", "PostgreSQL"],
    process: [
      {
        title: "01 / Constraint Modeling & Rule Specification",
        description: "Codified institutional constraints into hard rules (single faculty per timeslot, zero venue overlap, batch exclusivity) and soft preferences (balanced daily workload, minimal gap periods)."
      },
      {
        title: "02 / Real-Time Conflict & Clash Detection Engine",
        description: "Constructed an active collision detection algorithm that immediately flags room double-bookings, faculty overlaps, or capacity violations during manual adjustments."
      },
      {
        title: "03 / Unified Department & Faculty Matrix",
        description: "Engineered a synchronized schedule matrix providing real-time visibility across faculty allocations, venue occupancy, and departmental time blocks."
      }
    ],
    image: "/images/edutimes.png",
    onLinkedIn: true,
    liveUrl: "https://edu-times.vercel.app",
    githubUrl: "https://github.com/rihan-mdk/EduTimes",
  },
  {
    slug: "ai-document-digitizer",
    number: "06",
    name: "AI Document Digitizer",
    category: "Document Intelligence / OCR Extraction",
    year: "2025",
    tagline: "Intelligent document parsing pipeline extracting structured technical and tabular data with 97–99% accuracy.",
    statement: "End-to-end computer vision and OCR pipeline converting raw document images into verified, structured datasets.",
    overview: "Built during an intensive hackathon, AI Document Digitizer is an intelligent document processing tool engineered to eliminate manual data entry from complex technical and industrial specifications. The system processes full document scans, accurately isolating and extracting critical tabular parameters — such as taglines, top speed, acceleration profiles, engine architecture, horsepower metrics, and dimensional tolerances — converting raw pixels into validated structured data with 97–99% field accuracy.",
    role: "Computer Vision & Backend Developer — Designed the document layout analysis module, OCR bounding extraction, and automated key-value parsing pipeline.",
    technologies: ["Python", "Computer Vision", "Tesseract / EasyOCR", "OpenCV", "FastAPI", "Next.js", "TypeScript"],
    process: [
      {
        title: "01 / Morphological Document Rectification",
        description: "Engineered perspective warp correction, deskewing, and adaptive binarization algorithms in OpenCV to normalize scanned and camera-captured documents prior to text extraction."
      },
      {
        title: "02 / Spatial Key-Value & Tabular Extraction",
        description: "Formulated geometric distance heuristics and bounding-box spatial clustering to map heterogeneous document labels with their corresponding numerical values accurately."
      },
      {
        title: "03 / Clean Data Normalization & JSON Schema Export",
        description: "Built validation parsers that clean OCR noise, normalize engineering units, and export structured JSON schemas ready for downstream databases or analytical pipelines."
      }
    ],
    image: "/images/ai-document-digitizer.jpeg",
    onLinkedIn: true,
  },
  {
    slug: "timetable",
    number: "07",
    name: "Timetable",
    category: "UI Architecture / Creative Web",
    year: "2025",
    tagline: "Aesthetic, pastel-themed schedule interface exploring micro-typography, CSS physics, and spatial balance.",
    statement: "A study in transforming utilitarian data tables into an expressive, interactive pastel-palette digital schedule.",
    overview: "Timetable is a design-focused frontend project rooted in the philosophy of learning by creating. Moving beyond monotonous spreadsheets and utilitarian grids, this project crafts an aesthetic, pastel-themed timetable user interface using pure semantic HTML and modern CSS. The work centers on disciplined visual hierarchy, micro-typography, fluid centering, and tactile CSS hover animations that bring tabular data to life with understated elegance.",
    role: "Creative Frontend Designer — Designed the spatial grid layout, refined micro-typography, authored custom CSS transitions, and crafted the pastel color system.",
    technologies: ["HTML5", "CSS3", "CSS Grid & Flexbox", "CSS Keyframes", "Micro-Typography"],
    process: [
      {
        title: "01 / Spatial Proportion & Grid Architecture",
        description: "Structured a responsive tabular grid using CSS Grid with explicit fractional track sizing, ensuring harmonious cell proportions across diverse viewport dimensions."
      },
      {
        title: "02 / Curated Pastel Chromatic System",
        description: "Composed a balanced, low-saturation pastel palette designed to convey temporal states and subject hierarchies without visual fatigue."
      },
      {
        title: "03 / Micro-Interactions & Hover Physics",
        description: "Engineered subtle scale transforms, shadow elevation depth transitions, and border illumination effects triggered seamlessly on cursor hover."
      }
    ],
    image: "/images/timetable.jpeg",
    onLinkedIn: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) =>
      p.slug === slug ||
      (slug === "farmer-mithra" && p.slug === "farmer-mitra") ||
      (slug === "farmer-mitra" && p.slug === "farmer-mithra")
  );
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex(
    (p) =>
      p.slug === slug ||
      (slug === "farmer-mithra" && p.slug === "farmer-mitra") ||
      (slug === "farmer-mitra" && p.slug === "farmer-mithra")
  );
  if (index === -1) return {};
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}
