import React, { Component, Fragment } from 'react';
import Template from './Template.jsx';
//import D3pix from './d3p.png';
/*
let d3pix = null;

if (typeof window !== undefined) {
    d3pix = require('./d3p.png');
}
*/



// Volcano production info
const VolcT = 'Multimedia Production Website';
const VolcFE = () => {
    return (
        <Fragment>
            <li>React, Redux, React Router</li>
            <li>Draft.js used as a rich text editor to create blogs</li>
            <li>Passport used for user authentication</li>
            <li>SendGrid used as email system</li>
            <li>Mobile friendly design</li>
            <li>File system storage</li>
        </Fragment>
    )
}
const VolcBE = () => {
    return (
        <li> Express, MongoDb</li>
    )
}
const VolcH = () => {
    return (
        <Fragment>
            <li>Digital Ocean VPS</li>
            <li>Implemented TLS</li>
        </Fragment>
    )
}

// D3 info
const D3T = 'Some D3 Projects';
const D3FE = () => {
    return (
        <Fragment>
            <li>Bar charts</li>
            <li>Heat map</li>
            <li>World map</li>
            <li>Scatter plot</li>
        </Fragment>
    )
}
const D3BE = () => {
    return (
        <li> Not applicable </li>
    )
}
const D3H = () => {
    return (
        <li>GitHub pages</li>
    )
}


const projects = [
    { 
        title: 'Volcano Production', 
        photo: 'https://via.placeholder.com/400x200',
        description: Template(VolcT,VolcFE, VolcBE, VolcH) 
    }, 
    { 
        title: 'D3', 
        photo: '/d3p.jpg',
        description: Template(D3T, D3FE, D3BE, D3H) 
    },
]


export default projects;
