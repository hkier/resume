import React from 'react'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const Education = () => {
    return (
        <div>
            <h1>Education</h1>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                            <h2>Syracuse University</h2>
                            <h3>Master of Science, Computer Engineering</h3>

                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                            <h2>Syracuse University</h2>
                            <h3>Bachelor of Science, Computer Engineering</h3>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                            <h2>Southern Methodist University</h2>
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