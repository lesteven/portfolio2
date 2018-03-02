import React, { Component, Fragment } from 'react';
import styles from './home.css';
import Radar from './Radar.jsx';

class HomeV2 extends Component {

    render (){
        return (
            <Fragment>
                <header className='home-title'>
                <h1>
                    Power Level: Entry Level Developer
                </h1> 
                <p>Over 9000!</p>
                </header>
                <section className='profile'>
                    <div className='skill-level'>
                        <Radar/>
                    </div>
                    <div className='photo'>
                        <div className='img-wrap'>
                        <img/>
                        </div>
                    </div>
                </section>
                <section>
                </section>
            </Fragment>
        )
    }
}


export default HomeV2;
