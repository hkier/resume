
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Suspense } from 'react';
// import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@mui/material/Grid';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

import Sidebar from './components/Sidebar';
import About from './components/About';
import Intro from './components/Intro';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Education from './components/Education';
// import Interests from './components/Interests';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import ScrollSpy from "react-ui-scrollspy";


// const Intro = React.lazy(() => import('./components/Intro'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Interests = React.lazy(() => import('./components/Interests'));
const Contact = React.lazy(() => import('./components/Contact'));
const Resume = React.lazy(() => import('./components/Resume'));

function App() {
  return (
    <Grid fluid className='cell'>
      <div className='wrapper' style={{ width: '100vw' }}>
        <Row className='cell'>
          <Col className='sidebar' xs={2}>
            <Sidebar />
          </Col>

          <Col className='main' xs={10}>
            <ScrollSpy>
              <Intro style={{ width: '100vw' }} />
                <Suspense fallback={<div>Loading...</div>}>
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Interests />
                <Contact />
                
                <Resume />
</Suspense>
            </ScrollSpy>
          </Col>
        </Row>
      </div>
    </Grid>
  );
}

export default App;
