import React from 'react';
import Button from './Button';

const Checkbox = (props) => {
    return (
        <div className = 'day'>
            <p>{props.children}</p>
            <Button>Incomplete</Button>
        </div>
    )
}

export default Checkbox;