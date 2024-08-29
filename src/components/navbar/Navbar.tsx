import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

    const scrollTop = () => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
        });
    }
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" onClick={scrollTop}>
                    <h1>Oompa Loompa's Crew</h1>
                </Link>

            </div>

        </nav>
    )
}


export default Navbar