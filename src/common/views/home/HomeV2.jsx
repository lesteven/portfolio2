import React, { Component, Fragment } from 'react';
import styles from './home.css';
import SkillLevel from './SkillLevel.jsx';


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
                        <h3>Languages </h3>
                        <SkillLevel 
                            title = 'Javascript'
                            descrip = {[
                                'Proficient',
                                `Able to build full stack js apps 
                                  (SPAs and Isomorphic/Universal Apps)`
                            ]}
                        />
                        <SkillLevel
                            title = 'Java'
                            descrip = {[
                                'Competent',
                                `Able to solve algorithmic problems`
                            ]} 
                        />
                        <h3> Web Dev </h3>
                        <SkillLevel
                            title = 'Front-End'
                            descrip = {[
                                'Proficient',
                                `Tech: react, redux, react router, webpack`
                            ]}
                        />
                        <SkillLevel
                            title = 'Back-End'
                            descrip = {[
                                'Competent',
                                `Tech: express, mongodb, mongoose, digital
                                    ocean`
                            ]}
                        />
                    </div>
                    <div className='photo'>
                        <div className='img-wrap'>
                            <img/>
                        </div>
                    </div>
                </section>
                <section className='icons'>
                    <div className='li-icon'>
                        <a href='https://www.linkedin.com/in/stevennle/'>
                            <img/>
                        </a>
                    </div>
                    <div className='gh-icon'>
                        <a href = 'https://github.com/lesteven'>
                            <img/>
                        </a>
                    </div>
                </section>
            </Fragment>
        )
    }
}


export default HomeV2;
