import React, { Component } from 'react';
import styles from './about.css';
//import sharedStyles from '../sharedCss/sharedCss.css';


class About extends Component {
    
    render (){
        return (
            <div className='about'>
                <h2> A little bit about me: </h2>
                <p> I graduated with a degree in nutrition, </p>
                <p> but later realized that it wasn't for me. </p>

                <p>&nbsp;</p>

                <p> So I started looking at other fields and  </p>
                <p> stumbled across a CS class and never looked back!  </p>

                <p>&nbsp;</p>

                <p> My goal is to continuosly improve and </p>
                <p> to pursue the CS fields that interest me.</p>
            </div>
        )
    }
}


export default About;
