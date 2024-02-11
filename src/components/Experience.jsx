import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {experiences} from '../data/experienceData.js';




const Experience = () => {
  return (
    <div id='experience' className='section'>
      <Navbar className="titlebar" sticky="top">
        <div className='f1'>Experience </div>
      </Navbar>
      <Container>
        {experiences.map((experience, index) => (
          <Row key={index}>
            <Col>
              <Card className='widecard'>
                <Card.Img className='expimg' variant='top' src={experience.image} alt={`${experience.title} logo`} />
                <Card.Title>{experience.title}</Card.Title>
                <div>{experience.duration}</div>
                {experience.subRole && <Card.Text>{experience.subRole}</Card.Text>}
                <Card.Body>
                  <ul className='bullet'>
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Experience;
