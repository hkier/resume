//this is the component for the navigation column on the left side of the page
//it is a stateless component
//it is imported into the main.js file
//it is a child of the main.js file

import React from 'react';
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from 'react-bootstrap/Navbar';


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
                <Navbar.Brand smooth to="#home">Howard Kier</Navbar.Brand>
            </div>

            <div className='navStyle'>
                <HashLink smooth to="#about" className='aboutStyle'><AboutIcon fontSize="small" /> About</HashLink>
            </div>

            <div className='navStyle'>
                <HashLink smooth to="#experience" className='experienceStyle'><ExperienceIcon fontSize="small" /> Experience</HashLink>
            </div>

            <div className='navStyle'>
                <HashLink smooth to="#projects" className='projectsStyle'><ProjectsIcon fontSize="small" /> Projects</HashLink>
            </div>

            <div className='navStyle'>
                <HashLink smooth to="#skills" className='skillsStyle'> <SkillsIcon fontSize="small" /> Skills</HashLink>
            </div>

            <div className='navStyle'>
                <HashLink smooth to="#education" className='educationStyle'><EducationIcon fontSize="small" /> Education</HashLink>
            </div>

            <div className='navStyle'>
                <HashLink smooth to="#interests" className='interestsStyle'><InterestsIcon fontSize="small" /> Interests</HashLink>
            </div>

            <div className='navStyle'>
                <HashLink smooth to="#contact" className='contactStyle'><ContactMailIcon fontSize="small" /> Contact Me</HashLink>
            </div>

            <div className='navStyle'>
                <HashLink smooth to="#resume" className='resumeStyle'> <ResumeIcon fontSize="small" /> Resume</HashLink>
            </div>






        </div >
    )
}

export default Sidebar;

