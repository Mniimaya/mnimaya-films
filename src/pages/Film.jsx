import React from 'react'
import PosterFilm from '../components/PosterFilm/PosterFilm'
import { mainApi } from '../API/MainApi'
import { useParams } from 'react-router-dom'

function Film() {
    const params = useParams();
    const [film, setFilm] = React.useState('');

    const requestsFilm = async () => {
        mainApi.getFilmById(+params.id, (data) => setFilm(data));
    };

    React.useEffect(() => {
        requestsFilm();
    }, [params.id])

    return (
        <>
            {film ? <PosterFilm {...film} /> : ""}
            <div className='container'></div>
        </>
    )
}

export default Film