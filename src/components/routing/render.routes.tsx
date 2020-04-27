import React = require("react");
import { Switch, Route } from 'react-router';
import RouteWithSubRoutes from "./render_with/b.sub_routes";

export default function RenderRoutes({ routes }) {
    return (
        <Route render={props =>
            <Switch>
                {routes.map((route, i) => {
                    return <RouteWithSubRoutes key={route.key} {...route} />;
                })}
                <Route component={() => <h1>Not Found!</h1>} />
            </Switch>
        } />
    );
}