import Actiontype from "./Actiontype";
const initialState = {
  allMovies: [],
  searchMovies: "",
  selectedMovies: [],
};

export const reducer = (state = initialState, action) => {
  console.log(action, "reducer");
  switch (action.type) {
    case Actiontype.ALL_MOVIES:
      return {
        ...state,
        allMovies: action.allMovies,
      };

    case Actiontype.SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: action.searchMovies,
      };
    case Actiontype.SELECTED_MOVIE:
      return {
        ...state,
        selectedMovies: action.selectedMovies,
      };

    default:
      return state;
  }
};
