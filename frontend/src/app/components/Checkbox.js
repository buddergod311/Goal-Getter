import React from 'react';
import './checkbox.css';

//I'm not sure if this still needs to be another whole element, but it's gone through
//a few ierations where it was necessary and going back now would be a lot of work.
const Checkbox = (props) => {

    const onChangeHandler = (event) => {
        props.comp[props.day] = event.target.checked;
        props.setComp(props.comp);
    }

    return (
        <input type='checkbox' onClick={onChangeHandler} defaultChecked={props.checked}/>
    )
}

export default Checkbox;