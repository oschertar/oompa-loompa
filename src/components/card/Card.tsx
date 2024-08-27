import { OompaLoompa } from "../../types/api"

function Card({ oompaLoompa }: { oompaLoompa: OompaLoompa }) {

    return (<div className="card">{oompaLoompa.first_name}</div>)
}


export default Card