// Desc: This is the Interests section of the website
// It is a functional component.
//

import React from 'react'
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
        <div id='interests' className='section'>
            <Navbar className="titlebar" sticky="top">
                <div className='f1'>Interests</div>
            </Navbar>           
            <Container >
                <Row>

                    <Col>
                        <Card className='mediumcard'>
                            <Row>
                                <Col xs={1}>
                                    <Image src={shsvip} className='educationImg' alt="shs vip" />
                                </Col>
                                <Col xs={11} className='edutext'>
                                    <div className='f4'>Schaumburg High School Very Involved Parents </div>
                                </Col>
                            </Row>

                            <Card.Body>
                                <Card.Title>Board Member</Card.Title>
                                8 years
                                <ul className='bullet'>
                                    <li>Webmaster resposible for updating website using Blackboard</li>
                                    <li>Organized and ran events </li>
                                </ul>
                            </Card.Body>.
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mediumcard'>
                            <Card.Img className='expimg' variant="top" src={code4Chicago} alt="Code for Chicago" />
                            < Card.Body>
                                <Card.Title>General Member</Card.Title>
                                1.5 years
                                <ul className='bullet'>
                                    <li>Attended weekly work meetings</li>
                                    <li> Collaborated with other members and Between Friends to update their website</li>
                                </ul>
                            </Card.Body>.
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mediumcard'>
                            <Card.Img className='expimg' variant="top" src={chihack} alt="Chihacknight" />
                            < Card.Body>
                                <Card.Title>General Member</Card.Title>
                                2 years
                                <ul className='bullet'>
                                    <li>Attended weekly meetings to learn about civic hacking in the community</li>
                                    <li>Assisted with coding projects to help the community which included:
                                        <ul className='bullet'>
                                            <li> Chicago Doula Project (designed and implemented website) </li>
                                            <li>Decarbonize My State (contributed to the design and implimention of the website)</li>

                                        </ul>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mediumcard'>
                            <Row>
                                <Col xs={2}>
                                    <Image src={boyScouts} className='educationImg' alt="Boy Scouts" />
                                </Col>

                                <Col xs={10} className='edutext'>
                                    <div className='f4'>Boy Scouts of America </div>
                                </Col>
                            </Row>
                            < Card.Body>
                                <Card.Title>Unit Leadership</Card.Title>
                                10 years
                                <ul className='bullet'>
                                    <li>Den Leader - Planned and led activities for 3-10 scouts</li>
                                    <li>Committee Member who helped plan and run pack events</li>
                                    <li>Troop Committee Chairman who led the Troop's adult committee supporting of a troop of Boy Scouts</li>
                                    <li> Merit Badge Counselor where I helped scouts earn merit badges</li>
                                </ul>
                            </Card.Body>.
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Interests