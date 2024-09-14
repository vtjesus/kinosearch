import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieComponent from "../components/Movies/MovieComponent";
import { moviesActions } from "../redux/slices/moviesSlice";
import { useAppDispatch } from "../redux/store";

const MoviePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(moviesActions.loadMovie(id));
    }
  }, [id]);

  return (
    <div>
      <MovieComponent />
    </div>
  );
};

export default MoviePage;
