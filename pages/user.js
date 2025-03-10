import React from "react";

const User = ({users}) => {
    return(
        <div>
            <h1>User</h1>
            {users.map((user)=>(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
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