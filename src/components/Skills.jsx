import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Icon from '@mui/material/Icon';

// Import data for skills
import { skillData } from "../data/skillsData.js"; 

const Skills = () => {
  const renderCategoryCards = (category) => (
    <Card className="widecard" key={category.title}>
      <div className="skilltitle">
        <Card.Title className="skilltitle">{category.title}</Card.Title>
      </div>
      <Card.Body>
        <Row className="widerow">
          {category.skills.map((item) => (
            <Col key={item.name}>
              <div>
                {!item.color ? (

                  <Card.Img
                    className="badgeimg"
                    src={item.image}
                    alt={item.name}
                  />
                ) : (
                  <div  className="skillicon">
                  <Icon  fontSize="large" style={{ color: item.color}}>{item.image}</Icon>

                  </div>
                )}
                <Card.Text>{item.name}</Card.Text>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <div id="skills" className="section">
      <Navbar className="titlebar" sticky="top">
        <div className="f1">Skills</div>
      </Navbar>
      <Container>
        {skillData.map((category) => renderCategoryCards(category))}
        {/* {renderIndustryCards(industryData)} */}
      </Container>
    </div>
  );
};

export default Skills;
