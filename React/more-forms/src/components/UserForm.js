import React, { useState } from 'react';

const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { first, last, email, password, confirm };
        console.log("Welcome", newUser);
        setFirst("");
        setLast("");
        setEmail("");
        setPassword("");
        setConfirm("");
        };

    return (
        <form onSubmit={ createUser }>
            <div>
                <label>First Name:</label>
                <input type="text" value={ first } onChange={ (e) => setFirst(e.target.value) } />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={ last } onChange={ (e) => setLast(e.target.value) } />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={ confirm } onChange={ (e) => setConfirm(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            <p>Your Form Data:</p>
            <p>First Name: { first }</p>
            <p>Last Name: { last }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirm }</p>
        </form>
    );
};
export default UserForm;