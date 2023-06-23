// This component provides the header on a small screen and the sidebar
// on a large screen.  The sidebar is always present on a large screen
// and is only present on a small screen when the menu icon is clicked.
// The sidebar is a separate component that is imported here.


// Import dependencies
import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    // State variables for small screen and nav open
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Use effect hook to set small screen state variable
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 767);
        };

        // Initial check on component mount
        handleResize();

        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // State variable for sidebar open
    const [isOpen, setIsOpen] = useState(false);

    // Function to close sidebar when a link is clicked
    const closeNav = () => {
        if (isNavOpen) {
            setIsOpen(!isOpen);
            toggleNav();
        }

    };

    return (

        <Row className='header' xs={12} >

            <div >
                <div className='howardStyle f2'>
                    <HashLink smooth to="#home" onClick={closeNav} className='howardStyle'><div>Howard Kier</div>
                        <div className='f6' >Developer, Consultant, and Mentor</div></HashLink>

                </div>
                <div className='menuicon'>
                    {isSmallScreen ? (
                        <>
                            <button onClick={toggleNav} className='button'>{isNavOpen ? <CloseIcon /> : <MenuIcon />}</button>
                            {isNavOpen && <Sidebar toggleNav={toggleNav} isSmallScreen={isSmallScreen} />}
                        </>
                    ) : (<Sidebar />)}
                </div>
            </div>

        </Row>
    )
}