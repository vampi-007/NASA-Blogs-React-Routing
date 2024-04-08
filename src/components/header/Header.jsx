import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){

    return (
        <div className="Header">
           <div className="logo">
                <img src="public/nasa-logo.svg"/>  
                <h2><Link className="link" to="/">NASA Blogs</Link></h2>
            </div>
            <div className="home">
                <h6>NASA Blogs Home</h6>
            </div>
        </div>
    )

}