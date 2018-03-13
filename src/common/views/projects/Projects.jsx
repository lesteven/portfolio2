import React, { Component } from 'react';
import styles from './projects.css';
import list from './projectsList.js';
import upcoming from './Upcoming.jsx';



class Projects extends Component {

    render (){
        let map = list.map( e => {
            return (
            <div key ={ e.title } className='project'>
                <div className='project-title'> 
                    <h3 className='center'> { e.title } </h3>
                    <div className={`center ${e.title}`}>
                        <img src={e.photo} /></div>
                </div>
                <div className='project-descrip'> { e.description }</div>
            </div>
            )
        })
        return (
            <div className='projects-wrapper'>
                <section className='projects'>
                { map }
                </section>
                <h3 className='center'> More coming soon! </h3>
            </div>
        )
    }
}


export default Projects;
