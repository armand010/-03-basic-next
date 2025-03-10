import { useRouter } from "next/router";

const UserList =({user})=>{
    const router = useRouter();

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <h3>Address:</h3>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>City: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}

export default UserList;