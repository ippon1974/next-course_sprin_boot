import {useState, useEffect} from 'react';
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useRouter} from "next/router";
import {event} from "next/dist/build/output/log";

export default function Post({post:serverPost}) {
    const [post, setPost] = useState(serverPost);
    const [status, setStatus] = useState(null);
    const router = useRouter();

    const del = () => {
        // DELETE request using fetch with async/await
        async function deletePost() {
            await fetch(`http://localhost:4300/test/${router.query.id}`, {
                method: 'DELETE'
            }).then((response)=>{
                console.log(response.status);
            });
            setStatus('ok delete')
        }
        deletePost();
    }


    useEffect(()=>{
       async function load() {
           const response = await fetch(`http://localhost:4300/test?id=${router.query.id}`);
           const data = await response.json();
           setPost(data);
       }
       if(!serverPost){
           load();
       }
    },[])


    if(!post){
        return <MainLayout>
            <p>...Loading</p>
        </MainLayout>
    }


    return (
        <MainLayout>
            <h1>{post.username} {status}</h1>
            <hr/>
            <h1>Привет: {post.name}</h1>
            <p>Мой ID: {post.id}</p>
            <p>Меня зовут: {post.name}</p>
            <p>Город: {post.city}</p>
            <p>
                <button onClick={(e)=>{e.preventDefault(); del()}}>Delete</button> /
                <button>Modify</button>
            </p>
            <Link href={'/posts'}><a>Back to Posts</a></Link>
        </MainLayout>
    )
}

// Post.getInitialProps = async ({query, req}) => {
//     if(!req){
//         return {post:null}
//     }
//     const response = await fetch(`http://localhost:4300/test?id=${query.id}`);
//     const post = await response.json();
//     console.log("Post two ", post)
//     return {
//         post
//     }
// }

export async function getServerSideProps({query, req}) {
    if(!req){
        return {post:null}
    }
    const response = await fetch(`http://localhost:4300/test?id=${query.id}`);
    const post = await response.json();

    return {props: {post}}
}