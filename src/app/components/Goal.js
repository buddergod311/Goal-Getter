import React from 'react';
import './Goal.css';
import Checkbox from './Checkbox';
import Card from './Card';

const Goal = props => {
    // This is a lot of really messy code and I pity the poor soul who has to edit it later.
    // Long story short this formats the goals in 8 columns -- 1 for info and 1 for each day of the week.
    // There's so many divs because centering things is hell. Don't worry about it.
    return (    
        <li key={props.id} className="user-item">
        <div className='goal'>
                <div className="user-info">
                    <img src={props.img} className="user-img" alt={props.name} />
                    <h2>{props.name}</h2>
                    <h3>{props.desc} </h3>
                </div>
                <div className='goalGridItem'>
                    {props.days[0] == 'on' ? <Card className='day'><Checkbox /></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[1] == 'on' ? <Card className='day'><Checkbox /></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[2] == 'on' ? <Card className='day'><Checkbox /></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[3] == 'on' ? <Card className='day'><Checkbox /></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[4] == 'on' ? <Card className='day'><Checkbox /></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[5] == 'on' ? <Card className='day'><Checkbox /></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[6] == 'on' ? <Card className='day'><Checkbox /></Card> : <Card className='day' />}
                </div>
            </div>
        </li>
    )
}

export default Goal;
