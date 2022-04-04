import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor= '#021736';
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Dark mode has been disabled","success");
    }
  }
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
            <Route path="about" element={<About />}  />
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
