export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  github?: string;
  demo?: string;
  badge?: string;
  image: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  isLeadership?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  badge?: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  description: string;
  badge?: string;
}

export interface LeadershipRole {
  role: string;
  organization: string;
  duration: string;
  description: string[];
  badge?: string;
}

export interface Publication {
  title: string;
  journal: string;
  date: string;
  description: string;
  link?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Mahesh Perera",
    title: "Software Engineer Intern | Full-Stack Developer",
    subtitle: "Undergraduate @ Rajarata University of Sri Lanka | Cloud, DevOps & AI Practitioner",
    email: "maheshperera.ofcl@gmail.com",
    phone: "+94 71 345 7187",
    github: "https://github.com/Perera0000",
    linkedin: "https://www.linkedin.com/in/mahesh-p-perera/",
    facebook: "https://web.facebook.com/mahesh.prasanna.9081323/",
    medium: "https://medium.com/@mahesh-p-perera",
    resumeUrl: "https://docs.google.com/uc?export=download&id=1JcsRon_5wz8S66bAXOZbVuHZSw8bLlZg",
    location: "Anuradhapura, Sri Lanka",
    bio: "Highly analytical and innovation-driven Information Systems Undergraduate with hands-on experience in full-stack web application development, cloud environments, and modern DevOps pipelines. Demonstrates a verified capability to architect scalable web topologies, build real-time multi-threaded infrastructures, and deploy secure production code using the MERN stack, Next.js, and AWS platforms.",
    university: "Rajarata University of Sri Lanka",
    degree: "BSc Honours in Information Systems",
    coursework: "Software Engineering, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Data Structures & Algorithms (DSA), Web Application Development, Enterprise Systems, Cloud Computing, Artificial Intelligence.",
    additionalEdu: {
      program: "AI/ML Engineer Program (Stage 1 & Stage 2)",
      issuer: "Centre for Open and Distance Education (CODE), Sri Lanka Institute of Information Technology (SLIIT)",
      date: "2025",
      points: [
        "Machine Learning model deployment & statistical preprocessing",
        "Feature engineering and predictive analytics pipelines",
        "Practical exposure to AI/ML workflows and model evaluation"
      ]
    },
    metrics: [
      { label: "Completed Projects", value: "10+" },
      { label: "Credentials Earned", value: "8" },
      { label: "Hackathon Podiums", value: "Top 7" },
      { label: "Git Contributions", value: "540+" }
    ]
  },

  projects: [
    {
      title: "HelaWild",
      description: "A smart conservation platform addressing Human–Elephant Conflict (HEC) in Sri Lanka featuring real-time geolocation reporting, GIS-based mapping, and analytics dashboards.",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Leaflet", "Mapbox", "REST APIs"],
      github: "https://github.com/Perera0000/helawild",
      demo: "https://v0-hela-wild-platform-design.vercel.app/",
      badge: "D'Hack 2025 Finalist",
      image: "/Images/helawild.png",
      featured: true
    },
    {
      title: "Google Meet AI Assistant",
      description: "Automated meeting assistant built with FastAPI WebSockets and asynchronous MongoDB to stream and parse live transcripts into structured action items, summaries, and meeting tasks.",
      techStack: ["FastAPI", "Python", "MongoDB", "WebSockets", "GPT-4o", "React", "Tailwind CSS", "ShadCN"],
      github: "https://github.com/Perera0000/google-meet-ai-assistant",
      badge: "AI & WebSockets Product",
      image: "/Images/Google Meet AI Assistant.png",
      featured: true
    },
    {
      title: "TenderAI",
      description: "An AI-powered B2B SaaS platform that automates complex tender discovery, semantic matching, compliance checks, and regulatory-compliant proposal generation templates for SMEs.",
      techStack: ["React", "Next.js", "FastAPI", "PostgreSQL", "AWS", "Vector Databases", "Generative AI"],
      badge: "IIT CodeSprint 11",
      image: "/Images/TenderAI.png",
      featured: true
    },
    {
      title: "GPA Tracker & Prediction App",
      description: "A cross-platform mobile application enabling undergraduates to track semesters, predict future CGPA outcomes using forecasting models, and generate local PDF transcripts.",
      techStack: ["React Native", "Expo", "TypeScript", "Expo Router", "AsyncStorage", "React Native Chart Kit", "Expo Print"],
      github: "https://github.com/Perera0000/gpa-tracker-prediction-app",
      badge: "Mobile Analytics",
      image: "/Images/GPA Tracker & Prediction App.png",
      featured: true
    },
    {
      title: "JobHubNow",
      description: "A complete MVC-inspired job recruitment portal supporting job listings, employer dashboards, applicant tracking, resume uploads, and secure session management.",
      techStack: ["PHP", "MySQL", "Bootstrap", "AdminLTE", "JavaScript", "jQuery"],
      github: "https://github.com/Perera0000/jobhubnow-job-portal",
      badge: "Full-Stack PHP",
      image: "/Images/jobhubnow.png",
      featured: true
    },
    {
      title: "DreamScape",
      description: "Conceptual AI-powered mobile application designed with Flutter & MVVM architecture that interprets raw dream descriptions and generates visual dream graphics.",
      techStack: ["Flutter", "Dart", "AI Models", "Mobile UX", "Riverpod", "Firebase"],
      badge: "IIT IX 2025",
      image: "/Images/dreamscape.png",
      featured: false
    },
    {
      title: "BITCODE V6.0 Competition Website",
      description: "Official web portal designed and engineered for the national BITCODE V6.0 coding competition with fluid scroll animations and glassmorphism interface panels.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Perera0000/bitcode-v6-wesite",
      demo: "https://www.bitcodev6.com/",
      badge: "Official Website",
      image: "/Images/BITCODE V6.0 Competition Website.png",
      featured: false
    },
    {
      title: "AI Photoshoot Generator",
      description: "Automated photoshoot workbench using Gemini AI API tokens and React to structure customizable photoshoot generation concepts from natural language prompts.",
      techStack: ["React", "TypeScript", "Gemini AI", "Tailwind CSS"],
      github: "https://github.com/Perera0000/ai-photoshoot-generator",
      badge: "Generative AI API",
      image: "/Images/ai_photoshoot.png",
      featured: false
    },
    {
      title: "Weather Forecast App",
      description: "Location-aware mobile application delivering multi-day weather predictions, dynamic location searches, and offline-first caching.",
      techStack: ["React Native", "Expo", "TypeScript", "React Query", "OpenWeatherMap API", "AsyncStorage"],
      badge: "React Native Mobile",
      image: "/Images/Weather Forecast App.png",
      featured: false
    },
    {
      title: "Browser Productivity Extensions",
      description: "High-utility productivity extensions for Chrome (Manifest V3): Website Blocker (domain locking), Currency Converter (rates to LKR), Quick Translator (English-Sinhala), and MyTodo.",
      techStack: ["JavaScript", "Chrome APIs", "Service Workers", "REST APIs", "Local Storage"],
      github: "https://github.com/Perera0000",
      badge: "Chrome Manifest V3",
      image: "/Images/browser_extensions.png",
      featured: false
    }
  ] as Project[],

  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 85, iconName: "Cpu" },
        { name: "Python", level: 80, iconName: "Terminal" },
        { name: "JavaScript", level: 90, iconName: "Code" },
        { name: "TypeScript", level: 88, iconName: "FileCode" },
        { name: "PHP", level: 82, iconName: "FileCode" },
        { name: "Go", level: 65, iconName: "Code2" },
        { name: "Rust", level: 60, iconName: "Cpu" },
        { name: "SQL", level: 85, iconName: "Database" }
      ]
    },
    {
      category: "Frontend Engineering",
      skills: [
        { name: "React.js", level: 90, iconName: "Globe" },
        { name: "Next.js", level: 88, iconName: "Layers" },
        { name: "Tailwind CSS", level: 95, iconName: "Palette" },
        { name: "Bootstrap", level: 85, iconName: "Layout" },
        { name: "Context API & Recoil", level: 85, iconName: "Cpu" },
        { name: "Formik & Validation", level: 80, iconName: "Activity" }
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 88, iconName: "Server" },
        { name: "Express.js", level: 90, iconName: "Network" },
        { name: "Spring Boot", level: 75, iconName: "Terminal" },
        { name: "FastAPI", level: 80, iconName: "Zap" },
        { name: "MySQL & MongoDB", level: 85, iconName: "Database" },
        { name: "JWT & RBAC Auth", level: 88, iconName: "Shield" }
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "React Native & Expo", level: 85, iconName: "Smartphone" },
        { name: "Flutter & Dart", level: 75, iconName: "Smartphone" },
        { name: "Riverpod & Provider", level: 80, iconName: "Activity" },
        { name: "Clean Architecture", level: 78, iconName: "Layers" }
      ]
    },
    {
      category: "Cloud & infrastructure",
      skills: [
        { name: "AWS (EC2, S3, RDS)", level: 82, iconName: "Cloud" },
        { name: "IAM & VPC Security", level: 80, iconName: "Shield" },
        { name: "Serverless Lambda", level: 75, iconName: "Zap" },
        { name: "Docker Containerization", level: 85, iconName: "Box" },
        { name: "Kubernetes Orchestration", level: 75, iconName: "Network" },
        { name: "Terraform IaC & Ansible", level: 70, iconName: "Code2" }
      ]
    },
    {
      category: "DevOps & Practices",
      skills: [
        { name: "Linux Administration", level: 85, iconName: "Terminal" },
        { name: "CI/CD & Shell Scripting", level: 80, iconName: "Activity" },
        { name: "Prometheus & Grafana", level: 72, iconName: "LineChart" },
        { name: "Git & GitHub Sprints", level: 92, iconName: "GitBranch" },
        { name: "Agile / Scrum (Jira)", level: 85, iconName: "Layout" }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      role: "Software Engineering Intern",
      company: "Cloudeva Technologies",
      duration: "Jan 2026 – Apr 2026 (Remote)",
      description: [
        "Contributed to the development and maintenance of high-availability full-stack web applications using React.js, Node.js, Python, and MERN stack frameworks.",
        "Engineered responsive user interfaces and high-performance backend layers, integrating secure RESTful APIs and optimized database workflows.",
        "Managed version control pipelines via Git/GitHub workflows, actively participating in branching, pull request reviews, and AWS production deployments.",
        "Executed fast-paced Agile/Scrum sprints, contributing to scalable software solutions, system debugging, and performance optimization."
      ]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "IDET Certified MERN-Stack (Development Engineering) Professional Program",
      issuer: "Institute of Digital Engineering Technology (IDET)",
      date: "2026",
      image: "/Images/7.jpg",
      badge: "Full-Stack Web"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Training & Certification",
      date: "2025",
      image: "/Images/8.jpg",
      badge: "Cloud"
    },
    {
      title: "Data Engineering on AWS – Foundations",
      issuer: "AWS Training & Certification",
      date: "2025",
      image: "/Images/9.jpg",
      badge: "Data Engineering"
    },
    {
      title: "Docker & Kubernetes for Absolute Beginners",
      issuer: "KodeKloud",
      date: "2025",
      image: "/Images/10.jpg",
      badge: "DevOps"
    },
    {
      title: "Authentication and Authorization for Web/API (LFEL1004)",
      issuer: "The Linux Foundation",
      date: "2025",
      image: "/Images/11.png",
      badge: "Security"
    },
    {
      title: "Security for Software Development Managers (LFD125)",
      issuer: "The Linux Foundation & OpenSSF",
      date: "2025",
      image: "/Images/7.jpg",
      badge: "Secure Coding"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "2025",
      image: "/Images/8.jpg",
      badge: "AI/ML"
    },
    {
      title: "Agile Project Management",
      issuer: "HP LIFE",
      date: "2025",
      image: "/Images/9.jpg",
      badge: "Management"
    }
  ] as Certification[],

  leadership: [
    {
      role: "Customer Experience (CXP) Function Lead",
      organization: "AIESEC in Sri Lanka",
      duration: "2024 – 2025",
      description: [
        "Led the Customer Experience (CXP) function, managing participant engagement and end-to-end experience delivery.",
        "Served as Organizing Committee Vice President – Delegates & Logistics for Empower All: Shining Minds, coordinating logistics for 100+ delegates.",
        "Managed stakeholder relationships, collaborating with 10+ external partners and internal teams.",
        "Recognized as Best Performing Organizing Committee Vice President – Logistics (2024/25)."
      ],
      badge: "AIESEC Excellence"
    },
    {
      role: "Active Member",
      organization: "IEEE Student Branch (Rajarata University of Sri Lanka)",
      duration: "Feb 2025 – Present",
      description: [
        "Contributed to IEEE technical meetings, community hackathons, and technical writing drives.",
        "Supported the planning of campus-wide coding marathons and workshops."
      ],
      badge: "IEEE Member"
    },
    {
      role: "Active Member",
      organization: "IEEE Robotics and Automation Society",
      duration: "Dec 2025 – Present",
      description: [
        "Participated in robotics system design concepts and peer workshops on microcontroller programming."
      ],
      badge: "IEEE RAS Member"
    }
  ] as LeadershipRole[],

  achievements: [
    {
      title: "D'Hack 2025 Finalist",
      event: "Top 7 Teams Nationwide (HelaWild)",
      date: "2025",
      description: "Led development and architectural pitch of HelaWild platform addressing Human-Elephant Conflict in Sri Lanka among 50+ national teams."
    },
    {
      title: "SDG Sprints 2025 Finalist",
      event: "Team Ele-Guardians (IEEE SIGHT)",
      date: "2025",
      description: "Reached the final round presenting community-centric, SDG-focused wildlife monitoring and response concepts."
    },
    {
      title: "CodeSprint 11 Participant",
      event: "Team Leader – ApexForge (IEEE Student Branch of IIT)",
      date: "2026",
      description: "Designed technical architecture for TenderAI SaaS portal, including semantic AI recommendations and database layout."
    },
    {
      title: "IX 2025 Participant",
      event: "DreamScape AI Concept (IEEE Student Branch of IIT)",
      date: "2025",
      description: "Developed AI interpretation, emotional insights, and secure user flows for conceptual mobile app DreamScape."
    },
    {
      title: "BITCODE V5.0 Competitor",
      event: "Inter-University Coding Competition (RUSL)",
      date: "2024",
      description: "Qualified for and competed in preselection round showcasing data structures and programming logic."
    }
  ] as Achievement[],

  publications: [
    {
      title: "How AI and Machine Learning Are Redefining Consumer Engagement",
      journal: "trendFluence – Department of Marketing Management, Rajarata University of Sri Lanka",
      date: "2025",
      description: "Explored the impact of Artificial Intelligence and Machine Learning on consumer engagement, personalization, predictive analytics, and modern marketing strategies."
    }
  ] as Publication[],

  references: [
    {
      name: "Mr. R.M.G.H.N. Rathnayake",
      title: "Head of the Department, Dept. of Information Systems",
      org: "Faculty of Management Studies, Rajarata University of Sri Lanka",
      email: "hashanr@mgt.rjt.ac.lk",
      phone: "+94 71 218 7006"
    },
    {
      name: "Mr. Samitha Wickramarathne",
      title: "Software Engineer - Team Lead (Dev Team)",
      org: "Codevus Pvt Ltd",
      email: "samitha@codevus.com",
      phone: "+94 77 146 3516"
    }
  ]
};
