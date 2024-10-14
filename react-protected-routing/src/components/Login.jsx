import React,{useRef} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const userName = useRef("");
    const userPassword = useRef("");

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userName", userName.current.value);
        localStorage.setItem("password", userPassword.current.value);
        userName.current.value = "";
        userPassword.current.value = "";
        navigate("/admin");

    }
    return (
        <div className="login-page">
        <div className="login-inner">
        <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <label htmlFor="userName">User Name :</label><br/>
                    <input type="text" ref={userName} id="userName" name="userName" />
                </div>
                <div className="input-group">
                <label htmlFor="password">Password :</label><br/>
                <input type="password" ref={userPassword} id="password" name="password" />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>

        </div>
    )
}

export default Login;
