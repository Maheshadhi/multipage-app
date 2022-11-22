import react from "react"
import Navbar from "./navabar"
import {BrowserRouter ,Routes, Route } from "react-router-dom"
import Home from "./home"
import signup from "./components/signup"
import login from "./components/login"


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>

<Route exact path="/" element={<Home/>} />
<Route path="/signup" element={<signup/>} />
<Route path="/login" element={<login/>} />

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
