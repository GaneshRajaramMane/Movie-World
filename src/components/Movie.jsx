import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../parsial/Loder";
import TopNav from "../parsial/Topnav";
import Dropdwon from "../parsial/Dropdwon";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../parsial/Cards";

function Movie(){
    
    const navigate=useNavigate()
    const [category,setcategory]=useState("now_playing")
    const [movie,setmovie]=useState([])
    const [page, setPage] = useState(1);
    const [hasMore,sethasMore]=useState(true)
    document.title="MovieWorld | Movies" + category.toUpperCase()

    const getmovie=async ()=>{
        try {
            const {data}=await axios.get(`/movie/${category}?page=${page}`);
            
            if(data.results.length > 0){
            setmovie((prevState)=>[...prevState,...data.results])
            setPage((prevPage) => prevPage + 1);
            sethasMore(true)
            }
           else{
            sethasMore(false)
           }
        }  
        catch (error){
           console.log(error) 
        }
       
    }

   const  refreshhandle= ()=>{
    if(movie.length === 0){
        getmovie();
    }
    else{
        setPage(1);
        setmovie([])
        getmovie()
    }
   }

    useEffect(()=>{
        refreshhandle();
    },[category])

    return movie ? (
        <>
        <div className="w-screen h-screen text-white bg-[#1F1E24] ">
            <div className="px-[5%] flex items-center w-full ">
               <h1 className="text-2xl font-bold text-zinc-400">
               <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
               Movie {category}</h1>
               <div className="w-[80%] mx-auto flex items-center">
               <TopNav/>
               <Dropdwon title={'Category'} option={['popular','top_rated','upcoming','now_playing']} func={(e)=>setcategory(e.target.value)}/>
               
              
               </div>
               
            </div>
            
            <InfiniteScroll
            dataLength={movie.length}
            next={getmovie}
            hasMore={hasMore}
            loader={<Loader/>}
            >
            <Card data={movie} title='movie'/>
            </InfiniteScroll>
            
        </div>
        </>
    ):<Loader/>
}
export default Movie