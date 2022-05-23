let info = {
  name: "Cristine Marquez",
  logo_name: "Cristine",
  flat_picture: require("./assets/images/hi.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "Hi! My name is Cristine Marquez and I'm a web developer, I started coding around 2019 when I was on my sabatical year and decided to enroll in a 3 months Front-End Bootcamp in Ubiqum then after that I started working as a Front-end Developer in a company for about a year, but then I've decided to continue my studies and enrolled in a vocational school in Centre d'Estudis Politécnics, my course was 'web application developer'. If you want to know more about me and my skills scroll down!",
  links: {
    linkedin: "https://www.linkedin.com/in/cristine-marquez/",
    github: "https://github.com/CristineMar",
    jsfiddle: "https://jsfiddle.net/user/fiddles/all/",
  },
  education: [
    {
      name: "Sapienza Università di Roma",
      place: "italy",
      date: "May, 2009 - May, 2011",
      degree: "Economics Science",
      gpa: "3.7/4.0",

      skills: [
        // "Skills gained:",
        // "Design, conduct and interpret research and statistical analysis. ",
        // "Apply an evidence-based approach to problems.",
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",
      ],
    },
    {
      name: "Ilbah workshops",
      course: "Full Stack Developer",
      place: "Bucharest/Romania",
      date: "May, 2021 - Oct, 2021",
      degree: "Bachelors in Programmer Help, cod COR 351201",
      gpa: "8.5/10.0",
      description: "",
      skills: ["HTML5", "CSS3", "JavaScript", "OOP", "PHP", "MySql", "Laravel"],
    },
  ],
  experience: [
    {
      name: "Freelancer",
      place: "Bucharest, Romania",
      date: "Aug, 2021 - Present",
      position: "Full Stack Web Developer",
      description:
        "Developing Front-end website architecture.Designing user interactions on web pages.Ensuring responsiveness of applications.Working alongside graphic designers for web design features.Seeing through a project from conception to finished product.Staying abreast of developments in web applications and programming languages. Degree: Program Help Cod COR 351201.Strong organizational and project management skills.Proficiency with fundamental Front-end languages such as HTML, CSS, and JavaScript.Familiarity with JavaScript frameworks such as  React.js, and Vue.js.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React.js",
        "Vue.js",
      ],
    },
  ],
  skills: [
    {
      title: "languages",
      info: ["Javascript", "CSS", "HTML5", "JAVA"],
      icon: "fa fa-code",
    },
    {
      title: "web technologies",
      info: ["Vue.js", "Angular.js", "SCSS", "HTML", "CSS", "LARAVEL", "PHP"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "databases",
      info: ["MySQL", "PHPMyAdmin"],
      icon: "fa fa-database",
    },
    {
      title: "operating systems & tools",
      info: ["MacOS", "Windows", "Android", "Scrum", "Firebase", "AWS S3"],
      icon: "fas fa-tools",
    },
  ],
  portfolio: [
    {
      name: "Todo-application",
      pictures: [
        /* {
            img: require("./src/assets/portfolio/todo-application/one.png")
          },
          {
            img: require("./src/assets/portfolio/todo-application/two.png")
          }, */
      ],
      technologies: ["JavaScript", "HTML5", "Netlify"],
      category: "web todo list  app ",
      github: "https://github.com/Natain/todo-application",
      visit: "https://natainbogdan.netlify.app/",
      description:
        "Todo Application was made to help me with the learning schedule and it seams was doing a great job this app helping me to organize all the daily tasks.",
    },

    {
      name: "Grocery-listing-react",
      pictures: [
        // {
        //   img: require("./src/assets/portfolio/clumpr/logo.png")
        // },
        /* {
            img: require("./src/assets/portfolio/grocery/one.png")
          },
          {
            img: require("./src/assets/portfolio/grocery/two.png")
          } */
      ],
      technologies: ["CSS", "JavaScript", "React.js", "HTML5"],
      category: "Web App",
      github: "https://github.com/Natain/grocery-listing-react",
      date: "",
      visit: "https://grocery-listing-react.netlify.app/",
      description:
        "Grocery-listing-react it's a simple app that can help you doing shoppings.",
    },
    {
      name: "Gitscores",
      pictures: [
        /* {
            img: require("./src/assets/portfolio/Gitscores/one.png")
          },
          {
            img: require("./src/assets/portfolio/Gitscores/two.png")
          },
          {
            img: require("./src/assets/portfolio/Gitscores/three.png")
          }, */
      ],
      technologies: ["JavaScript", "CSS", "EJS", "Herokuapp"],
      category: "Scoring app for Github",
      github: "https://github.com/Natain/gitscores",
      date: "Aug, 2021 - Sep, 2021",
      visit: "https://gitscores.herokuapp.com/",
      description:
        "Gitscores v1.0.2 was updated from the orginal with more tools that let you personalize the app on your desingn.",
    },
  ],
  recommendations: [
    {
      title:
        "In his internship, Bogdan Natain has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Timothy Gray",
      position: "CTO",
      company: "Startup Norway As",
      location: " Oslo, Norway",
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Hansley Jacob",
      position: "Project Manager",
      company: "Startup Norway As",
      location: "Oslo, Norway",
    },
  ],
};
  
  export default info;
  
  
  
  