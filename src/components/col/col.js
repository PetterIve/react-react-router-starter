import * as React from "react";

import './col.css';

export const Col = (props) => {
    return (
        <div className="col">
            {props.children}
        </div>
    )
}