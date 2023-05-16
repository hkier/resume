import React from 'react'
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Syracuse from '../images/Syracuse.svg'
import Mustang from '../images/Mustang.png'


const Education = () => {
    return (
        <div>
            <Navbar className="titlebar" sticky="top"><h1>Education</h1></Navbar>
            <Container >
                <Row>

                    <Col elevation={3}>
                        <img src={Syracuse} alt="Syracuse University" />
                        <h3>Master of Science, Computer Engineering</h3>
                    </Col>

                    <Col elevation={3}>
                        <img src={Syracuse} alt="Syracuse University" />
                        <h3>Bachelor of Science, Computer Engineering</h3>
                    </Col>

                    <Col elevation={3}>
                        <container>
                            <img src={Mustang} alt="Southern Methodist University" />
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

export default Education