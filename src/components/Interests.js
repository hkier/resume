import React from 'react'
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';


import shsvip from '../images/SHSVIP.png'
import chihack from '../images/Chihack.png'
import boyScouts from '../images/BoyScouts.jpg'
import code4Chicago from '../images/cfc_logo_2021.svg'



const Interests = () => {
    return (
        <div id='interests'>
            <Navbar className="titlebar" sticky="top">
                <h1>Interests</h1>
            </Navbar>
            <Container >
                <Row>
                    <Col >
                        <img src={shsvip} alt="VIP" />
                        <h3>Board Member</h3>
                        <h4>Webmaster resposible for updating website using Blackboard</h4>
                        <h4>Organized and ran events for the organization</h4>
                        <h4>Helped with the recruitment of new members</h4>
                    </Col>
                    <Col >
                        <img src={chihack} alt="Chihacknight" />
                        <h3>General Member</h3>
                        <h4>Attended weekly meetings to learn about civic hacking</h4>
                        <h4>Worked on projects to help the community</h4>
                        <h5>Chicago Doula Project - designed and implimented website</h5>
                        <h5>Decarbonize My State - assisted with the design and implimention of the website</h5>
                    </Col>
                    <Col >
                        <img src={code4Chicago} alt="Code for Chicago" />
                        <h3>General Member</h3>
                        <h4>Attended weekly working meetings </h4>
                        <h4>Worked on projects to help the community</h4>
                        <h5>Between Friends - updated website as directed by the organization</h5>

                    </Col>
                    <Col >
                        <container>
                            <img src={boyScouts} alt="Boy Scouts" />
                        </container>
                        <h3>Unit Leadership</h3>
                        <h4>Den Leader for 3-10 scouts where I planned and led activities to advance scouts to the next rank</h4>
                        <h4>Committee Member where I helped plan and run events for the pack</h4>
                        <h4>Troop Committee Chairman where I led the Troop's adult committee in support of a troop with 3-15 Boy Scouts</h4>
                        <h4>Merit Badge Counselor where I helped scouts earn merit badges</h4>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Interests