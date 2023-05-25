import { Link } from 'react-router-dom';
import './register.scss';
import { useState } from 'react';
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
            await axios.post('http://localhost:8800/api/auth/register', inputs);
        } catch (err) {
            setErr(err.response.data);
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
                        <input name="username" type="text" placeholder="Username" onChange={handleChange} />
                        <input name="email" type="email" placeholder="Emailname" onChange={handleChange} />
                        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
                        <input name="name" type="text" placeholder="Name" onChange={handleChange} />
                        {err && err}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
