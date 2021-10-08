import React, { useState } from 'react';

const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

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

        const handleFirst = (e) => {
            setFirst(e.target.value);
            if(e.target.value.length < 1){
                setFirstError("");
            } else if(e.target.value.length < 2) {
                setFirstError("First Name must be at least 2 characters!");
            } else {
                setFirstError("");
            }
        }
        const handleLast = (e) => {
            setLast(e.target.value);
            if(e.target.value.length < 1){
                setLastError("");
            } else if(e.target.value.length < 2) {
                setLastError("Last Name must be at least 2 characters!");
            } else {
                setLastError("");
            }
        }
        const handleEmail = (e) => {
            setEmail(e.target.value);
            if(e.target.value.length < 1){
                setEmailError("");
            } else if(e.target.value.length < 5) {
                setEmailError("Email must be at least 5 characters!");
            } else {
                setEmailError("");
            }
        }
        const handlePassword = (e) => {
            setPassword(e.target.value);
            if(e.target.value.length < 1){
                setPasswordError("");
            } else if(e.target.value.length < 8) {
                setPasswordError("Password must be at least 8 characters!");
            } else if(e.target.value != setConfirm) {
                setPasswordError("Passwords must match!");
            } else{
                setPasswordError("");
            }
        }
        const handleConfirm = (e) => {
            setConfirm(e.target.value);
            if(e.target.value.length < 1){
                setConfirmError("");
            } else if(e.target.value.length < 8) {
                setConfirmError("Password must be at least 8 characters!");
            } else if(e.target.value != setPassword) {
                setConfirmError("Passwords must match!");
            } else{
                setConfirmError("");
            }
        }

    return (
        <form onSubmit={ createUser }>
            <div>
                <label>First Name:</label>
                <input type="text" value={ first } onChange={ handleFirst } />
                {
                    firstError?
                    <p>{ firstError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={ last } onChange={ handleLast } />
                {
                    lastError?
                    <p>{ lastError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={ email } onChange={ handleEmail } />
                {
                    emailError?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={ password } onChange={ handlePassword } />
                {
                    passwordError?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={ confirm } onChange={ handleConfirm } />
                {
                    confirmError?
                    <p>{ confirmError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
export default UserForm;