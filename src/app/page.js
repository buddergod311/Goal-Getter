'use client'
import Hdr from './components/Hdr';
import Title from './components/Title';
import Button from './components/Button';
import './page.css';
import { useRouter } from 'next/navigation';

function Home() {

  const router = useRouter();

  const logIn = (event) => {
    event.preventDefault();
    router.push('./dashboard');
  }

  const example = (event) => {
    event.preventDefault();
    router.push('./example');
  }

  return (
    <div>
      <header>
        <Hdr><h1>Goal Getter</h1><Button onClick={logIn}>Log In</Button></Hdr>
      </header>
      <div className='pageTitle'>
        <Title />
      </div>
      <footer>
        <Hdr><Button onClick={example}>See an Example</Button></Hdr>
      </footer>
    </div>
  );
}

export default Home;