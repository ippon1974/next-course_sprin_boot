import React, {useState} from 'react';

const Exp = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = e => {
        console.log('handleSubmit ran');
        e.preventDefault(); // 👈️ prevent page refresh

        // 👇️ access input values here
        console.log('firstName 👉️', firstName);
        console.log('lastName 👉️', lastName);

        // 👇️ clear all input values in the form
        setFirstName('');
        setLastName('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
                <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <button type="submit">Submit form</button>
            </form>
        </div>
    );
};

export default Exp;