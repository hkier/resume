import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import hk from '../images/Contact/hk.jpg'
import facebook from '../images/Contact/facebook.jpg'
import github from '../images/Contact/github.png'
import linkedin from '../images/Contact/linkedin.jpg'
// import email from '../images/Contact/email.png'
// import phone from '../images/Contact/phone.png'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';







const Contact = () => {
    return (
        <div id='contact'>
            <Navbar className="titlebar" sticky="top">
                <h1>Contact </h1>
            </Navbar>
            <Container >
                <Row>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img className='badgeimg' variant="top" src={hk} />
                            <Card.Body>
                                <Card.Title>Howard Kier</Card.Title>
                                <Card.Text>
                                    <p>Full Stack Web Developer</p>
                                    <p>Chicago, Il</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Link href="https://www.facebook.com/hkier" target="_blank" rel="noreferrer">
                                <Card.Img className='badgeimg' variant='top' src={facebook} alt="facebook" />
                            </Card.Link>
                            <Card.Body>
                                <Card.Title>Facebook:</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Link href="https://www.linkedin.com/in/hkier/" target="_blank" rel="noreferrer">
                                <Card.Img className='badgeimg' src={linkedin} alt="LinkedIn" />
                            </Card.Link>
                            <Card.Body>
                                <Card.Title>LinkedIn</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Link href="https://github.com/hkier" target="_blank" rel="noreferrer">
                                <Card.Img className='badgeimg' src={github} alt="Github" />
                            </Card.Link>
                            <Card.Body>
                                <Card.Title>Github</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>








        </div>
    )
}

export default Contact
