import React from 'react'
import Router from 'next/router'
import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";

export  default function About() {
    const linkClickHandler = () => {
        Router.push('/');
    }
    return (
            <MainLayout title={'About Page'}>
             <h1>About Page</h1>
            <button onClick={linkClickHandler}>GO BACK TO HOME</button>
            <button onClick={()=> Router.push('/posts')}>GO to porsts</button>
        </MainLayout>
    )
}