import {useState, useEffect} from 'react';
import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function Posts({posts:serverPosts}) {

    const [posts, setPosts] = useState(serverPosts);

    useEffect(()=>{
        async function load() {
          //const response = await fetch('http://localhost:4200/posts');
          // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          //     headers: {'Content-Type':'application/json'},
          //     mode: 'no-cors'
          // });
          const response = await fetch('http://localhost:4300/test/all')
          const json = await response.json();
          setPosts(json);
        }
        if(!serverPosts){
            load();
        }
    }, []);

    // if(!posts){
    //     return <MainLayout>
    //         <p>...Loading</p>
    //     </MainLayout>
    // }

    return (
        <MainLayout title={'Post Page'}>
        <h1>Posts Page</h1>
            {/*<pre>{JSON.stringify(posts, null, 2)}</pre>*/}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                        <a>{post.username}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

// Posts.getInitialProps = async ({req}) => {
//     if(!req){
//         return  {posts: null}
//     }
//     //const response = await fetch('http://localhost:4200/posts');
//     // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     //     headers: {'Content-Type':'application/json'},
//     //     mode: 'no-cors'
//     // });
//     const response = await fetch('http://localhost:4300/test/all')
//     const posts = await response.json()
//
//     return {posts:posts}
// }

export async function getServerSideProps({req}) {
    if(!req){
        return {post:null}
    }
    const response = await fetch('http://localhost:4300/test/all')
    const posts = await response.json();

    return {props: {posts}}
}



