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
//     <Card className='widecard'>
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

                        <Card className='widecard'>
                            <Card.Img className='expimg' variant='top' src={MMP} alt="Magical Moments Photography" />
                            <Card.Title>Freelance</Card.Title>
                            <Card.Text>Web Developer and Consultant</Card.Text>
                            <Card.Body>
                                <ul>
                                    <li>Partnered with clients to determine project requirements and delivered high-quality results on-time and within budget</li>
                                    <li>Developed stevenrosenblum.com to support a local candidate’s campaign for local Board of Education</li>
                                    <li>Created website requirements, developed database architechture and preliminary website design (currently under NDA)</li>
                                    <li>Updated and migrated 2 websites for the Friends of Wilderness Road from an old HTML based website to a content management system  </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Card className='widecard'>
                            <Card.Img className='expimg' variant='top' src={MMP} alt="Magical Moments Photography" />
                            <Card.Title>Owner, CEO, CFO and CIO</Card.Title>
                            <Card.Text>The buck stopped here!</Card.Text>
                            <Card.Body>
                                <ul>
                                    <li>Performed competitor and market analysis on products, services, and pricing twice a year.to predict product sales, design product offerings and establish pricing</li>
                                    <li>Assessed financial performance of business, creating budget, balance sheets, cash flows, and P&L statements twice a year</li>
                                    <li>Worked closely with clients to clarify requirements, expectations, and offer solutions</li>
                                    <li>Designed, implimented and maintained website along with uploading event files on a weekly basis </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='widecard'>
                            <Card.Img className='expimg' variant="top" src={IBM} />
                            <Card.Title>Programmer</Card.Title>
                            <Card.Text>Programmer/Technical Support</Card.Text>
                            <Card.Body>
                                <ul>
                                    <li>Provided product support for OfficeVision/MVS by resolving technical problems and customer inquiries</li>
                                    <li>Coordinated, customized and documented the installation of APL2; analyzed system failures; interfaced with other teams when needed</li>
                                    <li>Consolidated, combined, and documented local modifications, yielding lower maintenance costs and higher reliability</li>
                                    <li>Proactively resolved problems before impacting the customer, and assessed new product requirements</li>
                                </ul>
                            </Card.Body>
                        </Card>


                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='widecard'>
                            <Card.Img className='expimg' variant='top' src={EDS} alt="EDS" />

                            <Card.Title>Programmer/Analyst</Card.Title>

                            <Card.Text>Business Analyst/Consultant/Programmer</Card.Text>
                            <Card.Body>
                                <ul>
                                    <li>Proactively resolved Client’s problems (Sales order processing, Inventory, Financial, EDI and Payroll) using Life Cycle Methodologies, and continuous improvement to analyze problems, design and implement new programs and enhancements while providing programming leadership. Efficiently analyzed business problems, designed and implemented new programs and program enhancements as needed  </li>
                                    <li>Performed competitive analysis, determined costs and set prices for EDS’ data network services products. Audited invoices; reengineered manual processes to increase efficiency; installed, maintained and updated tools; and provided ad-hoc reports</li>
                                    <li>Assessed relationship between computer system and business needs identifying savings of nearly 20%  </li>
                                    <li>Developed and implemented interface between client's system and their bank, providing a positive pay system to prevent fraudulent checks from being accepted for payment saving the client hundreds of thousands of dollars.</li>
                                    <li>Diligently applied Software Life Cycle processes to the development of numerous new and existing programs to meet user requirements, lower development costs, and resolve user problems</li>
                                </ul>
                            </Card.Body>
                        </Card>


                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className='widecard'>
                            <Card.Img className='expimg' variant='top' src={LegacyAnalytics} alt="Legacy Analytics" />
                            <Card.Title>Business Consultant</Card.Title>

                            <Card.Body>
                                <ul>
                                    <li>Analyzed current business status (financials, operations, personnel and systems) to identify problems, presented improvement recommendations and implemented the changes for companies in the manufacturing, restaurant, retail, logistics and trucking industries</li>
                                    <li>Determined Key Performance Indicators (KPIs) and trained client executives in the effective use of management systems, tools, and techniques to better monitor company status</li>
                                    <li>Organized employees into logical departments to improve communication, reduce errors and minimize organizational dysfunction</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <Card className='widecard'>
                            <Card.Img className='expimg' variant='top' src={Hardesty} alt="Hardesty Hackett" />
                            <Card.Title>Consultant</Card.Title>
                            <Card.Body>
                                <ul>
                                    <li>Analyzed current business status (financials, operations, personnel and systems) to identify problems, presented improvement recommendations and implemented the changes for companies in the manufacturing, restaurant, retail, logistics and trucking industries</li>
                                    <li>Accurately analyzed work processes, systems, organizational function and structures using interviews, observation, data and statistical analysis studies to determine where and how to generate measurable benefits resulting in an average of $125K savings per year per client</li>
                                    <li>Prepared written and oral feedback, presentation materials, critiques, systems documentation, process descriptions, proposals, standard operating procedures, evaluations, data summaries and reports</li>
                                </ul>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='widecard'>

                            <Card.Img className='expimg' variant='top' src={Disney} alt="Disney" />
                            <h2>Consumer Products Division</h2>

                            <Card.Title>Cast Member</Card.Title>
                            <Card.Body>
                                <ul>
                                    <li>Backroom Lead responsible for maintaining inventory and restocking shelves as needed</li>
                                    <li>VoluntEars Representative orgainized and participated in events to benefit various children's charities</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}

export default Experience