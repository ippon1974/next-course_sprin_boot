import {useState, useEffect} from 'react';
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Airline({airline:serverAirline}) {
    const [airline, setAirline] = useState(serverAirline);
    const router = useRouter();

    useEffect(()=>{
        async function load() {
            const response = await fetch(`http://localhost:4300/airlines?id=${router.query.id}`);
            const data = await response.json();
            setAirline(data);
        }
        if(!serverAirline){
            load();
        }
    },[])
    if(!airline){
        return <MainLayout>
            <p>...Loading</p>
        </MainLayout>
    }

    return (
        <MainLayout>
            <hr/>
            <h1>Авиакомпания: {airline.name}</h1>
            <p>Код: {airline.code}</p>
            <p>Страна: {airline.country}</p>
            <Link href={'/airlines'}><a>Back to Airlines</a></Link>
        </MainLayout>
    )

}

export async function getServerSideProps({query, req}) {
    if(!req){
        return {airline:null}
    }
    const response = await fetch(`http://localhost:4300/airlines?id=${query.id}`);
    const airline = await response.json();
    return {props: {airline}}
}