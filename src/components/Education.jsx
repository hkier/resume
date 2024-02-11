import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// Import education images
import SyracuseImage from '../images/Education/SU.webp';
import MustangImage from '../images/Education/SMU.webp';
import FullstackImage from '../images/Education/fullstack.webp';
import { educationData } from '../data/educationData.js';


const Education = () => {
  return (
    <div id='education' className='section'>
      <Navbar className="titlebar" sticky="top">
        <div className='f1'>Education</div>
      </Navbar>
      <Container>
        <Row>
          {educationData.map((education, index) => (
            <Col key={index}>
              <Card className="mediumcard">
                <Row>
                  <Col xs={1}>
                    <Image src={education.image} className='educationImg' alt={education.university} />
                  </Col>
                  <Col xs={11} className='edutext'>
                    <div className='f2'>{education.university}</div>
                  </Col>
                </Row>
                <Card.Body>
                  <Card.Title>{education.degree}</Card.Title>
                  {education.concentrations && (
                    <Card.Text>
                      Concentrations: {education.concentrations.join(', ')}
                    </Card.Text>
                  )}
                  {education.honors && <Card.Text>{education.honors}</Card.Text>}
                  {education.skills && <Card.Text>{education.skills}</Card.Text>}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Education;
