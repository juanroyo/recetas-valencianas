import React from 'react';
import './App.css';
import Home from './Components/Home/home.js';
import Form from './Components/Form/form.js';
import Display from './Components/Display/display.js';
import Chat from './Components/ChatDiscussion/chat.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<div className="App">
    <Router>
      <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/">  <h1 class="navbar-brand">RecetApp</h1></Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-link active">
              <Link to="/recipes"> Recipes</Link>
              </li>
              <li class="nav-link">
              <Link to="/addrecipe"> Add Your Recipe </Link>
              </li>
              <li class="nav-link">
              <Link to="/chat"> Chat </Link>
              </li>
            </ul>

            </div>
            </nav>


    <Switch>
          {/*  <Route path="">
              <Home/>
            </Route>*/}
          <Route path="/recipes">
            <Display/>
          </Route>
          <Route path="/form">
            <Form/>
          </Route>
          <Route path="/chat">
            <Chat/>
          </Route>
        </Switch>
</div>
</Router>
</div>
  );
}

export default App;
