import Link from "next/link";
import {MainLayout} from '../components/MainLayout'
import {MyComp} from "../components/MyComp";

export default function Index(){
    return (
        <MainLayout title={'Home Page'}>
        <h1>Hello Next JS</h1>
            <p>Result function {MyComp(100, 200)}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </MainLayout>
    )
}