import React from 'react'
import Intropic from '../images/Intropic.jpg'
import AppBar from '@mui/material/AppBar';

const appBarColor = '#A334B6';
const Intro = () => {
    return (
        <div>
            <AppBar position="sticky" sx={{ background: appBarColor }}><h1>Howard Kier</h1></AppBar>
            <h1>Intro</h1>
            <p>photo here</p>
            <img src={Intropic} alt="Howard and Zazu" />
            </div>
    )
}
export default Intro