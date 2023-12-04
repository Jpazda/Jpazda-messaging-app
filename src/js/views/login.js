import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../../firebase";

export const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          navigate("/");
        }
      );
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <span className="logo">Easy Chat</span>
          <span className="title">Login</span>
          <input
            className="form-input"
            type="email"
            placeholder="email"
          ></input>
          <input
            className="form-input"
            type="password"
            placeholder="password"
          ></input>
          <button
            type="submit"
            className="btn btn-outline-success button-color"
          >
            Login
          </button>
          {err && <span>Something went wrong...</span>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
};
