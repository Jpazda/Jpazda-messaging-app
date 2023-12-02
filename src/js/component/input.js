import React from "react";

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..."></input>
      <div className="send">
      <i class="fa-solid fa-paperclip"></i>
      <input type="file" style={{display: "none"}} id="file"></input>
      <label htmlFor="file">
      <i class="fa-regular fa-image"></i>
      </label>
      <button>Send</button>
      </div>
    </div>
  );
};
