import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Grid from '@material-ui/core/Grid'
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
//import Header from './Header';
import NavCol from './NavCol';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Interests from './Interests';
import Contact from './Contact';
import Resume from './Resume';
import Splash from './Splash';
//import Footer from './Footer';
//import theme from './theme';



//const muiTheme = createMuiTheme(theme)


const App = () => (
    <div className="app">

            <Router>
                <div className="app">
                    <NavCol />

                            <Routes>
                                <Route path="/about" component={About} />
                                <Route path="/projects" component={Projects} />
                                <Route path="/skills" component={Skills} />
                                <Route path="/education" component={Education} />
                                <Route path="/interests" component={Interests} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/resume" component={Resume} />
                                <Route path="/" component={Splash} />
                            </Routes>
                </div>
            </Router>

    </div>
);

export default App;