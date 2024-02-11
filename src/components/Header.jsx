import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    if (isNavOpen) {
      toggleNav();
    }
  };

  return (
    <Row className='header' xs={12}>
      <div>
        <div className='howardStyle f2'>
          <HashLink smooth to="#home" onClick={closeNav} className='howardStyle'>
            <div>Howard Kier</div>
            <div className='f6'>Developer, Consultant, and Mentor</div>
          </HashLink>
        </div>
        <div className='menuicon'>
          {isSmallScreen ? (
            <>
              <button onClick={toggleNav} className='button'>
                {isNavOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
              {isNavOpen && <Sidebar toggleNav={toggleNav} isSmallScreen={isSmallScreen} />}
            </>
          ) : (
            <Sidebar />
          )}
        </div>
      </div>
    </Row>
  );
}
