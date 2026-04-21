export type ProjectCategory =
  | "Web App"
  | "AI / ML"
  | "Business Tool"
  | "PWA"
  | "Game"
  | "Early Work"

export type Project = {
  title: string
  /** One-line headline a non-technical reader instantly understands. */
  tagline: string
  /** Plain-English explanation of the business value. */
  plainDescription: string
  /** Deeper, technical description for developers and engineers. */
  technicalDescription: string
  technologies: string[]
  category: ProjectCategory
  liveUrl?: string
  githubUrl?: string
  /** Optional concrete outcome (e.g., "550+ active users"). */
  impact?: string
  featured?: boolean
}

export type Package = {
  title: string
  description: string
  category: "REST API" | "Python Library"
  githubUrl: string
  liveUrl?: string
  pypiUrl?: string
}

/**
 * Hoisted so other fields (metrics, etc.) can read `projects.length` and
 * `packages.length` without duplicating counts.
 */
const projects: Project[] = [
  {
    title: "Loyalty Program Platform",
    tagline:
      "Turned a car-services chain's paper loyalty cards into a bilingual app used by 550+ customers.",
    plainDescription:
      "A full-stack loyalty app for a multi-branch car-services company in Egypt. Customers earn and redeem points by scanning a QR code on their phone — works in both Arabic and English, and installs like a real app (PWA).",
    technicalDescription:
      "Django REST Framework backend with a React 19 PWA frontend. Short-lived, QR-scoped redemption codes, automated invoice imports into PostgreSQL, JWT-based auth, full i18n (Arabic / English), and Playwright end-to-end test coverage. Containerized with Docker.",
    technologies: [
      "Django REST Framework",
      "React 19",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "JWT Authentication",
      "PWA",
      "Playwright",
    ],
    category: "Business Tool",
    liveUrl: "https://7csloyal.vercel.app/",
    impact: "550+ active users across multiple branches",
    featured: true,
  },
  {
    title: "Imhotep Financial Manager",
    tagline: "A personal-finance app that actually shows you where the money went.",
    plainDescription:
      "A full-stack finance manager with smart category suggestions, interactive dashboards, and automated recurring transactions — built so that anyone, not just accountants, can understand their money.",
    technicalDescription:
      "Django + React application with PostgreSQL storage, Dockerized deploys, advanced analytics widgets, and automated scheduled transactions. Designed as a long-term product flagship of Imhotep Tech.",
    technologies: ["Django", "React", "Tailwind CSS", "PostgreSQL", "Docker"],
    category: "Web App",
    liveUrl: "https://imhotep-finance.vercel.app/",
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_finance",
    featured: true,
  },
  {
    title: "Pharaohfolio",
    tagline: "The fastest way to put an AI-generated portfolio online.",
    plainDescription:
      "Paste code from ChatGPT, Claude, or any AI — get a live, shareable portfolio link in seconds, inside a safe sandboxed environment.",
    technicalDescription:
      "Django + React hosting layer with Monaco Editor, sandboxed rendering, user accounts, and PostgreSQL persistence. Docker-based deployment for isolation.",
    technologies: [
      "Django",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "Monaco Editor",
    ],
    category: "Web App",
    liveUrl: "https://pharaohfolio.vercel.app/",
    githubUrl: "https://github.com/Imhotep-Tech/Pharaohfolio",
  },
  {
    title: "ImhotepChef",
    tagline: "Tell it what's in your fridge — it writes the recipe.",
    plainDescription:
      "An AI culinary companion that turns the ingredients you already have into a step-by-step meal, to cut food waste and save time.",
    technicalDescription:
      "Django + React app integrating Google Gemini for structured recipe generation, PostgreSQL persistence, and Docker-based deployment. Prompts are tuned for reliability and dietary constraints.",
    technologies: ["Django", "React", "Google Gemini AI", "PostgreSQL", "Docker"],
    category: "AI / ML",
    liveUrl: "https://imhotep-chef.vercel.app/",
    githubUrl: "https://github.com/Imhotep-Tech/ImhotepChef",
  },
  {
    title: "Imhotep Smart Clinic",
    tagline: "Moves a clinic from paper to a phone-installable app.",
    plainDescription:
      "A medical practice management system with digital patient records, appointment scheduling, and printable prescriptions — installs like a native app on any device.",
    technicalDescription:
      "Django + Tailwind monolith with PostgreSQL, role-based access, PDF prescription rendering, and full PWA install support.",
    technologies: ["Django", "Tailwind CSS", "PostgreSQL", "PWA"],
    category: "Business Tool",
    liveUrl: "https://imhotepsmartclinic.pythonanywhere.com/",
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_smart_clinic",
  },
  {
    title: "Tic Tac Toe AI",
    tagline: "A Tic-Tac-Toe you cannot beat — and it proves why.",
    plainDescription:
      "A classic game with an unbeatable AI opponent, paired with a short explanation of how it 'thinks' ahead every move.",
    technicalDescription:
      "Flask backend computing optimal moves with the minimax algorithm, served to a lightweight vanilla-JS frontend with smooth animations and fair game-theory analysis.",
    technologies: ["Flask", "JavaScript", "Minimax AI", "Game Theory"],
    category: "Game",
    liveUrl: "https://xo-taupe-two.vercel.app/",
    githubUrl: "https://github.com/Kbassem10/XO",
  },
  {
    title: "Imhotep Currency Converter",
    tagline: "Daily-updated exchange rates, no ads, no limits.",
    plainDescription:
      "A fast currency converter powered by my own rates API — no rate limits, no tracking, no paywalls.",
    technicalDescription:
      "React frontend consuming a custom REST API I wrote and host, with a scheduled job that refreshes rates daily.",
    technologies: ["React", "Custom API", "Real-time Rates"],
    category: "Web App",
    liveUrl: "https://imhotepcc.vercel.app/",
    githubUrl: "https://github.com/Imhotep-Tech/ImhotepCurrency",
  },
  {
    title: "Imhotep Tasks",
    tagline: "The same to-do list on your phone, browser, and desktop.",
    plainDescription:
      "A cross-platform todo app that installs on any device — phone, browser, or desktop — and keeps everything in sync.",
    technicalDescription:
      "Django backend deployed as both a PWA and an Electron desktop shell with a unified responsive UI.",
    technologies: ["Django", "PWA", "Electron"],
    category: "PWA",
    liveUrl: "https://imhotep-tasks.vercel.app/",
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_tasks",
  },
  {
    title: "Imhotep Skills",
    tagline: "An AI coach that builds your study plan.",
    plainDescription:
      "Tell it what you want to learn — it designs a personalized roadmap, tracks progress, and adjusts as you go.",
    technicalDescription:
      "Flask application combining LLM-powered planning with progress tracking and persistence.",
    technologies: ["Flask", "AI", "Learning"],
    category: "AI / ML",
    liveUrl: "https://imhotepskills.pythonanywhere.com/",
  },
  {
    title: "The First Program",
    tagline: "Where it started — a clinic app written to solve a real problem.",
    plainDescription:
      "My first real-world Flask project: a small clinic system to manage patients and doctor operations. Kept live as a reminder of the path.",
    technicalDescription:
      "Early Flask monolith with server-rendered templates and SQL persistence. Retained as a historical artifact.",
    technologies: ["Flask", "Clinic"],
    category: "Early Work",
    liveUrl: "https://kbassem.pythonanywhere.com/login",
  },
]

