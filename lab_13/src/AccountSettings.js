import React, { useEffect, useState } from 'react';

const AccountSettings = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;
            try {
                const res = await fetch('https://dummyjson.com/auth/me', {
                    headers: { Authorization: token },
                });
                const data = await res.json();
                setUser(data);
            } catch (err) {
                console.error('Failed to fetch user', err);
            }
        };

        fetchUser();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="account-settings">
            <h1>Account Settings</h1>
            <h2>Welcome to your account settings</h2>
            <div className="user-card">
                <img src={user.image} alt="User Avatar" />
                <div className="acc-info">
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email}</p>
                </div>
                <button onClick={() => localStorage.clear()}>Logout</button>
            </div>
        </div>
    );
};

export default AccountSettings;
