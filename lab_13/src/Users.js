import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();
            setUsers(data.users);
        };

        fetchUsers();
    }, []);

    return (
        <div className="content">
            <h1 className="head-txt">All Users</h1>
            <div className="container">
                {users.map((user) => (
                    <div className="card" key={user.id}>
                        <h1>{user.username}</h1>
                        <img src={user.image} alt="User Avatar" />
                        <div className="info">
                            <p>First Name: {user.firstName}</p>
                            <p>Last Name: {user.lastName}</p>
                            <p>Gender: {user.gender}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
