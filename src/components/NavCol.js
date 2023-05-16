//this is the component for the navigation column on the left side of the page
//it is a stateless component
//it is imported into the main.js file
//it is a child of the main.js file

import React from 'react';

// using material ui for the icons
import AboutIcon from '@mui/icons-material/Info';
import ExperienceIcon from '@mui/icons-material/Insights';
import ProjectsIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/Handyman';
import EducationIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ResumeIcon from '@mui/icons-material/Description';

//import { Stack } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';


const red = '#ff0000';  //about
const pink = '#ee82ee'; //skills
const purple = '#4b0082'; //projects
const indigo = '#0000ff'; //education
const blue = '#0000ff'; //interests
const green = '#008000'; //contact
const lime = '#00ff00'; //experience
const orange = '#ffa500'; //resume





const NavCol = () => (
    <MenuList>
        <MenuItem>
            <ListItemIcon>
                <AboutIcon sx={{ color: red }} fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: red }}>About</ListItemText>
        </MenuItem>

        <MenuItem >
            <ListItemIcon>
                <ExperienceIcon  sx={{ color: lime  }} fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: lime  }}>Experience</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <ProjectsIcon sx={{ color: indigo }} fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: indigo }}>Projects</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <SkillsIcon sx={{ color: pink }} fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: pink }}>Skills</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <EducationIcon sx={{ color: green }} fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: green }}>Education</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <InterestsIcon sx={{ color: blue }} fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: blue }}>Interests</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <ContactMailIcon sx={{ color: purple }} fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: purple }}>Contact</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <ResumeIcon sx={{ color: orange }} fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{ color: orange }}>Resume</ListItemText>
        </MenuItem>
    </MenuList>
);

export default NavCol;

