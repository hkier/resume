// Images for projects
import steve1 from "../images/Projects/Steve1.webp";
import wilderness1 from "../images/Projects/Wilderness1.webp";
import howard from "../images/Projects/howard.webp";
import decarb from "../images/Projects/decarb.webp";
import mmpix from "../images/Projects/mmpix.webp";
import chem from "../images/Projects/chem.webp";
import cash from "../images/Projects/cash.webp";
import scams from "../images/Projects/scams.webp";
import betweenfriends from "../images/Projects/betweenfriends.webp";
import pentest from "../images/Projects/pentest.png";
import comptia from "../images/Projects/comptia.png";

export const projectData = [
  {
    title: "Pentest+ Training",
    imageSrc: pentest,
    description:
      "A simple, easy-to-use penetration testing training website built for CompTia Pentest+ certification. The site is built with Express, React, PostgreSQL, and Vite. The site intentionally contains XSS, SQL Injection, File Inclusion and other vulnerabilities to help students learn how to identify and exploit these vulnerabilities. ",
    liveSiteLink: "",
    repoLink: "",
  },

  {
    title: "CompTia Web Development",
    imageSrc: comptia,
    description: "Developed course material for CompTia's Web Development class. These materials included texts, videos, labs, demonstration, instructor notes and quizzes. Provided recommendations to the sylibus to improve content delivery. The course was designed to help students learn the basics of web development.",
    liveSiteLink: "",
    repoLink: "",
  },
  {
    title: "Decarbonize My State",
    imageSrc: decarb,
    description:
      "Worked with a team of volunteers at ChiHack Night to build a site to help people understand the impact of various personal decisions and policy proposals on the state's carbon emissions. Responsible for the site's look, feel, design, and implementation. Built with React, Python, Recharts, Bootstrap, and more.",
    liveSiteLink: "https://decarbmystate.com/",
    repoLink: "https://github.com/chihacknight/decarbonize-my-state",
  },
  {
    title: "Steven Rosenblum",
    imageSrc: steve1,
    description:
      "Designed, coded, and published a website to support Mr. Rosenblum's 2019 successful candidacy for a seat on the D211 Board of Education. The site was updated in 2023 to reflect his 2023 candidacy. Built with React.",
    archivedSiteLink:
      "https://web.archive.org/web/20220329220847/http://stevenrosenblum.com/",
    repoLink: "//github.com/hkier/steverose",
  },
  {
    title: "Between Friends",
    imageSrc: betweenfriends,
    description:
      "Working as a Code For Chicago volunteer, I assisted Between Friends, a Chicago area domestic violence agency, to update their website. Worked with 3-5 other Code For Chicago volunteers to research the existing site, interview the client, and design and implement a new site.",
    liveSiteLink: "https://betweenfriendschicago.org/",
  },
  {
    title: "Friends of Wilderness Road",
    imageSrc: wilderness1,
    description:
      "Starting with an existing site, I logically reorganized the existing content, added new content, and updated the site's look and feel.",
    liveSiteLink: "https://www.friendsofwildernessroad.info/",
  },
  {
    title: "Magical Moments Photography",
    imageSrc: mmpix,
    description:
      "Responsible for all facets of the website from design to coding to publishing and maintenance. Periodically updated the site to reflect the latest trends in web design.",
    archivedSiteLink:
      "https://web.archive.org/web/20160321143454/http://mmpix.com/",
  },
  {
    title: "ChemCentral",
    imageSrc: chem,
    description:
      "On assignment from EDS to Chemcentral, a chemical distribution company, Designed, Coded and Published ChemCentral's first website.",
    archivedSiteLink:
      "https://web.archive.org/web/19990218105837/http://www.chemcentral.com:80/",
  },
  {
    title: "Cash Management",
    imageSrc: cash,
    description: "Wrote Cash Management which was published by Bookboon.",
    liveSiteLinkAccess: "https://bookboon.com/en/cash-management-ebook",
  },
  {
    title: "Cyber Scams and You",
    imageSrc: scams,
    description:
      "Building on a ChiHack Night project, I wrote a two-volume book, Cyber Scams and You, which was published by Bookboon.",
    liveSiteLinkVolume1:
      "https://bookboon.com/en/cyber-scams-and-you-volume-1-ebook",
    liveSiteLinkVolume2:
      "https://bookboon.com/en/cyber-scams-and-you-volume-2-ebook",
  },
  {
    title: "Howard Kier Portfolio",
    imageSrc: howard,
    description: "This site was built with React and Bootstrap.",
    repoLink: "//github.com/hkier/resume",
  },
];
