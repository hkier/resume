//this is the component for the navigation column on the left side of the page
//it is a stateless component
//it is imported into the main.js file
//it is a child of the main.js file

import React from 'react';
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ScrollSpy from "react-ui-scrollspy";


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
                <h2>
                    <HashLink smooth to="#home" className='howardStyle'>Howard Kier</HashLink>
                </h2>
            </div>

            <div className='navStyle'>
                <h3>
                    <HashLink
                    data-to-scrollspy-id='about' 
                    smooth to="#about" className='aboutStyle'><AboutIcon fontSize='medium' /> About</HashLink>
                </h3>
            </div>

            <div className='navStyle'>
                <h3>
                    <HashLink 
                    data-to-scrollspy-id='experience'
                    smooth to="#experience" className='experienceStyle'><ExperienceIcon fontSize='medium' /> Experience</HashLink>
                </h3>
            </div>

            <div className='navStyle'>
                <h3>
                    <HashLink 
                    data-to-scrollspy-id='projects'
                    smooth to="#projects" className='projectsStyle'><ProjectsIcon fontSize='medium' /> Projects</HashLink>
                </h3>
            </div>

            <div className='navStyle'>
                <h3>
                    <HashLink 
                    data-to-scrollspy-id='skills'
                    smooth to="#skills" className='skillsStyle'> <SkillsIcon fontSize='medium' /> Skills</HashLink>
                </h3>
            </div>

            <div className='navStyle'>
                <h3>
                    <HashLink 
                    data-to-scrollspy-id='education'
                    smooth to="#education" className='educationStyle'><EducationIcon fontSize='medium' /> Education</HashLink>
                </h3>
            </div>

            <div className='navStyle'>
                <h3>
                    <HashLink 
                    data-to-scrollspy-id='interests'
                    smooth to="#interests" className='interestsStyle'><InterestsIcon fontSize='medium' /> Interests</HashLink>
                </h3>
            </div>

            <div className='navStyle'>
                <h3>
                    <HashLink 
                    data-to-scrollspy-id='contact'
                    smooth to="#contact" className='contactStyle'><ContactMailIcon fontSize='medium' /> Contact Me</HashLink>
                </h3>
            </div>

            <div className='navStyle'>
                <h3>
                    <HashLink 
                    data-to-scrollspy-id='resume'
                    smooth to="#resume" className='resumeStyle'> <ResumeIcon fontSize='medium' /> Resume</HashLink>
                </h3>
            </div>






        </div >
    )
}

export default Sidebar;

