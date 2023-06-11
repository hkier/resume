import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


const About = () => {
    return (
        <div id='about'>
            <Navbar className="titlebar" sticky="top" id="about">
                <h1>About Me</h1>
            </Navbar>
            <Container>
                <Card className="widecard">
                    <Card.Body>
                        <Row className='widerow'>
                            <Col>
                                <Card.Text>
                                    <div className='abouttext'>
                                        <p>
                                            Who am I? I’m Howard Kier. But who is Howard?  Simple words such as
                                            intelligent, experienced, leader, problem solver, creative, and
                                            hard-working are cliché and simply not enough to convey the full
                                            depth of my skills, experiences, passions and other intangibles
                                            which make me who I am.
                                        </p>
                                        <p>Writing about ones’ self is not easy.  But let me start with
                                            my high school motto, words which have stuck with me over the
                                            years, “Knowledge is Power.”  More than anything, I enjoy
                                            learning new information and skills.  Over the years, I’ve
                                            continued to learn new skills and stay abreast of the latest
                                            computer technologies while retaining the lessons of the past.
                                        </p>
                                        <p>
                                            No matter where life has taken me, from corporate programmer,
                                            to small business owner and even as a substitute teacher, I've shared my
                                            knowledge with others.  I've taught computer classes, business classes even
                                            photograhy classes. I've tutored students, and mentored employees.  My goal
                                            has been to make the world a better place by sharing knowledge to
                                            help others, improving products/processes, solving problems and anticipating problems
                                            thus avoiding problems before they occur.
                                        </p>
                                    </div>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default About
