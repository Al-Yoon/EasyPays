import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Landing from "./views/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Landing/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
