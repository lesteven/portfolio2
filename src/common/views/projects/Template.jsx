import React, { Component, Fragment } from 'react';



const Template = (frontEnd, backEnd, hosting) => {
    return (
        <Fragment>
            <h3 className='center'> Multimedia Production Website </h3>
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
                    { hosting() }
                </div>
            </div>
        </Fragment>
    )
}

export default Template;
