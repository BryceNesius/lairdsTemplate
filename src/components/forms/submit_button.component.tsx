import * as React from 'react';
import { Button } from 'react-bootstrap';

interface ISubmitButtonComponentProps {
    title?: string
    handleClick?: any
}

const SubmitButtonComponent: React.FunctionComponent<ISubmitButtonComponentProps> = (props) => {

    return <>
        <div className='fill-vertical' />

        <div className='center-content'>

            <Button type='submit' className='submit-button' onClickCapture={(e) => {
                if(props.handleClick) props.handleClick();
            }
            }>
                {props.title ?? 'Next'}

            </Button>
        </div>
    </>


};

export default SubmitButtonComponent;