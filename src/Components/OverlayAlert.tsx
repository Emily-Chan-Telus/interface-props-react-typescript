import React from "react";
import { Alert } from '@material-ui/lab';
import { Error, Success } from "../interfaces";


const OverlayAlert = ({ message, severity }: Error) => {
    return (
        <div>
            <Alert severity={severity} onClose={() => { }}>{message} </Alert>
        </div>
    )
}

export default OverlayAlert;

