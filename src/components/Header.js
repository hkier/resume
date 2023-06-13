import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import Col from 'react-bootstrap/Col';
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


    return (
        <div className="navStyle" >
            <Row>
            <Col>
                <div>
                    <h2 className='howardStyle'>
                        <HashLink smooth to="#home" className='howardStyle'>Howard Kier
                            <h6 >Developer, Consultant, and Mentor</h6></HashLink>
                    </h2>
                </div>
            </Col >
            <Col>
                <div className='menuicon'>
                    {isSmallScreen ? (
                        <>
                            <button onClick={toggleNav}>{isNavOpen ? <CloseIcon/> : <MenuIcon />}</button>
                            {isNavOpen && <Sidebar />}
                        </>
                    ) : (
                        <Sidebar />
                    )}
                </div>
            </Col>
            </Row>
        </div>
    )
}