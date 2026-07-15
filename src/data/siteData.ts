// Central data layer for managing all dynamic content
// Events, Blog Posts, Projects, Gallery - all managed from here
// To switch to a CMS or API later, simply replace the data source with fetch calls

export interface Event {
  id: string;
  title: string;
  type: "Workshop" | "Meetup" | "Hackathon" | "Seminar" | "Tech Talk";
  date: string;
  time: string;
  location: string;
  participants: string;
  description: string;
  status: "upcoming" | "live" | "past" | "coming-soon";
  registrationUrl?: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "In Development" | "Planning" | "Upcoming" | "Live" | "Beta";
  tech: string[];
  category: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

// =================== EVENTS ===================
export const events: Event[] = [
  {
    id: "ai-ml-workshop-2025",
    title: "Introduction to AI & Machine Learning",
    type: "Workshop",
    date: "Q1 2025",
    time: "TBD",
    location: "Online",
    participants: "Open to all",
    description:
      "A beginner-friendly workshop covering the fundamentals of artificial intelligence and machine learning. Learn core concepts, explore popular tools, and build your first AI project.",
    status: "coming-soon",
    registrationUrl: "https://discord.com/channels/1526071067616084038",
  },
  {
    id: "open-source-day-2025",
    title: "Open Source Contribution Day",
    type: "Meetup",
    date: "Q1 2025",
    time: "TBD",
    location: "Online",
    participants: "All skill levels",
    description:
      "A collaborative session where we contribute to open-source projects, learn Git workflows, and help newcomers make their first contribution.",
    status: "coming-soon",
    registrationUrl: "https://github.com/GOHIX",
  },
  {
    id: "gohix-hackathon-2025",
    title: "GOHIX Hackathon 2025",
    type: "Hackathon",
    date: "Q2 2025",
    time: "48 hours",
    location: "Kathmandu, Nepal",
    participants: "Teams & individuals",
    description:
      "Build innovative solutions over a weekend. Themes include AI for good, developer tools, and open-source impact. Exciting prizes and mentorship opportunities.",
    status: "coming-soon",
    registrationUrl: "https://discord.com/channels/1526071067616084038",
  },
  {
    id: "tech-talk-series-2025",
    title: "Tech Talk: Future of AI",
    type: "Tech Talk",
    date: "Monthly",
    time: "Evening",
    location: "Online",
    participants: "Open to all",
    description:
      "Expert talks on AI, software engineering, and emerging technologies. Featuring industry professionals and researchers sharing insights and experiences.",
    status: "coming-soon",
  },
  {
    id: "python-bootcamp-2025",
    title: "Python for AI Bootcamp",
    type: "Workshop",
    date: "Q2 2025",
    time: "Weekend sessions",
    location: "Online",
    participants: "Beginners to intermediate",
    description:
      "An intensive bootcamp focused on Python programming for AI applications. Hands-on projects, real-world datasets, and personalized mentorship.",
    status: "coming-soon",
    registrationUrl: "https://discord.com/channels/1526071067616084038",
  },
  {
    id: "research-seminar-2025",
    title: "Research Paper Reading Group",
    type: "Seminar",
    date: "Bi-weekly",
    time: "Evening",
    location: "Online",
    participants: "Researchers & enthusiasts",
    description:
      "Join our research paper reading group where we discuss cutting-edge research in AI, machine learning, and software engineering.",
    status: "coming-soon",
  },
];

// =================== BLOG POSTS ===================
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Machine Learning in Python",
    excerpt:
      "A beginner-friendly guide to setting up your first ML project using Python, scikit-learn, and Jupyter Notebooks.",
    content: `# Getting Started with Machine Learning in Python

Machine learning is transforming every industry, and Python is the language of choice for most ML practitioners. In this guide, we'll walk through setting up your first ML project.

## Setting Up Your Environment

First, let's create a virtual environment and install the necessary packages:

\`\`\`bash
python -m venv ml-env
source ml-env/bin/activate  # On Windows: ml-env\\Scripts\\activate
pip install numpy pandas scikit-learn matplotlib jupyter
\`\`\`

## Your First Model

Let's build a simple classification model using the famous Iris dataset...`,
    author: "GOHIX Research Team",
    category: "Python",
    date: "Coming Soon",
    readTime: "10 min read",
    tags: ["python", "machine-learning", "beginner"],
    imageUrl:
      "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&w=1200",
    slug: "getting-started-ml-python",
  },
  {
    id: "2",
    title: "Why Open Source Matters for AI Development",
    excerpt:
      "Exploring the critical role of open-source collaboration in advancing artificial intelligence research and applications.",
    content: `# Why Open Source Matters for AI Development

The AI revolution we're witnessing today has been built on the foundation of open-source software and collaborative research. From PyTorch to TensorFlow, from Hugging Face to LangChain — open source is the engine driving innovation.

## The Power of Community

Open source allows researchers and developers to build upon each other's work, accelerating the pace of innovation...`,
    author: "GOHIX",
    category: "Artificial Intelligence",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["ai", "open-source", "research"],
    imageUrl:
      "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&cs=tinysrgb&w=1200",
    slug: "open-source-ai-development",
  },
  {
    id: "3",
    title: "Building Modern Web Applications: A Practical Approach",
    excerpt:
      "Lessons learned from building performant, accessible, and maintainable web applications with modern tooling.",
    content: `# Building Modern Web Applications

Building modern web applications requires more than just knowing a framework. It requires understanding performance, accessibility, security, and maintainability.

## The Modern Stack

Today, developers have access to incredible tools...`,
    author: "GOHIX Engineering",
    category: "Web Development",
    date: "Coming Soon",
    readTime: "12 min read",
    tags: ["web-dev", "react", "typescript"],
    imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "modern-web-applications",
  },
  {
    id: "4",
    title: "The Future of Developer Tools",
    excerpt:
      "How AI and automation are reshaping the developer experience and what it means for software engineering.",
    content: `# The Future of Developer Tools

Developer tools are undergoing a revolution. AI-powered code completion, automated testing, intelligent debugging — the tools we use are becoming smarter every day.`,
    author: "GOHIX",
    category: "Software Engineering",
    date: "Coming Soon",
    readTime: "7 min read",
    tags: ["devtools", "ai", "engineering"],
    imageUrl:
      "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "future-developer-tools",
  },
  {
    id: "5",
    title: "Understanding Neural Networks: A Visual Guide",
    excerpt:
      "Breaking down the complex math behind neural networks into intuitive visual concepts anyone can understand.",
    content: `# Understanding Neural Networks

Neural networks power everything from image recognition to language models. But how do they actually work? Let's break it down.`,
    author: "GOHIX Research Team",
    category: "Artificial Intelligence",
    date: "Coming Soon",
    readTime: "15 min read",
    tags: ["neural-networks", "deep-learning", "ai"],
    imageUrl:
      "https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&w=1200",
    slug: "neural-networks-visual-guide",
  },
  {
    id: "6",
    title: "Contributing to Open Source: A Beginner's Roadmap",
    excerpt:
      "Step-by-step guide for making your first open source contribution, from finding a project to submitting a PR.",
    content: `# Contributing to Open Source

Making your first open source contribution can feel intimidating. This roadmap will guide you through the entire process.`,
    author: "GOHIX Community",
    category: "Open Source",
    date: "Coming Soon",
    readTime: "9 min read",
    tags: ["open-source", "github", "beginner"],
    imageUrl:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1200",
    slug: "open-source-beginner-roadmap",
  },
];

