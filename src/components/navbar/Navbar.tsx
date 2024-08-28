import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/">
                    <h1>Oompa Loompa's Crew</h1>
                </Link>

            </div>

        </nav>
    )
}


export default Navbar