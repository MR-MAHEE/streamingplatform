import "../Movies.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import back from "../assets/back3.png";

const MovieDetails = () => {
  const selectedMovies = useSelector((state) => state.selectedMovies);
  return (
    <div className="container d-flex font-monospace">
      <div className="p-5 h-25">
        <div className="mt-5">
          <Link to="/">
            <img
              src={back}
              ait=""
              style={{ height: "20%", width: "5%" }}
              alt=""
              className="m-4"
            />{" "}
          </Link>
          <h1 className="mb-5">{selectedMovies.title}</h1>
          <p>Rating : 4.6/5</p>
          <p className="">{selectedMovies.overview}</p>
          <h5 className="">Rlease Date :{selectedMovies.release_date}</h5>
          <h5 className="text-uppercase">
            Original Language : {selectedMovies.original_language}
          </h5>
        </div>
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovies.poster_path}`}
          alt="Notebook"
          // style={{ width: "40rem",}}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
