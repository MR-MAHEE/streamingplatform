import axios from 'axios'

import Actiontype from './Actiontype'

export const allMoviesAction = ()=>{
    console.log("from act")
    return async dispatch=> {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=099a2013a8613039fb9d38bc713d2aa3&language=en-US&page=1`)
      const allMovies = await res.data.results
    dispatch({ type:Actiontype.ALL_MOVIES, allMovies });
    console.log(res.data.results, "action")
}
}
// }("099a2013a8613039fb9d38bc713d2aa3")

export const searchMoviesAction = (input)=>{
  console.log(input,"from serachact")
  return async dispatch=> {
    const res = await axios.get(`
    https://api.themoviedb.org/3/search/movie?api_key=099a2013a8613039fb9d38bc713d2aa3&language=en-US&query=${input}&page=1&include_adult=false`)
    const searchMovies = await res.data.results
  dispatch({ type:Actiontype.SEARCH_MOVIES, searchMovies });
  console.log(res.data.results, "search action")
}
}

export const selectedMoviesAction = (id)=>{
  console.log(id,"from serachact")
  return async dispatch=> {
    
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=099a2013a8613039fb9d38bc713d2aa3&language=en-US`)
    const selectedMovies = await res.data
  dispatch({ type:Actiontype.SELECTED_MOVIE, selectedMovies });
  // if(res.status===200){
  //   navigate('/movie')
  // }
  console.log(id, "search action")
}
}