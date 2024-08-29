import { useParams } from "react-router";
import "./Details.css"
import DOMPurify from 'dompurify';
import { useGetOompaLoompasByIdQuery } from "../../redux/apiSlice";
import invariant from "tiny-invariant";


function Details() {
    const params = useParams();

    invariant(params.id, 'Id is required for access this page');
    const { data: detailsOompa } = useGetOompaLoompasByIdQuery(params.id);


    return (
        <>
            {detailsOompa ?
                <div className="details-container">
                    <img src={detailsOompa.image} alt={detailsOompa.first_name} />
                    <div className="details">
                        <p className="title">{detailsOompa.first_name} {detailsOompa.last_name}</p>
                        <span>{detailsOompa.gender === "M" ? "Man" : "Woman"}</span>
                        <span className="profession">{detailsOompa.profession}</span>
                        <div className="description"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(detailsOompa.description || "") }}
                        />
                    </div>

                </div>
                : null}

        </>
    )
}



export default Details;