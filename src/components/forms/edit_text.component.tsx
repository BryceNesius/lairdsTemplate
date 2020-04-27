import * as React from 'react';
import { Form } from 'react-bootstrap';

/**
 * @param initialValue  : the initial value that the edit text will hold.
 * @param type          : the type of form control. for password enter 'password'
 * @param id            : the id of the edit text
 * @param placeholder   : the grey text that shows up before typing
 * @param onChange      : this callback is the setter for the state.
 */
interface IEditTextProps {
    initialValue?: string
    type?: string
    id?: string
    placeholder: string
    onChange: React.Dispatch<any>
}

/**
 * 
 *  This EditText is highly configurable. The bootstrap components were a little wordy, so I condensed into this.
 */
const EditText: React.FunctionComponent<IEditTextProps> = (props) =>
    <Form.Group controlId={props.id ?? props.placeholder} >
        <Form.Control
            required
            type={props.type ?? 'text'}
            placeholder={props.placeholder}
            defaultValue={props.initialValue ?? null}
            onChange={(event) => props.onChange(event.target.value)}
        />
    </Form.Group>


export default EditText;
