'use client'
import Hdr from './../components/Hdr';
import Login from './../components/Login';
import Card from './../components/Card';
import './page.css';
import { useRouter } from 'next/navigation';
import { UserProvider } from './../context/UserContext';

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
      <header className='hdr2'>
        <h1>Log In</h1>
      </header>
      <div className='logForm'>
        <Card><Login /></Card>
      </div>
    </UserProvider>
  );
}

export default Home;