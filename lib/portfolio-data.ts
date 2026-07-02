export const profile = {
  name: "Tejashwini R P",
  role: "Full-Stack Software Engineer",
  location: "Coimbatore, India",
  email: "tejashwiniprashannaa@gmail.com",
  github: "https://github.com/tejashwiniprashannaa",
  linkedin: "https://www.linkedin.com/in/tejashwiniiirp/",
  summary:
    "B.Tech CSBS (2024-2028) student at Sri Krishna College of Engineering and Technology (CGPA: 8.5/10). Practical full-stack experience engineering scalable web apps using Java, Spring Boot, React, and PostgreSQL. Focused on clear system architecture, secure authentication workflows, and solving complex DSA problem sets.",
}

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "JavaScript", "SQL"] },
  {
    label: "Backend Frameworks",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "BCrypt", "REST APIs"],
  },
  {
    label: "Frontend UI",
    items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Axios", "Recharts"],
  },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    label: "Tools & Pipelines",
    items: ["Git", "GitHub", "Postman", "Maven", "VS Code", "IntelliJ IDEA"],
  },
  {
    label: "Core Theory",
    items: [
      "Data Structures & Algorithms (Java)",
      "OOP",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
    ],
  },
]

export const experiences: {
  title: string
  company: string
  period: string
  points: string[]
}[] = [
  {
    title: "Web Development Intern",
    company: "Prodigy Info Tech",
    period: "Jan 2026 - Present",
    points: [
      "Built and maintained modular frontend modules utilizing React.js and vanilla JavaScript.",
      "Integrated third-party REST APIs and executed cross-browser debugging via DevTools.",
    ],
  },
  {
    title: "Software Engineering Virtual Experience",
    company: "JPMorgan Chase & Co.",
    period: "Jan 2026",
    points: [
      "Integrated REST endpoints using Spring Boot and MySQL for transaction workflows.",
      "Practiced automated building via Maven pipelines and executed localized unit tests.",
    ],
  },
  {
    title: "Advanced Software Engineering Simulation",
    company: "Walmart Global Tech",
    period: "Jan 2026",
    points: [
      "Participated in architectural scaling scenarios, Git branching models, and clean deployment paradigms.",
    ],
  },
]

export const projects: {
  title: string
  period: string
  stack: string[]
  repo: string
  features: string
}[] = [
  {
    title: "Turf Booking Management System",
    period: "2025-2026",
    stack: ["Spring Boot", "React", "PostgreSQL", "JWT", "Recharts"],
    repo: "https://github.com/tejashwiniprashannaa/Sports-Turf-Management-System",
    features:
      "Engineered a decoupled full-stack architecture with rigid role-based access control (Admin vs. User isolation). Implemented secure authentication layers via JWT and BCrypt password encryption. Crafted a custom slot-conflict database validation engine in Java to maintain strict transactional consistency. Integrated a clean analytics frontend panel utilizing React and Recharts tracking live data flows.",
  },
  {
  title: "Real-Time Kanban Management System",
  period: "2026",
  stack: [
    "Java (Spring Boot)",
    "React",
    "MySQL",
    "Hibernate/JPA",
    "WebSockets (STOMP)",
  ],
  repo: "Backend: https://github.com/tejashwiniprashannaa/trello-backend | Frontend: https://github.com/tejashwiniprashannaa/trello-frontend",
  features:
    "Architected a full-stack Kanban task management application using a decoupled Controller-Service-Repository architecture for modularity and scalability. Engineered RESTful APIs to manage boards, columns, and tasks with persistent storage using Hibernate/JPA and MySQL. Implemented real-time synchronization using WebSockets (STOMP), enabling instant board updates across multiple connected clients without page refreshes. Designed a responsive drag-and-drop Kanban interface supporting To Do, In Progress, and Done workflows to improve project tracking and collaboration.",
},
]

export const education = {
  school: "Sri Krishna College of Engineering and Technology, Coimbatore",
  degree: "B.Tech CSBS (2024-2028)",
  cgpa: "CGPA: 8.5/10",
}

export const awards: string[] = [
  "3rd Prize Winner - Software Simulation, Kurukshetra National Hackathon 2025",
  "Certified in Web Development with AI - Internshala",
  "Certified in Software Engineering & SQL - Infosys Springboard",
]

export const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
]
