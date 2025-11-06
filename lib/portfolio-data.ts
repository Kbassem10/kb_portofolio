export const portfolioData = {
  personalInfo: {
    name: "Karim Bassem Joseph",
    title: "Software Developer • Founder of Imhotep Tech",
    bio: "Full‑stack developer focused on turning ideas into fast, reliable products. I build clean Python backends (Django/Flask) and modern React frontends that are accessible, performant, and a joy to use. Computer Science student at Nile University and founder of Imhotep Tech, where I ship custom software, APIs, and libraries that solve real business problems.",
    location: "Cairo, Egypt",
    email: "k.bassem2397@nu.edu.eg",
  },
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/karimbassem" },
    { name: "GitHub", url: "https://github.com/kbassem10" },
    { name: "Twitter", url: "https://x.com/kbassem10" },
  ],
  skills: {
    core: ["Python", "Flask", "Django", "React", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    additional: ["PostgreSQL", "SQLite3", "Docker", "Git/GitHub", "C/C++", "Data Structures", "Algorithms"],
  },
  projects: [
    {
      title: "Imhotep Financial Manager v7",
      description:
        "A full-stack finance manager built with Django and React, featuring smart category suggestions, advanced analytics, interactive dashboards, and automated transactions.",
      technologies: ["Django", "React", "Tailwind CSS", "PostgreSQL", "Docker"],
      liveUrl: "https://imhotep-finance.vercel.app/",
      githubUrl: "https://github.com/Imhotep-Tech/imhotep_finance",
    },
    {
      title: "Pharaohfolio - Simple Portfolio Hosting",
      description:
        "The easiest way to host AI-generated portfolios. Users paste their code from ChatGPT, Claude, etc., and get a live link instantly in a secure environment.",
      technologies: ["Django", "React", "Tailwind CSS", "PostgreSQL", "Docker", "Monaco Editor"],
      liveUrl: "https://pharaohfolio.vercel.app/",
      githubUrl: "https://github.com/Imhotep-Tech/Pharaohfolio",
    },
    {
      title: "ImhotepChef - AI Culinary Companion",
      description:
        "Transforms everyday ingredients into extraordinary meals using the Google Gemini AI. It generates personalized recipes to reduce food waste and inspire new dishes.",
      technologies: ["Django", "React", "Google Gemini AI", "PostgreSQL", "Docker"],
      liveUrl: "https://imhotep-chef.vercel.app/",
      githubUrl: "https://github.com/Imhotep-Tech/ImhotepChef",
    },
    {
      title: "Tic Tac Toe AI Game",
      description:
        "An unbeatable Tic Tac Toe game featuring an advanced AI opponent powered by the minimax algorithm. Built with a Flask backend and an interactive JavaScript frontend.",
      technologies: ["Flask", "JavaScript", "Minimax AI", "Game Theory"],
      liveUrl: "https://xo-taupe-two.vercel.app/",
      githubUrl: "https://github.com/Kbassem10/XO",
    },
    {
      title: "Imhotep Smart Clinic",
      description:
        "A comprehensive medical practice management system with digital records, appointment scheduling, and prescription generation. Works as an installable Progressive Web App (PWA).",
      technologies: ["Django", "Tailwind CSS", "PostgreSQL", "PWA"],
      liveUrl: "https://imhotepsmartclinic.pythonanywhere.com/",
      githubUrl: "https://github.com/Imhotep-Tech/imhotep_smart_clinic",
    },
    {
      title: "Imhotep Currency Converter",
      description:
        "A powerful React-based currency conversion tool with real-time exchange rates, powered by a custom-built API with daily rate updates.",
      technologies: ["React", "Custom API", "Real-time Rates"],
      liveUrl: "https://imhotepcc.vercel.app/",
      githubUrl: "https://github.com/Imhotep-Tech/ImhotepCurrency",
    },
    {
      title: "Imhotep Tasks",
      description:
        "Cross‑platform Todo app built with Django, deployable as PWA and desktop (Electron) with a clean, responsive UI.",
      technologies: ["Django", "PWA", "Electron"],
      liveUrl: "https://imhotep-tasks.vercel.app/",
      githubUrl: "https://github.com/Imhotep-Tech/imhotep_tasks",
    },
    {
      title: "Imhotep Skills",
      description:
        "Plan and track learning with AI‑powered insights, personalized skill plans, and progress tracking.",
      technologies: ["Flask", "AI", "Learning"],
      liveUrl: "https://imhotepskills.pythonanywhere.com/",
      githubUrl: undefined,
    },
    {
      title: "Imhotep Clinic",
      description:
        "Custom Flask web app for clinics: manage patients, appointments, pricing, and role‑based access securely.",
      technologies: ["Flask", "RBAC", "Healthcare"],
      liveUrl: "https://www.fiverr.com/kbassem/a-webapp-for-a-small-clinic",
      githubUrl: undefined,
    },
    {
      title: "The First Program",
      description:
        "Early Flask clinic app to manage patient data and doctor operations — the project that started it all.",
      technologies: ["Flask", "Clinic"],
      liveUrl: "https://kbassem.pythonanywhere.com/login",
      githubUrl: undefined,
    },
  ],
  packages: [
    {
      title: "Imhotep Exchange Rates API",
      description: "A free-to-use currency conversion REST API with unlimited requests and daily updates.",
      category: "REST API",
      githubUrl: "https://github.com/Imhotep-Tech/imhotep_currency_rates_api",
      liveUrl: "https://imhotepexchangeratesapi.pythonanywhere.com/",
    },
    {
      title: "Imhotep Files Flask",
      description: "A Python library to simplify file upload and deletion operations in Flask applications.",
      category: "Python Library",
      githubUrl: "https://github.com/Imhotep-Tech/imhotep_files_flask",
      pypiUrl: "https://pypi.org/project/imhotep-files-flask/",
    },
    {
      title: "Imhotep Mail",
      description: "A simple Python library for configuring and sending emails with minimal setup.",
      category: "Python Library",
      githubUrl: "https://github.com/Imhotep-Tech/imhotep_mail",
      pypiUrl: "https://pypi.org/project/imhotep-mail/",
    },
  ],
}
