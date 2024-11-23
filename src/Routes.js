import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../src/views/Login-register-prueba";
import Projects from "../src/views/MyProjects";

export const RoutesMap =() =>{
    return(
        <Router>
            <Routes>
                <Route path='/' Component={Login}></Route>
                <Route path='/myprojects' Component={Projects}></Route>
            </Routes>
        </Router>
    )
}