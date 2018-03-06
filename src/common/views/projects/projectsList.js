import React, { Component, Fragment } from 'react';
import Template from './Template.jsx';

// Volcano production info
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
    { title: 'Volcano Production', photo: 'https://via.placeholder.com/400x200',
         description: Template(VolcFE, VolcBE, VolcH) 
    }, 
    { title: 'D3 Projects', photo: 'https://via.placeholder.com/400x200', 
        description: Template(D3FE, D3BE, D3H) 
    }, 
]


export default projects;
