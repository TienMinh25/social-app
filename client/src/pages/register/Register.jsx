import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
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
                        <input name="username" type="text" placeholder="Username" />
                        <input name="email" type="email" placeholder="Emailname" />
                        <input name="password" type="password" placeholder="Password" />
                        <input name="name" type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
