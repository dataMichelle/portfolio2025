import gildedImg from "../assets/images/projectsGilded.png";
import bayousideImg from "../assets/images/projects-bayouside.png";
import pizzeriaImg from "../assets/images/projectsPizzeria.png";
import stayHealthyImg from "../../../../Portfolio/images/placeholder.png";

export const projectsData = [
  {
    title: "The Gilded Plate",
    description:
      "Restaurant website showcasing the menu, location, and online reservation system.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    imageURL: gildedImg,
    projectURL: "gilded-plate",
    liveURL: "https://gildedplate-seven.vercel.app/",
    githubURL: "https://github.com/dataMichelle/gildedplate",
  },
  {
    title: "Bayouside Tennis",
    description:
      "Tennis court rental website with booking, login and a dashboard for owner and coaches.",
    tags: ["React", "JavaScript", "MongoDB"],
    imageURL: bayousideImg,
    projectURL: "bayouside-tennis",
    liveURL: "https://bayouside-tennis.netlify.app/",
    githubURL: "https://github.com/dataMichelle/bayouside-tennis",
  },
  {
    title: "Pizzeria Rustica",
    description: "A pizza restaurant website with an online ordering system.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageURL: pizzeriaImg,
    projectURL: "pizzeria-rustica",
    liveURL: "https://pizzeria-rustica.vercel.app/",
    githubURL: "https://github.com/dataMichelle/pizzeria-rustica",
  },
  {
    title: "Stay Healthy",
    description: "A health and wellness blog with articles and tips.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageURL: stayHealthyImg,
    projectURL: "stay-healthy",
    liveURL: "https://stayhealthy-react.netlify.app/",
    githubURL: "https://github.com/dataMichelle/stayhealthy-react",
  },
];
