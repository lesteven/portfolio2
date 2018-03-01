import React, { Component } from 'react';
import styles from './home.css';


class Home extends Component {

    render (){
        return (
            <div className='home'>
                <section>
                    <h1> Steven Le </h1>
                    <h3> Full Stack JS Web Developer </h3>
                    <h4> Front-End: </h4>
                    <p> React, Redux, React Router </p>
                    <p> Webpack, D3 </p>
                    <h4> Back-End: </h4>
                    <p> Node, Express </p>
                    <p> MongoDB, Mongoose </p>
                </section>
                <section className='contact'>
                    <h1> Contact </h1>
                    <p> Email: le_steven@outlook.com </p>
                </section>
            </div>
        )
    }
}


export default Home;
