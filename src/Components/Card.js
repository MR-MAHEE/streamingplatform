import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMoviesAction, selectedMoviesAction } from "../Redux/Actions";
import { Link, useNavigate } from 'react-router-dom';
import BgContainer from "./BgContainer";
import ReactPaginate from 'react-paginate'
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
             
                 <div class="col">
                 <div class="card" style={{height:"80%", backgroundColor:"red"}}>
                 <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} class="card-img-top h-75" alt="..." onClick={()=>{handleClick(item.id);
               }}/>
                 <div class="card-body">
                 <h5 class="card-title">{item.title} 
                 <div>4.6/5</div></h5>
                 <p class="card-text"></p>
            </div>
           </div>
         </div>
     )
     })}</div>
  ):(
    <div class="row row-cols-1 row-cols-md-4 g-4 m-2">
    {allMovies&&allMovies.map((item)=>{
           return(
            
                <div class="col">
                <div class="card" style={{height:"40%", backgroundColor:"red"}}>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                z class="card-img-top h-75" alt="..." onClick={()=>{handleClick(item.id);
              // setMovie_id(item.id);

              // console.log(setMovie_id);
              console.log(item.id)
              }}/>
                <div class="card-body">
                <h5 class="card-title">{item.title} 
                <div>4.6/5</div></h5>
                <p class="card-text"></p>
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