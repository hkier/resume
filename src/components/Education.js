import React from 'react'
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

//images for education

import Mustang from '../images/Education/Mustang.png'
import fullstack from '../images/Education/fullstack.jpg'
import Syracuse from '../images/Education/SU.jpg'

// function BasicExample() {
//   return (
//     <Card className='mediumcard'>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }
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
                                <Col xs={2}>
                                    <Image src={Syracuse} className='educationImg' alt="Syracuse University" />
                                </Col>
                                <Col xs={10} className='edutext'>
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
                                <Col xs={2}>
                                    <Image src={Syracuse} className='educationImg' alt="Syracuse University" />
                                </Col>
                                <Col xs={10} className='edutext'>
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
                                <Col xs={2}>
                                    <Image src={Mustang} className='educationImg' alt="Southern Methodist University" />
                                </Col>
                                <Col xs={10} className='edutext'>
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
                                <Col xs={2}>
                                    <Image src={fullstack} className='educationImg' alt="Fullstack Academ" />
                                </Col>
                                <Col xs={10} className='edutext'>
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