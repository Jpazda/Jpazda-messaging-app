import React from "react";


export const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <form>
                    <span className="logo">Easy Chat</span>
                    <span className="title">Login</span>
                    <input className="form-input" type="email" placeholder="email"></input>
                    <input className="form-input" type="password" placeholder="password"></input>
                    <button type="button" class="btn btn-outline-success button-color">Login</button>               
                </form> 
                <p>Don't have an account? Create Account</p>
            </div>
        </div>
    )
}