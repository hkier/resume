import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import hk from '../images/Contact/hk.jpg'
// import facebook from '../images/Contact/facebook.webp'
import github from '../images/Contact/github.webp'
import linkedin from '../images/Contact/linkedin.webp'
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
                <Card className='widecard'>
                    <Card.Body>
                        <Row className='widerow'>
                            <Col>
                                <Card.Img className='badgeimg' variant="top" src={hk} alt='HK logo'/>

                                <Card.Title>Howard Kier</Card.Title>
                                <Card.Text>
                                    <p>Full Stack Web Developer</p>
                                    <p>Chicago, Il</p>
                                </Card.Text>
                            </Col>
                            {/* <Col>


                                <Card.Link href="https://www.facebook.com/hkier" target="_blank" rel="noreferrer">
                                    <Card.Img className='badgeimg' variant='top' src={facebook} alt="facebook" />

                                    <Card.Title>Facebook</Card.Title>
                                </Card.Link>

                            </Col> */}
                            <Col>

                                <Card.Link href="https://www.linkedin.com/in/hkier/" target="_blank" rel="noreferrer">
                                    <Card.Img className='badgeimg' src={linkedin} alt="LinkedIn" />
                                </Card.Link>

                                <Card.Title>LinkedIn</Card.Title>

                            </Col>
                            <Col>

                                <Card.Link href="https://github.com/hkier" target="_blank" rel="noreferrer">
                                    <Card.Img className='badgeimg' src={github} alt="Github" />
                                </Card.Link>

                                <Card.Title>Github</Card.Title>


                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>








        </div>
    )
}

export default Contact
