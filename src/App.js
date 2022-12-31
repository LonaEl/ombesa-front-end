import React from 'react';
import Container from '@mui/material/Container';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
 import Terms from './components/Terms/Terms'; 
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScree';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import Upload from './components/Upload';


const App = () => {
const user = JSON.parse(localStorage.getItem('profile'));
 
  return (
    <HashRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/uploading" exact element={<Upload />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path='/tags/:name' exact  element={<CreatorOrTag />} />
          <Route path='/creators/:name' exact element={<CreatorOrTag />} />
          <Route path="/login" exact element={(!user ? <LoginScreen /> : <Navigate to="/posts" replace={true}/>)  } />
          <Route path="/termsandconditions" exact element={<Terms />} /> 
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/forgotpassword"  element={<ForgotPasswordScreen />} />
          <Route exact path="/passwordreset/:resetToken" element={<ResetPasswordScreen />} />
       </Routes>
      </Container>
    </HashRouter>
  );
};

export default App;