import gildedImg from "../assets/images/projectsGilded.png";
import bayousideImg from "../assets/images/projects-bayouside.png";
import bayousideBookCoachImg from "../assets/images/bayouside_booking_coach.png";
import bayousideBookDashCoachImg from "../assets/images/bayouside_dashboard_coach_schedule.png";
import bayousideBookDashOwnerImg from "../assets/images/bayouside-tennis_dashboard_owner.png";
import pizzeriaImg from "../assets/images/projectsPizzeria.png";
import pizzeriaMobileImg from "../assets/images/pizzeria-rustica_mobile.png";
import pizzeriaCartImg from "../assets/images/pizzeria-rustica-cart.png";
import pizzeriaMenuImg from "../assets/images/pizzeria-rustica_full-menu.png";
import stayHealthyImg from "../assets/images/stay-healthy-landing.png";
import stayHealthyReviewsImg from "../assets/images/stay-healthy-reviews.png";
import stayHealthyBookingImg from "../assets/images/stay-healthy-bookAppt.png";
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
      "The Gilded Plate website was designed and developed from the ground up. I chose Next.js for server-side rendering and SEO capabilities, and Tailwind CSS for styling. The site features a clean and modern design",
      "From initial wireframes to the final deployment, the project followed a structured workflow. This included designing the user interface, implementing core features, and testing the application across various devices and browsers.",
      "The menu was built using data stored in a JSON file, allowing for easy updates and maintenance.",
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
        process: [
          "The biggest challenge with the reservation system was that I wanted the time slots to be dynamic, so I created a custom function to check for available times based on the restaurant's schedule.",
        ],
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
      "The custom design includes a simple booking interface with Stripe payment integration for players, plus a dashboard for the client to track bookings and payments. Every component was crafted to meet the client’s needs, ensuring a scalable, user-friendly solution for their backyard tennis court rental.",
    ],
    webStack: ["React", "Node.js", "MongoDB", "Express"],
    additionalImages: [
      {
        id: 1,
        url: bayousideBookCoachImg,
        caption: "Bayouside Tennis booking system",
        alt: "Screenshot of Bayouside Tennis booking system.",
        width: "600px",
        height: "400px",
        process: [
          "The booking system was designed to be user-friendly, allowing players to select a coach, which then populates the slots available on the calendar.",
          "The calendar dynamically updates available times based on existing bookings and allows players to choose from multiple time slots for each coach as well as rent a ball machine if they choose.",
          "The challenge was ensuring that the booking system was secure and reliable, which I achieved through careful state management and validation.",
        ],
      },
      {
        id: 2,
        url: bayousideBookDashCoachImg,
        caption: "Coach dashboard",
        alt: "Screenshot of Bayouside Tennis coach dashboard.",
        width: "800px",
        height: "400px",
        process: [
          "The dashboard was designed to provide coaches with an overview of their schedules and payments.",
          "The coach can click on a booking to view further details.",
        ],
      },
      {
        id: 3,
        url: bayousideBookDashOwnerImg,
        caption: "Owner dashboard",
        alt: "Screenshot of Bayouside Tennis coach dashboard.",
        width: "800px",
        height: "400px",
        process: [
          "The owner dashboard allows the owner to see upcoming tennis court reservations, payments, coach info and rental settings.",
          "The interface is designed to allow the owner to modify the settings through a form that updates the MongoDB database so that the owner does not need database knowledge.",
        ],
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
      "Pizzeria Rustica’s website was created to offer a straightforward, elegant website for a pizza restaurant, with a focus on enabling customers to place orders seamlessly. The goal was to provide a functional and attractive platform that simplifies the ordering process.",
      "Developed with simplicity in mind, the site ensures users can quickly navigate the menu and order their favorite pizzas from any device. It reflects the charm of a rustic pizzeria while delivering modern convenience.",
    ],
    process: [
      "I designed the website with Next.js for its server-side rendering capabilities, ensuring fast load times and SEO optimization. The site features a clean, rustic design that reflects the pizzeria's ambiance.",
      "The development process prioritized mobile-first using responsive design. This ensures that the site performs flawlessly across all screen sizes. Testing and refinements guaranteed a reliable, user-centric experience.",
    ],
    webStack: ["HTML", "CSS", "JavaScript"],
    additionalImages: [
      {
        id: 1,
        url: pizzeriaMenuImg,
        caption: "Pizzeria Rustica online menu",
        alt: "Screenshot of Pizzeria Rustica homepage with menu.",
        width: "550px",
        height: "600px",
        process: [
          "The online ordering system was designed to be user-friendly, allowing customers to easily select their pizzas and add them to their cart.",
          "The challenge was to ensure that the ordering system was secure and reliable, which I achieved through careful validation and testing.",
        ],
      },
      {
        id: 2,
        url: pizzeriaCartImg,
        caption: "Pizzeria Rustica cart",
        alt: "Screenshot of Pizzeria Rustica shopping cart.",
        width: "500px",
        height: "500px",
        process: [
          "The cart was designed to be simple and intuitive, allowing customers to easily view their selected items, add a tip and proceed to checkout.",
          "This involved calculating the tip based on the total order amount and ensuring that the cart updated dynamically as items were added or removed.",
          "I integrated PayPal for secure payment processing, ensuring that customer data was handled safely and efficiently.",
        ],
      },
      {
        id: 3,
        url: pizzeriaMobileImg,
        caption: "Mobile-friendly design",
        alt: "Screenshot of Pizzeria Rustica mobile-friendly design.",
        width: "300px",
        height: "600px",
        process: [
          "The mobile version of the site was designed to ensure that users could easily navigate the menu and place orders from their phones.",
          "I used media queries to adjust the layout and font sizes for smaller screens, ensuring a seamless experience across devices.",
          "The challenge was to maintain the site's aesthetic while optimizing it for mobile, which I achieved through careful design choices and testing.",
        ],
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
      "The Stay Healthy website, built for an online course project, aims to serve rural patients by providing accessible medical information and a system for booking online doctor appointments. The goal was to create a practical, user-friendly platform that bridges healthcare gaps in underserved areas.",
      "Developed from scratch, the site offers a clear, responsive design to ensure vital health resources and telehealth options are within reach for its audience. It focuses on simplicity and functionality.",
    ],
    process: [
      "I designed a straightforward layout, prioritizing ease of use for users seeking medical tips and appointments. The frontend was crafted with React and styled using Tailwind CSS, delivering a clean and responsive interface.",
      "The custom booking system was integrated to facilitate online doctor consultations. The process emphasized accessibility and performance, tailoring the site to meet the needs of patients.",
    ],
    webStack: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    additionalImages: [
      {
        id: 1,
        url: stayHealthyReviewsImg,
        caption: "Stay Healthy patient reviews.",
        alt: "Stay Healthy patient reviews.",
        width: "800px",
        height: "400px",
        process: [
          "The reviews section was designed to showcase patient feedback, enhancing the site's credibility and user engagement.",
          "I used a simple card layout to display each review, ensuring it was easy to read and visually appealing.",
          "The star system for ratings was implemented using a custom component, allowing for easy updates and maintenance.",
        ],
      },
      {
        id: 2,
        url: stayHealthyBookingImg,
        caption: "Booking system interface for online doctor appointments.",
        alt: "Screenshot of Stay Healthy booking system interface.",
        width: "500px",
        height: "500px",
        process: [
          "The booking system was a key feature, allowing users to schedule appointments with doctors easily.",
          "I implemented a user-friendly calendar interface, ensuring patients could select their preferred date and time without hassle.",
          "The challenge was to ensure that booked appointments were accurately reflected in the system, which I achieved through careful state management and validation.",
        ],
      },
    ],
  },
];
