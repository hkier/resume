import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

// Material UI icons
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

  const nop = () => {};

  toggleNav = toggleNav ? toggleNav : nop;

  const handleScroll = (targetRef) => {
    const elementId = targetRef.id;
    const content = document.getElementById(elementId);
    if (isSmallScreen) {
      const top = content.offsetTop - 112;
      document.getElementById('scrollable').scrollTo({ top: top, behavior: 'smooth' });
    } else {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ id, to, onClick, scroll, className, icon, label }) => (
    <li className='f3 navStyle'>
      <HashLink id={id} smooth to={to} onClick={onClick} scroll={scroll} className={className}>
        {icon && React.cloneElement(icon, { fontSize: 'medium' })}
        {label}
      </HashLink>
    </li>
  );

  return (
    <ul className={` ${isSmallScreen ? 'nobullet sidebar open' : 'nobullet'}`}>
      <NavLink
        id='aboutLink'
        to='#about'
        onClick={handleToggleNav}
        scroll={handleScroll}
        className='aboutStyle'
        icon={<AboutIcon />}
        label='About'
      />
      <NavLink
        id='experienceLink'
        to='#experience'
        onClick={handleToggleNav}
        scroll={handleScroll}
        className='experienceStyle'
        icon={<ExperienceIcon />}
        label='Experience'
      />
      <NavLink
        id='projectsLink'
        to='#projects'
        onClick={handleToggleNav}
        scroll={handleScroll}
        className='projectsStyle'
        icon={<ProjectsIcon />}
        label='Projects'
      />
      <NavLink
        id='skillsLink'
        to='#skills'
        onClick={handleToggleNav}
        scroll={handleScroll}
        className='skillsStyle'
        icon={<SkillsIcon />}
        label='Skills'
      />
      <NavLink
        id='educationLink'
        to='#education'
        onClick={handleToggleNav}
        scroll={handleScroll}
        className='educationStyle'
        icon={<EducationIcon />}
        label='Education'
      />
      <NavLink
        id='interestsLink'
        to='#interests'
        onClick={handleToggleNav}
        scroll={handleScroll}
        className='interestsStyle'
        icon={<InterestsIcon />}
        label='Interests'
      />
      <NavLink
        id='contactLink'
        to='#contact'
        onClick={handleToggleNav}
        scroll={handleScroll}
        className='contactStyle'
        icon={<ContactMailIcon />}
        label='Contact'
      />
      <NavLink
        id='resumeLink'
        to='#resume'
        onClick={handleToggleNav}
        scroll={handleScroll}
        className='resumeStyle'
        icon={<ResumeIcon />}
        label='Resume'
      />
    </ul>
  );
}
