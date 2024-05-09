// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
//import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
//import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
//import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Website developer",
    firstName: "BELAY",
    LastName: "KETEMA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "PHP",
        para: "PHP is a popular open-source scripting language used for web development.",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser.",
        logo: nodejs,
      },
      {
        name: "Java script",
        para: "JavaScript is a dynamic programming language commonly used for creating interactive and dynamic elements on websites.",
        logo: ps,
      },
      {
        name: "React js",
        para: "React is a popular JavaScript library for building user interfaces, developed by Facebook.",
        logo: reactjs,
      },
    
    
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Full stack website development",
        para: "Full stack website development refers to the process of creating both the front-end (client-side) and back-end (server-side) components of a website. A full stack developer is responsible for designing, building, and maintaining all aspects of a website, including the user interface, server-side logic, databases, and server infrastructure. ",
        logo: services_logo1,
      },
   
      {
        title: "Video Editing",
        para: "Video editing is the process of manipulating and rearranging video footage to create a finalized and polished video product. It involves trimming, cutting, adding transitions, effects, audio, and other enhancements to the raw video footage in order to improve the overall quality and storytelling of the video.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "Working with Belay on the development of our website was an absolute pleasure. Their expertise and attention to detail truly brought our vision to life. The final product exceeded our expectations and has significantly enhanced our online presence. We are grateful for Belay's professionalism, creativity, and dedication throughout the entire process.",
        img: avatar1,
        name: "Navas",
      },
      {
        review:
          "We are incredibly pleased with the website that Belay built for us. Their expertise and creative touch really shone through in every detail of the design. The user-friendly interface and smooth functionality have made a significant impact on our online presence. Throughout the project, Belay was responsive, professional, and attentive to our needs and preferences.",
        img: avatar2,
        name: "Tom alex",
      },
      {
        review:
          "We are grateful for Belay's professionalism, creativity, and dedication throughout the entire process. Thank you for delivering a website that not only looks great but also functions seamlessly. We highly recommend Belay for anyone in need of a skilled and talented full stack website developer.",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "We are truly grateful for their hard work and dedication in bringing our vision to life. Thank you for delivering a top-notch website that exceeded our expectations. We highly recommend Belay for their exceptional skills as a full stack website developer.",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "As a full stack website developer, I possess a comprehensive skill set that allows me to handle both the front-end and back-end aspects of web development. From creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript to designing and implementing efficient databases and server-side logic with languages like PHP, Python, or Node.js.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "belayketemateme44@gmail.com",
        icon: GrMail,
        link: "mailto:belayketemateme44@gmail.com",
      },
      {
        text: "+251 987247190",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "beleyketema",
        icon: BsInstagram,
        link: "https://www.instagram.com/belayblue/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
