import Actiontype from "./Actiontype";
const initialState = {
  allMovies: [],
  selectedMovies: [],
  page: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actiontype.ALL_MOVIES:
      return {
        ...state,
        allMovies: action.allMovies,
      };
    case Actiontype.SEARCH_MOVIES:
      return {
        ...state,
        allMovies: action.searchMovies,
      };
    case Actiontype.SEARCH_MOVIES_PAGE:
      return {
        ...state,
        allMovies: action.searchMoviesPage,
      };
    case Actiontype.PAGE:
      return {
        ...state,
        page: action.payload,
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
