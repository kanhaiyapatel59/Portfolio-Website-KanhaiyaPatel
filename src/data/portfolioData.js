const portfolioData = {
  profile: {
    name: 'Kanhaiya Patel',
    title: 'Full Stack Developer',
    taglines: ['Full Stack Developer', 'Problem Solver'],
    heroBadge: 'Open to opportunities',
    heroDescription:
      'I’m a passionate software developer who enjoys building modern, user-friendly, and reliable digital solutions. I turn complex ideas into simple, efficient, and scalable applications. With experience in frontend development, backend systems, I create high-quality products that are both functional and impactful.',
    aboutTitle: 'About Me',
    aboutDescription:
      "I'm a full stack developer with a strong foundation in modern JavaScript ecosystems. I love building products that are fast, accessible, and delightful to use.",
    aboutBody:
      'With hands-on experience across the full stack, I focus on writing maintainable code, building intuitive interfaces, and delivering real business value. I thrive in collaborative environments and enjoy taking ownership from idea to deployment.',
    stats: [
      { label: 'Years Experience', value: '0+' },
      { label: 'Projects Shipped', value: '8+' },
      { label: 'Happy Clients', value: '0+' },
      
    ],
    contactTitle: "Let's build something great together.",
    contactDescription:
      "Whether you have a project in mind, a role to fill, or just want to connect — my inbox is always open.",
    email: 'kanhaiya383@gmail.com',
    phone: '+91 9153965327',
    location: 'India • Remote Friendly',
    github: 'https://github.com/kanhaiyapatel59',
    linkedin: 'https://www.linkedin.com/in/kanhaiya-patel-1490b6324/',
    resumeUrl: 'https://example.com/resume.pdf',
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQHolcai3ZrOqQ/profile-displayphoto-scale_400_400/B4EZmJuzIIIQAg-/0/1758952371324?e=1784764800&v=beta&t=hu0MbGmTOS-wrKBC5eK3AxKvECGdK4ZTVOxmtRSp4hA',
  },

  skills: [
    { id: 's1', name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E', category: 'Language' },
    { id: 's2', name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6', category: 'Language' },
    { id: 's3', name: 'React', icon: 'SiReact', color: '#61DAFB', category: 'Frontend' },
    { id: 's4', name: 'Next.js', icon: 'SiNextdotjs', color: '#ffffff', category: 'Frontend' },
    { id: 's5', name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4', category: 'Styling' },
    { id: 's6', name: 'Node.js', icon: 'SiNodedotjs', color: '#339933', category: 'Backend' },
    { id: 's7', name: 'Express', icon: 'SiExpress', color: '#ffffff', category: 'Backend' },
    { id: 's8', name: 'MongoDB', icon: 'SiMongodb', color: '#47A248', category: 'Database' },
    { id: 's9', name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1', category: 'Database' },
    { id: 's10', name: 'AWS', icon: 'SiAmazonwebservices', color: '#FF9900', category: 'Cloud' },
    { id: 's11', name: 'Docker', icon: 'SiDocker', color: '#2496ED', category: 'DevOps' },
    { id: 's12', name: 'Git', icon: 'SiGit', color: '#F05032', category: 'Tools' },
  ],

  projects: [
    {
      id: 'p1',
      title: 'Online Food Ordering System',
      description: 'A full-stack food delivery platform with secure authentication and real-time order management.',
      techStack: ['React', 'Node.js', 'Express.js' , 'JWT Authentication' , 'MongoDB'],
      highlights: [
        'Built a full-stack food ordering application with secure JWT authentication and role-based user access.',
        'Developed real-time order tracking and an admin dashboard to manage users, orders, and analytics.',
        'Designed a responsive, user-friendly interface for seamless food browsing, ordering, and order management.',
      ],
      githubUrl: 'https://github.com/kanhaiyapatel59/food-website',
      liveUrl: 'https://foody-ham-frontend.vercel.app',
      image: 'https://img.magnific.com/premium-vector/delicious-food-menu-landing-page-template-homepage-design_631465-116.jpg',
    },
    {
      id: 'p2',
      title: 'Campus Ambulance Tracker',
      description: 'A web-based emergency response system for faster ambulance dispatch and real-time request management.',
      techStack: ['Spring Boot', 'Java', 'MySQL', 'HTML', 'CSS'],
      highlights: [
        'Developed a campus emergency management platform to streamline ambulance requests and improve response coordination.',
        'Implemented real-time ambulance tracking, enabling users to monitor vehicle location and estimated arrival time.',
        'Built an admin panel to manage emergency requests, ambulance availability, and user records efficiently.',
      ],
      githubUrl: 'https://github.com/kanhaiyapatel59/campus-ambulance-tracker',
      liveUrl: 'https://example.com',
      image: 'https://trinetrawireless.com/wp-content/uploads/2017/12/Emergency-Medical-Services.jpg',
    },
    {
      id: 'p3',
      title: 'Event Registration System',
      description: 'A full-stack web application for managing event registrations with secure user authentication and an intuitive registration workflow.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: [
        'Developed a responsive platform for users to browse and register for events.',
        'Implemented secure authentication and efficient registration management.',
        'Built a scalable backend with REST APIs and database integration for reliable data handling.',
      ],
      githubUrl: 'https://github.com/kanhaiyapatel59/Event-Registration',
      liveUrl: 'https://example.com',
      image: 'https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2023/11/event-reg-form-templates.webp',
    },
  ],

  timeline: [
    {
      id: 't1',
      type: 'INTENRNSHIP',
      title: 'Full Stack Developer',
      organization: 'Bettter Tomorrow',
      period: '2025 ',
      description: [ 'Built a MERN stack food delivery platform with secure authentication and a responsive user interface.',
'Implemented JWT authentication and real-time order tracking for a seamless user experience.',
'Developed an admin dashboard to manage users, orders, and platform operations efficiently.',
'Optimized REST APIs and MongoDB queries to deliver fast, reliable application performance.' ],
    },
  ],


  certifications: [
    { id: 'c1', title: 'Meta Front-End Developer', provider: 'Coursera / Meta', year: '2024' },
    { id: 'c2', title: 'Node.js Application Development', provider: 'OpenJS Foundation', year: '2023' },
    { id: 'c3', title: 'MongoDB for JavaScript Developers', provider: 'MongoDB University', year: '2023' },
    { id: 'c4', title: 'AWS Cloud Practitioner', provider: 'Amazon Web Services', year: '2024' },
  ],

  achievements: [
    { id: 'a1', title: 'Freshathon Winner 🏆', detail: '3rd place  at FRSHathon 3.0  with 70+ participants.' },
    { id: 'a2', title: '1st Prize -Mini Project EXPO Winner 🏆', detail: 'Awarded First Prize for developing an innovative, real-world solution that demonstrated technical excellence, creativity, and practical impact.' },
    { id: 'a3', title: 'First Runner-AIML Hackathon', detail: 'Secured Second Place by developing an innovative AI/ML solution to address a real-world problem through teamwork and technical expertise.' },
  ],
};

export default portfolioData;
