import {useState, useEffect} from 'react';
import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function Airlines({airlines:serverAirlines}) {

    const [airlines, setAirlines] = useState(serverAirlines);

    useEffect(()=>{
        async function load() {
            const response = await fetch('http://23.105.246.179:4300/airlines/all')
            const json = await response.json();
            setAirlines(json);
        }
        if(!serverAirlines){
            load();
        }
    }, []);

    if(!airlines){
        return <MainLayout>
            <p>...Loading</p>
        </MainLayout>
    }

    return (
        <MainLayout title={'Airlines Page'}>
            <h1>Airlines Page</h1>
            <ul>
                {airlines.map(post => (
                    <li key={post.airlines_id}>
                        <Link href={`/airline/[id]`} as={`/airline/${post.airlines_id}`}>
                            <a title={post.name}>{post.name}</a>
                        </Link> / {post.country}
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
    const response = await fetch('http://23.105.246.179:4300/airlines/all')
    const airlines = await response.json();

    return {props: {airlines}}
}