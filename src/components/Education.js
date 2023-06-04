import React from 'react'
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

//images for education

import Mustang from '../images/Education/Mustang.webp'
import fullstack from '../images/Education/fullstack.webp'
import Syracuse from '../images/Education/SU.webp'


const Education = () => {
    return (
        <div id='education'>
            <Navbar className="titlebar" sticky="top">
                <h1>Education</h1>
            </Navbar>
            <Container >
                <Row>
                    <Col>
                        <Card className="mediumcard">
                            <Row>
                                <Col xs={1}>
                                    <Image src={Syracuse} className='educationImg' alt="Syracuse University" />
                                </Col>
                                <Col xs={11} className='edutext'>
                                    <h2>Syracuse University</h2>
                                </Col>
                            </Row>
                            <Card.Body>
                                <Card.Title>Master of Science, Computer Engineering</Card.Title >
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mediumcard">
                            <Row>
                                <Col xs={1}>
                                    <Image src={Syracuse} className='educationImg' alt="Syracuse University" />
                                </Col>
                                <Col xs={11} className='edutext'>
                                    <h2>Syracuse University</h2>
                                </Col>
                            </Row>
                            <Card.Body>
                                <Card.Title>Bachelor of Science, Computer Engineering</Card.Title >
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mediumcard">
                            <Row>
                                <Col xs={1}>
                                    <Image src={Mustang} className='educationImg' alt="Southern Methodist University" />
                                </Col>
                                <Col xs={11} className='edutext'>
                                    <h2>Southern Methodist University</h2>
                                </Col>
                            </Row>
                            <Card.Body>
                                <Card.Title>Master of Business Administration</Card.Title>
                                <Card.Text>Concentrations: Organizational Behavior and Process Improvement</Card.Text>
                                <Card.Text>Inducted into Beta Gamma Sigma, National Honor Society</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mediumcard">

                            <Row>
                                <Col xs={1}>
                                    <Image src={fullstack} className='educationImg' alt="Fullstack Academ" />
                                </Col>
                                <Col xs={11} className='edutext'>
                                    <h2>Fullstack Academy</h2>
                                </Col>
                            </Row>
                            <Card.Body>
                                <Card.Title>Software Engineering Immersive</Card.Title>
                                <Card.Text>JavaScript, React, Redux, Node.js, Express, PostgreSQL</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Education