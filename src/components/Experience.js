import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

//images for experience
import IBM from '../images/Experience/IBM.png'
import Disney from '../images/Experience/Disney.png'
import LegacyAnalytics from '../images/Experience/LegacyAnalyticsLogo.png'
import MMP from '../images/Experience/MMP.jpg'
import EDS from '../images/Experience/eds-logo-png-transparent.png'
import Hardesty from '../images/Experience/Hardesty.jpg'

// function BasicExample() {
//   return (
//     <Card className='basiccard'>
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




const Experience = () => {
    return (
        <div id='experience'>
            <Navbar className="titlebar" sticky="top">
                <h1>Experience </h1>
            </Navbar>
            <Container >
                <Row>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={IBM} />
                            <Card.Body>
                                <Card.Text>Programmer</Card.Text>
                            </Card.Body>

                        </Card>


                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant='top' src={EDS} alt="EDS" />
                            <Card.Body>
                                <Card.Title>Programmer/Analyst</Card.Title>
                            </Card.Body>
                        </Card>


                    </Col>
                    <Col>
                        <Card className='basiccard'>

                            <Card.Img variant='top' src={Disney} alt="Disney" />
                            <h2>Consumer Products Division</h2>

                            <Card.Title>Cast Member</Card.Title>
                            <Card.Text>Backroom Lead</Card.Text>
                            <Card.Text>VoluntEars Representative</Card.Text>
                        </Card>
                    </Col>



                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant='top' src={LegacyAnalytics} alt="Legacy Analytics" />
                            <Card.Title>Business Consultant</Card.Title>
                        </Card>
                    </Col>
                    <Col>

                        <Card className='basiccard'>
                            <Card.Img variant='top' src={MMP} alt="Magical Moments Photography" />
                            <Card.Title>Owner, CEO, CFO and CIO</Card.Title>
                        </Card>
                    </Col>
                    <Col>

                        <Card className='basiccard'>
                            <Card.Img variant='top' src={Hardesty} alt="Hardesty Hackett" />
                            <Card.Title>Consultant</Card.Title>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}

export default Experience