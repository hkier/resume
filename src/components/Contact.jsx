import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailIcon from '../images/Contact/email.webp';
import LinkedinIcon from '../images/Contact/linkedin.webp';
import GithubIcon from '../images/Contact/github.webp';
import { contactInfo } from '../data/contactData.js';


const Contact = () => {
  return (
    <div id='contact' className='section'>
      <Navbar className="titlebar" sticky="top">
        <div className='f1'>Contact </div>
      </Navbar>
      <Container>
        <Card className='widecard'>
          <Card.Body>
            <Row className='widerow'>
              {contactInfo.map((info, index) => (
                <Col key={index}>
                  <Card.Link
                    href={info.link}
                    target="_blank"
                    rel="noreferrer"
                    className='contactlink'
                  >
                    <Card.Img className='badgeimg' src={info.icon} alt={info.alt} />
                    <Card.Title>{info.title}</Card.Title>
                  </Card.Link>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
