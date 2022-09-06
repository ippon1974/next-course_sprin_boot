import {useState, useEffect} from 'react';
import Link from "next/link";
import {MainLayout} from '../components/MainLayout'

export default function Contact(){

    const url = 'http://localhost:4300/test';
    const data = {
        username: 'Moscow New',
        is_published : 0,
        city:'Belomestnoe'
    };

    try {
        const response = fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }



    return (
        <MainLayout title={'Contact'}>
        <h1>Contact</h1>
        <p><Link href={'/about'}><a>About</a></Link></p>
        <p><Link href={'/posts'}><a>Posts</a></Link></p>
        <p><Link href={'/contact'}><a>Contacts</a></Link></p>

            <form method="post">
                <label htmlFor="username">name:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="city">city:</label>
                <input type="text" id="city" name="city"/>
                <button type="submit">Submit</button>
            </form>

    </MainLayout>)
}