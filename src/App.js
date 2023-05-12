import './App.css';

import React from 'react';
import Grid from '@mui/material/Grid';
import  Box  from '@mui/material/Box';

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
    <div className="App">
      <Box sx={{ marginX: 3}}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs='10%' sm='20%'>
          <NavCol />
        </Grid>
        <Grid xs='90%' sm='80%'>
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Interests />
          <Contact />
          <Resume />
        </Grid>
      </Grid>
    </Box>
    </div>

  );
}

export default App;
