import './App.css';
import React from 'react';
//import Main from './components/Main';
import Grid from '@mui/material/Grid';
import NavCol from './components/NavCol';


function App() {
  return (
    <div className="App">
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs='10%'> 
      <NavCol />
      </Grid>
      </Grid>
    </div>

  );
}

export default App;
