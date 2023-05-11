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
//import Typography from '@mui/material/Typography';

//get all colors from material ui
import { red, pink, purple, indigo, blue, green, lime, orange } from '@mui/material/colors';




const NavCol = () => (
    <MenuList>
        <MenuItem>
            <ListItemIcon>
                <AboutIcon sx={{ color: red[500] }} fontSize="small" />
            </ListItemIcon>
            <ListItemText >About</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <ExperienceIcon sx={{ color: lime[700]  }} fontSize="small" />
            </ListItemIcon>
            <ListItemText >Experience</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <ProjectsIcon sx={{ color: indigo['A700'] }} fontSize="small" />
            </ListItemIcon>
            <ListItemText >Projects</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <SkillsIcon sx={{ color: pink[500] }} fontSize="small" />
            </ListItemIcon>
            <ListItemText >Skills</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <EducationIcon sx={{ color: green[500] }} fontSize="small" />
            </ListItemIcon>
            <ListItemText >Education</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <InterestsIcon sx={{ color: blue[500] }} fontSize="small" />
            </ListItemIcon>
            <ListItemText >Interests</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <ContactMailIcon sx={{ color: purple[500] }} fontSize="small" />
            </ListItemIcon>
            <ListItemText >Contact</ListItemText>
        </MenuItem>

        <MenuItem>
            <ListItemIcon>
                <ResumeIcon sx={{ color: orange[500] }} fontSize="small" />
            </ListItemIcon>
            <ListItemText >Resume</ListItemText>
        </MenuItem>
    </MenuList>
);

export default NavCol;

