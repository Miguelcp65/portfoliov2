import {
  react,
  teamplayer,
  webdeveloper,
  javascript,
  html,
  css,
  bootstrap,
  php,
  laravellogo,
  reactjs,
  nodejs,
  josefaobidos,
  estg,
  materialui,
  portfoliov1,
  fitnessapp,
  jobsapp,
  mysql,
  expressjs,
  footballapp,
  cookandshare,
  wineculture,
  laravelicon,
  abakos,
  clockApp,
  kotlinIcon,
  kotlin,
  listtelf
} from '../assets'

const services = [
  {
    title: 'Software Developer',
    icon: webdeveloper,
  },
  {
    title: 'React Native',
    icon: react,
  },

  {
    title: 'Kotlin',
    icon: kotlinIcon,
  },
  {
    title: 'React',
    icon: react,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Material UI',
    icon: materialui,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'React Native',
    icon: reactjs,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Laravel',
    icon: laravellogo,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: expressjs,
  },
  
]

const experiences = [
  {
    title: 'Professional Technical Course in Management and Programming of Computer Systems',
    company_name: 'Escola Básica e Secundária Josefa de Óbidos',
    icon: josefaobidos,
    iconBg: '#E6DEDD',
    date: 'September 2016 - August 2019',
  },
  {
    title: 'CTESP in Web Development and Multimedia',
    company_name: 'Instituto Politécnico de Leiria (ESTG)',
    icon: estg,
    iconBg: '#383E56',
    date: 'September 2019 - July 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Degree in Computer Science',
    company_name: 'Instituto Politécnico de Leiria (ESTG)',
    icon: estg,
    iconBg: '#383E56',
    date: 'September 2021 - present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const projects = [
  {
    name: 'Abakos (In Progress)',
    description:
      'A mobile app with multiple tools to assist financial decisions.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
    ],
    image: abakos,
    source_code_link: 'https://github.com/Miguelcp65/Abakos',
    demo_link: '#',
  },
  {
    name: 'Lista Telefónica',
    description:
      'A simple mobile app that display some contacts stored on a database.',
    tags: [
      {
        name: 'Kotlin',
        color: 'blue-text-gradient',
      },
    ],
    image: listtelf,
    source_code_link: 'https://github.com/Miguelcp65/ListaTelefonica',
    demo_link: '#',
  },
  {
    name: 'clockApp',
    description:
      'A simple mobile app that display the current date and time.',
    tags: [
      {
        name: 'Kotlin',
        color: 'blue-text-gradient',
      },
    ],
    image: clockApp,
    source_code_link: 'https://github.com/Miguelcp65/ClockApp',
    demo_link: '#',
  },
  {
    name: 'Jobs App',
    description: 'A Mobile Aplication for people looking for a job.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
    ],
    image: jobsapp,
    source_code_link: 'https://github.com/Miguelcp65/JobsApp',
    demo_link: '#',
  },
  {
    name: 'Football App',
    description: 'A Mobile Aplication of football matches results.',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
    ],
    image: footballapp,
    source_code_link: 'https://github.com/Miguelcp65/footballapp',
    demo_link: '#',
  },
  {
    name: 'Fitness App',
    description:
      'Website that allows users to search for gym exercises with specific details.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'green-text-gradient',
      },
    ],
    image: fitnessapp,
    source_code_link: 'https://github.com/Miguelcp65/FitnessApp',
    demo_link: 'https://fitness-app-mu-three.vercel.app/',
  },
  {
    name: 'Portfolio V1',
    description: 'The first version of my website Portfolio showcase.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: portfoliov1,
    source_code_link: 'https://github.com/Miguelcp65/Portfolio',
    demo_link: 'https://portfolio-v1-gilt-six.vercel.app/',
  },
  {
    name: 'WineCulture',
    description: 'A Web Aplication of wine production in Portugal.',
    tags: [
      {
        name: 'Laravel',
        color: 'pink-text-gradient',
      },
    ],
    image: wineculture,
    source_code_link: 'https://github.com/Miguelcp65/WineCulture',
    demo_link: '#',
  },
  {
    name: 'Cookandshare',
    description: 'A Web Aplication for sharing cooking recipes online',
    tags: [
      {
        name: 'PHP',
        color: 'pink-text-gradient',
      },
    ],
    image: cookandshare,
    source_code_link: 'https://github.com/Miguelcp65/cookandshare',
    demo_link: '#',
  },
]

export { services, technologies, experiences, projects }
