import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateScreenSize } from './reduxModules/viewModule';
import NavBar from './views/navBar/NavBar.jsx';
import routesOptions from './routes.js';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { postData } from './reduxModules/fetchThunk';


class App extends Component {

    getScreenSize = () => {
        // update screenSize on reducer
        const { getScreenSize } = this.props;
        getScreenSize(window.innerWidth);
    }

    componentDidMount() {
        // triggers window event when window is resized
        window.addEventListener('resize', this.getScreenSize); 
        const { screenSize} = this.props.view;
        screenSize == null? this.getScreenSize(): null; 
    }

    render() {
        // mapped out client routes for reactRouter
        const reactRoutes = routesOptions.routes.map (e =>
            <Route exact = { e.exact } path = { e.path } 
                component = { e.component } key = { e.path} />
        )
        return (
            <Fragment>
                <NavBar />
                <Switch>
                    { reactRoutes }
                </Switch>
            </Fragment>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        view:state.view
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getScreenSize:(size) => dispatch(updateScreenSize(size)),
    }
}

// use withRouter to pass location to App
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


