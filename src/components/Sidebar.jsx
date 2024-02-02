//this is the component for the navigation column on the left side of the page
//it is a stateless component
//it is imported into the main.jsx file
//it is a child of the main.jsx file

import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';





// using material ui for the icons
import AboutIcon from '@mui/icons-material/Info';
import ExperienceIcon from '@mui/icons-material/Insights';
import ProjectsIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/Handyman';
import EducationIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ResumeIcon from '@mui/icons-material/Description';





export default function Sidebar({ toggleNav, isSmallScreen }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleNav = () => {
        setIsOpen(!isOpen);
        toggleNav();
    };

    const nop = () => { }

    toggleNav = (toggleNav) ? toggleNav : nop;

    const handleScroll = (targetRef) => {
        const elementId = targetRef.id;
        const content = document.getElementById(elementId);
        if (isSmallScreen) {
            const top = content.offsetTop - 112;
            document.getElementById('scrollable').scrollTo({ top: top, behavior: 'smooth' });
        }
        else
            content.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <ul className={` ${isSmallScreen ? 'nobullet sidebar open' : 'nobullet'}`}>


            <li className='f3 navStyle' >
                <HashLink id='aboutLink'
                    smooth to="#about"
                    onClick={handleToggleNav}
                    scroll={handleScroll}
                    className='aboutStyle'>
                    <AboutIcon fontSize='medium' /> About</HashLink>
            </li>

            <li className='f3 navStyle'>
                <HashLink id='experienceLink'
                    smooth to="#experience"
                    onClick={handleToggleNav}
                    scroll={handleScroll}
                    className='experienceStyle'>
                    <ExperienceIcon fontSize='medium' /> Experience</HashLink>
            </li>

            <li className='f3 navStyle'>
                <HashLink id='projectsLink'
                    smooth to="#projects"
                    onClick={handleToggleNav}
                    scroll={handleScroll}
                    className='projectsStyle'>
                    <ProjectsIcon fontSize='medium' /> Projects</HashLink>
            </li>

            <li className='f3 navStyle'>
                <HashLink id='skillsLink'
                    smooth to="#skills"
                    onClick={handleToggleNav}
                    scroll={handleScroll}
                    className='skillsStyle'>
                    <SkillsIcon fontSize='medium' /> Skills</HashLink>
            </li>

            <li className='f3 navStyle'>
                <HashLink id='educationLink'
                    smooth to="#education"
                    onClick={handleToggleNav}
                    scroll={handleScroll}
                    className='educationStyle'>
                    <EducationIcon fontSize='medium' /> Education</HashLink>
            </li>

            <li className='f3 navStyle'>
                <HashLink id='interestsLink'
                    smooth to="#interests"
                    onClick={handleToggleNav}
                    scroll={handleScroll}
                    className='interestsStyle'>
                    <InterestsIcon fontSize='medium' /> Interests</HashLink>
            </li>

            <li className='f3 navStyle'>
                <HashLink id='contactLink'
                    smooth to="#contact"
                    onClick={handleToggleNav}
                    scroll={handleScroll}
                    className='contactStyle'>
                    <ContactMailIcon fontSize='medium' /> Contact</HashLink>
            </li>

            <li className='f3 navStyle'>
                <HashLink id='resumeLink'
                    smooth to="#resume"
                    onClick={handleToggleNav}
                    scroll={handleScroll}
                    className='resumeStyle'>
                    <ResumeIcon fontSize='medium' /> Resume</HashLink>
            </li>

        </ul >
    )
}



