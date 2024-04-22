import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation';

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
            router.push('/');
        } catch (error) {
            console.error('Signup failed: ', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <div>
                <label>Email</label>
                <input 
                    type='text' 
                    name='email'
                    onChange={handleChange} 
                />
                <div>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    onChange={handleChange}
                />
                </div>
                </div>
                <div>
                <label>Password</label>
                <input
                    type='text'
                    name='password'
                    onChange={handleChange}
                />
                </div>
                <div>
                <label>Confirm Password</label>
                <input
                    type='text'
                    name='confirmPassword'
                    onChange={handleChange}
                />
                </div>
            </div>
            <div>
                <button type='submit'>Sign Up</button>
            </div>
            </form>
        </div>
    )
};

export default Signup;