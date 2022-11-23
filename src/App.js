import React from "react"
import Navbar from "./navabar"
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Home from "./home"
import signup from "./signup"
import login from "./login"



function App() {
  return (
    <div className="App">
   
<BrowserRouter>
<Navbar/>
<Routes>
<Route exact path="/" component={Home} />
<Route  exact path="/signup" component={signup} />
<Route  exact path="/login" component={login} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
