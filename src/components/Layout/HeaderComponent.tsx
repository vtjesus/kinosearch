import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import darkLightSwitcher from "../../assets/dark-light.png";
import { generateSearchQuery } from "../../helpers/searchQueryHelper";
import { settingsActions } from "../../redux/slices/settingsSlice";
import { userActions } from "../../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const { searchPhrase } = useAppSelector((state) => state.moviesSlice);
  const { name, avatar } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.generateUser());
  }, []);

  return (
    <div className="headerContainer">
      <div className="logo">
        <Link to="/">KINOREACTOR</Link>
      </div>
      <div className="search">
        <input
          type="text"
          onChange={(e) =>
            navigate(
              "/" +
                generateSearchQuery({
                  page: 1,
                  genres: [],
                  search: e.target.value,
                })
            )
          }
          value={searchPhrase}
          placeholder="search"
        />
      </div>

      <div className="user">
        <img className="avatar" width="80px" src={avatar} alt="avatar" />
        {name}
        <img
          className="darkLightSwitcher"
          src={darkLightSwitcher}
          alt="Dark and light theme switcher"
          onClick={() => dispatch(settingsActions.toggleThemeStyle())}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
