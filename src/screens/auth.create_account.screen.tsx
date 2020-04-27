import * as React from 'react';
import FormComponent from '../components/forms/form_component';
import SubmitButtonComponent from '../components/forms/submit_button.component';
import { Form } from 'react-bootstrap';

import { Repository } from '../repository/repository';
import EditText from '../components/forms/edit_text.component';
import { verify } from 'crypto';

export interface ICreateAccountScreenProps {
    history: any;
    children?: any;
}


/**
 * A basic login page. The data is sent retrieved using hooks, from the components.
 * 
 * @param props includes the history that you need in order to route.
 *              props.history.push is my main routing method.
 */
export default function CreateAccountScreen(props: ICreateAccountScreenProps) {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [verifyPass, setVerifyPass] = React.useState(null);

    const _callback = async () => {

        // Look in web browser's console to see this output.
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        try {
            await Repository.AuthProvider.signUpWithEmailAndPassword(email, password, verifyPass);
            props.history.push('/account');

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <FormComponent submissionCallback={_callback}>
            <Form.Label>Sign Up</Form.Label>
            <EditText
                placeholder='Email'
                onChange={setEmail}
            />
            <EditText
                placeholder='Password'
                onChange={setPassword}
                type='password'

            />
            <EditText
                placeholder='Verify password'
                onChange={setVerifyPass}
                type='password'

            />
            <SubmitButtonComponent></SubmitButtonComponent>
        </FormComponent>
    );
}
