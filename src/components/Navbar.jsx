export default function Navbar(){
    return(
        <nav>
            <div className="nav-quicknotes">
                <img src="src\assets\logo.png" className="nav-logo"/>
                <h1 className="nav-title">QuickNotes</h1>
            </div>
            <div className="nav-buttons">
                <button className="button" href=""><span>Log-in/Registrar</span></button>
            </div>
        </nav>
    )
}