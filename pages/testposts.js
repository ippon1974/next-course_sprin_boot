import React, {useState} from 'react';
import {MainLayout} from "../components/MainLayout";

const TestPosts = (props)=> {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [codres, setCodres] = useState('')

    const submit = () => {
        fetch('http://localhost:4300/users', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username:username, password:password})
        })
            .then((response) => {
                if(response.status === 200){
                    setCodres(response.status)
                    console.log("200")
                }
                if (response.status === 400){
                    setCodres(response.status)
                    console.log('400')
                }
            });
    }

    return(
        <MainLayout>
            <h1>Testing of {codres}</h1>

            <form onSubmit={(e) => {e.preventDefault(); submit()}}>

                <label>
                    Frirst Name:
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </label>

                <label>
                    Passw:
                    <input
                        type="text"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>

                <input type="submit" value="Submit" />

            </form>


        </MainLayout>
    )

}

TestPosts.getInitialProps = async ({req}) => {
    if(!req){
        return {post:null}
    }
    const response = await fetch(`http://localhost:4300/users`);
    const post = await response.json();
    console.log("Post two ", post)
    return {
        post
    }
}

export default TestPosts