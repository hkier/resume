import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import resumePdf from '../files/kier.pdf'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Resume = () => {
    return (
        <div id="resume" className='section'>
            <Navbar className="titlebar" sticky="top">
                <div className='f1'>Resume</div>
            </Navbar>
            <Container>
                <div>
                    <Card className="widecard">
                        <Card.Body>
                            <Row className='widerow'>
                                <Col>
                                   

                    <object data={resumePdf} type="application/pdf" width="100%" height="800px">
                    </object>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                </div>
            </Container>
        </div>
    )
}

export default Resume
