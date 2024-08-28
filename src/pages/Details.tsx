import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiService } from "../services/api";
import { OompaLoompa } from "../types/api";



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
                <div>{detailsOompa.first_name}</div>
                : null}

        </>

    )


}



export default Details;