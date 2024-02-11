import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { interestsData } from '../data/interestData.js';





const InterestCard = ({ interest }) => {
  const { image, title, role, years, details } = interest;

  return (
    <Col>
      <Card className='mediumcard'>
        {image && (
          <Row>
            <Col xs={1}>
              <Image src={image} className='educationImg' alt={title} />
            </Col>
            <Col xs={11} className='edutext'>
              <div className='f4'>{title}</div>
            </Col>
          </Row>
        )}

        <Card.Body>
          {role && <Card.Title>{role}</Card.Title>}
          {years && <div>{years} years</div>}
          <ul className='bullet'>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Interests = () => {
  return (
    <div id='interests' className='section'>
      <Navbar className='titlebar' sticky='top'>
        <div className='f1'>Interests</div>
      </Navbar>
      <Container>
        <Row>
          {interestsData.map((interest, index) => (
            <InterestCard key={index} interest={interest} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Interests;
