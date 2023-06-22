//import of the css file for the app
import 'bootstrap/dist/css/bootstrap.min.css';

//import of the components from the react-bootstrap library
import React, { Suspense, useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';


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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 767);
    };

    const handleScroll = () => {
      if (window.innerWidth < 767) {
        return
      };

      const sections = document.getElementsByClassName('section')
      let notFound = true;
      for (let i = 0; i < sections.length; i++) {
        let element = sections[i];
        let elementPosition = element.getBoundingClientRect();
        let link = document.getElementById(element.id + 'Link');

        // Check if element is within the viewport and use an extra 5 pixels as a buffer for rounding errors
        if (notFound && elementPosition.top < window.innerHeight && elementPosition.bottom > 5) {
          link.classList.add(element.id + 'StyleActive')
          notFound = false;
        }
        else {
          link.classList.remove(element.id + 'StyleActive')
        }
      }
    }


    // Initial check on component mount
    handleResize();
    handleScroll();


    // Attach event listener for scroll
    document.getElementById('scrollable').addEventListener('scroll', handleScroll);

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.getElementById('scrollable').removeEventListener('scroll', handleScroll);
    };

  }, []);



  return (
    <Grid fluid >
      <div className='wrapper' style={{ width: '100vw' }}>

        <Col className='sidebar' xs={12} sm={2}>
          <Header />

        </Col>

        <Col id='scrollable' className='main' xs={12} sm={10}>
          <Intro style={{ width: '100vw' }} />
          <Suspense fallback={<div>Loading...</div>}>
            <About isSmallScreen={isSmallScreen} />
            <Experience isSmallScreen={isSmallScreen} />
            <Projects isSmallScreen={isSmallScreen} />
            <Skills isSmallScreen={isSmallScreen} />
            <Education isSmallScreen={isSmallScreen} />
            <Interests isSmallScreen={isSmallScreen} />
            <Contact isSmallScreen={isSmallScreen} />
            <Resume isSmallScreen={isSmallScreen} />
          </Suspense >
        </Col>

      </div>
    </Grid>
  );
}

export default App;
