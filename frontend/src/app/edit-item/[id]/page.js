'use client'
import { useState } from 'react';
import EditGoal from '../../components/EditGoal';
import Hdr from '../../components/Hdr';
import './page.css'

function Home({ params }) {

  return (
    <div>
      <Hdr><h1>Edit Goal</h1></Hdr>
      <div className='createForm'>
        <EditGoal id={params.id}/>
      </div>
    </div>
  );
}

export default Home;