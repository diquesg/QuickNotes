import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <div className="nav-quicknotes">
                <img src="src\assets\logo.png" className="nav-logo"/>
                <h1 className="nav-title">QuickNotes</h1>
            </div>
            <div className="nav-buttons">
                <button className="button"><Link to="/registro"><span>Log-in/Registrar</span></Link></button>
            </div>
        </nav>
    )
}