// This is the main file for the website.  It calls all the other components 
// and displays them in the correct order.  It also imports the css file for the
// website and the bootstrap library.  The file also contains the code for the
// navigation bar, scrollspy and the code to for lazy loading of the components.

//import of the css file for the app
import 'bootstrap/dist/css/bootstrap.min.css';

//import of the components from the react-bootstrap library
import React, { Suspense, useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Grid from '@mui/material/Grid';

//import of the  first components to display on the page for faster load time
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
  // State to determine if the screen is small or not
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 767);
    };

    const handleScroll = () => {
      // Function to handle scroll
      // Don't run on small screens because the sidebar is hidden
      // and the scrollspy is not needed
      if (window.innerWidth < 767) {
        return
      };

      // Get all the sections and loop through them
      // The active class is used to change the color of left border of the link 
      // in the sidebar
      const sections = document.getElementsByClassName('section')
      let notFound = true;
      for (let i = 0; i < sections.length; i++) {
        // Get the section element
        let element = sections[i];

        // Get the position of the element
        let elementPosition = element.getBoundingClientRect();

        // Get the link element in the sidebar for this section
        let link = document.getElementById(element.id + 'Link');

        // Check if element is within the viewport and use an extra 5 pixels as a buffer for rounding errors
        // If it is, add the active class to the link element
        // If it is not, remove the active class from the link element
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

  const scrollableElement = document.getElementById('scrollable');
  if (scrollableElement) {
    scrollableElement.removeEventListener('scroll', handleScroll);
  }
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
