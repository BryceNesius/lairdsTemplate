import * as React from 'react';
import FormComponent from '../components/forms/form_component';
import SubmitButtonComponent from '../components/forms/submit_button.component';
import { Form, Row, Col, Nav } from 'react-bootstrap';

import { Repository } from '../repository/repository';
import EditText from '../components/forms/edit_text.component';

export interface ILoginScreenProps {
  history: any;
  children?: any;
}


/**
 * A basic login page. The data is sent retrieved using hooks, from the components.
 * 
 * @param props includes the history that you need in order to route.
 *              props.history.push is my main routing method.
 */
export default function LoginScreen(props: ILoginScreenProps) {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const _callback = async () => {

    // Look in web browser's console to see this output.
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    try {
      await Repository.AuthProvider.signInWithEmailAndPassword(email, password);
      props.history.push('/account');

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <FormComponent submissionCallback={_callback}>
      <Form.Label>Sign In</Form.Label>
      <EditText
        placeholder='Email'
        onChange={setEmail}
      />
      <EditText
        placeholder='Password'
        onChange={setPassword}
        type='password'

      />
      <SubmitButtonComponent></SubmitButtonComponent>

      <Form.Group as={Row} style={{ 'marginBottom': '2vw' }}
      >
        <Col>
          <Nav.Link style={{ 'textAlign': 'center' }} onClick={() => props.history.push(`/createAccount`)} eventKey="link-1">Create Account</Nav.Link>

        </Col>
        <Col>
          <Nav.Link style={{ 'textAlign': 'center' }} onClick={() => props.history.push('/resetPassword')} eventKey="link-2">Reset Password</Nav.Link>
        </Col>
      </Form.Group>
    </FormComponent>
  );
}
