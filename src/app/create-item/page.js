'use client'
import { useState } from 'react';
import UsersList from '../components/GoalList';
import AddGoal from '../components/AddGoal';
import Hdr from './../components/Hdr';

function Home() {

  return (
    <div>
      <Hdr><h1>Create new Goal</h1></Hdr>
      <AddGoal />
    </div>
  );
}

export default Home;