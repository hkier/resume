import React from 'react'
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

//images for education
import Syracuse from '../images/Education/Syracuse.svg'
import Mustang from '../images/Education/Mustang.png'

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
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

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Syracuse} alt="Syracuse University" />
                            <Card.Body>
                                <Card.Title>Master of Science, Computer Engineering</Card.Title >
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Syracuse} alt="Syracuse University" />
                            <Card.Body>
                                <Card.Title>Bachelor of Science, Computer Engineering</Card.Title >
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>

                            <Card.Img variant="top" src={Mustang} alt="Southern Methodist University" />
                            <Card.Body>
                                <Card.Title>Southern Methodist University</Card.Title>

                                <Card.Title>Master of Business Administration</Card.Title>
                                <Card.Text>Concentration in Organizational Behavior</Card.Text>
                                <Card.Text>Concentration in Process Improvement</Card.Text>
                                <Card.Text>Beta Gamma Sigma</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Education