import React, { Component, Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import routesOptions from '../../routes.js';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './navBar.css';
import { connect } from 'react-redux';
import { toggleLinks } from '../../reduxModules/viewModule.js';


class NavBar extends Component {


    render() {
    const { showFlex } = this.props.view;
//    console.log(showFlex);
        const links = routesOptions.routes.map (e =>
            <Link to = { e.path } key = { e.path }>{e.title}</Link>
        )
        return (
            <nav className='nav-bar'>
                <a className='menu-icon' onClick = {this.props.toggleLinks}>
                    <img /> </a>
                <span className='links' style={{display:showFlex}}>
                    { links }</span>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view: state.view
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLinks: () => dispatch(toggleLinks())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
