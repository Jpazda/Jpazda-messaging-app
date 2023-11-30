import React from "react";


export const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <form>
                    <span className="logo">Easy Chat</span>
                    <span className="title">Create Account</span>
                    <input className="form-input" type="text" placeholder="display name"></input>
                    <input className="form-input" type="email" placeholder="email"></input>
                    <input className="form-input" type="password" placeholder="password"></input>
                    <input className="form-input" id="file" type="file" style={{display: "none"}}></input>
                    <label htmlFor="file" className="d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-user" style={{color: "#5d5b8d"}}></i>
                        <span className="avatar-link">Add an Avatar</span>
                    </label>

                    <button type="button" class="btn btn-outline-success button-color">Create Account</button>               
                </form> 
                <p className="d-flex justify-content-center">Already have an account? Login</p>
            </div>
        </div>
    )
}