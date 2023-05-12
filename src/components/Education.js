import React from 'react'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Syracuse from '../images/Syracuse.svg'
import Mustang from '../images/Mustang.png'

const appBarColor = '#A334B6';

const Education = () => {
    return (
        <div>
            <AppBar position="sticky" sx={{ background: appBarColor }}><h1>Education</h1></AppBar>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                            <img src={Syracuse} alt="Syracuse University" />
                            <h3>Master of Science, Computer Engineering</h3>

                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                            <img src={Syracuse} alt="Syracuse University" />
                            <h3>Bachelor of Science, Computer Engineering</h3>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                            <container>
                                <img src={Mustang} alt="Southern Methodist University" />
                            <h2>Southern Methodist University</h2>
                            </container>
                            <h3>Master of Business Administration</h3>
                            <h4>Concentration in Organizational Behavior</h4>
                            <h4>Concentration in Process Improvement</h4>
                            <h4>Beta Gamma Sigma</h4>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default Education