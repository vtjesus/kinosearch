import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/Layout/HeaderComponent";
import { useAppSelector } from "./redux/store";

function App() {
  const { themeStyle } = useAppSelector((state) => state.settingsSlice);
  return (
    <div className={`body ${themeStyle}`}>
      <div className="layout">
        <div className="layoutHeader">
          <HeaderComponent />
        </div>
        <div className="layoutOutlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
