import projectOne from "../assets/portfolio.png";
import projectTwo from "../assets/Quiz-Game2.png";
import projectThree from "../assets/Screenshot1.png";

const project = {
  1: {
    title: "Portfolio",
    image: projectOne,
    description: (
      <>
        <p>
        My Portfolio Website is a showcase of my skills, experiences, and accomplishments as a web developer and designer. This project serves as a digital representation of my professional journey, demonstrating my capabilities and passion for creating visually appealing and user-friendly web experiences.
        </p>
      </>
    ),
    github: "https://github.com/Ash0422/achraf-chibane-portfolio",
    website: "https://achrafchibane.com",
  },
  2: {
    title: "United States Civic Quiz Game",
    image: projectTwo,
    description: (
      <>
        <p>
        The United States Civic Quiz Game is an engaging and educational web application designed to test users' knowledge of the United States' civic history, government, and important facts. This interactive project not only offers a fun way to learn about civic topics but also demonstrates my proficiency in web development using HTML, CSS, and JavaScript.
        </p>
      </>
    ),
    github: "https://github.com/Ash0422/04-Quiz-Game",
    website: "https://ash0422.github.io/04-Quiz-Game/",
  },
  3: {
    title: "Adidas Website",
    image: projectThree,
    description: (
      <>
        <p>
        The Adidas website redesign aims to provide an immersive and user-friendly experience to customers who visit the site. It has been developed with a focus on responsive design to ensure that the website functions seamlessly on various devices, from desktop computers to smartphones and tablets.
        </p>
      </>
    ),
    github: "https://github.com/Ash0422/adidas-website",
    website: "https://main--peppy-truffle-c5d975.netlify.app/",
  },
};

export default project;
