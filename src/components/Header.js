import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar';
import Comments from './Comments';
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
            <Row className='header' xs={12} sm={2}>

                <div > 
                    <f2 className='howardStyle'>
                        <HashLink smooth to="#home" className='howardStyle'><div>Howard Kier</div>
                            <f6 >Developer, Consultant, and Mentor</f6></HashLink>
                            
                    </f2>



                    <div className='menuicon'>
                        {isSmallScreen ? (
                            <>
                                <button onClick={toggleNav} className='button'>{isNavOpen ? <CloseIcon /> : <MenuIcon />}</button>
                                {isNavOpen && <Sidebar toggleNav={toggleNav} isSmallScreen={isSmallScreen}/>}
                            </>
                        ) : (
                            <Sidebar />
                            
                        )}
                        {isSmallScreen ? ("") : (<Comments />)}
                    </div>
                </div>

            </Row>
        </div>
    )
}