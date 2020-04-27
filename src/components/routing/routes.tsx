import * as React from 'react';
import { Redirect } from 'react-router-dom';
import HomeScreen from '../../screens/home.screen';
import LoginScreen from '../../screens/auth.login.screen';
import EnforceAuthorization from './render_with/c.authorization';
import { AccountScreen } from '../../screens/account.screen';
import CreateAccountScreen from '../../screens/auth.create_account.screen';
import ResetPasswordScreen from '../../screens/auth.reset_password.screen';


/**
 * In order for any of these AUTHORIZED_ROUTES to
 */
const AUTHORIZED_ROUTES = [
    {
        path: '/account', key: 'ACCOUNT', exact: true, component: AccountScreen
    }
]


const ROUTES = [
    {
        path: '/resetPassword', key: 'RESET_PASSWORD', exact: true, component: ResetPasswordScreen
    },
    {
        path: '/createAccount', key: 'CREATE_ACCOUNT', exact: true, component: CreateAccountScreen
    },
    {
        path: '/login', key: 'LOGIN', exact: true, component: LoginScreen
    },
    {
        path: '/', key: 'CLASSIFIEDS', exact: true, component: HomeScreen
    },

    /**
     *  This is where routing gets tricky and confusing...
     *  So I created a component for enforcing the authorization of an account.
     *  I.E. you can't see an account's details if you aren't logged in. This is applicable to many other cases
     *  but just a simple example.
     */
    {
        path: '/account', key: 'AUTHORIZED_ROUTES', 
        component: EnforceAuthorization,    //  Dive into EnforceAuthorization to understand more
        routes: AUTHORIZED_ROUTES           //  AUTHORIZED_ROUTES is defined above
    },
    {
        
        //since exact: false, this picks up any routes not defined above.
        path: '/', key: 'HOME', exact: false, component: () => <Redirect to={'/'} />
    }
];




export default ROUTES;





