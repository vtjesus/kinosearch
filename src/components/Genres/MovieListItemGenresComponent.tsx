import { FC } from "react";
import { Link } from "react-router-dom";
import { generateSearchQuery } from "../../helpers/searchQueryHelper";
import { useAppSelector } from "../../redux/store";
import "./MovieListItemGenresComponent.css";

interface IProps {
  genre_ids: number[];
}

const MovieListItemGenresComponent: FC<IProps> = ({ genre_ids }) => {
  const { genresById } = useAppSelector((state) => state.genresSlice);
  return (
    <div className="genres">
      {genre_ids.map((id) => (
        <div className="genre" key={id}>
          <Link
            to={{
              pathname: "/",
              search: generateSearchQuery({
                genres: [id],
              }),
            }}
          >
            {genresById[id]}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieListItemGenresComponent;
