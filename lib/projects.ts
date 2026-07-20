export interface Project {
  title: string
  description: string
  tags: string[]
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  playStoreUrl?: string
}

export const PROJECTS: Project[] = [
  // 1. Featured Projects
  {
    title: "Imhotep Finance",
    description: "A mobile app and web platform that simplifies personal finance.",
    tags: ["React Native"],
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_finance",
    liveUrl: "https://imhotep-finance.vercel.app/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.imhoteptech.imhotep_finance",
    featured: true,
  },
  {
    title: "Loyalty Program Platform",
    description: "Turned a car-services chain's paper loyalty cards into a bilingual app used by 650+ customers.",
    tags: ["Django REST", "React", "PWA", "PostgreSQL"],
    liveUrl: "https://7csloyal.vercel.app/",
    featured: true,
  },
  {
    title: "6G Quantum Optimization",
    description: "A tool built for Orange Labs in France to run quantum optimizations for RAN problems, designed to be easy to use for non-technical people.",
    tags: ["Qiskit", "Python"],
    featured: true,
  },
  {
    title: "Dastet al3ab",
    description: "An open-source, bilingual party games platform with a Git-backed CMS. Create, play, and share offline-ready multiplayer games seamlessly! ",
    tags: ["React", "Next.js"],
    githubUrl: "https://github.com/Imhotep-Tech/dastet-al3ab",
    liveUrl: "https://dastet-al3ab.vercel.app/",
    featured: true,
  },
  {
    title: "dj-scaffold",
    description: "Open-source CLI for instant, containerized Django setups with CI/CD.",
    tags: ["Python", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/kbassem10/dj-scaffold",
    featured: true,
  },

  {
    title: "Enterprise ERP Development",
    description: "Custom module development and workflow integration across Odoo (via professional internship) and ERPNext.",
    tags: ["Python", "Odoo", "ERPNext"],
    featured: true,
  },


  // 2. Past Projects

  {
    title: "Greek Community Renting System",
    description: "A comprehensive renting system built specifically for the Greek community in Egypt.",
    tags: ["Web App", "Rental Management"],
    featured: false,
  },
  {
    title: "Pharaohfolio",
    description: "The fastest way to put an AI-generated portfolio online.",
    tags: ["Django", "React", "Docker", "Monaco Editor"],
    githubUrl: "https://github.com/Imhotep-Tech/Pharaohfolio",
    liveUrl: "https://pharaohfolio.vercel.app/",
    featured: false,
  },
  {
    title: "ImhotepChef",
    description: "AI culinary companion that turns ingredients in your fridge into step-by-step recipes.",
    tags: ["Django", "React", "Gemini AI", "PostgreSQL"],
    githubUrl: "https://github.com/Imhotep-Tech/ImhotepChef",
    liveUrl: "https://imhotep-chef.vercel.app/",
    featured: false,
  },
  {
    title: "Imhotep Currency Converter",
    description: "Daily-updated exchange rates API and clean React converter dashboard.",
    tags: ["React", "REST API", "Real-time Rates"],
    githubUrl: "https://github.com/Imhotep-Tech/ImhotepCurrency",
    liveUrl: "https://imhotepcc.vercel.app/",
    featured: false,
  },
  {
    title: "Tic Tac Toe AI",
    description: "An unbeatable AI opponent demonstrating minimax game theory search.",
    tags: ["Flask", "JavaScript", "Minimax AI"],
    githubUrl: "https://github.com/Kbassem10/XO",
    liveUrl: "https://xo-taupe-two.vercel.app/",
    featured: false,
  },
  {
    title: "Imhotep Smart Clinic",
    description: "Practice management system with digital records, scheduling, and printable prescriptions.",
    tags: ["Django", "Tailwind CSS", "PostgreSQL", "PWA"],
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_smart_clinic",
    liveUrl: "https://imhotepsmartclinic.pythonanywhere.com/",
    featured: false,
  },
  {
    title: "Imhotep Tasks",
    description: "Cross-platform task manager deploying as a PWA and an Electron desktop app.",
    tags: ["Django", "PWA", "Electron"],
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_tasks",
    liveUrl: "https://imhotep-tasks.vercel.app/",
    featured: false,
  },
  {
    title: "Imhotep Skills",
    description: "AI study guide and educational roadmap planner based on user topic input.",
    tags: ["Flask", "AI", "Learning"],
    liveUrl: "https://imhotepskills.pythonanywhere.com/",
    featured: false,
  },
  {
    title: "Imhotep Exchange Rates API",
    description: "This API is simply a currency conversion API with unlimited requests, free to use, and updates every 24 hours.",
    tags: ["REST API", "Currency", "Exchange Rates", "Free"],
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_currency_rates_api",
    liveUrl: "https://imhotepexchangeratesapi.pythonanywhere.com/",
    featured: false,
  },
  {
    title: "Imhotep Mail",
    description: "This is a simple Python library for sending emails. It provides an easy way to configure and send emails from any Python code.",
    tags: ["Python", "Email", "SMTP", "Communication"],
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_mail",
    liveUrl: "https://pypi.org/project/imhotep-mail/",
    featured: false,
  },
  {
    title: "Imhotep Files Flask",
    description: "This Python library simplifies file upload and deletion operations in web applications using Flask or similar frameworks.",
    tags: ["Python", "Flask", "File Upload", "Web Framework"],
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_files_flask",
    liveUrl: "https://pypi.org/project/imhotep-files-flask/",
    featured: false,
  },
  {
    title: "The First Program",
    description: "My first real-world Flask project: a small clinic system to manage patients.",
    tags: ["Flask", "SQLite"],
    liveUrl: "https://kbassem.pythonanywhere.com/login",
    featured: false,
  },
]
