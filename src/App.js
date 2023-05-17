
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Sidebar from './components/Sidebar'; 
import About from './components/About';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
      <Container className='wrapper'>
        <Row>
          <Col className='sidebar' xs={2}>
            <Sidebar />
          </Col>

          <Col className='main' xs={10}>
            <Intro />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Interests />
            <Contact />
            <Resume />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
