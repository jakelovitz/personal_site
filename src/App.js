import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import BasicInfoContainer from './basic_info/basic_info_container'
import ResumeContainer from './resume/resume_container'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <Router>
    <div className="App">
      <Route path="/" exact component={BasicInfoContainer} />
      <Route path="/resume" component={ResumeContainer} />
    </div>
    </Router>
  );
}

export default App;
