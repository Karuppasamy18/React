import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './auth';

const PublicRoute = ({component: Component,  ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Redirect to="/add" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;