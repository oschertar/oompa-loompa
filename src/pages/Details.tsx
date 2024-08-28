import { useParams } from "react-router";



function Details() {
    const params = useParams();


    return (<div>{params.id}</div>)


}



export default Details;