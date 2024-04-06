'use client'
import { useState } from 'react';
import UsersList from '../components/GoalList';
import AddGoal from '../components/AddGoal';
import Hdr from './../components/Hdr';
import './page.css'

function Home() {

  return (
    <div>
      <Hdr><h1>Create new Goal</h1></Hdr>
      <div className='createForm'>
        <AddGoal />
      </div>
    </div>
  );
}

export default Home;