import { Link } from "react-router-dom";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    gat,
    kumarans,
    prarthana,
    carrent,
    jobit,
    tripguide,
    threejspng,
    angular,
    bootstrap,
    clang,
    cplus,
    express,
    flutter,
    java,
    keras,
    mysql,
    nextjs,
    npm,
    numpy,
    pandas,
    python,
    tensorflow,
    bms,
    flappybird,
    hal56,
    nba,
    vehiclemain,
    exp1,
    exp2,
    exp3,
    exp4,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      
      
    },
    {
      id: "project",
      title: "Project",
     
    },
    {
      id: "githublink",
      title: "Github",
      url:"https://github.com/Quiirky-codes",
      
    },
    {
      id: "linkedinlink",
      title: "LinkedIn",
      url:"https://www.linkedin.com/in/amithmjain007/",
      
    },
    {
      id: "contact",
      title: "Contact",
      
    },
    
    
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "AI/ML Engineer",
      icon: creator,
    },
    {
      title: "Data Scientist",
      icon: mobile,
    },
    {
      title: "Research Scientist",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "keras",
      icon: keras,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
    {
      name: "numpy",
      icon: numpy,
    },
    {
      name: "pandas",
      icon: pandas,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
  ];
  
  const education  = [
    {
      title: "Global Academy Of Technology, Bengaluru",
      company_name: "Bachelor Of Technology - B.Tech, Artificial Intelligence and Machine Learning",
      grade:"Grade - 8.61",
      icon: gat,
      iconBg: "#383E56",
      date: "Dec 2021 - Present",
      points: [
        "I am currently pursuing my Bachelor's degree in Artificial Intelligence and Machine Learning at Global Academy of Technology, Bengaluru.",
        "I have completed 5 Semesters and a CGPA of 8.61.",
        "I have the following certifications:",
        "The Complete Python Bootcamp : UDEMY",
        "The Complete 2023 Web : Development Bootcamp : UDEMY",
        "Python for Data Science and Machine Learning : UDEMY",
        "ChatGPT Prompt Engineering for Developers : DeepLearning.AI",
        "Generative AI with Large Language Models : Coursera ",
        "Founding Core Committee Member of VIHANA - The social-service club of the Department of Artificial Intelligence and Machine Learning.",
      ],
    },
    {
      title: "Sri Kumaran Children's Home Pre-University College, Bengaluru",
      company_name: "State Board (PUC), Karnataka, Science with Electronics",
      grade:"Grade - 93%",
      icon: kumarans,
      iconBg: "#E6DEDD",
      date: "June 2019 - June 2021",
      points: [
        "I completed my Class 12 High School Education at Kumaran Children's Home PU College, Bengaluru, where I studied Science with Electronics and scored 93%.",
      ],
    },
    {
      title: "Prarthana Central School, Bengaluru",
      company_name: "CBSE(X), STEM with Computer Science",
      grade:"Grade - 93%",
      icon: prarthana,
      iconBg: "#383E56",
      date: "April 2008 - June 2019",
      points: [
        "I completed my class 10 Education at Prarthana Central School, Bengaluru, where I studied STEM with Computer Science.",
        "As a school student, I was an active participant in the Scouts and Guides Organization, where I developed essential life skills, leadership qualities, and a deep appreciation for community service and nature.",
        "I had the privilege of engaging in exciting scientific projects, experiments, and competitions with National Children's Science Council (NCSC)."
      ],
    },
    ];
  
  const testimonials = [
    {
      id:"1",
      title:"Simon Game",
      testimonial:
        "A web-based implementation of the classic Simon Game, built using HTML, CSS, and JavaScript. The game challenges players to memorize and repeat a sequence of tones and lights, which becomes progressively longer and more complex as the game progresses.",
      
      source_code_link: "https://github.com/Quiirky-codes/Simon_Game",
    },
    {
      id:"2",
      title:"MNIST Neural Network",
      testimonial:
        "A simple neural network from scratch using only NumPy and Math libraries. The neural network is trained and tested on the MNIST dataset, a popular benchmark dataset for handwritten digit recognition.",
      source_code_link: "https://github.com/Quiirky-codes/MNIST_neural_network",
    },
    {
      id:"3",
      title:"Drum-Kit",
      testimonial:
        "The Drum Kit Project is an interactive web application that lets you unleash your inner drummer. Built with HTML, CSS, and JavaScript, this project allows users to create beats either by clicking on virtual drum pads or by pressing corresponding keys on the keyboard.",
      source_code_link: "https://github.com/Quiirky-codes/Drum-Kit",
    },
    {
      id:"4",
      title:"McCulloch Pitts Neuron",
      testimonial:
        "A simple implementation of McCulloch-Pitts neurons for the OR, AND, and XOR logic gates. The implementation includes threshold values, learning rates, and epochs for training.",
      source_code_link: "https://github.com/Quiirky-codes/McCulloch-Pitts-Neuron",
    },
  ];
  
  const projects = [
    {
      name: "Automated Vehicle Maintenance Predictor",
      description:
        "The Automated Vehicle Maintenance Predictor is a machine learning project that aims to predict maintenance needs for vehicles using historical data and predictive modelling.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Random Forest",
          color: "pink-text-gradient",
        },
        {
          name: "K-Means Clustering",
          color: "orange-text-gradient",
        },
      ],
      image: vehiclemain,
      source_code_link: "https://github.com/Quiirky-codes/Automated-Vehicle-Maintenance-Predictor",
    },
    {
      name: "Flappy Bird AI",
      description:
        "Flappy Bird game implemented in Python with an AI that trains itself to play it. The game uses [NEAT](Neuroevolution of Augmenting Topologies) to enable the AI to learn and improve its performance over time.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NEAT Algorithm",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: flappybird,
      source_code_link: "https://github.com/Quiirky-codes/Flappy-Bird",
    },
    {
      name: "Drone Dex",
      description:
        "DroneDex is a chatbot for drones developed as part of our hackathon project. The chatbot is designed to provide information and assistance related to drones.",
      tags: [
        {
          name: "HTMl and CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Less",
          color: "pink-text-gradient",
        },
        {
          name: "Python Flask",
          color: "orange-text-gradient",
        },
        
      ],
      image: bms,
      source_code_link: "https://github.com/Quiirky-codes/DroneDex",
    },
    {
      name: "NBA Database Management System",
      description:
        "This project is designed to manage information related to the NBA including details about teams, coaches, players, stadiums, sponsors, fixtures, and user administration for administrators.",
      tags: [
        {
          name: "HTMl",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "pHp",
          color: "pink-text-gradient",
        },
        
      ],
      image: nba,
      source_code_link: "https://github.com/Quiirky-codes/NBA_Management_System",
    },
    {
      name: "HAL56 Chatbot",
      description:
        "This project provides a simple Gradio interface for using the Llama Index, a versatile library for semantic search. This interface allows you to interact with the Llama Index through a chat-like interface using the Gradio library.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Llama",
          color: "green-text-gradient",
        },
        {
          name: "Gradio",
          color: "pink-text-gradient",
        },
        
      ],
      image: hal56,
      source_code_link: "https://github.com/Quiirky-codes/HAL56",
    },
  ];
  
  /*const experiences = [
    {
      id: "1",
      title: "Full Stack Web Dev and AI Intern",
      company_name: "Excentric NEXA",
      icon: exp1,
      /*date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];*/
  export { services, technologies, education, testimonials, projects};//experiences };