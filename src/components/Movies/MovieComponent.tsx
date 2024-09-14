import { useNavigate } from "react-router-dom";
import { urls } from "../../constants/urls";
import { useAppSelector } from "../../redux/store";
import MovieGenresComponent from "../Genres/MovieGenresComponent";
import "./MovieComponent.css";
import StarRatings from "react-star-ratings";

const MovieComponent = () => {
  const { movie } = useAppSelector((state) => state.moviesSlice);

  const navigate = useNavigate();
  return (
    <>
      {movie && (
        <div className="movie">
          <img
            className="poster"
            src={`${urls.poster.w500}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movieDetailsContainer">
            <div>
              <h1>{movie.title}</h1>
              <h2>{movie.tagline}</h2>
              <MovieGenresComponent genres={movie.genres} />
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
              <p>{movie.overview}</p>
            </div>
            <div
              className="movieDetailsBackButton"
              onClick={() => navigate(-1)}
            >
              {"<- Back"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieComponent;
