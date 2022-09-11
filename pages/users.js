import {useState, useEffect} from 'react';
import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function Users({users:serverPosts}) {

    const [users, setUsers] = useState(serverPosts);

    useEffect(()=>{
        async function load() {
            const response = await fetch('http://localhost:4300/users/all')
            const json = await response.json();
            setUsers(json);
        }
        if(!serverPosts){
            load();
        }
    }, []);

    if(!users){
        return <MainLayout>
            <p>...Loading</p>
        </MainLayout>
    }

    return (
        <MainLayout title={'Users Page'}>
            <h1>Users Page</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link href={`/user/[id]`} as={`/user/${user.id}`}>
                            <a>{user.username}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )

}