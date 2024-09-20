import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Landing from "./views/Landing";
import LoginRegister from "./views/Login-register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/login" element={<LoginRegister/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
