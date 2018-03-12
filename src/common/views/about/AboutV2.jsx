import React, { Component, Fragment } from 'react';
import styles from './about.css';


class AboutV2 extends Component {
    
    render (){
        return (
            <Fragment>
            <div className='about-v2'>
                <div>
                    <h3>A little bit about me...</h3>
                    <p> &emsp;
                        Hello! Welcome to my website, my name is Steven and I
                        am a programmer whose main focus right now is on 
                        web development.
                        I mostly do front-end work in <b>react</b> and 
                        <b> redux</b>, but
                        I am also familiar with back-end work using 
                        <b> express</b> and <b>mongodb</b>.
                    </p>
                    <p> &emsp;
                        I started down this path in November 2016 after
                        graduating from college with an unrelated degree.
                        I found the CS field to be very fascinating, so I spend
                        most of my time honing this craft. Although 
                        it can be difficult at 
                        times, it is also very rewarding.  
                        At the moment,
                        my emphasis is on web development, but I am also open
                        to working on apps, softwares and dApps in the future.
                    </p>
                    <p> &emsp;
                        Besides programming, during my free time I like to work
                        out, play guitar and do outdoor activties such as 
                        hiking.
                    </p>
                    <p> &emsp;
                        Thank you for visiting! If you have any questions or
                        inquiries, you can email me at Le_Steven@outlook.com
                        or send me a message on LinkedIn.
                    </p>
                </div>
                <div className='about-image'>
                    <img />
                </div>
            </div>
            <div className='about-descrip center'>
                <p> 
                    This site uses universal react, so it has SEO benefits! 
                    It was created from scratch using react, redux, 
                    and react router.
                    Chart.js was used to create the radar chart.
                    I used mobile first development in order to achieve a 
                    mobile friendly design.
                </p>
            </div>
            </Fragment>
        )
    }
}


export default AboutV2;
