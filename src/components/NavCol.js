//this is the component for the navigation column on the left side of the page
//it is a stateless component
//it is imported into the main.js file
//it is a child of the main.js file

import React from 'react';

// using material ui for the icons
import AboutIcon from '@mui/icons-material/Info';
import ProjectsIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/Handyman';
import EducationIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ResumeIcon from '@mui/icons-material/Description';

import { Stack } from '@mui/material';

//get all colors from material ui
import { red, pink, purple, deepPurple, blue, green, orange } from '@mui/material/colors';

import Button from '@mui/material/Button';



const NavCol = () => (
    <Stack justifyContent="space-around" spacing={2}>
        <Button variant="contained" href="/about" startIcon={<AboutIcon sx={{ color: red[500] }} />} sx={{background: "#000000"}}>
            About
        </Button>
        <Button variant="contained" href="/projects" startIcon={<ProjectsIcon sx={{ color: orange[500] }} />} sx={{background: "#000000"}}>
            Projects
        </Button>
        <Button variant="contained" href="/skills" startIcon={<SkillsIcon sx={{ color: pink[500] }} />} sx={{background: "#000000"}}>
            Skills
        </Button>
        <Button variant="contained" href="/education" startIcon={<EducationIcon sx={{ color: green[500] }} />} sx={{background: "#000000"}}>
            Education
        </Button>
        <Button variant="contained" href="/interests" startIcon={<InterestsIcon sx={{ color: blue[500] }} />} sx={{background: "#000000"}}>
            Interests
        </Button>
        <Button variant="contained" href="/contact" startIcon={<ContactMailIcon sx={{ color: purple[500] }} />} sx={{background: "#000000"}}>
            Contact
        </Button>
        <Button variant="contained" href="/resume" startIcon={<ResumeIcon sx={{ color: deepPurple[500] }} />} sx={{background: "#000000"}}>
            Resume
        </Button>


    </Stack>
);

export default NavCol;

