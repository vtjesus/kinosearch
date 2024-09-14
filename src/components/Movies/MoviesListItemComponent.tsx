import { FC } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { urls } from "../../constants/urls";
import { IMoviesListItem } from "../../models/IMoviesListItem";
import MovieListItemGenresComponent from "../Genres/MovieListItemGenresComponent";
import "./MoviesListItemComponent.css";

interface IProps {
  movie: IMoviesListItem;
}

const MoviesListItemComponent: FC<IProps> = ({ movie }) => {
  return (
    <div className="movieListItem">
      <div className="imgWrap">
        <div className="posterContainer">
          <Link to={`/movie/${movie.id}`}>
            <img
              className="poster"
              src={`${urls.poster.w500}${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        </div>

        <MovieListItemGenresComponent genre_ids={movie.genre_ids} />

        <div className="stars">
          <StarRatings
            rating={movie.vote_average}
            starRatedColor="yellow"
            numberOfStars={10}
            name="rating"
            starDimension="0.8em"
            starSpacing="0.1em"
          />
        </div>
      </div>
      <Link to={`/movie/${movie.id}`} className="link">
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};

export default MoviesListItemComponent;
