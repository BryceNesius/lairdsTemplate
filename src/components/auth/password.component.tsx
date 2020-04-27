import * as React from 'react';
import { Form } from 'react-bootstrap';

interface IPasswordComponentProps {
    passwordRef: React.Ref<any>
}

const PasswordComponent: React.FunctionComponent<IPasswordComponentProps> = (props) => {
    return <Form.Group >
        <Form.Control
            id='confirmPassword'
            required
            type='password'
            placeholder="Confirm Password"
            ref={props.passwordRef}
        />
        <Form.Control.Feedback type='invalid'>Passwords must match</Form.Control.Feedback>
    </Form.Group>;
};

export default PasswordComponent;
