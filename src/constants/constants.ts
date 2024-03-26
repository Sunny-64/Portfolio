import { IEducation, IExperience, IProject } from '@/types';

export const EDUCATION : IEducation[] = [
    {
        startDate: 2023,
        endDate: 2026,
        education: 'BTech',
        course: 'Computer Science & Engineering',
        description: `I am currently a Second year Student pursuing BTech in correspondence. I'm gaining knowledge and experience throughout my graduation.`,
        graduatedFrom: 'St Solider Institute of Engineering and Technology',
        grade: '7.5'
    },
    {
        startDate: 2020,
        endDate: 2023,
        education: 'Diploma',
        course: 'Computer Science & Engineering',
        description: 'I Completed my Diploma in CSE where I learned everything about Tech from scratch with zero knowledge I enrolled into Diploma. Throughout the three years of my journey in Diploma I explored Hackathons, Devfests and participated in a few tech fests.',
        graduatedFrom: 'Mehr Chand Polytechnic College',
        grade: '7.5'
    },
    {
        startDate: 2019,
        endDate: 2020,
        education: 'Matriculation',
        course: null,
        description: 'I completed My 10th class with outstanding A+ grade.',
        graduatedFrom: 'A.P.S Public Senior Secondary School',
        grade: 'A+'
    },
];

export const EXPERIENCE : IExperience [] = [
    {
        company: 'Qservices',
        startDate: 'April 2023',
        endDate: 'Nov 2023',
        experienceType: 'Internship',
        description: 'During my Internship I learned Nodejs and Blockchain and implemented them in several projects. I developed various skills during this internship and developed applications from scratch to hosting and deployment. I practiced React-Native as well during the end of my Internship. ',
        profile: 'Nodejs + Blockchain Developer',
    },
    {
        company: 'O7 Services',
        startDate: 'Aug 2022',
        endDate: 'Feb 2023',
        experienceType: 'Training',
        description: 'During this Training Program of six months I learned MERN stack and worked on a capstone project. I gained knowledge of Javascript thoroughly and leanred frameworks like react-native and expressjs.',
        profile: 'Full Stack Developer'
    },
    {
        company: 'O7 Services',
        startDate: 'July 2022',
        endDate: 'Aug 2022',
        experienceType: 'Industrial Training',
        description: 'In this training program of 6 weeks which is mandatory in the 3rd year of the Diploma I learned about php and developed a minor project using php for college submissions.',
        profile: 'Core PHP'
    },
];

export const PROJECTS : IProject [] = [
    {
        name : 'NFT Marketplace', 
        imageUrl : '/assets/nft-marketplace.png', 
        description : 'NFT Marketplace is a platform where you can mint your own NFT at efficient gas price. You can Sell or Auction the NFT. This project uses Metamask for the transactions.', 
        url : 'https://nft-marketplace-ashy-xi.vercel.app/', 
        github : 'https://github.com/Sunny-64/NFT-marketplace', 
        techStack : 'Reactjs, Nodejs, MongoDB, Solidity, Ethereum, Firebase'
    }, 
    {
        name : 'News App', 
        imageUrl : '/assets/news-app.png', 
        description : 'News App uses a third party API to show the News of various categories and countries. It shows the country specific news with country specific language. The project has a really nice UI with the support of dark mode.', 
        url : 'https://news-app-1vy4.vercel.app/', 
        github : 'https://github.com/Sunny-64/News-App', 
        techStack : 'Reactjs, Nodejs, Tailwind CSS'
    }, 
    {
        name : 'Online Journal', 
        imageUrl : '/assets/online-journal.png', 
        description : 'Online journal is a writing specific platform where users can write their thoughts and share it to others. Users can share their research to other people and journal their entire day.', 
        url : 'https://writejournal.000webhostapp.com/', 
        github : 'https://github.com/Sunny-64/Journal-Project-using-PHP', 
        techStack : 'Php, html, css, js'
    }, 
    // {
    //     name : 'Snappy Stories', 
    //     imageUrl : 'nil', 
    //     description : 'describe the project', 
    //     url : 'url', 
    //     github : 'github link', 
    //     techStack : 'Nodjes, Ejs, OAuth'
    // }, 
    // {
    //     name : 'Secrets', 
    //     imageUrl : 'nil', 
    //     description : 'describe the project', 
    //     url : 'url', 
    //     github : 'github link', 
    //     techStack : 'Reactjs, Nodejs, MongoDB'
    // }, 
]