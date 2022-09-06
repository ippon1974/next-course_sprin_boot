import {useState, useEffect} from 'react';
import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function Airlines({airlines:serverAirlines}) {

    const [airlines, setAirlines] = useState(serverAirlines);

    useEffect(()=>{
        async function load() {
            const response = await fetch('http://localhost:4300/airlines/all')
            const json = await response.json();
            setAirlines(json);
        }
        if(!serverAirlines){
            load();
        }
    }, []);

    return (
        <MainLayout title={'Airlines Page'}>
            <h1>Airlines Page</h1>
            <ul>
                {airlines.map(post => (
                    <li key={post.airlines_id}>
                        <Link href={`/post/[id]`} as={`/post/${post.airlines_id}`}>
                            <a>{post.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

export async function getServerSideProps({req}) {
    if(!req){
        return {post:null}
    }
    const response = await fetch('http://localhost:4300/airlines/all')
    const airlines = await response.json();

    return {props: {airlines}}
}