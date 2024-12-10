import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import AccountSettings from './components/AccountSettings';
import Users from './components/Users';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div>
            <Header onHomeClick={() => (window.location.href = '/')} />
            {!token ? <Login onLogin={(token) => setToken(token)} /> : <Users />}
        </div>
    );
};

export default App;
