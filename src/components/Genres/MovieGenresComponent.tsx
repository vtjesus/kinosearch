import { FC } from "react";
import { Link } from "react-router-dom";
import { generateSearchQuery } from "../../helpers/searchQueryHelper";
import { IGenre } from "../../models/IGenre";
import "./MovieGenresComponent.css";

interface IProps {
  genres: IGenre[];
}

const MovieGenresComponent: FC<IProps> = ({ genres }) => {
  return (
    <div className="genres">
      {genres.map((genre) => (
        <div className="genre" key={genre.id}>
          <Link
            to={{
              pathname: "/",
              search: generateSearchQuery({
                genres: [genre.id],
              }),
            }}
          >
            {genre.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieGenresComponent;
