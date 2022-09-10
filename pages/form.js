import {MainLayout} from "../components/MainLayout";
import React, {useState} from 'react';

function Form(props) {

    const [value, setValue] = useState('some text ole ole ola');
    const [checked, setChecked] = useState(null );

    const items = ["Apple", "Orange", "Osel"]

    console.log(checked)


    return (
        <MainLayout title={'Testing for Forms ...'}>
        <h1>Testing for Forms ...</h1>


            {/*<p>{value}</p>*/}
            {/*<input value={value} onChange={(e)=>{*/}
            {/*    setValue(e.target.value)*/}
            {/*}}/>*/}

            {/*<hr/>*/}

            {/*<label>*/}
            {/*<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>*/}
            {/*    True or False something value*/}
            {/*</label>*/}

            <hr/>

            <ul>
                {items.map((item) => (
                    <li key={item}>
                    <label>
                        <input
                            type="radio"
                            checked={checked===item}
                            onChange={() => setChecked(item)}
                        />
                        {item}
                    </label>
                    </li>
                ))}
            </ul>


            {/*<label>*/}
            {/*    <input type="radio" checked={checked==='Apple'}  onChange={() => setChecked('Apple')}/>*/}
            {/*    Apple*/}
            {/*</label>*/}
            {/*<br/>*/}
            {/*<label>*/}
            {/*    <input type="radio" checked={checked=='Orange'}  onChange={() => setChecked('Orange')}/>*/}
            {/*   Orange*/}
            {/*</label>*/}
            {/*<br/>*/}
            {/*<label>*/}
            {/*    <input type="radio" checked={checked==='Osel'} onChange={() => setChecked('Osel')}/>*/}
            {/*    Osel*/}
            {/*</label>*/}




        </MainLayout>
    )
}

// class Form extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: "this is class ...."
//         };
//     }
//
//     handlerChange(event){
//         this.setState({value:event.target.value})
//     }
//
//     render() {
//         return (
//             <MainLayout title={'Testing for Forms ...'}>
//                 <h1>Testing for Forms ...</h1>
//                 <p>{this.state.value}</p>
//                 <input value={this.state.value}
//                         onChange={(e)=>{
//                     this.handlerChange(e)
//                 }}/>
//             </MainLayout>
//         )
//     }
// }

export default Form;