import { useSelector } from "react-redux";
import mask from './mask.jpg'

const BgContainer = () => {

  const allMovies= useSelector(state=>state.allMovies)
  console.log(allMovies)
    return (
        <>

            
          <div className="h-25">     
                <img src={mask} alt={"logo"}style={{height:"10%"}} class="card-img-top"/>
                
          </div>
        
  
        </>
      );
}
 
export default BgContainer;