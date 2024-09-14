import { IMoviesListItem } from "./IMoviesListItem";

export interface IMovies {
  page: number;
  results: IMoviesListItem[];
  total_pages: number;
  total_results: number;
}
