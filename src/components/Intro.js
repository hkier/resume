import React from 'react'
import Intropic from '../images/Intropic.jpg'
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


const Intro = () => {
    return (
        <div>
            <Navbar className="titlebar" sticky="top" >
                <h1>Howard Kier</h1>
            </Navbar>

            <Image src={Intropic} className='introImg   ' alt="Howard and Zazu" fluid="true" />
        </div>
    )
}
export default Intro