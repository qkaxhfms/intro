import React, { useState, useRef } from "react";

const Input = () => {
    const defaultInput = useRef();
    const [id,setId] = useState('');
    const [pwd,setPwd] = useState('');
    const [email,setEmail] = useState('');

    const itemText = (e) => {
        setId(e.target.value)
    }
    const itemPwd = (e) => {
        setPwd(e.target.value)
    }
    const itemEmail = (e) => {
        setEmail(e.target.value)
    }
    const itemRemove = () => {
        setId("");
        setPwd("");
        setEmail("");
        defaultInput.current.focus()
    }
    return (
        <div>
            <input type="text" onChange={itemText} value={id} ref={defaultInput} />
            <input type="password" onChange={itemPwd} value={pwd} />
            <input type="email" onChange={itemEmail} value={email} />
            <button type="button" onClick={itemRemove}>
                지우기
            </button>
            <h2>결과출력</h2>
            <ul>
                <li>{id}</li>
                <li>{pwd}</li>
                <li>{email}</li>
            </ul>
        </div>
    );
}

export default Input;
