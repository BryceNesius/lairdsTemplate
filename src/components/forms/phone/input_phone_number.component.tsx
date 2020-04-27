import * as React from 'react';
import { Form } from 'react-bootstrap';

interface IInputPhoneNumberComponentProps {
    phoneRef: React.Ref<any>
}

const InputPhoneNumberComponent: React.FunctionComponent<IInputPhoneNumberComponentProps> = (props) => {
    return <Form.Group >
        <Form.Label>Phone number</Form.Label>
        <Form.Control
            id="phone"
            required
            type='text'
            placeholder="Enter Phone Number"
            ref={props.phoneRef}
        />
        <Form.Control.Feedback type='invalid'>Phone number must be valid</Form.Control.Feedback>
    </Form.Group>
};

export default InputPhoneNumberComponent;
