import React from "react";

const User = ({users}) => {
    return(
        <div>
            <h1>User</h1>
            {users.map((user)=>(
                <div key={user.id}>
                    <h2>ID: {user.id}</h2>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return{
        props: {
            users,
        },
    };
}

export default User;