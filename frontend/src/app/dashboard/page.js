'use client'
import { useState, useEffect } from 'react';
import GoalsList from '../components/GoalList';
import Hdr from './../components/Hdr';
import Button from './../components/Button';
import './page.css';
import Card from './../components/Card'
import { useRouter } from 'next/navigation'
import axios from 'axios';

function Home() {

  const router = useRouter();
  const [goals, setGoals] = useState([]);

  const logOut = (event) => {
    event.preventDefault();
    localStorage.removeItem('auth-token');
    router.push('./');
  }

  const addItem = (event) => {
    event.preventDefault();
    router.push('./create-item');
  }

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/goals', {headers:{'auth-token':localStorage.getItem('auth-token')}})
      .then((res) => {
        setGoals(res.data);
     })
     .catch((err) => {
       console.log(err);
     });
  }, []);

  return (
    <div>
      <Hdr><h1>{localStorage.getItem('username') + '\'s Dashboard'}</h1> <Button onClick={logOut}>Log Out</Button></Hdr>
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
        <GoalsList items={goals}/>
        <div className='footerButton'>
          <Button onClick={addItem}>+ New Goal</Button>
        </div>
      </Card>
    </div>
  );
}

export default Home;