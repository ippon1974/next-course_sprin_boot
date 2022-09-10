import {MainLayout} from "../components/MainLayout";
import React, {useState} from 'react';

function FormSelect(props) {

    const [value, setValue] = useState("Apple")
    const handlerChange = e => setValue(e.target.value)

    console.log(value)

    return (
        <MainLayout>
            <h1>Form Select</h1>

            <hr/>

            <select value={value} onChange={handlerChange}>
                <option value="Apple">Apple</option>
                <option value="Orange">Orange</option>
                <option value="Osel">Osel</option>
            </select>
        </MainLayout>
    )
}

export default FormSelect