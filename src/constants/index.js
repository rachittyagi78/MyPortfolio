import {nugats, lernx, intern } from "../assets/images";

import {
    
    contact,
    css,
    
    java,
    c,
    quiz,
    
    
    
    git,
    github,
    html,
    javascript,
    linkedin,
    rock,
    
    nodejs,
    pricewise,
    react,
    travel,
    
    
    
    tailwindcss,
   
    python,
    cplus,
    tic,
    weather
    
   
    
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: c,
        name: "C language",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: cplus,
        name:"C++",
        type:"Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
   
   
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "C++ Traning",
        company_name: "Internshala",
        icon: intern,
        iconBg: "#accbe1",
        date: "May 2020 - July 2020",
        points: [
            "Completed comprehensive C++ traning program with a focus on mastring the principle of object-oriented programing and software development.",
            "Acquired proficiency in C++ syntax, Data Structure, Algorithms, and Debugging techniques",
        ],
    },
    
    {
        title: "Java Traning",
        company_name: "Lernx",
        icon: lernx,
        iconBg: "#fbc3bc",
        date: "Feb 2021 - April 2022",
        points: [
            "Completed an intensive Java Traning program with a strong focus on mastring the Java programing language and its applications in software devvelopment.",
            "Gained expertise in Core Java concepts,including object-oriented programing , data structure, and multi-threading.",
            "Successfully completed hand-on-project such as [Blood Bank Management System].",
          
        ],
    },
    {
        title: "Front-end Developer",
        company_name: "Nugat Technologies",
        icon: nugats,
        iconBg: "#b7e4c7",
        date: "June 2023 - December 2023",
        points: [
           "My responsibilities at Nugats Technologies included determining the structure and design of web pages and websites, gaining knowledge of React.js and working on Postman API.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rachittyagi78',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rachit-tyagi123/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Clone Website',
        description: 'I led the front-end development of a Amazon website clone, showcasing my HTML and CSS skills. My focus was on creating a visually stunning and responsive user interface. This project has not only honed my technical skills but also expanded my knowledge in creating immersive streaming platforms.',
        link: 'https://github.com/rachittyagi78/Amazon-clon-website',
    },
    {
        iconUrl:tic,
        theme:'btn-back-green',
        
        name: 'TicTacToe Game',
        description: 'Create a simple and interactive Tic-Tac-Toe game using HTML for structure, CSS for styling, and JavaScript for functionality. The game will be a two-player (X and O) version.',
        link: 'https://github.com/rachittyagi78/TicTacToe',
    },
    {
        iconUrl: rock,
        theme: 'btn-back-blue',
        name: 'Rock-Paper_Scissor',
        description: 'Create a web-based Rock, Paper, Scissors game using HTML for structure, CSS for styling, and JavaScript for functionality. The game allows a user to play against the computer, making a choice between rock, paper, or scissors, and then determining the winner based on the rules of the game.',
        link: 'https://github.com/rachittyagi78/rock-paper-scissor',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-pink',
        name: 'Weather App',
        description: 'Develop a weather application using React.js that allows users to check the current weather conditions of a specific location. The app should fetch real-time weather data from a weather API and display it in a user-friendly interface.',
        
    },
    {
        iconUrl: travel,
        theme: 'btn-back-orange',
        name: 'Traveler-Website',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        
    },
    {
        iconUrl: quiz,
        theme: 'btn-back-yellow',
        name: 'Quiz App',
        description: 'Create a basic quiz application using HTML and CSS that allows users to answer a set of questions and receive feedback on their performance. The app should have a clean and user-friendly interface with responsive design.',
        
    }
];