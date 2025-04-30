import gildedImg from "../assets/images/projectsGilded.png";
import bayousideImg from "../assets/images/projects-bayouside.png";
import pizzeriaImg from "../assets/images/projectsPizzeria.png";
import stayHealthyImg from "../assets/images/stay-healthy-landing.png";

export const projectsData = [
  {
    title: "The Gilded Plate",
    description:
      "A sleek restaurant site featuring menu highlights, seamless reservations, and easy location access.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    imageURL: gildedImg,
    projectURL: "gilded-plate",
    liveURL: "https://gildedplate-seven.vercel.app/",
    githubURL: "https://github.com/dataMichelle/gildedplate",
  },
  {
    title: "Bayouside Tennis",
    description:
      "A backyard tennis rental platform with secure booking, user login, and an owner-coach dashboard.",
    tags: ["React", "JavaScript", "MongoDB"],
    imageURL: bayousideImg,
    projectURL: "bayouside-tennis",
    liveURL: "https://bayouside-tennis.netlify.app/",
    githubURL: "https://github.com/dataMichelle/bayouside-tennis",
  },
  {
    title: "Pizzeria Rustica",
    description:
      "A rustic pizza site with a streamlined online ordering experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageURL: pizzeriaImg,
    projectURL: "pizzeria-rustica",
    liveURL: "https://pizzeria-rustica.vercel.app/",
    githubURL: "https://github.com/dataMichelle/pizzeria-rustica",
  },
  {
    title: "Stay Healthy",
    description:
      "A telehealth portal connecting rural patients to medical resources and virtual appointments.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageURL: stayHealthyImg,
    projectURL: "stay-healthy",
    liveURL: "https://stayhealthy-react.netlify.app/",
    githubURL: "https://github.com/dataMichelle/stayhealthy-react",
  },
];
