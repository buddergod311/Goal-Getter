'use client'
import { useState } from 'react';
import UsersList from './components/GoalList';
import AddUser from './components/AddGoal';
import Hdr from './components/Hdr';

function Home() {
  return (
    <div>
      <Hdr>Goal Getter</Hdr>
    </div>
  );
}

export default Home;