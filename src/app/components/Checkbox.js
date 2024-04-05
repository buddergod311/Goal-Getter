import React from 'react';

const Checkbox = (props) => {
    return (
        <div className = 'day'>
            <p>{props.children}</p>
            <input type='checkbox'></input>
        </div>
    )
}

export default Checkbox;