import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import resumePdf from '../files/kier.pdf'

const Resume = () => {
    return (
        <div id="resume">
            <Navbar className="titlebar" sticky="top">
                <h1>Resume</h1>
            </Navbar>
            <div>
                <object data={resumePdf} type="application/pdf" width="100%" height="800px">
                </object>
            </div>
        </div>
    )
}

export default Resume