// =================== PROJECTS ===================
export const projects: Project[] = [
  {
    id: "gohix-ai-platform",
    title: "GOHIX AI Platform",
    description:
      "An intelligent platform designed for AI experimentation, model training, and research collaboration. Built with modern frameworks and designed for scalability.",
    status: "In Development",
    tech: ["Python", "PyTorch", "FastAPI", "React", "PostgreSQL"],
    category: "Artificial Intelligence",
    imageUrl:
      "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=1200",
    githubUrl: "https://github.com/GOHIX",
    featured: true,
  },
  {
    id: "devtools-suite",
    title: "DevTools Suite",
    description:
      "A collection of modern developer tools for productivity, code quality, and workflow automation. Built for the modern developer.",
    status: "Planning",
    tech: ["TypeScript", "Rust", "Electron", "Node.js"],
    category: "Developer Tools",
    imageUrl:
      "https://images.pexels.com/photos/18372332/pexels-photo-18372332.jpeg?auto=compress&cs=tinysrgb&w=1200",
    githubUrl: "https://github.com/GOHIX",
  },
  {
    id: "open-learn-hub",
    title: "Open Learn Hub",
    description:
      "An open-source educational platform with curated learning paths, tutorials, and interactive coding environments for aspiring developers.",
    status: "Upcoming",
    tech: ["Next.js", "MDX", "PostgreSQL", "Tailwind CSS"],
    category: "Educational Platforms",
    imageUrl: "https://images.pexels.com/photos/5428260/pexels-photo-5428260.jpeg?auto=compress&cs=tinysrgb&w=1200",
    githubUrl: "https://github.com/GOHIX",
  },
  {
    id: "research-dashboard",
    title: "Research Dashboard",
    description:
      "A collaborative research management tool for tracking experiments, papers, and findings. Designed for research teams and academic collaboration.",
    status: "Upcoming",
    tech: ["React", "Node.js", "MongoDB", "D3.js"],
    category: "Research",
    imageUrl: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    githubUrl: "https://github.com/GOHIX",
  },
  {
    id: "gohix-api",
    title: "GOHIX Open API",
    description:
      "A public API for accessing GOHIX services, data, and tools. Designed for developers who want to integrate GOHIX capabilities into their applications.",
    status: "In Development",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    category: "Web Applications",
    imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    githubUrl: "https://github.com/GOHIX",
  },
  {
    id: "ml-toolkit",
    title: "ML Toolkit Library",
    description:
      "An open-source Python library providing utilities for common machine learning tasks — from data preprocessing to model evaluation.",
    status: "Planning",
    tech: ["Python", "NumPy", "Pandas", "scikit-learn"],
    category: "Artificial Intelligence",
    imageUrl:
      "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&w=1200",
    githubUrl: "https://github.com/GOHIX",
  },
];

