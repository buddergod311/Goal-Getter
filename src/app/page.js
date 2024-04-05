'use client'
import Hdr from './components/Hdr';
import Title from './components/Title';
import Link from 'next/link';
import Button from './components/Button';

function Home() {
  return (
    <div>
      <Hdr><h1>Goal Getter</h1><Button><Link href='/dashboard'>Log in</Link></Button></Hdr>
      <Title />
    </div>
  );
}

export default Home;