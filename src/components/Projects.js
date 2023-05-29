import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

import steve1 from '../images/Projects/Steve1.png'
import wilderness1 from '../images/Projects/Wilderness1.png'
import howard from '../images/Projects/howard.png'
import decarb from '../images/Projects/decarb.png'
import mmpix from '../images/Projects/mmpix.png'
import chem from '../images/Projects/chem.png'
import cash from '../images/Projects/cash.png'
import scams from '../images/Projects/scams.png'
import betweenfriends from '../images/Projects/betweenfriends.png'


const Projects = () => {
    return (
        <div id='projects'>
            <Navbar className="titlebar" sticky="top">
                <h1>Projects</h1>
            </Navbar>
            <container className="project">
                <Row>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={decarb} />
                            <Card.Body>
                                <Card.Title>Decarbonize My State</Card.Title>
                                <Card.Text>
                                    Worked with a team of volunteers at ChiHack Night to build a site to help people understand the impact of various personal decisions and policy proposals on the state's carbon emissions.
                                    I was responsible along with the rest of the team for the site's look, feel, design and implimentation.
                                    This site was built with React, Python, Recharts, Bootstrap and more.
                                </Card.Text>
                                <Card.Link href="https://decarbmystate.com/" target="_blank">Live Site</Card.Link> <br />
                                <Card.Link href="https://github.com/chihacknight/decarbonize-my-state" target="_blank">GitHub Repo</Card.Link> <br />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={steve1} />
                            <Card.Body>
                                <Card.Title>Steven Rosenblum</Card.Title>
                                <Card.Text>
                                    Designed, Coded and Published a website to support Mr. Rosenblum's 2019 successful candidacy for a seat on the D211 Board of Education.
                                    The site was updated in 2023 to reflect his 2023 candidacy.
                                    The site was built with React.
                                </Card.Text>
                                <Card.Link href="https://web.archive.org/web/20220329220847/http://stevenrosenblum.com/" target="_blank">Archived Site (Incomplete)</Card.Link> <br />
                                <Card.Link href="//github.com/hkier/steverose" target="_blank">GitHub Repo</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={betweenfriends} />
                            <Card.Body>
                                <Card.Title>Between Friends</Card.Title>
                                <Card.Text>
                                    Working as a Code For Chicago volunteer, I assisted Between Friends, a Chicago area domestic violence agency, to update their website.
                                    I worked with 3-5 other Code For Chicago to research the existing site, interview the client, and design and implement a new site.
                                </Card.Text>
                                <Card.Link href="https://betweenfriendschicago.org/" target="_blank">Live Site</Card.Link> <br />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={wilderness1} />
                            <Card.Body>
                                <Card.Title>Friends of Wilderness Road</Card.Title>
                                <Card.Text>
                                    Starting with an existing site, I logically reorganized the existing content, added new content, and updated the site's look and feel.
                                </Card.Text>
                                <Card.Link href="https://www.friendsofwildernessroad.info/" target="_blank">Live Site</Card.Link> <br />
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={mmpix} />
                            <Card.Body>
                                <Card.Title>Magical Moments Photography</Card.Title>
                                <Card.Text>
                                    Responsible for all facets of the website from design to coding to publishing and maintenance. Periodically updated the site to reflect the latest trends in web design.
                                </Card.Text>
                                <Card.Link href="https://web.archive.org/web/20160321143454/http://mmpix.com/" target="_blank">Archived Site</Card.Link> <br />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={chem} />
                            <Card.Body>
                                <Card.Title>ChemCentral</Card.Title>
                                <Card.Text>
                                    On assignment from EDS to Chemcentral, a chemical distribution company, Designed, Coded and Published ChemCentral's first website for ChemCentral.
                                </Card.Text>
                                <Card.Link href="https://web.archive.org/web/19990218105837/http://www.chemcentral.com:80/" target="_blank">Archived Site</Card.Link> <br />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={cash} />
                            <Card.Body>
                                <Card.Title>Cash Management</Card.Title>
                                <Card.Text>
                                    Wrote Cash Management which was published by Bookboon.
                                </Card.Text>
                                <Card.Link href="https://bookboon.com/en/cash-management-ebook" target="_blank">Access Book</Card.Link> <br />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={scams} />
                            <Card.Body>
                                <Card.Title>Cyber Scams and You</Card.Title>
                                <Card.Text>
                                    Building on a ChiHack Night project, I wrote a two volume book, Cyber Scams and You, which was published by Bookboon.
                                </Card.Text>
                                <Card.Link href="https://bookboon.com/en/cyber-scams-and-you-volume-1-ebook" target="_blank">Read Volume 1</Card.Link> <br />
                                <Card.Link href="https://bookboon.com/en/cyber-scams-and-you-volume-2-ebook" target="_blank">Read Volume 2</Card.Link> <br />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='basiccard'>
                            <Card.Img variant="top" src={howard} />
                            <Card.Body>
                                <Card.Title>Howard Kier Portfolio</Card.Title>
                                <Card.Text>
                                    This site was built with React and Bootstrap.
                                </Card.Text>
                                <Card.Link href="//github.com/hkier/resume" target="_blank">GitHub Repo</Card.Link> <br />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </container>
        </div>
    )
}

export default Projects