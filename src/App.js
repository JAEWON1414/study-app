import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import MainPage from './MainPage';
import LoginPage from './LoginPage';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/MainPage/:id"
        element={<MainPage/>}/>
        <Route path="/"
        element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
