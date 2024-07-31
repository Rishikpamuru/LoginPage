// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Assets/LoginForm/LoginForm'; // Import from the Login.jsx file
import Register from './Components/Assets/RegisterForm/register.jsx'; // Import from the Register.jsx file
//import ForgotPassword from './ForgotPassword'; // Import from the ForgotPassword.jsx file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;