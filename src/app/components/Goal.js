import React from 'react';
import './Goal.css';
import Checkbox from './Checkbox';

const Goal = props => {
    return (    
        <li key={props.id} className="user-item">
        <div className='goal'>
            <div className="user-info">
                <img src={props.img} className="user-img" alt={props.name} />
                <h2>{props.name}</h2>
                <h3>{props.desc} </h3>
            </div>
            {props.days[0] == 'on' ? <Checkbox>Sunday</Checkbox> : <p className = 'day'>Sunday</p>}
            {props.days[1] == 'on' ? <Checkbox>Monday</Checkbox> : <p className = 'day'>Monday</p>}
            {props.days[2] == 'on' ? <Checkbox>Tuesday</Checkbox> : <p className = 'day'>Tuesday</p>}
            {props.days[3] == 'on' ? <Checkbox>Wednesday</Checkbox> : <p className = 'day'>Wednesday</p>}
            {props.days[4] == 'on' ? <Checkbox>Thursday</Checkbox> : <p className = 'day'>Thursday</p>}
            {props.days[5] == 'on' ? <Checkbox>Friday</Checkbox> : <p className = 'day'>Friday</p>}
            {props.days[6] == 'on' ? <Checkbox>Saturday</Checkbox> : <p className = 'day'>Saturday</p>}
        </div>
        </li>
    )
}

export default Goal;
