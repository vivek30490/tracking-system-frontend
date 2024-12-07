import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Certifications from './components/Certifications';
import Admin from './components/Admin';
function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/Certifications" element={<Certifications />} />

          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/Admin" element={<Admin/>}/>

          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
