import React from 'react';
import Card from './Card'
import Goal from './Goal';

const GoalList = (props) => {
  return (
    <div>
      {props.items.map((goal) =>
        <Goal
          key={goal.id}
          img={goal.img}
          name={goal.name}
          desc={goal.desc}
          days={goal.days}
        />
      )}
    </div>
  );
}

export default GoalList;
