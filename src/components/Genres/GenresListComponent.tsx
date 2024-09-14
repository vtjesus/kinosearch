import { Link, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import "./GenresListComponent.css";
import GenresListItemComponent from "./GenresListItemComponent";

const GenresListComponent = () => {
  const { genres } = useAppSelector((state) => state.genresSlice);

  const [searchParams] = useSearchParams();
  const slectedGenresQuery = searchParams.get("genres");
  let selectedGenres: number[];
  if (slectedGenresQuery) {
    selectedGenres = JSON.parse(slectedGenresQuery);
  } else {
    selectedGenres = [];
  }
  return (
    <>
      <ul className="genresList">
        <li>
          <Link
            to={{ pathname: "/" }}
            className={selectedGenres.length == 0 ? "selected" : ""}
          >
            All
          </Link>
        </li>
        {genres.map((genre) => (
          <li key={genre.id}>
            <GenresListItemComponent
              genre={genre}
              selectedGenres={selectedGenres}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresListComponent;
