import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[])

    return (
        <div>
            {loading ? <h2>loading...</h2>: null}
        </div>
    )
}

export default Detail;