import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Landing from "./views/Landing";
import LoginRegister from "./views/Login-register";
import UploadTickets from "./views/Tickets";
import MyProyects from "./views/MyProyects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/login" element={<LoginRegister/>}></Route>
          <Route path="/mytickets" element={<UploadTickets/>}></Route>
          <Route path="/myprojects" element={<MyProyects/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
