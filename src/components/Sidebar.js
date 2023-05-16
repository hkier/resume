//this is the component for the navigation column on the left side of the page
//it is a stateless component
//it is imported into the main.js file
//it is a child of the main.js file

import React from 'react';
//import { Link } from 'react-router-dom';
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


const red = '#ff0000';  //about
const pink = '#ee82ee'; //skills
const purple = '#4b0082'; //projects
const indigo = '#0000ff'; //education
const blue = '#0000ff'; //interests
const green = '#008000'; //contact
const lime = '#00ff00'; //experience
const orange = '#ffa500'; //resume







const Sidebar = () => {
    return (
        <div>
            <Navbar className="navStyle" sticky="top">
                <div>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                </div>
                <Nav >
                    <div>
                        <AboutIcon sx={{ color: red }} fontSize="small" />
                        <Nav.Link href="#about" className='aboutStyle' >About</Nav.Link>
                    </div>
                    <div>
                        <ExperienceIcon sx={{ color: lime }} fontSize="small" />
                        <Nav.Link href="#experience" className='experienceStyle'>Experience</Nav.Link>
                    </div>
                    <div>
                        <ProjectsIcon sx={{ color: indigo }} fontSize="small" />
                        <Nav.Link href="#projects" className='projectsStyle'>Projects</Nav.Link>
                    </div>
                    <div>
                        <SkillsIcon sx={{ color: pink }} fontSize="small" />
                        <Nav.Link href="#skills" className='skillsStyle'>Skills</Nav.Link>
                    </div>
                    <div>
                        <EducationIcon sx={{ color: green }} fontSize="small" />
                        <Nav.Link href="#education" className='educationStyle'>Education</Nav.Link>
                    </div>
                    <div>
                        <InterestsIcon sx={{ color: blue }} fontSize="small" />
                        <Nav.Link href="#interests" className='interestsStyle'>Interests</Nav.Link>
                    </div>
                    <div>
                        <ContactMailIcon sx={{ color: purple }} fontSize="small" />
                        <Nav.Link href="#contact" className='contactStyle'>Contact Me</Nav.Link>
                    </div>
                    <div>
                        <ResumeIcon sx={{ color: orange }} fontSize="small" />
                        <Nav.Link href="#resume" className='resumeStyle'>Resume</Nav.Link>
                    </div>


                </Nav>
            </Navbar>


        </div >
    )
}

export default Sidebar;

