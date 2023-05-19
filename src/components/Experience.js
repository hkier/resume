import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images for experience
import IBM from '../images/Experience/IBM.png'
import Disney from '../images/Experience/Disney.png'
import LegacyAnalytics from '../images/Experience/LegacyAnalyticsLogo.png'
import MMP from '../images/Experience/MMP.jpg'
import EDS from '../images/Experience/eds-logo-png-transparent.png'
import Hardesty from '../images/Experience/Hardesty.jpg'



const Experience = () => {
    return (
        <div id='experience'>
            <Navbar className="titlebar" sticky="top">
                <h1>Experience </h1>
            </Navbar>
            <Container >
                <Row>

                    <Col elevation={3}>
                        <img src={IBM} alt="IBM" />
                        <h3>Programmer</h3>
                    </Col>

                    <Col elevation={3}>
                        <img src={EDS} alt="EDS" />
                        <h3>Programmer/Analyst</h3>
                    </Col>

                    <Col elevation={3}>
                        <container>
                            <img src={Disney} alt="Disney" />
                            <h2>Consumer Products Division</h2>
                        </container>
                        <h3>Cast Member</h3>
                        <h4>Backroom Lead</h4>
                        <h4>VoluntEars Representative</h4>
                    </Col>
                </Row>
                <Row>
                    <Col elevation={3}>
                        <img src={LegacyAnalytics} alt="Legacy Analytics" />
                        <h3>Business Consultant</h3>
                    </Col>
                    <Col elevation={3}>
                        <img src={MMP} alt="Magical Moments Photography" />
                        <h3>Owner, CEO, CFO and CIO</h3>
                    </Col>
                    <Col elevation={3}>
                        <img src={Hardesty} alt="Hardesty Hackett" />
                        <h3>Consultant</h3>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Experience