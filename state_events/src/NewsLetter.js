import { useState } from "react";


function NewsLetter(){
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    function changeEmailHandler(event){
        setEmail(event.target.value);
    }

    function clearEmailHandler(event){
        setEmail('');
    }

    function changeTextHandler(event){
        setText(event.target.value);
    }

    const textLength = text.length;

    return <>
        <input type="email" 
        placeholder="Your email address" 
        value={email}
        onChange={changeEmailHandler}
        /> <br /> 
        <button onClick={clearEmailHandler}> Reset </button> <br />
        <input type="text" onChange={changeTextHandler} />
        <p> Characters entered: {textLength} </p>
    </>
}

export default NewsLetter;