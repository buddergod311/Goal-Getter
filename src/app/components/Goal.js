import React from 'react';
import './Goal.css';

const Goal = props => {
    return (    
        <li key={props.id} className="user-item">
        <img src={props.img} className="user-img" alt={props.name} />
        <div className="user-info">
            <h2>{props.name}</h2>
            <h3>{props.desc} </h3>
            <h3 className="user-content">{props.days}</h3>
        </div>
        </li>
    )
}

export default Goal;
