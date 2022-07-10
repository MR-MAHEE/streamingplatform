import { useState } from "react";
// import { useSelector,useDispatch } from "react-redux/es/exports";
import { useSelector, useDispatch } from "react-redux";
import "../Header.css";
import { searchMoviesAction } from "../Redux/Actions";
import logo from "../assets/logo.png";
import Search from "../assets/search.png";

let Header = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  const searchMovies = useSelector((state) => state.searchMovies);
  console.log(searchMovies);

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMoviesAction(input));
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid mx-3">
          <img
            src={logo}
            alt={"logo"}
            style={{ width: "8%" }}
           
          />
          <form className="d-flex">
            <input
              className="header-input"
              style={{
                height: 30,
                background: "rgba(255, 255, 255, 0.06)",
                width: "108%",
              }}
              onChange={handleChange}
              type="search"
              placeholder="Search movies"
              aria-label="Search"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FF9966",
                width: 50,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
              onClick={handleSubmit}
            >
              <img src={Search} alt="search" />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Header;
