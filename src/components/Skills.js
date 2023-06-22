import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import APL from '../images/Skills/APL.webp'
import bootstrap from '../images/Skills/bootstrap.webp'
import css3 from '../images/Skills/css3.webp'
import express from '../images/Skills/express.webp'
import github from '../images/Skills/github.webp'
import html5 from '../images/Skills/html5.webp'
import javascript from '../images/Skills/javascript.webp'
import JCL from '../images/Skills/JCL.webp'
import jde from '../images/Skills/jde.webp'
import jquery from '../images/Skills/jquery.webp'
import node from '../images/Skills/node.webp'
import office from '../images/Skills/office.webp'
import photoshop from '../images/Skills/photoshop.webp'
import postgresql from '../images/Skills/postgresql.webp'
import reactlogo from '../images/Skills/reactlogo.webp'
import rpg from '../images/Skills/rpg.webp'
import sdlc from '../images/Skills/sdlc.webp'
import sql from '../images/Skills/sql.webp'
import visualstudio from '../images/Skills/vsc.webp'
import webpack from '../images/Skills/webpack.webp'
import wordpress from '../images/Skills/wordpress.webp'
import budget from '../images/Skills/budget.webp'
import competitive from '../images/Skills/competitive.webp'
import finance from '../images/Skills/finance.webp'
import people from '../images/Skills/people.webp'
import testing from '../images/Skills/testing.webp'
import speaking from '../images/Skills/speaking.webp'
import writing from '../images/Skills/writing.webp'


//images for industry experience
import AutomotiveIcon from '@mui/icons-material/TimeToLeave';
import BankingIcon from '@mui/icons-material/AccountBalance';
import ChemicalIcon from '@mui/icons-material/Science';
import EducationIcon from '@mui/icons-material/School';
import EventPlanningIcon from '@mui/icons-material/Event';
import FinanceIcon from '@mui/icons-material/AttachMoney';
import GovernmentIcon from '@mui/icons-material/Gavel';
import HealthcareIcon from '@mui/icons-material/Vaccines';
import HospitalityIcon from '@mui/icons-material/Hotel';
import InformationProcessingIcon from '@mui/icons-material/Terminal';
import InsuranceIcon from '@mui/icons-material/Paid';
import LogisticsIcon from '@mui/icons-material/LocalShipping';
import ManufacturingIcon from '@mui/icons-material/Factory';
import ProfessionalServicesIcon from '@mui/icons-material/Group';
import ProjectManagementIcon from '@mui/icons-material/AccountTree';
import RealEstateIcon from '@mui/icons-material/Gite';
import RestaurantIcon from '@mui/icons-material/Fastfood';
import RetailIcon from '@mui/icons-material/Storefront';
import TelecommunicationsIcon from '@mui/icons-material/SatelliteAltSharp';
import TransportationIcon from '@mui/icons-material/FlightTakeoff';

const blue = '#3c99d4'
const green = "#24a148"
const orange = "#ec971f"
const yellow = "#f3d70c"
const red = "#d9534f"
const purple = "#c800ff"


