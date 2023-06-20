//this is the component for the navigation column on the left side of the page
//it is a stateless component
//it is imported into the main.js file
//it is a child of the main.js file

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
        if (targetRef.id) {
          const yOffset = targetRef.offsetTop-112;
          targetRef.scroll({ top: yOffset, left:0, behavior: 'smooth' });
        
        console.log('handleScroll', targetRef, targetRef.id, targetRef.offsetTop,yOffset);
     } };


    return (
        <div className={` ${isSmallScreen ? 'sidebar open' : ''}`}>
            <ul className='nobullet'>

                <div className='navStyle'>
                    <li className='f3'>
                        <HashLink
                            smooth to="#about" onClick={handleToggleNav} className='aboutStyle'><AboutIcon fontSize='medium' /> About


                        </HashLink>
                    </li>
                </div>

                <div className='navStyle'>
                    <li className='f3'>
                        <HashLink
                            smooth to="#experience" onClick={handleToggleNav} scroll={handleScroll} className='experienceStyle'><ExperienceIcon fontSize='medium' /> Experience</HashLink>
                    </li>
                </div>

                <div className='navStyle'>
                    <li className='f3'>
                        <HashLink
                            smooth to="#projects" onClick={handleToggleNav} className='projectsStyle'><ProjectsIcon fontSize='medium' /> Projects
                        </HashLink>
                    </li>
                </div>

                <div className='navStyle'>
                    <li className='f3'>
                        <HashLink
                            smooth to="#skills" onClick={handleToggleNav} className='skillsStyle'> <SkillsIcon fontSize='medium' /> Skills</HashLink>
                    </li>
                </div>

                <div className='navStyle'>
                    <li className='f3'>
                        <HashLink
                            smooth to="#education" onClick={handleToggleNav} className='educationStyle'><EducationIcon fontSize='medium' /> Education</HashLink>
                    </li>
                </div>

                <div className='navStyle'>
                    <li className='f3'>
                        <HashLink
                            smooth to="#interests" onClick={handleToggleNav} className='interestsStyle'><InterestsIcon fontSize='medium' /> Interests</HashLink>
                    </li>
                </div>

                <div className='navStyle'>
                    <li className='f3'>
                        <HashLink
                            smooth to="#contact" onClick={handleToggleNav} className='contactStyle'><ContactMailIcon fontSize='medium' /> Contact</HashLink>
                    </li>
                </div>

                <div className='navStyle'>
                    <li className='f3'>
                        <HashLink
                            smooth to="#resume" onClick={handleToggleNav} className='resumeStyle'> <ResumeIcon fontSize='medium' /> Resume</HashLink>
                    </li>
                </div>
            </ul >
        </div >
    )
}



