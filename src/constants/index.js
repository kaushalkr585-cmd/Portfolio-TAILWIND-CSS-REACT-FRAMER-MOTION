import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Passionate Full Stack Developer with 6 months of experience in HTML, CSS, JavaScript, React, Node.js, MongoDB, and MySQL. Focused on building clean, responsive, and scalable web applications while continuously learning and growing as a developer.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With around 6 months of hands-on experience, I have worked with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, MongoDB, and MySQL, along with motion graphics and video editing using After Effects and Premiere Pro. My journey in web development began with a strong curiosity for how things work, and it has evolved into a continuous learning path where I strive to improve and adapt to new challenges. I thrive in collaborative environments and enjoy solving real-world problems to deliver clean and reliable solutions. Outside of coding, I enjoy exploring new technologies, creating visual content, and improving my creative and development skills.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Python Intern",
    company: "Infosys",
    description: `Completed an internship focused on Python programming, where I learned core concepts such as data structures, file handling, and basic automation. Gained practical experience by working on small scripts and problem-solving tasks.`,
    technologies: ["Python"],
  },
  {
    year: "2024",
    role: "CVML Trainee",
    company: "NIST University",
    description: `Trained in Computer Vision and Machine Learning concepts, including image processing, basic ML algorithms, and practical implementation using Python. Worked on academic projects related to computer vision.`,
    technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
  },
  {
    year: "2025",
    role: "Database Intern",
    company: "RINL Vizag",
    description: `Worked on database management and design using MySQL. Learned to create and manage databases, write optimized SQL queries, and handle data efficiently for real-world applications.`,
    technologies: ["MySQL", "SQL", "Database Management"],
  },
];

export const PROJECTS = [
  {
    title: "CLOTHSY – E-Commerce Website",
    image: project1,
    description:
      "A modern e-commerce website for clothing with features like product listing, shopping cart, user authentication, and an AI-powered chatbot to assist users with product queries and navigation.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },

   {
    title: "AI Personal Chatbot",
    image: project3,
    description:
      "A personal chatbot that provides answers to user questions using the Google Gemini API as its brain, delivering intelligent and context-aware responses.",
    technologies: ["JavaScript", "React", "HTML", "CSS", "Google Gemini API"],
  },

  {
    title: "Automated Attendance System",
    image: project2,
    description:
      "An automated attendance system using computer vision that detects and recognizes faces in real time to mark attendance, reducing manual effort and improving accuracy.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
  }
 
];


export const CONTACT = {
  address: "NIST UNIVERSITY, Berhampur, Odisha, India",
  phoneNo: "+91 8697085904",
  email: "xyz.430@gmail.com",
};
