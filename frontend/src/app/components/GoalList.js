import React from 'react';
import Goal from './Goal';

const GoalList = (props) => {

  return (
    <div>
      {props.items.map((goal) =>
        <Goal
          key={goal._id}
          img={goal.image}
          name={goal.title}
          desc={goal.description}
          days={[goal.sunday, goal.monday, goal.tuesday, goal.wednesday, goal.thursday, goal.friday, goal.saturday]}
        />
      )}
    </div>
  );
}

export default GoalList;
