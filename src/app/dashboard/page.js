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
  const DUMMY_LIST = [
    {
      id: 'g1',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SLLXZqBDxrz2kXxdMcOufgHaHa%26pid%3DApi&f=1&ipt=e099af6dc39b69ed330e9570ad2180f3ef031d99eaddceb6fd33582de6467c59&ipo=images',
      name: 'Exercise',
      desc: 'Exercise 30 minutes a day, every weekday.',
      days: ['off', 'on', 'on', 'on', 'on', 'on', 'off']
    },
    {
      id: 'g2',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F264%2F948%2Foriginal%2Fwood-bed-with-green-blanket-vector.jpg&f=1&nofb=1&ipt=c7fdd45ebc3a7a67f77e027a0edcb542069333afdcc9335558f025f337632014&ipo=images',
      name: 'Sleep',
      desc: 'Get 8 hours of sleep, from 11:00 to 7:00, everyday.',
      days: ['on', 'on', 'on', 'on', 'on', 'on', 'on']
    },
    {
      id: 'g3',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3hBfa6nezxje3OsxxVkUgwAAAA%26pid%3DApi&f=1&ipt=e503a3e1febdfe2eeecdb904173d900b14a98602d625ed9c2a0996d652d0a6a7&ipo=images',
      name: 'Take out the trash',
      desc: 'Take out the trash every Friday.',
      days: ['off', 'off', 'off', 'off', 'off', 'on', 'off']
    }
  ];

  const router = useRouter();

  const [users, setUsers] = useState(DUMMY_LIST);
  
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