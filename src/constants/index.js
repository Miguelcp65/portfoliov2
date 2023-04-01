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
  laravelicon
} from '../assets'

const services = [
  {
    title: 'Web Developer',
    icon: webdeveloper,
  },
  {
    title: 'React',
    icon: react,
  },
  {
    title: 'Laravel',
    icon: laravelicon,
  },
  {
    title: 'Team Player',
    icon: teamplayer,
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

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
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
    description: 'A Mobile Aplication of football matches.',
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
    name: 'CookandShare',
    description: 'A Web Aplication for sharing cooking recipes',
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

export { services, technologies, experiences, testimonials, projects }
