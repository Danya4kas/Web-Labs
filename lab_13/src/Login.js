import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await fetch('https://dummyjson.com/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, expiresInMins: 30 }),
            });
            const data = await res.json();
            onLogin(data.accessToken);
        } catch (err) {
            console.error('Login failed', err);
        }
    };

    return (
        <div className="login-card">
            <div className="form">
                <h1>Sign in</h1>
                <p>User Name</p>
                <input
                    type="text"
                    placeholder="Enter Your User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="login-button" onClick={handleLogin}>
                    Login
                </div>
            </div>
        </div>
    );
};

export default Login;
