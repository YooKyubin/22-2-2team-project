import React from 'react';
import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './Component/Main';
import Header from './Component/Header';
import PrivateRoute from './Component/PrivateRoute';
import Islogin from './Component/IsLogin';
import CarpoolMiain from './Component/CarpoolMain';
import TaxiMiain from './Component/TaxiMain';

function App() {
  console.log("App.js rendering")
  const account = localStorage.getItem('idx');
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={
          <PrivateRoute account={account} 
            component={<Login/>}>
          </PrivateRoute>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/carpool' element={
          <Islogin account={account} component={<CarpoolMiain/>}/>} />
        <Route path='/taxi' element={<Islogin account={account} component={<TaxiMiain />} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
