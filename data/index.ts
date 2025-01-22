export const navItems = [
    {name: "Home", link: "#home"},
    {name: "Projects", link: "#projects"},
    {name: "Reviews", link: "#reviews"},
    {name: "Bio", link: "#bio"},
    {name: "Contact", link: "#contact"},
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize collaboration to foster open lines of communication",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/bg.png",
        spareImg: "",
    },
    {
        id: 2,
        title: "Flexible in terms of distributed collaboration",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack:",
        description: "I'm constantly learning.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "A detail oriented tech enthusiast",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Learning Go while Building an Olympic Weightlifting Exercise Library(RESTful API)",
        description: "Currently:",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to collaborate?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "(Full-Stack)Project Management Application",
        des: "A project management app that supports timelines, visualizes tasks and projects, aids in collaboration to drive efficiency across teams.",
        img: "/tm.png",
        iconLists: ["/next.svg","/Typescript.svg", "/React.svg", "/Tailwind CSS.svg", "/Node.js.svg", "/Express.svg", "/PostgresSQL.svg"],
        link: "https://github.com/jdav892/pm-exp",
    },
    {
        id: 2,
        title: "(Full-Stack)Chatter",
        des: "Live chat application, utilizing sockets.io to manage the opening and closing of web sockets between users",
        img: "/chat.png",
        iconLists: ["/Vite.js.svg", "/Javascript.svg", "/React.svg", "/Tailwind CSS.svg", "/Node.js.svg", "/Express.svg", "/MongoDB.svg"],
        link: "https://chatter-app-1hc0.onrender.com/",
    },
    {
        id: 3,
        title: "(Automation/Backend)NBA Statistics Web Scraping and Reporting",
        des: "Web crawlers powered by Selenium using Python that email client list with personalized insights",
        img: "",
        iconLists: ["/Selenium.svg", "/Python.svg", "/Flask.svg", "/Docker.svg"],
        link: "https://github.com/jdav892/nbascripts", 
    },
     {
        id: 4,
        title: "(Frontend/ML)Sign Language Translations with Tensorflow",
        des: "Converted a Python Tensorflow model to Tensorflow.js, hosted on IBM cloud to be displayed and interacted with using React.js and the canvas element.",
        img: "/aslapp.png",
        iconLists: ["/Python.svg", "/React.svg", "/Tensorflow.svg"],
        link: "https://github.com/jdav892/asl-with-tensorflow",
    },
     {
        id: 5,
        title: "(Frontend)AI Chatbot Landing Page",
        des: "Handcrafted landing page template for an AI chat bot.",
        img: "/bw.png",
        iconLists: ["/Vite.js.svg", "/Javascript.svg", "/React.svg", "/Tailwind CSS.svg", "/Hostinger.svg"],
        link: "https://brain-wave.zen-testing.com/",
    },
     {
        id: 6,
        title: "(Frontend)Metaverse Gaming Platform Page",
        des: "Template landing page for a Metaverse gaming platform.",
        img: "/zen.png",
        iconLists: ["/Vite.js.svg", "/Javascript.svg", "/React.svg", "/Tailwind CSS.svg", "/Hostinger.svg"],
        link: "https://zen-testing.com/",
    },
    
];


export const reviews = [
    {
        quote:
        "Through our work on a cross platform image compression solution, Justin displayed a type of determined and self starting attitude which can't be ignored. For any company seeking a developer determined to find solutions to their problems, I suggest reaching out to Justin about potential opportunities.",
        name: "Alex Hochheiden",
        title: "Software Engineer - Mozilla"
    },
     {
        quote:
        "Having known him for years through other mediums, getting to know Justin as an engineer while discussing game engine system design was illuminating as to how considerate he is of the minute details that seem hidden to most, yet are as bright as the sun to him.",
        name: "Will Wharton",
        title: "Software Engineer - Opendoor"
    },
     {
        quote:
        "Collaborating with Justin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Justin's enthusiasm for every facet of development truly stands out. If you're seeking a driven and passionate developer, Justin is that developer.",
        name: "Darshay Blount",
        title: "Data Analyst - Disney"
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },  
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/app.svg",
    }, 
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    }, 

];

export const experience = [
    {
        id: 1,
        title: "Frontend Developer",
        desc: "Designed and implemented re-usable UI components for client facing software to drive user engagement, and retention.",
        className: "md:col-span-2",
        thumbnail: "/frontend.svg",
    },
    {
        id: 2,
        title: "Backend Engineer",
        desc: "Created REST API endpoints, and engineered systems of web crawlers to feed databases for analysis and to develop tooling around.",
        className: "md:col-span-2",
        thumbnail: "/network.svg",
    },
    {
        id: 3,
        title: "Full Stack Developer",
        desc: "Planned and implemented and maintained robust web applications from end to end with scalability and stability in mind.",
        className: "md:col-span-2",
        thumbnail: "/bp.svg",
    },
    {
        id: 4,
        title: "Web Developer",
        desc: "Through client outreach, created websites to drive user traffic and prioritized accessibility to push a quality user experience to the forefront.",
        className: "md:col-span-2",
        thumbnail: "/webd.svg",
    },
]

export const socialMedia = [
    {
        id: 1,
        img:"/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];