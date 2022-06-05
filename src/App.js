import React from 'react';
import './App.css';
import BasicInfoContainer from './basic_info/basic_info_container'
import ResumeContainer from './resume/resume_container'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <Router>
    <div className="App">
      <div className="app_container">
        <Route path="/" exact component={BasicInfoContainer} />
        <Route path="/resume" component={ResumeContainer} />
      </div>
    </div>
    </Router>
  );
}

export default App;
