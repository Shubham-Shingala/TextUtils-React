/** @format */

import React, { useState } from "react";
import { Typewriter } from "typewriting-react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    // console.log("Lower case clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClClick = () => {
    // console.log("Clear text clicked");
    setText("");
    props.showAlert("Test cleared!", "success");
  };
  const handleCpClick = () => {
    // console.log("Copy text clicked");
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleReClick = () => {
    // console.log("Copy text clicked");
    let t = text.split(/[ ]+/);
    setText(t.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  let words = text.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="d-block">
          <h2>
            Try TextUtils - <Typewriter words={props.heading} erasingSpeed={100} typingSpeed={50} loop={true} cursorStyle={{ color: "blue" }} />
          </h2>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Text Here"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#003687" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}></textarea>
        </div>
        <button disabled={text.length === 0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">
          Convert to upper case
        </button>
        <button disabled={text.length === 0} onClick={handleLowClick} className="btn btn-primary mx-1 my-1  ">
          Convert to lower case
        </button>
        <button disabled={text.length === 0} onClick={handleClClick} className="btn btn-primary mx-1 my-1">
          Clear Text
        </button>
        <button disabled={text.length === 0} onClick={handleCpClick} className="btn btn-primary mx-1 my-1">
          Copy Text
        </button>
        <button disabled={text.length === 0} onClick={handleReClick} className="btn btn-primary mx-1">
          Remove extra space
        </button>
      </div>
      <div className="container my-3 " style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>{text.length > 0 ? `${words} words and ${text.length} characters ${(0.008 * words).toPrecision(2)} Minutes to read ` : "No text summary!!"}</p>
        <p></p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!!"}</p>
      </div>
    </>
  );
}
