import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    return (
        <div className="navStyle" >

            <div>
                <h2 className='howardStyle'>
                    <HashLink smooth to="#home" className='howardStyle'>Howard Kier
                        <h6 >Developer, Consultant, and Mentor</h6></HashLink>
                </h2>
            </div>
        </div>
    )
}