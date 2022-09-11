import React, {useState} from 'react';
import {MainLayout} from "../components/MainLayout";

export default function InText(props) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting Name ${name}`)
        console.log(`Submitting Age ${age}`)
        const data = {
            name: {name},
            age: {age}
        }
        console.log(data)
        console.log(JSON.stringify(data));
        setName("");
        setAge("");
    }

    return(
        <MainLayout>
            <h1>InText</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Frirst Name:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>

                <label>
                    Age:
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>

            <p>{name}</p>
            <p>{age}</p>
        </MainLayout>
    )
}