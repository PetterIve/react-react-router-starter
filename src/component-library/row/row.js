import * as React from "react";

import './row.css';

export const Row = (props) => {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}