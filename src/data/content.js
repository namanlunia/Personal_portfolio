export const content = {
  site: {
    name: "Naman Lunia",
    monogram: "NL",
    role: "CSE (AI & ML) student · aspiring game developer",
    college: "Newton School of Technology",
    year: "1st year",
    metaTitle: "Naman Lunia | Aspiring Game Developer",
    metaDescription: "Naman Lunia — CSE (AI & ML) student at Newton School of Technology and aspiring game developer. Building projects with AI coding tools and exploring game development."
  },

  navigation: {
    skipToContent: "Skip to content",
    mainNavAriaLabel: "Main navigation",
    mobileNavAriaLabel: "Mobile navigation",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    items: [
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "learning", label: "Learning" },
      { id: "contact", label: "Contact" }
    ],
    socialLinks: {
      github: {
        label: "GitHub",
        url: "https://github.com/namanlunia",
        ariaLabel: "Naman Lunia's GitHub profile"
      },
      linkedin: {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/naman-lunia-b06959415/",
        ariaLabel: "Naman Lunia's LinkedIn profile"
      }
    }
  },

  hero: {
    sectionAriaLabel: "Introduction",
    eyebrow: "Hi, I'm",
    name: "Naman Lunia",
    role: "CSE (AI & ML) student · aspiring game developer",
    tagline: "I like building things and learning new tools. Right now I'm starting out in game development.",
    learningChip: "Currently learning: Game development",
    actions: {
      primary: {
        label: "View projects",
        targetId: "projects"
      },
      secondary: {
        label: "Contact me",
        targetId: "contact"
      }
    }
  },

  statusPanel: {
    heading: "Current status",
    rows: [
      {
        label: "Studying",
        value: "CSE with AI & ML specialisation, 1st year, Newton School of Technology"
      },
      {
        label: "Focus",
        value: "Game development (just starting out)"
      },
      {
        label: "Building",
        value: "A clothing brand e-commerce website and a hackathon website"
      },
      {
        label: "Interests",
        value: "Robotics, AI and ML"
      }
    ]
  },

  about: {
    sectionId: "about",
    sectionLabel: "01 / ABOUT",
    title: "About",
    bio: [
      "I'm Naman, a first-year CSE student with an AI & ML specialisation at Newton School of Technology.",
      "I enjoy making games. I'm just starting out, but I know what game engines are and how basic games are made, and my goal is to become the best game developer I can.",
      "I'm also interested in robotics. In the past I built a basic IoT project: an automatic plant-watering device.",
      "I like building things and learning new tools. Right now I'm building two web projects with AI coding tools and checking the results myself."
    ],
    interestsHeading: "Interests",
    interests: ["game development", "robotics", "AI and ML"],
    toolsHeading: "Tools I use",
    tools: ["Antigravity", "OpenCode", "Claude", "GitHub"]
  },

  projectsSection: {
    sectionId: "projects",
    sectionLabel: "02 / PROJECTS",
    title: "Projects",
    subtitle: "Things I'm building, and one earlier project.",
    labels: {
      problem: "The problem",
      whatIDid: "What I did",
      tools: "Tools used"
    }
  },

  projects: [
    {
      id: "clothing-brand-ecommerce",
      title: "Clothing brand e-commerce website (Ateevibes)",
      status: "In progress",
      problem: "My maternal uncle's clothing brand needed a complete online store.",
      whatIDid: "Building the whole site from scratch (storefront and a separate backend) using AI coding tools, and testing it myself.",
      tools: ["Antigravity", "OpenCode", "Claude"],
      links: [
        {
          label: "Live site",
          url: "https://clothing-rose-three.vercel.app/"
        },
        {
          label: "Frontend repo",
          url: "https://github.com/namanlunia/Ateevibes_Website"
        },
        {
          label: "Backend repo",
          url: "https://github.com/namanlunia/Ateevibes_Website_backend"
        }
      ]
    },
    {
      id: "hackathon-website-frontend",
      title: "Hackathon website frontend",
      status: "In progress",
      problem: "A hackathon being organised by my senior needed a website.",
      whatIDid: "Building the frontend of the site.",
      tools: ["Antigravity", "OpenCode", "Claude"],
      links: []
    },
    {
      id: "automatic-plant-watering-device",
      title: "Automatic plant-watering device",
      status: "Earlier project",
      problem: "Keeping a plant watered without doing it by hand.",
      whatIDid: "Built a basic IoT device that waters a plant automatically.",
      tools: [],
      links: []
    }
  ],

  learning: {
    sectionId: "learning",
    sectionLabel: "03 / LEARNING",
    title: "Learning",
    subtitle: "Courses I completed on IBM SkillsBuild.",
    currentHeading: "Currently learning",
    current: {
      title: "Game development",
      text: "Just starting out. I'm learning how game engines work and how basic games are made."
    },
    verifyLabel: "Verify",
    verifyAriaSuffix: "credential on Credly (opens in new tab)",
    certificates: [
      {
        id: "ai-fundamentals",
        title: "Artificial Intelligence Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "Jun 22, 2026",
        url: "https://www.credly.com/badges/30a0e6fb-d7f6-4284-9a2f-ffa07646f091"
      },
      {
        id: "ml-methods-tools",
        title: "Machine Learning Methods and Tools",
        issuer: "IBM SkillsBuild",
        date: "Jun 22, 2026",
        url: "https://www.credly.com/badges/267c746f-31be-4cd7-9c14-bc7ed4120467"
      },
      {
        id: "data-analytics-ml",
        title: "Data Analytics for Machine Learning",
        issuer: "IBM SkillsBuild",
        date: "Jun 23, 2026",
        url: "https://www.credly.com/badges/881a97c8-89a2-40e9-9d6a-bec91e0428ed"
      },
      {
        id: "nlp",
        title: "Natural Language Processing",
        issuer: "IBM SkillsBuild",
        date: "Jun 23, 2026",
        url: "https://www.credly.com/badges/498f5194-c40c-4bba-9957-51c3454da7b6"
      },
      {
        id: "supervised-learning",
        title: "Supervised Learning Methods",
        issuer: "IBM SkillsBuild",
        date: "Jun 24, 2026",
        url: "https://www.credly.com/badges/c428217e-c6f6-4b44-af9e-49e3806eb321"
      }
    ]
  },

  contact: {
    sectionId: "contact",
    sectionLabel: "04 / CONTACT",
    title: "Contact",
    subtitle: "You can reach me by email, GitHub or LinkedIn.",
    email: "namanlunia229@gmail.com",
    emailAddressLabel: "Email address",
    emailButton: {
      label: "Email me"
    },
    copyEmail: {
      idleLabel: "Copy email",
      copiedLabel: "Copied"
    },
    channels: [
      {
        id: "github",
        label: "GitHub",
        url: "https://github.com/namanlunia",
        ariaLabel: "Naman Lunia on GitHub (opens in new tab)"
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/naman-lunia-b06959415/",
        ariaLabel: "Naman Lunia on LinkedIn (opens in new tab)"
      }
    ]
  },

  footer: {
    name: "Naman Lunia"
  }
};
