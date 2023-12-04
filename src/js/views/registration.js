import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const respon = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(respon.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", respon.user.uid), {
              uid: respon.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", respon.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
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
          <span className="title">Create Account</span>
          <input
            className="form-input"
            type="text"
            placeholder="display name"
          />
          <input className="form-input" type="email" placeholder="email" />
          <input
            className="form-input"
            type="password"
            placeholder="password"
          />
          <input
            className="form-input"
            id="file"
            type="file"
            style={{ display: "none" }}
          />
          <label
            htmlFor="file"
            className="d-flex justify-content-center align-items-center"
          >
            <i className="fa-solid fa-user" style={{ color: "#5d5b8d" }}></i>
            <span className="avatar-link">Add an Avatar</span>
          </label>

          <button
            type="submit"
            className="btn btn-outline-success button-color"
          >
            Create Account
          </button>
          {err && <span>Something went wrong...</span>}
        </form>
        <p className="d-flex justify-content-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
