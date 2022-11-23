import {usesate ,React, useState }from "react"
import {Link} from "react-router-dom"
import "./Nav.css"
import items from "./images/slvlogo.jpg"
import axios from "axios"





function Navbar() {
    const[album, setalbum]= useState('')
    const getalbum=()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums').then(res =>{
            console.log (res.data[9].title)
            setalbum(res.data[9].title)
        }).catch(err=>{
            console.log(err)
        })

    }
    return(
        <nav>
        <div className="main">
        <h1 className="main-web">SLV Traders </h1>
        <img src={items} alt="logo"/>
        <div>
        <ul>
           <li><Link to="/home">Home</Link></li>
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/support">support</Link></li>
        </ul>
        </div>
        
        </div>
        <div className="album"><button onClick={getalbum}>click to get album titals </button></div>
        {album ?<p>{album}</p>:null}
        </nav>
        
    )

}
export default Navbar