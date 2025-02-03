// Import experience images
import IBMImage from '../images/Experience/IBM.webp';
import DisneyImage from '../images/Experience/Disney.webp';
import LegacyAnalyticsImage from '../images/Experience/LegacyAnalyticsLogo.webp';
import MMPImage from '../images/Experience/MMP.webp';
import EDSImage from '../images/Experience/eds-logo-png-transparent.webp';
import HardestyImage from '../images/Experience/Hardesty.webp';
import FreelanceImage from '../images/Experience/freelance.webp';
import D211Image from '../images/Experience/D211.webp';
import comptia from '../images/Projects/comptia.png';

export const experiences = [
  {
    image: comptia,
    title: 'Pentest+ Website',
    duration: '10 month project',
    responsibilities: [
      'Designed, created and implimented a simple, easy-to-use penetration testing training website built for CompTia Pentest+ certification',
      'Built with Express, React, PostgreSQL, and Vite',
      'The site intentionally contains XSS, SQL Injection, File Inclusion and other vulnerabilities to help students learn how to identify and exploit these vulnerabilities',
    ],
  },
  {
    image: comptia,
    title: 'CompTia Web Development',
    duration: '5 month project',
    responsibilities: [
      'Developed course material for CompTia\'s Web Development class. These materials included texts, videos, labs, demonstration, instructor notes and quizzes',
      'Provided recommendations to the sylibus to improve content delivery',
    ],
  },
    {
      image: FreelanceImage,
      title: 'Web Developer and Consultant',
      duration: '5 years of experience',
      responsibilities: [
        'Partnered with clients to determine project requirements and delivered high-quality results on-time and within budget',
        'Developed websites for various clients, including a campaign website for a local Board of Education candidate',
        'Created website requirements, developed database architechture and preliminary website design (currently under NDA)',
        'Updated and migrated websites for non-profit organizations to a content management system',
      ],
    },
    {
      image: IBMImage,
      title: 'Programmer',
      duration: '11 years of experience',
      subRole: 'Technical Support',
      responsibilities: [
        'Provided product support for OfficeVision/MVS by resolving technical problems and customer inquiries',
        'Coordinated, customized, and documented the installation of APL2; analyzed system failures; interfaced with other teams when needed',
        'Consolidated, combined, and documented local modifications, yielding lower maintenance costs and higher reliability',
        'Proactively resolved problems before impacting the customer, and assessed new product requirements',
      ],
    },
    {
      image: EDSImage,
      title: 'Programmer/Analyst',
      duration: '10 years of experience',
      subRole: 'Business Analyst/Consultant/Programmer',
      responsibilities: [
        'Proactively resolved client’s problems (Sales order processing, Inventory, Financial, EDI, and Payroll) using Life Cycle Methodologies and continuous improvement',
        'Performed competitive analysis, determined costs and set prices for EDS’ data network services products',
        'Assessed relationship between computer system and business needs identifying savings of nearly 20%',
        'Developed and implemented interface between client\'s system and their bank, providing a positive pay system to prevent fraudulent checks',
        'Applied Software Life Cycle processes to the development of numerous new and existing programs to meet user requirements',
      ],
    },
    {
      image: MMPImage,
      title: 'Owner, CEO, CFO and CIO',
      duration: '12 years of experience',
      responsibilities: [
        'Performed competitor and market analysis on products, services, and pricing twice a year',
        'Assessed financial performance of the business, creating budget, balance sheets, cash flows, and P&L statements twice a year',
        'Worked closely with clients to clarify requirements, expectations, and offer solutions',
        'Designed, implemented, and maintained website along with uploading event files on a weekly basis',
      ],
    },
    {
      image: LegacyAnalyticsImage,
      title: 'Business Consultant',
      duration: '2 years of experience',
      responsibilities: [
        'Analyzed current business status (financials, operations, personnel, and systems) to identify problems',
        'Presented improvement recommendations and implemented the changes for companies in various industries',
        'Determined Key Performance Indicators (KPIs) and trained client executives in the effective use of management systems',
        'Organized employees into logical departments to improve communication, reduce errors, and minimize organizational dysfunction',
      ],
    },
    {
      image: HardestyImage,
      title: 'Consultant',
      duration: '2 years of experience',
      responsibilities: [
        'Analyzed current business status (financials, operations, personnel, and systems) to identify problems',
        'Presented improvement recommendations and implemented the changes for companies in various industries',
        'Accurately analyzed work processes, systems, organizational function, and structures',
        'Generated measurable benefits resulting in an average of $125K savings per year per client',
        'Prepared written and oral feedback, presentation materials, critiques, systems documentation, process descriptions, proposals, standard operating procedures, evaluations, data summaries, and reports',
      ],
    },
    {
      image: DisneyImage,
      title: 'Cast Member (part-time)',
      subRole: 'Consumer Products Division',
      duration: '9 years of experience',
      responsibilities: [
        'Backroom Lead responsible for maintaining inventory and restocking shelves as needed',
        'VoluntEars Representative organized and participated in events to benefit various children\'s charities',
        'Trained new Cast Members in all facets of store operations and guest service',
        'Provided guest service in the form of answering questions, locating merchandise, and resolving guest issues',
        'Assisted in the opening and closing of the store',
        'Awarded Store Teamwork Award',
      ],
    },
    {
      image: D211Image,
      title: 'Substitute Teacher',
      duration: '3 years of experience',
      responsibilities: [
        'Substitute teacher for grades 9-12',
        'Provided instruction and tutoring in Math, Science, English, Social Studies, and Physical Education',
        'Proctored tests and quizzes',
        'Maintained classroom decorum',
      ],
    },
  ];