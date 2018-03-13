import React, { Component, Fragment } from 'react';



const Template = (title, link, frontEnd, backEnd, hosting) => {
    return (
        <Fragment>
            <h3 className='center'> { title } </h3>
            <div className='tech'>
                <div>
                    <p> Link: </p>
                </div>
                <div>
                    { link() }
                </div>
            </div>
            <div className='tech'>
                <div>
                    <p>Front end:</p>   
                </div>
                <div>
                    { frontEnd() }
                </div>
            </div>
            <div className='tech'>
                <div>
                    <p>Back end:</p>
                </div>
                <div>
                    { backEnd() }
                </div>
            </div>
            <div className='tech'>
                <div>
                    <p>Server Hosting:</p>
                </div>
                <div>
                    <li> { hosting } </li>
                </div>
            </div>
        </Fragment>
    )
}

export default Template;
