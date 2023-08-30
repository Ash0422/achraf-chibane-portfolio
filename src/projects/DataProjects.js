import projectOne from "../assets/portfolio.png";
import projectTwo from "../assets/Quiz-Game2.png";
import projectThree from "../assets/Project1.png";

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
    website: "https://github.com/Ash0422/achraf-chibane-portfolio",
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
    title: "Catch-Em-All",
    image: projectThree,
    description: (
      <>
        <p>
        The Pokemon Adoption Center is a virtual space where users can browse and adopt various types of Pokemon. It is an online platform that allows users to view different Pokemon types, read descriptions of each Pokemon's characteristics, and ultimately adopt their favorite Pokemon for their own collection. The Adoption Center may include various features such as filtering options for specific Pokemon types, sorting options based on various criteria, and a shopping cart for users to keep track of their selected Pokemon. The main goal of the Pokemon Adoption Center is to provide users with a fun and engaging experience while offering a diverse selection of Pokemon for adoption.
        </p>
      </>
    ),
    github: "https://github.com/Ash0422/Catch-Em-All",
    website: "https://netlify.com/",
  },
};

export default project;
