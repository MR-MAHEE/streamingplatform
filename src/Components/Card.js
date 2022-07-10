import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMoviesAction, selectedMoviesAction } from "../Redux/Actions";
import { Link, useNavigate } from 'react-router-dom';
import BgContainer from "./BgContainer";
import ReactPaginate from 'react-paginate'
import player from '../assets/player.png'
import star from '../assets/star.png'
const Card = () => {
  const [id,setId]=useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const allMovies= useSelector(state=>state.allMovies)
 console.log(allMovies)
 console.log(allMovies.id)

 const searchMovies=useSelector(state=>state.searchMovies)
 console.log(searchMovies)


    useEffect(()=>{
     dispatch(allMoviesAction())
    },[])

    const handleClick =(id)=>{
      console.log(id)
     dispatch(selectedMoviesAction(id))
       navigate('/movie')
    }


    const handlePageSubmit=()=>{
            console.log(allMovies)
            
    }

    return (  
<>
<BgContainer/>
        <div>
            <h3 className="text-white ms-5 mt-5">Trending</h3>
        </div>

  {searchMovies ? (
     <div class="row row-cols-1 row-cols-md-4 g-4 m-2">
     {searchMovies&&searchMovies.map((item)=>{
            return(
             
              <div class="card p-0 m-2" style={{width: "19.7rem", height:"16rem",backgroundColor:"#283593"}}>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} style={{height:"70%", width:"100%"}} onClick={()=>{handleClick(item.id)}}/>
          
    <div class="row no-gutters">
      <div class="col-md-8">
        <div className="m-2">
        <div class="" style={{height:"100%%", width:"100%"}}>
          <h6 class="card-title text-white">{item.title}</h6>
          <p class="card-text"><img src={star} class="card-img ms-2" alt="hi" style={{height:"4%", width:"6%"}}/><small class="text-white">4.6/5</small></p>
        </div>
        </div>
      </div>
      <div class="col-md-4 pt-3">
        <div>
        <img src={player} class="card-img ms-2" alt="..." style={{height:"70%", width:"40%"}}/>
      </div>
      </div>
  </div>
  </div>
     )
     })}</div>
  ):(
    <div class="row row-cols-1 row-cols-md-4 g-4 m-2">
    {allMovies&&allMovies.map((item)=>{
           return(
            <div class="card p-0 m-2" style={{width: "19.7rem", height:"16rem",backgroundColor:"#283593"}}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} style={{height:"70%", width:"100%"}} onClick={()=>{handleClick(item.id)}}/>
        
  <div class="row no-gutters">
    <div class="col-md-8">
      <div className="m-2">
      <div class="" style={{height:"100%%", width:"100%"}}>
        <h6 class="card-title text-white">{item.title}</h6>
        <p class="card-text"><img src={star} class="card-img ms-2" alt="hi" style={{height:"4%", width:"6%"}}/><small class="text-white">4.6/5</small></p>
      </div>
      </div>
    </div>
    <div class="col-md-4 pt-3">
      <div>
      <img src={player} class="card-img ms-2" alt="..." style={{height:"70%", width:"40%"}}/>
    </div>
    </div>
</div>
</div>
       
    )
    })}</div>
  )}




  <nav aria-label="Page navigation example p-3">
  <ReactPaginate
previousLabel={'<<'}
nextLabel={`>>`}
pageCount={6}
onPageChange={handlePageSubmit}
containerClassName={'pagination justify-content-center'}
pageClassName={'page-item'}
pageLinkClassName={'page-link'}
previousClassName={'page-item'}
nextClassName={"page-item"}
previousLinkClassName={"page-link"}
nextLinkClassName={"page-link"}
activeClassName={"active"}
/> 
</nav>

</>
    );
}
 
export default Card;