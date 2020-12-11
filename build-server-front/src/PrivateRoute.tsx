
import React from 'react';
import {Route, Redirect, RouteProps} from "react-router-dom";

interface IProps extends RouteProps{
    component: React.ComponentType<any>,
}

const PrivateRoute: React.FC<IProps> = ({component: Component, ...rest}) => {
    return <Route {...rest} render={props => (
        localStorage.getItem('accessToken')
            ? <Component {...props}/>
            : <Redirect to={{ pathname: '/login', state: {from: props.location} }}/>
    )}/>
    }

export default PrivateRoute;