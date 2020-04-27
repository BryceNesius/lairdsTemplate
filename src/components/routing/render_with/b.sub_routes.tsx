import React = require('react');
import { Route } from 'react-router';

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
export default function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props =>

                <route.component {...props} routes={route.routes} />
            }
        />
    );
}
