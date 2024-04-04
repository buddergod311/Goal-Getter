import React from 'react';
import Card from './Card'
import Goal from './Goal';

const GoalList = (props) => {
  return (
    <Card className='users'>
      {props.items.map((goal) =>
        <Goal
          key={goal.id}
          img={goal.img}
          name={goal.name}
          desc={goal.desc}
          days={goal.days}
        />
      )}
    </Card>
  );
}

export default GoalList;
