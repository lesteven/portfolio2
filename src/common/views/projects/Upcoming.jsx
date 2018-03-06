import React, { Component, Fragment } from 'react';
import Template from './Template.jsx';


const NA = () => {
    return (
        <li>Not applicable</li>
    )
}


const projects = [
    { title: 'FB Clone', photo: 'https://via.placeholder.com/400x200', 
        description: Template(NA, NA, NA)
    }, 
    { title: 'IG Clone', photo: 'https://via.placeholder.com/400x200', 
        description: Template(NA, NA, NA)
    }, 
    { title: 'Fake E-Commerce', photo: 'https://via.placeholder.com/400x200', 
        description: Template(NA, NA, NA)
    }, 
]


export default projects;
