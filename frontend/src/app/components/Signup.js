import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation';
import Button from './Button';

const Signup = () => {
    const router = useRouter();
    const { setUserData } = useContext(UserContext);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8082/api/users/signup', formData);
            const loginRes = await axios.post('http://localhost:8082/api/users/login', {
                email: formData.email,
                password: formData.password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem('auth-token', loginRes.data.token);
            localStorage.setItem('username', loginRes.data.user.username);
            router.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                    type='text' 
                    name='email'
                    onChange={handleChange} 
                />
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type='text'
                    name='password'
                    onChange={handleChange}
                />
                <label>Confirm Password</label>
                <input
                    type='text'
                    name='confirmPassword'
                    onChange={handleChange}
                />
            <div>
                <Button type='submit'>Sign Up</Button>
            </div>
            </form>
            <Button onClick={cancel}>Cancel</Button>
        </div>
    )
};

export default Signup;