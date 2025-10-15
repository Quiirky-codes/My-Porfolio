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
    asl,
    obj_detect,
    traffic_analyisis,
    echosight,
    verseai,
    answersheet,
    
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
      url:"https://www.linkedin.com/in/amithmjain/",
      
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
      grade:"Grade - 8.88",
      icon: gat,
      iconBg: "#383E56",
      date: "Dec 2021 - June 2025",
      points: [
        "I have completed my Bachelor's degree in Artificial Intelligence and Machine Learning with First Class Distinction from Global Academy of Technology, Bengaluru.",
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
  
  const certifications = [
    {
      id:"1",
      title:"Introducing Multimodal Llama 3.2",
      date: "October 2024",
      company_name: "DeepLearning.AI",
      testimonial:
        "",
      
      source_code_link: "https://learn.deeplearning.ai/accomplishments/51b5e1ad-d91f-4ed6-96c1-00501bc04471",
    },
    {
      id:"2",
      title:"Serverless LLM Apps Amazon Bedrock",
      date: "October 2024",
      company_name: "DeepLearning.AI",
      testimonial:
        "",
      source_code_link: "https://learn.deeplearning.ai/accomplishments/9abcbdd3-aa21-471d-a788-219be4ae5d4a",
    },
    {
      id:"3",
      title:"Introduction to cloud-native apps on Azure",
      date: "September 2024",
      company_name: "Microsoft",
      testimonial:
        "",
      source_code_link: "https://learn.microsoft.com/en-us/users/amithmjain-8606/achievements/n2rt8vxf?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      id:"4",
      title:"Pair Programming with a Large Language Model",
      date: "July 2024",
      company_name: "DeepLearning.AI",
      testimonial:
        "",
      source_code_link: "https://learn.deeplearning.ai/accomplishments/68151c1f-ae56-44e3-8908-bdb57ebd36b3?usp=sharing",
    },
    {
      id:"5",
      title:"ChatGPT Prompt Engineering for Developers",
      date: "July 2024",
      company_name: "DeepLearning.AI",
      testimonial:
        "",
      source_code_link: "https://learn.deeplearning.ai/accomplishments/8d5b516d-d01a-4604-b7e3-c612e76601f5?usp=sharing",
    },
    {
      id:"6",
      title:"Full stack Web Development",
      date: "July 2024",
      company_name: "Udemy",
      testimonial:
        "",
      source_code_link: "https://www.udemy.com/certificate/UC-8d0a694a-020f-40be-929f-4fcef052d76e/",
    },
    {
      id:"7",
      title:"Introduction to Generative AI",
      date: "July 2024",
      company_name: "Google Cloud",
      testimonial:
        "",
      source_code_link: "https://www.cloudskillsboost.google/public_profiles/70e7af2a-8e85-4345-8942-37b0af695121/badges/10236618?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      id:"8",
      title:"LangChain for LLM Application Development",
      date: "July 2024",
      company_name: "DeepLearning.AI",
      testimonial:
        "",
      source_code_link: "https://learn.deeplearning.ai/accomplishments/378a03c8-f7ea-4c98-8842-d58d21edf54b?usp=sharing",
    },
    {
      id:"9",
      title:"Python For Data Science and Machine Learning",
      date: "July 2024",
      company_name: "Udemy",
      testimonial:
        "",
      source_code_link: "https://www.udemy.com/certificate/UC-03a3562e-2bd5-4208-82ae-50953e2b4438/",
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
    {
      name: "American Hand-Sign Recognition",
      description:
        "This project aims to eradicate the communication barrier between Deaf and hearing individuals by developing a system to detect and interpret American Sign Language (ASL) gestures. Initially, we use a Random Forest classifier for gesture recognition.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "CNN",
          color: "green-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "pink-text-gradient",
        },
        
      ],
      image: asl,
      source_code_link: "https://github.com/Quiirky-codes/Sign_To_Text_Recognition",
    },
    {
      name: "Object Detection Application",
      description:
        "A mobile application that performs real-time object detection using TensorFlow Lite. The app detects and localizes objects through the device's camera, providing fast and efficient on-device inference. Built with Android Studio, it showcases seamless integration of machine learning models for practical, real-world use cases.",
      tags: [
        {
          name: "Tensorflow Lite",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "Android Studio",
          color: "pink-text-gradient",
        },
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        
      ],
      image: obj_detect,
      source_code_link: "https://github.com/Quiirky-codes/Object-Detection-Application",
    },
    {
      name: "Traffic-Monitoring-Object-Tracking-And-Counting",
      description:
        "An advanced traffic monitoring system leveraging YOLOv8, a state-of-the-art deep learning model for object detection. Our system is designed to detect and track vehicles, pedestrians, cyclists, and other relevant objects in real-time from traffic surveillance footage.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "YOLO",
          color: "green-text-gradient",
        },
        {
          name: "Deep Sort",
          color: "pink-text-gradient",
        },
        
        
      ],
      image: traffic_analyisis,
      source_code_link: "https://github.com/Quiirky-codes/Object-Detection-Application",
    },
    {
      name: "EchoSight: An AI Wearable Device for the Blind",
      description:
        "EchoSight is an AI-driven wearable aiding the visually impaired with real-time auditory feedback for enhanced mobility, independence, and safety using computer vision, machine learning, and sensor-based obstacle detection.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "YOLO V4 TINY",
          color: "green-text-gradient",
        },
        {
          name: "Dlib",
          color: "pink-text-gradient",
        },
        
        
      ],
      image: echosight,
      source_code_link: "https://github.com/Quiirky-codes/EchoSight-An-AI-Driven-Wearable-Device-for-the-Visually-Impaired",
    },
    {
      name: "Automated Answer Sheet Evaluation System",
      description:
        "AI-powered system that evaluates handwritten or typed student answers from PDFs and images using Google Gemini, returning structured scores and detailed feedback through prompt engineering and OCR.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Google Vision API",
          color: "green-text-gradient",
        },
        {
          name: "Optical Character Recognition (OCR)",
          color: "pink-text-gradient",
        },
        
        
      ],
      image: answersheet,
      source_code_link: "https://github.com/Quiirky-codes/Answer_Sheet_Evaluation_Bot",
    },
    {
      name: "VerseAI: AI-Powered Document Reader",
      description:
        "Verse is an AI-powered document analysis platform. Upload PDFs, DOCX, or other text files and leverage a Retrieval-Augmented Generation (RAG) pipeline with ChromaDB to get summaries, extract information, and ask complex questions about your documents.",
      tags: [
        {
          name: "React + Vite",
          color: "blue-text-gradient",
        },
        {
          name: "RAG",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        
        
      ],
      image: verseai,
      source_code_link: "https://github.com/Quiirky-codes/Verse_AI_Document_Reader_-_ChatBot",
    },
  ];
  
