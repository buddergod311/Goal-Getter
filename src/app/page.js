'use client'
import Hdr from './components/Hdr';
import Title from './components/Title';
import Link from 'next/link';
import Button from './components/Button';
import './page.css';

function Home() {
  return (
    <div>
      <div className='pageTitle'>
        <Title />
      </div>
      <footer>
        <Hdr className='footer'><h1>Goal Getter</h1><Button><Link href='/dashboard'>Log in</Link></Button></Hdr>
      </footer>
    </div>
  );
}

export default Home;