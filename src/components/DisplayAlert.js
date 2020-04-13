import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';

const DisplayAlert = props => {

    const [alertColor, setAlertColor] = useState('');

    useEffect(() => {
        switch(props.status){
            case 'success':
                setAlertColor('success');
                break;
            case 'fail':
                setAlertColor('danger');
                break;
            default:
                setAlertColor('primary');
                break;
        }
    }, [props.status])

    return(
        <Alert color={alertColor} isOpen={props.showAlert}>
            <p>{props.message}</p>
        </Alert>
    );

}

export default DisplayAlert;