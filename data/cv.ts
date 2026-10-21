/**
 * All portfolio content lives here, mirroring cv.md.
 * To update the site, edit this file only — the page reads everything from it.
 */

export const profile = {
  name: "Rohit Pradeep Sudarsanan",
  title: "Full Stack & Flutter Developer",
  location: "Kerala, India",
  email: "rohit.psudarsanan@gmail.com",
  // Phone intentionally left off the public site; add it back here if you want it shown.
  // TODO: replace with your real profile URLs.
  linkedin: "https://www.linkedin.com/in/rohit-pradeep-sudarsanan/",
  github: "https://github.com/red-malone",
  summary:
    "Programmer Analyst at Cognizant building end-to-end applications with Angular and .NET. " +
    "Nine months of prior experience shipping cross-platform Flutter apps backed by Firebase and Go, " +
    "with a keen interest in applied AI and sensor-driven mobile software.",
};

export const education = {
  degree: "BTech, Computer Science Engineering",
  school: "Toc H Institute of Science and Technology (APJKTU)",
  period: "2021 – 2025",
  grade: "CGPA 8.15",
};

export const experience = [
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst Trainee",
    place: "Kochi",
    period: "08/2025 – Present",
    points: [
      "Attained proficiency in the MEAN stack (MongoDB, Express.js, Angular, Node.js) through comprehensive training in the Digital Engineering service line.",
      "Working as a Full Stack Developer for a client, building end-to-end applications using Angular and the .NET framework.",
    ],
  },
  {
    company: "DST Hub LLP",
    role: "Software Engineer Intern",
    place: "Remote",
    period: "12/2023 – 07/2024",
    points: [
      "Developed cross-platform apps using Flutter, integrating Firebase and a Golang (Gin) backend.",
      "Designed user interfaces in Figma and used Git/GitHub for version control.",
      "Worked in Agile teams, tracking development through Jira.",
    ],
  },
  {
    company: "Aadi Foundation",
    role: "Flutter Developer Intern",
    place: "Remote",
    period: "05/2023 – 07/2023",
    points: [
      "Built user-friendly Flutter apps for an NGO, integrating RESTful APIs.",
      "Contributed to interface design and Agile development workflows.",
    ],
  },
];

export const projects = [
  {
    name: "RescueConnect",
    tag: "Major Project",
    points: [
      "AI-powered platform using two BERT models (small-cased and large-cased) to analyse and categorise disaster-related data.",
      "Interactive dashboard showing real-time disaster information and critical analytics for relief agencies.",
    ],
  },
  {
    name: "T-Axis Motorcycle Telemetry",
    tag: "Independent Project",
    points: [
      "Standalone Wear OS app in Flutter tracking real-time motorcycle lean angle and top speed from the wrist.",
      "Custom low-pass filters for raw IMU sensor data, with SQLite for offline telemetry recording.",
    ],
  },
  {
    name: "Vision Analytics for Factory Floor",
    tag: "Minor Project · Team of 4",
    points: [
      "Computer-vision system that tracks object screen-time on factory floors and generates dynamic reports.",
    ],
  },
  // TODO: Will add if necessary
  // {
  //   name: "Automated Blog & Content Generation",
  //   tag: "Gen AI",
  //   points: [
  //     "Streamlit app using LLaMA 3.2B and Hugging Face to auto-generate blogs on tech and wellness topics.",
  //   ],
  // },
];

export const skills = [
  { group: "Languages", items: ["Dart", "Python", "JavaScript", "Java", "Go"] },
  { group: "Frameworks", items: ["Flutter", "Angular", "Express", "Gin", "React"] },
  { group: "Tools", items: ["Git", "Firebase", "Figma", "Jira", "SQL"] },
  // {
  //   group: "Soft Skills",
  //   items: ["Problem Solving", "Oratory", "Teamwork", "Leadership", "Active Listening"],
  // },
];

export const leadership = [
  {
    org: "GDSC TIST",
    role: "Flutter Developer Lead",
    period: "04/2023 – 04/2024",
    points: [
      "Led Flutter development bootcamps, enhancing students' mobile app development skills.",
      "Organised and promoted events to drive student engagement.",
    ],
  },
  {
    org: "IEEE TIST",
    role: "Computer Science Secretary",
    period: "04/2023 – 04/2024",
    points: ["Led organisation of ROBOCON and other student tech initiatives at TIST."],
  },
];

export const certificates = [
  {
    name: "Flutter and Dart — The Complete Guide",
    by: "Maximilian Schwarzmüller",
    period: "08/2023 – 12/2024",
  },
  { name: "Flutter Development", by: "Dr. Angela Yu", period: "09/2022 – 12/2022" },
  { name: "Android Application Development", by: "TechMaghi", period: "03/2023 – 04/2023" },
];

export const achievements = [
  "2nd Place, Hackathon at Model Engineering College",
  "Volunteer, TechFOSS & ADVAY College Fests",
  "9-month software development internship completed",
];
