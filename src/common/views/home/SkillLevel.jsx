import React, { Component, Fragment } from 'react';

function MapList({descrip}) {
    const list = descrip.map( each => <li key={each}> { each } </li>);
    return (
        <Fragment>
        { list }
        </Fragment>
    )
}

const SkillLevel = ({title, descrip}) => {
    return (
        <div className= 'tech'>
            <div>
                { title }
            </div>
            <div>
                <MapList descrip={descrip} />
            </div>
        </div>
    )
}

export default SkillLevel;
