class SliderApi {
  async getTop10(cb) {
    await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&lists=top10-hd`, {
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

export const sliderApi = new SliderApi();
