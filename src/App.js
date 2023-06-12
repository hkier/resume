//import of the css file for the app
import 'bootstrap/dist/css/bootstrap.min.css';

//import of the components from the react-bootstrap library
import React, { Suspense,  useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Grid from '@mui/material/Grid';
// import Container from 'react-bootstrap/Container';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));

import Sidebar from './components/Sidebar';
import About from './components/About';
import Intro from './components/Intro';
import Header from './components/Header';


//import of components using lazy loading to reduce the size of the initial load.
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Interests = React.lazy(() => import('./components/Interests'));
const Contact = React.lazy(() => import('./components/Contact'));
const Resume = React.lazy(() => import('./components/Resume'));


function App() {

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 767);
    };

    // Initial check on component mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <Grid fluid >
      <div className='wrapper' style={{ width: '100vw' }}>

          <Col className='sidebar' xs={12} sm={2}>
            <Header />
            {isLargeScreen && <Sidebar />}
          </Col>

          <Col className='main' xs={12} sm={10}>
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
          </Col>

      </div>
    </Grid>
  );
}

export default App;
