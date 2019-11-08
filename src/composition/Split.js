import React from 'react';
import './Split.js';
import { tsPropertySignature } from '@babel/types';

function Split(props) {
    const combinedClassName = `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
        <div className={combinedClassName} style={newStyles}>
            {props.children}
        </div>
    );
}

export default Split;