// =================== GALLERY ===================
export const galleryItems: GalleryItem[] = [
  {
    id: "ai-neural-1",
    title: "Neural Network Visualization",
    description: "Abstract visualization of AI neural networks and deep learning architectures",
    imageUrl:
      "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=800",
    category: "AI Research",
  },
  {
    id: "data-center",
    title: "Modern Infrastructure",
    description: "State-of-the-art server infrastructure powering our research",
    imageUrl: "https://images.pexels.com/photos/17489157/pexels-photo-17489157.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Technology",
  },
  {
    id: "circuit-board",
    title: "Microelectronics",
    description: "The intricate hardware that makes modern computing possible",
    imageUrl:
      "https://images.pexels.com/photos/18372336/pexels-photo-18372336.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Hardware",
  },
  {
    id: "ai-brain",
    title: "AI Brain Concept",
    description: "3D rendering of digital brain visual representing machine learning",
    imageUrl:
      "https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "AI Research",
  },
  {
    id: "developer-workspace",
    title: "Developer Workspace",
    description: "A developer writing code on multiple monitors in a modern office",
    imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Development",
  },
  {
    id: "server-room",
    title: "Network Operations",
    description: "Modern server room with network equipment and blue illumination",
    imageUrl: "https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Infrastructure",
  },
  {
    id: "ai-network",
    title: "Deep Learning Networks",
    description: "Elegant visualization of neural networks in digital space",
    imageUrl:
      "https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&w=800",
    category: "AI Research",
  },
  {
    id: "robotic-hand",
    title: "Human-AI Interaction",
    description: "Robotic hand reaching into a digital network — symbolizing AI technology",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Innovation",
  },
  {
    id: "code-monitor",
    title: "Code Development",
    description: "Colorful code on computer monitors in a vibrant workspace",
    imageUrl: "https://images.pexels.com/photos/34212916/pexels-photo-34212916.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Development",
  },
  {
    id: "data-viz",
    title: "Data Visualization",
    description: "Abstract 3D render visualizing artificial intelligence and neural networks",
    imageUrl:
      "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&cs=tinysrgb&w=800",
    category: "AI Research",
  },
  {
    id: "motherboard",
    title: "Circuit Architecture",
    description: "Detailed view of a circuit board highlighting electronic components",
    imageUrl: "https://images.pexels.com/photos/3520692/pexels-photo-3520692.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Hardware",
  },
  {
    id: "programmer",
    title: "Engineering Focus",
    description: "A programmer in a modern office working on computer code",
    imageUrl: "https://images.pexels.com/photos/6804594/pexels-photo-6804594.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Development",
  },
];
