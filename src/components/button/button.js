import * as React from 'react';
import * as classnames from 'classnames';

import './button.css';

export const Button = (props) => {
    const className = classnames (
        'button',
        { rounded: props.rounded },
        props.className
    );
    return (
        <button
            className={className}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}