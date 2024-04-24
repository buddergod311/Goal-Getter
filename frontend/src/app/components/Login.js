import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation';
import Button from './Button'

const Login = () => {
    const router = useRouter();
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        if (userData.token) {
            router.push('/dashboard');
        }
    }, [userData.token, router]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const cancel = e => {
        e.preventDefault();
        router.push('/');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/api/users/login', formData);
            setUserData({
                token: response.data.token,
            });
            localStorage.setItem('auth-token', response.data.token);
            localStorage.setItem('username', response.data.user.username);
            router.push('/');
        } catch (error) {
            alert(error.response.data.msg)
        }
    };

    return (
        <div class='login'>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input 
                    type='text'
                    name='email'
                    onChange={handleChange} 
                />
                <label>Password</label>
                <input
                    type='text'
                    name='password'
                    onChange={handleChange}
                />
            <div>
                <Button type='submit'>Login</Button>
            </div>
            </form>
            <Button onClick={cancel}>Cancel</Button>
        </div>
    )
};

export default Login;