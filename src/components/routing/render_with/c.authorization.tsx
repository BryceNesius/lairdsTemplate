import * as React from 'react'
import { Repository } from '../../../repository/repository';
import Load from '../../load.component';


export default function EnforceAuthorization(props) {




    // The component we will render upon error
    const errorComponent = <h1>Implement authorization</h1>;
    let callback = Repository.AuthProvider.refreshSignIn();

    return <Load completion={callback} errorScreen={errorComponent}{...props}></Load>
}