import { OompaLoompa } from "../../types/api"
import "./Card.css"

function Card({ oompaLoompa }: { oompaLoompa: OompaLoompa }) {

    return (
        <div className="card">
            <img src={oompaLoompa.image} alt={oompaLoompa.first_name}></img>
            <p>{oompaLoompa.first_name}</p>
            <span>{oompaLoompa.gender === "M" ? "Man" : "Woman"}</span>
            <span>{oompaLoompa.profession}</span>
        </div>)
}


export default Card