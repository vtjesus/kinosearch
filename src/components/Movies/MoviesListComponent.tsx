import { useAppSelector } from "../../redux/store";
import "./MoviesListComponent.css";
import MoviesListItemComponent from "./MoviesListItemComponent";

const MoviesComponent = () => {
  const { movies } = useAppSelector((state) => state.moviesSlice);
  return (
    <ul className="moviesList">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MoviesListItemComponent movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesComponent;
