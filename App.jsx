import React from 'react';
import Login from './loginpage/Login';
import Home from './home/Home';
import SignUp from './signup/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router';
import UserProfile from './user/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/signup' element={<SignUp />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/userprofile' element={<UserProfile />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
