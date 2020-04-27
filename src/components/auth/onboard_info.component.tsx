import * as React from 'react';
import { Form } from 'react-bootstrap';
import EditText from '../forms/edit_text.component';

interface IOnboardInfoComponentProps {
  setFirstName: React.Dispatch<any>
  setLastName: React.Dispatch<any>
}

const OnboardInfoComponent: React.FunctionComponent<IOnboardInfoComponentProps> = (props) => {
  return <Form.Group controlId="formName">
    <Form.Label>What's your name?</Form.Label>
    <EditText
      placeholder='First name'
      onChange={props.setFirstName}
    />
    {/* <VerticalPadding padding='2vh' /> */}
    <EditText
      placeholder='Last name'
      onChange={props.setLastName}
    />
  </Form.Group>;
};

export default OnboardInfoComponent;
