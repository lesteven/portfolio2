import React, { Component, Fragment } from 'react';
import styles from './about.css';
//const styles = require('./about.css');


class About extends Component {
    
    render (){
    console.log(styles.about);

        return (
            <Fragment>
            <p className= {styles.about}>About Page!</p>
            </Fragment>
        )
    }
}


export default About;
