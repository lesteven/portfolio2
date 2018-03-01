import React, { Component } from 'react';
import styles from './home.css';
import Radar from './Radar.jsx';

class HomeV2 extends Component {

    render (){
        return (
            <section className='profile'>
                <div className='skill-level'>
                    <Radar/>
                </div>
                <div className='photo'>
                    <img/>
                </div>
            </section>
        )
    }
}


export default HomeV2;
