import React from "react";

const CreateUser = ({
    username,
    email,
    onChange,
    onCreate
}) => {
    return (
        <>
        <div>
            <input type="text" placeholder="계정명" onChange={onChange} value={username} />
            <input type="text" placeholder="이메일" onChange={onChange} value={email} />
            <button type="button" onClick={onCreate}>등록</button>
        </div>
        </>
    );
}

export default CreateUser;
