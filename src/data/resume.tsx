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
  description:
    "Senior Backend & Full-Stack Engineer specializing in Node.js, TypeScript, and distributed microservices architectures.",
  summary:
    "Senior Software Engineer with extensive experience building high-throughput APIs, fault-tolerant transaction systems, and modern web architectures. Proven track record in asynchronous, remote-first environments delivering scalable digital products and secure cloud backends.",
  avatarUrl: "https://avatars.githubusercontent.com/u/217343438?v=4",
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
        url: "https://www.youtube.com/@ZenvoraMusic",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

work: [
      {
        company: "Autonomous Engineering Consultant",
        href: "https://www.linkedin.com/in/abulara98",
        badges: ["Remote"],
        location: "Remote",
        title: "Lead System Architect & Senior Full-Stack Engineer",
        logoUrl: "https://cdn.dribbble.com/userupload/48927884/file/956217fe549ff85297f40bfcb9d82424.jpg?format=webp&resize=400x300&vertical=center",
        start: "2023",
        end: "Present",
        description:
          "Lead technical architecture and system design for distributed SaaS platforms, AI orchestrations, and immersive educational environments. Architect scalable backend microservices, real-time WebSocket pipelines, and automated multi-agent AI systems utilizing Node.js, TypeScript, PostgreSQL, and Redis.",
      },
      {
        company: "NextGen Software Solutions",
        href: "https://www.linkedin.com/in/abulara98",
        badges: ["Remote"],
        location: "Remote",
        title: "Senior Backend & Cloud Systems Engineer",
        logoUrl: "https://www.nextgensoftware.com/wp-content/themes/wpcode-v2/images/NextGen-Software.svg",
        start: "2021",
        end: "2023",
        description:
          "Designed resilient, high-throughput REST and GraphQL APIs with strict concurrency handling. Optimized SQL query performance, reduced database indexing overhead by 40%, and secured high-traffic payment and transaction flows using Docker containerization and CI/CD pipelines.",
      },
      {
        company: "Tech Development Hub",
        href: "https://www.linkedin.com/in/abulara98",
        badges: ["Remote"],
        location: "Remote",
        title: "Full-Stack Software Engineer",
        logoUrl: "/Tech.svg",
        start: "2019",
        end: "2021",
        description:
          "Developed end-to-end full-stack web applications with React, Next.js, and Node.js. Built robust role-based access control (RBAC), third-party API integrations, and event-driven logging solutions with 99.9% uptime compliance.",
      },
    ],
  education: [
    {
      school: "University of Karbala",
      href: "https://uokerbala.edu.iq",
      degree: "Bachelor's Degree in College Of Science / Department Of Chemistry ",
      logoUrl: "https://uokerbala.edu.iq/customcode/footer/images/logo.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "University of Kufa",
      href: "https://uokufa.edu.iq",
      degree: "Master's Degree of Organic Chemistry (M.Sc.)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBH-vB2me0VD_2wOwUTdE8KjXFnx6v_z8Fo4OOsYo5rg&s=10",
      start: "2026",
      end: "2028",
    },
    {
      school: "microsoft",
      href: "https://learn.microsoft.com",
      degree: "Foundational C# Certification",
      logoUrl: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png",
      start: "2022",
      end: "2022",
    },
    {
      school: "Cloud & Distributed Systems",
      href: "https://www.coursera.org",
      degree: "Microservices Architecture & Distributed Systems Specialization",
      logoUrl: "/waterloo.png",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
      {
        title: "Pixora AI",
        href: "https://pixora-artistry.lovable.app",
        dates: "2026 - Present",
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
            href: "https://pixora-artistry.lovable.app",
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
          "https://pub-83c5db439b40468498f97946200806f7.r2.dev/llm.report.mp4",
      },
    ],
Security & Audits: [
    {
      title: "HackerOne Bug Bounty Program",
      dates: "2016 - 2020",
      location: "Global / Remote",
      description:
        "Actively participated as an independent security researcher uncovering critical backend vulnerabilities, business logic flaws, and API authorization bypasses across enterprise-grade scopes.",
      image: "/waterloo.png",
      mlh: "",
      links: [
        {
          title: "Platform",
          icon: null,
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
      image: "/waterloo.png",
      mlh: "",
      links: [
        {
          title: "Research",
          icon: null,
          href: "https://github.com/abulara7",
        },
      ],
    },
    {
      title: "CTF & Exploit Research Challenges",
      dates: "2021 - 2022",
      location: "Online",
      description:
        "Solved advanced Capture The Flag (CTF) challenges specializing in web application exploitation, reverse engineering, and privilege escalation vectors.",
      image: "/waterloo.png",
      mlh: "",
      links: [
        {
          title: "Profile",
          icon: null,
          href: "https://github.com/abulara7",
        },
      ],
    },
    {
      title: "Responsible Disclosure & Vulnerability Reports",
      dates: "2023 - Present",
      location: "Remote",
      description:
        "Authored high-severity reports detailing Insecure Direct Object References (IDOR), Race Conditions, and Server-Side Request Forgery (SSRF) vulnerabilities under responsible disclosure guidelines.",
      image: "/waterloo.png",
      mlh: "",
      links: [
        {
          title: "Advisories",
          icon: null,
          href: "https://github.com/abulara7",
        },
      ],
    },
    {
      title: "Zero-Trust Architecture & Threat Modeling",
      dates: "2023",
      location: "Independent Research",
      description:
        "Designed defense-in-depth threat mitigation models for multi-tenant backend ecosystems, implementing cryptographic verification, strict mTLS, and defense against data poisoning in AI pipelines.",
      image: "/waterloo.png",
      mlh: "",
      links: [
        {
          title: "Documentation",
          icon: null,
          href: "https://github.com/abulara7",
        },
      ],
    },
    {
      title: "Smart Contract & Web3 Security Review",
      dates: "2022",
      location: "Online Research",
      description:
        "Analyzed decentralized protocols and Solidity contracts for reentrancy bugs, integer overflows, and front-running risks, publishing internal test suites and mitigation guidelines.",
      image: "/waterloo.png",
      mlh: "",
      links: [
        {
          title: "Research",
          icon: null,
          href: "https://github.com/abulara7",
        },
      ],
    },
  ],
} as const;
