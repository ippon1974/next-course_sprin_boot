const submitContact = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const res = await fetch('http://localhost:4300/test', {
        body: JSON.stringify({
            username: username,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    const result = await res.json();
    alert(`Is this your full name: ${result.username}`);
};
export default submitContact