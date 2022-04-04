import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!","success")
  };
  const handleLowClick = () => {
    // console.log("Lower case clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!","success")
  };
  const handleClClick = () => {
    // console.log("Clear text clicked");
    setText("");
    props.showAlert("Test cleared!","success")
  };
  const handleCpClick = () => {
    // console.log("Copy text clicked");
    let t = document.getElementById("myBox");
    t.select();
    navigator.clipboard.writeText(t.value);
    props.showAlert("Copied to clipboard!","success")

  };
  const handleReClick = () => {
    // console.log("Copy text clicked");
    let t = text.split(/[ ]+/);
    setText(t.join(" "));
    props.showAlert("Removed extra spaces!","success")

  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
        <h2> {props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Text Here"
            id="myBox"
            rows="8"
            style={{backgroundColor : props.mode === 'dark'?'#003687':'white' , color : props.mode === 'dark'?'white':'black'}}
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1" >
          Convert to upper case
        </button>
        <button onClick={handleLowClick} className="btn btn-primary mx-1  ">
          Convert to lower case
        </button>
        <button onClick={handleClClick} className="btn btn-primary mx-1">
          Clear Text
        </button>
        <button onClick={handleCpClick} className="btn btn-primary mx-1">
          Copy Text
        </button>
        <button onClick={handleReClick} className="btn btn-primary mx-1">
          Remove extra space
        </button>
      </div>
      <div className="container my-3 " style={{color : props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
        {text.length>0?`${text.split(" ").length} words and ${text.length} characters ${0.008 * text.split(" ").length} Minutes read `:"Enter something to above text box to get text summary here!!"}
        </p>
        <p></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to above text box to preview here!!"}</p>
      </div>
    </>
  );
}
