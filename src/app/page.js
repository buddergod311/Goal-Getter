'use client'
import { useState } from 'react';
import UsersList from './components/GoalList';
import AddUser from './components/AddGoal';
import Hdr from './components/Hdr';
import Title from './components/Title';

function Home() {
  return (
    <div>
      <Hdr>Goal Getter</Hdr>
      <Title />
    </div>
  );
}

export default Home;