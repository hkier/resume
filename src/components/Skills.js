import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import APL from '../images/Skills/APL.png'
import bootstrap from '../images/Skills/bootstrap.png'
import css3 from '../images/Skills/css3.png'
import express from '../images/Skills/express.png'
import github from '../images/Skills/github.png'
import html5 from '../images/Skills/html5.png'
import javascript from '../images/Skills/javascript.png'
import JCL from '../images/Skills/JCL.png'
import jde from '../images/Skills/jde.webp'
import jquery from '../images/Skills/jquery.png'
import node from '../images/Skills/node.png'
import office from '../images/Skills/office.png'
import photoshop from '../images/Skills/photoshop.png'
import postgresql from '../images/Skills/postgresql.png'
import reactlogo from '../images/Skills/reactlogo.png'
import rpg from '../images/Skills/rpg.png'
import sdlc from '../images/Skills/sdlc.png'
import sql from '../images/Skills/sql.jpg'
import visualstudio from '../images/Skills/vsc.png'
import webpack from '../images/Skills/webpack.png'
import wordpress from '../images/Skills/wordpress.png'



const Skills = () => {
    return (
        <div id='skills'>
            <Navbar className="titlebar" sticky="top">
                <h1>Skills</h1>
            </Navbar>
            <Card className="widecard">
                <div className='skilltitle'>
                    <Card.Title className='skilltitle'>Web Development</Card.Title>
                </div>
                <hr class="mx-auto" width='96%' />
                <Card.Body>
                    <Row>
                        <Col>
                            <div>
                                <Card.Img src={html5} />
                                <Card.Text>HTML5</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={css3} />
                                <Card.Text>CSS3</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={javascript} />
                                <Card.Text>JavaScript</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={jquery} />
                                <Card.Text>jQuery</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={reactlogo} />
                                <Card.Text>React</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={bootstrap} />
                                <Card.Text>Bootstrap</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={webpack} />
                                <Card.Text>Webpack</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={github} />
                                <Card.Text>GitHub</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={node} />
                                <Card.Text>Node.js</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={express} />
                                <Card.Text>Express</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={postgresql} />
                                <Card.Text>PostgreSQL</Card.Text>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="widecard">
                <div className='skilltitle'>
                    <Card.Title>Legacy Systems</Card.Title>
                </div>
                <hr class="mx-auto" width='96%' />
                <Card.Body>
                    <Row>
                        <Col>
                            <div>
                                <Card.Img src={JCL} />
                                <Card.Text>JCL</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={rpg} />
                                <Card.Text>RPG</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={APL} />
                                <Card.Text>APL</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={sdlc} />
                                <Card.Text>SDLC</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={sql} />
                                <Card.Text>SQL</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={jde} />
                                <Card.Text>JDE</Card.Text>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="widecard">
                <div className='skilltitle'>
                    <Card.Title>Other</Card.Title>
                </div>
                <hr class="mx-auto" width='96%' />
                <Card.Body>
                    <Row>
                        <Col>
                            <div>
                                <Card.Img src={office} />
                                <Card.Text>Microsoft Office</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={visualstudio} />
                                <Card.Text>Visual Studio Code</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={photoshop} />
                                <Card.Text>Adobe Photoshop</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card.Img src={wordpress} />
                                <Card.Text>WordPress</Card.Text>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Skills