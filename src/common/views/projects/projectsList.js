import React, { Component, Fragment } from 'react';


const  Volcano = () => {
    return (
        <Fragment>
            <h3 className='center'> Multimedia Production Website </h3>
            <div className='tech'>
                <div>
                    <p>Front end:</p>   
                </div>
                <div>
                    <li>React, Redux, React Router</li>
                    <li>Draft.js used as a rich text editor to create blogs</li>
                    <li>Passport used for user authentication</li>
                    <li>SendGrid used as email system</li>
                    <li>Mobile friendly design</li>
                    <li>File system storage</li>
                </div>
            </div>
            <div className='tech'>
                <div>
                    <p>Back end:</p>
                </div>
                <div>
                    <li> Express, MongoDb</li>
                </div>
            </div>
            <div className='tech'>
                <div>
                    <p>Server Hosting:</p>
                </div>
                <div>
                    <li>Digital Ocean VPS</li>
                    <li>Implemented TLS</li>
                </div>
            </div>
        </Fragment>
    )
}




const projects = [
    { title: 'Volcano Production', photo: 'https://via.placeholder.com/400x200',
         description: Volcano 
    }, 
    { title: 'V2', photo: 'https://via.placeholder.com/400x200', 
        description: Volcano 
    }, 
    { title: 'V3', photo: 'https://via.placeholder.com/400x200', 
        description: Volcano 
    }, 
    { title: 'V4', photo: 'https://via.placeholder.com/400x200', 
        description: Volcano 
    }, 
    { title: 'V5', photo: 'https://via.placeholder.com/400x200', 
        description: Volcano 
    }, 
]


export default projects;
