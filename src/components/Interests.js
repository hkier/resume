import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';


import shsvip from '../images/SHSVIP.png'
import chihack from '../images/Chihack.png'
import boyScouts from '../images/BoyScouts.jpg'


const Interests = () => {
    return (
        <div>
            <Navbar className="bar" sticky="top"><h1>Interests</h1></Navbar>
            <Container >
                <Row>
                    <Col >
                        <img src={shsvip} alt="VIP" />
                        <h3>Master of Science, Computer Engineering</h3>

                    </Col>
                    <Col >
                        <img src={chihack} alt="Chihacknight" />
                        <h3>Bachelor of Science, Computer Engineering</h3>
                    </Col>
                    <Col >
                        <container>
                            <img src={boyScouts} alt="Boy Scouts" />
                            <h2>Southern Methodist University</h2>
                        </container>
                        <h3>Master of Business Administration</h3>
                        <h4>Concentration in Organizational Behavior</h4>
                        <h4>Concentration in Process Improvement</h4>
                        <h4>Beta Gamma Sigma</h4>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Interests