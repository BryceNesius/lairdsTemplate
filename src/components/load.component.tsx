import * as React from 'react';
import LoadingScreen from '../screens/loading.screen';
import RenderRoutes from './routing/render.routes';
import { useState } from 'react';



/**
 * @param routes            - the routes
 * @param completion        - the promise
 * 
 * @param loading_component - the component to show as the data is loading
 * @param render_component  - the component to render when data has successfully loaded
 * @param error_component   - the component to render when data was not successfully loaded
 */
export interface ILoadProps {
    routes: any
    completion: Promise<any>

    loading_component?: any
    render_component?: any
    error_component?: any
}

/**
 * When loading routes there are three separate definite states
 *  LOADING -   the initial state, when data to authenticate the route (such as sign in info)
 *              has not yet been retrieved
 * 
 *  SUCCESS -   Proper data to load route has been successfully retrieved
 * 
 *  ERROR   -   There was an error retrieving the required info
 * 
 */

export enum ROUTE_LOAD_STATE { LOADING, SUCCESS, ERROR }


const Load: React.FunctionComponent<ILoadProps> = (props) => {
    const [routeLoadState, setRouteLoadState] = useState(ROUTE_LOAD_STATE.LOADING);
    // const [success, setSuccess] =
    // Switch what is rendered depending upon the state.
    // const promise = new Promise((resolve, reject) => props.completion(resolve, reject));
    props.completion.then((loaded) => loaded ? setRouteLoadState(ROUTE_LOAD_STATE.SUCCESS) : setRouteLoadState(ROUTE_LOAD_STATE.ERROR))

    switch (routeLoadState) {
        case ROUTE_LOAD_STATE.LOADING:
            return props.loading_component ?? <LoadingScreen></LoadingScreen>
        case ROUTE_LOAD_STATE.SUCCESS:
            return props.render_component ?? <RenderRoutes routes={props.routes}></RenderRoutes>
        case ROUTE_LOAD_STATE.ERROR:
        default:
            return props.error_component ?? <h1>Error Screen...</h1>
    }
};

export default Load;
