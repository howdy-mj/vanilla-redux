import React, { useState } from "react";

function Home() {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setText("")
        console.log(text)
    }

    return (
    <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>add</button>
    </form>
    <ul></ul>
    </>)
}

export default Home;