import React from 'react'
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card'


//images for interests
import shsvip from '../images/Interests/SHSVIP.png'
import chihack from '../images/Interests/Chihack.png'
import boyScouts from '../images/Interests/BoyScouts.jpg'
import code4Chicago from '../images/Interests/cfc_logo_2021.svg'

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

const Interests = () => {
    return (
        <div id='interests'>
            <Navbar className="titlebar" sticky="top">
                <h1>Interests</h1>
            </Navbar>
            <Container >
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shsvip} alt="VIP" />
                        <Card.Body>
                            <Card.Title>Board Member</Card.Title>
                            <Card.Text>Webmaster resposible for updating website using Blackboard</Card.Text>
                            <Card.Text>Organized and ran events for the organization</Card.Text>
                            <Card.Text>Helped with the recruitment of new members</Card.Text>
                        </Card.Body>.
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={chihack} alt="Chihacknight" />
                        < Card.Body>
                            <Card.Title>General Member</Card.Title>
                            <Card.Text>Attended weekly meetings to learn about civic hacking</Card.Text>
                            <Card.Text>Worked on projects to help the community</Card.Text>
                            <p>Chicago Doula Project - designed and implimented website</p>
                            <p>Decarbonize My State - assisted with the design and implimention of the website</p>
                        </Card.Body>.
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={code4Chicago} alt="Code for Chicago" />
                        < Card.Body>
                            <Card.Title>General Member</Card.Title>
                            <Card.Text>Attended weekly working meetings </Card.Text>
                            <Card.Text>Worked on projects to help the community</Card.Text>
                            <p>Between Friends - updated website as directed by the organization</p>

                        </Card.Body>.
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <container>
                            <Card.Img variant="top" src={boyScouts} alt="Boy Scouts" />
                        </container>
                        < Card.Body>
                            <Card.Title>Unit Leadership</Card.Title>
                            <h4>Den Leader for 3-10 scouts where I planned and led activities to advance scouts to the next rank</h4>
                            <h4>Committee Member where I helped plan and run events for the pack</h4>
                            <h4>Troop Committee Chairman where I led the Troop's adult committee in support of a troop with 3-15 Boy Scouts</h4>
                            <h4>Merit Badge Counselor where I helped scouts earn merit badges</h4>
                        </Card.Body>.
                    </Card>
                </Row>
            </Container>

        </div>
    )
}

export default Interests