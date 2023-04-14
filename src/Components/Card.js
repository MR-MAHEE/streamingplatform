import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allMovies,
  selectedMovies,
  searchMovies,
  searchMoviesPage,
} from "../Redux/Actions";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import star from "../assets/star.png";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allMoviesData = useSelector((state) => state.allMovies);

  useEffect(() => {
    dispatch(allMovies());
  }, []);

  const handleClick = (id) => {
    dispatch(selectedMovies(id));
    navigate("/movie");
  };

  const page = useSelector((state) => state.page);

  const handlePageChange = (e) => {
    dispatch(searchMoviesPage(e.selected + 1));
  };

  const [input, setinput] = useState("");

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMovies(input));
  };

  return (
    <>
      <center>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3 w-75 m-4 h-100">
            <input
              type="text"
              className="form-control border border-secondary font-monospace mt-5"
              id="floatingInput"
              placeholder="Search Movies"
              autoComplete="off"
              value={input}
              onChange={handleChange}
            />
            <label
              htmlFor="floatingInput"
              className="text-secondary font-monospace"
            >
              Search Movies
            </label>
          </div>
        </form>
      </center>
      <h2 className="font-monospace mt-5 m-5">Trending</h2>
      <div className="container">
        <div className="row mx-3 p-3">
          {allMoviesData &&
            allMoviesData.length > 0 &&
            allMoviesData.map((item) => (
              <div className="col-3" key={item.id}>
                <div className="card p-3" onClick={() => handleClick(item.id)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    // className="w-75 mx-3 border p-2"
                    alt="img"
                  />
                  <div className="card-body font-monospace">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <img
                        src={star}
                        class="card-img ms-2"
                        alt=""
                        style={{ height: "4%", width: "6%" }}
                      />
                      <small>4.6/5</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <nav aria-label="Page navigation example p-3">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={`>>`}
          pageCount={500}
          onPageChange={handlePageChange}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </nav>
    </>
  );
};

export default Card;
