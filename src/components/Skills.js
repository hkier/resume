import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Container } from 'react-bootstrap';
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
import healthcare from '../images/Skills/sql.jpg'
import insurance from '../images/Skills/sql.jpg'
import manufacturing from '../images/Skills/sql.jpg'
import retail from '../images/Skills/sql.jpg'
import transportation from '../images/Skills/sql.jpg'
import utilities from '../images/Skills/sql.jpg'



const Skills = () => {
    return (
        <div id='skills'>
            <Navbar className="titlebar" sticky="top">
                <h1>Skills</h1>
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
                                    <Card.Img className='badgeimg' src={html5} />
                                    <Card.Text>HTML5</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={css3} />
                                    <Card.Text>CSS3</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={javascript} />
                                    <Card.Text>JavaScript</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={jquery} />
                                    <Card.Text>jQuery</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={reactlogo} />
                                    <Card.Text>React</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={bootstrap} />
                                    <Card.Text>Bootstrap</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={webpack} />
                                    <Card.Text>Webpack</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={github} />
                                    <Card.Text>GitHub</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={node} />
                                    <Card.Text>Node.js</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={express} />
                                    <Card.Text>Express</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={postgresql} />
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
                                    <Card.Img className='badgeimg' src={JCL} />
                                    <Card.Text>JCL</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={rpg} />
                                    <Card.Text>RPG</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={APL} />
                                    <Card.Text>APL</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={sdlc} />
                                    <Card.Text>SDLC</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={sql} />
                                    <Card.Text>SQL</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={jde} />
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
                                    <Card.Img className='badgeimg' src={office} />
                                    <Card.Text>Microsoft Office</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={visualstudio} />
                                    <Card.Text>Visual Studio Code</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={photoshop} />
                                    <Card.Text>Adobe Photoshop</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={wordpress} />
                                    <Card.Text>WordPress</Card.Text>
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
                                <div>
                                    <Card.Img className='badgeimg' src={healthcare} />
                                    <Card.Text>Healthcare</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={manufacturing} />
                                    <Card.Text>Manufacturing</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={retail} />
                                    <Card.Text>Retail</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={insurance} />
                                    <Card.Text>Insurance</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={transportation} />
                                    <Card.Text>Transportation</Card.Text>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Card.Img className='badgeimg' src={utilities} />
                                    <Card.Text>Utilities</Card.Text>
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