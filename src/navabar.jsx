import react from "react"
import {Link} from "react-router-dom"
import "./Nav.css"


const Navbar=()=>{

    return(
        <div>
        <h1 className="main-web">SLV Traders </h1>
        <nav>
        <ul>
           <li><Link to="/home">Home</Link> </li>
        <li><Link to="/sign up">signup</Link> </li>
        <li><Link to="/login">login</Link> </li>
        <li><Link to="/contact">contact</Link> </li>
        <li><Link to="/support">support</Link> </li>
        </ul>
        </nav>
        </div>
    )

}
export default Navbar