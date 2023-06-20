import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const closeNav = () => {
        console.log('NEW Header', isOpen, isNavOpen);
        if (isNavOpen) {
            setIsOpen(!isOpen);
            toggleNav();
        }

    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="navStyle" >
            <Row className='header' xs={12} sm={2}>

                <div >
                    <div className='howardStyle f2'>
                        <HashLink smooth to="#home" onClick={closeNav} className='howardStyle'><div>Howard Kier</div>
                            <f6 >Developer, Consultant, and Mentor</f6></HashLink>
                    </div>
                </div>
            </Row>
        </div>
    )
}