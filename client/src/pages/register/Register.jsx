import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import axios from 'axios';

const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
    });
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            if (
                inputs.username.trim() !== '' &&
                inputs.email.trim() !== '' &&
                inputs.password.trim() !== '' &&
                inputs.name.trim() !== ''
            ) {
                await axios.post('http://localhost:8800/api/auth/register', inputs);
            } else throw new Error('Please enter all the boxes');
        } catch (err) {
            if (err.response?.data) setErr(err.response.data);
            else setErr(err.message);
        }
    };

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Welcome to our website.</p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange} />
                        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                        <input type="text" placeholder="Name" name="name" onChange={handleChange} />
                        {err && err}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