const Skills = () => {
    return (
        <div id='skills' className='section'>
            <Navbar className="titlebar" sticky="top">
                <f1>Skills</f1>
            </Navbar>
            <Container>
                <Card className="widecard">
                    <div className='skilltitle'>
                        <Card.Title className='skilltitle'>Web Development</Card.Title>
                    </div>

                    <Card.Body>
                        <Row className='widerow'>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={html5} alt='html' />
                                    <Card.Text>HTML5</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={css3} alt='css'/>
                                    <Card.Text>CSS3</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={javascript} alt='javascript'/>
                                    <Card.Text>JavaScript</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={jquery} alt='jquery' />
                                    <Card.Text>jQuery</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={reactlogo} alt='react' />
                                    <Card.Text>React</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={bootstrap} alt='bootstrap'/>
                                    <Card.Text>Bootstrap</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={webpack} alt='webpack' />
                                    <Card.Text>Webpack</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={github} alt='github'/>
                                    <Card.Text>GitHub</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={sdlc} alt='sdlc'/>
                                    <Card.Text>SDLC</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={sql} alt='sql'/>
                                    <Card.Text>SQL</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={node} alt='node'/>
                                    <Card.Text>Node.js</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={express} alt='express'/>
                                    <Card.Text>Express</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={postgresql} alt='postgres' />
                                    <Card.Text>PostgreSQL</Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="widecard">
                    <div className='skilltitle'>
                        <Card.Title className='skilltitle'>Legacy Systems</Card.Title>
                    </div>

                    <Card.Body>
                        <Row className='widerow'>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={JCL} alt='jcl' />
                                    <Card.Text>JCL</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={rpg} alt='rpg'/>
                                    <Card.Text>RPG</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={APL} alt='apl'/>
                                    <Card.Text>APL</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={sdlc} alt='sdlc'/>
                                    <Card.Text>SDLC</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={sql} alt='sql'/>
                                    <Card.Text>SQL</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={jde} alt='jde'/>
                                    <Card.Text>JDE</Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="widecard">
                    <div className='skilltitle'>
                        <Card.Title className='skilltitle'>Other</Card.Title>
                    </div>

                    <Card.Body>
                        <Row className='widerow'>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={office} alt='ms office'/>
                                    <Card.Text>Microsoft Office</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={visualstudio} alt='visual studio'/>
                                    <Card.Text>Visual Studio Code</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={speaking} alt='speaking'/>
                                    <Card.Text>Presentation</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={photoshop} alt='photoshop' />
                                    <Card.Text>Adobe Photoshop</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={wordpress} alt='wordpress'/>
                                    <Card.Text>WordPress</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={budget} alt='budget'/>
                                    <Card.Text>Budgeting</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={writing} alt='writing'/>
                                    <Card.Text>Writing</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={competitive} alt='competitive analysis'/>
                                    <Card.Text>Competitive Analysis</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={finance} alt='finance'/>
                                    <Card.Text>Finance</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={people} alt='people'/>
                                    <Card.Text>People Management</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={testing} alt='testing'/>
                                    <Card.Text>Testing</Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="widecard">
                    <div className='skilltitle'>
                        <Card.Title className='skilltitle'>Industries</Card.Title>
                    </div>
                    <Card.Body>
                        <Row className='widerow'>
                            <Col>
                                <div className='skillicon'>

                                    <AutomotiveIcon fontSize='large' sx={{ color: blue }} />
                                    <Card.Text>Automotive</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <BankingIcon fontSize='large' sx={{ color: green }}/>
                                    <Card.Text>Banking</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <ChemicalIcon fontSize='large' />
                                    <Card.Text>Chemical</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <EducationIcon fontSize='large' sx={{ color: orange }}/>
                                    <Card.Text>Education</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <EventPlanningIcon fontSize='large' sx={{ color: yellow }}/>
                                    <Card.Text>Event Planning</Card.Text>
                                </div>
                            </Col>

                            <Col>
                                <div className='skillicon'>

                                    <FinanceIcon fontSize='large' sx={{ color: purple }}/>
                                    <Card.Text>Financial</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <GovernmentIcon fontSize='large' sx={{ color: blue }} />
                                    <Card.Text>Government</Card.Text>
                                </div>
                            </Col>


                            <Col>
                                <div className='skillicon'>

                                    <HealthcareIcon fontSize='large' sx={{ color: green }}/>
                                    <Card.Text>Healthcare</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <HospitalityIcon fontSize='large' sx={{ color: orange }}/>
                                    <Card.Text>Hospitality</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <InformationProcessingIcon fontSize='large' sx={{ color: red }}/>
                                    <Card.Text>Information Processing</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <InsuranceIcon fontSize='large' sx={{ color: yellow }}/>
                                    <Card.Text>Insurance</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <LogisticsIcon fontSize='large' sx={{ color: purple }}/>
                                    <Card.Text>Logistics</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <ManufacturingIcon fontSize='large' sx={{ color: red }}/>
                                    <Card.Text>Manufacturing</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <ProfessionalServicesIcon fontSize='large' sx={{ color: blue }}/>
                                    <Card.Text>Professional Services</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <ProjectManagementIcon fontSize='large' sx={{ color: green }}/>
                                    <Card.Text>Project Management</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <RealEstateIcon fontSize='large' sx={{ color: orange }}/>
                                    <Card.Text>Real Estate</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <RestaurantIcon fontSize='large' sx={{ color: yellow }}/>
                                    <Card.Text>Restaurant</Card.Text>
                                </div>
                            </Col>

                            <Col>
                                <div className='skillicon'>

                                    <RetailIcon fontSize='large' sx={{ color: red }}/>
                                    <Card.Text>Retail</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <TelecommunicationsIcon fontSize='large' />
                                    <Card.Text>Telecommunications</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div className='skillicon'>

                                    <TransportationIcon fontSize='large' sx={{ color: purple }}/>
                                    <Card.Text>Transportation</Card.Text>
                                </div>
                            </Col>





                        </Row>
                    </Card.Body>
                </Card>


            </Container>
        </div>
    )
}

export default Skills