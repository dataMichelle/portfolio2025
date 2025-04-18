import gildedImg from "../assets/images/projectsGilded.png";
import bayousideImg from "../assets/images/projects-bayouside.png";
import pizzeriaImg from "../assets/images/projectsPizzeria.png";
import stayHealthyImg from "../assets/images/placeholder.png";
import gildedReservation from "../assets/images/gildedReservation.png";

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
    goal: [
      "The goal was to create a modern and responsive website for a restaurant, allowing users to view the menu, make reservations, and find the location easily. I wanted the website to look good on mobile devices and be user-friendly.",
    ],
    process: [
      "The Gilded Plate website was designed and developed from the ground up. I used Next.js for server-side rendering, and Tailwind CSS for styling. The site features a clean and modern design",
      "From initial wireframes to the final deployment, the project followed a structured workflow. This included designing the user interface, implementing core features, and testing the application across various devices and browsers.",
      "The menu was built using data stored in a JSON file, allowing for easy updates and maintenance. The hardest part was ensuring the reservation system worked seamlessly, allowing users to select a date and time, and receive a confirmation email. I wanted the time slots to be dynamic, so I created a custom function to check for available times based on the restaurant's schedule.",
      "I also focused on optimizing the site for performance and SEO, ensuring fast load times and good visibility in search engines. The final product is a fully functional restaurant website that meets the needs of both the business and its customers.",
    ],
    webStack: ["React", "Next.js", "Tailwind CSS"],
    additionalImages: [
      {
        id: 1,
        url: gildedReservation,
        caption: "The reservation system interface shows available time slots.",
        alt: "Screenshot of The Gilded Plate menu page.",
        width: "800px",
        height: "600px",
      },
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
    goal: [
      "The Bayouside Tennis website aimed to create an easy-to-use platform for renting a private backyard tennis court, with an optional ball machine, per the client’s request. It needed to handle online bookings and payments while offering the owner and coaches a dashboard to manage schedules and revenue.",
      "Designed from scratch, the site delivers a seamless experience for players to reserve court time and a robust toolset for the client to oversee their rental business efficiently. The focus was on functionality, security, and accessibility tailored to this unique backyard setup.",
    ],
    process: [
      "I built the Bayouside Tennis website from the ground up, using MongoDB to manage users, bookings, coach hours, and payments, and Firebase for secure user authentication. Next.js was chosen over React for its SEO advantages and streamlined routing, ideal for both the booking system and the admin dashboard.",
      "The custom design includes a simple booking interface with payment integration for players, plus a dashboard for the client to track bookings and payments. Every component was crafted to meet the client’s needs, ensuring a scalable, user-friendly solution for their backyard tennis court rental.",
    ],
    webStack: ["React", "Node.js", "MongoDB", "Express"],
    additionalImages: [
      {
        id: 1,
        url: "/assets/images/bayouside-1.png",
        caption: "Homepage of Bayouside Tennis showcasing the booking system.",
        alt: "Screenshot of Bayouside Tennis homepage with booking system.",
        width: "900px",
        height: "500px",
      },
      {
        id: 2,
        url: "/assets/images/bayouside-2.png",
        caption: "Dashboard interface for managing schedules and payments.",
        alt: "Screenshot of Bayouside Tennis dashboard interface.",
        width: "800px",
        height: "600px",
      },
      {
        id: 3,
        url: "/assets/images/bayouside-3.png",
        caption: "Mobile-friendly design of the tennis court rental website.",
        alt: "Screenshot of Bayouside Tennis mobile-friendly design.",
        width: "700px",
        height: "400px",
      },
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
    goal: [
      "Pizzeria Rustica’s website was created to offer a straightforward, elegant online hub for a pizza restaurant, with a focus on enabling customers to place orders seamlessly. The goal was to provide a functional and attractive platform that simplifies the ordering process.",
      "Developed with simplicity in mind, the site ensures users can quickly navigate the menu and order their favorite pizzas from any device. It reflects the charm of a rustic pizzeria while delivering modern convenience.",
    ],
    process: [
      "I designed the layout using HTML and CSS, establishing a clean and responsive structure for the restaurant’s digital presence. JavaScript was added to bring interactivity to the online ordering system, allowing users to customize and submit orders effortlessly.",
      "The development process prioritized mobile-friendliness, ensuring the site performs flawlessly across all screen sizes. Testing and refinements guaranteed a reliable, user-centric experience for pizza lovers.",
    ],
    webStack: ["HTML", "CSS", "JavaScript"],
    additionalImages: [
      {
        id: 1,
        url: "/assets/images/pizzeria-1.png",
        caption: "Homepage of Pizzeria Rustica showcasing the menu.",
        alt: "Screenshot of Pizzeria Rustica homepage with menu.",
        width: "800px",
        height: "600px",
      },
      {
        id: 2,
        url: "/assets/images/pizzeria-2.png",
        caption: "Online ordering system interface.",
        alt: "Screenshot of Pizzeria Rustica online ordering system.",
        width: "700px",
        height: "500px",
      },
      {
        id: 3,
        url: "/assets/images/pizzeria-3.png",
        caption: "Mobile-friendly design of the pizza restaurant website.",
        alt: "Screenshot of Pizzeria Rustica mobile-friendly design.",
        width: "900px",
        height: "600px",
      },
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
    goal: [
      "The Stay Healthy website, built for an online course project, aimed to serve rural patients by providing accessible medical information and a system for booking online doctor appointments. The goal was to create a practical, user-friendly platform that bridges healthcare gaps in underserved areas.",
      "Developed from scratch, the site offers a clear, responsive design to ensure vital health resources and telehealth options are within reach for its audience. It focuses on simplicity and functionality to support rural communities effectively.",
    ],
    process: [
      "I started by planning a straightforward layout, prioritizing ease of use for users seeking medical content and appointments. The frontend was crafted with React and styled using Tailwind CSS, delivering a clean and responsive interface.",
      "Next.js enabled efficient routing and SEO optimization, while a custom booking system was integrated to facilitate online doctor consultations. The process emphasized accessibility and performance, tailoring the site to meet the needs of rural patients.",
    ],
    webStack: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    additionalImages: [
      {
        id: 1,
        url: "/assets/images/gilded-1.png",
        caption: "Homepage of Stay Healthy showcasing health articles.",
        alt: "Screenshot of Stay Healthy homepage with health articles.",
        width: "800px",
        height: "600px",
      },
      {
        id: 2,
        url: "/assets/images/gilded-2.png",
        caption: "Booking system interface for online doctor appointments.",
        alt: "Screenshot of Stay Healthy booking system interface.",
        width: "700px",
        height: "500px",
      },
      {
        id: 3,
        url: "/assets/images/gilded-3.png",
        caption: "Mobile-friendly design of the Stay Healthy website.",
        alt: "Screenshot of Stay Healthy mobile-friendly design.",
        width: "900px",
        height: "600px",
      },
    ],
  },
];
