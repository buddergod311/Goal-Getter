import React from 'react';
import './Goal.css';
import Checkbox from './Checkbox';
import Card from './Card';
import { useState } from 'react';
import GoalOptions from './GoalOptions';


const Goal = props => {

    const [completion, setCompletion] = useState([false, false, false, false, false, false, false]);

    // This is a lot of really messy code and I pity the poor soul who has to edit it later.
    // Long story short this formats the goals in 8 columns -- 1 for info and 1 for each day of the week.
    // There's so many divs because centering things is hell. Don't worry about it.
    return (    
        <li key={props.id} className="user-item">
        <div className='goal'>
                <div className="user-info">
                    <img src={props.img} className="user-img" alt="" />
                    <br></br>
                    <h2>{props.name}</h2>
                    <h3>{props.desc} </h3>
                </div>
                <div className='goalGridItem'>
                    {props.days[0] ? <Card className='day'><Checkbox day={0} comp={completion} setComp={setCompletion}/></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[1] ? <Card className='day'><Checkbox day={1} comp={completion} setComp={setCompletion} checked={completion[1]}/></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[2] ? <Card className='day'><Checkbox day={2} comp={completion} setComp={setCompletion} checked={completion[2]}/></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[3] ? <Card className='day'><Checkbox day={3} comp={completion} setComp={setCompletion} checked={completion[3]}/></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[4] ? <Card className='day'><Checkbox day={4} comp={completion} setComp={setCompletion} checked={completion[4]}/></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[5] ? <Card className='day'><Checkbox day={5} comp={completion} setComp={setCompletion} checked={completion[5]}/></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    {props.days[6] ? <Card className='day'><Checkbox day={6} comp={completion} setComp={setCompletion} checked={completion[6]}/></Card> : <Card className='day' />}
                </div>
                <div className='goalGridItem'>
                    <GoalOptions id={props.id} />
                </div>
            </div>
        </li>
    )
}

export default Goal;
