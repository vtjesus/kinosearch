import axios, { AxiosResponse } from "axios";
import { baseURL, urls } from "../constants/urls";
import { IGenres } from "../models/IGenres";

import { IMovie } from "../models/IMovie";
import { IMovies } from "../models/IMovies";

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}` },
});

export const apiService = {
  getMoviesList: async ({
    query,
  }: {
    query: string;
  }): Promise<AxiosResponse<IMovies>> => {
    const res = await axiosInstance.get<IMovies>(urls.movies.list + query);
    return res;
  },

  searchMoviesList: async ({
    query,
  }: {
    query: string;
  }): Promise<AxiosResponse<IMovies>> => {
    const res = await axiosInstance.get<IMovies>(urls.movies.search + query);
    return res;
  },

  getMovieDetails: async ({
    id,
  }: {
    id: string | number;
  }): Promise<AxiosResponse<IMovie>> => {
    const res = await axiosInstance.get<IMovie>(urls.movies.details(id));
    return res;
  },

  getGenresList: async (): Promise<AxiosResponse<IGenres>> => {
    const res = await axiosInstance.get<IGenres>(urls.genres.movie);
    return res;
  },
};
