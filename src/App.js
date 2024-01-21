import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Body from './components/Body/Body';
import Tracker from './Tracker'; // Update the path accordingly
import Questions from './Questions'; // Update the path accordingly
import CoreSubjectsTracker from "./CoreSubjectsTracker";
import ResumeSection from './ResumeSection';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
          <Route path="/tracker" element={<ResumeSection />} />
          <Route path="/questions/:subjectName" element={<CoreSubjectsTracker />} />
          <Route path="/" element={<Body />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
