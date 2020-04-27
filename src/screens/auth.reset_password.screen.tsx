import * as React from 'react';
import { Repository } from '../repository/repository';
import FormComponent from '../components/forms/form_component';
import { Form } from 'react-bootstrap';
import EditText from '../components/forms/edit_text.component';
import SubmitButtonComponent from '../components/forms/submit_button.component';

interface IResetPasswordScreenProps {
    history: any
}

const ResetPasswordScreen: React.FunctionComponent<IResetPasswordScreenProps> = (props) => {
    const [email, setEmail] = React.useState(null);

    const _callback = async () => {

        // Look in web browser's console to see this output.
        console.log(`Email: ${email}`);
        try {
            await Repository.AuthProvider.resetPasswordWithEmail(email);
            props.history.push('/login');

        } catch (error) {
            console.error(error);
        }
    }
    return <FormComponent submissionCallback={_callback}>
        <Form.Label>Reset Password</Form.Label>
        <EditText
            placeholder='Email'
            onChange={setEmail}
        />
        <SubmitButtonComponent></SubmitButtonComponent>
    </FormComponent>
};


export default ResetPasswordScreen;
