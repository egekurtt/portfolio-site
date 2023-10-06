import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGithub
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { SiTailwindcss, SiJavascript, SiFirebase } from "react-icons/si"

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Egemen',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kurt',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Turkish',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Turkey',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+90 507 659 25 09',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ege.kurtt97@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'ege.kurtt',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Turkish, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '10+',
    title: 'Completed <br /> Courses',
  },

  {
    id: 2,
    no: '2+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '4+',
    title: 'Certificate <br /> Received',
  },

  {
    id: 4,
    no: '6 MOS.',
    title: 'Coding <br /> Time',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '11/21 - 08/22',
    title: 'Yener-San İnşaat Turizm Taş. Yay. San. Tic. Ltd. Şti.  <span> Mechanical Engineer </span>',
    desc: 'Laser cutting programming, tracking of bending and welding processes for defense industry companies.',
  },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015 - 2021',
    title: 'Mechanical Engineering Degree <span> Erciyes University </span>',
    desc: '%30 English education. 2.68 Graduate degree.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: '50 HTML CSS JavaScript Projects <span> Udemy </span>',
    desc: "Show Credential: <a href='https://www.udemy.com/certificate/UC-34453b84-f204-4c4a-a35b-0c1c014f9ba3/' target='_blank' rel='noreferrer'>Certificate</a>",
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Beginner Frontend Web Development<span> Patika.dev </span>',
    desc: "Show Credential: <a href='https://academy.patika.dev/certificates/d6ac8ff9' target='_blank' rel='noreferrer'>Certificate</a>",
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: <FaHtml5 className='skills__icon' />,
  },

  {
    id: 2,
    title: 'Css',
    percentage: <FaCss3Alt className='skills__icon' />,
  },

  {
    id: 3,
    title: 'Bootstrap',
    percentage: <FaBootstrap className='skills__icon' />,
  },

  {
    id: 4,
    title: 'Tailwind',
    percentage: <SiTailwindcss className='skills__icon' />,
  },

  {
    id: 5,
    title: 'JavaScript',
    percentage: <SiJavascript className='skills__icon' />,
  },

  {
    id: 6,
    title: 'React',
    percentage: <FaReact className='skills__icon' />,
  },

  {
    id: 7,
    title: 'Firebase',
    percentage: <SiFirebase className='skills__icon' />,
  },

  {
    id: 8,
    title: 'Github',
    percentage: <FaGithub className='skills__icon' />,
  },
];
// export const skills = [
//   {
//     id: 1,
//     title: 'Html',
//     percentage: <FaHtml5 />,
//   },

//   {
//     id: 2,
//     title: 'Javascript',
//     percentage: '89',
//   },

//   {
//     id: 3,
//     title: 'Css',
//     percentage: '70',
//   },

//   {
//     id: 4,
//     title: 'Php',
//     percentage: '66',
//   },

//   {
//     id: 5,
//     title: 'Wordpress',
//     percentage: '95',
//   },

//   {
//     id: 6,
//     title: 'Jquery',
//     percentage: '50',
//   },

//   {
//     id: 7,
//     title: 'Angular',
//     percentage: '65',
//   },

//   {
//     id: 8,
//     title: 'React',
//     percentage: '45',
//   },
// ];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'House Market Place App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Market place mobile app',
      },
      {
        icon: <FiUser />,
        title: 'Type : ',
        desc: 'Practise Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML Css JS React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: "<a href='https://house-market-place-hdvt5hvpr-egekurtt.vercel.app' target='_blank' rel='noreferrer'>Click Here</a>",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Job Consultancy Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Job Consultancy Website',
      },
      {
        icon: <FiUser />,
        title: 'Type : ',
        desc: 'Practise Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS Tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: "<a href='https://shey-hiring-pf9d9a5cp-egekurtt.vercel.app' target='_blank' rel='noreferrer'>Click Here</a>",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'LinkedIn Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'LinkedIn Clone',
      },
      {
        icon: <FiUser />,
        title: 'Type : ',
        desc: 'Clone Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Firebase, Redux',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: "<a href='https://linkedin-clone-tau-hazel.vercel.app' target='_blank' rel='noreferrer'>Click Here</a>",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Disney+ Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Disney+ Clone',
      },
      {
        icon: <FiUser />,
        title: 'Type : ',
        desc: 'Clone Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Firebase, Redux',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: "<a href='https://disney-clone-murex.vercel.app' target='_blank' rel='noreferrer'>Click Here</a>",
      },
    ],
  },

  // {
  //   id: 4,
  //   img: Work4,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: "<a href='https://dribbble.com' target='_blank' rel='noreferrer'>www.dribbble.com</a>",
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: 'Landing Page',
  //   details: [
  //     {
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       title: 'Language : ',
  //       desc: 'React JS, Node JS',
  //     },
  //     {
  //       title: 'Preview : ',
  //       desc: "<a href='https://dribbble.com' target='_blank' rel='noreferrer'>www.dribbble.com</a>",
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: "<a href='https://dribbble.com' target='_blank' rel='noreferrer'>www.dribbble.com</a>",
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
