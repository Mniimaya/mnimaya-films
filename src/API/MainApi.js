class MainApi {
    async getFilmById(id, cb) {
        await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
            },
        })
            .then((response) => response.json())
            .then((data) => cb(data))
            .catch((err) => {
                console.log(err);
            });
    }
}

export const mainApi = new MainApi();