import React from "react";
import { Alert } from '@material-ui/lab';
import { Error, Success } from "../interfaces";

const OverlayAlert = ({ message, status }: Error) => {
    return (
        <div>
            {console.log("alert")}
            <Alert severity="warning">{message}</Alert>
        </div>
    )
}

export default OverlayAlert;