const experiences = [
  {
    id: "1",
    title: "Engineering Intern",
    company_name: "Hindustan Aeronautics Limited - HAL",
    date: "October 2024 - November 2024",
    points: [
      "Developed a .NET application improving communication for 1,500+ employees, reducing delays by 40%.",
      "Collaborated with a team to resolve network issues with 95% success rate across 3 divisions.",
      "Optimized backend processes, improving operational efficiency by 30% and reducing downtime by 20%.",
    ],
  },
  {
    id: "2",
    title: "Freelance Website Developer",
    company_name: "Nayana Constructions",
    website: "https://nayanaconstructions.com",
    date: "October 2025",
    points: [
      "Built a responsive website using React, Vite, Tailwind CSS, and TypeScript.",
      "Integrated EmailJS for automated client inquiries and improved communication efficiency.",
      "Deployed a fast, SEO-friendly website showcasing company services and projects.",
    ],
  },
  {
    id: "3",
    title: "Freelance AI Proctor",
    company_name: "GeekTrust",
    date: "August 2025 - Present",
    points: [
      "Monitored AI-based technical interviews, ensuring fairness, compliance, and professionalism.",
      "Verified candidate identities and documented any irregularities or technical issues.",
      "Coordinated with AI platforms for smooth interview execution and accurate reporting.",
    ],
  },
];

export { services, technologies, education, certifications, projects,experiences};// };