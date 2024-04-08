'use client'
import { useState } from 'react';
import UsersList from '../components/GoalList';
import Hdr from './../components/Hdr';
import Link from 'next/link';
import Button from './../components/Button';
import './page.css';
import Card from './../components/Card'
import { useRouter } from 'next/navigation'

function Home() {

  const router = useRouter();

  const [users, setUsers] = useState([]);
  
  const addGoalHandler = (goal) => {
    setUsers((prevGoals) => {
      return [goal, ...prevGoals]
    });
  };

  const logOut = (event) => {
    event.preventDefault();
    router.push('./');
  }

  const addItem = (event) => {
    event.preventDefault();
    router.push('./create-item');
  }

  return (
    <div>
      <Hdr><h1>Dashboard</h1> <Button onClick={logOut}>Log Out</Button></Hdr>
      <Card>
        <div className='daysHeader'>
          <p></p>
          <p>Sunday</p>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
        </div>
        <UsersList items={users} />
        <div className='footerButton'>
          <Button onClick={addItem}>+ New Goal</Button>
        </div>
      </Card>
    </div>
  );
}

export default Home;