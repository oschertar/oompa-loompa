import { Link } from "react-router-dom"
import { OompaLoompa } from "../../types/api"
import "./Card.css"

function Card({ oompaLoompa }: { oompaLoompa: OompaLoompa }) {

    return (
        <Link to={`/${oompaLoompa.id}`} className="card details">
            <img src={oompaLoompa.image} alt={oompaLoompa.first_name}></img>
            <p className="title">{oompaLoompa.first_name} {oompaLoompa.last_name}</p>
            <span>{oompaLoompa.gender === "M" ? "Man" : "Woman"}</span>
            <span className="profession">{oompaLoompa.profession}</span>
        </Link>)
}


export default Card