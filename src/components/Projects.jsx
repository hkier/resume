import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import { projectData } from '../data/projectData.js';




const Projects = () => {
  return (
    <div id='projects' className='section'>
      <Navbar className="titlebar" sticky="top">
        <div className='f1'>Projects</div>
      </Navbar>
      <Container className="wrap">
        <Row>
          {projectData.map((project, index) => (
            <Col key={index}>
              <Card className='basiccard'>
                <Card.Img variant="top" src={project.imageSrc} alt={`${project.title} project`} />
                <hr />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {project.liveSiteLink && (
                    <Card.Link href={project.liveSiteLink} target="_blank">Live Site</Card.Link>
                  )}
                  {project.repoLink && (
                    <Card.Link href={project.repoLink} target="_blank">GitHub Repo</Card.Link>
                  )}
                  {project.archivedSiteLink && (
                    <Card.Link href={project.archivedSiteLink} target="_blank">Archived Site</Card.Link>
                  )}
                  {project.liveSiteLinkAccess && (
                    <Card.Link href={project.liveSiteLinkAccess} target="_blank">Access Book</Card.Link>
                  )}
                  {project.liveSiteLinkVolume1 && (
                    <Card.Link href={project.liveSiteLinkVolume1} target="_blank">Read Volume 1</Card.Link>
                  )}
                  {project.liveSiteLinkVolume2 && (
                    <Card.Link href={project.liveSiteLinkVolume2} target="_blank">Read Volume 2</Card.Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
