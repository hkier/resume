//this is the component for the navigation column on the left side of the page
//it is a stateless component
//it is imported into the main.js file
//it is a child of the main.js file

import React from 'react';
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// using material ui for the icons
import AboutIcon from '@mui/icons-material/Info';
import ExperienceIcon from '@mui/icons-material/Insights';
import ProjectsIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/Handyman';
import EducationIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ResumeIcon from '@mui/icons-material/Description';



const Sidebar = () => {
    return (
        <div className="navStyle" sticky="top">

            <div>
                <Navbar.Brand href="#home">Howard Kier</Navbar.Brand>
            </div>

            <div className='aboutStyle'>
                <Nav.Link href="#about" ><AboutIcon fontSize="small" /> About</Nav.Link>
            </div>

            <div className='experienceStyle'>
                <Nav.Link href="#experience" ><ExperienceIcon fontSize="small" /> Experience</Nav.Link>
            </div>

            <div className='projectsStyle'>
                <Nav.Link href="#projects"><ProjectsIcon fontSize="small" /> Projects</Nav.Link>
            </div>

            <div className='skillsStyle'>
                <Nav.Link href="#skills"> <SkillsIcon fontSize="small" /> Skills</Nav.Link>
            </div>

            <div className='educationStyle'>
                <Nav.Link href="#education"><EducationIcon fontSize="small" /> Education</Nav.Link>
            </div>

            <div className='interestsStyle'>
                <Nav.Link href="#interests"><InterestsIcon fontSize="small" /> Interests</Nav.Link>
            </div>

            <div className='contactStyle'>
                <Nav.Link href="#contact"><ContactMailIcon fontSize="small" /> Contact Me</Nav.Link>
            </div>

            <div className='resumeStyle'>
                <Nav.Link href="#resume"> <ResumeIcon fontSize="small" /> Resume</Nav.Link>
            </div>






        </div >
    )
}

export default Sidebar;

