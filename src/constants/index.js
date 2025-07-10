const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 12, suffix: "+", label: "Completed Projects" },
    { value: 3, suffix: "+", label: "Contributions" },
    { value: 5, suffix: "+", label: "Tech Stack" },    
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "ReactJS",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "NodeJs",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "ThreeJS",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Git",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "ReactJS",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "NodeJs",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "ThreeJS",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Git",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:'I learned how to build an automated ad generation system by combining web crawling to gather real-time sports data, Python for data processing and converting text to speech.',
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Intern",
      date: "Jun 2024 - Jul 2024",
      responsibilities: [
        "Built an Add Maker by using Web Crawling, Python and AWS Polly.",
        "Make Sports Adds by getting data using Web Crawling.",
        "Supervise Implementations of Recommendations.",
      ],
    },
    {
      review:'I learned how to automate data capture from spectrometer readings and structure it efficiently into CSV format, improving data collection and analysis workflows.',
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo3.png",
      title: "Software Intern",
      date: "Jan 2025 - March 2025",
      responsibilities: [
        "Successfully designed and developed software to capture screenshots of spectrometer readings, enhancing our data collection capabilities.",
        "Effectively extracted and structured data into an organized .csv format for further analysis, showcasing their ability to manage complex data sets.",
      ],
    },
    // {
    //   review:
    //     "",
    //   imgPath: "/images/exp3.png",
    //   logoPath: "/images/logo3.png",
    //   title: "Intern",
    //   date: "March 2019 - May 2020",
    //   responsibilities: [
    //     
    //   ],
    // },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  
  
  const socialImgs = [
    {
      name: "github",
      url: "https://github.com/GOATNINJA10",
      imgPath: "/images/git7.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/kshitij-bramhecha-175503243/",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };