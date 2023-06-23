// Desc: This is the intro section for the website
// It is a functional component.




import React from 'react'
import Intropic from '../images/howard1.webp'
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


const Intro = () => {
    return (
        <div id='home'>
            <Navbar className="titlebar" sticky="top" >
                <div className='f1'>Howard Kier</div>
            </Navbar>

            <Image src={Intropic} className='introImg   ' alt="Howard photo" fluid="true" />
        </div>
    )
}
export default Intro