import React, { Component, Fragment } from 'react';
import Template from './Template.jsx';



// Volcano production info
const VolcT = 'Multimedia Production Website';
/*
const VolcL = () => {
    return (
        <a href='https://www.volcanoboyz.com'> Volcano Production </a>
    )
}
*/
const VolcL = () => {
    return (
        <p>Coming soon!</p>
    )    
}
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
/*
const VolcH = () => {
    return (
        <Fragment>
            <li>Digital Ocean VPS</li>
            <li>Implemented TLS</li>
        </Fragment>
    )
}
*/
const VolcH = 'Digital Ocean VPS';

// D3 info
const D3T = 'Some D3 Projects';

const D3L = () => {
    return (
        <Fragment>
            <a href='https://lesteven.github.io/bar-chart'> Bar Graph, </a>
            <a href='https://lesteven.github.io/scatterplot'> Scatter Plot, </a>
            <a href='https://lesteven.github.io/heatmap'> Heat Map, </a>
            <a href='https://lesteven.github.io/globe'> World Map </a>
        </Fragment>
    )
}
const D3FE = () => {
    return (
        <Fragment>
            <li>D3 libary used to create charts and graphs</li>
            <li>Data provided by freecodecamp.com</li>
        </Fragment>
    )
}
const D3BE = () => {
    return (
        <li> Not applicable </li>
    )
}
/*
const D3H = () => {
    return (
        <li>GitHub pages</li>
    )
}
*/
const D3H = 'Github pages';

const projects = [
    { 
        title: 'Volcano Production', 
        photo: 'https://via.placeholder.com/400x200',
        description: Template(VolcT, VolcL, VolcFE, VolcBE, VolcH) 
    }, 
    { 
        title: 'D3', 
        photo: '/d3p.jpg',
        description: Template(D3T, D3L, D3FE, D3BE, D3H) 
    },
]


export default projects;
