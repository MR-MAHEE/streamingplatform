import Header from "./Header";
import "../Movies.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import back from "../assets/back3.png";

const Moviedetails = () => {
  const selectedMovies = useSelector((state) => state.selectedMovies);
  console.log(selectedMovies);
  return (
    <div class="container">
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovies.poster_path}`}
        alt="Notebook"
        style={{ width: "100%", height: "20%" }}
      />
      <div class="content d-flex justify-content-start p-5 h-25">
        <div className="mt-5">
          <Link to="/">
            <img
              src={back}
              ait=""
              style={{ height: "20%", width: "5%" }}
              alt="movies"
            />{" "}
          </Link>
          <h1>{selectedMovies.title}</h1>
          <p className="w-25">{selectedMovies.overview}</p>
          <h5 className="d-flex">
            Rlease Date :{"   "}
            <h5>{selectedMovies.release_date}</h5>
          </h5>
          <h5 className="d-flex">
            Original Language : {"   "}
            <h5>{selectedMovies.original_language}</h5>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
