import * as React from 'react';
import { Form } from 'react-bootstrap';


export interface IFormComponentProps {
    submissionCallback?(e: Event, that: any): any
    children?: any

}


const FormComponent = (props: IFormComponentProps) => {
    const [validated, setValidated] = React.useState(false);
    return (
        <Form noValidate className='fill-vertical' id='formComponent' validated={validated}

            onSubmit={event => {

                event.preventDefault();
                if (validate(event, setValidated)) {
                    props.submissionCallback(event, this) ?? null;
                }
            }}>
            {props.children ?? <></>}
        </Form>
    );
}


/**
 * 
 * @param event the submission Event
 * @param _this context of the component
 * 
 * @returns whether or not each input had valid data
 */
const validate = (event: any, setValidated: any) => {
    //get the form
    const form = event.currentTarget;

    //check and see if a value has been put in each field
    const _valid = form.checkValidity();
    if (!_valid) {
        //Do not submit the form if not valid. 
        event.preventDefault();
        event.stopPropagation();
    }

    // Show the validation results
    setValidated(true);

    return _valid;
}

export default FormComponent;