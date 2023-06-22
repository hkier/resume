import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import github from '../images/Contact/github.webp'
import linkedin from '../images/Contact/linkedin.webp'
import Email from '../images/Contact/email.webp'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';








const Contact = () => {
    return (
        <div id='contact'  className='section'>
            <Navbar className="titlebar" sticky="top">
                <div className='f1'>Contact </div>
            </Navbar>
            <Container >
                <Card className='widecard'>
                    <Card.Body>
                        <Row className='widerow'>
                            <Col>
                                <Card.Link href="mailto:howard@mmpix.com" target="_blank" className='contactlink'>
                                    

                                <Card.Img className='badgeimg' src={Email} alt="email me" />

                                        <Card.Title>howard@mmpix.com</Card.Title>

                                </Card.Link>
                            </Col>

                            <Col>

                                <Card.Link href="https://www.linkedin.com/in/hkier/" target="_blank" rel="noreferrer" className='contactlink'>
                                    <Card.Img className='badgeimg' src={linkedin} alt="LinkedIn" />
                                    <Card.Title>linkedin.com/in/hkier</Card.Title>
                                </Card.Link>
                            </Col>
                            <Col>
                                <Card.Link href="https://github.com/hkier" target="_blank" rel="noreferrer" className='contactlink'>
                                    <Card.Img className='badgeimg' src={github} alt="Github" />
                                    <Card.Title>github.com/hkier</Card.Title>
                                </Card.Link>

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>








        </div>
    )
}

export default Contact
