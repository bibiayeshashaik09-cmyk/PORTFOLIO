// ============================================================================
// SAMPLE PORTFOLIO DATA
// Replace every value below with your own details. This is the ONLY file
// you need to edit for content — components read from here automatically.
// ============================================================================

export const personalInfo = {
  name: "Shaik Bibi Ayesha",
  role: "Final-Year B.Tech IT Student | JavaScript & Node.js Developer",
  tagline:
    "I build full-stack web applications with JavaScript, Node.js and Express — turning ideas into real, working products.",
  email: "bibiayeshashaik09@gmail.com",
  phone: "+91 95509 78972",
  location: "Chilakaluripet, Andhra Pradesh",
  // TODO: double-check this is your exact GitHub username at github.com/<username>
  github: "https://github.com/bibiayeshashaik09-cmyk",
  // TODO: replace with your real LinkedIn profile URL, e.g. https://linkedin.com/in/shaik-bibi-ayesha-xxxxxx
  linkedin: "https://linkedin.com/in/shaik-bibi-ayesha",
  leetcode: "https://leetcode.com/yourusername",
  resumeUrl: "/resume.pdf", // add your resume PDF to the /public folder as resume.pdf
  photo: "", // add your photo to /public (e.g. public/profile.jpg) and set this to "/profile.jpg"
};

export const aboutMe = {
  summary:
    "I am a final-year Information Technology student passionate about software engineering and full-stack web development. I enjoy transforming ideas into real-world applications using JavaScript, Node.js, Express.js, HTML, CSS, Python, and modern development tools, while continuously improving my problem-solving and teamwork skills.",
  objective:
    "To begin my career as a Software Engineer through an internship or job where I can work on real-world projects, learn industry best practices, and contribute to building innovative, user-focused software solutions.",
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Malineni Lakshmaiah Women's Engineering College",
      duration: "2023 — 2027",
      score: "CGPA: 7.23",
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Sri Chaitanya Junior College",
      duration: "2022",
      score: "60%",
    },
  ],
  strengths: [
    "Problem Solving",
    "Communication",
    "Fast Learner",
    "Time Management",
    "Debugging",
    "Leadership",
  ],
  languagesKnown: ["English", "Telugu", "Hindi"],
};

export const skills = {
  Frontend: [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 78 },
  ],
  Database: [
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 72 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 90 },
  ],
};

export const projects = [
  {
    id: "signal",
    title: "Signal — Real-Time Chat Application",
    description:
      "A full-stack real-time chat app with JWT authentication, multi-room architecture, live typing indicators, presence tracking, and delivery receipts — wrapped in a custom design system.",
    image: "",
    tech: ["Node.js", "Express", "Socket.io", "SQLite", "JWT"],
    github: "https://github.com/bibiayeshashaik09-cmyk", // TODO: link the actual repo
    demo: "#", // TODO: add live demo link if hosted
    featured: true,
  },
  {
    id: "vision-robotics",
    title: "Vision-Based Robotics System",
    description:
      "Led a team to build a prototype robot integrated with real-time object detection concepts, and assisted with robotic system implementation and testing.",
    image: "",
    tech: ["Python", "Computer Vision", "Robotics"],
    github: "https://github.com/bibiayeshashaik09-cmyk", // TODO: link the actual repo
    demo: "#", // TODO: add live demo link if hosted
    featured: true,
  },
  {
    id: "iot-construction",
    title: "IoT-Based Python Full Stack Application",
    description:
      "Developed a construction planning and building management application, contributing to application coordination and core frontend functionality.",
    image: "",
    tech: ["Python", "Full Stack", "IoT"],
    github: "https://github.com/bibiayeshashaik09-cmyk", // TODO: link the actual repo
    demo: "#", // TODO: add live demo link if hosted
    featured: false,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "This portfolio itself — a responsive, animated, dark-mode developer site built with React, Tailwind CSS and Framer Motion, focused on recruiter-friendly clarity.",
    image: "",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/bibiayeshashaik09-cmyk", // TODO: link the actual repo
    demo: "#",
    featured: false,
  },
];

export const experience = [
  {
    type: "Internship",
    title: "Cloud Virtual Internship — EduSkills Portal",
    organization: "EduSkills",
    duration: "2024 — 2025",
    points: [
      "Gained exposure to cloud computing concepts and cloud service fundamentals.",
      "Learned the basics of deployment and virtual infrastructure environments.",
    ],
  },
  {
    type: "Internship",
    title: "Intern Incubation Team — RTIH x INCUX.AI",
    organization: "Ratan Tata Innovation Hub (RTIH) with INCUX.AI",
    duration: "Offline program, Anantapur",
    points: [
      "Participated in project-based learning and practical technical assessments.",
      "Completed an offline internship program focused on JavaScript and Node.js, conducted by INCUX.AI.",
    ],
  },
  {
    type: "Workshop",
    title: "Workshop on AI Chatbots",
    organization: "12-hour Workshop",
    duration: "March 2026",
    points: ["Hands-on 12-hour workshop covering the fundamentals of building AI chatbots."],
  },
  {
    type: "Hackathon",
    title: "36-Hour Python Full Stack Development Hackathon",
    organization: "Hackathon — Winner",
    duration: "October 2025",
    points: ["Won a 36-hour full stack development hackathon built entirely in Python."],
  },
  {
    type: "Hackathon",
    title: "36-Hour Robotics with AI Development Hackathon",
    organization: "Hackathon — Participant",
    duration: "October 2024",
    points: ["Built a robotics prototype integrating AI concepts over 36 hours."],
  },
  {
    type: "Hackathon",
    title: "36-Hour ROBO Mela Hackathon",
    organization: "Hackathon — Participant",
    duration: "September 2025",
    points: ["Worked across both robotics and full-stack development tracks."],
  },
];

export const certifications = [
  {
    title: "Cloud Virtual Internship Certificate",
    issuer: "EduSkills",
    date: "2024–2025",
    badge: "",
    link: "#",
  },
  {
    title: "Intern Incubation Program Certificate",
    issuer: "RTIH x INCUX.AI",
    date: "2025",
    badge: "",
    link: "#",
  },
  {
    title: "AI Chatbots Workshop Certificate",
    issuer: "12-Hour Workshop",
    date: "Mar 2026",
    badge: "",
    link: "#",
  },
  {
    title: "Hackathon Certificates (x3)",
    issuer: "Python Full Stack / Robotics with AI / ROBO Mela",
    date: "2024–2025",
    badge: "",
    link: "#",
  },
  {
    title: "NNC Certificate — A+ Grade",
    issuer: "NNC", // TODO: spell out what NNC stands for
    date: "", // TODO: add the year
    badge: "",
    link: "#",
  },
  {
    title: "Camp Certificate", // TODO: you mentioned "two camps" — send names so I can list both properly
    issuer: "",
    date: "",
    badge: "",
    link: "#",
  },
];

export const achievements = [
  {
    category: "Hackathons",
    items: [
      "Winner — 36-Hour Python Full Stack Development Hackathon (coding track)",
    ],
  },
  {
    category: "College Events",
    items: [
      "SAMSKRUTHI-2026 — a Two-Day National Level Techno-Cultural & Sports Fest",
    ],
  },
  {
    category: "Leadership",
    items: [
      "Volunteer — AI Police Hackathon by INCUX.AI in Anantapur",
      "Team Lead — Vision-Based Robotics System project",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
