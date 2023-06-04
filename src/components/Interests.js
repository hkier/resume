import React from 'react'
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


//images for interests
import shsvip from '../images/Interests/SHSVIP.webp'
import chihack from '../images/Interests/Chihack.webp'
import boyScouts from '../images/Interests/BSA.webp'
import code4Chicago from '../images/Interests/cfc_logo_2021.svg'



const Interests = () => {
    return (
        <div id='interests'>
            <Navbar className="titlebar" sticky="top">
                <h1>Interests</h1>
            </Navbar>
            <Container >
                <Row>

                    <Col>
                        <Card className='mediumcard'>
                            <Row>
                                <Col xs={2}>
                                    <Image src={shsvip} className='educationImg' alt="shs vip" />
                                </Col>
                                <Col xs={10} className='edutext'>
                                    <h2>Schaumburg High School Very Involved Parents </h2>
                                </Col>
                            </Row>

                            <Card.Body>
                                <Card.Title>Board Member</Card.Title>
                                <Card.Text>Webmaster resposible for updating website using Blackboard,
                                    Organized and ran events for the organization</Card.Text>
                            </Card.Body>.
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mediumcard'>
                            <Card.Img className='expimg' variant="top" src={code4Chicago} alt="Code for Chicago" />
                            < Card.Body>
                                <Card.Title>General Member</Card.Title>
                                <Card.Text>Attended weekly working meetings
                                    and worked on projects to help
                                    Between Friends update their website
                                </Card.Text>

                            </Card.Body>.
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mediumcard'>
                            <Card.Img className='expimg' variant="top" src={chihack} alt="Chihacknight" />
                            < Card.Body>
                                <Card.Title>General Member</Card.Title>
                                <Card.Text>Attended weekly meetings to learn about civic hacking and
                                    assisted with coding projects to help the community which included:
                                    Chicago Doula Project (designed and implimented website) and
                                    Decarbonize My State (contributed to the design and implimention of the website)
                                </Card.Text>
                            </Card.Body>.
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mediumcard'>
                            <Row>
                                <Col xs={2}>
                                    <Image src={boyScouts} className='educationImg' alt="Boy Scouts" />
                                </Col>
                                <Col xs={10} className='edutext'>
                                    <h2>Boy Scouts of America </h2>
                                </Col>
                            </Row>
                            < Card.Body>
                                <Card.Title>Unit Leadership</Card.Title>
                                <Card.Text>Den Leader - I planned and led activities for 3-10 scouts</Card.Text>
                                <Card.Text>Committee Member who helped plan and run pack events</Card.Text>
                                <Card.Text>Troop Committee Chairman who led the Troop's adult committee supporting of a troop of Boy Scouts</Card.Text>
                                <Card.Text>Merit Badge Counselor where I helped scouts earn merit badges</Card.Text>
                            </Card.Body>.
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Interests