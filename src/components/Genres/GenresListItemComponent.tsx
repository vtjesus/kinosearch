import { FC } from "react";
import { Link } from "react-router-dom";
import { IGenre } from "../../models/IGenre";

interface IProps {
  genre: IGenre;
  selectedGenres: number[];
}

const GenresListItemComponent: FC<IProps> = ({ genre, selectedGenres }) => {
  let newGenres = [...selectedGenres];
  let newSearch = "";
  if (!selectedGenres.includes(genre.id)) {
    newGenres.push(genre.id);
    newSearch = `?genres=${JSON.stringify(newGenres)}`;
  } else {
    newGenres = newGenres.filter((el) => el != genre.id);
    newSearch =
      newGenres.length == 0 ? "" : `?genres=${JSON.stringify(newGenres)}`;
  }
  return (
    <Link
      to={{ pathname: "/", search: newSearch }}
      className={selectedGenres.includes(genre.id) ? "selected" : ""}
    >
      {genre.name}
    </Link>
  );
};

export default GenresListItemComponent;
