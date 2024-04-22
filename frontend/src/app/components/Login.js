import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        if (userData.token) {
            router.push('/');
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

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/api/users/login', formData);
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            localStorage.setItem('auth-token', response.data.token);
            router.push('/');
        } catch (error) {
            console.error('Login failed: ', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
            <div>
                <div>
                <label>Email</label>
                <input 
                    type='text' 
                    name='email'
                    onChange={handleChange} 
                />
                </div>
                <div>
                <label>Password</label>
                <input
                    type='text'
                    name='password'
                    onChange={handleChange}
                />
                </div>
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
            </form>
        </div>
    )
};

export default Login;