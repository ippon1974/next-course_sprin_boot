import {useState, useEffect} from 'react';
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Post({post:serverPost}) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(()=>{
       async function load() {
           //const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
           const response = await fetch(`http://localhost:4300/test?id=${router.query.id}`);
           const data = await response.json();
           console.log(data)
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
            <h1>{post.username}</h1>
            <hr/>
            <h1>Привет: {post.name}</h1>
            <p>Мой ID: {post.id}</p>
            <p>Меня зовут: {post.name}</p>
            <p>Город: {post.city}</p>
            <Link href={'/posts'}><a>Back to Posts</a></Link>
        </MainLayout>
    )
}

Post.getInitialProps = async ({query, req}) => {

    if(!req){
        return {post:null}
    }

    const response = await fetch(`http://localhost:4300/test?id=${query.id}`);
    const post = await response.json();
    console.log("Post two ", post)
    
    return {
        post
    }
}

// export async function getServerSideProps({query, req}) {
//     if(!req){
//         return {post:null}
//     }
//
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//     const post = await response.json();
//
//
//     return {props: {post}}
// }