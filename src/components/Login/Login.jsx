import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h1 className="heading">SafireChat</h1>
            <p className="subheading">Please Sign Up To Your Account</p>

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <FaUser className="input-icon" />
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                    />
                </div>

                <div className="input-wrapper">
                    <FaLock className="input-icon" />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                    />
                </div>

                <button type="submit" className="btn">
                    Create Account
                </button>

                <div className="account-info">
                    <span className="text-gray">Already Have Account? </span>
                    <span className="text-red">Login</span>
                </div>
            </form>
        </div>
    );
}

export default Login;
