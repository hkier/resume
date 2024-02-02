//  This component is used to display the education section of the portfolio
//  It is a child of the App.jsx component.
//  It uses React Bootstrap to create a card with a titlebar and a body.



import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

//images for education

import Mustang from '../images/Education/SMU.webp'
import fullstack from '../images/Education/fullstack.webp'
import Syracuse from '../images/Education/SU.webp'


const Education = () => {
    return (
        <div id='education' className='section'>
            <Navbar className="titlebar" sticky="top">
                <div className='f1'>Education</div>
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
                                    <div className='f2'>Syracuse University</div>
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
                                    <div className='f2'>Syracuse University</div>
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
                                    <div className='f2'>Southern Methodist University</div>
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
                                    <div className='f2'>Fullstack Academy</div>
                                </Col>
                            </Row>
                            <Card.Body>
                                <Card.Title>Software Engineering Immersive</Card.Title>
                                <Card.Text>JavaScript, React, Redux, Node.jsx, Express, PostgreSQL</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Education