export const portfolioData = {
  personalInfo: {
    name: "Karim Bassem Joseph",
    title: "Software Developer & Founder of Imhotep Tech",
    bio: "Software developer specializing in Python web frameworks and full-stack development. A Computer Science student at Nile University with expertise in creating efficient, scalable applications for businesses of all sizes. Founder of Imhotep Tech, focused on delivering accessible technology solutions through custom software, APIs, and libraries that solve real business challenges.",
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
