import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiService } from "../../services/api";
import { OompaLoompa } from "../../types/api";
import "./Details.css"
import DOMPurify from 'dompurify';


function Details() {
    const params = useParams();

    const [detailsOompa, setDetailsOompa] = useState<OompaLoompa>();

    useEffect(() => {
        if (params.id)
            apiService.getOompaLoompaById(params.id).then((res: OompaLoompa) => {
                if (res.email) {
                    setDetailsOompa(res);

                }
            })
    }, [params])

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