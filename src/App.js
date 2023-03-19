import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Clientmaster from './adimin/Clientmaster';
import Login from './adimin/Login';

function App() {
  return (
   <>
    <Login/>
    <BrowserRouter >
      <React.StrictMode>
        <Clientmaster/>
      </React.StrictMode>
    </BrowserRouter>

   </>
  );
}

export default App;
