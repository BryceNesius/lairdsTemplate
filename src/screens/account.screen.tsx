import * as React from 'react';
import FormComponent from '../components/forms/form_component';
import SubmitButtonComponent from '../components/forms/submit_button.component';
import EditText from '../components/forms/edit_text.component';
import { Repository } from '../repository/repository';

export interface IAccountScreenProps {
}

export interface IAccountScreenState {
}

export function AccountScreen(props: IAccountScreenProps) {
  const [email, setEmail] = React.useState('');

  const promise = new Promise(async (resolve, reject) => {
    try {
      const email: string = await Repository.AccountProvider.getEmailAddress();
      resolve(email);
    } catch (error) {
      reject(error);
    }
  });
  promise.then((value: string) => setEmail(value));
  promise.catch((error) => console.error(error));

  return (
    <>
      <h1>Account screen</h1>
      <FormComponent >
        <EditText placeholder='email' initialValue={email} onChange={setEmail}></EditText>
        <SubmitButtonComponent title={'Confirm Changes'}></SubmitButtonComponent>
      </FormComponent>
    </>
  );
}

