import React from 'react';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Service from './Services';
import Form from "./Contact";
import FormServices from './FormServices';
import { Switch , Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";


function App() {
  return (
    <>
     <Navbar />
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route  exact  path='/about' component = {About} />
        <Route exact path='/services' component={Service} />
        {/* <Route exact path='/service' component={FormServices} /> */}
        <Route exact path='/contact' component={Form} />
      </Switch>
    </>
  );
}

export default App;
