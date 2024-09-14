import { FC } from "react";
import { Link } from "react-router-dom";
import { generateSearchQuery } from "../../helpers/searchQueryHelper";
import { useAppSelector } from "../../redux/store";

interface IProps {
  title: number;
}

const PaginationButtonComponent: FC<IProps> = ({ title }) => {
  const {
    selectedGenres,
    page: currentPage,
    searchPhrase,
  } = useAppSelector((state) => state.moviesSlice);

  return (
    <>
      {title == currentPage ? (
        title
      ) : (
        <Link
          to={{
            pathname: "/",
            search: generateSearchQuery({
              page: title,
              genres: selectedGenres,
              search: searchPhrase,
            }),
          }}
        >
          {title}
        </Link>
      )}
    </>
  );
};

export default PaginationButtonComponent;
