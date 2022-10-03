import React from 'react';
import Users from './components/Users';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <ToastContainer/>
    <Header/>
    <Users/>
    </div>
    
  );
}

export default App;
