import React from 'react';
import './heading.css';

const Heading = (props) => {
    return(
        <div className="heading">
            <h1 text-allign="center">{props.children}</h1>
        </div>
 )};

export default Heading;