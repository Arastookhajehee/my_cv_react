const cvData = [
  {
    category: "Professional Experience",
    year: 2023,
    current: true,
    month: "October",
    title: "BIM Consultant",
    // author: "Arastoo Khajehee",
    description:
      "BIM implementation in projects with complex structures and non-standard facades.",
    location: "Vicc Ltd., Tokyo, Japan",
  },
  {
    category: "Professional Experience",
    year: 2023,
    current: true,
    month: "October",
    title: "Project Academic Specialist (Part-time)",
    // author: "Arastoo Khajehee",
    description:
      "Research on interactive design and fabrication interfaces for human-human and human-robot real-time collaboration.",
    location: "The University of Tokyo, Japan",
  },
  {
    category: "Professional Experience",
    year: 2022,
    current: false,
    month: "",
    title: "Software Development and Programming for Grasshopper and Revit",
    // author: "Arastoo Khajehee",
    description:
      "Developing software for parametric design and BIM applications.",
    location: "PO, LLC, Tokyo, Japan",
  },
  {
    category: "Professional Experience",
    year: 2019,
    current: false,
    month: "",
    title: "Compulsory Military Service",
    // author: "Arastoo Khajehee",
    description:
      "18 months of obligatory service at Engineering Unit of Police Force",
    location: "Sistan and Baluchestan Province, Iran",
  },
  {
    category: "Professional Experience",
    year: 2017,
    current: false,
    month: "",
    title: "Researcher and Translator",
    // author: "Arastoo Khajehee",
    description:
      "Translating texts and research in the field of architecture and urbanism.",
    location: "Tehran Urban Innovation Center, Iran",
  },
  {
    category: "Professional Experience",
    year: 2016,
    current: false,
    month: "",
    title: "Architectural Design Internship",
    // author: "Arastoo Khajehee",
    description:
      "",
    location: "Zandigan Architecture and Preservation Firm, Tehran, Iran",
  },
  {
    category: "Professional Experience",
    year: 2013,
    current: false,
    month: "",
    title: "Environment Designer & Modeling Technician",
    // author: "Arastoo Khajehee",
    description:
      "",
    location: "Wonderful Dream Animation Studio, Kerman, Iran",
  },
  {
    category: "Education",
    year: 2022,
    month: "September",
    title: "Master's Degree in Media and Governance",
    // author: "Arastoo Khajehee",
    description:
      "",
    location: "Graduate School of Media and Governance, Shonan Fujisawa Campus (SFC), Keio University, Japan",
  },
  {
    category: "Education",
    year: 2016,
    month: "October",
    title: "Bachelor's Degree in Architectural Engineering",
    // author: "Arastoo Khajehee",
    description:
      "",
    location: "Shahid Bahonar University of Kerman, Iran",
  },
  {
    category: "Education",
    year: 2011,
    month: "October",
    title: "Diploma in Physics and Mathematics",
    // author: "Arastoo Khajehee",
    description:
      "",
    location: "Boo-Ali Private High School, Kerman, Iran",
  },
  {
    category: "Honors, Awards, and Grants",
    year: 2022,
    month: "October",
    title: "Excellent Graduate Student Project Presentation Award",
    // author: "Arastoo Khajehee",
    description:
      "",
    location: "Architectural Informatics Society Student Review 2021, Japan",
  },
  {
    category: "Honors, Awards, and Grants",
    year: 2025,
    month: "",
    title: "Best Workshop Award",
    author: "Arastoo Khajehee and Nicolas Rogeau",
    description:
      "Awarded for the workshop 'Collaborative Robotic Assemebly' at the 30th Computer-Aided Architectural Design Research in Asia (CAADRIA) Conference",
    location: "The Unvivesity of Tokyo, Japan, 2025",
  },
  {
    category: "Honors, Awards, and Grants",
    year: 2022,
    month: "October",
    title: "Selected as the Best Student Project in the Class",
    // author: "Arastoo Khajehee",
    description:
      "Applied Environmental Design (Green Architectural Design)",
    location: "Presented at Keio SFC Super-Review Session to the School Faculty, Japan",
  },
  {
    category: "Honors, Awards, and Grants",
    year: 2021,
    month: "October",
    title: "Taikichiro Mori Memorial Research Grant",
    // author: "Arastoo Khajehee",
    description:
      "Graduate Student Researcher Development Grant",
    location: "Keio University, Japan",
  },
  {
    category: "Honors, Awards, and Grants",
    year: 2021,
    month: "October",
    title: "Design Competition Honorable Mention",
    // author: "Arastoo Khajehee",
    description:
      "International Architectural Design Studio Competition",
    location: "AIAC 2021 - Atelier International d'Architecture Construite, France",
    link: "https://aiacconcours.wixsite.com/2021/award"
  },
  {
    category: "Honors, Awards, and Grants",
    year: 2021,
    month: "October",
    title: "Selected as the Best Student Project in the Class",
    // author: "Arastoo Khajehee",
    description:
      "Applied Environmental Design (Architecture and Landscape Design)",
    location: "Presented at Keio SFC Super-Review Session to the School Faculty, Japan",
  },
  {
    category: "Honors, Awards, and Grants",
    year: 2021,
    month: "October",
    title: "Mitsubishi Corporation International Scholarship",
    // author: "Arastoo Khajehee",
    description:
      "2 years of scholarship for master's degree students",
    location: "Keio University, Japan",
  },
  {
    category: "Honors, Awards, and Grants",
    year: 2020,
    month: "October",
    title: "Keio University Degree Completion Scholarship",
    // author: "Arastoo Khajehee",
    description:
      "Keio Research Encouragement Scholarship (Payment Not Received Due to Conflict with other Scholarships)",
    location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2023,
    month: "October",
    title: "RemoSharp: Exploring Solutions for Remote Real-Time Collaboration in Computational Design",
    author: "A. Khajehee, Y. Ikeda and JL. Garcia del Castillo y Lopez",
    description:
      "Proceedings of the 28th Computer-Aided Architectural Design Research in Asia (CAADRIA) Conference: Human-Centric",
    link: "https://doi.org/10.52842/conf.caadria.2023.1.443",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2023,
    month: "October",
    title: "Kigumi Shelf by Data-Driven Circular Saw: Integrated Development of Design Construction and Tool for Digital Handcraft",
    author: "T. Yabe, A. Khajehee, S. Kimura, S. Tanaka, K. Iwamoto, K. Ito, R. Yamanaka, E. Sumitomo, and Y. Ikeda",
    description:
      "Proceedings of the 28th Computer-Aided Architectural Design Research in Asia (CAADRIA) Conference: Human-Centric",
    link: "https://doi.org/10.52842/conf.caadria.2023.1.343",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2023,
    month: "October",
    title: "Process Simulation for Enhancing Self-Supporting Printability in 3D Curvature-Oriented Clay Form Printing with an Additional-Axis Base",
    author: "X. Lu, Y. Ikeda, A. Khajehee, and K. Ito",
    description:
      "IASS Annual Symposium 2023 Integration of Design and Fabrication",
    link: "https://doi.org/10.52842/conf.caadria.2023.2.159",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2023,
    month: "October",
    title: "Computational Design Thinking: An Integrated Education Approach with Shell Structure Design",
    author: "Y. IKeda and A. Khajehee",
    description:
      "IASS Annual Symposium 2023 Integration of Design and Fabrication",
    link: "https://bit.ly/4abzlaE",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2023,
    month: "October",
    title: "Development of a Management System for Digital Construction of Non-Standardized Units design",
    author: "X. Lu, A. Khajehee, K. Iwamoto, S. Nakamura, and Y. Ikeda",
    description:
      "Proceedings of the 6th ICCEA Conference",
    link: "",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2022,
    month: "October",
    title: "Development of an Affordable On-Site Wood Craft System: Interactive Fabrication via Digital Tools",
    author: "A. Khajehee, T. Yabe, X. Lu, J. Liu, and Y. Ikeda",
    description:
      "Proceedings of the 27th Computer-Aided Architectural Design Research in Asia (CAADRIA) Conference, Sydney, 2022",
    link: "",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2022,
    month: "October",
    title: "Smart Hand for Digital Twin Timber Work -The interactive procedural scanning by industrial arm robot",
    author: "C. Sukegawa, A. Khajehee, T. Kawakami, S. Someya, Y. Hirano, M. Shibuya, K. Ito, Y. Watanabe, Q. Wang, T. Inaba, A. Lee, K. Hotta, M. Miyaguchi, and Y. Ikeda",
    description:
      "Proceedings of the 27th Computer-Aided Architectural Design Research in Asia (CAADRIA) Conference, Sydney, 2022",
    link: "",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2014,
    month: "October",
    title: "The alphabet of designing arts: The theoretical foundation of visual thinking and visual language",
    author: "Towhidi A. & Khajehee A.",
    description:
      "Proceedings of the First International Conference on Sustainable Urban Structure",
    link: "",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2025,
    month: "March",
    title: "Collaborative Exploration of Complex Design Spaces: Integrating constraints from two remote robotic setups",
    author: "A. Khajehee, N. Rogeau, M. Abdelaziz, A. Kotov, R. Starke, I. Vukorep, and Y. Ikeda",
    description:
      "Proceedings of the 30th Computer-Aided Architectural Design Research in Asia (CAADRIA) Conference, Tokyo, 2025",
    link: "https://papers.cumincad.org/data/works/att/caadria2025_282.pdf",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2025,
    month: "March",
    title: "AR-Driven Reconfiguration of a Triangular Wood Shell: Designing from a limited stock of elements",
    author: "L. Hamm, N. Rogeau, A. Khajehee, I. Mach, O. Englhardt, K. Fujita, and Y. Ikeda",
    description:
      "Proceedings of the 30th Computer-Aided Architectural Design Research in Asia (CAADRIA) Conference, Tokyo, 2025",
    link: "https://papers.cumincad.org/data/works/att/caadria2025_555.pdf",
    // location: "Keio University, Japan",
  },
  {
    category: "Publications",
    year: 2025,
    month: "March",
    title: "GPU-Accelerated Collision-Free Path Planning for Multi-Axis Robots in Construction Automation",
    author: "I. Vukorep, A. Starke, A. Khajehee, N. Rogeau, Y. Ikeda",
    description:
      "Proceedings of the 42nd International Symposium on Automation and Robotics in Construction (ISARC), Montreal, Canada",
    link: "",
    // location: "Keio University, Japan",
  },
  {
    category: "Certifications",
    year: 2022,
    month: "March",
    title: "KUKA Industrial Robot Arm Programmer 1 Certificate",
    // author: "I. Vukorep, A. Starke, A. Khajehee, N. Rogeau, Y. Ikeda",
    description:
      "",
    link: "",
    // location: "Keio University, Japan",
  },
  {
    category: "Certifications",
    year: 2021,
    month: "March",
    title: "KUKA Industrial Robot Arm Operator Certificate",
    // author: "I. Vukorep, A. Starke, A. Khajehee, N. Rogeau, Y. Ikeda",
    description:
      "",
    link: "",
    // location: "Keio University, Japan",
  },
  {
    category: "Academic Activities and Memberships",
    year: 2022,
    month: "March",
    title: "Keio SFC Ikeda-Lab Teaching Assistant",
    // author: "I. Vukorep, A. Starke, A. Khajehee, N. Rogeau, Y. Ikeda",
    description:
      "Student Member at Architectural Informatics Society",
    link: "",
    // location: "Keio University, Japan",
  },
  {
    category: "Academic Activities and Memberships",
    year: 2020,
    current: true,
    month: "March",
    title: "Contributor and Coach at ParametricCamp YouTube and Discord Channels",
    // author: "I. Vukorep, A. Starke, A. Khajehee, N. Rogeau, Y. Ikeda",
    description:
      `ParametricCamp is an international community aimed for providing high
       quality free education in Computational Design, Robotic Fabrication, and
       Other Digital Architecture Tools.`,
    link: "https://www.youtube.com/c/ParametricCamp",
    // location: "Keio University, Japan",
  },
];

export default cvData;
