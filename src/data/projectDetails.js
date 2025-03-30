import gildedImg from "../assets/images/projectsGilded.png";
import bayousideImg from "../assets/images/projects-bayouside.png";
import pizzeriaImg from "../assets/images/projectsPizzeria.png";
import stayHealthyImg from "../../../../Portfolio/images/placeholder.png";

export const projectDetails = [
  {
    projectURL: "gilded-plate",
    title: "The Gilded Plate",
    description:
      "I built this restaurant website to showcase the menu, allow users to make reservations, and find the location easily.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    imageURL: gildedImg,
    liveURL: "https://gildedplate-seven.vercel.app/",
    githubURL: "https://github.com/dataMichelle/gildedplate",
    goal: "To create a modern and responsive website for a restaurant, allowing users to view the menu, make reservations, and find the location easily.",
    process: [
      "Designed the UI/UX using Figma to ensure a clean and user-friendly interface.",
      "Developed the frontend using React and styled it with Tailwind CSS.",
      "Integrated a reservation system using Next.js API routes.",
    ],
    webStack: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    additionalImages: [
      "/assets/images/gilded-1.png",
      "/assets/images/gilded-2.png",
      "/assets/images/gilded-3.png",
    ],
  },
  {
    projectURL: "bayouside-tennis",
    title: "Bayouside Tennis",
    description:
      "Tennis court rental website with booking, login, and a dashboard for owners and coaches.",
    tags: ["React", "JavaScript", "MongoDB"],
    imageURL: bayousideImg,
    liveURL: "https://bayouside-tennis.netlify.app/",
    githubURL: "https://github.com/dataMichelle/bayouside-tennis",
    goal: "To provide a platform for users to book tennis courts and for coaches to manage their schedules.",
    process: [
      "Built a responsive frontend using React.",
      "Implemented a backend with Node.js and MongoDB for user authentication and booking management.",
      "Designed a dashboard for coaches and owners to manage bookings and schedules.",
    ],
    webStack: ["React", "Node.js", "MongoDB", "Express"],
    additionalImages: [
      "/assets/images/bayouside-1.png",
      "/assets/images/bayouside-2.png",
      "/assets/images/bayouside-3.png",
    ],
  },
  {
    projectURL: "pizzeria-rustica",
    title: "Pizzeria Rustica",
    description: "A pizza restaurant website with an online ordering system.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageURL: pizzeriaImg,
    liveURL: "https://pizzeria-rustica.vercel.app/",
    githubURL: "https://github.com/dataMichelle/pizzeria-rustica",
    goal: "To create a simple and elegant website for a pizza restaurant, allowing users to order online.",
    process: [
      "Designed the layout using HTML and CSS.",
      "Added interactivity with JavaScript for the online ordering system.",
      "Ensured the website is responsive and works well on all devices.",
    ],
    webStack: ["HTML", "CSS", "JavaScript"],
    additionalImages: [
      "/assets/images/pizzeria-1.png",
      "/assets/images/pizzeria-2.png",
      "/assets/images/pizzeria-3.png",
    ],
  },
  {
    projectURL: "stay-healthy",
    title: "Stay Healthy",
    description: "This is a health and wellness blog with articles and tips.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    imageURL: stayHealthyImg,
    liveURL: "https://stayhealthy-react.netlify.app/",
    githubURL: "https://github.com/dataMichelle/stayhealthy-react",
    goal: "To create a modern and responsive website for a restaurant, allowing users to view the menu, make reservations, and find the location easily.",
    process: [
      "Designed the UI/UX using Figma to ensure a clean and user-friendly interface.",
      "Developed the frontend using React and styled it with Tailwind CSS.",
      "Integrated a reservation system using Next.js API routes.",
    ],
    webStack: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    additionalImages: [
      "/assets/images/gilded-1.png",
      "/assets/images/gilded-2.png",
      "/assets/images/gilded-3.png",
    ],
  },
];
