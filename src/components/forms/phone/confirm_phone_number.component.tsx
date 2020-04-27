import * as React from 'react';
import { Form } from 'react-bootstrap';

interface IConfirmPhoneNumberComponentProps {
    confirmCodeRef: React.Ref<any>

}

const ConfirmPhoneNumberComponent: React.FunctionComponent<IConfirmPhoneNumberComponentProps> = (props) => {
    return <Form.Group>
        <Form.Label>Code</Form.Label>
        <Form.Control
            required
            id="code"
            type='text'
            placeholder="confirmation code"
            ref={props.confirmCodeRef} />
    </Form.Group>
};

export default ConfirmPhoneNumberComponent;
