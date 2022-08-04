import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route, Navigate 
} from 'react-router-dom';
import LoginPage from './Pages/AuthPages/LoginPage/LoginPage';
import RegisterPage from './Pages/AuthPages/RegisterPage/RegisterPage';
import DashBoard from './Pages/AuthPages/DashBoard/DashBoard';
import AlertNotification from './shared/components/AlertNotification';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/dashboard' element={<DashBoard />} />
          <Route path='/' element={<Navigate replace to="/dashboard" />} >
          </Route>
        </Routes>
      </Router>
      <AlertNotification></AlertNotification>
    </>
  );
}

export default App;
