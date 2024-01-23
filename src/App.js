import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enable or not 
  const [alert, setAlert] = useState(null)
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
    }
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  return (
    <>
      {/* <Router> */}
        <Navebar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
          {/* <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/home">
              <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
            </Route>
            <Route exact path="/title">
              <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
            </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