const packages: Package[] = [
  {
    title: "Imhotep Exchange Rates API",
    description:
      "A free-to-use currency conversion REST API with unlimited requests and daily updates. Powers Imhotep Currency Converter and is open for anyone else to use.",
    category: "REST API",
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_currency_rates_api",
    liveUrl: "https://imhotepexchangeratesapi.pythonanywhere.com/",
  },
  {
    title: "Imhotep Files Flask",
    description:
      "A Python library that makes file upload and deletion in Flask apps a one-liner instead of a chore.",
    category: "Python Library",
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_files_flask",
    pypiUrl: "https://pypi.org/project/imhotep-files-flask/",
  },
  {
    title: "Imhotep Mail",
    description:
      "A tiny Python library for sending configured emails with minimal setup — write three lines, send the email.",
    category: "Python Library",
    githubUrl: "https://github.com/Imhotep-Tech/imhotep_mail",
    pypiUrl: "https://pypi.org/project/imhotep-mail/",
  },
]

export const portfolioData = {
  personalInfo: {
    name: "Karim Bassem Joseph",
    firstName: "Karim",
    shortName: "KB",
    role: "Software Developer",
    title: "Software Developer • Founder of Imhotep Tech",
    tagline: "I build software that businesses actually use.",
    bio: "Full-stack developer focused on turning ideas into fast, reliable products. I write clean Python backends (Django / Flask) and modern React frontends that are accessible, performant, and a pleasure to use. I use AI as a force multiplier — not a shortcut — to compress weeks of engineering into days while keeping every line reviewed, secure, and maintainable. Computer Science student at Nile University and founder of Imhotep Tech, where I ship custom software, APIs, and libraries that solve real business problems.",
    location: "Cairo, Egypt",
    timezone: "Africa/Cairo",
    email: "karimbassemj@gmail.com",
    resumeUrl: undefined as string | undefined,
    availableForWork: true,
  },
  /** Short, value-first lines a hiring manager can scan in 5 seconds. */
  valueProps: [
    "Ships full-stack products end-to-end — backend, frontend, and deploy.",
    "Turns ambiguous business problems into clean, maintainable software.",
    "AI-accelerated, not vibe-coded — weeks of work in days, fully reviewed.",
    "Comfortable with Python, Django, React, PostgreSQL, and Docker.",
  ],
  /** Used by the animated hero word rotator. */
  roles: [
    "Software Developer",
    "Full-Stack Engineer",
    "Python Developer",
    "Founder of Imhotep Tech",
    "Computer Science Student",
  ],
  /** Displayed as animated counters in the metrics band. */
  metrics: [
    {
      label: "Shipped projects",
      /** Auto-counts from the projects list — always in sync with the data. */
      value: projects.length,
      suffix: "+",
    },
    {
      label: "Open-source packages",
      /** Auto-counts from the packages list below — always in sync. */
      value: packages.length,
      suffix: "",
    },
    {
      label: "Years coding",
      /** Auto-updates every year: counts from 2023 (first line of code). */
      value: Math.max(1, new Date().getFullYear() - 2023),
      suffix: "+",
    },
  ],
  imhotepTech: {
    name: "Imhotep Tech",
    url: "https://imhoteptech.vercel.app/",
    tagline: "A software studio building products and tools used every day.",
    description:
      "Imhotep Tech is the software studio I founded to design, build, and ship custom web applications, APIs, and open-source libraries. From loyalty platforms and clinic management to AI-powered productivity tools, Imhotep Tech turns ideas into real products that businesses and people actually use.",
    highlights: [
      "Full-stack web & PWA development",
      "Custom APIs, integrations & automation",
      "Open-source Python libraries",
      "Design, build, deploy — end-to-end",
    ],
  },
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/karimbassem" },
    { name: "GitHub", url: "https://github.com/kbassem10" },
    { name: "Twitter", url: "https://x.com/kbassem10" },
  ],
  /** Grouped by capability — makes the skill set legible to non-developers. */
  skillGroups: [
    {
      id: "frontend",
      title: "Frontend",
      blurb: "What the user sees and touches.",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML / CSS",
        "PWA",
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      blurb: "How the app thinks and remembers.",
      items: [
        "Python",
        "Django",
        "Django REST Framework",
        "Flask",
        "REST APIs",
        "JWT Auth",
      ],
    },
    {
      id: "data",
      title: "Data & Infra",
      blurb: "Where data lives and how it ships.",
      items: ["PostgreSQL", "SQLite3", "Docker", "Vercel", "Git / GitHub"],
    },
    {
      id: "fundamentals",
      title: "Fundamentals",
      blurb: "The engineering bedrock.",
      items: ["Data Structures", "Algorithms", "C / C++", "Testing", "Playwright"],
    },
  ],
  projects,
  packages,
  education: {
    school: "Nile University",
    program: "B.Sc. Computer Science",
    location: "Cairo, Egypt",
  },
}

export type PortfolioData = typeof portfolioData
