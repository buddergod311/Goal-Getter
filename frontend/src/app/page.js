'use client'
import Hdr from './components/Hdr';
import Title from './components/Title';
import Button from './components/Button';
import Login from './components/Login';
import Signup from './components/Signup';
import './page.css';
import { useRouter } from 'next/navigation';
import { UserProvider } from './context/UserContext';

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
    <UserProvider>
      <header>
        <Hdr><h1>Goal Getter</h1><Button onClick={logIn}>Log In</Button></Hdr>
      </header>
      <div className='pageTitle'>
        <Title />
      </div>
      <Login />
      <Signup />
      <footer>
        <Hdr><Button onClick={example}>See a Demo</Button></Hdr>
      </footer>
    </UserProvider>
  );
}

export default Home;