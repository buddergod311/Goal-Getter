'use client'
import Hdr from './components/Hdr';
import Title from './components/Title';
import Button from './components/Button';
import './page.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Home() {

  const router = useRouter();

  const logIn = (event) => {
    event.preventDefault();
    router.push('./dashboard');
  }

  return (
    <div>
      <div className='pageTitle'>
        <Title />
      </div>
      <header>
        <Hdr className='footer'><h1>Goal Getter</h1><Button onClick={logIn}>Log In</Button></Hdr>
      </header>
    </div>
  );
}

export default Home;