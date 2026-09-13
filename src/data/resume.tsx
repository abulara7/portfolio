import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Haider Alanisi",
  initials: "HA",
  url: "https://portfolio-ten-mauve-xbap89iflq.vercel.app",
  location: "Karbala, Iraq",
  locationLink: "https://www.google.com/maps/place/Karbala",
  avatarUrl: "https://avatars.githubusercontent.com/u/217343438?v=4",
  description:
    "Senior Backend & Full-Stack Engineer specializing in Node.js, TypeScript, and distributed microservices architectures.",
  summary:
    "Senior Software Engineer with extensive experience building high-throughput APIs, fault-tolerant transaction systems, and modern web architectures. Proven track record in asynchronous, remote-first environments. Also a multidisciplinary creative and intellectual professional with expertise in game development, motion graphics, cinematography, academic research, and classical Arabic literature.",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "haideralasady123@gmail.com",
    tel: "+9647828796140",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abulara7",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abulara98",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/7h3io",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@an.d9?si=DpZ3si7GBRgriAnD",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:haideralasady123@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // ===== DIMENSION 1: ENGINEERING =====
  work: [
    {
      company: "Autonomous Engineering Consultant",
      href: "https://www.linkedin.com/in/abulara98",
      badges: ["Remote"],
      location: "Remote",
      title: "Lead System Architect & Senior Full-Stack Engineer",
      logoUrl: "/work.svg",
      start: "2023",
      end: "Present",
      description:
        "Lead technical architecture and system design for distributed SaaS platforms, AI orchestrations, and immersive educational environments. Architect scalable backend microservices, real-time collaboration systems, and high-concurrency distributed systems.",
    },
    {
      company: "Freelance / Independent Consultant",
      href: "https://www.linkedin.com/in/abulara98",
      badges: ["Remote"],
      location: "Remote",
      title: "Senior Backend & Full-Stack Engineer",
      logoUrl: "/work.svg",
      start: "2021",
      end: "Present",
      description:
        "Architected high-throughput backend services and modern web applications using Node.js, TypeScript, and Next.js. Delivered resilient distributed systems and API architectures for multiple enterprise clients.",
    },
    {
      company: "NextGen Software Solutions",
      href: "https://www.linkedin.com/in/abulara98",
      badges: ["Remote"],
      location: "Remote",
      title: "Senior Backend & Cloud Systems Engineer",
      logoUrl: "/work.svg",
      start: "2021",
      end: "2023",
      description:
        "Designed resilient, high-throughput REST and GraphQL APIs with strict concurrency handling. Optimized SQL query performance, reduced database indexing overhead by 40%, and secured high-traffic systems.",
    },
    {
      company: "Tech Development Hub",
      href: "https://www.linkedin.com/in/abulara98",
      badges: ["Remote"],
      location: "Remote",
      title: "Full-Stack Software Engineer",
      logoUrl: "/work.svg",
      start: "2019",
      end: "2021",
      description:
        "Developed end-to-end full-stack web applications with React, Next.js, and Node.js. Built robust role-based access control (RBAC), third-party API integrations, and event-driven logging solutions.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal Ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous distribution.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener.",
    },
  ],

  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],

  projects: [
    {
      title: "Pixora AI",
      href: "https://pixora.ai",
      dates: "2024 - Present",
      active: true,
      description:
        "An advanced, all-in-one AI workspace integrating 40+ generative AI tools, dynamic workflows, and automated pipeline utilities in a unified high-speed dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "OpenAI API",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://pixora.ai",
          icon: null,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Orbit System",
      href: "https://github.com/abulara7",
      dates: "2024 - In Development",
      active: true,
      description:
        "High-performance research platform featuring 3D dynamic virtual laboratories across scientific domains, a Clinical Center simulation, and 12 autonomous AI agents.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Three.js / WebGL",
        "Microservices",
        "Redis",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abulara7",
          icon: null,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "MuthTech Edu",
      href: "https://github.com/abulara7",
      dates: "2024 - In Development",
      active: true,
      description:
        "Enterprise multi-tenant digital educational network designed for distributed institutional tooling, real-time collaboration, and high-concurrency learning modules.",
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "WebRTC",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abulara7",
          icon: null,
        },
      ],
      image: "",
      video:
        "https://youtu.be/u8e-Z3tHWOQ?si=4F4h1fzPLCKNVT1h",
    },
  ],

  securityAndResearch: [
    {
      title: "HackerOne Bug Bounty Program",
      dates: "2016 - 2020",
      location: "Global / Remote",
      description:
        "Actively participated as an independent security researcher uncovering critical backend vulnerabilities, business logic flaws, and API authorization bypasses across enterprise-grade scopes.",
      links: [
        {
          title: "Platform",
          icon: Icons.globe,
          href: "https://www.hackerone.com",
        },
      ],
    },
    {
      title: "API & Cloud Security Audits",
      dates: "2020 - 2025",
      location: "Remote",
      description:
        "Performed deep vulnerability assessments and penetration testing on distributed microservices, focusing on OWASP Top 10, JWT implementation defects, and rate-limiting enforcement.",
      links: [],
    },
    {
      title: "CTF & Exploit Research Challenges",
      dates: "2021 - 2022",
      location: "Online",
      description:
        "Solved advanced Capture The Flag (CTF) challenges specializing in web application exploitation, reverse engineering, and privilege escalation vectors.",
      links: [],
    },
    {
      title: "Responsible Disclosure & Vulnerability Reports",
      dates: "2023 - Present",
      location: "Remote",
      description:
        "Authored high-severity reports detailing Insecure Direct Object References (IDOR), Race Conditions, and Server-Side Request Forgery (SSRF) vulnerabilities under responsible disclosure guidelines.",
      links: [],
    },
    {
      title: "Zero-Trust Architecture & Threat Modeling",
      dates: "2023",
      location: "Independent Research",
      description:
        "Designed defense-in-depth threat mitigation models for multi-tenant backend ecosystems, implementing cryptographic verification, strict mTLS, and defense against data poisoning.",
      links: [],
    },
    {
      title: "Smart Contract & Web3 Security Review",
      dates: "2022",
      location: "Online Research",
      description:
        "Analyzed decentralized protocols and Solidity contracts for reentrancy bugs, integer overflows, and front-running risks, publishing internal test suites and mitigation guidelines.",
      links: [],
    },
  ],

  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communicates a victim's medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: Icons.github,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: Icons.globe,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: Icons.github,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: Icons.github,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: Icons.github,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: Icons.github,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: Icons.github,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: Icons.github,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: Icons.globe,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girl's page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: Icons.globe,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description: "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup Genecis to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: Icons.globe,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: Icons.globe,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: Icons.youtube,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: Icons.globe,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: Icons.youtube,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. Built completely using THREE.js with a Node backend.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Recipic, a mobile app which allows you to take pictures of ingredients around your house and recognizes those ingredients using ClarifAI image recognition.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: Icons.github,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: Icons.github,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: Icons.github,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: Icons.github,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: Icons.github,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],

  // ===== DIMENSION 2: CREATIVE =====
  creative: {
    gameDevelopment: {
      title: "Game Development & 3D",
      period: "2015 - Present",
      description:
        "Professional game development and interactive 3D systems experience across industry-standard engines.",
      engines: [
        {
          name: "Unity",
          description:
            "Gameplay systems, physics simulation, spatial logic, interactive environments, real-time rendering, technical prototyping.",
        },
        {
          name: "Unreal Engine 5",
          description:
            "High-fidelity interactive experiences, advanced 3D systems, spatial computing, cinematic real-time capabilities.",
        },
      ],
      capabilities: [
        "Gameplay Systems Architecture",
        "Physics & Simulation",
        "Spatial Logic & 3D Composition",
        "Interactive Environments",
        "Real-time Rendering Concepts",
        "Technical Prototyping",
      ],
    },
    graphicDesign: {
      title: "Graphic Design",
      period: "2015 - Present",
      description:
        "Professional visual design experience across brand identity, digital media, and creative art direction.",
      capabilities: [
        "Brand & Identity Design",
        "Digital Visual Design",
        "Composition & Layout",
        "Advanced Typography",
        "Visual Systems",
        "Advertising & Commercial Design",
        "Creative Art Direction",
        "Advanced Image Manipulation",
        "Editorial & Publication Design",
      ],
    },
    motionGraphics: {
      title: "Motion Graphics & Post Production",
      period: "2017 - Present",
      projectCount: 500,
      description:
        "Professional motion graphics and post-production with 500+ completed creative projects.",
      software: [
        {
          name: "DaVinci Resolve",
          specialization: "Color grading, compositing, finishing",
        },
        {
          name: "Adobe After Effects",
          specialization: "Motion graphics, visual effects, animation",
        },
        {
          name: "Adobe Premiere Pro",
          specialization: "Editing, timeline composition, post-production",
        },
      ],
      capabilities: [
        "Motion Graphics",
        "Visual Effects (VFX)",
        "Editing & Timeline",
        "Compositing",
        "Color Grading",
        "Cinematic Finishing",
        "Commercial Production",
      ],
    },
    cinematography: {
      title: "Cinematography & Photography",
      period: "2015 - Present",
      description:
        "Professional cinematography and photography with expertise in visual composition, lighting, and visual storytelling.",
      capabilities: [
        "Cinematography",
        "Photography",
        "Visual Composition",
        "Lighting Design",
        "Camera Work",
        "Visual Storytelling",
        "Commercial & Creative Production",
      ],
    },
    colorGrading: {
      title: "Cinematic Color Grading",
      period: "2023 - Present",
      software: "DaVinci Resolve",
      description:
        "Specialized cinematic color grading for film and video production with professional finishing expertise.",
      capabilities: [
        "Color Correction",
        "Creative Grading",
        "Cinematic Aesthetics",
        "HDR Workflows",
        "Finishing & Delivery",
      ],
    },
  },

  // ===== DIMENSION 3: INTELLECTUAL =====
  intellectual: {
    research: {
      title: "Scientific & Academic Research",
      period: "2015 - Present",
      description:
        "Comprehensive research support across B.Sc., M.Sc., and Ph.D.-level academic work.",
      expertise: [
        "Scientific Research Support",
        "Academic Research Consulting",
        "Bachelor's-level (B.Sc.) Research",
        "Master's-level (M.Sc.) Research",
        "Doctoral-level (Ph.D.) Research",
        "Scientific Report Writing",
        "Academic Seminars & Presentations",
        "Research Organization & Documentation",
        "Professional Academic Formatting",
      ],
      note: "Academic research consulting and support — not holding a Ph.D., but working extensively with Ph.D.-level research.",
    },
    productivity: {
      title: "Academic & Professional Workflows",
      description: "Expertise in productivity tools and academic document preparation.",
      tools: [
        "Microsoft Word",
        "Microsoft PowerPoint",
        "Microsoft Excel",
        "Professional Documentation",
        "Report Writing",
        "Presentation Design",
      ],
    },
    publicIntellectual: {
      title: "Scientific & Intellectual Writing",
      platforms: [
        {
          name: "Quora",
          url: "https://ar.quora.com/profile/Dr-Haider-Y",
          description:
            "Science, philosophy, religion, and complex interdisciplinary questions.",
          language: "Arabic & English",
        },
        {
          name: "YouTube",
          url: "https://youtube.com/@an.d9?si=DpZ3si7GBRgriAnD",
          description:
            "Scientific, Quranic, and philosophical content exploring interdisciplinary topics.",
          language: "Arabic & English",
        },
      ],
    },
  },

  // ===== DIMENSION 4: LITERATURE =====
  literature: {
    novels: [
      {
        titleArabic: "صدى العدم",
        titleEnglish: "Echoes of the Void",
        period: "2024 - Present",
        status: "In Progress",
        structure: {
          volumes: 2,
          partsPerVolume: 4,
          sectionsPerPart: 6,
        },
        description: "A long-form literary novel exploring existential themes.",
      },
      {
        titleArabic: "ما تبقى من الليل",
        titleEnglish: "Remnants of the Night",
        period: "2026 - Present",
        status: "In Progress",
        description: "An ongoing literary project.",
      },
    ],
    epicPoem: {
      titleArabic: "القصيدة الملحمية الكبرى",
      titleEnglish: "The Grand Epic Poem",
      verses: 1300,
      versesArabic: "ألف وثلاثمائة بيت",
      focus: "Centered on Ahl al-Bayt (The People of the Household)",
      description:
        "A major literary achievement representing the classical Arabic epic poetry tradition.",
      status: "Completed",
    },
    poetry: [
      {
        titleArabic: "نبأ الصمت",
        titleEnglish: "News of Silence",
        type: "Poetry Collection / Diwan",
      },
    ],
    poetryCollections: {
      muallaqat: "10+ Mu'allaqat (classical Arabic hanging poems)",
      additional: "Additional poetry collections and ongoing literary works",
    },
    social: [
      {
        platform: "Instagram",
        handle: "@7h3io",
        url: "https://instagram.com/7h3io",
      },
      {
        platform: "TikTok",
        handle: "@7h3io",
        url: "https://tiktok.com/@7h3io",
      },
    ],
  },
} as const;
