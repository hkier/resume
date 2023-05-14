
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavCol from './components/NavCol';
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
    <div >
      <Container>
        <Row>
          <Col>

            <NavCol />
          </Col>

          <Col>
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
    </div>

  );
}

export default App;
