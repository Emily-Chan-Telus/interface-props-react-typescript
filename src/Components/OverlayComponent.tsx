import React from "react";
import { Alert } from '@material-ui/lab';
import { Error, Success, IOverlayComponent } from "../interfaces";
import OverlayAlert from './OverlayAlert';

const OverlayComponent = ({ message, severity }: IOverlayComponent) => {
    console.log(message)
    return (
        <div>
            <OverlayAlert message={message} severity={severity} />
        </div>
    )
}

export default OverlayComponent;

