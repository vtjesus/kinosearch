const baseURL = "https://api.themoviedb.org/3";

const urls = {
  movies: {
    list: "/discover/movie",
    search: "/search/movie",
    details: (id: string | number) => `/movie/${id}`,
  },
  genres: {
    movie: "/genre/movie/list",
    tv: "/genre/tv/list",
  },
  poster: {
    w500: "https://image.tmdb.org/t/p/w500/",
  },
};

export { baseURL, urls };
