'use client'
import Hdr from './../components/Hdr';
import Signup from './../components/Signup';
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
      <header>
        <Hdr>Sign in</Hdr>
      </header>
      <div className='logForm'>
        <Card><Signup /></Card>
      </div>
    </UserProvider>
  );
}

export default Home;